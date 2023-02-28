import Navbar from './components/navbar'
import Filters from './components/Filters'
import Rentals from './components/Rentals'
import Footer from './components/Footer';

function App() {
  return (
    <div className="">
      {/*navbar */}
      <Navbar />
      {/*filters*/}
      <Filters />
      {/*rentals*/}
      <Rentals />
      {/*footers*/}
      <Footer />
    </div>
  );
}

export default App;
