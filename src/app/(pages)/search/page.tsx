import HeaderComponent from '@/app/components/header'
import SearchBoxComponent from '@/app/components/homeSearchBox'
import React from 'react'

export default function SearchPage() {
  return (
    <main className="App mx-auto">

    {/* Header  */}
    <HeaderComponent/>

    <section className="page-section mx-auto mt-7 pl-4 pr-4">

      {/* Search box  */}
      <SearchBoxComponent isHomePage={false}/>
    </section>
    

    {/* Content */}
    </main>
  )
}
