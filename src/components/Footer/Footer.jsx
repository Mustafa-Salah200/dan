import "./Footer.css";
import facebook from "../../assets/facebook2.svg";
import instagram from "../../assets/instagram.svg";
import twitter from "../../assets/twitter.svg";
import youtube from "../../assets/youtube.svg";
import logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <ul>
          <h2>
          أكاديمية دان البريطانية للعلوم والتكنولوجيا
          </h2>
          <p>2025 </p>
          <p>كل الحقوق مطبوعة</p>
        </ul>

        <ul>
          <h2>الرئيسية</h2>
          <li>مشاريعنا</li>
          <li>مقالاتنا</li>
          <li>نبذة عنا</li>
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
            <img src={instagram} alt="" />
            <img src={twitter} alt="" />
            <img src={facebook} alt="" />
            <img src={youtube} alt="" />
          </div>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
