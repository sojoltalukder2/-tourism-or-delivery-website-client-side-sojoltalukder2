import { Button } from 'react-bootstrap';
import React from 'react';
import none from '../images/none.jpg'
import Tour from './../Tour/Tour';
import { Link } from 'react-router-dom';
const None = () => {
    return (
        <div className="img-fluid">
            <img src={none} alt="" />
            <br />
           <Link to="/">
           <Button > Back to Home</Button></Link>
        </div>
    );
};

export default None;