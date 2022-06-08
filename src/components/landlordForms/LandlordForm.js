import React from "react";
import { useForm } from "react-hook-form";

const LandlordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Name" {...register("name", {})}></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LandlordForm;
