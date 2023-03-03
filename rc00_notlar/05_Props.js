// rc02 props dersi

// parentten childe doğru gider,
// oluşturulan componentlerin re-usable olmasını ve farklı çıktılar üretmesini sağlar,

function App() {
    return (
        <div>
            <Msg name="Felix" age={38} />
            <Msg name="Cooper" />
            <Msg name="Helen" />
        </div>
    );
}
export default App;

//? 1 props'lara dot notaion ile ulaşılır, best parctice props yazılır, değişebilir isim
const Msg = (props) => {

  return (
    <div>
      <h3>
        Hello {props.name}, {props.age}
      </h3>
    </div>
  );
};
export default Msg;


//? 2 props'lar destruct edilebilir,
const Msg = (props) => {
const {name} = props
  return (
    <div>
      <h3>
        Hello {name}, {age}
      </h3>
    </div>
  );
};
export default Msg;


//? 3 props'lar ontheair - yolda destruct edilebilir,
const Msg = ({name, age}) => {
  return (
    <div>
      <h3>
        Hello {name}, {age}
      </h3>
    </div>
  );
};
export default Msg;


//* data.js içeriği;
const data = [
  {
    name: "Emily Kurnikov",
    img: "https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947__480.jpg",
    tel: "55555 555 555",
  },
  {
    name: "john Smith",
    img: "https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445__340.jpg",
    tel: "55555 555 555",
  },
  {
    name: "Sumany Kirishni",
    img: "https://cdn.pixabay.com/photo/2015/01/27/09/58/man-613601__340.jpg",
    tel: "55555 555 555",
  },
];
export default data;


//? 1 her componente tek tek farklı proplar gönderme;
function App() {
    return (
        <div>
            <Person name={data[0].name} img={data[0].img} tel={data[0].tel} />
            <Person name={data[1].name} img={data[1].img} tel={data[1].tel} />
            <Person name={data[2].name} img={data[2].img} tel={data[2].tel} />
        </div>
    );
}
export default App;

const Person = (props) => {
  const { name, img, tel } = props;
  return (
    <div>
      <p>Merhaba {name}</p>
      <img style={{ width: "200px" }} src={img} alt="img1" />
      <p>{tel}</p>
    </div>
  );
};
export default Person;


//? 2-a tek componenti map ile kullanma - tek tek gönderme;
function App() {
    return (
        <div>
      {data.map((person) => (
        <Person
          key={person.name}
          name={person.name}
          img={person.img}
          tel={person.tel}
        />
      ))}
        </div>
    );
}
export default App;

const Person = ({ name, img, tel }) => {
  return (
    <div>
      <p>Merhaba {name}</p>
      <img style={{ width: "200px" }} src={img} alt="img1" />
      <p>{tel}</p>
    </div>
  );
};
export default Person;


//? 2-b tek componenti map ile kullanma - hepsini birden gönderme;
function App() {
    return (
        <div>
      {data.map((person,index) => (
        <Person
          key={index}
          person={person}
        />
      ))}
        </div>
    );
}
export default App;

const Person = ({ person }) => {
  const {name, img, tel} = person
  return (
    <div>
      <p>Merhaba {name}</p>
      <img style={{ width: "200px" }} src={img} alt="img1" />
      <p>{tel}</p>
    </div>
  );
};
export default Person;

//? 2-c tek componenti map ile kullanma - hepsini birden gönderme(SPREAD YAPARAK);
function App() {
    return (
        <div>
      {data.map((person,index) => (
        <Person
          key={index}
          {...person}
        />
      ))}
        </div>
    );
}
export default App;

const Person = ( person ) => {
  const {name, img, tel} = person
  return (
    <div>
      <p>Merhaba {name}</p>
      <img style={{ width: "200px" }} src={img} alt="img1" />
      <p>{tel}</p>
    </div>
  );
};
export default Person;
