import React from 'react';

import { useLocation } from 'react-router-dom';
import './SingleOrder.css';
import { Button } from 'react-bootstrap';
const SingleOrder = (props) => {
   const {name,email,status,tourName}=props.data;
 

    return (
        <div className=" col-12 col-lg-6">
        <div className="single  ">
        <h5> Name:{name}</h5>
          <h5>Order:{tourName}</h5>
          <h5 className="text-info">Status:{status}</h5>
          <h5>Email:{email}</h5>
          {props.children}
        </div>
        </div>
    );
};

export default SingleOrder;