import React, { useState } from "react";

const StateHookArray = () => {
  const [data, setData] = useState([
    { name: "aktim" },
    { name: "ram" },
    { name: "shyam" },
  ]);

  const handleChange = (e, index) => {
    const updatedData = [...data];
    updatedData[index].name = e.target.value;
    setData(updatedData);
  };

  return (
    <div>
      <ul>
        {data.length > 0 &&
          data.map((item, index) => {
            return (
              <>
                <li key={index}>{item?.name}</li>
                <input
                  placeholder="enter the correct name"
                  onChange={(e) => handleChange(e, index)}
                />
              </>
            );
          })}
      </ul>
    </div>
  );
};

export default StateHookArray;
