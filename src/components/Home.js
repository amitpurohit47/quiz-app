import React from "react";
import { Link } from "react-router-dom";
import test from "../images/test.jpg";
import "./Home.css";

const Home = () => {
  return (
    <div className="home flex center cols justify-center">
      <div className="flex center justify-space-between home-main ">
          <div className="home-left">
            <img src={test} alt="test" />
          </div>
          <div className="home-right">
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
