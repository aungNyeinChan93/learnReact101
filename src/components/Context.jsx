import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import ChildOne from "./Context_components/ChildOne"
import ChildTwo from "./Context_components/ChildTwo"
import ChildThree from "./Context_components/ChildThree";
import ThemeContext from "./context/ThemeContext"
import GeneralData from './context/GeneralData';
import WhiteContext from './context/WhiteContext';
import TestContext from './context/TestContext';
import "./Context.css"
 

const Context = () => {
    const theme = "black"
    const testObj = {
        name:"test",
        key: "1",
        testBoolean :true,
        obj: {
            name:"aung",
            age:30
        }
    }
    return (
        <div className='Context container-fluid  min-vh-100 bg-white-50 mt-3 '>
            <h1 className="context-title text-center my-2 bg-info-subtle fs-2 text-black-50 text-capitalize py-2 rounded">Context Hook</h1>
            <div className="img-container container text-center mt-4 ">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 my-2 " >
                        <img style={{ height: "300px", width: "600px", border: "2px solid red" }} src="https://lh7-us.googleusercontent.com/ltvhpCVa__58CAOWMF7rU0uBeXLhb2I81kxyb2YuGLWxBbK-Ty45hr5JCzLcM_y3POWdAdusLHzH_q329XlKgKUQ7dAnssp6R-wzhH8oYzx3AuYnWhr2Dpmd-lwy5O7HsK-ievjB4dZMgvQ4iBelw9U" alt="img-1" className="context-img img-thumbnail shadow-sm rounded-1  " />
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 my-2 " >
                        <img style={{ height: "300px", width: "600px", border: "2px solid red" }} src="https://dotnettrickscloud.blob.core.windows.net/img/react/3720230724012943.webp" alt="img-1" className="context-img img-thumbnail shadow-sm rounded-1  " />
                    </div>
                </div>
            </div>
            <div className="context-parentContainer text-center p-3  ">
                <TestContext.Provider  value={testObj}>
                    <GeneralData.Provider value="this is general data from context">
                        <ThemeContext.Provider value="data from root || from context || value is dark">
                            <WhiteContext.Provider value={theme} key={testObj.key} {...testObj}>
                                <div className='bg-info text-danger  rounded-pill'><ChildOne data="this is data from main component use by props"/></div>
                                <div className='bg-info text-danger rounded-pill'><ChildTwo data="this is data from main component use by props"/></div>
                            </WhiteContext.Provider >
                            <div className='bg-info text-danger rounded-pill'><ChildThree data="this is data from main component use by props"/></div>
                        </ThemeContext.Provider>
                    </GeneralData.Provider>
                </TestContext.Provider>
            </div>

        </div>
    )
}

export default Context
