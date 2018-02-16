import React from 'react';
import ReactDOM from 'react-dom';
import Forecast from './forecast/app';

const baseURL = process.env.ENDPOINT;

const getWeatherFromApi = async (options) => {
  try {
    const response = await fetch(`${baseURL}/weather`, options);
    return response.json();
  } catch (error) {
    console.error(error);
  }

  return {};
};
const queryParams = (params) => {
  return 
};

class Weather extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      icon: "",
      currentCity: "Helsinki,FI"
    };
  }

  async componentWillMount() {
    const weather = await getWeatherFromApi({cityName: this.state.currentCity});
    this.setState({icon: weather.icon.slice(0, -1)});
  }

  render() {
    const { icon } = this.state;

    return (
      <div>
        <Forecast />
        
        <div className="icon">
          { icon && <img src={`/img/${icon}.svg`} /> }
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Weather />,
  document.getElementById('app')
);
