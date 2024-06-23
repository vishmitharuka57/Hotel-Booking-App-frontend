import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container  mx-auto flex justify-between items-center py-4">
      <span className="text-3xl text-blue-900 font-bold tracking-tight">
        <Link to="/">HotelHub.com</Link>
      </span>
      <span className="flex space-x-4">
        <Link
          to="/sign-in"
          className="flex  items-center text-blue-900 px-3 ring-2 ring-blue-500 font-bold hover:bg-blue-800 hover:text-white"
        >
          Sign In
        </Link>
      </span>
    </div>
  );
};

export default Header;
