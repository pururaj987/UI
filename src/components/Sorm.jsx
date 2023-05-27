import React, { useState } from "react";
const Form = () => {
  const [first, setFirst] = useState("");
  const [file, setFile] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("form submitted ✅");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="first"
          name="first"
          value={first}
          onChange={(event) => setFirst(event.target.value)}
          autoComplete="off"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
