import React from 'react'
import './success.css';
import { Link, useParams } from 'react-router-dom';

function Success() {
    const param=useParams()
    // console.log(param);
    let slug=param.slug;
    // console.log(slug);
    
    
    return (
        <div className='thankpage'>
            <div className="thank-you">
                <img width="188" height="188" src="/ok.png" alt="ok" />
                <h1>Thank you for ordering!</h1>
                <h2>Order Succesfully Placed</h2>
                <p>Order ID: df4d54dfasd566
                    Order Date: {Date()}
                    Invoice Date: {Date()}</p>
                <div className="button-container">
                    <Link to={`/single/${slug}`}> <button className="view-order">VIEW COURSE</button></Link>
                    <Link to={'/'}>
                        <button className="continue-shopping">CONTINUE PURCHASING</button> </Link>
                </div>
            </div>
        </div>
    );
}

export default Success