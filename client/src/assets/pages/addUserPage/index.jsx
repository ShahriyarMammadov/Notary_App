import React, { useState } from "react";
import "./index.scss";
import { useForm } from "react-hook-form";
import "./index.scss";
import axios from "axios";

const LoginPage = () => {
  const [message, setMessage] = useState(false);
  const {
    resetField,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    resetField("name");
    resetField("about");
    resetField("img");
    resetField("vezife");
    axios.post(`http://localhost:3000/users`, data);
    setMessage(true);
  };

  setTimeout(() => {
    setMessage(false);
  }, 2000);

  return (
    <>
      {message ? (
        <h1
          style={{
            height: "70vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Successfully
        </h1>
      ) : (
        <div className="forms">
          <h1>Post About Cards</h1>
          <form onSubmit={handleSubmit(onSubmit)} shouldUnregister={true}>
            <input
              placeholder="name. . . ."
              {...register("name", {
                required: true,
                maxLength: 20,
                minLength: 5,
              })}
            />
            {errors.name && <span>This field is required</span>}
            <input
              placeholder="about. . . ."
              {...register("about", {
                required: true,
                maxLength: 280,
                minLength: 15,
              })}
            />
            {errors.about && <span>This field is required</span>}
            <input
              placeholder="img. . . ."
              {...register("img", {
                required: true,
                maxLength: 290,
                minLength: 20,
              })}
            />
            {errors.img && <span>This field is required</span>}
            <input
              placeholder="vezife. . . ."
              {...register("vezife", { required: true })}
            />
            {errors.vezife && <span>This field is required</span>}
            <button type="submit" className="button-86">
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default LoginPage;
