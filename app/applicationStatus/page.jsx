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
  const [error,setError] = useState('')
const [status,setStatus] =useState({})
const changeHandler = (e)=>{
  setCode(e.target.value)
  if(e.target.value){
    setError('')
  }
}
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
      setError('please enter your application code')
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
              onChange={changeHandler}
              size="lg"
              value={code}
              className="w-full"
              error={error?.length? true:false}
                />
                {error && <span className="text-red-500">{error }</span>}
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
        <div>Your Application Status is:{status?.status} </div>
        <div className="font-bold text-base leading-relaxed text-gray-600">Your Application status description </div>
        <div>{status.status_desc}</div>
           
      </div>
 }
  </div>
 
);
}
 