import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Page/Home";
import About from "./Page/About";
import Project from "./Page/Project";
import Blogs from "./Page/Blogs";
import Blog_Details from "./Page/Blog_Details";
import Footer from "./components/Footer/Footer";
import Senate from "./Page/Senate";

const App = () => {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/senate" element={<Senate/>} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<Blog_Details />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
