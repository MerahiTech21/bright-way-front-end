"use client"
import React,{useState} from "react";
import {Card,CardHeader,CardBody,Input,Button,Typography,Spinner } from "@material-tailwind/react";
import { BanknotesIcon } from "@heroicons/react/24/solid";
import url from "../url";
import axios from 'axios'
 
export default function Example() {
  const [code, setCode] = useState("");
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isError, setIsError] = useState(false)
const [status,setStatus] =useState({})
  const sebmitCode = async (e) => { 
    e.preventDefault()  
    if (code?.length) {
      try {
        setIsLoading(true)
        const response = await axios.get(`${url}/get_status/${code}`)
        console.log('response', response.data)
        if (response.status == 200 || 201) {
          setStatus(response?.data)
          setIsSuccess(true)
       }
      }
      catch (err) { }
      finally {
        setIsLoading(false)
      }
    }
    else {
      setIsError('please enter your application code')
    }
  } 

  
 
return (
  <div className="px-5 py-20 bg-cover bg-[url('/homebg.jpg')] ">
    {
  !isSuccess && <Card className="w-full max-w-[24rem] mx-auto my-10">
  <CardHeader
          color="blue"
          floated={false}
          shadow={false}
          className="m-0 grid place-items-center rounded-b-none py-8 px-4 text-center bg-cover bg-[url('/homebg.jpg')]"
        >
  <div className="rounded-full border border-white/10 bg-white/10 p-6 text-white">
  <BanknotesIcon className="h-10 w-10" />
  </div>
  <Typography variant="h4" color="white">
  Kuraz Consultancy
  </Typography>
  </CardHeader>
  <CardBody>
  <form className="mt-6 flex flex-col gap-4">
  <div>
  <Typography
    variant="small"
    color="blue-gray"
    className="mb-4 font-medium">
   Enter Your Application Code and click Submit
  </Typography>
              <div>
              <Input
              type="number"
              label="application code"
              onChange={(e) => setCode(e.target.value)}
              size="lg"
              value={code}
              className="w-full"
              error={isError? true:false}
                />
                {isError && <span className="text-red-500">{isError }</span>}
              </div>
  </div>
            <Button className="bg-secondary flex justify-center" size="lg" onClick={sebmitCode}>
              {!isLoading ?'Submit':<Spinner />} 
            </Button>
   </form>
    
  </CardBody>
      </Card>
    }
    {
      isSuccess && <div className="px-6 mt-40 w-11/12 md:w-1/2 mx-auto border-2 border-secondary p-5 rounded-lg text-base leading-relaxed text-gray-600 bg-white">
        <div className="text-secondary text-xl text-center">Your Application progress </div>
        <div>Your Application Status is:{status.statuse} </div>
        <div className="font-bold text-base leading-relaxed text-gray-600">Your Application status description </div>
        <div>The value for v-bind:style is just a plain JavaScript object that works upon some rules for binding the content. The value of the background image should be a string. So we can apply or data-bind the background image in Vue.js using the style tag and then defining the backgroundImage URL in it. It will automatically retrieve the url from the string and then display the same data content on the browser webpage.

        To access the background image, make a div element and define the background image in it with url. The url will be retrieved from the JS file.</div>
           
      </div>
 }
  </div>
 
);
}
 