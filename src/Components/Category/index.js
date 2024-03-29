import { Link } from "react-router-dom";

export default function Category(){
    return(<>
    <div className="text-center text-[50px] font-semibold font-outfit mt-16">Top  industry courses in demand</div>
    <div className="flex justify-center w-full ">
    <div className="flex flex-wrap w-[100%]   mt-10 2xl:justify-between   pl-[4%] 2xl:pl-[0%]">
            <Link to='/courses?category=FSD' className="flex h-24 w-[30%] m-[1%] 2xl:w-[20%]     bg-[#EBEBFF] items-center">
                    <div ><img className="mix-blend-multiply" src="/fsd.png"/></div>
                    <div>
                        <div className="font-semibold">Full Stack Development</div>
                        <div className="text-sm text-[#6E7485]">63,476 Courses</div>
                    </div>
            </Link>
            <Link to='/courses?category=data-science' className="flex h-24 w-[30%] m-[1%] 2xl:w-[20%]     bg-[#FFF0F0] items-center">
                    <div ><img className="mix-blend-multiply" src="/ds.png"/></div>
                    <div>
                        <div className="font-semibold">Data Science</div>
                        <div className="text-sm text-[#6E7485]">63,476 Courses</div>
                    </div>
            </Link>
            <Link to='/courses?category=electric-vehicle-design' className="flex h-24 w-[30%] m-[1%] 2xl:w-[20%]     bg-[#EBEBFF] items-center">
                    <div className=""><img className="mix-blend-multiply" src="/evd.png"/></div>
                    <div>
                        <div className="font-semibold">Electric Vehicle Design</div>
                        <div className="text-sm text-[#6E7485]">63,476 Courses</div>
                    </div>
            </Link>
            <Link to='/courses?category=ai&ml' className="flex h-24 w-[30%] m-[1%] 2xl:w-[20%]     bg-[#FFF0F0] items-center">
                    <div className="h-20 w-20  flex justify-center items-center"><img className="mix-blend-multiply" src="/ai.png"/></div>
                    <div>
                        <div className="font-semibold">AI & ML</div>
                        <div className="text-sm text-[#6E7485]">63,476 Courses</div>
                    </div>
            </Link>                    
    <Link to='/courses?category=design' className="flex h-24 w-[30%] m-[1%] 2xl:w-[20%]     bg-[#FFF0F0] items-center">
                    <div ><img className="mix-blend-multiply" src="/design.png"/></div>
                    <div>
                        <div className="font-semibold">Design</div>
                        <div className="text-sm text-[#6E7485]">63,476 Courses</div>
                    </div>
            </Link>
            <Link to='/courses?category=hydro-carbon' className="flex h-24 w-[30%] m-[1%] 2xl:w-[20%]     bg-[#E1F7E3] items-center">
                    <div ><img className="mix-blend-multiply" src="/carbon.png"/></div>
                    <div>
                        <div className="font-semibold">Hydro Carbon</div>
                        <div className="text-sm text-[#6E7485]">63,476 Courses</div>
                    </div>
            </Link>
            <Link to='/courses?category=cyber-security' className="flex h-24 w-[30%] m-[1%] 2xl:w-[20%]     bg-[#FFF0F0] items-center">
                    <div ><img className="mix-blend-multiply" src="/cyber.png"/></div>
                    <div>
                        <div className="font-semibold">Cyber Security</div>
                        <div className="text-sm text-[#6E7485]">63,476 Courses</div>
                    </div>
            </Link>           
            <Link to='/courses?category=Management' className="flex h-24 w-[30%] m-[1%] 2xl:w-[20%]     bg-[#EBEBFF] items-center">
                    <div className="ml-2"><img  className="mix-blend-multiply w-14 h-12" src="/structur.png"/></div>
                    <div className="ml-4">
                        <div className="font-semibold">Management</div>
                        <div className="text-sm text-[#6E7485]">63,476 Courses</div>
                    </div>
            </Link>           
    </div>
    </div>
    </>)
} 