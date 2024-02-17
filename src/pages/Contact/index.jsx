import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, Text, TextArea, Hero, ContactForm } from "components";
import Footer from "components/Footer";
import HeaderBar1 from "components/HeaderBar1";

const HeroText1 = () => {
  return (
   <span>
     Contact
   </span>
  )
}

const ContactPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-criteriacf items-center justify-start mx-auto w-full">
        <HeaderBar1 headerWrapperClassName="flex sm:flex-col flex-row m-auto" className="sm:gap-5 items-center sm:mt-2 justify-center md:px-5 w-full" />
        {/* Hero section */}
        <Hero
        bgImg="images/img_homebg1_650x1458.png"
        heroWrapperClassName="md:h-[572px] sm:h-[400px] h-[563px]"
        heroImgBgClassName="h-[563px] inset-x-[0] mx-auto sm:h-full"
        heroText1={<HeroText1 />}
        heroBtnClassName="hidden"
        />
        
        <div className="w-full">
          <div className="flex flex-row sm:flex-col gap-5 sm:gap-5 w-3/4 m-auto mt-20 mb-20 md:mb-10 md:mt-10">
          <div className="bg-white-A700_01 border-4 border-deep_orange-400 border-solid flex flex-col gap-3 items-center pt-24 pb-24 justify-center w-3/4 sm:w-full z-[1]">
            <Text
              className="text-lg text-red-700"
              size="txtCriteriaCFExtraBold24"
            >
              Email Address
            </Text>
            <Text
              className="text-lg text-red-700"
              size="txtCriteriaCFRegular24"
            >
              info@structhaus.com.ng
            </Text>
          </div>
          <div className="bg-white-A700_01 border-4 border-deep_orange-400 border-solid flex flex-col gap-3 items-center justify-center w-3/4 sm:w-full pt-24 pb-24 z-[1]">
            <Text
              className="text-red-700 text-lg"
              size="txtCriteriaCFExtraBold24"
            >
              Phone Number
            </Text>
            <Text
              className="text-black-900 text-lg"
              size="txtCriteriaCFRegular24"
            >
              +234 810 991 3968
            </Text>
          </div>
          <div className="bg-white-A700_01 border-4 border-deep_orange-400 border-solid flex flex-col gap-3 items-center justify-center w-3/4 pt-24 pb-24 sm:w-full z-[1]">
            <Text
              className="text-red-700 text-lg"
              size="txtCriteriaCFExtraBold24"
            >
              Office Address
            </Text>
            <Text
              className="text-black-900 text-center text-base"
              size="txtCriteriaCFRegular20"
            >
              <>
                Suite 16B 2nd Floor, <br />
                SAY Plaza Plot 23, <br />
                Ekukinam Street, <br />
                Utako, FCT - Abuja.
              </>
            </Text>
          </div>
        </div>
        </div>
        <div className="bg-deep_orange-400 flex flex-col items-end justify-start w-full">
          <div className="flex md:flex-col flex-row gap-10 items-center justify-end w-full">
            <ContactForm method="post" />
          </div>
        </div>
        <Footer className="bg-yellow-50 flex font-plain items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default ContactPage;
