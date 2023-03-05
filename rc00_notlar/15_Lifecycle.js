//?==================================================================
//?                         LIFECYCLE METOTLARI
//?          https://reactjs.org/docs/react-component.html
//?==================================================================

//! interview'da genellikle sorulan konudur
//! Lifecycle önce class component için yapılmış, sonra func. comp. için hook olarak kullanılmış, --> useEffect

//! en basit hali ile Lifecycle 3 seviyedir,
        // Mounting         --> doğma
        // Updating         --> yaşama
        // Unmounting       --> ölme gibi düşünülebilir,
        // hepisinden sonra olacaklar, yani Mount olduktan sonra, update olduktan sonra vs.

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
        //! 1-) Bir componentin olsuturulmasinda cagrilir -- çocuk anne karnında --

        console.log("1-Constructur running");
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

    //! 3-) Bir component DOM agacina eklendiginde calistirilir.
    //! (İlk render sonrasi).  -- çocuğun doğumu --
    //! Her yasam dongusu icin bir kere calisir. -- çocuğa isim verme gibi, sadece 1 kere ---

    componentDidMount() {
        console.log("3-Mounted");
    }

    //! 4-) Bu metot ilk render haric diger tum render'lardan sonra cagriilir. 
    //! -- çocuğa doğumgünü yapılması, ilk doğum hariç diğer hepsinde yapılır --
    //! prevState ve prevProps degerlerini parametre olarak alabilir.
    componentDidUpdate(prevProps, prevState) {
        console.log("4-Component Updated");
        console.log(prevState.count);
    }

    //! 5-) Bir component DOM agacindan kaldirildiktan hemen sonra cagrilir. -- ÖLÜM --
    componentWillUnmount() {
        console.log("5-Component Unmounted");
    }

    render() {
        //! 2-) Her bir render'da cagrilir -- çocuğun doğması --

        console.log("2-rendered");
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
