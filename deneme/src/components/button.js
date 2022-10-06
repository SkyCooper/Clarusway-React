import styles from "./Button.module.css";

const mystyle = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "20px",
  fontFamily: "Arial",
  fontSize: "2rem",
};

const Buton = () => {
  return (
    <>
      <br />
      <button className="btn btn-primary w-50">Gönder</button> <br />
      <button style={{ color: "red", background: "purple", width: "125px" }}>
        Kaldır
      </button>
      <br />
      <button style={mystyle}>Cooper SKY buttons</button> <br />
      <button className={styles.error}>Cooper SKY Export CSS</button>
      <button className={styles.visa}>Cooper SKY export CSS</button>
    </>
  );
};

const Myinput = () => <input type="text" className="bg-danger" />;

export default Myinput;
export { Buton };
