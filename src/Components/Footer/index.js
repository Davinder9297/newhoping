import React from "react";
import { ReactComponent as Hm } from "../../Assets/Icons/hm.svg";
import { ReactComponent as Facebook } from "../../Assets/Icons/facebook.svg";
import { ReactComponent as Pintrest } from "../../Assets/Icons/pintrest.svg";
import { ReactComponent as Twitter } from "../../Assets/Icons/twitter.svg";
import { ReactComponent as Instagram } from "../../Assets/Icons/instagram.svg";
import { ReactComponent as Youtube } from "../../Assets/Icons/youtube.svg";

const Footer = () => {
  return (<>
  <style>
  {`
          // @media (max-width: 767px) {
          //   .footer-container {
          //     flex-direction: column;
          //     gap: 6px;
          //     padding: 4px;
          //   }
          //   .footer-content {
          //     width: 100%;
          //   }
          // }
          @media (min-width: 768px) and (max-width: 820px) {
            .footer-container {
              flex-direction: row;
              gap: 4px;
              padding: 8px;
            }
          }
          @media (min-width: 821px) {
            .footer-container {
              flex-direction: row;
              gap: 6px;
              padding: 5rem;
            }
          }
        `}
      </style>

    <div className="bg-[#F5F5F5] footer-container flex flex-row gap-6 justify-between px-24 py-6 xsm:flex-col xsm:gap-8 xsm:justify-center xsm:px-10">
      <div className="flex flex-col gap-2 w-[341px] xsm:gap-4">
        <img src="/logo.png" className="w-[154.88px] h-[59.86px] xsm:w-[68px] xsm:h-[28px]" />
        <p className="text-[#555555] text-[18px] font-Montserrat w-[90%] xsm:text-[10px] xsm:w-[70%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="flex flex-col gap-5 w-[110px] xsm:gap-2">
        <p className="text-[#333333] text-[20px] font-Montserrat font-semibold xsm:text-[10px]">
          GET HELP
        </p>
        <div className="flex flex-col gap-2 xsm:gap-1">
          <p className="text-[#555555] text-[18px] font-Montserrat xsm:text-[10px]">
            Contact Us
          </p>
          <p className="text-[#555555] text-[18px] font-Montserrat xsm:text-[10px]">
            Latest Articles
          </p>
          <p className="text-[#555555] text-[18px] font-Montserrat xsm:text-[10px]">FAQ</p>
        </div>
      </div>
      <div className="flex flex-col gap-5 w-[187px] xsm:gap-2">
        <p className="text-[#333333] text-[20px] font-Montserrat font-semibold xsm:text-[10px]">
          PROGRAMS
        </p>
        <div className="flex flex-col gap-2 xsm:gap-1">
          <p className="text-[#555555] text-[18px] font-Montserrat xsm:text-[10px]">
            Data Science
          </p>
          <p className="text-[#555555] text-[18px] font-Montserrat xsm:text-[10px]">
            Full Stack Development
          </p>
          <p className="text-[#555555] text-[18px] font-Montserrat xsm:text-[10px]">AI/ML</p>
          <p className="text-[#555555] text-[18px] font-Montserrat xsm:text-[10px]">
            Cyber Security
          </p>
          <p className="text-[#555555] text-[18px] font-Montserrat xsm:text-[10px]">
            Electric Vehicle Design
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-5 w-[410px] xsm:gap-2">
        <p className="text-[#333333] text-[20px] font-Montserrat font-semibold xsm:text-[10px]">
          CONTACT US
        </p>
        <div className="flex flex-col gap-2 xsm:gap-1">
          <p className="text-[#555555] text-[18px] font-Montserrat xsm:text-[10px]">
          Tel: + 9779886900 
          </p>
          <p className="text-[#555555] text-[18px] font-Montserrat xsm:text-[10px]">
            Mail: Support@Hopingminds.com
          </p>
          <div className="flex flex-row gap-1 xsm:pt-6">
            <Facebook className="w-[34px] h-[34px] xsm:w-[15px] xsm:h-[15px]" />
            <Pintrest className="w-[34px] h-[34px] xsm:w-[15px] xsm:h-[15px]" />
            <Twitter className="w-[34px] h-[34px] xsm:w-[15px] xsm:h-[15px]" />
            <Instagram className="w-[34px] h-[34px] xsm:w-[15px] xsm:h-[15px]" />
            <Youtube className="w-[34px] h-[34px] xsm:w-[15px] xsm:h-[15px]" />
          </div>
        </div>
      </div>
    </div>
    <div className="bg-[#F5F5F5] w-full text-center text-[#555555] font-semibold font-mons xsm:text-[10px] xsm:pb-4">© KATINA SKILLS PRIVATE LIMITED 2024</div>
    </>);
};

export default Footer;
