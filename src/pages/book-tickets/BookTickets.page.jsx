import axios from "axios";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import BookTicketsContainer from "../../containers/book-tickets/BookTickets.container";
import { api_url } from "../../utils/apiInfo";


import "./BookTickets.styles.css";
const BookTicketsPage = () => {
  let navigate = useNavigate();
  const location = useLocation();

  const [data, setData] = React.useState(location.state);

  React.useEffect(() => {
    if (data === null) navigate("/");
  }, [data]);

  React.useEffect(() => {
    if (data !== null) fetchOfferPricing();

    window.scrollTo(0, 0);
  }, []);

  console.log("data", data);

  const fetchOfferPricing = async () => {
    try {
      const res = await axios.post(`${api_url}/flight/flight-pricing`, {
        flData: data.flData,
      });
      console.log("fetchOfferPricing res", res.data);

      if (res.data.status === "success") {
        console.log("res.data.data.data", res.data.data.data.flightOffers[0]);
        setData({
          ...data,
          flData: res.data.data.data.flightOffers[0],
        });
      }
    } catch (error) {
      console.log("fetchOfferPricing error", error);
    }
  };

  return !!data ? <BookTicketsContainer data={data} /> : null;
};

export default BookTicketsPage;
