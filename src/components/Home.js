import React from "react";
import { Link } from "react-router-dom";
import test from "../images/test.jpg";
import "./Home.css";


const Home = () => {
  return (
    <div className="home flex center cols justify-center">
      <div className="flex center justify-space-between home-main ">
          <div className="home-left" style={{width:'50%'}}>
            <img src={test} alt="test" style={{width:'100%'}} />
          </div>
          <div className="home-right" style={{width:'50%',paddingRight:'3rem'}}>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat
              delectus quas vitae a ullam, modi at expedita laborum. Aliquam
              provident velit ducimus corrupti, voluptate deserunt et repellendus
              sunt modi omnis.
            </p>
          </div>
      </div>
      <div className="flex center justify-space-between home-main " style={{flexFlow:'row-reverse'}}>
          <div className="home-left" style={{width:'50%'}}>
            <img src={test} alt="test" style={{width:'100%'}} />
          </div>
          <div className="home-right" style={{width:'50%',paddingLeft:'3rem'}}>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat
              delectus quas vitae a ullam, modi at expedita laborum. Aliquam
              provident velit ducimus corrupti, voluptate deserunt et repellendus
              sunt modi omnis.
            </p>
          </div>
      </div>
      <Link to="/quiz" className="quiz-btn">Start Quiz!</Link>
    </div>
  );
};

export default Home;
