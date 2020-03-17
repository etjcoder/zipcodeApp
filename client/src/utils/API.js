import axios from "axios";

export default {
  findZip: function(zip) {
    return axios.get("/api/zipcodes/find/" + zip)
  }
};
