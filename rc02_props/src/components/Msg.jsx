const Msg = ({ name, age }) => {
  //*   console.log(props) çıktısı object formatında;

  //! desctructing,
  // const {name} = props

  return (
    <div>
      <h3>
        Hello {name}, {age}
      </h3>
    </div>
  );
};

export default Msg;
