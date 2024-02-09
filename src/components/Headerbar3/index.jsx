import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Line, Text } from "components";

const Headerbar3 = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <header className={props.className}>
        <Img
          className="common-pointer h-[98px] sm:h-auto mb-[15px] md:ml-[0] ml-[155px] md:mt-0 mt-[58px] object-cover w-[11%] md:w-full"
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
        <div className="flex flex-col gap-[9px] items-center justify-start mb-[33px] md:ml-[0] ml-[61px] md:mt-0 mt-[97px] w-[7%] md:w-full">
          <Text
            className="text-black-900 text-xl"
            size="txtCriteriaCFRegular20"
          >
            Projects{" "}
          </Text>
          <Line className="bg-deep_orange-400 h-1.5 w-full" />
        </div>
        <Text
          className="common-pointer mb-[51px] md:ml-[0] ml-[63px] mr-[164px] md:mt-0 mt-[94px] text-black-900 text-xl"
          size="txtCriteriaCFRegular20"
          onClick={() => navigate("/contact")}
        >
          Contact{" "}
        </Text>
      </header>
    </>
  );
};

Headerbar3.defaultProps = {};

export default Headerbar3;
