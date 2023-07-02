"use client";
import React, { useState } from "react";
import { ImLocation2 } from "@react-icons/all-files/im/ImLocation2";
import { HiOutlineMail } from "@react-icons/all-files/hi/HiOutlineMail";
import { GoLocation } from "@react-icons/all-files/go/GoLocation";
import { FiPhoneIncoming } from "@react-icons/all-files/fi/FiPhoneIncoming";
import { Card, Input, Textarea, Button, Alert, Typography } from "@material-tailwind/react";
import { CheckCircleIcon, ExclamationTriangleIcon } from "@heroicons/react/24/solid";
import { Spinner } from "@material-tailwind/react";
import url from "../url";
import axios from 'axios'
const ContactPage = () => {
  const [message, setMessage] = useState({
    fullName: "",
    phoneNo: "",
    email: "",
    message: "",
  });
    const [errors, setErrors] = useState({});
    const [open, setOpen] = useState(false);
  const [notification, setNotification] = useState({})
    const [isLoading,setIsLoading] = useState(false)
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setMessage((prevValue) => {
      return { ...prevValue, [name]: value };
    });
      if (value) {
          setErrors(preErrors => {
            return {...preErrors,[name]:''}
        })
    }
  };
  const validateMessage = (data) => {
    const error = {}
    const emailPattern =
      /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
    var phoneno = /^\d{10}$/;
    if (!data.fullName) {
      error.fullName = "full name is required"     
    } else if (data.fullName?.length > 30) {
      error.fullName = "full name exceeds max limit"      
    }
    if (!data.email) {
      error.email = 'email is required'
    } else if (!emailPattern.test(data.email)) {
      error.email = 'invalid email address'
    }
    if (!data.phoneNo) {
      error.phoneNo = "phone number is required"
    } else if (!data.phoneNo.match(phoneno)) {
      error.phoneNo = "please enter valid phone number"
    }
    if (!data.message) {
      error.message = "message is required"
    }
    setErrors(error)
    return error
  };
  const submitMessage = async(e) => {
    e.preventDefault();
  const isError =  validateMessage(message);
      if (Object.values(isError)?.length > 0) {
      return;
    }
    else{
    try {
        setIsLoading(true)
          const response = await axios.post(`${url}/comments`, message)
          if (response.status == 200 || 201) {
            setNotification({ isSuccess: true, title: "Success", message: "Your message is successfully submited, Thank you for messaging Us" })
            setMessage({fullName: "",phoneNo: "",email: "",message: ""})
            setOpen(true)
            
          }
      }
      catch (error) {
          setNotification({ isSuccess: false, title: "Faild", message: "faild to send your message" })
          setOpen(true)
    }
    finally {
      setIsLoading(false)
        }
      }
     }
      
  return (
    <div>
      <div className="bg-primary px-5 md:px-10 py-32 sm:pt-40 bg-contain text-white">
        <h1 className="text-center text-3xl font-bold text-secondary">
          GET IN TOUCH
        </h1>
        <div className="grid grid-cols-1 gap-5 md:gap-10 md:grid-cols-3 w-11/12 lg:w-4/5 mx-auto mt-10  md:mt-20 text-base leading-relaxed text-gray-600">
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
                  <span className="ml-2 text-sm text-left">
                  Ethiopia Addis Ababa contact: Addis Ababa,Ethiopia 22 Beside Golagol Bldg, Noah 2nd floor #17
                  </span>
                </div>
                <div className="flex items-center pt-1">
                  <span className="ml-2 text-sm text-left">
                  USA,Seattle contact: 11708 Ambaum Blvd SW.City:Burien State: Washington ZipCode: 98146
                  </span>
                </div>
                <div className="flex items-center pt-1">
                  <span className="ml-2 text-sm text-left">
                  +12404239006
                  </span>
                </div>
                <div className="flex items-center pt-1">
                  <span className="ml-2 text-sm text-left">
                  +12063535373
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
                  +251977380909
                  </span>
                </div>
                <div className="flex items-center pt-1">
                  <FiPhoneIncoming />
                  <span className="ml-2 text-sm">+251910813571</span>
                </div>
                <div className="flex items-center pt-1">
                <FiPhoneIncoming />
                <span className="ml-2 text-sm">+251920907878</span>
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
                  info@kurazeduconsultancy.com 
                  </span>
                </div>
                <div className="flex items-center pt-1">
                  <HiOutlineMail />
                  <span className="ml-2 text-sm">
                  kurazeduconsultancy@gmail.com
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-5 md:px-10 py-20 bg-contain">
        <div className="grid grid-cols-1 gap-5 md:gap-10 md:grid-cols-2 w-11/12 md:w-4/5 mx-auto">
          <div>
            <div className="text-2xl text-primary text-center">Message Us</div>
            <div className="text-base leading-relaxed text-gray-600 mt-7" >
              If you wish to be considered for employment at Weifield, please do
              not send a message, here – instead, please complete Weifield’s job
              application and our Human Resources department will contact you
              after their review of your submitted information.
            </div>
          </div>
          <div>
            <Card color="transparent" shadow={false}>
              <form className="mt-8 mb-2">
                <div className="mb-4 md:flex gap-6 w-full">
                  <div className="w-full">
                    <Input
                      size="lg"
                      type="text"
                      label="Full Name"
                      name="fullName"
                      onChange={changeHandler}
                    value={message.fullName}
                      error={errors.fullName ? true : false}
                    className="w-full"
                                      />
                                      {errors.fullName && <span className="text-red-500">{errors.fullName }</span>}
                  </div>
                  <div className="mt-5 md:mt-0 w-full">
                    <Input
                      size="lg"
                      type="tel"
                      label="Phone Number"
                      name="phoneNo"
                      onChange={changeHandler}
                      value={message.phoneNo}
                      error={errors.phoneNo ? true : false}
                      className="w-full"
                      />
                      {errors.phoneNo && <span className="text-red-500">{errors.phoneNo }</span>}
                  </div>
                </div>
                <div className="mb-4 min-w-full mt-5 md:mt-0">
                  <Input
                    size="lg"
                    type="email"
                    label="Email"
                    name="email"
                    onChange={changeHandler}
                    value={message.email}
                    className="w-full"
                    error={errors.email? true:false}
                    />
                    {errors.email && <span className="text-red-500">{errors.email }</span>}
                </div>
                <div className="w-full mt-5 md:mt-0">
                  <Textarea
                  type="text"
                    label="Message"
                    name="message"
                    onChange={changeHandler}
                    value={message.message}
                    error={errors.message? true:false}
                    />
                    {errors.message && <span className="text-red-500">{errors.message }</span>}
                </div>

                <Button className="mt-6 bg-secondary" onClick={submitMessage}>
                  {!isLoading?"Submit":<span>Submiting <Spinner /></span>}
                </Button>
              </form>
            </Card>
          </div>
        </div>
          </div>
          <Alert
          open={open}
          color={notification.isSuccess? 'green':'red'}
          className="max-w-screen-md fixed top-24 right-0"
          icon={notification.isSuccess?<CheckCircleIcon className="mt-px h-6 w-6" />:<ExclamationTriangleIcon className="mt-px h-6 w-6" />}
          onClose={() => setOpen(false)}
        >
          <Typography variant="h5" color="white">
            {notification.isSuccess?'Success':"Faild"}
          </Typography>
          <Typography color="white" className="mt-2 font-normal">
           {notification.message}
          </Typography>
        </Alert>
    </div>
  );
};

export default ContactPage;
