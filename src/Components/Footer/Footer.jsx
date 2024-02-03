import "./Footer.css";
import GitHub from "../../assets/github.svg"
const Footer = () => {
  return (
    <div className="Footer text-center">
      <p className="opensource">
        المشروع مفتوح المصدر ويمكنك الإطلاع عليه من على
        <a href="https://github.com/BelalAboSeada">
          <br></br>
          <img src={GitHub} loading="lazy" alt="GitHub" />
        </a>
      </p>
      <span className="developer">
         أحد مشاريع
        <a href="https://belal-portfolio.vercel.app/">بلال ابو سعده</a>
      </span>
      {/* <br></br>
      <span className="Aouther">
        ترجع الفكره ل
        <a href="https://github.com/SheikhElMoctarG">لشيخ المختار</a>
      </span> */}
    </div>
  );
};

export default Footer;
