import React from "react";
import { Row, Col, Table } from "reactstrap";

const Weather = props => {
  const { data } = props;

  if (!data) return <div />;
  return (
    <Row className="weather">
      <Col sm="12" md={{ size: 4, offset: 4 }}>
        <h2>{data.name}</h2>
        <img
          src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
          alt="Weather Icon"
        />
        <span>{data.weather[0].main}</span>&nbsp;
        <span>{Math.floor(data.main.temp)}&deg;C</span>&nbsp;
        <Table>
          <tbody>
            <tr>
              <td>Wind</td>
              <td>{data.wind.speed}km/h</td>
            </tr>
            <tr>
              <td>Pressure</td>
              <td>{data.main.pressur}hPa</td>
            </tr>
            <tr>
              <td>Humidity</td>
              <td>{data.main.humidity}%</td>
            </tr>
            <tr>
              <td>Min Temp</td>
              <td>{data.main.temp_min}&deg;C</td>
            </tr>
            <tr>
              <td>Max Temp</td>
              <td>{data.main.temp_max}&deg;C</td>
            </tr>
          </tbody>
        </Table>
      </Col>
    </Row>
  );
};

export default Weather;
