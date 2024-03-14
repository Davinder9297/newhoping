import { useEffect, useState } from "react";
import "./CCDetails.css";
import ReactPlayer from "react-player";
import ChatBot from "../chatbot/chatbot";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { COURSESURL } from "../Confidential";
import Spinner from "../Spinner";

export default function CDDetails() {
  const [clicked, setclicked] = useState(false);
  const [show, setshow] = useState(false)
  // const [slug, setslug] = useSearchParams();'
  const [Data, setData] = useState([])
  let param=useParams()
  let slug=param.slug;
  let navigate=useNavigate()
  useEffect(() => {
    let login = localStorage.getItem('COURSES_USER_TOKEN')
    console.log(login)
    if (!login) {
      navigate('/login')
    }
   else{
    async function Fetchdata(){
   try {
    setshow(true)
    let url=COURSESURL+'course/'+slug
    const data = await fetch(url);
    const response=await data.json()
    setData(response.course)
    setshow(false)
    // console.log(response.course);
   } catch (error) {
    console.log(error);
   }
   }
   Fetchdata()
   }
  }, [])

  function ClickSection(id) {
    if (!clicked) {
      setclicked(true);
      let inner = document.getElementById(id);
      // console.log(inner);
      inner.style.display = "none";
    } else {
      setclicked(false);
      let inner = document.getElementById(id);

      // console.log(inner);
      inner.style.display = "block";
    }
  }

  return (
    <>
      <div className="CCD-container">
        <div className="CCD-content">
          <div className="CCD-content-left px-12 pb-6 2xl:w-[100%]">
            <div className="relative h-[100%]">
              <ReactPlayer
                height="100%"
                width="100%"
                playing={true}
                loop={true}
                
                url={Data?.featured_video}
              />
              <div className="absolute right-0 bottom-0 ">
                <ChatBot className="w-[100%]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-full">
        <div className="CCD-Header-container flex justify-evenly">
          <div className="w-full">
            <div className="CCDetails-Header-main bg-black">
              <div className="CCDetails-Header-content-left">
                <div className="CCDetails-Header-content-row1">
                  <h2>{Data?.title}</h2>
                </div>
                <div className="CCDetails-Header-content-row2">
                  <div className="CCDetails-Header-content-row2-clock">
                    <img src="../Icons/clockfilled.svg" alt="clock"></img>
                    <p>{Data?.duration}</p>
                  </div>
                  <div className="CCDetails-Header-content-row2-hat">
                    <img src="../Icons/hat.svg" alt="hat"></img>
                    <p> {Data?.enrollments/1000}k Students</p>
                  </div>
                  <div className="CCDetails-Header-content-row2-level">
                    <img src="../Icons/barchartgreen.svg" alt="bar-chart"></img>
                    <p> {Data?.level}</p>
                  </div>
                  <div className="CCDetails-Header-content-row2-files">
                    <img src="../Icons/files.svg" alt="files"></img>
                    <p> {Data?.total_lessons} Lessons</p>
                  </div>
                  <div className="CCDetails-Header-content-row2-faq">
                    <img src="../Icons/faq.svg" alt="faq"></img>
                    <p> {Data?.total_quiz} Quizzes</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="CCD-Main-container">
              <div className="CCD-Main-container-content">
                <p>
                  {
                    Data?.whatWillILearn?.map((item)=>{
                      return(<>
                      {item}.
                      </>)
                    })
                  }
                 
                </p>
              </div>
              {/* <div className="CCD-Main-container-btn">
                <button>
                  <p>Get Your Certification</p>
                  <img src="../Icons/download.svg" alt="download"></img>
                </button>
              </div> */}
            </div>
          </div>
          <div className="w-[59%]">
            <div className="CCDetails-Header-content-right">
              <div className="CCDetails-Header-content-right-list">
                <div className="CCDetails-Header-content-right-list-heading">
                  <p>Course Content</p>
                </div>
                <div
                  onClick={() => ClickSection(1)}
                  className="CCDetails-Header-content-right-list-course"
                >
                  <div className="CCDetails-Header-content-right-list-course-left">
                    <div className="CCDetails-Header-content-right-list-course-left-row1">
                      <p>Section 1 : Getting Started</p>
                    </div>
                    <div className="CCDetails-Header-content-right-list-course-left-row2">
                      <p>5 Lessons</p>
                      <p>45 Mins</p>
                    </div>
                  </div>
                  <div className="CCDetails-Header-content-right-list-course-right">
                    <button>
                      <img
                        src="../Icons/dropdownarrow.svg"
                        alt="dropdownarrow"
                      ></img>
                    </button>
                  </div>
                </div>
                <div className="outer-wrapper" id={1}>
                  <div className="CCDetails-Header-content-right-list-course-list">
                    <div className="CCDetails-Header-content-right-list-course-list-video1">
                      <div className="CCDetails-Header-content-right-list-course-list-video1-row1">
                        <input value="asnisaf" type="checkbox" />
                        <label>
                          1. Introduction to Figma Essentials training course
                        </label>
                      </div>
                      <div className="CCDetails-Header-content-right-list-course-list-video1-row2">
                        <img src="../Icons/youtube.svg" />
                        <p>5 min</p>
                      </div>
                    </div>
                  </div>
                  <div className="CCDetails-Header-content-right-list-course-list">
                    <div className="CCDetails-Header-content-right-list-course-list-video1">
                      <div className="CCDetails-Header-content-right-list-course-list-video1-row1">
                        <input value="asnisaf" type="checkbox" />
                        <label>
                          1. Introduction to Figma Essentials training course
                        </label>
                      </div>
                      <div className="CCDetails-Header-content-right-list-course-list-video1-row2">
                        <img src="../Icons/youtube.svg" />
                        <p>5 min</p>
                      </div>
                    </div>
                  </div>
                  <div className="CCDetails-Header-content-right-list-course-list">
                    <div className="CCDetails-Header-content-right-list-course-list-video1">
                      <div className="CCDetails-Header-content-right-list-course-list-video1-row1">
                        <input value="asnisaf" type="checkbox" />
                        <label>
                          1. Introduction to Figma Essentials training course
                        </label>
                      </div>
                      <div className="CCDetails-Header-content-right-list-course-list-video1-row2">
                        <img src="../Icons/youtube.svg" />
                        <p>5 min</p>
                      </div>
                    </div>
                  </div>
                  <div className="CCDetails-Header-content-right-list-course-list-assign">
                    <div className="CCDetails-Header-content-right-list-course-list-video1">
                      <div className="CCDetails-Header-content-right-list-course-list-video1-row1">
                        <input value="asnisaf" type="checkbox" />
                        <label>
                          Assignment 1 : Class project 01 - Create your own
                          brief{" "}
                        </label>
                      </div>
                      <div className="CCDetails-Header-content-right-list-course-list-assign-row2">
                        <button>
                          <p>Download</p>
                        </button>
                        <div className="relative">
                          <input
                            style={{ visibility: "hidden" }}
                            className="w-16 absolute top-3 left-8 "
                            id="contained-button-file"
                            type="file"
                          />
                          <label htmlFor="contained-button-file">
                            <p className="upload cursor-pointer">Upload</p>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  onClick={() => ClickSection(2)}
                  className="CCDetails-Header-content-right-list-course"
                >
                  <div className="CCDetails-Header-content-right-list-course-left">
                    <div className="CCDetails-Header-content-right-list-course-left-row1">
                      <p>Section 1 : Getting Started</p>
                    </div>
                    <div className="CCDetails-Header-content-right-list-course-left-row2">
                      <p>5 Lessons</p>
                      <p>45 Mins</p>
                    </div>
                  </div>
                  <div className="CCDetails-Header-content-right-list-course-right">
                    <button>
                      <img
                        src="../Icons/dropdownarrow.svg"
                        alt="dropdownarrow"
                      ></img>
                    </button>
                  </div>
                </div>
                <div className="outer-wrapper" id={2}>
                  <div className="CCDetails-Header-content-right-list-course-list">
                    <div className="CCDetails-Header-content-right-list-course-list-video1">
                      <div className="CCDetails-Header-content-right-list-course-list-video1-row1">
                        <input value="asnisaf" type="checkbox" />
                        <label>
                          1. Introduction to Figma Essentials training course
                        </label>
                      </div>
                      <div className="CCDetails-Header-content-right-list-course-list-video1-row2">
                        <img src="../Icons/youtube.svg" />
                        <p>5 min</p>
                      </div>
                    </div>
                  </div>
                  <div className="CCDetails-Header-content-right-list-course-list">
                    <div className="CCDetails-Header-content-right-list-course-list-video1">
                      <div className="CCDetails-Header-content-right-list-course-list-video1-row1">
                        <input value="asnisaf" type="checkbox" />
                        <label>
                          1. Introduction to Figma Essentials training course
                        </label>
                      </div>
                      <div className="CCDetails-Header-content-right-list-course-list-video1-row2">
                        <img src="../Icons/youtube.svg" />
                        <p>5 min</p>
                      </div>
                    </div>
                  </div>
                  <div className="CCDetails-Header-content-right-list-course-list">
                    <div className="CCDetails-Header-content-right-list-course-list-video1">
                      <div className="CCDetails-Header-content-right-list-course-list-video1-row1">
                        <input value="asnisaf" type="checkbox" />
                        <label>
                          1. Introduction to Figma Essentials training course
                        </label>
                      </div>
                      <div className="CCDetails-Header-content-right-list-course-list-video1-row2">
                        <img src="../Icons/youtube.svg" />
                        <p>5 min</p>
                      </div>
                    </div>
                  </div>
                  <div className="CCDetails-Header-content-right-list-course-list-assign">
                    <div className="CCDetails-Header-content-right-list-course-list-video1">
                      <div className="CCDetails-Header-content-right-list-course-list-video1-row1">
                        <input value="asnisaf" type="checkbox" />
                        <label>
                          Assignment 1 : Class project 01 - Create your own
                          brief{" "}
                        </label>
                      </div>
                      <div className="CCDetails-Header-content-right-list-course-list-assign-row2">
                        <button>
                          <p>Download</p>
                        </button>
                        <div className="relative">
                          <input
                            style={{ visibility: "hidden" }}
                            className="w-16 absolute top-3 left-8 "
                            id="contained-button-file"
                            type="file"
                          />
                          <label htmlFor="contained-button-file">
                            <p className="upload cursor-pointer">Upload</p>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {show ? <div className='w-full h-screen fixed -top-4 left-0 bg-[#b4cca1] opacity-80'>
                <Spinner className='' />

            </div> : ''}
      </div>
    </>
  );
}
