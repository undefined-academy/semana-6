import Header from './components/Header';
import Card from './components/Card';
import {cardData as data} from './data.js';
import Footer from './components/Footer';
import sortByDate from './utils/sortByDate';

function App() {
  return (
    <div className="container">
      <Header />

      <div className="card-container">
        {
          data.sort(sortByDate).map((cardData) => 
            <Card key={cardData.date} data={cardData} />
          )
        }       
      </div>

      <Footer />
    </div>
  )
}

export default App
