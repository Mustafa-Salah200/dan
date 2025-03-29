/* eslint-disable react/prop-types */
import "./Blogs.css";
import vector from "../../assets/Vector.png";
import blog1 from "../../assets/blogs1.jpg";
import blog2 from "../../assets/blogs2.jpg";
import blog3 from "../../assets/blogs3.jpg";
import arrow from "../../assets/arrow-right.svg";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Blogs = () => {
  const blogs = [
    {
      id: 1,
      name: "John Duy",
      title: "Seo Mode Simple: Step by Step",
      category: "Web Interface",
      description: "impressed by the professionalism and attention to detail",
      email: "john.duy@gmail.com",
      image: "",
    },
    {
      id: 1,
      name: "John Duy",
      title: "Seo Mode Simple: Step by Step",
      category: "UI/UX Design",
      description: "impressed by the professionalism and attention to detail",
      email: "john.duy@gmail.com",
      image: "",
    },
    {
      id: 1,
      name: "John Duy",
      title: "Seo Mode Simple: Step by Step",
      category: "Web Development",
      description: "impressed by the professionalism and attention to detail",
      email: "john.duy@gmail.com",
      image: "",
    },
  ];
  const navigate = useNavigate();
  return (
    <div className="blogs">
      <h1 className="mark">
        مقالاتنا
        {/* <img src={vector} alt="" /> */}
      </h1>
      <div className="blogs_box">
        <Blog blog={blogs[0]} image={blog1} />
        <Blog blog={blogs[1]} image={blog2} />
        <Blog blog={blogs[2]} image={blog3} />
      </div>
      <div className="btn">
        <motion.button
          whileHover={{ scaleX: 1.1 }}
          onClick={() => navigate("/blogs")}
        >
          قراءة المزيد
        </motion.button>
      </div>
    </div>
  );
};

export default Blogs;

const Blog = ({ blog, image }) => {
  const navigate = useNavigate()
  return (

    <motion.div
      initial ={{ scale: 0.8 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.5 }}
      className="blog"
    >
      <img src={image} alt="" />
      <div className="info">
        <h3>{blog.category}</h3>
        <h1>{blog.title}</h1>
        <span  onClick={()=> navigate("/blogs")}>
          Read more
          <img src={arrow} alt="" />
        </span>
      </div>
    </motion.div>
  );
};
