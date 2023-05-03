import Image from "next/image";

// Images
import flechita from "asstes/icons/flechita.svg";

const OrderItem = () => {
  return (
    <div className="order w-full py-3 px-6 my-2 rounded-lg flex justify-between items-center hover:cursor-pointer hover:bg-slate-100">
      <p className="flex flex-col">
        <span className="font-bold">30.12.22</span>
        <span className="text-slate-600">4 articles</span>
      </p>
      <div className="flex gap-6">
        <p className="font-bold">$560.00</p>
        <Image src={flechita} alt="arrow" />
      </div>
    </div>
  );
};

export default OrderItem;
