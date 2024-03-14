import ProgressBar from "@ramonak/react-progress-bar";
import './wishlistContent.css'
import { Link } from "react-router-dom";
import Spinner from "../Spinner";

export default function Mycourses({ courses }) {
// const [first, setfirst] = useState(second)

    // console.log(courses);

    return (

        <>

            <style>
                {`
        @media (min-width: 320px) and (max-width: 480px) {
            .cards {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 5px;
                margin-top: 30px;
            }
        }
        `}
            </style>

            <div className="px-16 mt-10 xsm:px-6">
                <div className="flex space-x-7 xsm:space-x-4 xsm:justify-center">
                    {/* <select className="w-[140px] h-10 px-2 font-mons border rounded xsm:w-[120px] xsm:h-8 xsm:text-[10px] xsm:px-1">
                        <option>Categories</option>
                    </select> */}
                    {/* <select className="w-[140px] h-10 px-2 font-mons border rounded xsm:w-[120px] xsm:h-8 xsm:text-[10px] xsm:px-1">
                <option>Progress</option>
            </select> */}
                    {/* <select className="w-[140px] h-10 px-2 font-mons border rounded xsm:w-[120px] xsm:h-8 xsm:text-[10px] xsm:px-1">
                <option>Instructor</option>
            </select> */}
                </div>
                <div className="flex w-full mt-16 font-mons flex-wrap justify-between xsm:justify-center">
                    {
                        courses?.map((val, ind) => {
                            return (
                                <a href={`/singlecourse/${val.slug}`} className="h-[350px] w-[370px] border rounded-xl mb-16 " key={ind}>
                                    <img src={val?.featured_image} className="h-[230px] w-full xsm:h-[200px] rounded-xl" />
                                    <div className="text-sm px-2 mt-2">By {val.instructor.firstName + " " + val.instructor.lastName}</div>
                                    <div className="text-[15px] font-semibold px-2 mt-2">{val?.title}</div>
                                    <ProgressBar completed={60} maxCompleted={100} height={4} bgColor='#1DBF73' isLabelVisible={false} className="mt-2" />
                                    <div className="text-center font-semibold mt-2">25% Complete</div>
                                </a>
                            )
                        })
                    }


                </div>
                
            </div>
            {/* <div className='wishlist-pages'>
            <button type='submit' >
                <img src="../Icons/leftarrow.svg" alt="left-arrow"></img>
            </button>
            <button type='submit' >
                1
            </button>
            <button type='submit' >
                2
            </button>
            <button type='submit' >
                3
            </button>
            <button type='submit' >
                <img src="../Icons/rightarrow.svg" alt="right-arrow"></img>
            </button>
        </div> */}
        </>)
}