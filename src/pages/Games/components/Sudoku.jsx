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
  FaTrash,
  FaTrophy,
} from "react-icons/fa";
import styles from "./Sudoku.module.css";
import { setSEO } from "../../../utils/seo";

/* =========================================================
   CONSTANTS
========================================================= */

const BOARD_SIZE = 9;
const BOX_SIZE = 3;

const EMPTY_CELL = 0;

const MAX_MISTAKES = 3;

const GAME_STATUS = {
  PLAYING: "playing",
  PAUSED: "paused",
  COMPLETED: "completed",
};

const DIFFICULTY = {
  EASY: {
    label: "Easy",
    clues: 42,
  },

  MEDIUM: {
    label: "Medium",
    clues: 34,
  },

  HARD: {
    label: "Hard",
    clues: 28,
  },
};


/* =========================================================
   UTILITY FUNCTIONS
========================================================= */

/**
 * Creates an empty 9×9 Sudoku board.
 */
const createEmptyBoard = () =>
  Array.from(
    { length: BOARD_SIZE },
    () => Array(BOARD_SIZE).fill(EMPTY_CELL)
  );


/**
 * Creates a deep copy of a Sudoku board.
 */
const cloneBoard = (board) =>
  board.map((row) => [...row]);


/**
 * Shuffles an array using Fisher-Yates.
 */
const shuffle = (array) => {
  const shuffled = [...array];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
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
 * Checks whether a number can be placed at
 * a particular position.
 */
const isValidPlacement = (
  board,
  row,
  column,
  number
) => {

  // Check row.
  for (let currentColumn = 0; currentColumn < BOARD_SIZE; currentColumn += 1) {
    if (
      currentColumn !== column &&
      board[row][currentColumn] === number
    ) {
      return false;
    }
  }

  // Check column.
  for (let currentRow = 0; currentRow < BOARD_SIZE; currentRow += 1) {
    if (
      currentRow !== row &&
      board[currentRow][column] === number
    ) {
      return false;
    }
  }

  // Check 3×3 box.
  const boxStartRow =
    Math.floor(row / BOX_SIZE) * BOX_SIZE;

  const boxStartColumn =
    Math.floor(column / BOX_SIZE) * BOX_SIZE;

  for (
    let currentRow = boxStartRow;
    currentRow < boxStartRow + BOX_SIZE;
    currentRow += 1
  ) {
    for (
      let currentColumn = boxStartColumn;
      currentColumn < boxStartColumn + BOX_SIZE;
      currentColumn += 1
    ) {
      if (
        (currentRow !== row ||
          currentColumn !== column) &&
        board[currentRow][currentColumn] === number
      ) {
        return false;
      }
    }
  }

  return true;
};


/**
 * Finds the next empty cell.
 */
const findEmptyCell = (board) => {

  for (let row = 0; row < BOARD_SIZE; row += 1) {

    for (
      let column = 0;
      column < BOARD_SIZE;
      column += 1
    ) {

      if (board[row][column] === EMPTY_CELL) {
        return {
          row,
          column,
        };
      }
    }
  }

  return null;
};


/**
 * Solves a Sudoku board using backtracking.
 */
const solveSudoku = (board) => {

  const emptyCell = findEmptyCell(board);

  if (!emptyCell) {
    return true;
  }

  const {
    row,
    column,
  } = emptyCell;

  const numbers = shuffle([
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
  ]);

  for (const number of numbers) {

    if (
      isValidPlacement(
        board,
        row,
        column,
        number
      )
    ) {

      board[row][column] = number;

      if (solveSudoku(board)) {
        return true;
      }

      board[row][column] = EMPTY_CELL;
    }
  }

  return false;
};


/**
 * Generates a completely solved Sudoku board.
 */
const generateSolvedBoard = () => {

  const board = createEmptyBoard();

  solveSudoku(board);

  return board;
};


/**
 * Generates a playable Sudoku puzzle from
 * a completed board.
 */
const generatePuzzle = (difficulty) => {

  const solution = generateSolvedBoard();

  const puzzle = cloneBoard(solution);

  const totalCells =
    BOARD_SIZE * BOARD_SIZE;

  const cellsToRemove =
    totalCells - difficulty.clues;

  const positions = shuffle(
    Array.from(
      { length: totalCells },
      (_, index) => index
    )
  );

  let removed = 0;

  for (
    const position of positions
  ) {

    if (removed >= cellsToRemove) {
      break;
    }

    const row =
      Math.floor(position / BOARD_SIZE);

    const column =
      position % BOARD_SIZE;

    puzzle[row][column] = EMPTY_CELL;

    removed += 1;
  }

  return {
    puzzle,
    solution,
  };
};


/**
 * Formats elapsed seconds as MM:SS or HH:MM:SS.
 */
const formatTime = (totalSeconds) => {

  const hours =
    Math.floor(totalSeconds / 3600);

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
 * Checks whether the board has been completely filled.
 */
const isBoardComplete = (board) =>
  board.every((row) =>
    row.every(
      (cell) => cell !== EMPTY_CELL
    )
  );


/* =========================================================
   SUDOKU COMPONENT
========================================================= */
//added line just
const INITIAL_GAME = generatePuzzle(
  DIFFICULTY.MEDIUM
); //added line upto this

const Sudoku = () => {

  /* =======================================================
     GAME STATE
  ======================================================= */

  const [difficulty, setDifficulty] = useState(
    DIFFICULTY.MEDIUM
  );

  /*const [puzzle, setPuzzle] = useState(
    () =>
      generatePuzzle(
        DIFFICULTY.MEDIUM
      ).puzzle
  );*/
  const [puzzle, setPuzzle] = useState(
  () => INITIAL_GAME.puzzle
); //ye bhi added usestate hai abhi just add kiya hai

  /*const [solution, setSolution] = useState(
    () =>
      generatePuzzle(
        DIFFICULTY.MEDIUM
      ).solution
  );*/
  const [solution, setSolution] = useState(
  () => INITIAL_GAME.solution
); //ye bhi added usestate hai abhi just add kiya hai

  const [board, setBoard] = useState(
    () => cloneBoard(puzzle)
  );

  const [selectedCell, setSelectedCell] =
    useState(null);

  const [mistakes, setMistakes] =
    useState(0);

  const [elapsedTime, setElapsedTime] =
    useState(0);

  const [gameStatus, setGameStatus] =
    useState(GAME_STATUS.PLAYING);

  const [message, setMessage] =
    useState("");

  const [isCompleted, setIsCompleted] =
    useState(false);


  /* =======================================================
     INITIALIZE / NEW GAME
  ======================================================= */

  const startNewGame = useCallback(
    (selectedDifficulty = difficulty) => {

      const generated =
        generatePuzzle(
          selectedDifficulty
        );

      setPuzzle(generated.puzzle);

      setSolution(generated.solution);

      setBoard(
        cloneBoard(generated.puzzle)
      );

      setSelectedCell(null);

      setMistakes(0);

      setElapsedTime(0);

      setGameStatus(
        GAME_STATUS.PLAYING
      );

      setMessage("");

      setIsCompleted(false);
    },
    [difficulty]
  );


  /* =======================================================
     TIMER
  ======================================================= */

  useEffect(() => {

    if (
      gameStatus !== GAME_STATUS.PLAYING ||
      isCompleted
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

  }, [
    gameStatus,
    isCompleted,
  ]);


  /* =======================================================
     DIFFICULTY CHANGE
  ======================================================= */

  const handleDifficultyChange = (
    event
  ) => {

    const selectedValue =
      event.target.value;

    const selectedDifficulty =
      Object.values(DIFFICULTY).find(
        (item) =>
          item.label === selectedValue
      );

    if (!selectedDifficulty) {
      return;
    }

    setDifficulty(
      selectedDifficulty
    );

    startNewGame(
      selectedDifficulty
    );
  };


  /* =======================================================
     CELL HELPERS
  ======================================================= */

  const isGivenCell = (
    row,
    column
  ) =>
    puzzle[row][column] !==
    EMPTY_CELL;


  const isSelectedCell = (
    row,
    column
  ) =>
    selectedCell?.row === row &&
    selectedCell?.column === column;


  const isSameNumber = (
    row,
    column
  ) => {

    if (!selectedCell) {
      return false;
    }

    const selectedValue =
      board[
        selectedCell.row
      ][
        selectedCell.column
      ];

    if (
      selectedValue === EMPTY_CELL
    ) {
      return false;
    }

    return (
      board[row][column] ===
      selectedValue
    );
  };


  const isRelatedCell = (
    row,
    column
  ) => {

    if (!selectedCell) {
      return false;
    }

    const sameRow =
      selectedCell.row === row;

    const sameColumn =
      selectedCell.column === column;

    const sameBox =
      Math.floor(
        selectedCell.row / BOX_SIZE
      ) ===
        Math.floor(
          row / BOX_SIZE
        ) &&
      Math.floor(
        selectedCell.column / BOX_SIZE
      ) ===
        Math.floor(
          column / BOX_SIZE
        );

    return (
      sameRow ||
      sameColumn ||
      sameBox
    );
  };


  const isConflictingCell = (
    row,
    column
  ) => {

    const value =
      board[row][column];

    if (
      value === EMPTY_CELL
    ) {
      return false;
    }

    return !isValidPlacement(
      board,
      row,
      column,
      value
    );
  };


  /* =======================================================
     SELECT CELL
  ======================================================= */

  const handleCellClick = (
    row,
    column
  ) => {

    if (
      gameStatus ===
      GAME_STATUS.PAUSED
    ) {
      return;
    }

    if (
      gameStatus ===
      GAME_STATUS.COMPLETED
    ) {
      return;
    }

    setSelectedCell({
      row,
      column,
    });

    setMessage("");
  };


  /* =======================================================
     ENTER NUMBER
  ======================================================= */

  const handleNumberInput = useCallback(
    (number) => {

      if (!selectedCell) {
        return;
      }

      if (
        gameStatus !==
        GAME_STATUS.PLAYING
      ) {
        return;
      }

      const {
        row,
        column,
      } = selectedCell;

      // Given cells cannot be edited.
      if (
        puzzle[row][column] !==
        EMPTY_CELL
      ) {
        return;
      }

      // Correct answer.
      if (
        solution[row][column] ===
        number
      ) {

        setBoard((previousBoard) => {

          const updatedBoard =
            cloneBoard(
              previousBoard
            );

          updatedBoard[row][column] =
            number;

          return updatedBoard;
        });

        setMessage("");

        return;
      }

      // Incorrect answer.
      setMistakes(
        (previousMistakes) =>
          previousMistakes + 1
      );

      setMessage(
        `Incorrect number. ${
          Math.max(
            0,
            MAX_MISTAKES -
              mistakes -
              1
          )
        } mistake${
          MAX_MISTAKES -
            mistakes -
            1 ===
          1
            ? ""
            : "s"
        } remaining.`
      );
    },
    [
      selectedCell,
      gameStatus,
      puzzle,
      solution,
      mistakes,
    ]
  );


  /* =======================================================
     KEYBOARD INPUT
  ======================================================= */

  useEffect(() => {

    const handleKeyDown = (
      event
    ) => {

      if (
        gameStatus !==
        GAME_STATUS.PLAYING
      ) {
        return;
      }

      const key = event.key;

      if (
        /^[1-9]$/.test(key)
      ) {

        handleNumberInput(
          Number(key)
        );

        return;
      }

      if (
        key === "Backspace" ||
        key === "Delete" ||
        key === "0"
      ) {

        handleClearCell();

        return;
      }

      if (!selectedCell) {
        return;
      }

      let {
        row,
        column,
      } = selectedCell;

      if (key === "ArrowUp") {
        row = Math.max(0, row - 1);
      }

      if (key === "ArrowDown") {
        row = Math.min(
          BOARD_SIZE - 1,
          row + 1
        );
      }

      if (key === "ArrowLeft") {
        column = Math.max(
          0,
          column - 1
        );
      }

      if (key === "ArrowRight") {
        column = Math.min(
          BOARD_SIZE - 1,
          column + 1
        );
      }

      if (
        [
          "ArrowUp",
          "ArrowDown",
          "ArrowLeft",
          "ArrowRight",
        ].includes(key)
      ) {

        event.preventDefault();

        setSelectedCell({
          row,
          column,
        });
      }
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

  }, [
    gameStatus,
    handleNumberInput,
    selectedCell,
  ]);


  /* =======================================================
     CLEAR CELL
  ======================================================= */

  const handleClearCell = () => {

    if (!selectedCell) {
      return;
    }

    if (
      gameStatus !==
      GAME_STATUS.PLAYING
    ) {
      return;
    }

    const {
      row,
      column,
    } = selectedCell;

    if (
      puzzle[row][column] !==
      EMPTY_CELL
    ) {
      return;
    }

    setBoard((previousBoard) => {

      const updatedBoard =
        cloneBoard(
          previousBoard
        );

      updatedBoard[row][column] =
        EMPTY_CELL;

      return updatedBoard;
    });

    setMessage("");
  };


  /* =======================================================
     CHECK PUZZLE
  ======================================================= */

  const handleCheckPuzzle = () => {

    if (
      gameStatus !==
      GAME_STATUS.PLAYING
    ) {
      return;
    }

    const hasIncorrectCell =
      board.some(
        (row, rowIndex) =>
          row.some(
            (
              value,
              columnIndex
            ) =>
              value !==
                EMPTY_CELL &&
              value !==
                solution[
                  rowIndex
                ][columnIndex]
          )
      );

    if (hasIncorrectCell) {

      setMessage(
        "There are some incorrect numbers on the board."
      );

      return;
    }

    if (
      !isBoardComplete(board)
    ) {

      setMessage(
        "Everything entered so far is correct. Keep going!"
      );

      return;
    }

    handleGameComplete();
  };


  /* =======================================================
     COMPLETE GAME
  ======================================================= */

  const handleGameComplete = () => {

    setIsCompleted(true);

    setGameStatus(
      GAME_STATUS.COMPLETED
    );

    setMessage(
      "Congratulations! You solved the Sudoku puzzle."
    );
  };


  /* =======================================================
     AUTO-CHECK COMPLETION
  ======================================================= */

  useEffect(() => {

    if (
      gameStatus !==
      GAME_STATUS.PLAYING
    ) {
      return;
    }

    if (
      !isBoardComplete(board)
    ) {
      return;
    }

    const solvedCorrectly =
      board.every(
        (row, rowIndex) =>
          row.every(
            (
              value,
              columnIndex
            ) =>
              value ===
              solution[
                rowIndex
              ][columnIndex]
          )
      );

    if (solvedCorrectly) {
      handleGameComplete();
    }

  }, [
    board,
    solution,
    gameStatus,
  ]);


  /* =======================================================
     RESET CURRENT PUZZLE
  ======================================================= */

  const handleReset = () => {

    setBoard(
      cloneBoard(puzzle)
    );

    setSelectedCell(null);

    setMistakes(0);

    setElapsedTime(0);

    setGameStatus(
      GAME_STATUS.PLAYING
    );

    setMessage("");

    setIsCompleted(false);
  };


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
     NUMBER PAD
  ======================================================= */

  const numberCounts =
    useMemo(() => {

      const counts = {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        7: 0,
        8: 0,
        9: 0,
      };

      board.forEach(
        (row) => {

          row.forEach(
            (value) => {

              if (
                value >= 1 &&
                value <= 9
              ) {
                counts[value] += 1;
              }
            }
          );
        }
      );

      return counts;

    }, [board]);


  /* =======================================================
     PROGRESS
  ======================================================= */

  const totalEditableCells =
    puzzle.reduce(
      (total, row) =>
        total +
        row.filter(
          (cell) =>
            cell === EMPTY_CELL
        ).length,
      0
    );

  const completedEditableCells =
    board.reduce(
      (total, row, rowIndex) =>
        total +
        row.filter(
          (cell, columnIndex) =>
            puzzle[
              rowIndex
            ][columnIndex] ===
              EMPTY_CELL &&
            cell !== EMPTY_CELL
        ).length,
      0
    );

  const progress =
    totalEditableCells === 0
      ? 100
      : Math.round(
          (
            completedEditableCells /
            totalEditableCells
          ) * 100
        );


    useEffect(() => {
      setSEO({
        title: "Sudoku - DevSphere",
        description:
          "Play free Sudoku on DevSphere. Solve the number puzzle and test your logic and problem-solving skills.",
        keywords:
          "Sudoku, Sudoku game, online Sudoku, free Sudoku, puzzle game, number puzzle, DevSphere Sudoku",
        url: "/games/sudoku",
      });
    }, []);

  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <main className={styles.sudokuPage}>

      {/* ===================================================
          HEADER
      =================================================== */}

      <section className={styles.sudokuHeader}>

        <div className={styles.headerContent}>

          <Link
            to="/games"
            className={styles.backLink}
          >
            <FaArrowLeft
              aria-hidden="true"
            />

            <span>
              Back to Games
            </span>
          </Link>


          <span className={styles.headerLabel}>
            NUMBER PUZZLE
          </span>


          <h1 className={styles.sudokuTitle}>
            Sudoku
          </h1>


          <p className={styles.sudokuSubtitle}>
            Fill every row, column, and 3×3 box
            with numbers from 1 to 9.
          </p>

        </div>

      </section>


      {/* ===================================================
          GAME SECTION
      =================================================== */}

      <section className={styles.sudokuSection}>

        <div className={styles.sudokuContainer}>


          {/* ===============================================
              GAME TOP BAR
          ============================================== */}

          <div className={styles.gameTopBar}>

            <div className={styles.gameStats}>

              <div className={styles.statItem}>

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

                  <strong
                    className={
                      styles.statValue
                    }
                  >
                    {formatTime(
                      elapsedTime
                    )}
                  </strong>
                </div>

              </div>


              <div className={styles.statItem}>

                <div
                  className={
                    styles.mistakeIndicator
                  }
                >
                  {mistakes}
                  <span>
                    /{MAX_MISTAKES}
                  </span>
                </div>

                <div>
                  <span
                    className={
                      styles.statLabel
                    }
                  >
                    Mistakes
                  </span>

                  <strong
                    className={
                      styles.statValue
                    }
                  >
                    {Math.max(
                      0,
                      MAX_MISTAKES -
                        mistakes
                    )}{" "}
                    left
                  </strong>
                </div>

              </div>


              <div className={styles.statItem}>

                <div
                  className={
                    styles.progressCircle
                  }
                >
                  {progress}%
                </div>

                <div>
                  <span
                    className={
                      styles.statLabel
                    }
                  >
                    Progress
                  </span>

                  <strong
                    className={
                      styles.statValue
                    }
                  >
                    {completedEditableCells}
                    /
                    {totalEditableCells}
                  </strong>
                </div>

              </div>

            </div>


            <div className={styles.gameActions}>

              <button
                type="button"
                className={styles.actionButton}
                onClick={
                  handlePauseToggle
                }
                disabled={
                  gameStatus ===
                  GAME_STATUS.COMPLETED
                }
                aria-label={
                  gameStatus ===
                  GAME_STATUS.PAUSED
                    ? "Resume game"
                    : "Pause game"
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
                className={styles.actionButton}
                onClick={
                  handleReset
                }
              >

                <FaRedo
                  aria-hidden="true"
                />

                <span>
                  Reset
                </span>

              </button>

            </div>

          </div>


          {/* ===============================================
              DIFFICULTY
          ============================================== */}

          <div className={styles.controlsBar}>

            <div
              className={
                styles.difficultyControl
              }
            >

              <label
                htmlFor="sudokuDifficulty"
              >
                Difficulty
              </label>

              <select
                id="sudokuDifficulty"
                value={
                  difficulty.label
                }
                onChange={
                  handleDifficultyChange
                }
              >

                <option value="Easy">
                  Easy
                </option>

                <option value="Medium">
                  Medium
                </option>

                <option value="Hard">
                  Hard
                </option>

              </select>

            </div>


            <button
              type="button"
              className={
                styles.newGameButton
              }
              onClick={() =>
                startNewGame()
              }
            >

              <FaRedo
                aria-hidden="true"
              />

              <span>
                New Puzzle
              </span>

            </button>

          </div>


          {/* ===============================================
              MESSAGE
          ============================================== */}

          {message && (
            <div
              className={
                isCompleted
                  ? styles.successMessage
                  : styles.gameMessage
              }
              role="status"
              aria-live="polite"
            >

              {isCompleted && (
                <FaTrophy
                  aria-hidden="true"
                />
              )}

              <span>
                {message}
              </span>

            </div>
          )}


          {/* ===============================================
              BOARD AREA
          ============================================== */}

          <div className={styles.boardArea}>

            <div
              className={
                styles.sudokuBoardWrapper
              }
            >

              <div
                className={`${styles.sudokuBoard} ${
                  gameStatus ===
                  GAME_STATUS.PAUSED
                    ? styles.boardPaused
                    : ""
                }`}
                role="grid"
                aria-label="Sudoku puzzle"
              >

                {board.map(
                  (
                    row,
                    rowIndex
                  ) => (

                    <React.Fragment
                      key={rowIndex}
                    >

                      {row.map(
                        (
                          value,
                          columnIndex
                        ) => {

                          const given =
                            isGivenCell(
                              rowIndex,
                              columnIndex
                            );

                          const selected =
                            isSelectedCell(
                              rowIndex,
                              columnIndex
                            );

                          const related =
                            isRelatedCell(
                              rowIndex,
                              columnIndex
                            );

                          const sameNumber =
                            isSameNumber(
                              rowIndex,
                              columnIndex
                            );

                          const conflict =
                            isConflictingCell(
                              rowIndex,
                              columnIndex
                            );

                          return (
                            <button
                              key={`${rowIndex}-${columnIndex}`}
                              type="button"
                              className={[
                                styles.sudokuCell,

                                given
                                  ? styles.givenCell
                                  : styles.editableCell,

                                selected
                                  ? styles.selectedCell
                                  : "",

                                related
                                  ? styles.relatedCell
                                  : "",

                                sameNumber
                                  ? styles.sameNumberCell
                                  : "",

                                conflict
                                  ? styles.conflictCell
                                  : "",

                                columnIndex %
                                    BOX_SIZE ===
                                  2 &&
                                columnIndex !==
                                  BOARD_SIZE -
                                    1
                                  ? styles.boxRightBorder
                                  : "",

                                rowIndex %
                                    BOX_SIZE ===
                                  2 &&
                                rowIndex !==
                                  BOARD_SIZE -
                                    1
                                  ? styles.boxBottomBorder
                                  : "",
                              ]
                                .filter(
                                  Boolean
                                )
                                .join(" ")}
                              onClick={() =>
                                handleCellClick(
                                  rowIndex,
                                  columnIndex
                                )
                              }
                              role="gridcell"
                              aria-label={`Row ${
                                rowIndex + 1
                              }, Column ${
                                columnIndex + 1
                              }${
                                value
                                  ? `, ${value}`
                                  : ", empty"
                              }${
                                given
                                  ? ", given"
                                  : ""
                              }`}
                            >

                              {value !==
                              EMPTY_CELL
                                ? value
                                : ""}

                            </button>
                          );
                        }
                      )}

                    </React.Fragment>
                  )
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

                    <div
                      className={
                        styles.pauseContent
                      }
                    >

                      <FaPause
                        aria-hidden="true"
                      />

                      <h3>
                        Game Paused
                      </h3>

                      <p>
                        Resume when you're
                        ready to continue.
                      </p>

                      <button
                        type="button"
                        onClick={
                          handlePauseToggle
                        }
                        className={
                          styles.resumeButton
                        }
                      >

                        <FaPlay
                          aria-hidden="true"
                        />

                        Resume Game

                      </button>

                    </div>

                  </div>
                )}

              </div>

            </div>


            {/* =============================================
                NUMBER PAD
            ============================================== */}

            <div
              className={
                styles.numberPad
              }
              aria-label="Number pad"
            >

              {[
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
              ].map(
                (number) => (

                  <button
                    key={number}
                    type="button"
                    className={
                      styles.numberButton
                    }
                    onClick={() =>
                      handleNumberInput(
                        number
                      )
                    }
                    disabled={
                      gameStatus !==
                      GAME_STATUS.PLAYING
                    }
                    aria-label={`Enter ${number}`}
                  >

                    <span>
                      {number}
                    </span>

                    <small>
                      {numberCounts[
                        number
                      ] >= 9
                        ? "✓"
                        : ""}
                    </small>

                  </button>

                )
              )}


              <button
                type="button"
                className={
                  styles.clearButton
                }
                onClick={
                  handleClearCell
                }
                disabled={
                  gameStatus !==
                  GAME_STATUS.PLAYING
                }
                aria-label="Clear selected cell"
              >

                <FaTrash
                  aria-hidden="true"
                />

                <span>
                  Clear
                </span>

              </button>

            </div>

          </div>


          {/* ===============================================
              CHECK BUTTON
          ============================================== */}

          <div className={styles.checkArea}>

            <button
              type="button"
              className={
                styles.checkButton
              }
              onClick={
                handleCheckPuzzle
              }
              disabled={
                gameStatus !==
                GAME_STATUS.PLAYING
              }
            >

              <FaCheck
                aria-hidden="true"
              />

              <span>
                Check Puzzle
              </span>

            </button>

          </div>


          {/* ===============================================
              HOW TO PLAY
          ============================================== */}

          <section
            className={
              styles.instructions
            }
          >

            <div
              className={
                styles.instructionsHeader
              }
            >

              <span
                className={
                  styles.sectionLabel
                }
              >
                HOW TO PLAY
              </span>

              <h2>
                Sudoku Rules
              </h2>

            </div>


            <div
              className={
                styles.rulesGrid
              }
            >

              <div
                className={
                  styles.ruleCard
                }
              >

                <span>
                  01
                </span>

                <div>

                  <h3>
                    Fill the grid
                  </h3>

                  <p>
                    Enter numbers from
                    1 to 9 into the empty
                    cells.
                  </p>

                </div>

              </div>


              <div
                className={
                  styles.ruleCard
                }
              >

                <span>
                  02
                </span>

                <div>

                  <h3>
                    Complete every row
                  </h3>

                  <p>
                    Each row must contain
                    every number from
                    1 to 9 exactly once.
                  </p>

                </div>

              </div>


              <div
                className={
                  styles.ruleCard
                }
              >

                <span>
                  03
                </span>

                <div>

                  <h3>
                    Complete every column
                  </h3>

                  <p>
                    Each column must also
                    contain numbers 1
                    through 9 without
                    repetition.
                  </p>

                </div>

              </div>


              <div
                className={
                  styles.ruleCard
                }
              >

                <span>
                  04
                </span>

                <div>

                  <h3>
                    Complete every box
                  </h3>

                  <p>
                    Each 3×3 box must
                    contain numbers 1
                    through 9 exactly
                    once.
                  </p>

                </div>

              </div>

            </div>

          </section>


          {/* ===============================================
              NEW PUZZLE CTA
          ============================================== */}

          <div
            className={
              styles.bottomActions
            }
          >

            <button
              type="button"
              className={
                styles.secondaryNewGameButton
              }
              onClick={() =>
                startNewGame()
              }
            >

              <FaRedo
                aria-hidden="true"
              />

              Play Another Puzzle

            </button>

          </div>

        </div>

      </section>

    </main>
  );
};

export default Sudoku;