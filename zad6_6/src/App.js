import { useState } from 'react'
import KartaPrac from './components/KartaPrac'
import Formularz from './components/Formularz'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
function App() {
    const [dziennikZadan, ustawDziennikZadan] = useState([])
    const dodajPrace = (zadanie) => {
        let zadania = [...dziennikZadan, zadanie]
        ustawDziennikZadan(zadania)
    }
    return (
        <section>
            <Formularz dodajPrace={dodajPrace} />
            <KartaPrac dziennik={dziennikZadan} />
        </section>
    )
}
export default App
