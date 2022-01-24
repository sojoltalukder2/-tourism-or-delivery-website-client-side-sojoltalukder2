import React from 'react';
import Banner from '../Banner/Banner';
import { useState } from 'react';
import { useEffect } from 'react';
import Tour from '../Tour/Tour';
import { Row } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import img1 from '../images/2.jpg'
import img2 from '../images/3.jpg'
import img3 from '../images/4.jpg'
import img4 from '../images/6.jpg'
import img5 from '../images/7.jpg'
import img6 from '../images/9.jpg'
import img7 from '../images/pexels-adi-perets-4126344.jpg'
import img8 from '../images/pexels-luca-nardone-3784152.jpg'
import './Home.css'
const Home = () => {
   const [tours,setTours]=useState([]);
   useEffect(()=>{
       fetch('http://localhost:4000/tour')
       .then(res=>res.json())
       .then(tour=>{ setTours(tour)
         })
   },[])
  
    return (
        <div>
            <Banner></Banner>
            <Container>
                 <Row>
                       {
         
             tours.map(data=> <Col> <Tour Key={data._id} data={data}></Tour> </Col> )
          
                       }
                </Row>
                </Container>
      <h1 className="my-4"> Our Most Famous Tourists spots</h1>
                <Container className="my-5 mx-auto align-center ">
           <Row classname="row ">
           <Col lg="3" sm="12"><img src={img1} />  </Col>
           <Col lg="3"><img src={img2} />  </Col>
           <Col lg="3"><img src={img3} />  </Col>
           <Col lg="2"><img src={img4} />  </Col>
           <Col lg="3"><img src={img5} />  </Col>
           <Col lg="3"><img src={img6} />  </Col>
           <Col lg="3"><img src={img7} />  </Col>
           <Col lg="3"><img src={img8} />  </Col>
           
           </Row>
          </Container>
           <h2 className="text-info my-5">Most Frequently asked quentions by our customer.</h2>
          <div class="accordion w-75 mx-auto" id="accordionPanelsStayOpenExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
        How can we believe on your service? 
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
      <div class="accordion-body">
        <strong>We are providing this service to our customer from 1993.</strong> .Yes, we are the only one whom you can trust for your safety and your safe travel. You are always willing to have the best services at a low cost for you or your family . And we are providing this for the past 28 years in this country and moreover the worldwide. So , here are no competitors even who have experience like this. So only we are the one whom you can trust only .
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
        How can we be aware in the travel ? 
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
      <div class="accordion-body">
        <strong>You donot need much for this just need to be a little aware while our from hotel or resort.</strong>Unwary tourists can make easy targets for thieves because they stand out in a crowd, are unused to their surroundings, and are generally carrying money, credit cards and valuables like cameras. You can reduce your risk of being mugged or robbed by taking a few simple precautions. It is a good idea to research the safety of your intended destination with the Department of Foreign Affairs and Trade. This government department keeps an updated bulletin on travel destinations, covering factors such as political unrest or criminal activities that target tourists. You could also consult with your travel agent, or talk to friends who have already visited your intended destination.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
        Is the package prices are fixed? 
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
      <div class="accordion-body">
        <strong>Yes, nothing to do with it .</strong> 
        Yes, again we are sorry that we cannot the price tag for you due to our company policy. But if you have any special query please contact us with mail in this email address : tourhack@gmail.com . We will try to provide you the best package price and our co-operations. 
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Home;