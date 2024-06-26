import HeaderComponent from "./components/header";
import RecentSearchComponent from "./components/recentSearch";
import FooterComponent from "./components/footer";
import SearchBoxComponent from "./components/searchBox";

export default function Home() {
  return (
    <main className="App mx-auto">

      {/* Header  */}
      <HeaderComponent/>

      <section className="home-page-section page-section mx-auto mt-32 pl-4 pr-4">
        <p className="text-gray-500 leading-1 text-sm">Home page of the internet</p>

        {/* Search box  */}
        <SearchBoxComponent isHomePage={true}/>

        {/* Recent searches */}
        <RecentSearchComponent/>
      </section>

      {/* Footer */}
      <FooterComponent/>
    </main>
  );
}
