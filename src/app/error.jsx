"use client"
import { useEffect } from "react"

export default function Error({error, reset}) {
    useEffect(() => {
        console.log(error)
    },[error])
  return (
    <div className='w-full h-screen bg-gray-500 flex items-center flex-col'>
      <div className="flex items-center justify-center flex-col my-20 p-20 bg-slate-800 rounded-xl dark:text-gray-300 text-white">
      <p>Something went wrong</p>
      <button onClick={() => reset()}>Try again</button>
      </div>
    </div>
  )
}
