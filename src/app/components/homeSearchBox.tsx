"use client"
import Image from 'next/image'
import React from 'react'
import searchIconFlat from "../assets/icons/textarea-search-icon.svg"
import searchIconFill from "../assets/icons/search-fill-icon.svg"
import { useRouter } from 'next/navigation'

export default function HomeSearchBoxComponent() {

    // Hooks
    const router = useRouter()

    // Handle form submission
    const handleSubmit = async (formData : any) => {
        const query = formData.get("query");
        router.push(`/search?query=${query}`)

    }

    return (
        <form className="relative" action={handleSubmit}>
            <textarea
                name='query'
                className='w-full border rounded-lg px-11 py-4 text-sm
                focus:outline-none focus:border-blue-500
                focus:ring-blue-500
                focus:ring-1
                focus:border-100
                transition duration-0 hover:duration-150 search-textarea mt-5' rows={3} autoFocus
                placeholder={`Search the internet...`}>
            </textarea>
            <div className="absolute top-9 left-4 pr-3 cursor-pointer flex items-center text-sm">
            <Image
                src={searchIconFlat}
                alt='Didi AI search'
                height={22}
                priority={true}
            />
            </div>
            <button type='submit' className="absolute bottom-3 right-1 cursor-pointer flex items-center text-sm">
            <Image
                src={searchIconFill}
                alt='Didi AI search'
                height={40}
                priority={true}
            />
            </button>
        </form>
    )
}
