import { useState } from "react";

export const StateHook = () => {
  const [contactForm, setContactForm] = useState({
    name: "",
    gender: "",
    message: "",
    age: 0,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(contactForm);
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          placeholder="enter name"
          onChange={(e) =>
            setContactForm((prev) => {
              return { ...prev, name: e.target.value };
            })
          }
        />
        <input
          placeholder="enter gender"
          onChange={(e) =>
            setContactForm((prev) => {
              return { ...prev, gender: e.target.value };
            })
          }
        />
        <input
          placeholder="enter message"
          onChange={(e) =>
            setContactForm((prev) => {
              return { ...prev, message: e.target.value };
            })
          }
        />
        <input
          placeholder="enter age"
          onChange={(e) =>
            setContactForm((prev) => {
              return { ...prev, age: Number(e.target.value) };
            })
          }
        />
      </form>
    </div>
  );
};
