import React from 'react';
import { Col } from 'react-bootstrap';
import './tour.css'
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
const Tour = (props) => {
    const {_id,tour,description,image,price}=props.data;
    const history =useHistory();
    const handlingbtn=()=>{
      history.push(`/order/${_id}`)
    }
    return (
        <div className="tour">
           {/* <Col lg="8">  */}
           <img src={image} />
            <h5>{tour}</h5>
            <h6> {description.slice(0,200)}</h6>
            <Button variant="info" onClick={handlingbtn}> Book Now </Button>
           {/* </Col> */}
        </div>
    );
};

export default Tour;