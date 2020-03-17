import axios from "axios";

export default {
  findZip: function(data) {
    return axios.get("/api/zips", data)
  }
};
