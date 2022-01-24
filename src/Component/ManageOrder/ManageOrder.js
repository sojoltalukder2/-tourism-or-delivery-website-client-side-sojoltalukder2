import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useAuth from './../Home/Context/UseAuth';
import { Container,Row,Col } from 'react-bootstrap';
import SingleOrder from './SingleOrder';
import { Button } from 'react-bootstrap';

const ManageOrder = () => {
    const [order,setOrder]=useState([]);
    const {user}=useAuth();
    useEffect(()=>{
        fetch(`http://localhost:4000/tourinfo/${user.email}`)
        .then(res=>res.json())
        .then(data=>{setOrder(data)
           })
    },[]);
    const handlingdeleted=()=>{
        const decision=window.confirm('Are you sure to cancel your order ')
        if(decision){
            let id; 
            for(const id of  order){
                console.log(id._id);
            
            fetch(`http://localhost:4000/tourpak/${id._id}`,{
              method:"DELETE"
              })
          .then(res=>res.json())
          .then(data=>{
              if(data.deletedCount>0){
                 const rest=order.filter(data=>id._id!==data._id);
                 setOrder(rest)
              }
          })
        }}
          
      }
    return ( 
        <div>
                
                <h3> You have booked  {order.length} packages </h3>


<div className="container">
    <div className="row">
        {

  order.map(data=><SingleOrder Key={data._id} data={data}>   <Button onClick={handlingdeleted}>Cancel order </Button></SingleOrder>)

}
    </div>


</div>
            


        </div>
    );
};

export default ManageOrder;