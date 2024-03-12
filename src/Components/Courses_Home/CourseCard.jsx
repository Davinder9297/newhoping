import React from 'react';
import './Courses.css';
import { Link } from 'react-router-dom';

const CourseCard = ({ title, slug,price, duration, image, onClick, isSelected, category }) => {
  return (
    <Link to={`/singlecourse/${slug}`} className={`max-w-sm  rounded overflow-hidden coursecardhome m-4 ${isSelected ? 'border-2 border-blue-500' : ''}`}>
      <img 
      style={{height:'10rem'}}
        className="w-full  "
        src={image}
        alt="Course"
      />
      <div className=" py-4 mt-2 space-y-2">
        <div className="font-bold text-xl mb-2 ">{title}</div>
        <p className="text-gray-700 text-base">
          Price: ₹{price} | Duration: {duration}
        </p>
        {/* Conditionally render additional data for the "AI & ML" category */}
       
      </div>
    </Link>
  );
};

export default CourseCard;
