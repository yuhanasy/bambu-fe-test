import axios from "axios";

export function fetchData(symbol = "MSFT") {
  return axios({
    url: "https://www.alphavantage.co/query",
    method: "GET",
    params: {
      function: "TIME_SERIES_DAILY",
      symbol: symbol,
      apikey: process.env.API_KEY
    }
  });
}