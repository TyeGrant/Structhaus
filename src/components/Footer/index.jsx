import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Text } from "components";

const Footer = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col items-center justify-center mb-64 ml-[155px] mr-[179px] mt-[37px] w-[78%]">
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
            <div className="flex md:flex-1 flex-col gap-8 items-start justify-start w-[39%] md:w-full">
              <Img
                className="h-[135px] ml-1 md:ml-[0]"
                src="images/img_logo1.svg"
                alt="logoOne"
              />
              <Text
                className="leading-[26.00px] text-black-900 text-xl"
                size="txtPlainLightRegular20"
              >
                <>
                  As one of the leading Nigeria company we offer end-to-end
                  services to help make your concept a reality. Our company
                  offer project completion standards that are quick, economical,
                  and more convenient for almost any construction project.
                  <br />
                  <br />
                  Structhaus Nigeria Limited construction project delivery
                  method that gives you one point of contact throughout the
                  entire process. Structhaus Nigeria Limited offers faster
                  completion, lower costs, and higher quality standards.
                </>
              </Text>
            </div>
            <div className="flex md:flex-1 flex-col gap-[19px] justify-start w-[52%] md:w-full">
              <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-deep_orange-400"
                  size="txtPlainBoldRegular32"
                >
                  Contact Info
                </Text>
                <Text
                  className="capitalize md:text-3xl sm:text-[28px] text-[32px] text-deep_orange-400"
                  size="txtPlainBoldRegular32"
                >
                  Quick Links
                </Text>
              </div>
              <div className="flex sm:flex-col flex-row gap-[52px] items-start justify-start ml-1.5 md:ml-[0] w-[83%] md:w-full">
                <Text
                  className="text-black-900 text-xl"
                  size="txtInterRegular20"
                >
                  <>
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
                <ul className="flex flex-col gap-[21px] items-start justify-start sm:mt-0 mt-[7px] md:w-full common-column-list">
                  <li>
                    <Text
                      className="common-pointer text-black-900 text-xl"
                      size="txtInterRegular20"
                      onClick={() => navigate("/")}
                    >
                      Home
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="text-black-900 text-xl"
                      size="txtInterRegular20"
                    >
                      About
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="common-pointer text-black-900 text-xl"
                      size="txtInterRegular20"
                      onClick={() => navigate("/services")}
                    >
                      Service
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="common-pointer text-black-900 text-xl"
                      size="txtInterRegular20"
                      onClick={() => navigate("/projects")}
                    >
                      Projects
                    </Text>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
