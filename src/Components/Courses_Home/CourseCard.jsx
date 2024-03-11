import React from 'react';
import './Courses.css';
import { Link } from 'react-router-dom';

const CourseCard = ({ title, slug,price, duration, image, onClick, isSelected, category }) => {
  return (
    <Link to={`/singlecourse/${slug}`} className={`max-w-sm rounded overflow-hidden shadow-lg m-4 ${isSelected ? 'border-2 border-blue-500' : ''}`}>
      <img
        className="w-full"
        src={image}
        alt="Course"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">
          Price: ₹{price} | Duration: {duration}
        </p>
        {/* Conditionally render additional data for the "AI & ML" category */}
       
      </div>
    </Link>
  );
};

export default CourseCard;
