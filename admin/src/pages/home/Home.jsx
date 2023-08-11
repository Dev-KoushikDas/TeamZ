import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css";


const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
      WELCOME TO ADMIN PANEL
      </div>
    </div>
  );
};

export default Home;
