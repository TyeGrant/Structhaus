import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Text } from "components";

const HeaderBar1 = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <header className={props.className}>
        <Img
          className="h-[98px] md:h-auto mb-[15px] sm:ml-[0] ml-[155px] sm:mt-0 mt-[58px] object-cover w-[11%] sm:w-full"
          src="images/img_struchauslog1.png"
          alt="struchauslogOne"
        />
        <Text
          className="common-pointer mb-[49px] sm:ml-[0] ml-[465px] sm:mt-0 mt-24 text-black-900 text-xl"
          size="txtCriteriaCFRegular20"
          onClick={() => navigate("/about")}
        >
          About{" "}
        </Text>
        <Text
          className="common-pointer mb-[49px] sm:ml-[0] ml-[78px] sm:mt-0 mt-24 text-black-900 text-xl"
          size="txtCriteriaCFRegular20"
          onClick={() => navigate("/services")}
        >
          Service
        </Text>
        <Text
          className="common-pointer mb-12 sm:ml-[0] ml-[61px] sm:mt-0 mt-[97px] text-black-900 text-xl"
          size="txtCriteriaCFRegular20"
          onClick={() => navigate("/projects")}
        >
          Projects{" "}
        </Text>
        <Text
          className="common-pointer mb-[51px] sm:ml-[0] ml-[63px] mr-[164px] sm:mt-0 mt-[94px] text-black-900 text-xl"
          size="txtCriteriaCFRegular20"
          onClick={() => navigate("/contact")}
        >
          Contact{" "}
        </Text>
      </header>
    </>
  );
};

HeaderBar1.defaultProps = {};

export default HeaderBar1;
