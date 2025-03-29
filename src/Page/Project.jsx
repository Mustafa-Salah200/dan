/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import image_blog from "../assets/blogs3.jpg";
import "./Project.css";

const our_Projects = [
  {
    id: 1,
    title: "Blog Post 1",
    description:
      "This is the first blog post with a long and detailed description about the topic. It covers various aspects and provides in-depth insights.",
    image: "https://example.com/images/blog1.jpg",
  },
  {
    id: 2,
    title: "Blog Post 2",
    description:
      "This is the second blog post with a long and detailed description about the topic. It covers various aspects and provides in-depth insights.",
    image: "https://example.com/images/blog2.jpg",
  },
  {
    id: 3,
    title: "Blog Post 3",
    description:
      "This is the third blog post with a long and detailed description about the topic. It covers various aspects and provides in-depth insights.",
    image: "https://example.com/images/blog3.jpg",
  },
  {
    id: 4,
    title: "Blog Post 4",
    description:
      "This is the fourth blog post with a long and detailed description about the topic. It covers various aspects and provides in-depth insights.",
    image: "https://example.com/images/blog4.jpg",
  },
  {
    id: 5,
    title: "Blog Post 5",
    description:
      "This is the fifth blog post with a long and detailed description about the topic. It covers various aspects and provides in-depth insights.",
    image: "https://example.com/images/blog5.jpg",
  },
  {
    id: 6,
    title: "Blog Post 6",
    description:
      "This is the sixth blog post with a long and detailed description about the topic. It covers various aspects and provides in-depth insights.",
    image: "https://example.com/images/blog6.jpg",
  },
  {
    id: 7,
    title: "Blog Post 7",
    description:
      "This is the seventh blog post with a long and detailed description about the topic. It covers various aspects and provides in-depth insights.",
    image: "https://example.com/images/blog7.jpg",
  },
  {
    id: 8,
    title: "Blog Post 8",
    description:
      "This is the eighth blog post with a long and detailed description about the topic. It covers various aspects and provides in-depth insights.",
    image: "https://example.com/images/blog8.jpg",
  },
  {
    id: 9,
    title: "Blog Post 9",
    description:
      "This is the ninth blog post with a long and detailed description about the topic. It covers various aspects and provides in-depth insights.",
    image: "https://example.com/images/blog9.jpg",
  },
  {
    id: 10,
    title: "Blog Post 10",
    description:
      "This is the tenth blog post with a long and detailed description about the topic. It covers various aspects and provides in-depth insights.",
    image: "https://example.com/images/blog10.jpg",
  },
];

const Project = () => {
  return (
    <div className="project_page">
      <div className="top">
        <h1>نشاطاتنا السابقة</h1>
        <p>
          Welcome to Our Blog Section , Where you find all project that we work
          on it. and the project that create by us
        </p>
      </div>
      <div className="content">
        {our_Projects.map((ele) => {
          return <Box key={ele.id} project={ele} />;
        })}
      </div>
    </div>
  );
};

export default Project;
const Box = ({ project }) => {
  return (
    <motion.div
      initial={{ y: 40, opacity: 0 ,scale: 0.8}}
      whileInView={{ y: 0, opacity: 1 ,scale:1}}
      transition={{ duration: 0.4 }}
      className="box"
    >
      <div className="image">
        <span>استكشاف</span>
      {/* <img src={image_blog} alt="" /> */}
      </div>
      <div className="info">
        <h1>نشاط عن التطور</h1>
        <p>{project.description}</p>
       
      </div>
    </motion.div>
  );
};
