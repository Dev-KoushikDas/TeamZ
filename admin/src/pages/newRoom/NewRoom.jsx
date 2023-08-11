import "./newRoom.css";
import Sidebar from "../../components/sidebar/Sidebar";
const NewRoom = () => {
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
      Applicant cannot be created in admin panel
      </div>
    </div>
  );
};

export default NewRoom;
