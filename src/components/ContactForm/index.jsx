import React from "react"
import { Button, Img, Input, Text, TextArea } from "components";

const submit = () => {
        console.log("submitted")
    }

export const ContactForm = (props) => {
    return (
        <>
        
          <div className="flex flex-col md:p-8 items-start justify-start sm:p-8 md:w-full">
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
              <div class="form">
                <form action="/inc/action.php" method={props.method}>
                  <input type="text" name="form_type" value="contact_form"   class="form_type" style={{display: 'none'}}></input>
                  <div className="flex md:flex-col flex-row items-center gap-3 sm:justify-start sm:items-left justify-between mt-[59px] w-full">
                <Input
                  className="bg-white-A700 h-[88px] justify-center pb-5 pt-[35px] sm:px-5 text-black-900 text-xl"
                  size="txtCriteriaCFRegular20" type="text" name="name" wrapClassName="w-2/4 sm:w-full"  placeholder="Name"
                />
                <Input
                  className="bg-white-A700 h-[88px] justify-center pb-5 pt-[35px] sm:px-5 text-black-900 text-xl"
                  size="txtCriteriaCFRegular20" type="email" name="email" wrapClassName="w-2/4 sm:w-full"  placeholder="Email"
                />
              </div>
                  <div className="flex md:flex-col flex-row md:gap-[50px] items-center gap-3 justify-between mt-[23px] w-full">
                <Input
                  className="bg-white-A700 h-[88px] justify-center pb-5 pt-[35px] sm:px-5 text-black-900 text-xl"
                  size="txtCriteriaCFRegular20" type="text" name="phone" wrapClassName="w-2/4 sm:w-full" placeholder="Phone Number"
                />
                <Input
                  className="bg-white-A700 h-[88px] justify-center pb-5 pt-[35px] sm:px-5 text-black-900 text-xl"
                  size="txtCriteriaCFRegular20" type="text" name="location" wrapClassName="w-2/4 sm:w-full" placeholder="Location"
                />
              </div>
               <div className="flex md:flex-col flex-row md:gap-[50px] items-center justify-between mt-[23px] w-full h-60">
                <TextArea
                className="bg-white-A700 h-[88px] justify-center pb-5 pt-[35px] sm:px-5 text-black-900 text-xl w-full h-full"
                name="message"
                placeholder="Your message"
              ></TextArea>
               </div>
              <Button
                className="common-pointer cursor-pointer font-bold leading-[normal] min-w-[250px] mt-[55px] md:text-2xl text-3xl text-center"
                type="submit"
              >
                Submit{" "}
              </Button>
                </form>
              </div>
              
            </div>
            <div className="bg-red-700 flex flex-col items-start sm:w-full justify-start sm:items-center sm:justify-center p-[53px] md:px-10 sm:px-5">
              <Text
                className="sm:text-center sm:w-11/12 mb-[267px] mt-[185px] text-white-A700 text-xl sm:text-lg"
                size="txtCriteriaCFMedium20WhiteA700"
              >
                <>
                  <span className="text-3xl font-bold">CONTACT</span>
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
            </>
    )

    
}
