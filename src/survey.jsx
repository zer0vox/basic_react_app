import { useState } from "react";
import DatePicker from "react-date-picker";
const Survey = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const age = event.target.age.value;
    // Do something with the age value
    console.log(age);
  };
  const [value, onChange] = useState(new Date());
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="age">How old are you?</label>
        <input type="range" id="age" name="age" min="18" max="100" />
        <div id="ageValue">Your age is: 18</div>

        <p>
          ----------------------------------------------------------------------------------------------
        </p>

        <div>
          <DatePicker onChange={onChange} value={value} format="y" />
        </div>

        <p>
          ----------------------------------------------------------------------------------------------
        </p>

        <label htmlFor="drink">What drink would you like?</label>
        <div>
          <input type="checkbox" id="coffee" name="drink" value="coffee" />
          <label htmlFor="coffee">Coffee</label>
        </div>
        <div>
          <input type="checkbox" id="tea" name="drink" value="tea" />
          <label htmlFor="tea">Tea</label>
        </div>
        <div>
          <input type="checkbox" id="juice" name="drink" value="juice" />
          <label htmlFor="juice">Juice</label>
        </div>

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Survey;
