import React, { useEffect, useState } from "react"
import { Button, Input, Text, TextArea } from "components";

const submit = () => {
        console.log("submitted")
    }

export const ContactForm = (props) => {

  const [pathname, setPathname ] = useState()

  useEffect(() => {
    const current_pathname = window.location.pathname
    console.log(current_pathname)
    setPathname(current_pathname)
  })

    return (
        <>
          <div className="bg-deep_orange-400 w-1/2 h-[870px] sm:h-[1120px] sm:w-full">
            <div className="flex flex-col md:p-8 items-start p-10 justify-start sm:p-8 md:w-full">
              <div className="sm:w-11/12">
                <Text
                className="sm:text-3xl md:text-4xl text-4xl text-white-A700"
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
              </div>
              <div class="sm:w-11/12 form w-full">
                <form action={props.action} method={props.method} className="w-full">
                  <input type="text" name="form_type" value="contact_form"   class="form_type" style={{display: 'none'}} />
                  <input type="text" name="pathname" value={pathname} class="pathname" style={{display: 'none'}} />
                  <div className="flex md:flex-col flex-row items-center gap-3 sm:justify-start sm:items-left justify-between mt-[59px] w-full">
                <Input
                  className="bg-white-A700 h-[88px] justify-center pb-5 pt-[35px] sm:px-5 text-black-900"
                  size="txtCriteriaCFRegular20" type="text" name="name" wrapClassName="w-full sm:w-full"  placeholder="Name"
                />
                <Input
                  className="bg-white-A700 h-[88px] justify-center pb-5 pt-[35px] sm:px-5 text-black-900"
                  size="txtCriteriaCFRegular20" type="email" name="email" wrapClassName="w-full sm:w-full"  placeholder="Email"
                />
              </div>
                  <div className="flex md:flex-col flex-row items-center gap-3 justify-between mt-[23px] w-full">
                <Input
                  className="bg-white-A700 h-[88px] justify-center pb-5 pt-[35px] sm:px-5 text-black-900"
                  size="txtCriteriaCFRegular20" type="text" name="phone" wrapClassName="w-full sm:w-full" placeholder="Phone Number"
                />
                <Input
                  className="bg-white-A700 h-[88px] justify-center pb-5 pt-[35px] sm:px-5 text-black-900"
                  size="txtCriteriaCFRegular20" type="text" name="location" wrapClassName="w-full sm:w-full" placeholder="Location"
                />
              </div>
               <div className="flex md:flex-col flex-row items-center justify-between mt-[23px] w-full h-60">
                <TextArea
                className="bg-white-A700 h-[88px] justify-center pb-5 pt-[35px] sm:px-5 text-black-900 w-full h-full"
                name="message"
                placeholder="Your message"
              ></TextArea>
               </div>
              <Button
                className="common-pointer cursor-pointer font-bold leading-[normal] min-w-[250px] mt-[55px] text-center"
                type="submit"
              >
                Submit{" "}
              </Button>
                </form>
              </div>
              
            </div>
          </div>
            <div className="bg-red-700 w-1/2 h-[870px] sm:w-full">
              <div className="flex flex-col items-start sm:w-full justify-start sm:items-center sm:justify-center p-[53px] md:px-10 sm:px-5">
              <Text
                className="sm:text-center sm:w-11/12 mb-[267px] mt-[185px] text-white-A700 text-xl sm:text-sm"
                size="txtCriteriaCFMedium20WhiteA700"
              >
                <>
                  <span className="text-3xl sm:text-sm font-bold">CONTACT</span>
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
            </>
    )

    
}
