import './LandingPage.css';

const LandingPage = ({ onEnter }: { onEnter: () => void }) => {
  return (
    <div className="landing">
      <div className="overlay">
        <h1 className="title">🎭 Ruins on Parade</h1>
        <p className="subtitle">You're a passionate Carnival enthusiast, tasked with organizing a unique,
          historically-infused Trinidadian Carnival. Your challenge is to use vibrant Carnival masks, music, and poetry to revive the memory of Trinidad’s ecological and historical ruins, turning them into powerful symbols of Caribbean resilience, creativity, and resistance.
          <br /><br />
          The island awaits your vision—let the Carnival begin!</p>
        <button className="enter-btn" onClick={onEnter}>Enter</button>
      </div>
    </div>
  );
};

export default LandingPage;
