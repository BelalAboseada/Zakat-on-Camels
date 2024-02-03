import "./Header.css";
import Logo from "../../assets/logo.png"

const Hearder = () => {
  return (
    <div className="Header">
      {/* logo  */}
      <img src={Logo} loading="lazy" alt="logo" />
      {/* text  */}
      <h1 className="logoText">زكـــــــــــــــــــاة الإبل</h1>
      <p className="description">
        تطبيق ويب مبسط يقدم مستحقات الزكاة من الإبل، مقدم مجانا للمنمين.
      </p>
    </div>
  );
};

export default Hearder;
