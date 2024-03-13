import React from 'react';
import './Courses.css';
import { Link } from 'react-router-dom';

const CourseCard = ({ title, slug,price, duration, image, onClick, isSelected, category }) => {
  return (
    <Link to={`/singlecourse/${slug}`} className={`max-w-sm  rounded-xl overflow-hidden coursecardhome m-4 ${isSelected ? 'border-2 border-blue-500' : ''}`}>
      <img 
      style={{height:'10rem'}}
        className="w-full  "
        src={image}
        alt="Course"
      />
      <div className="px-2 py-5 mt-2 space-y-2">
        <div className="font-bold text-lg mb-2 ">{title}</div>
        <div className=" text-base flex justify-between">
          <div style={{color:'red'}} className='font-semibold' >Rs {price}</div>
          <div className='text-[red] flex items-center space-x-2'>
            <img src="../Icons/clockfilled.svg" alt="clock" style={{height:'20px',width:"20px"}}></img>
                    <p> 2Weeks</p></div>
        </div>
        {/* Conditionally render additional data for the "AI & ML" category */}
       
      </div>
    </Link>
  );
};

export default CourseCard;
