import React from 'react'
import rightIcon from "../assets/icons/right-icon.svg"
import Image from 'next/image'


export default function RecentSearch() {
  return (
    <div className='mt-5 text-sm'>
       <p className='text-gray-500'>Recent search thread</p>

        {/* Recent search list */}
       <ul className='mt-3 text-gray-700'>
        <li className='border-b border-gray-100 py-2 cursor-pointer'>
            What is PDf charm
            <Image
              src={rightIcon}
              className='float-right'
              alt='Didi AI search'
              height={20}
              priority={true}
            />
        </li>
        <li className='border-b border-gray-100 py-2 cursor-pointer'>
            Create 10 examples of what a search history might look like
            <Image
              src={rightIcon}
              className='float-right'
              alt='Didi AI search'
              height={20}
              priority={true}
            />
        </li>
        <li className='border-b border-gray-100 py-2 cursor-pointer'>
            how to increase user engagement
            <Image
              src={rightIcon}
              className='float-right'
              alt='Didi AI search'
              height={20}
              priority={true}
            />
        </li>
        <li className='border-b border-gray-100 py-2 cursor-pointer'>
            aspose.com Merge pdf in dot net
            <Image
              src={rightIcon}
              className='float-right'
              alt='Didi AI search'
              height={20}
              priority={true}
            />
        </li>
        <li className='border-b border-gray-100 py-2 cursor-pointer'>
            Download file from url with axios and set the filename
            <Image
              src={rightIcon}
              className='float-right'
              alt='Didi AI search'
              height={20}
              priority={true}
            />
        </li>
       </ul>
    </div>
  )
}
