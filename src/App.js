import React, {useState, useEffect} from 'react';
import Particles from "react-tsparticles";
import './App.css'; 
import particlesOptions from "./particles.json";
import Header from "./components/header"
import Navbar from "./components/navbar"
import ClipLoader from "react-spinners/ClipLoader"




function App() {
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    },[])
    return (
        <div className="App">
            <Particles options={particlesOptions}/>
            {
                loading ?

                <ClipLoader
                
                color={"#C59221"}
                loading={loading}
                size={60} 
                />

                :
                
                <div>
                    <Header/>
                    <Navbar/>
                </div>
            }
                
            
        </div>
    );
}

export default App;
