import { useState, useEffect, useRef } from 'react';
import './RuinNode.css';

export default function CaroniCrossingNode({ onNext }: { onNext: () => void }) {
  const [verse, setVerse] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Auto-play background music once when node loads
  useEffect(() => {
    const audio = new Audio(`${import.meta.env.BASE_URL}indian.mp3`);
    audio.loop = true;
    audio.volume = 0.6; // softer background volume
    audio.play().catch(() => {
      console.warn("Autoplay blocked");
    });
    audioRef.current = audio;

    // Stop music when component unmounts
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  return (
    <div className="ruin-bg" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}indi.png)` }}>
      <div className="ruin-node-content">
        <h2>🌾 Caroni Crossing – Songs of the Indentured</h2>

        <p className="ruin-story">
          You are newly arrived from India. The sun sets over cane fields. At dusk, you hear voices—chants that carry both grief and survival.
          In this new land, can you remember your name in rhythm?
        </p>

        {!submitted ? (
          <>
            <textarea
              placeholder="Compose a chant (e.g. Hindi rhythm + Kaiso tone)..."
              value={verse}
              onChange={(e) => setVerse(e.target.value)}
              rows={5}
              className="chant-input"
            />
            <button
              className="next-button"
              onClick={() => setSubmitted(true)}
              disabled={!verse.trim()}
            >
              Submit Chant →
            </button>
          </>
        ) : (
          <>
            <blockquote className="ruin-chant">
              “We left with names wrapped in prayer, <br />
              Unfurling them here, in heat and sugar air.”
            </blockquote>
            <p className="ruin-feedback">🌺 Your chant joins the cane wind. Memory sings back.</p>
            <button className="next-button" onClick={onNext}>Next →</button>
          </>
        )}
      </div>
    </div>
  );
}
