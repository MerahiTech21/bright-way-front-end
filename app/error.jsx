"use client"
import Link from 'next/link'
import React from 'react'

const ErrorHandleer = ({ error, reset }) => {    
    return (
      
      <div className='w-screen h-screen bg-gray flex justify-center items-center fixed z-10'>
          <div >
              <div>
                  {
                      error.message ? <p>{error.message}</p> :
                          <p>something went wrong.</p>
                    }
              </div>
              <div className='flex justify-center'>
                  <button onClick={reset} className='mr-5 border rounded-md p-2 hover:bg-primary first-line:hover:text-white'>try again</button>
                  <Link href='/' className='border rounded-md p-2 hover:bg-primary first-line:hover:text-white'>Go back to home</Link>
              </div>
          </div>
      </div>
  )
}

export default ErrorHandleer