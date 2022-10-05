
const Header = () =>{
  return(
    <h1 className="bg-danger">
Burası h1 başlık bölümü
    </h1>
  )
}

const Navbar = () =>{
    return(
    <h2 className="bg-info">
Burası h2 Navbar bölümü
    </h2>
    )
}


const Footer = () =>{
    return(
    <h3 className="bg-success">
Burası h3 Footer bölümü
    </h3>
    )
}

export {
  Header as Head,
Navbar as Nav,
Footer,
};
