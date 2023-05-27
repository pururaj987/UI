import React, { useState } from "react";
import axios from "axios";
import { InputLabel } from "@mui/material";
const Form = () => {
  const [firstImage, setFirstImage] = useState("");
  const [secondImage, setSecondImage] = useState("");
  const [res, setRes] = useState("");

  const handleSubmit = (event) => {
    const new_image_one = firstImage.replaceAll("_", "/");
    const new_image_second = secondImage.replaceAll("_", "/");
    event.preventDefault();
    axios
      .get("https://013a-104-155-152-124.ngrok.io/face-predict", {
        params: {
          image_one: new_image_one,
          image_two: new_image_second,
        },
      })
      .then((res) => {
        setRes(res.data);
      });
  };

  function handleChangeFirst(e) {
    setFirstImage(e.target.files[0].name);
  }
  function handleChangeSecond(e) {
    setSecondImage(e.target.files[0].name);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2> Upload Baby Pictures</h2>
        <InputLabel> First Image</InputLabel>
        <input type="file" onChange={handleChangeFirst} />
        <InputLabel> Second Image</InputLabel>
        <input type="file" onChange={handleChangeSecond} />
        <button type="submit">Upload</button>
        <h1>{res}</h1>
      </form>
    </div>
  );
};

export default Form;
