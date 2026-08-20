import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

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

function App() {
  return (
    <BrowserRouter>

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

          <Route path="/contact-us" element={<Contact />} />

        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;