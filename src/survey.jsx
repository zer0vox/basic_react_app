import { useState } from "react";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";

const Survey = () => {
  const [age, setAge] = useState(18);
  const [drink, setDrink] = useState([]);
  const [date, setDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      `Age: ${age}, Drink: ${drink.join(
        ", "
      )}, Date: ${date.toLocaleDateString()}`
    );
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleDrinkChange = (event) => {
    const drinkValue = event.target.value;
    setDrink((prevDrinks) => [...prevDrinks, drinkValue]);
  };

  const handleYearChange = (date) => {
    setDate(date);
    setIsOpen(false);
  };

  const handleCalendarToggle = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <div className="container text-center">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="age">How old are you?</label>
          <input
            type="range"
            id="age"
            name="age"
            min="18"
            max="100"
            value={age}
            onChange={handleAgeChange}
            className="form-control"
          />
          <div id="ageValue" className="form-text">
            Your age is: {age}
          </div>
        </div>

        <p>
          ----------------------------------------------------------------------------------------------
        </p>

        <div className="form-group">
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleCalendarToggle}
          >
            {isOpen ? "Close calendar" : "Open calendar"}
          </button>
          {isOpen && (
            <DatePicker
              onChange={handleYearChange}
              value={date}
              closeCalendar={true}
              format="yyyy"
              calendarIcon={null}
              clearIcon={null}
              maxDetail="decade"
              minDetail="decade"
            />
          )}
          <div className="form-text">
            Your selected date: {date.toLocaleDateString()}
          </div>
        </div>

        <p>
          ----------------------------------------------------------------------------------------------
        </p>

        <div className="form-group">
          <label htmlFor="drink">What drink would you like?</label>
          <Row>
            <Col xs={4}>
              <input
                type="checkbox"
                id="coffee"
                name="drink"
                value="coffee"
                onChange={handleDrinkChange}
              />
              <label htmlFor="coffee" className="form-check-label">
                Coffee
              </label>
            </Col>
            <Col xs={4}>
              <input
                type="checkbox"
                id="tea"
                name="drink"
                value="tea"
                onChange={handleDrinkChange}
              />
              <label htmlFor="tea" className="form-check-label">
                Tea
              </label>
            </Col>
            <Col xs={4}>
              <input
                type="checkbox"
                id="juice"
                name="drink"
                value="juice"
                onChange={handleDrinkChange}
              />
              <label htmlFor="juice" className="form-check-label">
                Juice
              </label>
            </Col>
          </Row>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Survey;
