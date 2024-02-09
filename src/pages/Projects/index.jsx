import React from "react";

import { Button, Img, Input, Line, Text, TextArea } from "components";
import Footer from "components/Footer";
import Headerbar3 from "components/Headerbar3";

const ProjectsPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-criteriacf items-center justify-start mx-auto w-full">
        <Headerbar3 className="flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
        <div className="h-[879px] md:px-5 relative w-full">
          <Img
            className="h-[879px] m-auto object-cover w-full"
            src="images/img_homebg1_2.png"
            alt="homebgOne"
          />
          <div className="absolute bottom-[1%] flex flex-col md:gap-10 gap-[89px] items-end justify-end p-[51px] md:px-10 sm:px-5 right-[0] w-[51%]">
            <div
              className="bg-cover bg-no-repeat flex flex-col h-[472px] items-end justify-start mr-[105px] mt-[19px] p-[38px] sm:px-5"
              style={{ backgroundImage: "url('images/img_group23.svg')" }}
            >
              <Text
                className="mb-[127px] mt-2 sm:text-[40px] md:text-[46px] text-[50px] text-white-A700"
                size="txtCriteriaCFBold50"
              >
                <>
                  Your <br />
                  One- Stop
                  <br />
                  Construction
                  <br />
                  Solution
                </>
              </Text>
            </div>
            <Button className="cursor-pointer font-bold leading-[normal] min-w-[250px] mr-[105px] md:text-3xl sm:text-[28px] text-[32px] text-center">
              Get in touch
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start pb-[54px] w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="bg-yellow-50 flex flex-col items-center justify-start p-[67px] md:px-10 sm:px-5 w-full">
              <div className="flex flex-col md:gap-10 gap-[68px] items-center justify-start max-w-[1147px] mb-[23px] mx-auto w-full">
                <Text
                  className="leading-[36.00px] sm:text-2xl md:text-[26px] text-[28px] text-black-900 w-full"
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
                  <div className="bg-deep_orange-400 flex flex-1 flex-col items-center justify-start p-[39px] sm:px-5 rounded-[20px] w-full">
                    <Text
                      className="my-[29px] sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                      size="txtCriteriaCFDemiBold28"
                    >
                      Roads
                    </Text>
                  </div>
                  <div className="bg-red-700 flex flex-1 flex-col items-center justify-start p-[37px] sm:px-5 rounded-[20px] w-full">
                    <Text
                      className="my-[31px] sm:text-2xl md:text-[26px] text-[28px] text-center text-white-A700"
                      size="txtCriteriaCFDemiBold28"
                    >
                      Hotels
                    </Text>
                  </div>
                  <div className="bg-deep_orange-400 flex flex-1 flex-col items-center justify-start p-[29px] sm:px-5 rounded-[20px] w-full">
                    <Text
                      className="my-[39px] sm:text-2xl md:text-[26px] text-[28px] text-center text-white-A700"
                      size="txtCriteriaCFDemiBold28"
                    >
                      Estates
                    </Text>
                  </div>
                  <div className="bg-red-700 flex flex-1 flex-col items-center justify-start p-3.5 rounded-[20px] w-full">
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
                  <div className="bg-deep_orange-400 flex flex-1 flex-col items-end justify-start p-[17px] rounded-[20px] w-full">
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
                  <div className="bg-red-700 flex flex-1 flex-col items-end justify-start p-[21px] sm:px-5 rounded-[20px] w-full">
                    <Text
                      className="my-[47px] sm:text-2xl md:text-[26px] text-[28px] text-center text-white-A700"
                      size="txtCriteriaCFDemiBold28"
                    >
                      Tilt Wall
                    </Text>
                  </div>
                  <div className="bg-red-700 flex flex-1 flex-col items-end justify-center p-8 sm:px-5 rounded-[20px] w-full">
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
                  <div className="bg-deep_orange-400 flex flex-1 flex-col items-center justify-center p-[23px] sm:px-5 rounded-[20px] w-full">
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
                  <div className="bg-red-700 flex flex-1 flex-col items-center justify-center p-[19px] rounded-[20px] w-full">
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
                  <div className="bg-deep_orange-400 flex flex-1 flex-col items-center justify-center p-[19px] rounded-[20px] w-full">
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
                  <div className="bg-red-700 flex flex-1 flex-col items-center justify-start p-[5px] rounded-[20px] w-full">
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
                  <div className="bg-deep_orange-400 flex flex-1 flex-col items-center justify-center p-[13px] rounded-[20px] w-full">
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
            <Text
              className="mt-[69px] md:text-5xl text-[64px] text-deep_orange-400"
              size="txtCriteriaCFRegular64Deeporange400"
            >
              Project Gallery
            </Text>
            <Text
              className="mt-[29px] text-2xl md:text-[22px] text-black-900 text-center sm:text-xl w-[64%] sm:w-full"
              size="txtCriteriaCFRegular24"
            >
              Our real estate development consultants bring years of experience
              to the table to help you get the most out of your property. We are
              committed to helping you fully leverage properties you purchase
              and increase returns.
            </Text>
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
        <div className="bg-deep_orange-400 flex flex-col items-end justify-start md:pl-10 pl-40 sm:pl-5 w-full">
          <div className="flex md:flex-col flex-row gap-[38px] items-center justify-end w-full">
            <div className="flex md:flex-1 flex-col items-start justify-start w-[58%] md:w-full">
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-white-A700"
                size="txtCriteriaCFMedium40"
              >
                <span className="text-white-A700 font-criteriacf text-left font-bold">
                  Are you looking for custom
                </span>
                <span className="text-white-A700 font-criteriacf text-left font-bold">
                  <>
                    {" "}
                    <br />
                    design and construction?
                  </>
                </span>
              </Text>
              <div className="flex md:flex-col flex-row md:gap-[50px] items-center justify-between mt-[59px] w-full">
                <Text
                  className="bg-white-A700 h-[88px] justify-center pb-5 pl-6 pr-[35px] pt-[35px] sm:px-5 text-black-900 text-xl w-[347px]"
                  size="txtCriteriaCFRegular20"
                >
                  Name
                </Text>
                <Text
                  className="bg-white-A700 h-[88px] justify-center pb-[19px] pl-[31px] pr-[35px] pt-[35px] sm:px-5 text-black-900 text-xl w-[347px]"
                  size="txtCriteriaCFRegular20"
                >
                  E-mail
                </Text>
              </div>
              <div className="flex sm:flex-col flex-row sm:gap-[50px] items-center justify-between mt-[23px] w-full">
                <Input
                  name="frameThree"
                  placeholder="Phone Number"
                  className="leading-[normal] p-0 placeholder:text-black-900 text-left text-xl w-full"
                  wrapClassName="sm:flex-1 sm:w-full"
                  type="number"
                ></Input>
                <Input
                  name="frameFour"
                  placeholder="Location"
                  className="leading-[normal] p-0 placeholder:text-black-900 text-left text-xl w-full"
                  wrapClassName="sm:flex-1 sm:w-full"
                ></Input>
              </div>
              <TextArea
                className="bg-white-A700 border-0 leading-[normal] mt-[23px] p-[35px] sm:px-5 placeholder:text-black-900 text-black-900 text-left text-xl w-full"
                name="frameFive"
                placeholder="Your message"
              ></TextArea>
              <Button className="cursor-pointer font-bold leading-[normal] min-w-[250px] mt-[55px] md:text-3xl sm:text-[28px] text-[32px] text-center">
                Submit{" "}
              </Button>
            </div>
            <div className="bg-red-700 flex flex-col items-start justify-start p-[53px] md:px-10 sm:px-5">
              <Text
                className="mb-[267px] mt-[185px] text-white-A700 text-xl"
                size="txtCriteriaCFMedium20WhiteA700"
              >
                <>
                  CONTACT
                  <br />
                  <br />
                  Suite 16B 2nd Floor, <br />
                  SAY Plaza Plot 23, <br />
                  Ekukinam Street, Utako, <br />
                  FCT - Abuja.
                  <br />
                  <br />
                  0810 991 398
                  <br />
                  <br />
                  structhausconstruction@gmail.com
                </>
              </Text>
            </div>
          </div>
        </div>
        <Footer className="bg-yellow-50 flex font-plain items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default ProjectsPage;
