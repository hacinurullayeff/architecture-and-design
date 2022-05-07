import React, {useState, useEffect} from 'react';
import './App.css'; 
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import About from "./components/About"
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ClipLoader from "react-spinners/ClipLoader"
import Backtotop from './components/Backtotop';





function App() {
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 5000)
    },[])
    return (
        <div className="App">
            {
                loading ?
                
                <div className='loader'>
                <ClipLoader
                
                color={"#C59221"}
                loading={loading}
                size={60} 
                />
                </div>

                :
                
                <div>
                    <Header />
                    <Navbar />
                    <About />
                    <Team />
                    <Contact />
                    <Footer />
                    <Backtotop />
                </div>
            }
                
            
        </div>
    );
}

export default App;
