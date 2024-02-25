import React from "react";

import { Img, Text, Hero, ContactForm } from "components";
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

const AboutPage = () => {
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
        <div className="flex flex-col items-center justify-end p-9 sm:px-5 w-full">
          <div className="flex flex-col md:gap-10 gap-[90px] items-end justify-start max-w-[1147px] mt-5 mx-auto md:px-5 w-3/4 sm:w-11/12">
            <div>
              <Text
              className="leading-8 text-lg text-black-900 text-justify"
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
            </div>
            <div>
              <div className="flex flex-col md:gap-10 gap-[88px] items-center justify-start w-full">
              <div className="flex sm:flex-col flex-row md:gap-10 gap-[92px] items-start justify-start w-full">
                <Text
                  className="md:text-4xl text-4xl text-deep_orange-400"
                  size="txtCriteriaCFRegular64Deeporange400"
                >
                  Our Vison
                </Text>
                <Text
                  className="sm:flex-1 leading-[32.00px] sm:mt-0 mt-[15px] text-lg text-justify font-bold text-black-900 w-[63%] sm:w-full"
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
              <div className="sm:h-[332px] md:h-[556px] h-[453px] relative w-full">
                <Img
                  className="absolute h-[416px] sm:h-[280px] left-[0] object-cover top-[0] w-[47%] sm:hidden"
                  src="images/img_bg2.png"
                  alt="bg2"
                />
                <div className="sm:relative absolute bg-yellow-50 sm:text-5 sm:top-5 bottom-[0] flex flex-col gap-4 w-3/4 sm:w-full justify-end p-5 right-[0]">
                  <Text
                    className="p-3 font-bold text-4xl text-deep_orange-400"
                    size="txtCriteriaCFRegular64Deeporange400"
                  >
                    Our Mission
                  </Text>
                  <Text
                    className="p-3 text-justify text-lg text-black-900 w-[98%] sm:w-full"
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
        </div>
        <div className="flex flex-col items-center sm:relative sm:mt-[50rem] justify-start p-[21px] sm:px-auto w-full">
          <div className="flex flex-col items-center sm:items-start justify-start max-w-[1149px] mb-[11px] mx-auto md:px-5 w-3/4 sm:w-11/12">
            <Text
              className="sm:text-3xl md:text-[46px] text-4xl text-black-900 text-center sm:text-left"
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
              className="mt-7 text-lg text-black-900 sm:text-justify text-center"
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
           <div className="flex flex-row gap-3 justify-center items-center sm:flex-col">
             <div className="flex sm:flex-col gap-3 flex-row items-center justify-between mt-[51px] w-full">
              <div className="flex flex-col gap-3 items-center">
                <div>
                  <Img
                className="h-[325px] md:h-auto object-cover"
                src="images/img_unsureyoungma.png"
                alt="unsureyoungma"
              />
                </div>
              <div>
                <Text
                className="text-black-900 text-center text-sm"
                size="txtCriteriaCFMedium14"
              >
                <p className="text-black-900 font-criteriacf font-medium">
                  <>
                    Engr. Hyacinth Onyinye Benyeogor <br />
                  </>
                </p>
                <p className="text-deep_orange-400 font-criteriacf text-xs font-normal">
                  Managing Director / Lead Engineer{" "}
                </p>
                </Text>
              </div>
              </div>
            </div>
            <div className="flex sm:flex-col gap-3 flex-row items-center justify-between mt-[51px] w-full">
              <div className="flex flex-col gap-3 items-center">
              <div>
                <Img
                className="h-[325px] md:h-auto object-cover"
                src="images/img_mediumshotwom.png"
                alt="mediumshotwom"
              />
              </div>
              <div>
                <Text
                className="text-black-900 text-center text-sm"
                size="txtCriteriaCFMedium14"
              >
                <p className="text-black-900 font-criteriacf font-medium">
                  <>
                    Arc. Vincent Ezenduka <br />
                  </>
                </p>
                <p className="text-deep_orange-400 font-criteriacf text-xs font-normal">
                Architect{" "}
                </p>
                </Text>
              </div>
              </div>
            </div>
            <div className="flex sm:flex-col gap-3 flex-row items-center justify-between mt-[51px] w-full">
              <div className="flex flex-col gap-3 items-center">
              <div>
                <Img
                className="h-[325px] md:h-auto object-cover"
                src="images/img_mediumshotwom.png"
                alt="mediumshotwom"
              />
              </div>
              <div>
                <Text
                className="text-black-900 text-center text-sm"
                size="txtCriteriaCFMedium14"
              >
                <p className="text-black-900 font-criteriacf font-medium">
                  <>
                  Mrs. Blessing David<br />
                  </>
                </p>
                <p className="text-deep_orange-400 font-criteriacf text-xs font-normal">
                    Business Developer
                </p>
                </Text>
              </div>
              </div>
            </div>
           </div>
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

export default AboutPage;
