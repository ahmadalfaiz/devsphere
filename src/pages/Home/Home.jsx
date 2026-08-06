import { useEffect } from "react";
import { setSEO } from "../../utils/seo";

import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import TrendingSection from "./components/TrendingSection";
import CategoriesSection from "./components/CategoriesSection";
import CTASection from "./components/CTASection";
import LatestSection from "./components/LatestSection";

function Home() {

  useEffect(() => {

    setSEO({
      title:
        "DevSphere - Learn Programming, Latest Technology & Software Engineering",
      description:
        "Learn programming with comprehensive tutorials, courses, coding practice, interview preparation, AI, web development, backend development, frontend development, and real-world projects on DevSphere.",
      keywords:
        "Programming Tutorials, HTML Tutorial, CSS Tutorial, JavaScript Tutorial, React Tutorial, Next.js Tutorial, Node.js Tutorial, Express.js Tutorial, REST API Tutorial, Web Development, Software Engineering, Coding Interview Preparation",
      url: "/",
    });

  }, []);

  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <TrendingSection />
      <CategoriesSection />
      <CTASection />
      <LatestSection />
    </>
  );
}

export default Home;