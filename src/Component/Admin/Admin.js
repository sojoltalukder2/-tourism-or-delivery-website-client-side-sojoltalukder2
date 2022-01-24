import React from 'react';
import { useForm } from "react-hook-form";
import './Admin.css'
const Admin = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="mx-auto middle d-flex flex-column">
           <h2> Add a new package for the customer.</h2>
           <form className='d-flex flex-column justify-content-center mx-auto my-5' onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="package name" {...register("tour")} />
      <input placeholder="price" {...register("Price")} />
      <input placeholder="description" {...register("description")} />
      <input placeholder="image" {...register("image")} />
      <input  placeholder="extra image" {...register("images")} />
      <input placeholder="extra image" {...register("image3")} />
      <input type="submit" value="submit" />
    </form>
        </div>
    );
};

export default Admin;