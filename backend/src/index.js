const Koa = require('koa');
const router = require('koa-router')();
const fetch = require('node-fetch');
const cors = require('kcors');
const request = require('request');

const appId = process.env.APPID || '4825a558f5791dd9a89cbfbd03ee206f';
const mapURI = process.env.MAP_ENDPOINT || 'http://api.openweathermap.org/data/2.5';
const targetCity = process.env.TARGET_CITY || 'Helsinki,FI';

const port = process.env.PORT || 9000;

const app = new Koa();

app.use(cors());

const fetchWeather = async (cityName) => {
  var endpoint = mapURI + '/weather?q=' + cityName + ',FI&APPID=' + appId + '&';
  const response = await fetch(endpoint);

  return response ? response.json() : {};
};

const fetchForecast = async (cityName) => {
  var endpoint = mapURI + '/forecast/?q='+cityName+',FI&APPID=' + appId + '&cnt=3';
  const response = await fetch(endpoint);

  return response ? response.json() : {};
};

router.get('/api/weather/:cityName',  async ctx => {
  var ip = require('ip');
  console.log('IP Address', ip.address());
  console.log('IP Address', ctx.params.cityName);
  const weatherData = await fetchWeather(ctx.params.cityName);
  ctx.type = 'application/json; charset=utf-8';
  ctx.body = weatherData.weather ? weatherData.weather[0] : {};
});

router.get('/api/forecast/:cityName', async ctx => {
  var ip = require('ip');
  console.log('IP Address', ip.address());
  const weatherData = await fetchForecast(ctx.params.cityName);
  ctx.type = 'application/json; charset=utf-8';
  ctx.body = weatherData;
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(port);

console.log('App listening on port ' + port);
