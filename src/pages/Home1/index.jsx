import React from "react";

import { ToastContainer, toast } from "react-toastify";

import { registerDeviceAuth } from "service/api";

import { Img, Text, ContactForm, Hero, About, FeaturedImage } from "components";

import Footer from "components/Footer";
import HeaderBar1 from "components/HeaderBar1";

import "react-toastify/dist/ReactToastify.css";

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

const Home1Page = () => {
  const [register, setRegister] = React.useState();

  function submit() {
    const req = {};

    registerDeviceAuth(req)
      .then((res) => {
        setRegister(res?.data);

        localStorage.setItem("save", JSON.stringify(res?.data?.message));

        localStorage.setItem("save", JSON.stringify(res?.data?.data?.email));

        toast.success("Thank you");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Try Again");
      });
  }

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-criteriacf items-center justify-start mx-auto w-full">
        <HeaderBar1 headerWrapperClassName="flex sm:flex-col flex-row m-auto" className="sm:gap-5 items-center sm:mt-2 justify-center md:px-5 w-full" />
        {/* Hero section */}
        <Hero
        bgImg="images/img_homebg1.png" 
        heroWrapperClassName="md:h-[1072px] sm:h-[800px] h-[1163px]"
        heroImgBgClassName="h-[1072px] inset-x-[0] mx-auto sm:h-full"
        heroText1={<HeroText1 />}
        />
        <div className="flex flex-col items-center justify-start max-w-[1147px] sm:mt-[90%] mx-auto p-[29px] md:px-5 w-full">
          <div className="flex flex-col gap-[33px] items-center justify-start mb-4 w-[85%] md:w-full">
            <Text
              className="md:text-4xl sm:text-3xl text-5xl text-gray-400"
              size="txtCriteriaCFLight32"
            >
              Top Clientele
            </Text>
            <div className="flex md:flex-col gap-16 flex-row md:gap-10 items-center justify-center w-full">
              <Img
                className="h-[116px] md:h-auto object-cover sm:object-contain w-[200px] md:w-[150px] sm:w-[100px]"
                src="images/img_cbn1.png"
                alt="cbnOne"
              />
              <Img
                className="h-[65px] md:h-auto object-cover sm:object-contain w-[200px] md:w-[150px] sm:w-[100px]"
                src="images/img_centerpoint.png"
                alt="centerpoint"
              />
              <Img
                className="h-[105px] md:h-auto object-cover sm:object-contain w-[200px] md:w-[150px] sm:w-[100px]"
                src="images/img_house20201.png"
                alt="house20201"
              />
              <Img
                className="h-[74px] md:h-auto object-cover sm:object-contain w-[200px] md:w-[150px] sm:w-[100px]"
                src="images/img_demes.png"
                alt="demes"
              />
              <Img
                className="h-[130px] md:h-auto object-cover sm:object-contain w-[200px]"
                src="images/img_solidarity1.png"
                alt="solidarityOne"
              />
            </div>
          </div>
        </div>
        <About />
        <FeaturedImage />
        <div className="flex flex-col items-end justify-start w-full">
          <div className="flex md:flex-col flex-row items-center w-full">
            <ContactForm action="/inc/index" method="post" />
          </div>
        </div>
        <Footer className="bg-yellow-50 flex font-plain items-center justify-center md:px-5 w-full" />
      </div>
      <ToastContainer />
    </>
  );
};

export default Home1Page;
