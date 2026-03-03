import NavBar from "../navBar/navBar";
import SideBar from "../sideBar/sideBar";   
import Footer from "../footer/footer";
import style from "./landingPage.module.css";
import Products from "../products/Products";

const LandingPage = () => {
  return (
    <>
    <div>   
        <NavBar/>
    </div>
    <div className={style.sideBarProducts}>
        <SideBar/>
        <Products/>
    </div>
    <div>
        <Footer/>
    </div>
    </>
  );
}
export default LandingPage;