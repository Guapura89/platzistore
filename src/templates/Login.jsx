import { useRef } from "react";
import { Link, Image } from "next/link";

//images
import Logo from "assets/logos/logo_yard_sale.svg";

const Login = () => {
  const form = useRef(null);

  // Get the user credentials
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
    };
    console.log(data);
  };
  return (
    <div className="login w-full h-5/6 grid place-items-center">
      <div className="form-container text-center">
        <Image src={Logo} alt="logo" className="logo logo w-full sm:w-1/2 mx-auto my-3" />
        <form action="/" ref={form} className="form flex flex-col my-6 text-left">
          <label htmlFor="email" className="label label mt-3">
            Email address
          </label>
          <input type="text" name="email" placeholder="platzi@example.cm" className="input input-email rounded px-1 py-2 outline-none bg-[#F7F7F7]" />

          <label htmlFor="password" className="label label mt-3">
            Password
          </label>
          <input type="password" name="password" placeholder="*********" className="input input-password rounded px-1 py-2 outline-none bg-[#F7F7F7]" />

          <button type="submit" onClick={handleSubmit} className="primary-button login-button bg-[#ACD9B2] hover:bg-green-600 mt-6 p-2 rounded font-bold text-white">
            Log in
          </button>
          <Link to="/" className="underline hover:text-[#ACD9B2] mt-4 text-sky-600a">
            Forgot my password
          </Link>
        </form>
        <button className="secondary-button signup-button rounded bg-white border-2 border-[#ACD9B2] w-full p-2 mt-6 text-[#ACD9B2] hover:text-white hover:bg-[#ACD9B2]">Sign up</button>
      </div>
    </div>
  );
};

export default Login;
