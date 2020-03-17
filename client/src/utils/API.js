import axios from "axios";

export default {
  findZip: function(zip) {
    return axios.get("/api/zipcodes/find/" + zip)
  },
  findAddress: function(data) {
    return axios
      .get(`https://maps.googleapis.com/maps/api/geocode/json?address=${data.number}+${data.street}+${data.suffix},+${data.city},+${data.state}&key=AIzaSyDZaPFIcx5Rcb3LH6NME4Z6-_wBjr2K338`)
  }
};


// .then(({data: {results} }) => res.json(results))
// .catch(err => res.status(422).json(err));

// findAddress: function(data) {
//   return axios.get("/maps/geocoder", data)
// }