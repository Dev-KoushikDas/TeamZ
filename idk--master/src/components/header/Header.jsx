import {
  faCalendarDays,
  faHome,
  faLocation
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";
//import { DateRange } from "react-date-range";
import { useContext, useState } from "react";
import "react-date-range/dist/styles.css"; 
import "react-date-range/dist/theme/default.css"; 
//import { format } from "date-fns";
import { Link, useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";

const Header = ({ type }) => {
  const [name, setName] = useState("");
  const [destination, setDestination] = useState("");
 // const [openDate, setOpenDate] = useState(false);
 /* const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);*/
 // const [openOptions, setOpenOptions] = useState(false);
/*  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
   room: 1,
  });
*/
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

/*
  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  }; */

  const { dispatch } = useContext(SearchContext);

  const handleSearch = () => {
   // dispatch({ type: "NEW_SEARCH", payload: { name,destination, dates, options } });
   dispatch({ type: "NEW_SEARCH", payload: { name,destination} });
   // navigate("/hotels", { state: { name,destination, dates, options } });
   navigate("/events", { state: { name,destination} });
  };

  
  return (
    <div className="header">
      <div
        className={
          type === "list" ? "headerContainer listMode" : "headerContainer"
        }
      >
        <div className="headerList">
        <Link to='/'>
          <div className="headerListItem ">
            <FontAwesomeIcon icon={faHome} />
            <span>Home</span>
          </div>
          </Link>
          <Link to='/list'>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCalendarDays} />
            <button>Events</button>
          </div>
          </Link>
        </div>
        {type !== "list" && (
          <>
            <h1 className="headerTitle">
             make the TEAM of your Dream!!!
            </h1>
            <p className="headerDesc">
            Join your favourite team to participate in Hackathons,Quizes and Coding contests
            </p>
            {!user && <button className="headerBtn">Sign in / Register</button>}
            
            <div className="headerSearch">
              
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                <input
                  type="text"
                  placeholder="EVENT eg:hackathon"
                  className="headerSearchInput"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faLocation} className="headerIcon" />
                <input
                  type="text"
                  placeholder="LOCATION eg:kolkata"
                  className="headerSearchInput"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              {/*<div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="headerSearchText"
                >{`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(
                  dates[0].endDate,
                  "MM/dd/yyyy"
                )}`}</span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDates([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={dates}
                    className="date"
                    minDate={new Date()}
                  />
                )}
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                <span
                  onClick={() => setOpenOptions(!openOptions)}
                  className="headerSearchText"
                >{`${options.adult} adult · ${options.children} children ·`}</span>
                {openOptions && (
                  <div className="options">
                    <div className="optionItem">
                      <span className="optionText">Adult</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.adult <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("adult", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.adult}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("adult", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Children</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.children <= 0}
                          className="optionCounterButton"
                          onClick={() => handleOption("children", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.children}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("children", "i")}
                        >
                          +
                        </button>
                      </div>
                </div>
                     <div className="optionItem">
                      <span className="optionText">Room</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.room <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("room", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.room}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("room", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div> 
                </div>
                )} 
              </div> */}
              <div className="headerSearchItem">
                <button className="headerBtn" onClick={handleSearch}>
                  Search
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
