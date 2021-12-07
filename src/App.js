import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import io from "socket.io-client";
import "./App.css";
import Header from "./components/Header/Header";
import AdminMessages from "./features/Admin/pages/AdminMessages/AdminMessages";
import OrderManagement from "./features/Admin/pages/OrderManagement/OrderManagement";
import ProductManagement from "./features/Admin/pages/ProductManagement/ProductManagement";
import UserManagement from "./features/Admin/pages/UserManagement/UserManagement";
import AdminTemplates from "./features/Admin/templates/AdminTemplates";
import { refreshTokenAction } from "./features/Auth/authSlice";
import ForgotPassword from "./features/Auth/pages/ForgotPassword/ForgotPassword";
import ResetPassword from "./features/Auth/pages/ResetPassword/ResetPassword";
import SignIn from "./features/Auth/pages/SignIn/SignIn";
import SignUp from "./features/Auth/pages/SignUp/SignUp";
import Carts from "./features/Cart/Carts";
import Checkout from "./features/Checkout/Checkout";
import { addNewSocket } from "./features/Global/socketSLice";
import HomePage from "./features/HomePage/HomePage";
import ProductDetails from "./features/ProductDetails/ProductDetails";
import AllProducts from "./features/Products/AllProducts";
import UserInfos from "./features/UserInfo/UserInfos";
import WishList from "./features/WishList/WishList";
import PrivateRouter from "./hooks/PrivateRouter";
import "./styles/custom.css";
import "./styles/customBoostrap.css";
import "./styles/default.css";
import SocketClient from "./utils/SocketClient";
function App() {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state);

  useEffect(() => {
    dispatch(refreshTokenAction());
    const socket = io("http://localhost:5000", { transports: ["websocket"] });

    dispatch(addNewSocket(socket));

    return () => socket.close();
  }, [dispatch]);

  return (
    <div className="App">
      <ToastContainer />
      <Header />
      {auth.accessToken && <SocketClient />}
      {/* <Loading /> */}
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={AllProducts} />
        <Route path="/cart" component={Carts} />
        <Route path="/detail/:id" component={ProductDetails} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/wishlist" component={WishList} />
        <Route path="/manage" component={UserInfos} />
        <Route path="/forgot" component={ForgotPassword} />
        <Route path="/reset/:token" component={ResetPassword} />
        <PrivateRouter path="/signIn" component={SignIn} />
        <PrivateRouter path="/signUp" component={SignUp} />
        <AdminTemplates
          path="/admin/productManagement"
          Component={ProductManagement}
        />
        <AdminTemplates
          path="/admin/userManagement"
          Component={UserManagement}
        />
        <AdminTemplates
          path="/admin/chatManagement"
          Component={AdminMessages}
        />
        <AdminTemplates
          path="/admin/orderManagement"
          Component={OrderManagement}
        />
      </Switch>
    </div>
  );
}

export default App;
