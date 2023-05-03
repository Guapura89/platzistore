import OrderItem from "components/OrderItem";

const MyOrders = () => {
  return (
    <div class="my-orders w-full h-4/5 grid place-items-center">
      <div class="my-orders-container w-1/4">
        <h1 class="title font-bold text-lg mb-6">My orders</h1>

        <div class="my-orders-content mt-9">
          <OrderItem />
          <OrderItem />
          <OrderItem />
          <OrderItem />
          <OrderItem />
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
