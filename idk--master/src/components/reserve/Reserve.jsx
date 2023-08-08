import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import "./reserve.css";
//import useFetch from "../../hooks/useFetch";
import { useState } from "react";
//import { SearchContext } from "../../context/SearchContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Reserve = ({ setOpen, eventId }) => {
//const [selectedRooms, setSelectedRooms] = useState([]);
// const { data, loading, error } = useFetch(`/hotels/room/${hotelId}`);
// const { data, loading, error } = useFetch(`/hotels/room/${hotelId}`); 
// const { dates } = useContext(SearchContext);
/*
 const [name, setName] = useState(location.state.name);
 const [email, setEmail] = useState(location.state.destination);
 const [address,setAddress] = useState(location.state.address);

*/
const [credentials, setCredentials] = useState({
  name: undefined,
  email: undefined,
  address: undefined,
  github:undefined,
  number:undefined
});
/*
  const getDatesInRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const date = new Date(start.getTime());

    const dates = [];

    while (date <= end) {
      dates.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
    }

    return dates;
  };
*/

  //const alldates = getDatesInRange(dates[0].startDate, dates[0].endDate);

  // const isAvailable = (roomNumber) => {
  //   const isFound = roomNumber.unavailableDates.some((date) =>
  //     alldates.includes(new Date(date).getTime())
  //   );

  //   return !isFound;
  // };
/*
  const handleSelect = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setSelectedRooms(
      checked
        ? [...selectedRooms, value]
        : selectedRooms.filter((item) => item !== value)
    );
  };
*/

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
  
    try {
      const res = await axios.post(`https://teamz.onrender.com/api/rooms/app/${eventId}`, credentials);
      console.log(res)
      navigate("/")
    } catch (err) {
      console.log(err)
    }
  };


/*
  const handleClick = async () => {
    try {
      await Promise.all(
        selectedRooms.map((roomId) => {
          const res = axios.put(`/rooms/availability/${roomId}`, {
          //  dates: alldates,
          });
          return res.data;
        })
      );
      setOpen(false);
      navigate("/");
    } catch (err) {}
  }; */

/*
  const handlesClick = async () => {
    try {
      await Promise.all(
        selectedRooms.map((roomId) => {
          const res = axios.put(`/rooms/availability/${roomId}`, {
          // dates: alldates,
          }); 
          return res.data;
        })
      );
      setOpen(false);
      navigate("/");
    } catch (err) {}
  };
*/
  return (
    <div className="reserve">
      <div className="rContainer">
        <FontAwesomeIcon
          icon={faCircleXmark}
          className="rClose"
          onClick={() => setOpen(false)}
        />
        <span>REGISTER HERE:</span>
        
          <div className="rItem">
            {/*<div className="rItemInfo">
              <div className="rTitle">{item.title}</div>
              <div className="rDesc">{item.desc}</div>
              <div className="rMax">
                Max people: <b>{item.maxPeople}</b>
              </div>
              <div className="rPrice">{item.price}</div>
              </div> */}
            <div className="rSelectRooms">
              {/*item.roomNumbers.map((roomNumber) => (
                <div className="room">
                  <label>{roomNumber.number}</label>
                 { <input
                   type="checkbox"
                  type="input"
                   value={roomNumber._id}
                    onChange={handleSelect}
                  onClick={handleClicks}
                  
                   disabled={!isAvailable(roomNumber)}
              /> }

                
                </div>
              ))*/}
                <div><input placeholder="Name" type="text" 
                id="name" className="inputinfo" onChange={handleChange}/></div>
                <div>
                <input placeholder="Email"
                className="inputinfo" type="text" 
                id="email" onChange={handleChange}/>
                </div>
                <div>
                <input placeholder="Address"
                className="inputinfo" type="text" 
                id="address" onChange={handleChange}/>
                </div>
                <div>
                <input placeholder="Github"
                className="inputinfo" type="text" 
                id="github" onChange={handleChange}/>
                </div>
                <div>
                <input placeholder="Mobile/WhatsApp No"
                className="inputinfo" type="text" 
                id="number" onChange={handleChange}/>
                </div>
            </div>
          </div>
        
        <button onClick={handleClick} className="rButton">
          Reserve Now!
        </button>
      </div>
    </div>
  );
};

export default Reserve;
