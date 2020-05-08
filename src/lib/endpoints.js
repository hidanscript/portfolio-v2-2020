const GET_GEOLOCATION_DATA_BY_IP = (ip_address) => {
  return "http://ip-api.com/json/" + ip_address;
};

const endpoints = {
  GET_IP_ADDRESS: "http://api.ipify.org/?format=json",
  GET_GEOLOCATION_DATA_BY_IP,
};

export default endpoints;
