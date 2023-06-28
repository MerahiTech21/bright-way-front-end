"use client";
import React, { useState } from "react";
import { ImLocation2 } from "@react-icons/all-files/im/ImLocation2";
import { HiOutlineMail } from "@react-icons/all-files/hi/HiOutlineMail";
import { GoLocation } from "@react-icons/all-files/go/GoLocation";
import { FiPhoneIncoming } from "@react-icons/all-files/fi/FiPhoneIncoming";
import { Card, Input, Textarea, Button } from "@material-tailwind/react";
const ContactPage = () => {
  const [message, setMessage] = useState({
    fullName: "",
    phoneNo: "",
    email: "",
    message: "",
  });
  const [errors,setErrors] = useState({fullName: "",phoneNo: "",email: "",message: "",})
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setMessage((prevValue) => {
      return { ...prevValue, [name]: value };
    });
    };
    const validateMessage = (data) => {
        const emailPattern = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
        // const regEx = ^\+{0,2}([\-\. ])?(\(?\d{0,3}\))?([\-\. ])?\(?\d{0,3}\)?([\-\. ])?\d{3}([\-\. ])?\d{4};
        if (!data.fullName) {
            setErrors(preErrors => {
            return {...preErrors,fullName:'full name is required'}
        })
        }
        else if (data.fullName?.length > 30) {
            setErrors(preErrors => {
                return {...preErrors,fullName:'full name exceeds max limit'}
            })
        }
        if (!data.email) {
            setErrors(preErrors => {
                return {...preErrors,email:'email is required'}
            })
        }
        else if (!emailPattern.test(data.email)) {
            setErrors(preErrors => {
                return {...preErrors,email:'invalid email address'}
            })
        }
        
  }
  const submitMessage = (e) => {
    e.preventDefault();
    console.log("message=", message);
  };
  return (
    <div>
      <div className="bg-primary px-10 py-20 bg-contain text-white">
        <h1 className="text-center text-3xl font-bold text-secondary">
          GET IN TOUCH
        </h1>
        <div className="grid grid-cols-1 gap-5 md:gap-16 md:grid-cols-3 w-11/12 lg:w-4/5 mx-auto mt-10 md:mt-20">
          <div className="text-center">
            <div className="flex flex-auto justify-center">
              <div className="max-w-fit rounded-full p-3 bg-secondary hover:bg-orange-700">
                <ImLocation2 size={50} />
              </div>
            </div>
            <div className="text-xl text-white text-center mt-3">ADDRESS</div>
            <div className="flex justify-center">
              <div>
                <div className="flex items-center pt-1">
                  <GoLocation />
                  <span className="ml-2 text-sm">
                    Bole Street Addis Ababa, Ethiopia
                  </span>
                </div>
                <div className="flex items-center pt-1">
                  <GoLocation />
                  <span className="ml-2 text-sm text-left">
                    7523 24th Ave SW Seattle, Washington
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-auto justify-center">
              <div className="rounded-full p-3 bg-secondary max-w-fit text-center hover:bg-orange-700">
                <FiPhoneIncoming size={50} />
              </div>
            </div>
            <div className="text-xl text-white text-center mt-3">PHONE</div>
            <div className="flex justify-center">
              <div>
                <div className="flex items-center">
                  <FiPhoneIncoming />
                  <span className="ml-2  text-sm pt-1">
                    +251920907878 +251910813571
                  </span>
                </div>
                <div className="flex items-center pt-1">
                  <FiPhoneIncoming />
                  <span className="ml-2 text-sm">206-353-5373</span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <div className="flex justify-center">
              <div className="rounded-full p-3 bg-secondary max-w-fit hover:bg-orange-700">
                <HiOutlineMail size={50} />
              </div>
            </div>
            <div className="text-xl text-white text-center mt-3">EMAIL</div>
            <div className="flex justify-center">
              <div>
                <div className="flex items-center">
                  <HiOutlineMail />
                  <span className="ml-2  text-sm pt-1">
                    info@kurazconsultancy.com
                  </span>
                </div>
                <div className="flex items-center pt-1">
                  <HiOutlineMail />
                  <span className="ml-2 text-sm">
                    info@kurazconsultancy.com
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-10 py-20 bg-contain">
        <div className="grid grid-cols-1 gap-5 md:gap-10 md:grid-cols-2 w-11/12 md:w-4/5 mx-auto">
          <div>
            <div className="text-2xl text-primary text-center">Message Us</div>
            <div>
              If you wish to be considered for employment at Weifield, please do
              not send a message, here – instead, please complete Weifield’s job
              application and our Human Resources department will contact you
              after their review of your submitted information.
            </div>
          </div>
          <div>
            <Card color="transparent" shadow={false}>
              <form className="mt-8 mb-2">
                <div className="mb-4 md:flex gap-6">
                  <Input
                    size="lg"
                    label="Full Name"
                    name="fullName"
                    onChange={changeHandler}
                    value={message.fullName}
                  />
                  <div className="mt-5 md:mt-0">
                    <Input
                      size="lg"
                      label="Phone Number"
                      name="phoneNo"
                      onChange={changeHandler}
                      value={message.phoneNo}
                    />
                  </div>
                </div>
                <div className="mb-4 min-w-full mt-5 md:mt-0">
                  <Input
                    size="lg"
                    label="Email"
                    name="email"
                    onChange={changeHandler}
                    value={message.email}
                    className="w-full"
                  />
                </div>
                <div className="w-full mt-5 md:mt-0">
                  <Textarea
                    label="Message"
                    name="message"
                    onChange={changeHandler}
                    value={message.message}
                  />
                </div>

                <Button className="mt-6 bg-secondary" onClick={submitMessage}>
                  Submit
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
