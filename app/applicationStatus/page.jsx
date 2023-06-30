"use client"
import React,{useState} from "react";
import {Card,CardHeader,CardBody,Input,Button,Typography,Spinner } from "@material-tailwind/react";
import { BanknotesIcon } from "@heroicons/react/24/solid";
import url from "../url";
import axios from 'axios'
 
export default function Example() {
  const [code, setCode] = useState("");
  const [isLoading,setIsLoading] = useState(false)
  const sebmitCode = async (e) => { 
    e.preventDefault()  
    try {
      setIsLoading(true)
      const response = await axios.get(`${url}/get_status/${code}`)
      console.log('response', response.data)
      
    }
    catch (err) { }
    finally {
      setIsLoading(false)
    }
  } 

  
 
return (
  <div className="p-5">
  <Card className="w-full max-w-[24rem] mx-auto my-10">
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
       <Input
              type="number"
              label="application code"
              onChange={(e)=>setCode(e.target.value)}
            />
</div>
          <Button className="bg-secondary flex justify-center" size="lg" onClick={sebmitCode}>
            {!isLoading ?'Submit':<Spinner />} 
          </Button>
 </form>
  
</CardBody>
    </Card>
  </div>
 
);
}
 