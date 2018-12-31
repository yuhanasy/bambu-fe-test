# Stock Exchange App
Stock Exchange App is a single page application for viewing the latest stock within OHLC chart.
You can visit the APP [here](https://yuhanasy.github.io/bambu-fe-test/).

### Tech

Dillinger uses a number of open source projects to work properly:

* [ReactJS]
* [React.emotion]
* [Webpack 4]
* [babel]

### Installation

Clone hte repository 
```sh
git clone https://github.com/yuhanasy/bambu-fe-test.git
```
or if you using SSH
```sh
git clone git@github.com:yuhanasy/bambu-fe-test.git
```

Install the dependencies and devDependencies and start the server.

```sh
$ cd bambu-fe-test
$ npm install
```
In Order to access the API, you have to claim your API KEY in [https://www.alphavantage.co/](https://www.alphavantage.co/).
Then in the root directory (where di package.json exist) make a new file called `.env`.
Insert your API KEY into `API_KEY` variable. For example if your API KEY is 83743870254, so it will be:

```
API_KEY=83743870254
```

For production environments...

```sh
$ npm run build
```

To launch the app into browser
```sh
$ npm start
```

Then the App will be launched in http://localhost:8080/

   [ReactJS]: <https://reactjs.org/>
   [React.emotion]: <https://emotion.sh/>
   [Webpack 4]: <https://webpack.js.org/>
   [babel]: <https://babeljs.io/>
