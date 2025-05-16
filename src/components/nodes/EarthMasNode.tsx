import './RuinNode.css';
import { useState } from 'react';

export default function EarthMasNode({ onNext }: { onNext: (chant: string) => void }) {
  const [chorus, setChorus] = useState('');
  const [submitted, setSubmitted] = useState(false);

  return (
    <div
      className="ruin-bg"
      style={{ backgroundImage: `url(${import.meta.env.BASE_URL}carnival.png)` }}
    >
      <div className="ruin-node-content">
        <h2>🌍 Earth Mas – March of the Ruins</h2>

        <p className="ruin-story">
          This year’s band launches a bold new section: <strong>Earth Mas</strong>. Costumes shimmer with upcycled plastics and salvaged metals.
          Your float rises like a solar phoenix. Carnival isn't just celebration—it's resistance.
        </p>

        {!submitted ? (
          <>
            <p className="ruin-challenge">
              ✨ Write the final Carnival chant—a chorus to turn ecological grief into joy.
            </p>
            <textarea
              value={chorus}
              onChange={(e) => setChorus(e.target.value)}
              placeholder="Write your chant here..."
              className="ruin-textarea"
            />
            <button className="next-button" onClick={() => setSubmitted(true)}>
              Submit Chant 🎤
            </button>
          </>
        ) : (
          <>
            <p className="ruin-feedback">
              🕊️ Your chant echoes through the parade. The land listens.
            </p>
            <button className="next-button" onClick={() => onNext(chorus)}>
              🎇 See Reflection
            </button>
          </>
        )}
      </div>
    </div>
  );
}
