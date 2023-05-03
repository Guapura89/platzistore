import Image from "next/image";
import { useNavigate } from "react-router-dom";

//Images
import logo from "assets/images/broken-bot.png";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-screen grid place-items-center text-center bg-[#F7F7F7]">
      <div>
        <Image className="mx-auto my-3" src={logo} alt="Broken-bot" />
        <h1 className="text-5xl font-bold">404</h1>
        <p className="text-2xl font-bold text-slate-600">Oops! Page not found</p>
        <button onClick={() => navigate("/")} className="w-25 bg-green-300 hover:bg-green-200 px-2 sm:px-5 py-3 mt-5 rounded-lg sm:rounded-full border-1 border-slate-200">
          Return to home page
        </button>
      </div>
    </div>
  );
};

export default NotFound;
