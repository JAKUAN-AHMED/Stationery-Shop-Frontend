import logo from '../../assets/images/logo.svg';

const Navbar = () => {
    return (
      <div className='font-orbitron'>
        <img src={logo} alt="" />{" "}
        <strong >Ethereal Scribbles</strong>
      </div>
    );
};

export default Navbar;