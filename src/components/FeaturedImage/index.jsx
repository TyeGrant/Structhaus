import React from 'react'
import { useNavigate } from 'react-router-dom'
import {Img, Text} from "components";

export const FeaturedImage = () => {
    const navigate = useNavigate()

    return (
        <div className="flex flex-col items-center justify-start p-10 sm:px-5 w-full">
          <div className="flex flex-col items-center justify-start max-w-[1148px] mb-[3px] mx-auto md:px-5 w-full">
            <Text
              className="text-5xl sm:items-center sm:text-center sm:text-[38px] md:text-[44px] text-gray-400"
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
          </div>
          <div className="flex w-full flex-row justify-end sm:justify-center text-right">
                <Text
              className="mt-[19px] text-deep_orange-400 text-xl cursor-pointer"
              size="txtCriteriaCFMedium20"
              onClick={() => navigate('/projects')}
            >
              Explore all projects
            </Text>
            </div>
        </div>
    )
}