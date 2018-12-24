import axios from 'axios';

export function fetchData(symbol = 'MSFT') {
  return(
    axios({
      url: 'https://www.alphavantage.co/query',
      method: 'GET',
      params: {
        function: 'TIME_SERIES_DAILY',
        symbol: symbol,
        apikey: '808QSHY7PI3LYUM0'
      }
    })
  )
}