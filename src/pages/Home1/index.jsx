import React from "react";

import { ToastContainer, toast } from "react-toastify";

import { registerDeviceAuth } from "service/api";

import { Button, Img, Input, Text, TextArea } from "components";
import Footer from "components/Footer";
import HeaderBar1 from "components/HeaderBar1";

import "react-toastify/dist/ReactToastify.css";

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
        <HeaderBar1 className="flex sm:flex-col flex-row sm:gap-5 items-center justify-center md:px-5 w-full" />
        <div className="md:h-[1072px] h-[1163px] md:px-5 relative w-full">
          <Img
            className="absolute h-[1072px] inset-x-[0] mx-auto object-cover top-[0] w-full"
            src="images/img_homebg1.png"
            alt="homebgOne"
          />
          <div className="absolute flex flex-col md:gap-10 gap-[89px] items-end justify-end p-[51px] md:px-10 sm:px-5 right-[0] top-[7%] w-[51%]">
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
          <div className="absolute bg-deep_orange-400 bottom-[0] flex flex-col inset-x-[0] items-center justify-end mx-auto p-[42px] md:px-10 sm:px-5 w-[79%]">
            <div className="flex flex-col gap-2.5 items-start justify-start w-[78%] md:w-full">
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-center text-white-A700 w-[95%] sm:w-full"
                size="txtCriteriaCFRegular40"
              >
                <span className="text-white-A700 font-criteriacf font-normal">
                  High quality{" "}
                </span>
                <span className="text-white-A700 font-criteriacf font-bold">
                  construction
                </span>
                <span className="text-white-A700 font-criteriacf font-normal">
                  {" "}
                  that fits your requirements and budget.
                </span>
              </Text>
              <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                <Text
                  className="sm:mt-0 mt-2 md:text-5xl text-[64px] text-center text-white-A700"
                  size="txtCriteriaCFRegular64"
                >
                  <span className="text-white-A700 font-criteriacf font-bold">
                    10
                  </span>
                  <span className="text-white-A700 font-criteriacf font-normal">
                    <>
                      +<br />
                    </>
                  </span>
                  <span className="text-white-A700 font-criteriacf text-base font-bold">
                    Experience
                  </span>
                </Text>
                <Text
                  className="sm:ml-[0] ml-[183px] sm:mt-0 mt-1 md:text-5xl text-[64px] text-center text-white-A700"
                  size="txtCriteriaCFRegular64"
                >
                  <span className="text-white-A700 font-criteriacf font-bold">
                    15
                  </span>
                  <span className="text-white-A700 font-criteriacf font-normal">
                    <>
                      +<br />
                    </>
                  </span>
                  <span className="text-white-A700 font-criteriacf text-base font-bold">
                    Projects Completed{" "}
                  </span>
                </Text>
                <Text
                  className="sm:ml-[0] ml-[155px] md:text-5xl text-[64px] text-center text-white-A700"
                  size="txtCriteriaCFRegular64"
                >
                  <span className="text-white-A700 font-criteriacf font-bold">
                    10
                  </span>
                  <span className="text-white-A700 font-criteriacf font-normal">
                    <>
                      +<br />
                    </>
                  </span>
                  <span className="text-white-A700 font-criteriacf text-base font-normal">
                    Experience
                  </span>
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start max-w-[1147px] mx-auto p-[29px] md:px-5 w-full">
          <div className="flex flex-col gap-[33px] items-center justify-start mb-4 w-[85%] md:w-full">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-gray-400"
              size="txtCriteriaCFLight32"
            >
              Top Clientele
            </Text>
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
              <Img
                className="h-[116px] md:h-auto object-cover"
                src="images/img_cbn1.png"
                alt="cbnOne"
              />
              <Img
                className="h-[65px] md:h-auto object-cover"
                src="images/img_centerpoint.png"
                alt="centerpoint"
              />
              <Img
                className="h-[105px] md:h-auto object-cover"
                src="images/img_house20201.png"
                alt="house20201"
              />
              <Img
                className="h-[74px] md:h-auto object-cover"
                src="images/img_demes.png"
                alt="demes"
              />
              <Img
                className="h-[130px] md:h-auto object-cover w-[130px]"
                src="images/img_solidarity1.png"
                alt="solidarityOne"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start p-[55px] md:px-10 sm:px-5 w-full">
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
                name="group208"
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
                name="group206"
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
        <div className="flex flex-col items-center justify-start p-10 sm:px-5 w-full">
          <div className="flex flex-col items-center justify-start max-w-[1148px] mb-[3px] mx-auto md:px-5 w-full">
            <Text
              className="text-5xl sm:text-[38px] md:text-[44px] text-gray-400"
              size="txtCriteriaCFMedium48"
            >
              Featured Projects
            </Text>
            <Text
              className="leading-[34.00px] mt-[34px] text-2xl md:text-[22px] text-black-900 text-center sm:text-xl"
              size="txtCriteriaCFLight24"
            >
              <>
                We provide superior construction services for projects of all
                types <br />
                and with dedicated excellence for every project we take on.{" "}
              </>
            </Text>
            <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-[38px] w-full">
              <Img
                className="h-[348px] md:h-auto object-cover"
                src="images/img_pr1.png"
                alt="pr1"
              />
              <Img
                className="h-[348px] md:h-auto object-cover"
                src="images/img_pr3.png"
                alt="pr3"
              />
              <Img
                className="h-[348px] md:h-auto object-cover"
                src="images/img_pr2.png"
                alt="pr2"
              />
            </div>
            <Text
              className="mt-[19px] text-deep_orange-400 text-xl"
              size="txtCriteriaCFMedium20"
            >
              Explore all projects
            </Text>
          </div>
        </div>
        <div className="bg-deep_orange-400 flex flex-col items-end justify-start md:pl-10 sm:pl-5 pl-[155px] w-full">
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
              <Button
                className="common-pointer cursor-pointer font-bold leading-[normal] min-w-[250px] mt-[55px] md:text-3xl sm:text-[28px] text-[32px] text-center"
                onClick={() => {
                  submit();
                }}
              >
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
      <ToastContainer />
    </>
  );
};

export default Home1Page;
