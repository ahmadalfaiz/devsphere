import React from "react";
import { Link } from "react-router-dom";
import { FaPuzzlePiece, FaArrowRight } from "react-icons/fa";
import styles from "./Games.module.css";
import { useEffect } from "react";
import { setSEO } from "../../utils/seo";

const games = [
  {
    id: "sudoku",
    title: "Sudoku",
    description: "Fill the grid with numbers from 1 to 9 without repeating them in any row, column, or 3×3 box.",
    category: "Number Puzzle",
    difficulty: "Medium",
    icon: "🔢",
    path: "/games/sudoku",
  },
  {
    id: "wordle",
    title: "Wordle",
    description: "Guess the hidden five-letter word.",
    category: "Word Puzzle",
    difficulty: "Medium",
    icon: "🔤",
    path: "/games/wordle",
  },
  {
    id: "octordle",
    title: "Octordle",
    description: "Solve eight word puzzles simultaneously.",
    category: "Word Puzzle",
    difficulty: "Hard",
    icon: "🧩",
    path: "/games/octordle",
  },
];

const Games = () => {

  useEffect(() => {
    setSEO({
      title: "Games - DevSphere",
      description:
        "Play free interactive games on DevSphere, including Sudoku, Wordle, Octordle, and more.",
      keywords:
        "DevSphere Games, online games, Sudoku, Wordle, Octordle, word games, puzzle games",
      url: "/games",
    });
  }, []);

  return (
    <main className={styles.gamesPage}>

      {/* =========================================
          GAMES HEADER
      ========================================== */}
      <section className={styles.gamesHeader}>

        <div className={styles.headerContent}>

          <span className={styles.headerLabel}>
            <FaPuzzlePiece aria-hidden="true" />
            DAILY GAMES & PUZZLES
          </span>

          <h1 className={styles.gamesTitle}>
            Games
          </h1>

          <p className={styles.gamesSubtitle}>
            Take a quick break and challenge yourself with
            puzzles, brain games, and daily challenges.
          </p>

        </div>

      </section>


      {/* =========================================
          GAMES CONTENT
      ========================================== */}
      <section className={styles.gamesSection}>

        <div className={styles.gamesContainer}>

          {/* =====================================
              SECTION INTRO
          ====================================== */}
          <div className={styles.sectionIntro}>

            <div>
              <span className={styles.sectionLabel}>
                PUZZLE COLLECTION
              </span>

              <h2 className={styles.sectionTitle}>
                Choose a game
              </h2>
            </div>

            <p className={styles.sectionDescription}>
              Play quick and engaging games designed to
              challenge your logic, memory, vocabulary,
              and problem-solving skills.
            </p>

          </div>


          {/* =====================================
              GAMES GRID
          ====================================== */}
          <div className={styles.gamesGrid}>

            {games.map((game) => (
              <Link
                key={game.id}
                to={game.path}
                className={styles.gameCard}
              >

                {/* Game Icon */}
                <div className={styles.gameIcon}>
                  <span aria-hidden="true">
                    {game.icon}
                  </span>
                </div>


                {/* Game Information */}
                <div className={styles.gameContent}>

                  <div className={styles.gameTopRow}>

                    <h3 className={styles.gameTitle}>
                      {game.title}
                    </h3>

                    <span className={styles.gameDifficulty}>
                      {game.difficulty}
                    </span>

                  </div>

                  <span className={styles.gameCategory}>
                    {game.category}
                  </span>

                  <p className={styles.gameDescription}>
                    {game.description}
                  </p>

                </div>


                {/* Card Arrow */}
                <div className={styles.gameArrow}>
                  <FaArrowRight aria-hidden="true" />
                </div>

              </Link>
            ))}

          </div>


          {/* =====================================
              FUTURE GAMES MESSAGE
          ====================================== */}
          <div className={styles.comingSoon}>

            <div className={styles.comingSoonIcon}>
              <FaPuzzlePiece aria-hidden="true" />
            </div>

            <div className={styles.comingSoonContent}>

              <h3 className={styles.comingSoonTitle}>
                More games are coming
              </h3>

              <p className={styles.comingSoonText}>
                New puzzles and quick daily games will be
                added to the collection over time.
              </p>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
};

export default Games;