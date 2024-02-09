import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, Text, TextArea } from "components";
import Footer from "components/Footer";

const ServicesPage = () => {
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
          <div className="flex md:flex-1 flex-col gap-[7px] items-center justify-start mb-9 md:ml-[0] ml-[78px] md:mt-0 mt-24 w-[6%] md:w-full">
            <Text
              className="text-black-900 text-xl"
              size="txtCriteriaCFRegular20"
            >
              Service
            </Text>
            <Line className="bg-deep_orange-400 h-1.5 w-full" />
          </div>
          <Text
            className="common-pointer mb-12 md:ml-[0] ml-[61px] md:mt-0 mt-[97px] text-black-900 text-xl"
            size="txtCriteriaCFRegular20"
            onClick={() => navigate("/projects")}
          >
            Projects{" "}
          </Text>
          <Text
            className="common-pointer mb-[51px] md:ml-[0] ml-[63px] mr-[164px] md:mt-0 mt-[94px] text-black-900 text-xl"
            size="txtCriteriaCFRegular20"
            onClick={() => navigate("/contact")}
          >
            Contact{" "}
          </Text>
        </header>
        <div className="h-[879px] md:px-5 relative w-full">
          <Img
            className="h-[879px] m-auto object-cover w-full"
            src="images/img_homebg1_1.png"
            alt="homebgOne"
          />
          <div className="absolute bottom-[1%] flex flex-col md:gap-10 gap-[89px] items-end justify-end p-[51px] md:px-10 sm:px-5 right-[0] w-[51%]">
            <div
              className="bg-cover bg-no-repeat flex flex-col h-[472px] items-center justify-start mr-[105px] mt-[19px] p-9 sm:px-5"
              style={{ backgroundImage: "url('images/img_group23.svg')" }}
            >
              <Text
                className="mb-[155px] mt-10 sm:text-[40px] md:text-[46px] text-[50px] text-white-A700 w-full"
                size="txtCriteriaCFBold50"
              >
                A better vision to premium housing & living
              </Text>
            </div>
            <Button className="cursor-pointer font-bold leading-[normal] min-w-[250px] mr-[105px] md:text-3xl sm:text-[28px] text-[32px] text-center">
              Get in touch
            </Button>
          </div>
        </div>
        <div className="bg-yellow-50 flex flex-col items-center justify-start p-[55px] md:px-10 sm:px-5 w-full">
          <div className="flex flex-col items-center justify-start max-w-[1149px] mb-3.5 mx-auto w-full">
            <div className="flex md:flex-col flex-row gap-[34px] items-start justify-between w-full">
              <div className="flex flex-col md:gap-10 gap-[62px] items-start justify-start">
                <Text
                  className="md:ml-[0] ml-[5px] text-5xl sm:text-[38px] md:text-[44px] text-red-700"
                  size="txtCriteriaCFBold48"
                >
                  <>
                    Why you should <br />
                    work with us
                  </>
                </Text>
                <Text
                  className="leading-[40.00px] text-3xl sm:text-[26px] md:text-[28px] text-black-900 w-full"
                  size="txtCriteriaCFLight30"
                >
                  We offer a high level of expertise and attention to detail.
                  Our team is dedicated to your satisfaction, you can rest easy
                  knowing your project is in the right hands, because we are
                  involved from the beginning in design build projects, you reap
                  many benefits, including:
                </Text>
              </div>
              <Img
                className="h-[529px] md:h-auto object-cover"
                src="images/img_bg11.png"
                alt="bgEleven"
              />
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[52px] w-full">
              <Button
                className="cursor-pointer font-semibold min-w-[260px] text-2xl md:text-[22px] text-center sm:text-xl"
                size="xs"
              >
                <>Value Engineering</>
              </Button>
              <Text
                className="bg-deep_orange-400 h-[83px] justify-center pl-[22px] pr-8 sm:px-5 py-[26px] text-2xl md:text-[22px] text-white-A700 sm:text-xl w-[454px]"
                size="txtCriteriaCFDemiBold24"
              >
                Renovations and Interior Design
              </Text>
              <Input
                name="group198"
                placeholder="Real Estate Development"
                className="font-semibold md:text-[22px] p-0 placeholder:text-white-A700 sm:text-xl text-2xl text-left w-full"
                wrapClassName="md:flex-1 md:w-full"
                color="red_700"
                size="sm"
              ></Input>
            </div>
            <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-[45px] w-full">
              <Button
                className="cursor-pointer font-semibold min-w-[488px] sm:min-w-full text-2xl md:text-[22px] text-center sm:text-xl"
                color="deep_orange_400"
                size="xs"
              >
                <>
                  Project Management & Supervision
                  <br />
                </>
              </Button>
              <Button
                className="cursor-pointer font-semibold min-w-[313px] text-2xl md:text-[22px] text-center sm:text-xl"
                size="xs"
              >
                <>Budget Management</>
              </Button>
              <Button
                className="cursor-pointer font-semibold min-w-[271px] text-2xl md:text-[22px] text-center sm:text-xl"
                color="deep_orange_400"
                size="xs"
              >
                <>Quality Assurance </>
              </Button>
            </div>
            <div className="flex md:flex-col flex-row md:gap-[41px] items-center justify-between mt-[45px] w-full">
              <Input
                name="group196"
                placeholder="Contract Management
"
                className="font-semibold md:text-[22px] p-0 placeholder:text-white-A700 sm:text-xl text-2xl text-left w-full"
                wrapClassName="md:flex-1 md:w-full"
                color="red_700"
                size="xs"
              ></Input>
              <Button
                className="cursor-pointer font-semibold min-w-[334px] text-2xl md:text-[22px] text-center sm:text-xl"
                color="deep_orange_400"
                size="xs"
              >
                <>
                  Schedule Management
                  <br />
                </>
              </Button>
              <Text
                className="bg-red-700 h-[83px] justify-center pb-[29px] pl-[27px] pr-[35px] pt-[23px] sm:px-5 text-2xl md:text-[22px] text-white-A700 sm:text-xl w-[397px]"
                size="txtCriteriaCFDemiBold24"
              >
                <>Lower Cost Construction</>
              </Text>
            </div>
          </div>
        </div>
        <div className="bg-white-A700 flex flex-col items-start justify-start p-[72px] md:px-10 sm:px-5 w-full">
          <div className="flex flex-col items-center justify-start mb-7 ml-28 md:ml-[0] w-[79%] md:w-full">
            <Text
              className="text-5xl sm:text-[38px] md:text-[44px] text-red-700"
              size="txtCriteriaCFBold48"
            >
              Some of our top Clients
            </Text>
            <div className="flex sm:flex-col flex-row md:gap-10 items-end justify-between mt-[60px] w-full">
              <Img
                className="h-[220px] md:h-auto mb-11 object-cover"
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
              <div className="flex md:flex-col flex-row md:gap-[50px] items-center justify-between mt-[23px] w-full">
                <Input
                  name="frameThree"
                  placeholder="Phone Number"
                  className="leading-[normal] p-0 placeholder:text-black-900 text-left text-xl w-full"
                  wrapClassName="md:flex-1 md:w-full"
                  type="number"
                ></Input>
                <Text
                  className="bg-white-A700 h-[88px] justify-center pl-[29px] pr-[35px] sm:px-5 py-[31px] text-black-900 text-xl w-[347px]"
                  size="txtCriteriaCFRegular20"
                >
                  Location
                </Text>
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

export default ServicesPage;
