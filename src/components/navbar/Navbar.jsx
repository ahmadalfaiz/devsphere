import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import AuthModal from "../auth/AuthModal";

function Navbar() {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authType, setAuthType] = useState("login");
  const [user, setUser] = useState(null);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  useEffect(() => {
    const handleStorageChange = () => {
      const storedUser = localStorage.getItem("user");

      if (storedUser) {
        setUser(JSON.parse(storedUser));
      } else {
        setUser(null);
      }
    };

    window.addEventListener(
      "storage",
      handleStorageChange
    );

    handleStorageChange();

    return () => {
      window.removeEventListener(
        "storage",
        handleStorageChange
      );
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setShowProfileMenu(false);

    window.dispatchEvent(
      new Event("storage")
    );

    setUser(null);
  };

  useEffect(() => {

    const handleClickOutside = () => {
      setShowProfileMenu(false);
    };

    document.addEventListener(
      "click",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "click",
        handleClickOutside
      );
    };

  }, []);

  return (
    <header className={styles.header}>

      {/* TOP NAVBAR */}
      <nav className={styles.mainNavbar}>

        <div className={styles.topNavbar}>

          {/* LOGO */}

          <div className={styles.logo}>
            <h1>DevSphere</h1>
          </div>

          {/* SEARCH BAR */}

          <div className={styles.searchBox}>
            <input
              type="text"
              placeholder="Search tutorials, courses, articles..."
            />
          </div>

          {/* MAIN NAVIGATION */}

          <nav className={styles.mainNav}>

              <Link to="/">Home</Link>

              <div className={styles.dropdown}>

                  <span className={styles.dropdownTitle}>Courses ▾</span>

                  <div className={styles.dropdownMenu}>

                      <Link to="/courses/webdev">Web Development</Link>
                      <Link to="/courses/dsa">DSA</Link>
                      <Link to="/courses/python">Python</Link>
                      <Link to="/courses/machine-learning">Machine Learning</Link>

                  </div>

              </div>

              <div className={styles.dropdown}>

                  <span className={styles.dropdownTitle}>Tutorials ▾</span>

                  <div className={styles.dropdownMenu}>

                      <Link to="/tutorials/react">React</Link>
                      <Link to="/tutorials/javascript">JavaScript</Link>
                      <Link to="/tutorials/java">Java</Link>
                      <Link to="/tutorials/cpp">C++</Link>

                  </div>

              </div>

              <div className={styles.dropdown}>

                  <span className={styles.dropdownTitle}>Practice ▾</span>

                  <div className={styles.dropdownMenu}>

                      <Link to="/practice/problems">Problems</Link>
                      <Link to="/practice/quizzes">Quizzes</Link>
                      <Link to="/practice/interview">Interview Prep</Link>
                      <Link to="/practice/contests">Contests</Link>

                  </div>

              </div>

            <Link to="/blogs">Blogs</Link>
            <Link to="/jobs">Jobs</Link>

          </nav>

          {/* RIGHT SECTION */}

          <div className={styles.rightSection}>

            {/* THEME BUTTON */}

            <button className={styles.themeBtn}>☀</button>

            {/* AUTH BUTTONS */}

            <div className={styles.authButtons}>

              {user ? (

                <div className={styles.profileWrapper}>

                  <button
                    className={styles.profileBtn}
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowProfileMenu(!showProfileMenu);
                    }}
                  >
                    <div className={styles.navAvatar}>
                      {user.name.charAt(0).toUpperCase()}
                    </div>

                    <span>{user.name}</span>

                    <span>▾</span>

                  </button>

                  {
                    showProfileMenu && (

                      <div className={styles.profileDropdown}>
                      
                        <div className={styles.profileHeader}>

                          <div className={styles.avatar}>
                            {user.name.charAt(0).toUpperCase()}
                          </div>

                          <div>
                            <h4>{user.name}</h4>
                            <p>{user.email}</p>
                          </div>

                        </div>

                        <Link to="/profile">
                          👤 My Profile
                        </Link>

                        <Link to="/settings">
                          ⚙️ Settings
                        </Link>

                        <Link to="/saved-courses">
                          📚 Saved Courses
                        </Link>

                        <Link to="/progress">
                          📈 My Progress
                        </Link>

                        <div className={styles.dropdownDivider}></div>

                        <button
                          onClick={handleLogout}
                          className={styles.logoutBtn}
                        >
                          🚪 Logout
                        </button>

                      </div>

                    )
                  }

                </div>

              ) : (

                <>
                  <button
                    className={styles.loginBtn}
                    onClick={() => {
                      setShowAuthModal(true);
                      setAuthType("login");
                    }}
                  >
                    Login
                  </button>

                  <button
                    className={styles.registerBtn}
                    onClick={() => {
                      setShowAuthModal(true);
                      setAuthType("register");
                    }}
                  >
                    Register
                  </button>
                </>

              )}

            </div>

          </div>

        </div>

        {/* BOTTOM NAVBAR */}

        <div className={styles.bottomNavbar}>

          <Link to="/dsa">DSA</Link>
          <Link to="/webdev">Web Dev</Link>
          <Link to="/python">Python</Link>
          <Link to="/javascript">JavaScript</Link>
          <Link to="/java">Java</Link>
          <Link to="/cpp">C++</Link>
          <Link to="/ai">AI</Link>
          <Link to="/machine-learning">Machine Learning</Link>
          <Link to="/data-science">Data Science</Link>
          <Link to="/devops">DevOps</Link>

        </div>
        
      </nav>

      {
        showAuthModal && (
          <AuthModal
            authType={authType}
            setAuthType={setAuthType}
            closeModal={() => setShowAuthModal(false)}
          />
        )
      }

    </header>
  );
}

export default Navbar;