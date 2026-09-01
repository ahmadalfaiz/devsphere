import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ScrollToTop from "./components/common/ScrollToTop";
import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home/Home";

import Profile from "./pages/Profile/Profile";
import Tutorials from "./pages/Tutorials/Tutorials";
import TutorialCourse from "./pages/Tutorials/TutorialCourse";
import TutorialLesson from "./pages/Tutorials/TutorialLesson";

import Courses from "./pages/Courses/Courses";
import CourseDetails from "./pages/Courses/CourseDetails";

import NotFound from "./pages/Errors/NotFound";

import Articles from "./pages/Articles/Articles";
import ArticlesDetails from "./pages/Articles/ArticlesDetails";

import Contact from "./pages/Contact/Contact";
import PrivacyPolicy from "./pages/Privacy/PrivacyPolicy";
import Terms from "./pages/Terms/Terms";
import Cookies from "./pages/Cookies/Cookies";

import Games from "./pages/Games/Games";
import Sudoku from "./pages/Games/components/Sudoku";
import Wordle from "./pages/Games/components/Wordle";
import Octordle from "./pages/Games/components/Octordle";

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>

        <Route path="/" element={<MainLayout />}>

          <Route index element={<Home />} />

          <Route path="profile" element={<Profile />}/>

          <Route path="tutorials" element={<Tutorials />}/>
          <Route path="tutorials/:slug" element={<TutorialCourse />}/>
          <Route path="tutorials/:slug/:lessonSlug" element={<TutorialLesson />}/>

          <Route path="courses" element={<Courses />}/>
          <Route path="courses/:slug" element={<CourseDetails />}/>

          <Route path="*" element={<NotFound />} />

          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:slug" element={<ArticlesDetails />}/>

          <Route path="/contact-us" element={<Contact />}/>
          <Route path="/privacy-policy" element={<PrivacyPolicy />}/>
          <Route path="/terms-of-service" element={<Terms />} />
          <Route path="/cookies-policy" element={<Cookies />}/>

          <Route path="/games" element={<Games />} />
          <Route path="/games/sudoku" element={<Sudoku />} />
          <Route path="/games/wordle" element={<Wordle />} />
          <Route path="/games/octordle" element={<Octordle />} />

        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;