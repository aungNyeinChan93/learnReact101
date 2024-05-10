import { Fragment } from "react";
import "../components/Conditional.css";
import Header from "./Header"
import Footer from "./Footer";

function Conditional() {
  const myConditionalT = "true";
  const myConditionalF = "true";
  if (!myConditionalF) {
    return (
      <Fragment>
        <div className="conditional">
          <h1 className="conditional-title"> Conditional </h1>
          <div className="conditional-text">
            {1 === 10 ? "this is same" : "this is diff"}
          </div>
        </div>
      </Fragment>
    );
  } else if (myConditionalT) {
    return (
      <Fragment>
        <div>
            <h1 className="conditional-text">this is another return</h1>
            <div>
                {
                !1===1 ? 
                <div>
                    <Header data={"myObj"} password="1234" titleName="this is title name..."/>
                </div>
            :
                <div>
                    <Footer test={"this is footer "} />
                </div>
                }
            </div>
        </div>
      </Fragment>
    );
  } else {
    return <h1 className="conditional-text"> hello world</h1>
  }
}

export default Conditional;
