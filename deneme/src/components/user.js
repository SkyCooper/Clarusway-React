const listStyle = {
  listStyle: "none",
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial",
  fontSize : "2rem",
};

const User = ({ name, departman, salary }) => {
  // const { name, departman, salary } = props;
  return (
    <div>
      <ul style={listStyle}>
        <li>Name : {name} </li>
        <li>Depertman :{departman} </li>
        <li>Salarty : {salary} </li>
      </ul>
    </div>
  );
};

export default User;
