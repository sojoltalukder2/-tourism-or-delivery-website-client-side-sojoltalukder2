import React from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import useAuth from './../Home/Context/UseAuth';
import './Order.css'
import { useState } from 'react';
import { useEffect } from 'react';
import { Container ,Row,Col} from 'react-bootstrap';

const Order = () => {
    const {orderId}=useParams();
    const {user}=useAuth(); 
    // the data will be here 
    const [tours,setTour]=useState([]);
    const {Price,image,images,image3,description,tour}=tours;
    useEffect(()=>{
        fetch(`http://localhost:4000/tour/${orderId}`)
        .then(res=>res.json())
        .then(data=>setTour(data))
    },[])
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        data.tourName=tour;
        data.status="pending";
        const motive= window.confirm("are you sure to book this service ");
        if(motive){
           fetch('http://localhost:4000/tourinfo',{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(data)
        })
        
         console.log(motive)
         reset();  
        }
        else{

        }
       
       
    };
        return (
       <div>
           <h1 className="text-success">Please , Provide your information here </h1>
            <div className="d-flex  align-center">
                
               <form  className="d-flex flex-column justify-content-center mx-auto my-5" onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="your  name" defaultValue={user.displayName} {...register("name")} />
      <input placeholder="email" defaultValue={user.email} {...register("email")} />
      <input placeholder="date" {...register("date")} />
      <input placeholder="address"  {...register("address")} />
      <input type="submit" value="submit" />
    </form>
        </div>
        <div className="orderdetails">
            <h3> Your order details are here </h3>
            <h2> Package Name: {tour}</h2>
            <h2>Famous Spots there</h2>
            <Container> <Row className="imageGallary">
            <Col  className="img-fluid"> <img src={image} alt="" /></Col>
            <Col  className="img-fluid"> <img src={images} alt="" /></Col>
            <Col  className="img-fluid"><img src={image3} alt="" /></Col>
            </Row>
             </Container>
            <h1> price: ${Price}</h1>
            <h4> Description:  {description}</h4>
        </div>
       </div>

    );
};

export default Order;