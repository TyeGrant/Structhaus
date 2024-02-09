import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Line, Text } from "components";

const Headerbar2 = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <header className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mb-[15px] md:ml-[0] ml-[155px] mr-[164px] mt-[58px] w-[79%]">
          <div className="header-row ">
            <Img
              className="common-pointer h-[98px] md:h-auto object-cover"
              src="images/img_struchauslog1.png"
              alt="struchauslogOne"
              onClick={() => navigate("/")}
            />
            <div className="mobile-menu">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="flex flex-col gap-2 sm:hidden items-start justify-start">
            <ul className="flex flex-row sm:hidden items-start justify-between w-full common-row-list">
              <li>
                <a href="javascript:" className="text-black-900 text-xl">
                  <Text size="txtCriteriaCFRegular20">About </Text>
                </a>
              </li>
              <li>
                <a className="text-black-900 text-xl">
                  <Text
                    className="common-pointer"
                    size="txtCriteriaCFRegular20"
                    onClick={() => navigate("/services")}
                  >
                    Service
                  </Text>
                </a>
              </li>
              <li>
                <a className="mt-[3px] text-black-900 text-xl">
                  <Text
                    className="common-pointer"
                    size="txtCriteriaCFRegular20"
                    onClick={() => navigate("/projects")}
                  >
                    Projects{" "}
                  </Text>
                </a>
              </li>
              <li>
                <a className="mb-[3px] text-black-900 text-xl">
                  <Text
                    className="common-pointer"
                    size="txtCriteriaCFRegular20"
                    onClick={() => navigate("/contact")}
                  >
                    Contact{" "}
                  </Text>
                </a>
              </li>
            </ul>
            <Line className="bg-deep_orange-400 h-1.5 w-[13%]" />
          </div>
        </div>
      </header>
    </>
  );
};

Headerbar2.defaultProps = {};

export default Headerbar2;
