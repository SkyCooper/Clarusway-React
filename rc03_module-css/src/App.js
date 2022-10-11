import Card from "./components/card/Card";
import data from "./util/data";

function App() {
  // JS alanı

  return (
    // JSX alanı

    <>
      {data.map((item) => {
        return (
          <Card
            key={item.id}
            title={item.language}
            image={item.img}
            btnName={item.btnName}
          />
        );
      })}
    </>
  );
}

export default App;
