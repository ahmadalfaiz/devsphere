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

        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;