import { useState, useEffect } from 'react';
import './RuinNode.css';

export default function SteelAndFireNode({ onNext }: { onNext: () => void }) {
  const [taps, setTaps] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (taps >= 6 && !done) {
      setDone(true);
    }
  }, [taps, done]);

  const handleTap = () => {
    const audio = new Audio('/steelpan_sample.mp3'); // make sure this file exists
    audio.play().catch(() => { });
    setTaps((prev) => prev + 1);
  };

  return (
    <div
      className="ruin-bg"
      style={{ backgroundImage: `url(${import.meta.env.BASE_URL}steelpanfire.png)` }}
    >
      <div className="ruin-node-content">
        <h2>🔥 Steel & Fire – Birth of the Steelpan</h2>

        {!done ? (
          <>
            <p className="ruin-challenge">
              Drumming is banned. But in this oil drum, you hear memory. Tap the steel to awaken it.
            </p>
            <button className="tap-button" onClick={handleTap}>
              🥁 Tap Steelpan ({taps}/6)
            </button>
            <p className="tap-progress">
              {taps === 0
                ? 'Silence...'
                : taps < 6
                  ? 'It echoes... again!'
                  : 'The rhythm rises!'}
            </p>
          </>
        ) : (
          <>
            <p className="ruin-feedback">
              Your steelpan sings. Neighbors emerge. The ruin stirs. A new sound is born from waste.
            </p>

            <blockquote className="ruin-theory">
              “From oil drum to melody—violence becomes rhythm.” <br />
              <span className="theorist">— Community Chantwell</span>
            </blockquote>

            <button className="next-button" onClick={onNext}>
              Next →
            </button>
          </>
        )}
      </div>
    </div>
  );
}
