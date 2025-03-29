/* eslint-disable react/prop-types */
import "./Services.css";
import facebook from "../../assets/facebook.svg";
import ibm from "../../assets/ibm.svg";
import slack from "../../assets/slack.svg";
import google from "../../assets/google.svg";
import design from "../../assets/design.svg"; 
import google_ads from "../../assets/google-ads.svg"; 
import code from "../../assets/code.svg"; 
import code_pull from "../../assets/code-pull.svg"; 
import projects_icon from "../../assets/projects.svg"; 



import { motion } from "framer-motion";

const Services = () => {
  const services = [
    "Google Ads",
    "Front-End",
    "Back-End",
    "Design",
    "Project Management",
  ];
  return (
    <section className="services">
      <div className="top">
        <h2>
          لقد ساهمنا مع اكثر من <span>+20 شركة</span>
        </h2>
        <div className="logos">
          <img src={google} alt="" />
          <img src={facebook} alt="" />
          <img src={ibm} alt="" />
          <img src={slack} alt="" />
          <h2>Zoom</h2>
        </div>
      </div>
      <div className="services_content_container">
        <div className="content">
          <div className="">
            <h1 className="title">افضل الخدمات</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
              eum quos, optio, ullam magnam quasi modi ipsa laboriosam hic
              dolorum ratione ipsum id
            </p>
            <motion.button
            whileHover={{scaleX: 1.1}}
            >Let&apos;s Talk</motion.button>
          </div>

          <Service service={services[0]} image={google_ads} />
          <Service service={services[1]} image={code} />
          <Service service={services[2]} image={code_pull} />
          <Service service={services[3]} image={design} />
          <Service service={services[4]} image={projects_icon} />
          
        </div>
      </div>
    </section>
  );
};

export default Services;

const Service = ({ service, image }) => {
  return (
    <motion.div
    whileHover={{rotate: -5,scale: 1.1}}
    transition={{ duration: 0.3,stiffness: 100, damping: 8}}
      className="service"
    >
      <h1>
        <img src={image} alt="" />
        {service}
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ex veniam
        amet culpa reprehenderit sit reiciendis porro cum iusto at.
      </p>
      <span>Read more</span>
    </motion.div>
  );
};
