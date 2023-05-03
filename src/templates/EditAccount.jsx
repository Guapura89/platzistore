const MyAccount = () => {
  return (
    <div className="my-account h-screen w-full grid place-items-center">
      <div className="form-container w-48 mx-auto sm:w-1/4 px-3">
        <h1 className="title font-bold text-2xl">My account</h1>
        <form action="/" className="form">
          <div className="mt-11">
            <label htmlFor="name" className="label font-bold">
              Name
            </label>
            <p className="value font-light mb-8">Camila Yokoo</p>
            <label htmlFor="email" className="label font-bold">
              Email
            </label>
            <p className="value font-light mb-8">camilayokoo@gmail.com</p>
            <label htmlFor="password" className="label font-bold">
              Password
            </label>
            <p className="value font-light mb-8">*********</p>
          </div>
          <button type="submit" className="secondary-button login-button font-bold border text-[#ACD9B2] border-[#ACD9B2] py-3 rounded w-full hover:bg-[#ACD9B2] hover:text-white">
            Edit
          </button>
        </form>
      </div>
    </div>
  );
};

export default MyAccount;
