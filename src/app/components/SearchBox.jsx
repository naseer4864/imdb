"use client"
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function SearchBox() {
    const [search, setSearch] = useState("")

    const router = useRouter()

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!search) return;
        router.push(`/search/${search}`)
    }

  return (
    <form onSubmit={handleSubmit} className='flex max-w-6xl mx-auto justify-between items-center px-5'>
      <input type="text" placeholder='Search Keywords....' value={search} onChange={handleChange}
      className='w-full h-14 rounded-sm placeholder-gray-500 outline-none bg-transparent flex-1'
      />
      <button disabled={!search} type='submit' className='text-amber-600 disabled:text-gray-400'>Search</button>
    </form>
  )
}
