import { useState, useEffect } from "react";
import styles from "./Profile.module.css";
import LearningJourney from "./LearningJourney";
import AchievementShowcase from "./AchievementShowcase";
import RecentActivity from "./RecentActivity";

function Profile() {

  const [profileData, setProfileData] =
    useState(null);

  useEffect(() => {

    const fetchProfile = async () => {

      try {

        const user = JSON.parse(
          localStorage.getItem("user")
        );

        if (!user) return;

        const response =
          await fetch(
            `http://localhost:5000/api/profile?email=${user.email}`
          );

        const data =
          await response.json();

        if (data.success) {

          setProfileData({

            name: data.user.name,
            email: data.user.email,
            picture: data.user.picture || "",

            role:
              data.user.role ||
              "Full Stack Developer",

            location:
              data.user.location ||
              "India",

            joined:
              data.user.joined ||
              "Recently",

            coursesCompleted:
              data.user.coursesCompleted || 0,

            problemsSolved:
              data.user.problemsSolved || 0,

            learningStreak:
              data.user.learningStreak || 0,

            followers:
              data.user.followers || 0,

            following:
              data.user.following || 0,

            certificates:
              data.user.certificates || 0,

            learning:
              data.user.learning || [],

            learningJourney:
              data.learningJourney || [],

          });

          useEffect(() => {
            console.log(profileData);
          }, [profileData]);

        }

      } catch (error) {

        console.error(error);

      }

    };

    fetchProfile();

  }, []);

  if (!profileData) {

    return (
      <h1
        style={{
          color: "white",
          textAlign: "center",
          marginTop: "150px",
        }}
      >
        Loading Profile...
      </h1>
    );

  }

  return (

    <main className={styles.profilePage}>

      {/* HERO SECTION */}

      <section className={styles.heroSection}>

        {/* COVER BANNER */}

        <div className={styles.coverBanner}>

          <div className={styles.floatingTech}>
            <span>{"</>"}</span>
            <span>React</span>
            <span>JS</span>
            <span>AI</span>
            <span>ML</span>
            <span>{"{}"}</span>
          </div>

          <h2>
            BUILDING THE NEXT
            GENERATION OF DEVELOPERS
          </h2>

          <p>
            Learn. Build. Grow.
          </p>

        </div>

        {/* PROFILE CARD */}

        <div className={styles.profileCard}>

          {/* AVATAR */}

          <div className={styles.avatarWrapper}>

            <div className={styles.avatar}>

            {profileData.picture ? (

              <img
                src={profileData.picture}
                alt={profileData.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "50%",
                }}
              />

            ) : (

              profileData.name.charAt(0)

            )}

          </div>

          </div>

          {/* USER INFO */}

          <div className={styles.userInfo}>

            <h1>
              {profileData.name}
            </h1>

            <div className={styles.roleBadge}>
              🚀 {profileData.role}
            </div>

            <div className={styles.metaInfo}>

              <span>
                📍 {profileData.location}
              </span>

              <span>
                📅 Joined {profileData.joined}
              </span>

            </div>

          </div>

          {/* ACTION BUTTONS */}

          <div className={styles.actionButtons}>

            <button
              className={styles.primaryBtn}
            >
              Edit Profile
            </button>

            <button
              className={styles.secondaryBtn}
            >
              Share Profile
            </button>

          </div>

        </div>

        {/* STATS */}

        <div className={styles.statsGrid}>

          <div className={styles.statCard}>

            <div className={styles.statIcon}>
              📚
            </div>

            <h3>
              {profileData.coursesCompleted}
            </h3>

            <p>
              Courses
            </p>

          </div>

          <div className={styles.statCard}>

            <div className={styles.statIcon}>
              💻
            </div>

            <h3>
              {profileData.problemsSolved}
            </h3>

            <p>
              Problems Solved
            </p>

          </div>

          <div className={styles.statCard}>

            <div className={styles.statIcon}>
              🔥
            </div>

            <h3>
              {profileData.learningStreak}
            </h3>

            <p>
              Day Streak
            </p>

          </div>

          <div className={styles.statCard}>

            <div className={styles.statIcon}>
              🏆
            </div>

            <h3>
              {profileData.certificates}
            </h3>

            <p>
              Certificates
            </p>

          </div>

          <div className={styles.statCard}>

            <div className={styles.statIcon}>
              👥
            </div>

            <h3>
              {profileData.followers}
            </h3>

            <p>
              Followers
            </p>

          </div>

          <div className={styles.statCard}>

            <div className={styles.statIcon}>
              🤝
            </div>

            <h3>
              {profileData.following}
            </h3>

            <p>
              Following
            </p>

          </div>

        </div>

        {/* CURRENTLY LEARNING */}

        <div className={styles.learningSection}>

          <h3>
            Currently Learning
          </h3>

          <div className={styles.learningTags}>

            {/*
              (profileData.learning || []).map(
                (item) => (

                  <span
                    key={item}
                    className={styles.tag}
                  >
                    {item}
                  </span>

                )
              )
            */}

            {
              profileData.learningJourney
                ?.map(
                  (item) => item.technology
                )
                .map(
                  (technology) => (

                    <span
                      key={technology}
                      className={styles.tag}
                    >
                      {technology}
                    </span>

                  )
                )
            }

          </div>

        </div>

      </section>

      {/* Learning Journey */}
      <LearningJourney 
        learningJourney={
        profileData.learningJourney || []
      }
      />

      {/* Achievement Showcase */}
      <AchievementShowcase 
        profileData={profileData}
      />

      {/* Recent Activity */}
      <RecentActivity />

    </main>

  );
}

export default Profile;