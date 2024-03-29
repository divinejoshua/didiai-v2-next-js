import HeaderComponent from "./components/header";
import RecentSearchComponent from "./components/recentSearch";
import FooterComponent from "./components/footer";
import HomeSearchBoxComponent from "./components/homeSearchBox";

export default function Home() {
  return (
    <main className="App mx-auto pl-5 pr-5">

      {/* Header  */}
      <HeaderComponent/>

      <section className="home-page-section page-section mx-auto mt-32">
        <p className="text-gray-500 leading-1 text-sm">Home page of the internet</p>

        {/* Search box  */}
        <HomeSearchBoxComponent/>

        {/* Recent searches */}
        <RecentSearchComponent/>
      </section>

      {/* Footer */}
      <FooterComponent/>
    </main>
  );
}
