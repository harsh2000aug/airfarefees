import moment from "moment";

export const validateEmail = (email) => {
  return email.match(
    // eslint-disable-next-line
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

export const getDuration = (dur) => {
  // const d = moment.duration(dur);
  // return `${d.hours()}H ${d.minutes()}M`;

  const remPt = dur.split("PT")[1];
  let remH = remPt.split("H");
  let tArr = remH[0] + "H" + " " + remH[1];
  return tArr;
};

export const searchFilter = function (arr,search, keys) {
  var lowSearch = search.toLowerCase();
  return arr.filter(wine =>
      keys.some(key => 
          String(wine[key]).toLowerCase().includes(lowSearch) 
      )
  );
}
