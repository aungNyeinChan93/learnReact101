import React from 'react'

const Api = () => {
    return (
        <div className='Api container-fluid min-vh-100'>
            <h1 className='api-title text-center fs-3 p-2 rounded-3 my-2 bg-danger-subtle '>API </h1>
            <div className="image-container container-lg ">
                <div className="row">
                    <div className="col-lg-6">
                        <img style={{ width: "550px", height: "300px", border: "5px solid red" }} className=' object-fit-fill  img-thumbnail rounded shadow  my-2' src="https://voyager.postman.com/illustration/diagram-what-is-an-api-postman-illustration.svg" alt="img1" />
                    </div>
                    <div className="col-lg-6">
                        <img style={{ width: "550px", height: "300px", border: "5px solid red" }} className=' object-fit-fill img-thumbnail rounded shadow  my-2' src="https://jscurious.com/wp-content/uploads/2021/01/javascript_fetch_api.jpg" alt="img1" />
                    </div>
                    <div className="col-lg-6">
                        <img style={{ width: "550px", height: "300px", border: "5px solid red" }} className=' object-fit-fill img-thumbnail rounded shadow  my-2' src="https://miro.medium.com/v2/resize:fit:1198/1*1P9LFCAZk2cHQHBMRAc4Mw.png" alt="img1" />
                    </div>
                    <div className="col-lg-6">
                        <img style={{ width: "550px", height: "300px", border: "5px solid red" }} className=' object-fit-fill img-thumbnail rounded shadow  my-2' src="https://static.semrush.com/blog/uploads/media/3a/79/3a7950050980a0e2de37bc1a632cc321/wmkPPztB7KlAC7fPzO0-85NG8t0B9IEh4JEbt_ELP1pvJMhof9vt2pDSwrBZeXodoqaoV_Es1Rur-AWoeoOdV-RIde2vjqyMQuxrqch62uXZ1bsI0yaaMWx-f4cg4BlmOQrI2kFJ6CPXECCd69KeopE.png" alt="img1" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Api;
