import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import "./app.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router,Route,Routes, Navigate } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import { useContext } from "react";
import { AuthContext } from "./context/authContext/AuthContext";
import ListList from "./pages/listList/ListList";
import List from "./pages/list/List";
import NewList from "./pages/newList/NewList";
function App() {
      const {user}=useContext(AuthContext);
  
  return (
    <Router>
      <Routes>
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route path="*" element={user ? <MainApp /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );

  function MainApp() {
    return (
      <>
        <Topbar />
        <div className="container">
          <Sidebar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/users" element={<UserList />} />
            <Route exact path="/user/:userId" element={<User />} />
            <Route exact path="/newuser" element={<NewUser />} />
            <Route exact path="/movies" element={<ProductList />} />
            <Route exact path="/products/:productsId" element={<Product />} />
            <Route exact path="/newproduct" element={<NewProduct />} />
            <Route exact path="/lists" element={<ListList />} />
            <Route exact path="/lists/:listId" element={<List />} />
            <Route exact path="/newlist" element={<NewList />} />         
          </Routes>
        </div>
      </>
    );
  }
}

export default App;
