import axios from "axios";

export default {
  submitRequest: function(data) {
    return axios.post("/api/requests", data)
  },
  gatherRequests: function() {
    return axios.get("/api/requests")
  },
  submitPortItem: function(data) {
    return axios.post("/api/portfolios", data)
  },
  gatherPortItems: function() {
    return axios.get("/api/portfolios")
  },
  saveQuote: function(data) {
    return axios.post("/api/quotes", data)
  },
  gatherQuotes: function() {
    return axios.get("/api/quotes")
  }
};
