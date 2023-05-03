import Image from "next/image";
import Link from "next/link";
// Images
import menu_logo from "assets/icons/icon_menu.svg";
import logo from "assets/logos/logo_yard_sale.svg";
import shopping_cart from "assets/icons/icon_shopping_cart.svg";
import arrow from "assets/icons/flechita.svg";

import Menu from "./Menu";
import ShopingCart from "containers/ShopingCart.jsx";
import { useState } from "react";

const Header = () => {
  const [userName] = useState("Carlos Sanchez");
  const [display, setDisplay] = useState(false);
  const [hideCart, setHideCart] = useState(false);
  return (
    <nav className="flex justify-between w-92 mx-auto px-8 h-[100px] min-w-[280px] 2xl:w-[80%]">
      <div className="navbar-left flex gap-12 items-center">
        <Image src={logo} alt="logo" width={130} height={130} />

        <ul className="gap-3 max-[820px]:hidden flex text-slate-400">
          <li>
            <Link href="/">All</Link>
          </li>
          <li>
            <Link href="/">Clothes</Link>
          </li>
          <li>
            <Link href="/">Electronics</Link>
          </li>
          <li>
            <Link href="/">Furnitures</Link>
          </li>
          <li>
            <Link href="/">Toys</Link>
          </li>
          <li>
            <Link href="/">Others</Link>
          </li>
        </ul>
      </div>

      <div className="navbar-right items-center flex max-[640px]:hidden">
        <ul className="flex gap-3">
          <button className="navbar-email flex gap-4 mx-3 relative select-none" onClick={() => setDisplay(!display)}>
            <p className="hover:text-slate-500 hover:cursor-pointer relative">{userName}</p>
            <Image src={arrow} alt="arrow" className="w-[10px] rotate-90 hover:cursor-pointer" />
            {/* If display hook is true, menu will apear */}
            {display && <Menu />}
          </button>
          <li className="navbar-shopping-cart">
            <button className="relative hover:cursor-pointer" onClick={() => setHideCart(!hideCart)}>
              <Image src={shopping_cart} alt="shopping cart relative" />
              <div className="absolute -top-2 -right-1 bg-green-300 animate-ping rounded-full p-2 w-2 h-2"></div>
              <div className="absolute -top-2 -right-1 bg-green-300 rounded-full p-2 w-2 h-2"></div>
            </button>
            {hideCart && <ShopingCart />}
          </li>
        </ul>
      </div>
      <Image src={menu_logo} alt="menu" className="menu sm:hidden w-[30px] active:bg-slate-200 hover:cursor-pointer" />
    </nav>
  );
};

export { Header };
