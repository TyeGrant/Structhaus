import React from "react";

import { Img, Text, ContactForm, Hero } from "components";
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

const ProjectsPage = () => {
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
        
        <div className="flex flex-col items-center justify-start pb-[54px] w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="bg-yellow-50 flex flex-col items-center justify-start p-[67px] md:px-10 sm:px-5 w-full">
              <div className="flex flex-col md:gap-10 gap-[68px] items-center justify-start max-w-[1147px] mb-[23px] mx-auto w-full">
                <Text
                  className="leading-[36.00px] sm:text-lg text-justify text-lg text-black-900 w-full"
                  size="txtCriteriaCFRegular28"
                >
                  <>
                    We are a full-service, commercial, general contractor and
                    provide superior construction services for projects of all
                    types and sizes. Big or small, we&#39;re dedicated to
                    providing excellence for every project we take on. We
                    provide premium commercial construction services for a wide
                    variety of projects, including:
                  </>
                </Text>
                <div className="md:gap-5 gap-[27px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-6 justify-center min-h-[auto] w-full">
                  <div className="bg-deep_orange-400 flex flex-1 flex-col items-center justify-start p-[39px] sm:p-4 rounded-[20px] w-full">
                    <Text
                      className="my-[29px] sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                      size="txtCriteriaCFDemiBold28"
                    >
                      Roads
                    </Text>
                  </div>
                  <div className="bg-red-700 flex flex-1 flex-col items-center justify-start p-[37px] sm:p-4 rounded-[20px] w-full">
                    <Text
                      className="my-[31px] sm:text-2xl md:text-[26px] text-[28px] text-center text-white-A700"
                      size="txtCriteriaCFDemiBold28"
                    >
                      Hotels
                    </Text>
                  </div>
                  <div className="bg-deep_orange-400 flex flex-1 flex-col items-center justify-start p-[29px] sm:p-4 rounded-[20px] w-full">
                    <Text
                      className="my-[39px] sm:text-2xl md:text-[26px] text-[28px] text-center text-white-A700"
                      size="txtCriteriaCFDemiBold28"
                    >
                      Estates
                    </Text>
                  </div>
                  <div className="bg-red-700 flex flex-1 sm:p-4 flex-col items-center justify-start p-3.5 rounded-[20px] w-full">
                    <Text
                      className="leading-[36.00px] mb-7 mt-[45px] sm:text-2xl md:text-[26px] text-[28px] text-center text-white-A700"
                      size="txtCriteriaCFDemiBold28"
                    >
                      <>
                        Shopping
                        <br />
                        Malls
                      </>
                    </Text>
                  </div>
                  <div className="bg-deep_orange-400 flex flex-1 sm:p-4 flex-col items-end sm:items-center justify-start p-[17px] rounded-[20px] w-full">
                    <Text
                      className="leading-[36.00px] my-[33px] sm:text-2xl md:text-[26px] text-[28px] text-center text-white-A700"
                      size="txtCriteriaCFDemiBold28"
                    >
                      <>
                        Daycare
                        <br />
                        Centres
                      </>
                    </Text>
                  </div>
                  <div className="bg-red-700 flex flex-1 sm:items-center flex-col items-end justify-start p-[21px] sm:p-4 rounded-[20px] w-full">
                    <Text
                      className="my-[47px] sm:text-2xl md:text-[26px] text-[28px] text-center text-white-A700"
                      size="txtCriteriaCFDemiBold28"
                    >
                      Tilt Wall
                    </Text>
                  </div>
                  <div className="bg-red-700 flex flex-1 sm:items-center flex-col items-end justify-center p-8 sm:p-4 rounded-[20px] w-full">
                    <Text
                      className="leading-[36.00px] my-[18px] sm:text-2xl md:text-[26px] text-[28px] text-center text-white-A700"
                      size="txtCriteriaCFDemiBold28"
                    >
                      <>
                        Vet <br />
                        Clinics
                      </>
                    </Text>
                  </div>
                  <div className="bg-deep_orange-400 flex flex-1 flex-col items-center justify-center p-[23px] sm:p-4 rounded-[20px] w-full">
                    <Text
                      className="leading-[36.00px] my-[27px] sm:text-2xl md:text-[26px] text-[28px] text-center text-white-A700"
                      size="txtCriteriaCFDemiBold28"
                    >
                      <>
                        Retail
                        <br />
                        Centres
                      </>
                    </Text>
                  </div>
                  <div className="bg-red-700 flex flex-1 flex-col items-center sm:p-4 justify-center p-[19px] rounded-[20px] w-full">
                    <Text
                      className="leading-[36.00px] my-[31px] sm:text-2xl md:text-[26px] text-[28px] text-center text-white-A700"
                      size="txtCriteriaCFDemiBold28"
                    >
                      <>
                        Health
                        <br />
                        Facilities
                      </>
                    </Text>
                  </div>
                  <div className="bg-deep_orange-400 flex flex-1 sm:p-4 flex-col items-center justify-center p-[19px] rounded-[20px] w-full">
                    <Text
                      className="leading-[36.00px] my-[31px] sm:text-2xl md:text-[26px] text-[28px] text-center text-white-A700"
                      size="txtCriteriaCFDemiBold28"
                    >
                      <>
                        Storage
                        <br />
                        Facilities
                      </>
                    </Text>
                  </div>
                  <div className="bg-red-700 flex flex-1 sm:p-4 flex-col items-center justify-start p-[5px] rounded-[20px] w-full">
                    <Text
                      className="leading-[36.00px] my-[27px] sm:text-2xl md:text-[26px] text-[28px] text-center text-white-A700"
                      size="txtCriteriaCFDemiBold28"
                    >
                      <>
                        Metal &<br />
                        Structural
                        <br />
                        Steel
                      </>
                    </Text>
                  </div>
                  <div className="bg-deep_orange-400 flex flex-1 sm:p-4 flex-col items-center justify-center p-[13px] rounded-[20px] w-full">
                    <Text
                      className="leading-[36.00px] my-[45px] sm:text-2xl md:text-[26px] text-[28px] text-center text-white-A700"
                      size="txtCriteriaCFDemiBold28"
                    >
                      <>
                        Industrial
                        <br />
                        Facilities
                      </>
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-3/4">
              <Text
              className="mt-[69px] md:text-3xl sm:text-center sm:font-bold text-4xl text-deep_orange-400"
              size="txtCriteriaCFRegular64Deeporange400"
            >
              Project Gallery
            </Text>
            <Text
              className="mt-[29px] text-lg  text-black-900 text-center w-[64%] sm:w-full"
              size="txtCriteriaCFRegular24"
            >
              Our real estate development consultants bring years of experience
              to the table to help you get the most out of your property. We are
              committed to helping you fully leverage properties you purchase
              and increase returns.
            </Text>
            </div>
            <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start max-w-[1146px] mt-[52px] mx-auto md:px-5 w-full">
              <Img
                className="sm:flex-1 h-[278px] md:h-auto object-cover w-[35%] sm:w-full"
                src="images/img_house201.png"
                alt="house201"
              />
              <Img
                className="sm:flex-1 h-[278px] md:h-auto sm:ml-[0] ml-[19px] object-cover w-[32%] sm:w-full"
                src="images/img_img20230418wa0033.png"
                alt="img20230418waZero"
              />
              <Img
                className="sm:flex-1 h-[278px] md:h-auto sm:ml-[0] ml-[21px] object-cover w-[31%] sm:w-full"
                src="images/img_img20230418wa0033_278x348.png"
                alt="img20230418waZero_One"
              />
            </div>
            <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-start max-w-[1153px] mt-[18px] mx-auto md:px-5 w-full">
              <Img
                className="sm:flex-1 h-[420px] md:h-auto object-cover w-[51%] sm:w-full"
                src="images/img_img20230907wa0008.png"
                alt="img20230907waZero"
              />
              <Img
                className="sm:flex-1 h-[412px] md:h-auto object-cover w-1/2 sm:w-full"
                src="images/img_struchausprofile.png"
                alt="struchausprofil"
              />
            </div>
            <Img
              className="h-[475px] sm:h-auto max-w-[1169px] mt-[18px] mx-auto object-cover w-full"
              src="images/img_housemai1.png"
              alt="housemaiOne"
            />
            <Img
              className="h-[1641px] sm:h-auto max-w-[1147px] mt-[23px] mx-auto object-cover w-full"
              src="images/img_interior1.png"
              alt="interiorOne"
            />
          </div>
        </div>
        <div className="flex flex-col items-end justify-start w-full">
          <div className="flex md:flex-col flex-row items-center w-full">
            <ContactForm action="/inc/index" method="post" />
          </div>
        </div>
        <Footer className="bg-yellow-50 flex font-plain items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default ProjectsPage;
