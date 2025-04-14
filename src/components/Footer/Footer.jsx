import "./Footer.css";
import facebook from "../../assets/facebook2.svg";
import instagram from "../../assets/instagram.svg";
import twitter from "../../assets/twitter.svg";
import telegram from "../../assets/telegram.svg";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate()
  return (
    <footer>
      <div className="footer">
        <ul>
          <h2>
          أكاديمية دان البريطانية للعلوم والتكنولوجيا
          </h2>
          <p>
            كل الحقوق مطبوعة
            &copy;
            <a href="https://dabacademy.vercel.app/">
            https://dabacademy.vercel.app  
            </a>

          </p>
        </ul>

        <ul>
          <h2>الرئيسية</h2>
          <li onClick={()=> navigate("/projects")}>مشاريعنا</li>
          <li onClick={()=> navigate("/blogs")}>مقالاتنا</li>
          <li onClick={()=> navigate("/about")}>نبذة عنا</li>
        </ul>

        <ul>
          <h2>مميزاتنا</h2>
          <li>المساعدة و الدعم</li>
          <li>سياسة الخصوصية</li>
          <li>مواقعنا</li>
        </ul>

        <ul>
          <h2>صفحاتنا</h2>

          <div className="follow">
            <a href="https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Fbritishdanacademy%2F%3Figsh%3DMXNmcjRpaWdiN3k1eg%253D%253D&is_from_rle">
            <img src={instagram} alt="" />

            </a>
            <a href="https://x.com/dan_academ19732?t=OJno0o5TfDjLYEB_TV446Q&s=08">
            <img src={twitter} alt="" />

            </a>
          <a href="https://www.facebook.com/people/British-Dan-Academy-of-Science-and-Technology/61567000424586/?mibextid=ZbWKwL">
          <img src={facebook} alt="" />


          </a>
          <a href="https://t.me/danacademy634">
          <img src={telegram} alt="" />

          </a>

          </div>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
