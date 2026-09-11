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

/* aaj ka hai yhan se - const slideImageModules = import.meta.glob(
  "../../../assets/games/slide/*.{png,jpg,jpeg,webp}",
  {
    eager: true,
    import: "default",
  }
);

const slideImages = Object.values(slideImageModules); aaj ka hai yhan tk*/

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

const slideImages = [
  "https://images.pexels.com/photos/28388322/pexels-photo-28388322.jpeg", "https://images.pexels.com/photos/36580343/pexels-photo-36580343.jpeg",
  "https://images.pexels.com/photos/5504764/pexels-photo-5504764.jpeg", "https://images.pexels.com/photos/29030394/pexels-photo-29030394.jpeg",
  "https://images.pexels.com/photos/20612698/pexels-photo-20612698.jpeg", "https://images.pexels.com/photos/37078575/pexels-photo-37078575.jpeg",
  "https://images.pexels.com/photos/13166094/pexels-photo-13166094.jpeg", "https://images.pexels.com/photos/29554973/pexels-photo-29554973.jpeg",
  "https://images.pexels.com/photos/34481769/pexels-photo-34481769.jpeg", "https://images.pexels.com/photos/11521892/pexels-photo-11521892.jpeg",
  "https://images.pexels.com/photos/9742097/pexels-photo-9742097.jpeg", "https://images.pexels.com/photos/41953/earth-blue-planet-globe-planet-41953.jpeg",
  "https://images.pexels.com/photos/39071812/pexels-photo-39071812.jpeg", "https://images.pexels.com/photos/6244988/pexels-photo-6244988.jpeg",
  "https://images.pexels.com/photos/8629297/pexels-photo-8629297.jpeg", "https://images.pexels.com/photos/18698264/pexels-photo-18698264.jpeg",
  "https://images.pexels.com/photos/39206994/pexels-photo-39206994.jpeg", "https://images.pexels.com/photos/17280212/pexels-photo-17280212.jpeg",
  "https://images.pexels.com/photos/13765894/pexels-photo-13765894.jpeg", "https://images.pexels.com/photos/17650169/pexels-photo-17650169.jpeg",
  "https://images.pexels.com/photos/17019379/pexels-photo-17019379.jpeg", "https://images.pexels.com/photos/35547073/pexels-photo-35547073.jpeg",
  "https://images.pexels.com/photos/15332116/pexels-photo-15332116.jpeg", "https://images.pexels.com/photos/17650172/pexels-photo-17650172.jpeg",
  "https://images.pexels.com/photos/11281574/pexels-photo-11281574.jpeg", "https://images.pexels.com/photos/38132239/pexels-photo-38132239.jpeg",
  "https://images.pexels.com/photos/36736579/pexels-photo-36736579.jpeg", "https://images.pexels.com/photos/17906099/pexels-photo-17906099.jpeg",
  "https://images.pexels.com/photos/36643457/pexels-photo-36643457.jpeg", "https://images.pexels.com/photos/32835162/pexels-photo-32835162.jpeg",
  "https://images.pexels.com/photos/11577351/pexels-photo-11577351.jpeg", "https://images.pexels.com/photos/22491771/pexels-photo-22491771.jpeg",
  "https://images.pexels.com/photos/12004888/pexels-photo-12004888.jpeg", "https://images.pexels.com/photos/20567007/pexels-photo-20567007.jpeg",
  "https://images.pexels.com/photos/10502518/pexels-photo-10502518.jpeg", "https://images.pexels.com/photos/8064560/pexels-photo-8064560.jpeg",
  "https://images.pexels.com/photos/36938132/pexels-photo-36938132.jpeg", "https://images.pexels.com/photos/5662791/pexels-photo-5662791.jpeg",
  "https://images.pexels.com/photos/28894016/pexels-photo-28894016.jpeg", "https://images.pexels.com/photos/1972531/pexels-photo-1972531.jpeg",
  "https://images.pexels.com/photos/4870457/pexels-photo-4870457.jpeg", "https://images.pexels.com/photos/4037156/pexels-photo-4037156.jpeg",
  "https://images.pexels.com/photos/12392826/pexels-photo-12392826.jpeg", "https://images.pexels.com/photos/16182984/pexels-photo-16182984.png",
  "https://images.pexels.com/photos/5361973/pexels-photo-5361973.jpeg", "https://images.pexels.com/photos/37004050/pexels-photo-37004050.jpeg",
  "https://images.pexels.com/photos/13645531/pexels-photo-13645531.jpeg", "https://images.pexels.com/photos/38735528/pexels-photo-38735528.jpeg",
  "https://images.pexels.com/photos/35011638/pexels-photo-35011638.jpeg", "https://images.pexels.com/photos/13162809/pexels-photo-13162809.jpeg",
  "https://images.pexels.com/photos/30726187/pexels-photo-30726187.jpeg", "https://images.pexels.com/photos/24742679/pexels-photo-24742679.jpeg",
  "https://images.pexels.com/photos/38239326/pexels-photo-38239326.jpeg", "https://images.pexels.com/photos/39442013/pexels-photo-39442013.jpeg",
  "https://images.pexels.com/photos/32825899/pexels-photo-32825899.jpeg", "https://images.pexels.com/photos/16579404/pexels-photo-16579404.jpeg",
  "https://images.pexels.com/photos/37083610/pexels-photo-37083610.png", "https://images.pexels.com/photos/24701985/pexels-photo-24701985.jpeg",
  "https://images.pexels.com/photos/1075960/pexels-photo-1075960.jpeg", "https://images.pexels.com/photos/27726847/pexels-photo-27726847.jpeg",
  "https://images.pexels.com/photos/17827047/pexels-photo-17827047.jpeg", "https://images.pexels.com/photos/2460486/pexels-photo-2460486.jpeg",
  "https://images.pexels.com/photos/37114988/pexels-photo-37114988.jpeg", "https://images.pexels.com/photos/18262758/pexels-photo-18262758.jpeg",
  "https://images.pexels.com/photos/9527591/pexels-photo-9527591.jpeg", "https://images.pexels.com/photos/8604710/pexels-photo-8604710.jpeg",
  "https://images.pexels.com/photos/8567167/pexels-photo-8567167.jpeg", "https://images.pexels.com/photos/29038452/pexels-photo-29038452.jpeg",
  "https://images.pexels.com/photos/36930235/pexels-photo-36930235.jpeg", "https://images.pexels.com/photos/16716954/pexels-photo-16716954.jpeg",
  "https://images.pexels.com/photos/14434320/pexels-photo-14434320.jpeg", "https://images.pexels.com/photos/11719206/pexels-photo-11719206.jpeg",
  "https://images.pexels.com/photos/9984796/pexels-photo-9984796.jpeg", "https://images.pexels.com/photos/7922008/pexels-photo-7922008.jpeg",
  "https://images.pexels.com/photos/38377148/pexels-photo-38377148.jpeg", "https://images.pexels.com/photos/33212310/pexels-photo-33212310.jpeg",
  "https://images.pexels.com/photos/17245324/pexels-photo-17245324.jpeg", "https://images.pexels.com/photos/1413467/pexels-photo-1413467.png",
  "https://images.pexels.com/photos/32654673/pexels-photo-32654673.jpeg", "https://images.pexels.com/photos/8117771/pexels-photo-8117771.jpeg",
  "https://images.pexels.com/photos/30542312/pexels-photo-30542312.jpeg", "https://images.pexels.com/photos/793763/pexels-photo-793763.jpeg",
  "https://images.pexels.com/photos/31460661/pexels-photo-31460661.jpeg", "https://images.pexels.com/photos/16141933/pexels-photo-16141933.jpeg",
  "https://images.pexels.com/photos/3264706/pexels-photo-3264706.jpeg", "https://images.pexels.com/photos/24988984/pexels-photo-24988984.jpeg",
  "https://images.pexels.com/photos/20728293/pexels-photo-20728293.jpeg", "https://images.pexels.com/photos/29454155/pexels-photo-29454155.jpeg",
  "https://images.pexels.com/photos/10992816/pexels-photo-10992816.jpeg", "https://images.pexels.com/photos/11903171/pexels-photo-11903171.jpeg",
  "https://images.pexels.com/photos/20992871/pexels-photo-20992871.png", "https://images.pexels.com/photos/5504558/pexels-photo-5504558.jpeg",
  "https://images.pexels.com/photos/1033077/pexels-photo-1033077.jpeg", "https://images.pexels.com/photos/5593568/pexels-photo-5593568.jpeg",
  "https://images.pexels.com/photos/11010719/pexels-photo-11010719.jpeg", "https://images.pexels.com/photos/3278765/pexels-photo-3278765.jpeg",
  "https://images.pexels.com/photos/19859578/pexels-photo-19859578.jpeg", "https://images.pexels.com/photos/5071515/pexels-photo-5071515.jpeg",
  "https://images.pexels.com/photos/3976458/pexels-photo-3976458.jpeg", "https://images.pexels.com/photos/4170628/pexels-photo-4170628.jpeg",
];

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