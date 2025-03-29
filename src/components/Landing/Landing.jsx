import { motion } from "framer-motion";
import "./Landing.css";
import { useNavigate } from "react-router-dom";
const Landing = () => {
  const navigate = useNavigate()
  return (
    <section className="landing-container">
      <div className="landing">
        <div className="border">
          <p className="one"></p>
          <p className="two"></p>
        </div>
        <div className="bg"></div>
        <div className="left">
          <h1>
          أكاديمية دان البريطانية للعلوم والتكنولوجيا <span>بالعلم نسمو ونرقى 
          </span>
          </h1>
          <p>
          أهلا ومرحبا بكم
في صرحنا الخضم العالي الذي هو امتدادا لمعهد دان الذي  تعالت  همته ووصلت عنان السماء وحقق الكثير عبر كوادره في أنحاء العالم 🌏
بذرة نجاح وضعت في العام 2020 وتنامت اليوم بتأسيس صرح الجامعة
          </p>
          <div className="btn">
            <motion.button 
            whileHover={{scaleX: 1.1}}
            className="btn1" onClick={()=> navigate("/blogs")}>اكتشف المزيد</motion.button>
            <motion.button
            whileHover={{scaleX: 1.1}}
            className="btn2" onClick={()=> navigate("/about")}>اكتشف المزيد عنا</motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
