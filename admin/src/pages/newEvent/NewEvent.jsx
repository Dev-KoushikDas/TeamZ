import "./newEvent.css";
import Sidebar from "../../components/sidebar/Sidebar";
import { useState } from "react";
import { hotelInputs } from "../../formSource";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NewEvent = () => {
  const [info, setInfo] = useState({});
  const navigate = useNavigate();
  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://teamz.onrender.com/api/events", info);
      navigate('/events')
    } catch (err) {console.log(err)}
  };
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
     
        <div className="top">
          <h1>Add New Event</h1>
        </div>
        
        <div className="bottom">
    
          <div className="right">
            <form>

              {hotelInputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    id={input.id}
                    onChange={handleChange}
                    type={input.type}
                    placeholder={input.placeholder}
                  />
                </div>
              ))}
              <button onClick={handleClick}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewEvent;
