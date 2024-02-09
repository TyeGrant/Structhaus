import React from "react";

import { Button, Img, Input, Line, Text, TextArea } from "components";
import Footer from "components/Footer";
import Headerbar2 from "components/Headerbar2";

const AboutPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-criteriacf items-center justify-start mx-auto w-full">
        <Headerbar2 className="flex flex-col items-center justify-center md:px-5 w-full" />
        <div className="h-[879px] md:px-5 relative w-full">
          <Img
            className="h-[879px] m-auto object-cover w-full"
            src="images/img_homebg1_879x1458.png"
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
        <div className="flex flex-col items-center justify-end p-9 sm:px-5 w-full">
          <div className="flex flex-col md:gap-10 gap-[90px] items-end justify-start max-w-[1147px] mt-[31px] mx-auto md:px-5 w-full">
            <Text
              className="leading-[36.00px] sm:text-2xl md:text-[26px] text-[28px] text-black-900"
              size="txtCriteriaCFRegular28"
            >
              <>
                As one of the leading Nigeria company we offer end-to-end
                services to help make your concept a reality. Our company offer
                project completion standards that are quick, economical, and
                more convenient for almost any construction project.
                <br />
                <br />
                Structhaus Nigeria Limited construction project delivery method
                that gives you one point of contact throughout the entire
                process. You hire our team to help with everything from
                pre-construction planning and design to project management. Our
                construction experts handle everything for you, including hiring
                trusted specialized subcontractors and managing construction
                timelines and budget. Structhaus Nigeria Limited offers faster
                completion, lower costs, and higher quality standards.
              </>
            </Text>
            <div className="flex flex-col md:gap-10 gap-[88px] items-center justify-start w-full">
              <div className="flex sm:flex-col flex-row md:gap-10 gap-[92px] items-start justify-start w-full">
                <Text
                  className="md:text-5xl text-[64px] text-deep_orange-400"
                  size="txtCriteriaCFRegular64Deeporange400"
                >
                  Our Vison
                </Text>
                <Text
                  className="sm:flex-1 leading-[32.00px] sm:mt-0 mt-[15px] text-2xl md:text-[22px] text-black-900 sm:text-xl w-[63%] sm:w-full"
                  size="txtCriteriaCFRegular24"
                >
                  <>
                    To become the leading construction/Real Estate/Design firm
                    while delivering projects that are of consistently
                    international standard and provide exceptional customer’s
                    satisfaction, delivering excellent value and innovative
                    construction solutions to meet our client’s requirements,
                    using modern principles and sophisticated technologies.{" "}
                  </>
                </Text>
              </div>
              <div className="md:h-[556px] h-[593px] relative w-full">
                <Img
                  className="absolute h-[556px] left-[0] object-cover top-[0] w-[47%]"
                  src="images/img_bg2.png"
                  alt="bg2"
                />
                <div className="absolute bg-yellow-50 bottom-[0] flex flex-col gap-9 justify-end md:pl-10 sm:pl-5 pl-[41px] py-[41px] right-[0]">
                  <Text
                    className="mr-[323px] mt-[21px] md:text-5xl text-[64px] text-deep_orange-400"
                    size="txtCriteriaCFRegular64Deeporange400"
                  >
                    Our Mission
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[15px] text-2xl md:text-[22px] text-black-900 sm:text-xl w-[98%] sm:w-full"
                    size="txtCriteriaCFRegular24"
                  >
                    <>
                      Our mission as the most luxurious construction company in
                      Nigeria and Africa as a whole is to be the customer’s most
                      preferred choice by attaining excellence in quality and
                      timely completed value added projects. To continually
                      improve the competence of our team and employ diverse
                      innovative and result oriented personnel motivated to
                      deliver excellence. Investing in skills, we seek to
                      provide exceptional results to our clients. Opportunities
                      for our employee and owners to be strengthened and support
                      our industries and communities.
                    </>
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start p-[21px] sm:px-5 w-full">
          <div className="flex flex-col items-center justify-start max-w-[1149px] mb-[11px] mx-auto md:px-5 w-full">
            <Text
              className="sm:text-[40px] md:text-[46px] text-[50px] text-black-900 text-center"
              size="txtCriteriaCFMedium50"
            >
              <span className="text-black-900 font-criteriacf font-light">
                Say Hello to our
              </span>
              <span className="text-black-900 font-criteriacf font-medium">
                <>
                  <br />
                </>
              </span>
              <span className="text-red-700 font-criteriacf font-medium">
                Management Team
              </span>
            </Text>
            <Text
              className="mt-7 text-[22px] text-black-900 text-center sm:text-lg md:text-xl"
              size="txtInterRegular22"
            >
              <>
                Our team provides adequate construction services throughout the
                Greater area. <br />
                We are proud to be a trusted construction company and have
                helped countless commercial property owners build facilities of
                all types and sizes. From concept to completion, <br />
                you get peace of mind when you hire our team for the job.
              </>
            </Text>
            <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-[51px] w-full">
              <Img
                className="h-[325px] md:h-auto object-cover"
                src="images/img_unsureyoungma.png"
                alt="unsureyoungma"
              />
              <Img
                className="h-[315px] md:h-auto object-cover"
                src="images/img_confidententre.png"
                alt="confidententre"
              />
              <Img
                className="h-[325px] md:h-auto object-cover"
                src="images/img_mediumshotwom.png"
                alt="mediumshotwom"
              />
            </div>
            <div className="flex md:flex-col flex-row font-criteriacf md:gap-5 items-start justify-start mt-[17px] w-[91%] md:w-full">
              <Text
                className="text-black-900 text-center text-sm"
                size="txtCriteriaCFMedium14"
              >
                <span className="text-black-900 font-criteriacf font-medium">
                  <>
                    Engr. Hyacinth Onyinye Benyeogor <br />
                  </>
                </span>
                <span className="text-deep_orange-400 font-criteriacf text-xs font-normal">
                  Managing Director / Lead Engineer{" "}
                </span>
              </Text>
              <Text
                className="md:ml-[0] ml-[212px] text-black-900 text-center text-sm"
                size="txtCriteriaCFMedium14"
              >
                <span className="text-black-900 font-criteriacf font-medium">
                  <>
                    Arc. Vincent Ezenduka
                    <br />
                  </>
                </span>
                <span className="text-deep_orange-400 font-criteriacf text-xs font-normal">
                  Architect
                </span>
              </Text>
              <Text
                className="md:ml-[0] ml-[269px] text-black-900 text-center text-sm"
                size="txtCriteriaCFMedium14"
              >
                <span className="text-black-900 font-criteriacf font-medium">
                  <>
                    Mrs. Blessing David
                    <br />
                  </>
                </span>
                <span className="text-deep_orange-400 font-criteriacf text-xs font-normal">
                  <>
                    Principal Partner / <br />
                    Business Developer
                  </>
                </span>
              </Text>
            </div>
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

export default AboutPage;
