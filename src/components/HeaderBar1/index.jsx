import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Text } from "components";

const HeaderBar1 = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <header className={props.className}>
        <div className={`header-wrapper items-center w-3/4 sm:w-11/12 ${props.headerWrapperClassName}`}>
          <div  className="mt-4 mb-4 w-full">
          <div className="flex">
          <Img
          className="object-cover w-[30%] sm:w-[50%] sm:m-auto cursor-pointer"
          src="images/img_struchauslog1.png"
          alt="struchauslogOne"
          onClick={() => navigate('/')}
        />
        </div>
        </div>
        <div className="mt-4 mb-4 w-full">
          <div className="flex flex-row flex-wrap justify-end sm:justify-center">
          <Text
          className="common-pointer text-black-900 text-base p-2 hover:text-slate-50 hover:bg-deep_orange-400"
          size="txtCriteriaCFRegular20" as="button"
          onClick={(e) => {
            e.target.classList.add('active:bg-deep_orange-400')
            return navigate("/about")
          }}
        >
          About{" "}
        </Text>
        <Text
          className="common-pointer text-black-900 text-base p-2 hover:bg-deep_orange-400 hover:text-slate-50"
          size="txtCriteriaCFRegular20" as="button"
          onClick={(e) => {
             e.target.classList.add('active:bg-deep_orange-400')
            return navigate("/services")
          }}
        >
          Service
        </Text>
        <Text
          className="common-pointer text-black-900 text-base p-2 hover:bg-deep_orange-400 hover:text-slate-50" as="button"
          size="txtCriteriaCFRegular20"
          onClick={(e) => {
             e.target.classList.add('active:bg-deep_orange-400')
            return navigate("/projects")
          }}
        >
          Projects{" "}
        </Text>
        <Text
          className="common-pointer text-black-900 text-base p-2 hover:bg-deep_orange-400 hover:text-slate-50" as="button"
          size="txtCriteriaCFRegular20"
          onClick={(e) => {
             e.target.classList.add('active:bg-deep_orange-400')
            return navigate("/contact")}
          }
        >
          Contact{" "}
        </Text>
        </div>
        </div>
        </div>
      </header>
    </>
  );
};

HeaderBar1.defaultProps = {};

export default HeaderBar1;
