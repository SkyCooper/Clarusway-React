import { useState } from "react";

const KeyboardClipboard = () => {
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (e) => {
    console.log(e.keyCode);
    if (
      (e.keyCode >= 48 && e.keyCode <= 57) ||
      (e.keyCode >= 96 && e.keyCode <= 105)
    ) {
      alert("dont use number");
      e.preventDefault();
    }

    //? enter basılınca form temizlensin
    e.keyCode === 13 && setInputValue("");
  };

  const handleAreaPaste = (e) => {
    e.target.style.border = "2px solid red";
    console.log(e.target.value);
    // üstüne yazmasın diye += kullandık,
    e.target.value += e.clipboardData.getData("text").toLowerCase();
    // 2 kere yapıştırmayı önlemek için
    e.preventDefault();
  };

  return (
    <div className="container text-center">
      <h1>CLIPBOARD EVENTS</h1>
      <input
        className="form-control"
        type="text"
        value={inputValue}
        onChange={(e) => {
          // küçük harf girişlerini büyük yapıp kendi değerini güncelledik.
          e.target.value = e.target.value.toUpperCase();
          setInputValue(e.target.value);
        }}
        onKeyDown={handleKeyDown}
      />
      <p
        onCopy={(e) => {
          e.preventDefault();
          alert("you cant copy document");
        }}
        className="text-start mt-4"
      >
        {inputValue}
      </p>

      <textarea
        className="form-control"
        name="area"
        id="area"
        cols="30"
        rows="10"
        onPaste={handleAreaPaste}
      ></textarea>
    </div>
  );
};

export default KeyboardClipboard;
