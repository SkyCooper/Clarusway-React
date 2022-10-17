//?==================================================================
//?                         LIFECYCLE METOTLARI
//?          https://reactjs.org/docs/react-component.html
//?==================================================================

//* Lifecycle metotlari componetnlerin DOM'da varoldugu sure boyunca
//* uzerinde islem yapmamizi imkan saglayan ozel React mototlaridir.
//* Ornegin bir component olsuturuldugunda, DOM'a basilsiginda,
//* guncellendiginde veya DOM'dan kaldirildiginda bir seyler yapmak icin
//* lifecycle metotlari kullanilabilir.
//* En bilindik lifecycle metodu render() metodudur

//* Bir component'in olsuturulmasi (constructor,
//* Bir componentin DOM agacina eklenmesinin sonrasi(componentDidMount)
//* Bir component'in DOM'a basilmasi (render)
//* (Optional)Bir componentin guncellenmesinin sonrasi (componentDidUpdate)
//* Bir component'in DOM agacindan kaldirilmasi sonrasi(componentWillUnmount)

import React from "react";

class LifeCycleMethods extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleInc = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <div className="container text-center">
        <h1 className="text-danger">LIFECYCLE METHODS</h1>
        <h3>COUNT={this.state.count}</h3>
        <button className="btn btn-info" onClick={this.handleInc}>
          INC
        </button>
      </div>
    );
  }
}
export default LifeCycleMethods;
