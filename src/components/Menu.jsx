import Link from "next/link";

const Menu = () => {
  return (
    <div className="absolute text-right -bottom-40 right-0 w-auto h-[150px] bg-white font-bold py-3 px-5 shadow-lg z-10">
      <ul>
        <li className="hover:text-slate-500 hover:cursor-pointer my-2">
          <Link href="/my-orders">My orders</Link>
        </li>
        <li className="hover:text-slate-500 hover:cursor-pointer my-2">
          <Link href="/">My account</Link>
        </li>
        <hr />
        <li className="hover:text-slate-500 hover:cursor-pointer my-2 text-green-300 mt-4">
          <Link href="/">Sign out</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
