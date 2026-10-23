import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import Guests from "./components/Guests";
import Header from "./components/Header";
import Rooms from "./components/Rooms";

function App() {
  return (
      <div className="app">
          <Header />
          <main>
              <Dashboard />
              <Guests />
              <Rooms />
          </main>
          <Footer />
      </div>
    
  )
}

export default App;