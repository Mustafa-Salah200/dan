/* eslint-disable react/prop-types */
import "./Services.css";
import facebook from "../../assets/facebook.svg";
import ibm from "../../assets/ibm.svg";
import slack from "../../assets/slack.svg";
import google from "../../assets/google.svg";


import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const services = [
    {
      title: "شهادات معتمدة",
      content: "نحن نقدم كورسات معتمدة تمنحك شهادة اعتماد تثبت إتقانك واجتيازك للبرنامج التدريبي. هذه الشهادات تعتبر إضافة قيمة لملفك الشخصي وتعزز فرصك الوظيفية والمهنية. نحن نضمن أن جميع الشهادات التي نمنحها تلبي المعايير العالمية وتحظى بالاعتراف والتقدير من قبل أصحاب العمل والمؤسسات."
    },
    {
      title: "مدربين محترفين",
      content: "نعتمد على فريق من المدربين المحترفين وذوي الخبرة في مجالاتهم. يتمتع مدربونا بمهارات تدريسية ممتازة وقدرة فائقة على توصيل المعلومات بشكل فعال وملهم. سيقوم المدربون بتوجيهك خلال الكورس وتقديم الدعم والمشورة لضمان تحقيق أقصى استفادة من تجربتك التعليمية."
    },
    {
      title: "كورسات متخصصة",
      content: "نحن نقدم مجموعة واسعة من الكورسات المتخصصة في شتى المجالات. سواء كنت ترغب في تعلم مهارات تقنية مثل التطوير البرمجي، أو مهارات إدارة الأعمال مثل التسويق والإدارة المالية، أو حتى مهارات الاتصال والتواصل الفعال، فإن لدينا الكورس المناسب لك. نحن نهدف إلى تلبية احتياجاتك الفردية وتوفير المعرفة والمهارات التي تحتاجها للنجاح في مجالك."
    }
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
            <h1 className="title"> ما الذي يمكننا تقديمه</h1>
            <p>
              سنظهر لك مقدراتك الخفية

            </p>

            <motion.a href="mailto:danacademy20@gmail.com"
              whileHover={{ scaleX: 1.1 }}

            >
              تواصل معنا
            </motion.a>

          </div>

          <Service service={services[0]} />
          <Service service={services[1]} />
          <Service service={services[2]} />

        </div>
      </div>
    </section>
  );
};

export default Services;

const Service = ({ service }) => {
  const navigate = useNavigate()
  return (
    <motion.div
      whileHover={{ rotate: -5, scale: 1.1 }}
      transition={{ duration: 0.3, stiffness: 100, damping: 8 }}
      className="service"
    >
      <h1>
        {service.title}
      </h1>
      <p>
        {service.content}
      </p>
      <span onClick={() => navigate("/about")}>اعرف المزيد عنا</span>
    </motion.div>
  );
};
