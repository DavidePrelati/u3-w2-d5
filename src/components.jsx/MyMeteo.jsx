import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const MyMeteo = () => {
  const params = useParams();
  const City = params.city;
  const [MyCity, setMyCity] = useState();
  const [dataCity, setDataCity] = useState(null);
  const fetchMeteo = () => {
    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${City}&appid=83ee66c7d2d971ad6c2db3697c270cdb`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw Error("Network response was not ok.");
        }
      })
      .then((data) => {
        setMyCity(data);
        // console.log(data);
      })
      .catch((error) => {
        console.error(
          "Problema di fetch operation:",
          error
        );
      });
  };

  const fetchTodayMeteo = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${MyCity[0].lat}&lon=${MyCity[0].lon}&appid=83ee66c7d2d971ad6c2db3697c270cdb`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw Error("Network response was not ok.");
        }
      })
      .then((data2) => {
        setDataCity(data2);
        console.log(data2);
      })
      .catch((error) => {
        console.error(
            "Problema di fetch operation:",
          error
        );
      });
  };

  useEffect(() => {
    if (City !== undefined) {
      fetchMeteo();
    }
  }, [City]);

  useEffect(() => {
    if (MyCity) {
      fetchTodayMeteo();
    }
  }, [MyCity]);
  const trasformCelsius = (kelvin) => {
    let celsius = parseFloat(kelvin) - 273.15;
    celsius = celsius.toFixed(2);
    return celsius;
  };

  return (
    dataCity && (
      <>
        <h1 className="text-center mt-5 mb-2">{City}</h1>
        <Container className="mt-5 d-flex justify-content-center">
          {console.log(dataCity.weather[0].icon)}
          <Row>
            <Col>
              <Row>
                
                <Col xs={12}>{dataCity.weather[0].description}</Col>
                <Col xs={12}>{trasformCelsius(dataCity.main.temp)} °C</Col>
              </Row>
            </Col>
            <Col>
              <Row>
                
                <Col xs={12}>Vento:</Col>
                <Col xs={12}>{dataCity.wind.speed} m/s</Col>
              </Row>
            </Col>
            <Col>
              <Row>
               
                <Col xs={12}>Umidità:</Col>
                <Col xs={12}>{dataCity.main.humidity}%</Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </>
    )
  );
};
export default MyMeteo;
