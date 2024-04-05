import HeaderComponent from '@/app/components/header'
import ResultComponent from '@/app/components/result'
import SearchBoxComponent from '@/app/components/searchBox'
import React from 'react'

export default function SearchPage() {
  return (
    <main className="App mx-auto">

      {/* Header  */}
      <HeaderComponent/>

      {/* Search box section */}
      <section className="mx-auto mt-7 pl-4 pr-4">

        {/* Search box  */}
        <SearchBoxComponent isHomePage={false}/>

      </section>


      {/* Result section */}
      <section className="mx-auto mt-5 pl-4 pr-4">
        <ResultComponent/>
      </section>




    </main>
  )
}
