import Logo  from "../../Images/logo.png";

const Header = () => {
  return (
    <div className="header-cont  py-5 px-6 flex justify-between items-center shadow-lg">
      <div className="logo-container">
        <img
          src={Logo}
          alt="not found"
          className="w-24"
        />
      </div>

      <div className="nav-links">
        <ul className="flex">
          <li className="mx-6">Home</li>
          <li className="mx-6">About</li>
          <li className="mx-6">Contact</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
