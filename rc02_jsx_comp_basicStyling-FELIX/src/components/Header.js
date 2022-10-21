//* Harici bir dosya icersinde olusturulan bir component
//* export default ile proje icerisinde herhangi bir yerde
//* kullanima kullanima acimiş olur. Kullanmak icin hedef
//* dosyada import .... from "./..." ile import yapmak yeterlidir.

import React from "react";

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>Header</h1>
      </header>
    );
  }
}

export default Header;
