import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaCheck,
  FaClock,
  FaPause,
  FaPlay,
  FaRedo,
  FaLightbulb,
  FaTrophy,
} from "react-icons/fa";
import styles from "./Slide.module.css";
import { setSEO } from "../../../utils/seo";


/* =========================================================
   CONSTANTS
========================================================= */

const BOARD_SIZE = 9;

const EMPTY_TILE = 8;

const SHUFFLE_MOVES = 120;

const GAME_STATUS = {
  PLAYING: "playing",
  PAUSED: "paused",
  COMPLETED: "completed",
};


/* =========================================================
   IMAGE
========================================================= */

/*
 * Place your puzzle image at:
 *
 * src/assets/games/slide/winter-landscape.jpg
 *
 * Then change this import if your filename is different.
 */

/*import winterLandscpae from "../../../assets/games/slide/winter-landscape.png";
import homeGarden from "../../../assets/games/slide/home-garden.png";
import seaShore from "../../../assets/games/slide/sea-shore.png";
import desertVegetation from "../../../assets/games/slide/desert-vegetation.png";*/

const slideImageModules = import.meta.glob(
  "../../../assets/games/slide/*.{png,jpg,jpeg,webp}",
  {
    eager: true,
    import: "default",
  }
);

const slideImages = Object.values(slideImageModules);

/* =========================================================
   UTILITY FUNCTIONS
========================================================= */

/**
 * Returns the solved board:
 *
 * 0 1 2
 * 3 4 5
 * 6 7 8
 *
 * Tile 8 is the empty space.
 */

/*const slideImages = [
  seaShore, homeGarden, winterLandscpae, desertVegetation,
];*/

const getRandomImage = (currentImage) => {
  const availableImages = slideImages.filter(
    (image) => image !== currentImage
  );

  return availableImages[
    Math.floor(
      Math.random() * availableImages.length
    )
  ];
};

const createSolvedBoard = () =>
  Array.from(
    { length: BOARD_SIZE },
    (_, index) => index
  );


/**
 * Returns a shuffled copy using Fisher-Yates.
 */
const shuffle = (array) => {
  const shuffled = [...array];

  for (
    let index = shuffled.length - 1;
    index > 0;
    index -= 1
  ) {
    const randomIndex = Math.floor(
      Math.random() * (index + 1)
    );

    [
      shuffled[index],
      shuffled[randomIndex],
    ] = [
      shuffled[randomIndex],
      shuffled[index],
    ];
  }

  return shuffled;
};


/**
 * Returns the indexes that can move into
 * the empty tile.
 */
const getMovableIndexes = (emptyIndex) => {
  const row = Math.floor(
    emptyIndex / 3
  );

  const column = emptyIndex % 3;

  const indexes = [];

  if (row > 0) {
    indexes.push(emptyIndex - 3);
  }

  if (row < 2) {
    indexes.push(emptyIndex + 3);
  }

  if (column > 0) {
    indexes.push(emptyIndex - 1);
  }

  if (column < 2) {
    indexes.push(emptyIndex + 1);
  }

  return indexes;
};


/**
 * Creates a guaranteed-solvable puzzle.
 *
 * Instead of randomly arranging tiles, we start
 * from the solved board and perform legal moves.
 */
const generatePuzzle = () => {
  let board = createSolvedBoard();

  let emptyIndex = EMPTY_TILE;

  let previousEmptyIndex = null;

  for (
    let move = 0;
    move < SHUFFLE_MOVES;
    move += 1
  ) {
    let movableIndexes =
      getMovableIndexes(emptyIndex);

    /*
     * Avoid immediately undoing the previous move.
     */
    if (
      previousEmptyIndex !== null &&
      movableIndexes.length > 1
    ) {
      movableIndexes =
        movableIndexes.filter(
          (index) =>
            index !== previousEmptyIndex
        );
    }

    const selectedIndex =
      movableIndexes[
        Math.floor(
          Math.random() *
            movableIndexes.length
        )
      ];

    [
      board[emptyIndex],
      board[selectedIndex],
    ] = [
      board[selectedIndex],
      board[emptyIndex],
    ];

    previousEmptyIndex = emptyIndex;

    emptyIndex = selectedIndex;
  }

  /*
   * Extremely unlikely, but make sure the puzzle
   * does not start already solved.
   */
  if (
    board.every(
      (tile, index) =>
        tile === index
    )
  ) {
    return generatePuzzle();
  }

  return board;
};


/**
 * Checks whether the board is solved.
 */
const isSolved = (board) =>
  board.every(
    (tile, index) =>
      tile === index
  );


/**
 * Formats seconds as MM:SS or HH:MM:SS.
 */
const formatTime = (totalSeconds) => {
  const hours =
    Math.floor(
      totalSeconds / 3600
    );

  const minutes =
    Math.floor(
      (totalSeconds % 3600) / 60
    );

  const seconds =
    totalSeconds % 60;

  if (hours > 0) {
    return [
      String(hours).padStart(2, "0"),
      String(minutes).padStart(2, "0"),
      String(seconds).padStart(2, "0"),
    ].join(":");
  }

  return [
    String(minutes).padStart(2, "0"),
    String(seconds).padStart(2, "0"),
  ].join(":");
};


/**
 * Returns the row/column of a tile.
 */
const getTilePosition = (tile) => ({
  row: Math.floor(tile / 3),
  column: tile % 3,
});


/* =========================================================
   INITIAL GAME
========================================================= */

//const INITIAL_BOARD = generatePuzzle();


/* =========================================================
   SLIDE COMPONENT
========================================================= */

const Slide = () => {

  /* =======================================================
     GAME STATE
  ======================================================= */

  //const [board, setBoard] =
    //useState(() => INITIAL_BOARD);

  const [currentImage, setCurrentImage] =
    useState(() => {
      return slideImages[
        Math.floor(
          Math.random() *
          slideImages.length
        )
      ];
    });

  const [board, setBoard] =
    useState(() => generatePuzzle());

  const [moves, setMoves] =
    useState(0);

  const [elapsedTime, setElapsedTime] =
    useState(0);

  const [gameStatus, setGameStatus] =
    useState(
      GAME_STATUS.PLAYING
    );

  const [message, setMessage] =
    useState("");

  const [showHint, setShowHint] =
    useState(false);


  /* =======================================================
     NEW GAME
  ======================================================= */

  /*const startNewGame = useCallback(() => {
    setBoard(generatePuzzle());

    setMoves(0);

    setElapsedTime(0);

    setGameStatus(
      GAME_STATUS.PLAYING
    );

    setMessage("");

    setShowHint(false);
  }, []);*/

  const startNewGame = useCallback(() => {
  setCurrentImage(
    (previousImage) =>
      getRandomImage(previousImage)
  );

  setBoard(generatePuzzle());

  setMoves(0);

  setElapsedTime(0);

  setGameStatus(
    GAME_STATUS.PLAYING
  );

  setMessage("");

  setShowHint(false);
}, []);


  /* =======================================================
     TIMER
  ======================================================= */

  useEffect(() => {
    if (
      gameStatus !==
      GAME_STATUS.PLAYING
    ) {
      return undefined;
    }

    const timer = setInterval(() => {
      setElapsedTime(
        (previousTime) =>
          previousTime + 1
      );
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [gameStatus]);


  /* =======================================================
     PAUSE / RESUME
  ======================================================= */

  const handlePauseToggle = () => {
    if (
      gameStatus ===
      GAME_STATUS.COMPLETED
    ) {
      return;
    }

    setGameStatus(
      (previousStatus) =>
        previousStatus ===
        GAME_STATUS.PAUSED
          ? GAME_STATUS.PLAYING
          : GAME_STATUS.PAUSED
    );
  };


  /* =======================================================
     TILE MOVE
  ======================================================= */

  const handleTileClick = (tileIndex) => {
    if (
      gameStatus !==
      GAME_STATUS.PLAYING
    ) {
      return;
    }

    const emptyIndex =
      board.indexOf(
        EMPTY_TILE
      );

    const movableIndexes =
      getMovableIndexes(
        emptyIndex
      );

    if (
      !movableIndexes.includes(
        tileIndex
      )
    ) {
      return;
    }

    const nextBoard = [...board];

    [
      nextBoard[emptyIndex],
      nextBoard[tileIndex],
    ] = [
      nextBoard[tileIndex],
      nextBoard[emptyIndex],
    ];

    setBoard(nextBoard);

    const nextMoves =
      moves + 1;

    setMoves(nextMoves);

    if (
      isSolved(nextBoard)
    ) {
      setGameStatus(
        GAME_STATUS.COMPLETED
      );

      setMessage(
        `Congratulations! You restored the picture in ${nextMoves} moves.`
      );
    }
  };


  /* =======================================================
     HINT
  ======================================================= */

  const handleHint = () => {
    if (
      gameStatus ===
      GAME_STATUS.COMPLETED
    ) {
      return;
    }

    setShowHint(
      (previousValue) =>
        !previousValue
    );
  };


  /* =======================================================
     MOVEABLE TILES
  ======================================================= */

  const emptyIndex =
    board.indexOf(
      EMPTY_TILE
    );

  const movableIndexes =
    useMemo(
      () =>
        getMovableIndexes(
          emptyIndex
        ),
      [emptyIndex]
    );


  /* =======================================================
     SEO
  ======================================================= */

  useEffect(() => {
    setSEO({
      title: "Slide - DevSphere",
      description:
        "Play Slide on DevSphere. Move the tiles and restore the picture in this classic sliding puzzle game.",
      keywords:
        "Slide, sliding puzzle, sliding tile puzzle, picture puzzle, 8 puzzle, online puzzle game, DevSphere Slide",
      url: "/games/slide",
    });
  }, []);


  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <main className={styles.slidePage}>

      {/* ===================================================
          HEADER
      =================================================== */}

      <section
        className={styles.slideHeader}
      >

        <div
          className={
            styles.headerContent
          }
        >

          <Link
            to="/games"
            className={
              styles.backLink
            }
          >
            <FaArrowLeft
              aria-hidden="true"
            />

            <span>
              Back to Games
            </span>
          </Link>


          <span
            className={
              styles.headerLabel
            }
          >
            SLIDING PUZZLE
          </span>


          <h1
            className={
              styles.slideTitle
            }
          >
            Slide
          </h1>


          <p
            className={
              styles.slideSubtitle
            }
          >
            Slide the tiles into the correct
            positions and restore the picture.
          </p>

        </div>

      </section>


      {/* ===================================================
          GAME SECTION
      =================================================== */}

      <section
        className={
          styles.slideSection
        }
      >

        <div
          className={
            styles.slideContainer
          }
        >

          {/* ===============================================
              GAME TOP BAR
          ============================================== */}

          <div
            className={
              styles.gameTopBar
            }
          >

            <div
              className={
                styles.gameStats
              }
            >

              <div
                className={
                  styles.statItem
                }
              >
                <FaRedo
                  aria-hidden="true"
                />

                <div>
                  <span
                    className={
                      styles.statLabel
                    }
                  >
                    Moves
                  </span>

                  <span
                    className={
                      styles.statValue
                    }
                  >
                    {moves}
                  </span>
                </div>
              </div>


              <div
                className={
                  styles.statItem
                }
              >
                <FaClock
                  aria-hidden="true"
                />

                <div>
                  <span
                    className={
                      styles.statLabel
                    }
                  >
                    Time
                  </span>

                  <span
                    className={
                      styles.statValue
                    }
                  >
                    {formatTime(
                      elapsedTime
                    )}
                  </span>
                </div>
              </div>

            </div>


            <div
              className={
                styles.gameActions
              }
            >

              <button
                type="button"
                className={
                  styles.actionButton
                }
                onClick={
                  handleHint
                }
                disabled={
                  gameStatus ===
                  GAME_STATUS.COMPLETED
                }
              >
                <FaLightbulb
                  aria-hidden="true"
                />

                <span>
                  {showHint
                    ? "Hide Hint"
                    : "Hint"}
                </span>
              </button>


              <button
                type="button"
                className={
                  styles.actionButton
                }
                onClick={
                  handlePauseToggle
                }
                disabled={
                  gameStatus ===
                  GAME_STATUS.COMPLETED
                }
              >

                {gameStatus ===
                GAME_STATUS.PAUSED ? (
                  <FaPlay
                    aria-hidden="true"
                  />
                ) : (
                  <FaPause
                    aria-hidden="true"
                  />
                )}

                <span>
                  {gameStatus ===
                  GAME_STATUS.PAUSED
                    ? "Resume"
                    : "Pause"}
                </span>

              </button>


              <button
                type="button"
                className={
                  styles.newGameButton
                }
                onClick={
                  startNewGame
                }
              >
                <FaRedo
                  aria-hidden="true"
                />

                <span>
                  New Game
                </span>
              </button>

            </div>

          </div>


          {/* ===============================================
              MESSAGE
          ============================================== */}

          {message && (
            <div
              className={
                styles.successMessage
              }
              role="status"
              aria-live="polite"
            >

              <FaTrophy
                aria-hidden="true"
              />

              <span>
                {message}
              </span>

            </div>
          )}


          {/* ===============================================
              PUZZLE AREA
          ============================================== */}

          <div
            className={
              styles.puzzleArea
            }
          >

            <div
              className={[
    styles.puzzleBoard,
    gameStatus ===
      GAME_STATUS.COMPLETED
      ? styles.completedBoard
      : "",
  ]
    .filter(Boolean)
    .join(" ")}
              role="grid"
              aria-label="Sliding picture puzzle"
            >

              {board.map(
                (tile, index) => {

                  if (
  tile === EMPTY_TILE &&
  gameStatus !== GAME_STATUS.COMPLETED
) {
  return (
    <div
      key={tile}
      className={styles.emptyTile}
      aria-hidden="true"
      style={{
        left: `calc(
          var(--board-gap) +
          ${(index % 3)} * (
            (100% - (var(--board-gap) * 2)) / 3
          )
        )`,

        top: `calc(
          var(--board-gap) +
          ${Math.floor(index / 3)} * (
            (100% - (var(--board-gap) * 2)) / 3
          )
        )`,
      }}
    />
  );
}

                  const {
                    row,
                    column,
                  } =
                    getTilePosition(
                      tile
                    );

                  const isMovable =
                    movableIndexes.includes(
                      index
                    );

                    const currentRow =
                        Math.floor(index / 3);

                    const currentColumn =
                        index % 3;

                  return (
                    <button
                      key={tile}
                      type="button"
                      className={[
                        styles.tile,
                        isMovable
                          ? styles.movableTile
                          : "",
                      ]
                        .filter(Boolean)
                        .join(" ")}
                      onClick={() =>
                        handleTileClick(
                          index
                        )
                      }
                      aria-label={`Puzzle tile ${tile + 1}${
                        isMovable
                          ? ", movable"
                          : ""
                      }`}


                      
                      disabled={
                        !isMovable ||
                        gameStatus !==
                          GAME_STATUS.PLAYING
                      }


                      
                      style={{
  left: `calc(
    var(--board-gap) +
    ${currentColumn} * (
      (100% - (var(--board-gap) * 2)) / 3
    )
  )`,

  top: `calc(
    var(--board-gap) +
    ${currentRow} * (
      (100% - (var(--board-gap) * 2)) / 3
    )
  )`,

  backgroundImage: `url(${currentImage})`,

  backgroundPosition: `${column * 50}% ${row * 50}%`,
}}

                    >
                    {gameStatus !== GAME_STATUS.COMPLETED && (
                      <span
                        className={
                          styles.tileNumber
                        }
                      >
                        {tile + 1}
                      </span>
                    )}
                    </button>
                  );
                }
              )}


              {/* =========================================
                  PAUSE OVERLAY
              ========================================== */}

              {gameStatus ===
                GAME_STATUS.PAUSED && (
                <div
                  className={
                    styles.pauseOverlay
                  }
                >
                  <FaPause
                    aria-hidden="true"
                  />

                  <span>
                    Game Paused
                  </span>

                  <small>
                    Resume when you're ready
                  </small>
                </div>
              )}

            </div>


            {/* =========================================
                HINT IMAGE
            ========================================== */}

            {showHint && (
              <div
                className={
                  styles.hintSection
                }
              >

                <span
                  className={
                    styles.hintLabel
                  }
                >
                  SOLVED IMAGE
                </span>

                <img
                  src={currentImage}
                  alt="Solved puzzle preview"
                  className={
                    styles.hintImage
                  }
                />

              </div>
            )}

          </div>


          {/* ===============================================
              INSTRUCTIONS
          ============================================== */}

          <div
            className={
              styles.instructions
            }
          >

            <div
              className={
                styles.instructionIcon
              }
            >
              <FaCheck
                aria-hidden="true"
              />
            </div>

            <div>
              <h2>
                How to play
              </h2>

              <p>
                Click a tile next to the empty
                space to slide it into position.
                Restore the complete picture using
                as few moves as possible.
              </p>
            </div>

          </div>

        </div>

      </section>

    </main>
  );
};


export default Slide;