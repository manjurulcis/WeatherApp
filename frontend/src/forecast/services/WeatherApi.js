/*
    Takes OpenWeatherApi Config and exports Jquery GET Request Object
*/

const GETApi = {
    'url': 'http://api.openweathermap.org/data/2.5/forecast?id=', //process.env.ENDPOINT,
    'type': 'GET',
    'data': {
        'APPID': '4825a558f5791dd9a89cbfbd03ee206f',//process.env.API_KEY,
        'units': 'metric'
    },
    'success': function (data) {},
    'error': function (request, status, error) {
        alert(request.responseText);
    }
}

export default (id, callback) => {
    // Replaces call back function and concat City ID to Request and return GET Api Object 
    return { ...GETApi,
        url: GETApi.url + id,
        success: callback
    }
}
