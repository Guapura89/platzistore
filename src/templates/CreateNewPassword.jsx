// Images
import logo from "assets/logos/logo_yard_sale.svg";
import Image from "next/image";

const Login = () => {
  return (
    <div className="new-password w-full h-5/6 grid place-items-center">
      <div className="form-container text-center">
        <Image src={logo} alt="logo" className="logo w-full sm:w-1/2 mx-auto my-3" />
        <h1 className="title font-bold">Create a new password</h1>
        <p className="subtitle text-slate-500">Enter a new passwrd for yue account</p>
        <form action="/" className="form flex flex-col mt-6 text-left">
          <label htmlFor="password" className="label mt-3">
            Password
          </label>
          <input type="password" id="password" placeholder="*********" className="input input-password rounded px-1 py-2 outline-none bg-[#F7F7F7]" />
          <label htmlFor="new-password" className="label mt-3">
            Password
          </label>
          <input type="password" id="new-password" placeholder="*********" className="input input-password rounded px-1 py-2 outline-none bg-[#F7F7F7]" />
          <button type="submit" value="Confirm" className="primary-button login-button bg-[#ACD9B2] hover:bg-green-600 mt-6 p-2 rounded font-bold text-white">
            Confirm
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
