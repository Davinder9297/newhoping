import { useEffect, useState } from "react";
import { ReactComponent as Arrow } from "../../Assets/Icons/arrow.svg";
import Mycourses from "./my_courses";
import WishlistContent from "./wishlistContent";
import Archieved from "./Archieved";
import Assignments from "./Assignments";
import Certificate from "../Certificate/Certificate";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { COURSESURL } from "../Confidential";
import Spinner from "../Spinner";


export default function My_learning() {
  const [showpage, setshowpage] = useState("courses");
  const [purchasedCourses, setPurchasedCourses] = useState();
  const [show, setshow] = useState(false)
  let navigate = useNavigate()
  useEffect(() => {
    let login = localStorage.getItem('COURSES_USER_TOKEN')
    console.log(login)
    if (!login) {
      navigate('/login')
    }
    else {
      const token = localStorage.getItem('COURSES_USER_TOKEN');
      const decoded = jwtDecode(token);
      console.log(decoded)
      fetchUserData(decoded?.email)
    }
  }, [])

  const fetchUserData = async (email) => {
    setshow(true)
    try {
      const res = await axios.get(`${COURSESURL}user/${email}`)
      console.log(res.data[0]?.purchased_courses)
      setPurchasedCourses(res?.data[0]?.purchased_courses)
      setshow(false)
    } catch (error) {
      console.log(error)
    }

  }

  return (
    <>
      <style>
        {`
        @media (min-width: 320px) and (max-width: 480px) {
            .learning {
                font-size: 18px;
            }
            .button {
                font-size: 9px;
                margin-left: 0px;
            }
            .arrow {
                width: 5%;
                height: 10%;
            }
        }
        `}
      </style>

      <div className="h-full bg-black w-full pl-2 pt-5 pb-5">
        {/* <Arrow className="arrow" /> */}
        <div className="text-6xl text-white font-outfit pl-20 font-semibold learning xsm:pl-8">
          My Learning
        </div>
        <div className="flex text-white font-outfit space-x-12 pl-24 mt-5 xsm:space-x-4 xsm:pl-3">
          <button
            className="pb-1 button"
            onClick={() => setshowpage("courses")}
            style={{
              borderBottom:
                showpage === "courses"
                  ? "2px solid white"
                  : "1px solid transparent",
            }}
          >
            My Courses
          </button>
          {/* <button
            onClick={() => setshowpage("assignments")}
            style={{
              borderBottom:
                showpage === "assignments"
                  ? "2px solid white"
                  : "1px solid transparent",
            }}
            className="pb-1 button"
          >
            Assignments
          </button> */}
          {/* <button
            onClick={() => setshowpage("archieved")}
            style={{
              borderBottom:
                showpage === "archieved"
                  ? "2px solid white"
                  : "1px solid transparent",
            }}
            className="pb-1 button"
          >
            Archived
          </button> */}
          {/* <button
            className="pb-1 button"
            style={{
              borderBottom:
                showpage === "wishlist"
                  ? "2px solid white"
                  : "1px solid transparent",
            }}
            onClick={() => setshowpage("wishlist")}
          >
            Wishlist
          </button> */}
          {/* <button
            className="pb-1 button"
            style={{
              borderBottom:
                showpage === "certificate"
                  ? "2px solid white"
                  : "1px solid transparent",
            }}
            onClick={() => setshowpage("certificate")}
          >
            Certifications
          </button> */}
        </div>
      </div>
      {showpage === "courses" ? (
        <Mycourses courses={purchasedCourses} />
      ) : showpage === "wishlist" ? (
        <WishlistContent />
      ) : showpage === "archieved" ? (
        <Archieved />
      ) : showpage === "certificate" ? (
        <Certificate />
      ) : (
        <Assignments />
      )}
      {show ? <div className='w-full h-screen fixed -top-4 left-0 bg-[#b4cca1] opacity-80'>
                <Spinner className='' />

            </div> : ''}
    </>
  );
}
