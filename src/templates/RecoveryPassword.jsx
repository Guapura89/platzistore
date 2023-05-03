import { Link, Image } from "next/link";

// Images
import logo from "assets/logos/logo_yard_sale.svg";
import email from "assets/icons/email.svg";

const RecoveryPassword = () => {
  return (
    <div className="recovery-pass w-full h-screen grid place-items-center text-center">
      <div className="form-container w-48 sm:w-1/4">
        <Image src={logo} alt="logo" className="logo mx-auto my-3 w-full sm:w-1/2" />
        <h1 className="title font-bold mb-1">Email has been sent!</h1>
        <p className="subtitle text-slate-500">Please check your inbox for instructions on how to reset the password</p>
        <div className="email-image">
          <Image src={email} alt="email" className="mx-auto my-4" />
        </div>
        <button className="primary-button login-button font-bold bg-[#ACD9B2] p-2 w-3/4  md:w-1/2 rounded text-white hover:bg-green-600">Login</button>
        <p className="resend mt-5 text-sm">
          <span>Didn&apos;t receive the email? </span>
          <Link className="text-[#ACD9B2] hover:text-green-500 font-bold" href="/">
            Resend
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RecoveryPassword;
