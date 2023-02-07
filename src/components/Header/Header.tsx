import { FC } from "react";
// import { Link } from "react-router-dom";

const Header: FC = () => {
  return (
    <header className="bg-gray-300">
      <h1>My Todo-s</h1>
      {/* <nav className="flex gap-4 justify-between mx-auto md:max-w-4/5 max-w-[996px]">
        <p>Karim's books</p>
        <ul className="flex gap-4">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </ul>
      </nav> */}
    </header>
  );
};

export default Header;
