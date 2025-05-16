import { useState, useEffect } from 'react';
import './RuinNode.css';

export default function CanboulayRiotNode({ onNext }: { onNext: () => void }) {
  const [choice, setChoice] = useState<'resist' | 'chant' | 'hide' | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className="ruin-bg"
      style={{ backgroundImage: `url(${import.meta.env.BASE_URL}riot.png)` }}
    >
      <div className="ruin-node-content">
        <h2>🎓 Canboulay Riot – Carnival vs. Control</h2>

        <p className="ruin-story">
          The year is 1881. British colonial police descend on the Canboulay procession.
          Torches blaze. People scatter. A stickfight breaks out. You stand in the alley with iron in hand.
          What do you do?
        </p>

        {!choice ? (
          <div className="choice-box">
            <button aria-label="Strike the iron" onClick={() => setChoice('resist')}>⚔️ Strike the iron</button>
            <button aria-label="Chant the warning" onClick={() => setChoice('chant')}>🎶 Chant the warning</button>
            <button aria-label="Hide in the shadows" onClick={() => setChoice('hide')}>🕳️ Hide in the shadows</button>
          </div>
        ) : (
          <>
            <p className="ruin-feedback">
              {choice === 'resist' && '🔥 You clash sticks with the police. The crowd roars. Resistance ripples.'}
              {choice === 'chant' && '📢 You cry out an ancient rhythm. It alerts others. The Carnival shifts course.'}
              {choice === 'hide' && '😶 You blend into the shadows. You survive—but your silence echoes.'}
            </p>

            <blockquote className="ruin-theory">
              “Carnival is a reordering of reality.” <br />
            </blockquote>

            <button className="next-button" onClick={onNext}>Next →</button>
          </>
        )}
      </div>
    </div>
  );
}
