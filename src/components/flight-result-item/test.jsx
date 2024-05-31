const loadTopItinerarySum = () => {
    return flData.itineraries.map((el, index) => {
      const firstSegment = el.segments[0];
      const lastSegment = el.segments[el.segments.length - 1];
      const itineraryInfo = {
        duration: getDuration(el.duration),
        segments: [{
          departure: {
            iataCode: firstSegment.departure.iataCode,
            time: moment(firstSegment.departure.at).format("h:mm a"),
            date: moment(firstSegment.departure.at).format("ddd, DD MMM"),
          },
          arrival: {
            iataCode: lastSegment.arrival.iataCode,
            time: moment(lastSegment.arrival.at).format("h:mm a"),
            date: moment(lastSegment.arrival.at).format("ddd, DD MMM"),
          },
        }],
      };
      console.log("new", itineraryInfo);
      return (
        <div
          key={flData.id + "-" + index}
          className="cm-fl-res-item-it-sum-item cm-flex cm-flex-align-mid "
        >
         
        </div>
      );
    });
  };
  