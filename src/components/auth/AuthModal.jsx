import { useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import styles from "./AuthModal.module.css";

function AuthModal({ authType, setAuthType, closeModal }) {
  
  /* Added part here */
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  /* upto this */

  /* Added part here */
  const handleSubmit = async (e) => {
  e.preventDefault();

  try {

    if (authType === "register") {

      if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
      }

      const response = await fetch(
        "http://localhost:5000/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      alert(data.message);

      if (data.success) {
        setAuthType("login");
      }

    } else {

      const response = await fetch(
        "http://localhost:5000/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      if (data.success) {

        localStorage.setItem(
          "token",
          data.token
        );

        localStorage.setItem(
          "user",
          JSON.stringify(data.user)
        );

        window.dispatchEvent(
          new Event("storage")
        );

        alert("Login Successful");

        closeModal();

      } else {
        alert(data.message);
      }
    }

  } catch (error) {

    console.error(error);

    alert("Something went wrong");
  }
};

  /* Upto this */

  /* New Added Part here Google Login */
  const handleGoogleSuccess = async (
    credentialResponse
  ) => {
    try {

      const response = await fetch(
        "http://localhost:5000/api/auth/google",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            credential:
              credentialResponse.credential,
          }),
        }
      );

      const data = await response.json();

      if (data.success) {

        localStorage.setItem(
          "token",
          data.token
        );

        localStorage.setItem(
          "user",
          JSON.stringify(data.user)
        );

        window.dispatchEvent(
          new Event("storage")
        );

        closeModal();

      } else {
        alert("Google Login Failed");
      }

    } catch (error) {

      console.error(error);

      alert("Google Login Failed");

    }
  };
  /* Upto this google login added part */

  /* New added part here */

  const googleLogin = useGoogleLogin({
    flow: "implicit",

    onSuccess: async (tokenResponse) => {
      try {

        const userInfoResponse = await fetch(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization:
                `Bearer ${tokenResponse.access_token}`,
            },
          }
        );

        const userInfo =
          await userInfoResponse.json();

        const response = await fetch(
          "http://localhost:5000/api/auth/google",
          {
            method: "POST",
            headers: {
              "Content-Type":
                "application/json",
            },
            body: JSON.stringify({
              email: userInfo.email,
              name: userInfo.name,
              picture: userInfo.picture,
            }),
          }
        );

        const data =
          await response.json();

        if (data.success) {

          localStorage.setItem(
            "token",
            data.token
          );

          localStorage.setItem(
            "user",
            JSON.stringify(data.user)
          );

          window.dispatchEvent(
            new Event("storage")
          );

          closeModal();
        }

      } catch (error) {

        console.error(error);

        alert("Google Login Failed");

      }
    },
  });

  /* Upto this */ 

  return (

    <div className={styles.overlay}>

      {/* BACKGROUND SHAPES */}

      <div className={styles.shape1}></div>
      <div className={styles.shape2}></div>
      <div className={styles.shape3}></div>
      <div className={styles.shape4}></div>

      {/* MODAL CARD */}

      <div className={styles.modal}>

        {/* CLOSE BUTTON */}

        <button
          className={styles.closeBtn}
          onClick={closeModal}
        >
          ✕
        </button>

        {/* LOGO */}

        <h1 className={styles.logo}>
          DevSphere
        </h1>

        {/* TITLE */}

        <h2 className={styles.title}>
          {
            authType === "login"
              ? "Welcome Back"
              : "Create Account"
          }
        </h2>

        <p className={styles.subtitle}>
          Continue your coding journey
        </p>

        {/* FORM */}

        <form className={styles.form}
        onSubmit={handleSubmit}>

          {
            authType === "register" && (

              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) =>
                  setName(e.target.value)
                }
              />

            )
          }

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          {
            authType === "register" && (

              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) =>
                  setConfirmPassword(e.target.value)
                }
              />

            )
          }

          <button type="submit">

            {
              authType === "login"
                ? "Sign In"
                : "Create Account"
            }

          </button>

        </form>

        {/* SOCIAL LOGIN*/}
        <div className={styles.socialSection}>

          <div className={styles.divider}>
            <span>or continue with</span>
          </div>

          <div className={styles.socialButtons}>

            <button className={styles.socialBtn}
              onClick={() => googleLogin()}
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
                alt="Google"
              />
            </button>

            <button className={styles.socialBtn}>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                alt="GitHub"
              />
            </button>

            <button className={styles.socialBtn}>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg"
                alt="Facebook"
              />
            </button>

          </div>

        </div>

        {/* SWITCH */}

        <p className={styles.switchText}>

          {
            authType === "login"
              ? "Don't have an account?"
              : "Already have an account?"
          }

          <span
            onClick={() =>
              setAuthType(
                authType === "login"
                  ? "register"
                  : "login"
              )
            }
          >

            {
              authType === "login"
                ? " Register"
                : " Login"
            }

          </span>

        </p>

      </div>

    </div>
  );
}

export default AuthModal;