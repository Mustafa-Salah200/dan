import { motion } from "framer-motion";
import image from "../../assets/man.jpg";
import quote from "../../assets/quote.svg";
import "./Testimonials.css";
const Testimonials = () => {
  const client = [
    {
      id: 1,
      name: "John Duy",
      description: "impressed by the professionalism and attention to detail",
      email: "john.duy@gmail.com",
      image: "",
    },
    {
      id: 1,
      name: "John Duy",
      description: "impressed by the professionalism and attention to detail",
      email: "john.duy@gmail.com",
      image: "",
    },
    {
      id: 1,
      name: "John Duy",
      description: "impressed by the professionalism and attention to detail",
      email: "john.duy@gmail.com",
      image: "",
    },
  ];
  return (
    <section className="testimonials">
      <div className="top">
        <h3>Testimonials</h3>
        <h1>ما يقوله طلابنا عنا </h1>
      </div>
      <div className="content">
        {client &&
          client.map((ele) => {
            return (
              
              <motion.div
              initial={{scale: 0.7}}
              whileInView={{scale:1}}
              transition={{duration: 0.5}}
              className="client" key={ele.email}>
                <h1>
                  <p>
                    <img src={quote} alt="" />
                  </p>
                  {ele.description}
                </h1>
                {/* <div className="bottom">
                  <div className="info">
                    <div className="left">
                      <img src={image} alt="" />
                    </div>
                    <div className="right">
                      <h3>{ele.name}</h3>
                      <span>{ele.email}</span>
                    </div>
                  </div>
                  <p></p>
                </div> */}
              </motion.div>
            );
          })}
      </div>
    </section>
  );
};

export default Testimonials;
