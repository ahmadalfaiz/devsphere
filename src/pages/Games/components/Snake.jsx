import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaPause,
  FaPlay,
  FaRotateRight, FaStaffSnake, FaHandPointUp
} from "react-icons/fa6";
import { IoIosDesktop } from "react-icons/io";
import { FaAppleAlt } from "react-icons/fa";
import { AiFillThunderbolt } from "react-icons/ai";
import { setSEO } from "../../../utils/seo";
import styles from "./Snake.module.css";

/* =========================================================
   GAME CONFIGURATION
========================================================= */

const GAME_MODES = {
  easy: {
    id: "easy",
    label: "Easy",
    size: 16,
    startingSpeed: 155,
    minimumSpeed: 72,
    speedStep: 2.5,
    obstacleStart: Infinity,
  },
  medium: {
    id: "medium",
    label: "Medium",
    size: 20,
    startingSpeed: 125,
    minimumSpeed: 58,
    speedStep: 2.75,
    obstacleStart: Infinity,
  },
  hard: {
    id: "hard",
    label: "Hard",
    size: 24,
    startingSpeed: 100,
    minimumSpeed: 45,
    speedStep: 3,
    obstacleStart: 12,
  },
};

const DIRECTIONS = {
  up: { x: 0, y: -1 },
  down: { x: 0, y: 1 },
  left: { x: -1, y: 0 },
  right: { x: 1, y: 0 },
};

const OPPOSITE_DIRECTION = {
  up: "down",
  down: "up",
  left: "right",
  right: "left",
};

const INITIAL_SNAKE_LENGTH = 3;
const INITIAL_DIRECTION = "right";
const MAX_OBSTACLES = 18;
const OBSTACLE_STEP = 8;
const STORAGE_PREFIX = "devsphere-snake-best-";

/* =========================================================
   GAME HELPERS
========================================================= */

const createInitialSnake = (size) => {
  const centerY = Math.floor(size / 2);
  const startX = Math.floor(size / 2) - 1;

  return Array.from({ length: INITIAL_SNAKE_LENGTH }, (_, index) => ({
    x: startX - index,
    y: centerY,
  }));
};

const isSamePosition = (first, second) =>
  first.x === second.x && first.y === second.y;

const isPositionOnSnake = (position, snake) =>
  snake.some((segment) => isSamePosition(position, segment));

const isPositionOnObstacle = (position, obstacles) =>
  obstacles.some((obstacle) => isSamePosition(position, obstacle));

const getRandomEmptyPosition = (size, snake, obstacles = []) => {
  const availablePositions = [];

  for (let y = 0; y < size; y += 1) {
    for (let x = 0; x < size; x += 1) {
      const position = { x, y };

      if (
        !isPositionOnSnake(position, snake) &&
        !isPositionOnObstacle(position, obstacles)
      ) {
        availablePositions.push(position);
      }
    }
  }

  if (availablePositions.length === 0) {
    return null;
  }

  return availablePositions[
    Math.floor(Math.random() * availablePositions.length)
  ];
};

const createFood = (size, snake, obstacles) =>
  getRandomEmptyPosition(size, snake, obstacles);

const getSpeedForScore = (mode, score) => {
  const reduction = score * mode.speedStep;

  return Math.max(
    mode.minimumSpeed,
    mode.startingSpeed - reduction
  );
};

const getObstacleCountForScore = (score) => {
  if (score < 12) return 0;

  return Math.min(
    MAX_OBSTACLES,
    Math.floor((score - 12) / OBSTACLE_STEP) + 2
  );
};

const createObstacles = (
  size,
  snake,
  food,
  targetCount,
  previousObstacles = []
) => {
  if (targetCount <= 0) {
    return [];
  }

  const obstacles = [...previousObstacles];

  while (obstacles.length < targetCount) {
    const position = getRandomEmptyPosition(
      size,
      snake,
      [...obstacles, ...(food ? [food] : [])]
    );

    if (!position) {
      break;
    }

    obstacles.push(position);
  }

  return obstacles;
};

const getBestScore = (modeId) => {
  if (typeof window === "undefined") {
    return 0;
  }

  try {
    return Number(
      window.localStorage.getItem(`${STORAGE_PREFIX}${modeId}`) || 0
    );
  } catch {
    return 0;
  }
};

const saveBestScore = (modeId, score) => {
  if (typeof window === "undefined") {
    return;
  }

  try {
    window.localStorage.setItem(
      `${STORAGE_PREFIX}${modeId}`,
      String(score)
    );
  } catch {
    // Ignore storage failures.
  }
};

/* =========================================================
   COMPONENT
========================================================= */

function Snake() {
  const [mode, setMode] = useState("easy");
  const currentMode = GAME_MODES[mode];

  const [snake, setSnake] = useState(() =>
    createInitialSnake(GAME_MODES.easy.size)
  );

  const [food, setFood] = useState(() =>
    createFood(
      GAME_MODES.easy.size,
      createInitialSnake(GAME_MODES.easy.size),
      []
    )
  );

  const [obstacles, setObstacles] = useState([]);
  const [direction, setDirection] = useState(INITIAL_DIRECTION);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(() =>
    getBestScore("easy")
  );

  const [gameStarted, setGameStarted] = useState(true);
  const [paused, setPaused] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [won, setWon] = useState(false);

  const directionRef = useRef(INITIAL_DIRECTION);
  const nextDirectionRef = useRef(INITIAL_DIRECTION);

  const snakeRef = useRef(snake);
  const foodRef = useRef(food);
  const obstaclesRef = useRef(obstacles);
  const scoreRef = useRef(score);

  const gameTimerRef = useRef(null);

  const touchStartRef = useRef(null);

  /* =========================================================
     SYNCHRONIZE GAME REFS
  ========================================================= */

  useEffect(() => {
    snakeRef.current = snake;
  }, [snake]);

  useEffect(() => {
    foodRef.current = food;
  }, [food]);

  useEffect(() => {
    obstaclesRef.current = obstacles;
  }, [obstacles]);

  useEffect(() => {
    scoreRef.current = score;
  }, [score]);

  /* =========================================================
     CLEAR GAME TIMER
  ========================================================= */

  const clearGameTimer = useCallback(() => {
    if (gameTimerRef.current) {
      window.clearTimeout(gameTimerRef.current);
      gameTimerRef.current = null;
    }
  }, []);

  /* =========================================================
     START NEW GAME
  ========================================================= */

  const startNewGame = useCallback(
    (selectedMode = mode) => {
      clearGameTimer();

      const selectedConfig = GAME_MODES[selectedMode];
      const initialSnake = createInitialSnake(selectedConfig.size);
      const initialFood = createFood(
        selectedConfig.size,
        initialSnake,
        []
      );

      directionRef.current = INITIAL_DIRECTION;
      nextDirectionRef.current = INITIAL_DIRECTION;

      snakeRef.current = initialSnake;
      foodRef.current = initialFood;
      obstaclesRef.current = [];
      scoreRef.current = 0;

      setSnake(initialSnake);
      setFood(initialFood);
      setObstacles([]);
      setDirection(INITIAL_DIRECTION);
      setScore(0);
      setBestScore(getBestScore(selectedMode));
      setGameStarted(true);
      setPaused(false);
      setGameOver(false);
      setWon(false);
    },
    [clearGameTimer, mode]
  );

  /* =========================================================
     CHANGE MODE
  ========================================================= */

  const changeMode = useCallback(
    (newMode) => {
      setMode(newMode);
      startNewGame(newMode);
    },
    [startNewGame]
  );

  /* =========================================================
     UPDATE BEST SCORE
  ========================================================= */

  const updateBestScore = useCallback(
    (newScore) => {
      if (newScore <= bestScore) {
        return;
      }

      setBestScore(newScore);
      saveBestScore(mode, newScore);
    },
    [bestScore, mode]
  );

  /* =========================================================
     GAME OVER
  ========================================================= */

  const endGame = useCallback(() => {
    clearGameTimer();
    setGameOver(true);
    setPaused(false);
  }, [clearGameTimer]);

  /* =========================================================
     GAME LOOP
  ========================================================= */

  const moveSnake = useCallback(() => {
    if (gameOver || paused || !gameStarted) {
      return;
    }

    const currentSnake = snakeRef.current;
    const currentFood = foodRef.current;
    const currentObstacles = obstaclesRef.current;

    const requestedDirection = nextDirectionRef.current;
    const currentDirection = directionRef.current;

    if (
      requestedDirection !==
      OPPOSITE_DIRECTION[currentDirection]
    ) {
      directionRef.current = requestedDirection;
      setDirection(requestedDirection);
    }

    const activeDirection = directionRef.current;
    const vector = DIRECTIONS[activeDirection];

    const currentHead = currentSnake[0];

    const newHead = {
      x: currentHead.x + vector.x,
      y: currentHead.y + vector.y,
    };

    const outsideBoard =
      newHead.x < 0 ||
      newHead.x >= currentMode.size ||
      newHead.y < 0 ||
      newHead.y >= currentMode.size;

    if (outsideBoard) {
      endGame();
      return;
    }

    const hitsObstacle = isPositionOnObstacle(
      newHead,
      currentObstacles
    );

    if (hitsObstacle) {
      endGame();
      return;
    }

    const isEating =
      currentFood &&
      isSamePosition(newHead, currentFood);

    const bodyToCheck = isEating
      ? currentSnake
      : currentSnake.slice(0, -1);

    if (isPositionOnSnake(newHead, bodyToCheck)) {
      endGame();
      return;
    }

    const nextSnake = [newHead, ...currentSnake];

    if (!isEating) {
      nextSnake.pop();
    }

    let nextScore = scoreRef.current;
    let nextFood = currentFood;
    let nextObstacles = currentObstacles;

    if (isEating) {
      nextScore += 1;

      const desiredObstacleCount =
        currentMode.obstacleStart === Infinity
          ? 0
          : getObstacleCountForScore(nextScore);

      nextObstacles = createObstacles(
        currentMode.size,
        nextSnake,
        null,
        desiredObstacleCount,
        currentObstacles
      );

      nextFood = createFood(
        currentMode.size,
        nextSnake,
        nextObstacles
      );

      scoreRef.current = nextScore;
      foodRef.current = nextFood;
      obstaclesRef.current = nextObstacles;

      setScore(nextScore);
      setFood(nextFood);
      setObstacles(nextObstacles);

      updateBestScore(nextScore);
    }

    snakeRef.current = nextSnake;
    setSnake(nextSnake);

    if (!nextFood) {
      setWon(true);
      setPaused(true);
      clearGameTimer();
      return;
    }

    const nextSpeed = getSpeedForScore(
      currentMode,
      nextScore
    );

    gameTimerRef.current = window.setTimeout(
      moveSnake,
      nextSpeed
    );
  }, [
    clearGameTimer,
    currentMode,
    endGame,
    gameOver,
    gameStarted,
    paused,
    updateBestScore,
  ]);

  /* =========================================================
     GAME LOOP START / RESTART
  ========================================================= */

  useEffect(() => {
    if (
      !gameStarted ||
      paused ||
      gameOver ||
      won
    ) {
      clearGameTimer();
      return undefined;
    }

    clearGameTimer();

    gameTimerRef.current = window.setTimeout(
      moveSnake,
      getSpeedForScore(currentMode, score)
    );

    return clearGameTimer;
  }, [
    clearGameTimer,
    currentMode,
    gameOver,
    gameStarted,
    moveSnake,
    paused,
    score,
    won,
  ]);

  /* =========================================================
     CLEANUP
  ========================================================= */

  useEffect(() => {
    return () => {
      clearGameTimer();
    };
  }, [clearGameTimer]);

  /* =========================================================
     CHANGE DIRECTION
  ========================================================= */

  const changeDirection = useCallback((newDirection) => {
    const currentDirection = directionRef.current;

    if (
      newDirection ===
      OPPOSITE_DIRECTION[currentDirection]
    ) {
      return;
    }

    nextDirectionRef.current = newDirection;
  }, []);

  /* =========================================================
     KEYBOARD CONTROLS
  ========================================================= */

  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key.toLowerCase();

      const keyDirectionMap = {
        arrowup: "up",
        w: "up",
        arrowdown: "down",
        s: "down",
        arrowleft: "left",
        a: "left",
        arrowright: "right",
        d: "right",
      };

      if (keyDirectionMap[key]) {
        event.preventDefault();

        if (!gameOver && !won) {
          changeDirection(keyDirectionMap[key]);
        }

        return;
      }

      if (key === " " || key === "p") {
        event.preventDefault();

        if (!gameOver && !won) {
          setPaused((currentPaused) => !currentPaused);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [changeDirection, gameOver, won]);

  /* =========================================================
     TOUCH / SWIPE CONTROLS
  ========================================================= */

  const handleTouchStart = useCallback((event) => {
    const touch = event.touches[0];

    touchStartRef.current = {
      x: touch.clientX,
      y: touch.clientY,
    };
  }, []);

  const handleTouchEnd = useCallback(
    (event) => {
      if (!touchStartRef.current) {
        return;
      }

      const touch = event.changedTouches[0];

      const deltaX =
        touch.clientX - touchStartRef.current.x;

      const deltaY =
        touch.clientY - touchStartRef.current.y;

      touchStartRef.current = null;

      const minimumSwipeDistance = 35;

      if (
        Math.abs(deltaX) < minimumSwipeDistance &&
        Math.abs(deltaY) < minimumSwipeDistance
      ) {
        return;
      }

      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        changeDirection(deltaX > 0 ? "right" : "left");
      } else {
        changeDirection(deltaY > 0 ? "down" : "up");
      }
    },
    [changeDirection]
  );

  /* =========================================================
     PAUSE / RESUME
  ========================================================= */

  const togglePause = useCallback(() => {
    if (gameOver || won) {
      return;
    }

    setPaused((currentPaused) => !currentPaused);
  }, [gameOver, won]);

  /* =========================================================
     DERIVED VALUES
  ========================================================= */

  const progressToNextObstacle =
    currentMode.obstacleStart === Infinity
      ? null
      : Math.max(
          0,
          currentMode.obstacleStart - score
        );

  const currentSpeed = getSpeedForScore(
    currentMode,
    score
  );

  const directionLabel =
    direction.charAt(0).toUpperCase() +
    direction.slice(1);

  /* =======================================================
    SEO
  ======================================================= */
  useEffect(() => {
    setSEO({
      title: "Snake - DevSphere",
      description:
        "Play Snake on DevSphere. Control the snake to eat food and grow longer without hitting the walls or itself.",
      keywords:
        "Snake, arcade game, online game, strategy game, DevSphere Snake, DevSphere games, play Snake online, free Snake game",
      url: "/games/snake",
    });
  }, []);

  /* =========================================================
     RENDER
  ========================================================= */

  return (
    <main className={styles.snakePage}>
      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className={styles.snakeHeader}>
        <div className={styles.headerContent}>
          <Link
            to="/games"
            className={styles.backLink}
          >
            <FaArrowLeft aria-hidden="true" />
            <span>Back to Games</span>
          </Link>

          <div className={styles.headerLabel}>
            Arcade Game
          </div>

          <h1 className={styles.snakeTitle}>
            Snake
          </h1>

          <p className={styles.snakeSubtitle}>
            Grow your snake, survive the board, and beat
            your highest score.
          </p>
        </div>
      </header>

      {/* =====================================================
          GAME SECTION
      ===================================================== */}

      <section className={styles.snakeSection}>
        <div className={styles.snakeContainer}>
          {/* =================================================
              TOP BAR
          ================================================= */}

          <div className={styles.gameTopBar}>
            <div className={styles.gameStats}>
              <div className={styles.statItem}>
                <span className={styles.statLabel}>
                  Score
                </span>
                <strong className={styles.statValue}>
                  {score}
                </strong>
              </div>

              <div className={styles.statDivider} />

              <div className={styles.statItem}>
                <span className={styles.statLabel}>
                  Best
                </span>
                <strong className={styles.statValue}>
                  {bestScore}
                </strong>
              </div>

              <div className={styles.statDivider} />

              <div className={styles.statItem}>
                <span className={styles.statLabel}>
                  Length
                </span>
                <strong className={styles.statValue}>
                  {snake.length}
                </strong>
              </div>
            </div>

            <div className={styles.gameActions}>
              <button
                type="button"
                className={styles.actionButton}
                onClick={togglePause}
                disabled={gameOver || won}
                aria-label={
                  paused
                    ? "Resume game"
                    : "Pause game"
                }
              >
                {paused ? (
                  <FaPlay aria-hidden="true" />
                ) : (
                  <FaPause aria-hidden="true" />
                )}
                <span>
                  {paused ? "Resume" : "Pause"}
                </span>
              </button>

              <button
                type="button"
                className={styles.newGameButton}
                onClick={() => startNewGame()}
              >
                <FaRotateRight aria-hidden="true" />
                <span>New Game</span>
              </button>
            </div>
          </div>

          {/* =================================================
              MODE SELECTOR
          ================================================= */}

          <div className={styles.modeSelector}>
            <div className={styles.modeHeading}>
              <span>Difficulty</span>
              <span className={styles.modeHint}>
                {currentMode.size}×{currentMode.size} board
              </span>
            </div>

            <div
              className={styles.modeButtons}
              role="group"
              aria-label="Snake difficulty"
            >
              {Object.values(GAME_MODES).map((gameMode) => (
                <button
                  key={gameMode.id}
                  type="button"
                  className={`${styles.modeButton} ${
                    mode === gameMode.id
                      ? styles.modeButtonActive
                      : ""
                  }`}
                  onClick={() =>
                    changeMode(gameMode.id)
                  }
                  aria-pressed={
                    mode === gameMode.id
                  }
                >
                  <span>{gameMode.label}</span>
                  <small>
                    {gameMode.size}×{gameMode.size}
                  </small>
                </button>
              ))}
            </div>
          </div>

          {/* =================================================
              BOARD
          ================================================= */}

          <div className={styles.boardArea}>
            <div
              className={`${styles.snakeBoard} ${
                paused
                  ? styles.boardPaused
                  : ""
              } ${
                gameOver
                  ? styles.boardGameOver
                  : ""
              } ${
                won
                  ? styles.boardWon
                  : ""
              }`}
              style={{
                "--board-size": currentMode.size,
              }}
              role="application"
              aria-label={`Snake game board, ${currentMode.size} by ${currentMode.size}`}
              tabIndex={0}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {/* =============================================
                  BOARD CELLS
              ============================================= */}

              <div
                className={styles.boardGrid}
                aria-hidden="true"
              >
                {Array.from(
                  {
                    length:
                      currentMode.size *
                      currentMode.size,
                  },
                  (_, index) => (
                    <div
                      key={index}
                      className={styles.boardCell}
                    />
                  )
                )}
              </div>

              {/* =============================================
                  OBSTACLES
              ============================================= */}

              <div
                className={styles.obstacleLayer}
                aria-hidden="true"
              >
                {obstacles.map((obstacle) => (
                  <div
                    key={`${obstacle.x}-${obstacle.y}`}
                    className={styles.obstacle}
                    style={{
                      "--obstacle-x": obstacle.x,
                      "--obstacle-y": obstacle.y,
                    }}
                  />
                ))}
              </div>

              {/* =============================================
                  FOOD
              ============================================= */}

              {food && (
                <div
                  className={styles.food}
                  style={{
                    "--food-x": food.x,
                    "--food-y": food.y,
                  }}
                  aria-label="Food"
                >
                  <span
                    className={styles.foodCore}
                    aria-hidden="true"
                  />
                </div>
              )}

              {/* =============================================
                  SNAKE
              ============================================= */}

              {/*<div
                className={styles.snakeLayer}
                aria-hidden="true"
              >
                {snake.map((segment, index) => (
                  <div
                    key={`${segment.x}-${segment.y}-${index}`}
                    className={`${styles.snakeSegment} ${
                      index === 0
                        ? styles.snakeHead
                        : styles.snakeBody
                    }`}
                    style={{
                      "--segment-x": segment.x,
                      "--segment-y": segment.y,
                    }}
                  >
                    {index === 0 && (
                      <span
                        className={`${styles.snakeEye} ${styles.snakeEyeOne}`}
                      />
                    )}

                    {index === 0 && (
                      <span
                        className={`${styles.snakeEye} ${styles.snakeEyeTwo}`}
                      />
                    )}
                  </div>
                ))}
              </div>*/}

              <div
  className={styles.snakeLayer}
  aria-hidden="true"
>
  {snake.map((segment, index) => {
    const isHead = index === 0;

    return (
      <div
        key={`${segment.x}-${segment.y}-${index}`}
        className={`${styles.snakeSegment} ${
          isHead
            ? styles.snakeHead
            : styles.snakeBody
        }`}
        style={{
          "--segment-x": segment.x,
          "--segment-y": segment.y,
        }}
      >
        {isHead && (
          <>
            <span
              className={`${styles.snakeEye} ${styles.snakeEyeOne}`}
            />
            <span
              className={`${styles.snakeEye} ${styles.snakeEyeTwo}`}
            />
          </>
        )}
      </div>
    );
  })}
</div>

              {/* =============================================
                  PAUSE OVERLAY
              ============================================= */}

              {paused && !gameOver && !won && (
                <div className={styles.boardOverlay}>
                  <div className={styles.overlayCard}>
                    <div
                      className={styles.overlayIcon}
                      aria-hidden="true"
                    >
                      <FaPlay />
                    </div>

                    <h2>Game Paused</h2>

                    <p>
                      Take a moment, then continue your run.
                    </p>

                    <button
                      type="button"
                      className={styles.overlayButton}
                      onClick={togglePause}
                    >
                      <FaPlay aria-hidden="true" />
                      Resume Game
                    </button>
                  </div>
                </div>
              )}

              {/* =============================================
                  GAME OVER OVERLAY
              ============================================= */}

              {gameOver && (
                <div className={styles.boardOverlay}>
                  <div className={styles.overlayCard}>
                    <div
                      className={styles.overlayIcon}
                      aria-hidden="true"
                    >
                      <FaStaffSnake />
                    </div>

                    <h2>Game Over</h2>

                    <p>
                      Your snake couldn't survive this run.
                    </p>

                    <div className={styles.finalStats}>
                      <div>
                        <span>Score</span>
                        <strong>{score}</strong>
                      </div>

                      <div>
                        <span>Best</span>
                        <strong>{bestScore}</strong>
                      </div>
                    </div>

                    <button
                      type="button"
                      className={styles.overlayButton}
                      onClick={() => startNewGame()}
                    >
                      <FaRotateRight aria-hidden="true" />
                      Play Again
                    </button>
                  </div>
                </div>
              )}

              {/* =============================================
                  PERFECT CLEAR / WIN STATE
              ============================================= */}

              {won && (
                <div className={styles.boardOverlay}>
                  <div className={styles.overlayCard}>
                    <div
                      className={styles.overlayIcon}
                      aria-hidden="true"
                    >
                      🏆
                    </div>

                    <h2>Board Cleared!</h2>

                    <p>
                      You filled every available space.
                    </p>

                    <div className={styles.finalStats}>
                      <div>
                        <span>Score</span>
                        <strong>{score}</strong>
                      </div>

                      <div>
                        <span>Best</span>
                        <strong>{bestScore}</strong>
                      </div>
                    </div>

                    <button
                      type="button"
                      className={styles.overlayButton}
                      onClick={() => startNewGame()}
                    >
                      <FaRotateRight aria-hidden="true" />
                      New Game
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* =================================================
              GAME STATUS
          ================================================= */}

          <div className={styles.gameStatus}>
            <div className={styles.statusItem}>
              <span className={styles.statusLabel}>
                Direction
              </span>
              <strong>{directionLabel}</strong>
            </div>

            <div className={styles.statusItem}>
              <span className={styles.statusLabel}>
                Speed
              </span>
              <strong>{Math.round(currentSpeed)} ms</strong>
            </div>

            {currentMode.obstacleStart !== Infinity && (
              <div className={styles.statusItem}>
                <span className={styles.statusLabel}>
                  Obstacles
                </span>
                <strong>
                  {obstacles.length}
                </strong>
              </div>
            )}

            {progressToNextObstacle !== null &&
              progressToNextObstacle > 0 && (
                <div className={styles.statusMessage}>
                  {progressToNextObstacle === 1
                    ? "Next obstacle after 1 more food"
                    : `Next obstacles after ${progressToNextObstacle} more food`}
                </div>
              )}
          </div>

          {/* =================================================
              CONTROLS / INSTRUCTIONS
          ================================================= */}

          <div className={styles.instructions}>
            <div className={styles.instructionsHeader}>
              <h2>How to play</h2>
              <p>
                Keep moving, collect food, and survive as
                long as possible.
              </p>
            </div>

            <div className={styles.instructionGrid}>
              <div className={styles.instructionCard}>
                <div
                  className={styles.instructionIcon}
                  aria-hidden="true"
                >
                  <IoIosDesktop />
                </div>

                <div>
                  <h3>Desktop</h3>
                  <p>
                    Use Arrow Keys or W, A, S, D to change
                    direction.
                  </p>
                </div>
              </div>

              <div className={styles.instructionCard}>
                <div
                  className={styles.instructionIcon}
                  aria-hidden="true"
                >
                  <FaHandPointUp />
                </div>

                <div>
                  <h3>Mobile</h3>
                  <p>
                    Swipe in any direction to move the
                    snake.
                  </p>
                </div>
              </div>

              <div className={styles.instructionCard}>
                <div
                  className={styles.instructionIcon}
                  aria-hidden="true"
                >
                  <FaAppleAlt />
                </div>

                <div>
                  <h3>Eat & Grow</h3>
                  <p>
                    Each food gives you one point and adds
                    another segment.
                  </p>
                </div>
              </div>

              <div className={styles.instructionCard}>
                <div
                  className={styles.instructionIcon}
                  aria-hidden="true"
                >
                  <AiFillThunderbolt />
                </div>

                <div>
                  <h3>Stay Sharp</h3>
                  <p>
                    Your snake gets faster as your score
                    increases.
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.rules}>
              <span>
                <strong>Wall hit</strong> = Game Over
              </span>

              <span>
                <strong>Self collision</strong> = Game Over
              </span>

              {currentMode.obstacleStart !== Infinity && (
                <span>
                  <strong>Obstacles</strong> appear as your
                  score increases
                </span>
              )}
            </div>
          </div>

          {/* =================================================
              BOTTOM ACTION
          ================================================= */}

          <div className={styles.bottomActions}>
            <button
              type="button"
              className={styles.bottomNewGame}
              onClick={() => startNewGame()}
            >
              <FaRotateRight aria-hidden="true" />
              New Game
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Snake;