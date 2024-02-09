import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, Text, TextArea } from "components";
import Footer from "components/Footer";

const ContactPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-criteriacf items-center justify-start mx-auto w-full">
        <header className="flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full">
          <Img
            className="common-pointer md:flex-1 h-[98px] sm:h-auto mb-[15px] md:ml-[0] ml-[155px] md:mt-0 mt-[58px] object-cover w-[11%] md:w-full"
            src="images/img_struchauslog1.png"
            alt="struchauslogOne"
            onClick={() => navigate("/")}
          />
          <Text
            className="common-pointer mb-[49px] md:ml-[0] ml-[465px] md:mt-0 mt-24 text-black-900 text-xl"
            size="txtCriteriaCFRegular20"
            onClick={() => navigate("/about")}
          >
            About{" "}
          </Text>
          <Text
            className="common-pointer mb-[49px] md:ml-[0] ml-[78px] md:mt-0 mt-24 text-black-900 text-xl"
            size="txtCriteriaCFRegular20"
            onClick={() => navigate("/services")}
          >
            Service
          </Text>
          <Text
            className="common-pointer mb-12 md:ml-[0] ml-[61px] md:mt-0 mt-[97px] text-black-900 text-xl"
            size="txtCriteriaCFRegular20"
            onClick={() => navigate("/projects")}
          >
            Projects{" "}
          </Text>
          <div className="flex md:flex-1 flex-col gap-3 items-center justify-start mb-[33px] md:ml-[0] ml-[60px] mr-40 md:mt-0 mt-[94px] w-[7%] md:w-full">
            <Text
              className="text-black-900 text-xl"
              size="txtCriteriaCFRegular20"
            >
              Contact{" "}
            </Text>
            <Line className="bg-deep_orange-400 h-1.5 w-full" />
          </div>
        </header>
        <div className="flex flex-col md:px-5 relative w-full">
          <div className="md:h-[650px] h-[869px] mx-auto w-full">
            <Img
              className="absolute h-[650px] inset-x-[0] mx-auto object-cover top-[0] w-full"
              src="images/img_homebg1_650x1458.png"
              alt="homebgOne"
            />
            <div className="absolute bottom-[0] md:h-[472px] h-[782px] p-[70px] md:px-10 sm:px-5 right-[0] w-[51%] md:w-full">
              <Img
                className="h-[472px] ml-6"
                src="images/img_group23.svg"
                alt="layerx00201"
              />
              <Text
                className="absolute left-1/4 sm:text-[40px] md:text-[46px] text-[50px] text-white-A700 top-[27%]"
                size="txtCriteriaCFBold50"
              >
                Contact Us
              </Text>
            </div>
          </div>
          <div className="bg-white-A700_01 border-4 border-deep_orange-400 border-solid flex flex-col gap-[23px] items-center justify-center ml-[167px] mt-[-147px] p-[31px] sm:px-5 z-[1]">
            <Text
              className="mt-[118px] text-2xl md:text-[22px] text-red-700 sm:text-xl"
              size="txtCriteriaCFExtraBold24"
            >
              Email Address
            </Text>
            <Text
              className="mb-[66px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
              size="txtCriteriaCFRegular24"
            >
              info@structhaus.com.ng
            </Text>
          </div>
          <div className="bg-white-A700_01 border-4 border-deep_orange-400 border-solid flex flex-col gap-[21px] items-center justify-center mt-[-147px] mx-auto p-[67px] md:px-10 sm:px-5 z-[1]">
            <Text
              className="mt-[82px] text-2xl md:text-[22px] text-red-700 sm:text-xl"
              size="txtCriteriaCFExtraBold24"
            >
              Phone Number
            </Text>
            <Text
              className="mb-[31px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
              size="txtCriteriaCFRegular24"
            >
              +234 810 991 3968
            </Text>
          </div>
          <div className="bg-white-A700_01 border-4 border-deep_orange-400 border-solid flex flex-col gap-2 items-center justify-end ml-auto mr-[156px] mt-[-147px] p-11 md:px-10 sm:px-5 z-[1]">
            <Text
              className="mt-[104px] text-2xl md:text-[22px] text-red-700 sm:text-xl"
              size="txtCriteriaCFExtraBold24"
            >
              Office Address
            </Text>
            <Text
              className="text-black-900 text-center text-xl"
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
        <div className="bg-deep_orange-400 flex flex-col items-end justify-start mt-[72px] md:pl-10 pl-40 sm:pl-5 w-full">
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
                className="mb-[266px] mt-[185px] text-white-A700 text-xl"
                size="txtCriteriaCFMedium20WhiteA700"
              >
                <span className="md:text-[38px] sm:text-4xl text-white-A700 font-criteriacf text-left text-[40px] font-medium">
                  <>
                    CONTACT
                    <br />
                  </>
                </span>
                <span className="text-white-A700 font-criteriacf text-left font-medium">
                  <>
                    <br />
                    Suite 16B 2nd Floor, <br />
                    SAY Plaza Plot 23, <br />
                    Ekukinam Street, Utako, <br />
                    FCT - Abuja.
                    <br />
                  </>
                </span>
                <span className="text-white-A700 font-criteriacf text-left font-normal">
                  <>
                    <br />
                    +234 810 991 3968
                    <br />
                  </>
                </span>
                <span className="text-white-A700 font-criteriacf text-left font-medium">
                  <>
                    <br />
                    structhausconstruction
                    <br />
                    @gmail.com
                  </>
                </span>
              </Text>
            </div>
          </div>
        </div>
        <Footer className="bg-yellow-50 flex font-plain items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default ContactPage;
