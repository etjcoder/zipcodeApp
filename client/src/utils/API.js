import axios from "axios";

export default {
  findZip: function(zip) {
    return axios.get("/api/zipcodes/find/" + zip)
  },
  findAddress: function(data) {
    return axios
      .get(`https://maps.googleapis.com/maps/api/geocode/json?address=${data.number}+${data.street}+${data.suffix},+${data.city},+${data.state}&key=[API_KEY]`)
  }
};


// .then(({data: {results} }) => res.json(results))
// .catch(err => res.status(422).json(err));

// findAddress: function(data) {
//   return axios.get("/maps/geocoder", data)
// }