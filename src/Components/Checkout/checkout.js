import React, { useEffect, useState } from 'react'
import './checkout.css'
import { useParams } from 'react-router-dom'
import { COURSESURL } from '../Confidential'
import { Link } from 'react-router-dom'


const Checkout = () => {
    const [Data, setData] = useState([])
    const param=useParams()
    // console.log(param);
    let slug=param.slug;
    console.log(slug);
    useEffect(() => {
        async function Fetchdata(){
            let url=COURSESURL+'course/'+slug
            const data = await fetch(url);
            const response=await data.json()
            console.log(response);
            setData(response.course)
            // console.log(response.course);
         }
         Fetchdata()
    }, [])
    
    return (

        <div className="checkout-page font-mons">
            <div className="checkout-ribbon">
                <a href="/"> <button className="back-button" ></button></a>
                <h2>Checkout</h2>
            </div>

            <div className="Billing-section checkout-section">
                <h2>Billing Address</h2>
                <div className="address-dropdowns">
                    <select className="country-dropdown">
                        <option value="">India</option>
                        <option value="">Australia</option>
                        <option value="">UK</option>
                        <option value="">U.S.A</option>

                    </select>
                    <select className="state-dropdown">
                        <option value="">Punjab</option>
                        <option value="">Rajasthan</option>
                        <option value="">New Delhi</option>
                        <option value="">Gujarat</option>
                        <option value="">Maharashtra</option>
                    </select>
                </div>
            </div>

            <div className="Summary-section checkout-section">
                <h2>Summary</h2>
                <div className="summary" style={{ display: "flex", flexDirection: "column", gap: "0px" }}>
                    <div className="summary-item1">
                        <span className="label">Original Price</span>
                        <p className="price">Rs. {Data.base_price}</p>
                    </div>
                    <div className="summary-item2">
                        <span className="label">Discount</span>
                        <p className="price">Rs. 0</p>
                    </div>
                    <div className="summary-item2">
                        <span className="label">Total</span>
                        <p className="price">Rs. {Data.base_price}</p>
                    </div>
                    <Link to={`/success/${Data.slug}`} className="checkout-btn"><h4>COMPLETE CHECKOUT</h4></Link>
                </div>
            </div>
            <div className="Payment-section checkout-section">
                <h2>Payment Method</h2>
                <div className="methods">
                    <h4>Select payment method</h4>
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                        {/* <span>
                            <input type="radio" id="choose" />
                            <label for="choose">Credit/Debit card</label>
                        </span>
                        <span>
                            <input type="radio" id="choose" />
                            <label for="choose">Net Banking</label>
                        </span>
                        <span>
                            <input type="radio" id="choose" />
                            <label for="choose">UPI</label>
                        </span>
                        <span>
                            <input type="radio" id="choose" />
                            <label for="choose">EMI</label>
                        </span> */}
                        <span>
                            <input type="radio" id="choose" />
                            <label for="choose">Cash On Delivery</label>
                        </span>

                    </div>
                </div>
            </div>

            <div className="Details-section checkout-section">
                <h2>Order Details</h2>
                <div className="detail">
                    <div className='box' style={{ display: "flex", gap: "10px" }}>
                        <div className='img w-[50%] h-[70%]'>
                            <img className='img1 w-full h-full' src={Data.featured_image} alt='person-with-laptop'></img>
                        </div>
                        <div className='content_checkout'>
                            <div>
                                <p>by Determined-instructure</p>
                                <h4>{Data.title}</h4>
                            </div>
                            <div> Rs.{Data.base_price}</div>

                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Checkout