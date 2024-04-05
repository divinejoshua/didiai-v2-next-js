"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import searchIconFlat from "../assets/icons/textarea-search-icon.svg"
import searchIconFill from "../assets/icons/search-fill-icon.svg"
import { useRouter } from 'next/navigation'

export default function SearchBoxComponent(props : any) {

    // Hooks
    const router = useRouter()

    //Props
    let isHomePage = props.isHomePage

    //State
    const [query, setquery] = useState<string>("")
    

    // Handle form submission
    const handleSubmit = async (event : any) => {
        event.preventDefault();
        router.push(`/search?query=${query}`)
    }

    return (
        <>
            {/* If this is home page then  display the text area search box */}
            {isHomePage &&
                <form className="relative" onSubmit={handleSubmit}>
                    <textarea
                        onChange={e => setquery(e.target.value)}
                        name='query'
                        className='w-full border rounded-lg px-11 py-4 text-sm
                        focus:outline-none focus:border-blue-500
                        focus:ring-blue-500
                        focus:ring-1
                        focus:border-100
                        transition duration-0 hover:duration-150 search-textarea mt-5' rows={3} autoFocus
                        onKeyDown={(event : any)=>{
                            if (event.keyCode === 13 && !event.shiftKey) {
                                handleSubmit(event)
                            }
                        }}
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
            }

            {/* If this is NOT home page then  display the text input search box */}
            {!isHomePage &&
                <form className="relative" onSubmit={handleSubmit}>
                    <input
                        type='text'
                        onChange={e => setquery(e.target.value)}
                        name='query'
                        className='w-full border rounded-lg px-11 py-4 text-sm
                        focus:outline-none focus:border-blue-500
                        focus:ring-blue-500
                        focus:ring-1
                        focus:border-100
                        transition duration-0 hover:duration-150 search-textarea mt-5' autoFocus
                        onKeyDown={(event : any)=>{
                            if (event.keyCode === 13 && !event.shiftKey) {
                                handleSubmit(event)
                            }
                        }}
                        placeholder={`Search the internet...`}/>
                    <div className="absolute top-9 left-4 pr-3 cursor-pointer flex items-center text-sm">
                    <Image
                        src={searchIconFlat}
                        alt='Didi AI search'
                        height={22}
                        priority={true}
                    />
                    </div>
                    <button type='submit' className="absolute bottom-1 right-1 cursor-pointer flex items-center text-sm">
                    <Image
                        src={searchIconFill}
                        alt='Didi AI search'
                        height={40}
                        priority={true}
                    />
                    </button>
                </form>
            }
        </>
    )
}
