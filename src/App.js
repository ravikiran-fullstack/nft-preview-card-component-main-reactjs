import image from "./images/image-equilibrium.jpg";
import creatorImage from "./images/image-avatar.png";

function App() {
  return (
    <div className='container'>
      <div className='card'>
        <div className='cardImage'>
          <img src={image} alt='' />
          <div class='image__overlay'></div>
        </div>
        <div className='cardBody'>
          <div className='cardTitle'>
            <h1>Equilibrium #3429</h1>
          </div>
          <div className='cardInfo'>
            <p>Our Equilibrium collection promotes balance and calm.</p>
          </div>
          <div className='cardPriceAndTime'>
            <p className='price'>
              <i className='fab fa-ethereum'></i>&nbsp;0.041&nbsp;ETH
            </p>
            <p>
              <i className='fas fa-clock'></i>&nbsp;&nbsp;3 days left
            </p>
          </div>
          <div className='line'></div>
          <div className='creatorDetails'>
            <div>
              <img src={creatorImage} alt='' />
            </div>
            <p>
              <span className='creationOf'>Creation of</span> Jules Wyvern
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
