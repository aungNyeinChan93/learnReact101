import { Fragment } from "react";


function Header({ data: { name, age }, password, titleName }) {
    // console.log(name);
    // console.log(titleName);

    return (
        <Fragment>
            <div className="header" style={{ textAlign: "center" }}>
                <h1 style={{ color: "red", textDecoration: "underline" }}>{titleName}</h1>
                <h1 style={{ color: "red", textDecoration: "underline" }}>{password}</h1>
                <h1 style={{ color: "red", textDecoration: "underline" }}>{name}</h1>
                <h2 style={{ color: "red", textDecoration: "underline" }}>{age}</h2>
            </div>
        </Fragment>
    )
};
export default Header;