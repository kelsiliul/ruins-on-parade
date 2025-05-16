import { useEffect } from 'react';
import './RuinNode.css';

export default function ArchiveMasNode({ onNext }: { onNext: () => void }) {
  useEffect(() => {
    const crowdSound = new Audio(`${import.meta.env.BASE_URL}wild_crowd.wav`);
    crowdSound.loop = false; // optional — change to true if you want it to loop
    crowdSound.play();

    return () => {
      crowdSound.pause();
      crowdSound.currentTime = 0; // reset to start
    };
  }, []);

  return (
    <div
      className="ruin-bg"
      style={{ backgroundImage: `url(${import.meta.env.BASE_URL}archive_mas_bg.png)` }}
    >
      <div className="ruin-node-content">
        <h2>🎇 Archive Mas – Memory in Motion</h2>

        <p className="ruin-story">
          The parade is over. The road is scattered with glitter, ash, and rhythm.
          But as you turn back, the masks shimmer. You see the Petro-Devil's horn, the Blue Queen’s wave, the Caroni chant.
          Ghosts dance alongside you—old chantwells, rebel queens, steelpan spirits.
        </p>

        <p className="ruin-feedback">
          Your Carnival was never just a festival—it was a living archive. And it will march again.
        </p>

        <blockquote className="ruin-theory">
          “They were losing a battle with the times. But the dragon still danced.” <br />
        </blockquote>

        <button className="next-button" onClick={onNext}>
          🎭 Exit Parade
        </button>
      </div>
    </div>
  );
}
