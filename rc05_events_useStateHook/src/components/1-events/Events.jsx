// * =======================================================
// *                     EVENTS
// * =======================================================

//? ReactJS, Tarayicilar arasi uyumluluk ve performans artisi gibi
//? sebeplerden oturu Sentetik Event olarak adilandirilan Olaylari
//? kullanir. Sentetik Event, aslinda tarayicinin dogal event'larinin
//? bir sarmalayici (Wrapper) arabirimle ortulmesi ile olusur. Bu sayede,
//? React ortaminda kullanilan event'larin bilindik tarayicilarda
//? sorunsuz calismasini saglanir.
//? Ayrinti icin : https://reactjs.org/docs/events.html

const Events = () => {
  const handleAdd = () => {
    alert("Add buton clicked");
  };

  const handleClear = (msg) => {
    alert(msg);
  };

  const handleChange = (event) => {
    console.log(event.target);
  };

  return (
    <div className="container text-center mt-4">
      <button onClick={handleAdd} className="btn btn-success">
        Add
      </button>

      <button
        onClick={() => handleClear("Clear btn Clicked")}
        className="btn btn-danger"
      >
        Clear
      </button>

      <button onClick={handleChange} className="btn btn-dark">
        Change
      </button>
    </div>
  );
};

export default Events;
