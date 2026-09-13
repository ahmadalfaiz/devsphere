import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRotateRight, FaCrown } from "react-icons/fa6";
import { setSEO } from "../../../utils/seo";
import styles from "./Kingdom.module.css";

import k1 from "../../../assets/games/kingdom/k1.webp";
import k2 from "../../../assets/games/kingdom/k2.webp";
import k3 from "../../../assets/games/kingdom/k3.webp";
import k4 from "../../../assets/games/kingdom/k4.webp";
import k5 from "../../../assets/games/kingdom/k5.webp";
import k6 from "../../../assets/games/kingdom/k6.webp";
import k7 from "../../../assets/games/kingdom/k7.webp";
import k8 from "../../../assets/games/kingdom/k8.webp";
import k9 from "../../../assets/games/kingdom/k9.webp";
import k10 from "../../../assets/games/kingdom/k10.webp";
import k11 from "../../../assets/games/kingdom/k11.webp";
import k12 from "../../../assets/games/kingdom/k12.webp";
import k13 from "../../../assets/games/kingdom/k13.webp";
import k14 from "../../../assets/games/kingdom/k14.webp";
import k15 from "../../../assets/games/kingdom/k15.webp";

const GAME_MODES = {
  easy: {
    id: "easy",
    label: "Easy",
    size: 4,
    target: 2048,
  },
  medium: {
    id: "medium",
    label: "Medium",
    size: 5,
    target: 8192,
  },
  hard: {
    id: "hard",
    label: "Hard",
    size: 6,
    target: 32768,
  },
};

const BUILDING_IMAGES_BY_LEVEL = {
  1: k1,
  2: k2,
  3: k3,
  4: k4,
  5: k5,
  6: k6,
  7: k7,
  8: k8,
  9: k9,
  10: k10,
  11: k11,
  12: k12,
  13: k13,
  14: k14,
  15: k15,
};

const MOVE_DURATION = 170;
const MOVE_LOCK_DURATION = 190;

let tileIdCounter = 0;

const getNextTileId = () => {
  tileIdCounter += 1;
  return tileIdCounter;
};

const createTile = (value, row, col) => ({
  id: getNextTileId(),
  value,
  row,
  col,
});

const createEmptyBoard = (size) =>
  Array.from({ length: size }, () => Array(size).fill(0));

const getEmptyPositions = (tiles, size) => {
  const occupied = new Set(
    tiles.map((tile) => `${tile.row}-${tile.col}`)
  );

  const empty = [];

  for (let row = 0; row < size; row += 1) {
    for (let col = 0; col < size; col += 1) {
      if (!occupied.has(`${row}-${col}`)) {
        empty.push({ row, col });
      }
    }
  }

  return empty;
};

const addRandomBuilding = (tiles, size) => {
  const emptyPositions = getEmptyPositions(tiles, size);

  if (!emptyPositions.length) {
    return tiles;
  }

  const position =
    emptyPositions[Math.floor(Math.random() * emptyPositions.length)];

  const value = Math.random() < 0.9 ? 2 : 4;

  return [
    ...tiles,
    createTile(value, position.row, position.col),
  ];
};

const createInitialTiles = (size) => {
  let tiles = [];

  tiles = addRandomBuilding(tiles, size);
  tiles = addRandomBuilding(tiles, size);

  return tiles;
};

const tilesToBoard = (tiles, size) => {
  const board = createEmptyBoard(size);

  tiles.forEach((tile) => {
    if (
      tile.row >= 0 &&
      tile.row < size &&
      tile.col >= 0 &&
      tile.col < size
    ) {
      board[tile.row][tile.col] = tile.value;
    }
  });

  return board;
};

const getBuildingImage = (value) => {
  if (!value) {
    return null;
  }

  const level = Math.min(15, Math.max(1, Math.log2(value)));

  return BUILDING_IMAGES_BY_LEVEL[level];
};

const getHighestTile = (tiles) =>
  tiles.reduce(
    (highest, tile) => Math.max(highest, tile.value),
    0
  );

const hasReachedTarget = (tiles, target) =>
  tiles.some((tile) => tile.value >= target);

const canMove = (board) => {
  const size = board.length;

  for (let row = 0; row < size; row += 1) {
    for (let col = 0; col < size; col += 1) {
      const value = board[row][col];

      if (!value) {
        return true;
      }

      if (
        col + 1 < size &&
        board[row][col + 1] === value
      ) {
        return true;
      }

      if (
        row + 1 < size &&
        board[row + 1][col] === value
      ) {
        return true;
      }
    }
  }

  return false;
};

const calculateMove = (tiles, size, direction) => {
  const resultTiles = [];
  const visualMoves = [];
  const mergedResultIds = [];

  let scoreGained = 0;

  const lines = [];

  if (direction === "left" || direction === "right") {
    for (let row = 0; row < size; row += 1) {
      const lineTiles = tiles
        .filter((tile) => tile.row === row)
        .sort((a, b) =>
          direction === "left"
            ? a.col - b.col
            : b.col - a.col
        );

      lines.push(lineTiles);
    }
  } else {
    for (let col = 0; col < size; col += 1) {
      const lineTiles = tiles
        .filter((tile) => tile.col === col)
        .sort((a, b) =>
          direction === "up"
            ? a.row - b.row
            : b.row - a.row
        );

      lines.push(lineTiles);
    }
  }

  lines.forEach((lineTiles) => {
    let writeIndex = 0;

    for (let i = 0; i < lineTiles.length; i += 1) {
      const current = lineTiles[i];
      const next = lineTiles[i + 1];

      let targetRow;
      let targetCol;

      if (direction === "left") {
        targetRow = current.row;
        targetCol = writeIndex;
      } else if (direction === "right") {
        targetRow = current.row;
        targetCol = size - 1 - writeIndex;
      } else if (direction === "up") {
        targetRow = writeIndex;
        targetCol = current.col;
      } else {
        targetRow = size - 1 - writeIndex;
        targetCol = current.col;
      }

      if (next && current.value === next.value) {
        resultTiles.push({
          ...current,
          value: current.value * 2,
          row: targetRow,
          col: targetCol,
        });

        visualMoves.push({
          id: current.id,
          value: current.value,
          fromRow: current.row,
          fromCol: current.col,
          toRow: targetRow,
          toCol: targetCol,
          isMergeSource: true,
        });

        visualMoves.push({
          id: next.id,
          value: next.value,
          fromRow: next.row,
          fromCol: next.col,
          toRow: targetRow,
          toCol: targetCol,
          isMergeSource: true,
        });

        mergedResultIds.push(current.id);

        scoreGained += current.value * 2;

        i += 1;
        writeIndex += 1;
      } else {
        resultTiles.push({
          ...current,
          row: targetRow,
          col: targetCol,
        });

        visualMoves.push({
          id: current.id,
          value: current.value,
          fromRow: current.row,
          fromCol: current.col,
          toRow: targetRow,
          toCol: targetCol,
          isMergeSource: false,
        });

        writeIndex += 1;
      }
    }
  });

  const oldById = new Map(
    tiles.map((tile) => [tile.id, tile])
  );

  const moved =
    resultTiles.length !== tiles.length ||
    resultTiles.some((tile) => {
      const oldTile = oldById.get(tile.id);

      if (!oldTile) {
        return true;
      }

      return (
        oldTile.row !== tile.row ||
        oldTile.col !== tile.col ||
        oldTile.value !== tile.value
      );
    });

  return {
    moved,
    tiles: resultTiles,
    visualMoves,
    mergedResultIds,
    scoreGained,
  };
};

const getTilePitch = (tileLayer, size) => {
  if (!tileLayer) {
    return 0;
  }

  const computedStyle = window.getComputedStyle(tileLayer);

  const gap =
    parseFloat(computedStyle.columnGap || computedStyle.gap) || 0;

  const width = tileLayer.clientWidth;

  if (!width) {
    return 0;
  }

  const cellSize =
    (width - gap * (size - 1)) / size;

  return cellSize + gap;
};

function Kingdom() {
  const initialTilesRef = useRef(null);

  if (!initialTilesRef.current) {
    initialTilesRef.current = createInitialTiles(
      GAME_MODES.easy.size
    );
  }

  const [mode, setMode] = useState("easy");

  const [tiles, setTiles] = useState(
    initialTilesRef.current
  );

  const [displayTiles, setDisplayTiles] = useState(
    initialTilesRef.current
  );

  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [targetReached, setTargetReached] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const touchStartRef = useRef(null);
  const tileLayerRef = useRef(null);
  const animationTimerRef = useRef(null);
  const animationSequenceRef = useRef(0);
  const moveLockRef = useRef(false);

  const currentMode = GAME_MODES[mode];

  useEffect(() => {
    const storedBest =
      Number(
        localStorage.getItem(
          `devsphere-kingdom-best-${currentMode.size}`
        )
      ) || 0;

    setBestScore(storedBest);
  }, [currentMode.size]);

  useEffect(() => {
    return () => {
      if (animationTimerRef.current) {
        clearTimeout(animationTimerRef.current);
      }
    };
  }, []);

  const startNewGame = useCallback(() => {
    if (animationTimerRef.current) {
      clearTimeout(animationTimerRef.current);
    }

    animationSequenceRef.current += 1;
    moveLockRef.current = false;

    const newTiles = createInitialTiles(
      currentMode.size
    );

    setTiles(newTiles);
    setDisplayTiles(newTiles);
    setScore(0);
    setTargetReached(false);
    setGameOver(false);
  }, [currentMode.size]);

  const changeMode = useCallback((nextMode) => {
    if (animationTimerRef.current) {
      clearTimeout(animationTimerRef.current);
    }

    animationSequenceRef.current += 1;
    moveLockRef.current = false;

    const newTiles = createInitialTiles(
      GAME_MODES[nextMode].size
    );

    setMode(nextMode);
    setTiles(newTiles);
    setDisplayTiles(newTiles);
    setScore(0);
    setTargetReached(false);
    setGameOver(false);
  }, []);

  const handleMove = useCallback(
    (direction) => {
      if (gameOver || moveLockRef.current) {
        return;
      }

      const size = currentMode.size;

      const result = calculateMove(
        tiles,
        size,
        direction
      );

      if (!result.moved) {
        const board = tilesToBoard(tiles, size);

        if (!canMove(board)) {
          setGameOver(true);
        }

        return;
      }

      moveLockRef.current = true;

      const sequence =
        animationSequenceRef.current + 1;

      animationSequenceRef.current = sequence;

      const pitch = getTilePitch(
        tileLayerRef.current,
        size
      );

      /*
       * IMPORTANT:
       *
       * These visual tiles remain at their original values
       * while moving.
       *
       * For a merge, both buildings move toward the same
       * destination cell. The bigger building does NOT
       * appear until the movement animation has finished.
       */
      const movingDisplayTiles =
        result.visualMoves.map((move) => ({
          id: move.id,
          value: move.value,
          row: move.toRow,
          col: move.toCol,

          moveX:
            (move.fromCol - move.toCol) * pitch,

          moveY:
            (move.fromRow - move.toRow) * pitch,

          isMoving:
            move.fromRow !== move.toRow ||
            move.fromCol !== move.toCol,

          isMergeSource: move.isMergeSource,

          renderKey: `${move.id}-move-${sequence}`,
        }));

      /*
       * Spawn the new random building in the logical board
       * immediately, but don't visually show it until the
       * movement animation finishes.
       */
      const nextTiles = addRandomBuilding(
        result.tiles,
        size
      );

      const newTile =
        nextTiles.length > result.tiles.length
          ? nextTiles[nextTiles.length - 1]
          : null;

      setTiles(nextTiles);
      setDisplayTiles(movingDisplayTiles);

      const nextScore =
        score + result.scoreGained;

      setScore(nextScore);

      if (nextScore > bestScore) {
        setBestScore(nextScore);

        localStorage.setItem(
          `devsphere-kingdom-best-${size}`,
          String(nextScore)
        );
      }

      if (
        hasReachedTarget(
          nextTiles,
          currentMode.target
        )
      ) {
        setTargetReached(true);
      }

      const nextBoard =
        tilesToBoard(nextTiles, size);

      if (!canMove(nextBoard)) {
        setGameOver(true);
      }

      if (animationTimerRef.current) {
        clearTimeout(animationTimerRef.current);
      }

      animationTimerRef.current = setTimeout(() => {
        if (
          sequence !== animationSequenceRef.current
        ) {
          return;
        }

        /*
         * Now replace the moving source buildings with
         * the actual logical result.
         *
         * The merged result gets the golden animation.
         * The newly spawned building gets the subtle
         * spawn animation.
         */
        const finalDisplayTiles = nextTiles.map(
          (tile) => ({
            ...tile,

            isNewVisual:
              newTile?.id === tile.id,

            isMergeVisual:
              result.mergedResultIds.includes(
                tile.id
              ),

            renderKey: tile.id,
          })
        );

        setDisplayTiles(finalDisplayTiles);

        moveLockRef.current = false;
      }, MOVE_DURATION);

      /*
       * Safety unlock in case the browser throttles
       * animation timers.
       */
      setTimeout(() => {
        if (
          sequence === animationSequenceRef.current
        ) {
          moveLockRef.current = false;
        }
      }, MOVE_LOCK_DURATION);
    },
    [
      gameOver,
      currentMode.size,
      currentMode.target,
      tiles,
      score,
      bestScore,
    ]
  );

  useEffect(() => {
    const handleKeyDown = (event) => {
      const directionMap = {
        ArrowLeft: "left",
        ArrowRight: "right",
        ArrowUp: "up",
        ArrowDown: "down",
      };

      const direction =
        directionMap[event.key];

      if (!direction) {
        return;
      }

      event.preventDefault();

      handleMove(direction);
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [handleMove]);

  const handleTouchStart = (event) => {
    const touch = event.touches[0];

    touchStartRef.current = {
      x: touch.clientX,
      y: touch.clientY,
    };
  };

  const handleTouchEnd = (event) => {
    if (!touchStartRef.current) {
      return;
    }

    const touch = event.changedTouches[0];

    const deltaX =
      touch.clientX - touchStartRef.current.x;

    const deltaY =
      touch.clientY - touchStartRef.current.y;

    touchStartRef.current = null;

    const absX = Math.abs(deltaX);
    const absY = Math.abs(deltaY);

    if (Math.max(absX, absY) < 35) {
      return;
    }

    if (absX > absY) {
      handleMove(
        deltaX > 0 ? "right" : "left"
      );
    } else {
      handleMove(
        deltaY > 0 ? "down" : "up"
      );
    }
  };

  const highestTile = getHighestTile(tiles);

  const targetLevel =
    Math.log2(currentMode.target);

  const highestLevel = highestTile
    ? Math.log2(highestTile)
    : 0;

  const progressPercentage = Math.min(
    100,
    Math.round(
      (highestLevel / targetLevel) * 100
    )
  );

  /* =======================================================
       SEO
    ======================================================= */
  
  useEffect(() => {
    setSEO({
      title: "Kingdom - DevSphere",
      description:
        "Play Kingdom on DevSphere. Merge matching buildings, grow your kingdom, and see how far you can build.",
      keywords:
        "Kingdom, building game, strategy game, online game, build your kingdom, merge cells, DevSphere Kingdom, DevSphere games",
      url: "/games/kingdom",
    });
  }, []);

  return (
    <main className={styles.kingdomPage}>
      <header className={styles.kingdomHeader}>
        <div className={styles.headerContent}>
          <Link
            to="/games"
            className={styles.backLink}
          >
            <FaArrowLeft />
            <span>Back to Games</span>
          </Link>

          <div className={styles.headerLabel}>
            KINGDOM
          </div>

          <h1 className={styles.kingdomTitle}>
            Kingdom
          </h1>

          <p className={styles.kingdomSubtitle}>
            Merge matching buildings, grow your
            kingdom, and see how far you can build.
          </p>
        </div>
      </header>

      <section className={styles.gameSection}>
        <div className={styles.gameContainer}>
          <div className={styles.modeSelector}>
            <div className={styles.modeHeading}>
              <div>
                <span className={styles.modeTitle}>
                  Choose Your Kingdom
                </span>

                <span className={styles.modeDescription}>
                  Each board offers a different
                  challenge.
                </span>
              </div>
            </div>

            <div className={styles.modeButtons}>
              {Object.values(GAME_MODES).map(
                (gameMode) => (
                  <button
                    key={gameMode.id}
                    type="button"
                    className={`${styles.modeButton} ${
                      mode === gameMode.id
                        ? styles.activeMode
                        : ""
                    }`}
                    onClick={() =>
                      changeMode(gameMode.id)
                    }
                  >
                    <span
                      className={
                        styles.modeButtonLabel
                      }
                    >
                      {gameMode.label}
                    </span>

                    <span
                      className={
                        styles.modeButtonMeta
                      }
                    >
                      {gameMode.size} ×{" "}
                      {gameMode.size} · Target{" "}
                      {gameMode.target.toLocaleString()}
                    </span>
                  </button>
                )
              )}
            </div>
          </div>

          <div className={styles.gameTopBar}>
            <div className={styles.statGroup}>
              <div className={styles.statCard}>
                <span className={styles.statLabel}>
                  Score
                </span>
                <strong className={styles.statValue}>
                  {score.toLocaleString()}
                </strong>
              </div>

              <div className={styles.statCard}>
                <span className={styles.statLabel}>
                  Best
                </span>
                <strong className={styles.statValue}>
                  {bestScore.toLocaleString()}
                </strong>
              </div>

              <div className={styles.statCard}>
                <span className={styles.statLabel}>
                  Highest
                </span>
                <strong className={styles.statValue}>
                  {highestTile.toLocaleString()}
                </strong>
              </div>

              <div className={styles.statCard}>
                <span className={styles.statLabel}>
                  Target
                </span>
                <strong className={styles.statValue}>
                  {currentMode.target.toLocaleString()}
                </strong>
              </div>
            </div>

            <button
              type="button"
              className={styles.newGameButton}
              onClick={startNewGame}
            >
              <FaArrowRotateRight />
              New Game
            </button>
          </div>

          <div className={styles.progressCard}>
            <div className={styles.progressHeader}>
              <div>
                <span
                  className={styles.progressLabel}
                >
                  Kingdom Progress
                </span>

                <span
                  className={styles.progressText}
                >
                  {highestTile > 0 ? highestTile : 0} /{" "} {/* new added just line this is only */}
                  Target:{" "}
                  {currentMode.target.toLocaleString()}
                </span>
              </div>

              <span
                className={
                  styles.progressPercentage
                }
              >
                {progressPercentage}%
              </span>
            </div>

            <div className={styles.progressTrack}>
              <div
                className={styles.progressBar}
                style={{
                  width: `${progressPercentage}%`,
                }}
              />
            </div>
          </div>

          {targetReached && (
            <div
              className={styles.successMessage}
              role="status"
            >
              <FaCrown />

              <div>
                <strong>
                  Kingdom milestone reached!
                </strong>

                <span>
                  You reached{" "}
                  {currentMode.target.toLocaleString()}.
                  Keep building for a higher score.
                </span>
              </div>
            </div>
          )}

          {gameOver && (
            <div
              className={styles.gameOverMessage}
              role="status"
            >
              <div>
                <strong>
                  No more moves!
                </strong>

                <span>
                  Your kingdom can no longer grow.
                </span>
              </div>

              <button
                type="button"
                className={
                  styles.restartMessageButton
                }
                onClick={startNewGame}
              >
                Try Again
              </button>
            </div>
          )}

          <div className={styles.boardArea}>
            <div
              className={`${styles.board} ${
                styles[`board${currentMode.size}`]
              }`}
              role="application"
              aria-label={`${currentMode.label} Kingdom board`}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {Array.from({
                length:
                  currentMode.size *
                  currentMode.size,
              }).map((_, index) => (
                <div
                  key={`cell-${index}`}
                  className={`${styles.cell} ${styles.emptyCell}`}
                  aria-hidden="true"
                />
              ))}

              <div
                ref={tileLayerRef}
                className={styles.tileLayer}
                style={{
                  "--board-size":
                    currentMode.size,
                }}
              >
                {displayTiles.map((tile) => {
                  const image =
                    getBuildingImage(tile.value);

                  return (
                    <div
                      key={
                        tile.renderKey ??
                        tile.id
                      }
                      className={`${styles.tile} ${
                        tile.isMoving
                          ? styles.tileMoving
                          : ""
                      }`}
                      style={{
                        gridRow: tile.row + 1,
                        gridColumn: tile.col + 1,
                        "--move-x": `${tile.moveX ?? 0}px`,
                        "--move-y": `${tile.moveY ?? 0}px`,
                      }}
                    >
                      <img
                        src={image}
                        alt={`Kingdom building ${tile.value}`}
                        className={`${styles.buildingImage} ${
                          tile.isNewVisual
                            ? styles.tileImageNew
                            : ""
                        } ${
                          tile.isMergeVisual
                            ? styles.tileImageMerged
                            : ""
                        }`}
                        draggable="false"
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            {/*<div className={styles.controlsHint}>
              <div
                className={
                  styles.desktopControls
                }
              >
                <span
                  className={styles.controlTitle}
                >
                  Use your arrow keys to build
                </span>

                <div className={styles.arrowKeys}>
                  <kbd>↑</kbd>
                  <div>
                    <kbd>←</kbd>
                    <kbd>↓</kbd>
                    <kbd>→</kbd>
                  </div>
                </div>
              </div>

              <div
                className={styles.mobileControls}
              >
                <span
                  className={styles.controlTitle}
                >
                  Swipe in any direction to move
                </span>
              </div>
            </div>*/}
          </div>

          <div className={styles.controlsHint}>
              <div
                className={
                  styles.desktopControls
                }
              >
                <span
                  className={styles.controlTitle}
                >
                  Use your arrow keys to build
                </span>

                <div className={styles.arrowKeys}>
                  <kbd>↑</kbd>
                  <div>
                    <kbd>←</kbd>
                    <kbd>↓</kbd>
                    <kbd>→</kbd>
                  </div>
                </div>
              </div>

              <div
                className={styles.mobileControls}
              >
                <span
                  className={styles.controlTitle}
                >
                  Swipe in any direction to move
                </span>
              </div>
            </div>

          <div className={styles.instructions}>
            <div
              className={
                styles.instructionsHeader
              }
            >
              <span
                className={styles.instructionsLabel}
              >
                HOW TO PLAY
              </span>

              <h2>
                Grow your kingdom
              </h2>
            </div>

            <div className={styles.ruleGrid}>
              <div className={styles.ruleCard}>
                <span className={styles.ruleNumber}>
                  01
                </span>

                <div>
                  <strong>
                    Merge buildings
                  </strong>

                  <p>
                    Move matching buildings
                    together to combine them.
                  </p>
                </div>
              </div>

              <div className={styles.ruleCard}>
                <span className={styles.ruleNumber}>
                  02
                </span>

                <div>
                  <strong>
                    Build upward
                  </strong>

                  <p>
                    Every successful merge creates
                    the next larger building.
                  </p>
                </div>
              </div>

              <div className={styles.ruleCard}>
                <span className={styles.ruleNumber}>
                  03
                </span>

                <div>
                  <strong>
                    Keep playing
                  </strong>

                  <p>
                    Reaching the target does not
                    end your game.
                  </p>
                </div>
              </div>

              <div className={styles.ruleCard}>
                <span className={styles.ruleNumber}>
                  04
                </span>

                <div>
                  <strong>
                    No moves, game over
                  </strong>

                  <p>
                    Keep space available and plan
                    your next move carefully.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.bottomActions}>
            <button
              type="button"
              className={
                styles.bottomNewGameButton
              }
              onClick={startNewGame}
            >
              <FaArrowRotateRight />
              New Game
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Kingdom;