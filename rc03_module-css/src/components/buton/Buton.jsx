// import "./Buton.css";
import ButonStyle from "./buton.module.css";

const Buton = ({ btn }) => {
  return (
    <div className={ButonStyle.title}>
      <button className={ButonStyle["btn-blue"]}>{btn}</button>
    </div>
  );
};

export default Buton;
