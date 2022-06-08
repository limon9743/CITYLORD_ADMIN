import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Resizer from "react-image-file-resizer";

const AddFormPract = () => {
  const [imageData, setImageData] = useState(null);
  const [image1Data, setImage1Data] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    e.preventDefault();
    console.log(data);
    const formData = new FormData();
    formData.append("firstname", data.firstname);
    formData.append("lastname", data.lastname);
    formData.append("email", data.email);
    formData.append("image", imageData);
    formData.append("image1", image1Data);

    axios.post(
      "https://api.clwapping.co.uk/api/property/post/dummyform",
      formData
    );
  };

  const resizeFile = (file) =>
    Resizer.imageFileResizer(
      file,
      500,
      500,
      "JPEG",
      100,
      0,
      (uri) => {
        setImageData(uri);
      },
      "file"
    );
  const resizeFile1 = (file) =>
    Resizer.imageFileResizer(
      file,
      500,
      500,
      "JPEG",
      100,
      0,
      (uri) => {
        setImage1Data(uri);
      },
      "file"
    );

  const imageOnChange = (e) => {
    try {
      const file = e.target.files[0];
      console.log(file);
      const imageResized = resizeFile(file);
      setImageData(imageResized);
    } catch (err) {
      console.log(err);
    }
  };

  const image1OnChange = (e) => {
    try {
      const file = e.target.files[0];
      console.log(file);
      const imageResized = resizeFile1(file);
      setImage1Data(imageResized);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} enctype="multipart/form-data">
        <input type="text" {...register("firstname")} />
        <input type="text" {...register("lastname")} />
        <input type="text" {...register("email")} />
        <input
          id="image"
          type="file"
          {...register("image", {
            onChange: (e) => {
              imageOnChange(e, "image");
            },
          })}
        />
        <input
          id="image1"
          type="file"
          {...register("image1", {
            onChange: (e) => {
              image1OnChange(e, "image1");
            },
          })}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddFormPract;
