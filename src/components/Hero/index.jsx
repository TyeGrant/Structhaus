import React from 'react'
import { Button, Img, Text } from "../index";

import { isHomePage } from 'utils'

export const Hero = (props) => {
    return (
      
        <div className={`md:px-5 relative w-full ` + props.heroWrapperClassName}>
          <Img
            className={`absolute object-cover top-[0] w-full ` + props.heroImgBgClassName}
            src={props.bgImg}
            alt="homebgOne"
          />
          <div className="container">
            <div className="row">
                <div className="col-1 relative z-50">
            <div className="w-3/4 pt-20 m-auto flex flex-col justify-end items-end">
                <div
              className="bg-cover bg-no-repeat sm:w-11/12"
              style={{ backgroundImage: "url('images/img_group23.svg')" }}
            >
              <Text
                className="mb-[127px] p-10 mt-2 sm:text-xl md:text-2xl text-5xl text-white-A700"
                size="txtCriteriaCFBold50"
              >
                <>
                {props.heroText1}
                </>
              </Text>
            </div><br />
            <div>
<Button className={`cursor-pointer font-bold leading-[normal] text-2xl text-center sm:text-sm ` + props.heroBtnClassName}>
              Get in touch
            </Button>
            </div>
            </div>
          </div>
          </div>
          <div className="row">
           <div className="col-1">
            { HomePage ? (<HeroPart3 />) : "" }
           </div>
            </div>
        </div>
     </div>
    )
}

const HomePage = isHomePage('/')

const HeroPart3 = (props) => {
    
    return (
        <div className={`absolute bg-deep_orange-400 bottom-[0] flex flex-col inset-x-[0] items-center justify-end mx-auto sm:mt-20 sm:relative p-[42px] md:px-10 sm:px-5 w-[79%] ` + props.heroPart3Class}>
            <div className="flex flex-col gap-2.5 items-start justify-start w-[78%] md:w-full">
              <Text
                className="sm:text-xl md:text-3xl text-4xl text-center text-white-A700 w-[95%] sm:w-full"
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
              <div className="flex gap-32 sm:flex-col pt-5 pb-5 sm:items-center flex-row sm:gap-8 items-start justify-center w-full">
                <Text
                  className="sm:mt-0 mt-2 text-center text-white-A700 leading-3 sm:text-xl"
                  size="txtCriteriaCFRegular64"
                >
                  <span className="text-white-A700 font-criteriacf font-bold">
                    10+
                  </span><br className="p-0" />
                  <span className="text-white-A700 font-criteriacf text-base text-base font-bold">
                    Experience
                  </span>
                </Text>
                <Text
                  className="sm:mt-0 mt-2 text-center text-white-A700 leading-3 sm:text-xl"
                  size="txtCriteriaCFRegular64"
                >
                  <span className="text-white-A700 font-criteriacf font-bold">
                    10+
                  </span><br className="p-0" />
                  <span className="text-white-A700 font-criteriacf text-base text-base font-bold">
                    Project Completed
                  </span>
                </Text>
                <Text
                  className="sm:mt-0 mt-2 text-center text-white-A700 leading-3 sm:text-xl"
                  size="txtCriteriaCFRegular64"
                >
                  <span className="text-white-A700 font-criteriacf font-bold">
                    10+
                  </span><br className="p-0" />
                  <span className="text-white-A700 font-criteriacf text-base font-bold">
                    Experience
                  </span>
                </Text>
              </div>
            </div>
          </div>
    )
}