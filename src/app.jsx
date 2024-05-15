import React from "react";
import "./app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header"
import Test from "./components/Test";
import Footer from "./components/Footer";
import Event from "./components/Event"
import Conditional from "./components/Conditional";
import Extenstion from "./components/Extenstion";
import Rafce from "./components/Rafce";
import State from "./components/State";
import UseStateHook from "./components/UseStateHook";
import FormHanling from "./components/FormHanling";
import UseStateFormHandling from "./components/UseStateFormHandling";

function App() {
    const greeting = ()=>{
        return `hello......!`
    }
  const userName = "User Name";
  const myObj = {
    name: "aung",
    age: 19,
  };
  const myArray = ["apple", "mango", "banana"];

  const myBooleanT = "true";
  const myBooleanF = "false";

  return (
    <section className="form-test">
      <div className="form-test ">
        <h1 className="title  ">Hello world</h1>
        <form
          action="#"
          className="form-control form-control-md shadow container-md mt-3 rounded"
        >
          <div className="input-userName px-4 my-2  text-danger d-flex justify-content-between fs-4 align-item-center">
            <label htmlFor="userName" className=" text-danger pt-2">
              {userName.toUpperCase()}
            </label>
            <input
              type="text "
              placeholder="Enter Your Name"
              id="userName"
              className="border-0 p-2 w-50"
            />
          </div>
          <h2>
            {userName === "User Name" ? "this is same" : "this is different"}
          </h2>
          <h4>{myObj.name + " " + myObj.age}</h4>
          <h4>{myArray.map((item) => item + " ")}</h4>
          <h4>{greeting()}</h4>
        </form>
      </div>
      
      <Header data={myObj} password="1234" titleName="this is title name..."/>
      <Test/>
      <Footer test={myArray}/>

      {/* ---------------CSS Binding------------------- */}
      <div id= "CSS-binding" className={ myBooleanF ? "red" : "blue"}>
        <h4>
          { 1===2 ? "this is equal ":"this is different"} <hr />
          {!myBooleanT ? "this is true":"this is false"} <hr />
          {userName === "gg" ? "this is gg" : "this is not gg"} <hr />
        </h4>
      </div>

      {/* Event Section */}
      <Event title="Event Title"/>

      {/* Conditional Section */}
      <Conditional/>

      {/* Extenstion Section */}
      <Extenstion/>

      {/* RAFCE section  */}
      <Rafce/>

      {/* State section */}
      <State titleName="STATE" detail="this is detail page"/>

      {/* UseState Section */}
      <UseStateHook/>

      {/* Form handling */}
      <FormHanling/>

      {/* useState Form Handling */}
      <UseStateFormHandling/>

    </section>
  );
}

export default App;
