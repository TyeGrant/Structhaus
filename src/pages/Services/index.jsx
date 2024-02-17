import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, Text, TextArea, Hero, ContactForm, About } from "components";
import Footer from "components/Footer";
import HeaderBar1 from "components/HeaderBar1";

const HeroText1 = () => {
  return (
   <span>
     Your <br />
                  One- Stop
                  <br />
                  Construction
                  <br />
                  Solution
   </span>
  )
}

const ServicesPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-criteriacf items-center justify-start mx-auto w-full">
        <HeaderBar1 headerWrapperClassName="flex sm:flex-col flex-row m-auto" className="sm:gap-5 items-center sm:mt-2 justify-center md:px-5 w-full" />
        {/* Hero section */}
        <Hero
        bgImg="images/img_homebg1_879x1458.png"
        heroWrapperClassName="md:h-[1072px] sm:h-[800px] h-[763px]"
        heroImgBgClassName="h-[763px] inset-x-[0] mx-auto sm:h-full"
        heroText1={<HeroText1 />}
        />
        <About />
        <div className="bg-white-A700 flex flex-col items-start justify-start p-[72px] md:px-10 sm:px-5 w-full">
          <div className="flex flex-col items-center justify-start mb-7 ml-28 md:ml-[0] w-[79%] md:w-full">
            <Text
              className="text-4xl sm:text-3xl md:text-2xl text-red-700"
              size="txtCriteriaCFBold48"
            >
              Some of our top Clients
            </Text>
            <div className="flex sm:flex-col flex-row md:gap-10 items-end justify-between mt-[60px] w-full">
              <Img
                className="h-[200px] md:h-auto mb-11 object-contain"
                src="images/img_cbn1_220x166.png"
                alt="cbnOne"
              />
              <Img
                className="h-[154px] md:h-auto mb-11 sm:mt-0 mt-[66px] object-cover"
                src="images/img_centerpoint1.png"
                alt="centerpointOne"
              />
              <Img
                className="h-[247px] md:h-auto sm:mt-0 mt-[17px] object-cover"
                src="images/img_hotel20201.png"
                alt="hotel20201"
              />
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mt-[52px] w-[95%] md:w-full">
              <Img
                className="h-[301px] md:h-auto object-cover"
                src="images/img_solida1.png"
                alt="solidaOne"
              />
              <Img
                className="h-[194px] md:h-auto md:mt-0 mt-[77px] object-cover"
                src="images/img_demes1.png"
                alt="demesOne"
              />
            </div>
          </div>
        </div>
        <div className="bg-deep_orange-400 flex flex-col items-end justify-start md:pl-10 pl-40 sm:pl-5 w-full">
          <div className="flex md:flex-col flex-row gap-[38px] items-center justify-end w-full">
          <ContactForm method="post" />
          
          </div>
        </div>
        <Footer className="bg-yellow-50 flex font-plain items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default ServicesPage;
