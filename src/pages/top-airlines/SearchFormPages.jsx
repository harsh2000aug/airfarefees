import React, { useState, useEffect } from 'react'
import FlightSearchForm from '../../components/flight-search-form/FlightSearchForm.component'


const SearchFormPages = () => {

  const [isLoading, setIsLoading] = React.useState(false);

  useEffect(() => {
    setIsLoading(true);


  }, []);


  return (
    <section className="gap">
      <div className="container flex space-bw align-center">
        <div className="hero-text col-50">
          <h5>Travel around the world</h5>
          <h1><span>Explore destinations effortlessly</span> with our user-friendly interface.</h1>
          <p>Find and book flights in just a few clicks, making travel planning a breeze.</p>
        </div>
        <div className="col-50">
          <div className="booking-form">
            <FlightSearchForm />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SearchFormPages
