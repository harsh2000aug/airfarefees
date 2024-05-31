// export const api_url = `http://192.168.1.11`;
// export const api_url = `http://127.0.0.1:4000/api/v1`;
// export const api_url = `https://trianfly.com:4000/api/v1`;
// export const api_url = `http://13.232.70.10:4000/api/v1`; //Trian
// export const api_url = `https://trianfly.com/api/v1`; //Trian
// export const api_url = `http://52.66.207.97:5000/api/v1`; //Best Deals
 export const api_url = `https://trianfly.com/api/v1`; //Trian
//export const api_url = `https://webestfly.com/api/v1`; //Webestfly
// export const api_url = `http://192.168.1.122:4000/api/v1`; //Webestfly
export const theme_airline_url = `https://www.tranktechnologies.com/Api/api.php`;

export const getReqOptions = (tk) => ({
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export const registerReqOptions = () => ({
  headers: {
    "Content-Type": "multipart/form-data",
  },
});
