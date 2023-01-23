import { Route, Routes } from "react-router-dom";
import "./App.css";
import FooterComp from "./assets/layouts/footer";
import HeaderComp from "./assets/layouts/header";
import LoginPage from "./assets/pages/addUserPage";
import DetailPage from "./assets/pages/detailPage";
import HomePage from "./assets/pages/homePage";
import WishPage from "./assets/pages/wishPage";

function App() {
  return (
    <div className="App">
      <HeaderComp />
      <Routes>
        <Route path={"/"} element={<HomePage />}></Route>
        <Route path={"/detailPage/:id"} element={<DetailPage />}></Route>
        <Route path={"/addUser"} element={<LoginPage />}></Route>
        <Route path={"/wishList"} element={<WishPage />}></Route>
      </Routes>
      <FooterComp />
    </div>
  );
}

export default App;
