import { useState } from "react";
import logo from "../../assets/logo.png";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  return (
    <nav>
      <div className="navbar">
        <div className="logo">
          <h1 onClick={() => navigate("/")}>
            <img src={logo} alt="" />
            أكاديمية دان البريطانية للعلوم والتكنولوجيا{" "}
          </h1>
        </div>
        <ul className="links">
          <li onClick={() => navigate("/")}>الرئسية</li>
          <li onClick={() => navigate("/about")}>نبذة عنا</li>
          <li onClick={() => navigate("/projects")}>مشاريع</li>
          <li onClick={() => navigate("/blogs")}>مقالات</li>
          <li onClick={() => navigate("/senate")}>مجلس الشيوخ</li>
        </ul>

        <div className="bar">
          <svg
            onClick={() => setShow(!show)}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
          </svg>
          {show && (
            <ul className="menu">
              <li
                onClick={() => {
                  setShow(false);
                  navigate("/");
                }}
              >
                الرئسية
              </li>
              <li
                onClick={() => {
                  setShow(false);
                  navigate("/about");
                }}
              >
                نبذة عنا
              </li>
              <li
                onClick={() => {
                  setShow(false);
                  navigate("/projects");
                }}
              >
                مشاريع
              </li>
              <li
                onClick={() => {
                  setShow(false);
                  navigate("/blogs");
                }}
              >
                مقالات
              </li>
              <li
                onClick={() => {
                  setShow(false);
                  navigate("/senate");
                }}
              >
                مجلس الشيوخ
              </li>

              {/*               
              <li onClick={() => setShow(false)}>
                <a href="#">Home</a>
              </li>
              <li onClick={() => setShow(false)}>
                <a href="#">Blogs</a>
              </li>
              <li onClick={() => setShow(false)}>
                <a href="#">About</a>
              </li>
              <li onClick={() => setShow(false)}>
                <a href="#">Login</a>
              </li>
              <button onClick={() => setShow(false)} className="btn-primary">
                Sign up
              </button> */}
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
