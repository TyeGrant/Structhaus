import React from 'react'
import { Img, Text} from "components";

export const About = () => {
    return (
        <div className="flex flex-col items-center justify-start p-[55px] md:px-10 sm:px-5 w-full">
          <div className="flex flex-col items-center justify-start max-w-[1149px] mb-3.5 mx-auto w-full">
            <div className="flex md:flex-col flex-row gap-[34px] items-start justify-between w-full">
              <div className="flex-1">
                <div className="flex flex-col md:gap-10 gap-5 items-start justify-start">
                <Text
                  className="md:ml-[0] ml-[5px] text-5xl mb-5 sm:text-4xl text-red-700"
                  size="txtCriteriaCFBold48"
                >
                  <>
                    Why you should <br />
                    work with us
                  </>
                </Text>
                <Text
                  className="text-justify leading-10 text-3xl sm:text-xl text-black-900 w-full"
                  size="txtCriteriaCFLight30"
                >
                  We offer a high level of expertise and attention to detail.
                  Our team is dedicated to your satisfaction, you can rest easy
                  knowing your project is in the right hands, because we are
                  involved from the beginning in design build projects, you reap
                  many benefits, including:
                </Text>
              </div>
              </div>
              <div className="flex-1">
                <Img
                className="w-auto h-auto md:h-auto sm:hidden object-cover"
                src="images/img_bg11.png"
                alt="bgEleven"
              />
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-2 md:gap-0.5 sm:mt-1 items-center justify-between mt-[52px] w-full">
              <div
                className="cursor-pointer font-semibold flex-1 text-xl sm:text-base text-slate-50 text-center bg-red-700 p-5"
              >
                <>Value Engineering</>
              </div>
              <div
                className="cursor-pointer font-semibold flex-2 text-xl text-center sm:text-base bg-deep_orange-400 p-5 text-slate-50"
              >
                <>Renovations and Interior Design</>
              </div>
               <div
                className="cursor-pointer font-semibold flex-3 text-xl sm:text-base text-center bg-red-700 p-5 text-slate-50"
              >
                <>Real Estate Development</>
              </div>
            </div>
            <div className="flex sm:mt-1 sm:flex-col flex-row gap-2 sm:gap-1 items-center justify-between mt-[45px] w-full">
              <div
                className="cursor-pointer font-semibold text-xl text-center flex-1 sm:text-base bg-deep_orange-400 p-5 text-slate-50"
              >
                <>Project Management & Supervision</>
              </div>
              <div
                className="cursor-pointer font-semibold flex-2 text-xl sm:text-base text-center bg-red-700 p-5 text-slate-50"
              >
                <>Budget Management</>
              </div>
              <div
                className="cursor-pointer font-semibold flex-3 text-xl text-center sm:text-base bg-deep_orange-400 p-5 text-slate-50"
              >
                <>Quality Assurance</>
              </div>
            </div>
            <div className="flex sm:mt-1 md:flex-col flex-row gap-2 items-center justify-between mt-[45px] w-full">
              <div
                className="cursor-pointer font-semibold text-xl sm:text-base flex-1 text-center bg-red-700 p-5 text-slate-50"
              >
                <>Contract Management</>
              </div>
              <div
                className="cursor-pointer font-semibold flex-2 text-xl text-center sm:text-base bg-deep_orange-400 p-5 text-slate-50"
              >
                <>Schedule Management</>
              </div>
              <div
                className="cursor-pointer font-semibold flex-3 text-xl sm:text-base text-center bg-red-700 p-5 text-slate-50"
              >
                <>Lower Cost Construction</>
              </div>
            </div>
          </div>
        </div>
    )
}