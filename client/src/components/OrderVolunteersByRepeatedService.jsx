import { useState, useEffect } from "react";
import axios from "axios";

const OrderVolunteersByRepeatedService = () => {
  const [entryList, setEntryList] = useState([]);

  // READ (GET)
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_HOST}/api/orderVolunteers`)
      .then((response) => {
        setEntryList(response.data);
      });
  }, []);

  return (
    <div className="orderVolunteers">
      <h2>Order volunteers by repeated service</h2>

      <div className="repeatedVolunteers">
        {entryList.map((val, k) => {
          return (
            <div key={k}>
              <div>
                {val.last_name}, {val.first_name}, {val.volunteerCount}
                {/* <span className="emailListed">{val.email_address}</span>{" "} */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OrderVolunteersByRepeatedService;
