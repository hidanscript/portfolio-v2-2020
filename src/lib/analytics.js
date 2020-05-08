import endpoints from "./endpoints";
import Axios from "axios";

const registerNewVisit = async () => {
  const result = await Axios.get(endpoints.GET_IP_ADDRESS);
  const ip_address = result.data.ip;
  const geolocation_data = await Axios.get(
    endpoints.GET_GEOLOCATION_DATA_BY_IP(ip_address)
  );

  const { country } = geolocation_data.data;
  const country_abb = geolocation_data.data.countryCode;

  Axios.post("/api/visits", { ip_address, country, country_abb });
};

export default {
  registerNewVisit,
};
