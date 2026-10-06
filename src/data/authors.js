// ============================================================
// authors.js
// One place for author info. Tutorials reference an authorId
// instead of repeating name/avatar/socials in every file.
// ============================================================

//const authors = {

import faizAhmadImage from "../assets/images/faiz-ahmad.jpeg";

export const authors = {
  faiz: {
    slug: "faiz-ahmad",
    name: "Faiz Ahmad",
    role: "Founder & Developer",
    bio: "Faiz Ahmad is the founder and developer of DevSphere, where he creates practical and in-depth learning resources for developers and students. His work focuses on programming, web development, software engineering, and computer science.",
    avatar: faizAhmadImage,
    social: {
      github: "https://github.com/ahmadalfaiz",
      linkedin: "https://www.linkedin.com/in/faiz-ahmad-865613270/",
      instagram: "https://www.instagram.com/faiz_al_ahmad484/",
      twitter: "",
      website: "https://ahmadalfaiz.github.io/portfolio/Portfolio.html"
    }
  }

  // Add more authors here as DevSphere grows:
  // someoneElse: { name: "...", avatar: "...", twitter: "...", github: "..." }
};

//export default { authors };


//---------------------

// module.exports = { authors };