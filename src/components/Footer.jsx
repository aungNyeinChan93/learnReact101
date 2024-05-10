import { Fragment } from "react";
import "../components/Footer.css"  

function Footer({test}) {
    console.log(test);
    const [one,two,three] = test;
  return (
    <Fragment>
      <div className="footer">
        <h1
            
            style={{
            color: "blue",
            textAlign: "center",
            background: "yellow",
            marginTop: "20px",
            fontFamily: "monospace",
            }}
        >
            Footer
        </h1>
        <h2 style={{textAlign:"center"}}>
            {one +" "}
            {two +" "}
            {three +" "}
           
        </h2>
        <h3 className="footer-h3">this is CSS </h3>
      </div>
    </Fragment>
  );
}
export default Footer;
