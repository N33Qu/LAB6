import './Card.css'
// import Card1 from './Card1';
// import Card2 from './Card2';
// import Card3 from './Card3';
// import Card4 from './Card4';
import Card from "./Card";
function App() {
  return (
      // <div>
      //     <h1>Słynni informatycy</h1>
      //     <Card1/>
      //     <Card2/>
      //     <Card3/>
      //     <Card4/>
      // </div>
      <div>
          <h1>Słynni informatycy</h1>
          <Card
              name="Alan Turing"
              imageUrl="https://mdz.cs.pollub.pl/ai/alan_turing.jpg"
              lifespan="1912 - 1954"
              occupation="Matematyk"
              country="Anglia"
          />
          <Card
              name="Niklaus Wirth"
              imageUrl="https://mdz.cs.pollub.pl/ai/nicolas_wirth.jpg"
              lifespan="1934 - ?"
              occupation="Elektronik i informatyk"
              country="Szwajcaria"
          />
          <Card
              name="Bjarne Stroustrup"
              imageUrl="https://mdz.cs.pollub.pl/ai/bjarne_stroustrup.jpg"
              lifespan="1950 - ?"
              occupation="Informatyk"
              country="Dania"
          />
          <Card
              name="Dennis Ritchie"
              imageUrl="https://mdz.cs.pollub.pl/ai/dennis_ritchie.jpg"
              lifespan="1941 - 2011"
              occupation="Matematyk, fizyk, informatyk"
              country="USA"
          />
      </div>
  )
}

export default App
