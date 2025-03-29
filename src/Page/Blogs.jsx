/* eslint-disable react/prop-types */
import "./Blogs.css";
import image_blog from "../assets/blogs2.jpg";
import arrow from "../assets/arrow-right.svg";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const our_Blogs = [
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

const Blogs = () => {
  return (
    <div className="blogs_page">
      <div className="top">
        <h1>مقالاتنا السابقة</h1>
        <p>
         Lorem, ipsum dolor sit amet consectetur adipisicing elit. At quaerat soluta culpa quae. Nulla reprehenderit nemo recusandae expedita quam. In consequatur quibusdam, enim corrupti nihil mollitia quisquam sed est iusto!
        </p>
      </div>
      <div className="content">
        {our_Blogs.map((ele) => {
          return <Box key={ele.id} blog={ele} />;
        })}
      </div>
    </div>
  );
};

export default Blogs;

const Box = ({ blog }) => {
  const navigate = useNavigate()
  return (
    <motion.div
      initial={{ y: 90, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9 }}
      className="box"
    >
      <div className="image">
        {/* <img src={image_blog} alt="" /> */}
      </div>
      <div className="info">
        <h1>مقال عن الجامعات</h1>
        <p>{blog.description}</p>
        <span onClick={()=> navigate(`/blogs/${blog.id}`)}>
          قراءة المزيد
          <img src={arrow} alt="" />
        </span>
      </div>
    </motion.div>
  );
};
