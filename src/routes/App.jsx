import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "containers/Layout";
import Login from "templates/Login";
import RecoveryPassword from "templates/RecoveryPassword";
import Home from "templates/Home";
import NotFound from "templates/NotFound";
import EditAccount from "templates/EditAccount";
import MyOrder from "templates/MyOrder";
import MyOrders from "templates/MyOrders";
import CreateNewPassword from "templates/CreateNewPassword";
import AppContext from "context/AppContext";
import useInitialState from "hooks/useInitialState";
import React from "react";

const App = () => {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <React.StrictMode>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="new-password" element={<CreateNewPassword />} />
              <Route path="/recovery-password" element={<RecoveryPassword />} />
              <Route path="/edit-account" element={<EditAccount />} />
              <Route path="/my-order" element={<MyOrder />} />
              <Route path="/my-orders" element={<MyOrders />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </React.StrictMode>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
