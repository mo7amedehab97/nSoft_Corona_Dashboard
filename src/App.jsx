import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Banner from "./Components/Banner/Banner";
import CountriesList from "./Components/Countries/CountriesList";

function App() {
  return (
    <>
      <SkeletonTheme baseColor="rgba(0,0,0,.2)" highlightColor="#d1d1d1">
        <Banner />
        <CountriesList />
      </SkeletonTheme>
    </>
  );
}

export default App;
