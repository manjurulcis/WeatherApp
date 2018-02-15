/*
    Exports City APIs
*/

const cities = [{
        '_id': 1277333,
        'name': 'Helsinki',
        'country': 'FI',
        'coord': {
            'lon': 77.603287,
            'lat': 12.97623
        }
    },
    {
        '_id': 1273294,
        'name': 'Turku',
        'country': 'FI',
        'coord': {
            'lon': 77.216667,
            'lat': 28.666668
        }
    },
    {
        '_id': 1264527,
        'name': 'Oulu',
        'country': 'FI',
        'coord': {
            'lon': 80.278473,
            'lat': 13.08784
        }
    },
    {
        '_id': 1275004,
        'name': 'Espoo',
        'country': 'FI',
        'coord': {
            'lon': 88.36972,
            'lat': 22.569719
        }
    },
    {
        '_id': 1275339,
        'name': 'Vantaa',
        'country': 'FI',
        'coord': {
            'lon': 72.847939,
            'lat': 19.01441
        }
    }
];

function getCities() {
    // Return All cities in an array
    let data = [];
    cities.forEach((c) => {
        data.push(c.name)
    })

    return data;
}

function getCityID(cityName) {
    // Return City ID using CityName
    let id = -1;
    cities.some((c) => {
        if (c.name === cityName) {
            id = c._id;
            return true;
        }
    })
    return id;
}

export default {
    getCities,
    getCityID
}
