import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Text } from "components";

const Footer = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col items-center justify-center mb-64 ml-[155px] mr-[179px] mt-[37px] w-[78%]">
          <div className="flex flex-col gap-10 items-left justify-between w-full">
            <div className="flex flex-row items-start justify-start w-full">
              <Img
                className="h-[135px] ml-1 md:ml-[0]"
                src="images/img_logo1.svg"
                alt="logoOne"
              />
            </div>
            <div className="flex flex-row gap-16 justify-start sm:flex-col w-full">
              <div className="w-1/2 sm:w-full">
                <Text
                className="leading-[26.00px] text-black-900 text-l text-justify"
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
              <div className="flex flex-col items-left justify-start w-1/3 sm:w-full">
                <Text
                  className="text-l text-deep_orange-400 font-bold"
                  size="txtPlainBoldRegular32"
                >
                  Contact Info
                </Text>
                <Text
                  className="text-black-900 text-l pt-5"
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
              </div>
              <div className="flex flex-col items-left justify-start w-1/3 sm:w-full">
                <div>
                  <Text
                  className="text-l text-deep_orange-400 font-bold"
                  size="txtPlainBoldRegular32"
                >
                  Quick Links
                </Text>
                </div>
                <div className="pt-5">
                  <ul className="flex flex-col gap-2 items-start justify-start common-column-list">
                  <li>
                    <Text
                      className="common-pointer text-black-900 text-l"
                      size="txtInterRegular20"
                      onClick={() => navigate("/")}
                    >
                      Home
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="text-black-900 text-l"
                      size="txtInterRegular20"
                    >
                      About
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="common-pointer text-black-900 text-l"
                      size="txtInterRegular20"
                      onClick={() => navigate("/services")}
                    >
                      Service
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="common-pointer text-black-900 text-l"
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
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
