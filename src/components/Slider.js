
import React from 'react';
import Slider1 from './Slider1.jpg';
function Slider(){
  const phoneNumber = '<0648792773>';
  const text = 'Hello Fitofoto';
    return(<div>
     
            <img src={Slider1} class="rounded mx-auto d-block  h-70 w-70 object-fit-sm-contain border rounded" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
              <p className="pat"> Plant disease detection <br></br> via Chatbot whatsapp</p>
              <br></br>
            <div className="text-center">
    <button className="whatsapp-button" >
      <a href={`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(text)}`} className="whatsapp-button">Click here</a>
    </button>
 
                    </div>
            </div>

          </div>
       

   
    );
 }

export default Slider;