import HeaderComponent from "./components/header";
import Image from "next/image";
import searchIconFlat from "./assets/icons/textarea-search-icon.svg"
import searchIconFill from "./assets/icons/search-fill-icon.svg"

export default function Home() {
  return (
    <main className="App mx-auto pl-5 pr-5">

      {/* Header  */}
      <HeaderComponent/>

      <section className="home-page-section mx-auto mt-32">
        <p className="text-gray-500 leading-1">Home page of the internet</p>

        {/* Search box  */}
        <div className="relative">
          <textarea
            className='w-full border rounded-lg px-11 py-3
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
              height={20}
              priority={true}
            />
          </div>
          <div className="absolute bottom-3 right-1 cursor-pointer flex items-center text-sm">
            <Image
              src={searchIconFill}
              alt='Didi AI search'
              height={40}
              priority={true}
            />
          </div>
        </div>

      </section>
    </main>
  );
}
