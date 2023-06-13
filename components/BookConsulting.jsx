"use client"
import { Fragment, useState,use } from "react";
import { Button, Dialog, DialogHeader, DialogBody, DialogFooter, Input } from "@material-tailwind/react";
import DatePicker from "react-datepicker"; 
import url from "../app/url";

const fetchAailabelTimes = async() => {
  const res = await fetch(`${url}/availabilities`)
  return await res.json()
}
// const fetchedData = fetchAailabelTimes()
export default async function BookConsulting({ show, toggleModal }) {
  // const availabelTimes = use(fetchedData)
  const [startDate, setStartDate] = useState(null);
 
  // console.log('availabelTimes =',availabelTimes)
    const handleOpen = () => {
      toggleModal()
  };
 
  return (
      <Fragment>
      <Dialog
        open={show}
        size='xl'
        handler={handleOpen}
      >
        <DialogHeader className="text-center">Book Consultant</DialogHeader>
        <DialogBody divider className="h-[30rem] overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input type="text" size="lg" label="Full Name" />
            <Input type="email" size="lg" label="Your Email" />
            <Input size="lg" label="Your Phone" />
             <Input size="lg" label="Your Phone" />                
        </div>
          <div className="md:flex items-center mt-4 gap-4 ">
            <div className="md:min-w-[49.5%] self-start">
            <DatePicker className="border p-2 w-full rounded-md"
            showIcon={true}
            shouldCloseOnSelect={false}
            startOpen={true}
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          includeDates={[new Date()]}
          placeholderText="Select from availbel dates"
          fixedHeight={true}
            autoFocus={true}
            forceShowMonthNavigation={true}              
                isClearable={true}
          >         
  
          </DatePicker>
            </div>
          <div className="border rounded-lg mt-60 md:mt-0 md:min-w-[49%]">
          <div className="text-center py-5 text-xl">Select Availeble time from the displayed one</div>
        <div className="grid grid-cols-2 lg:grid-cols-4  gap-4 px-5 pb-5">
            <div className="border rounded-lg p-2 cursor-pointer">5:00-5:30</div>
            <div className="border rounded-lg p-2 cursor-pointer">5:00-5:30</div>
            <div className="border rounded-lg p-2 cursor-pointer">5:00-5:30</div>
            <div className="border rounded-lg p-2 cursor-pointer">5:00-5:30</div>
        </div>
      </div>
          </div>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={() => handleOpen()}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button
            variant="gradient"
            color="green"
            onClick={() => handleOpen()}
          >
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </Fragment>
  );
}