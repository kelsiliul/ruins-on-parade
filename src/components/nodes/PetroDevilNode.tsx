import { useState } from 'react';
import './RuinNode.css';

export default function PetroDevilNode({ onNext }: { onNext: () => void }) {
  const [showChallenge, setShowChallenge] = useState(false);
  const [choice, setChoice] = useState<string | null>(null);

  const handleChoice = (value: string) => {
    setChoice(value);

    if (value === 'steelpan') {
      const steelpan = new Audio(`${import.meta.env.BASE_URL}steelpan_sample.wav`);
      steelpan.play().catch((err) => {
        console.error('Playback failed:', err);
      });
    }
  };


  return (
    <div className="ruin-bg" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}petro_refinery.png)` }}>
      <div className="ruin-node-content">
        <h2>🛢️ The Petro-Devil – Rhythm from Ruins</h2>

        <p className="ruin-story">
          You arrive at the oil refinery ruins. Rusted towers cast shadows across abandoned machinery—this is Point Fortin, once bustling, now broken.
        </p>

        {!showChallenge ? (
          <>
            <blockquote className="ruin-theory">
              “Capitalism produces ruins; yet life persists stubbornly among them.” <br />
              <span className="theorist">— Anna Tsing</span>
            </blockquote>

            <p className="ruin-reasoning">
              Steelpan was born from oil drums—industrial scraps turned instruments of resistance. Now it’s your turn.
            </p>

            <button className="next-button" onClick={() => setShowChallenge(true)}>
              🎵 Begin the Challenge
            </button>
          </>
        ) : (
          <>
            <p className="ruin-challenge">
              The refinery is silent. But music is waiting in the metal. <br />
              👉 What will you build first?
            </p>

            {!choice ? (
              <div className="choice-box">
                <button onClick={() => handleChoice('steelpan')}>🥁 Build a steelpan</button>
                <button onClick={() => handleChoice('float')}>🎨 Paint a float</button>
                <button onClick={() => handleChoice('speaker')}>🔊 Rig a speaker</button>

              </div>
            ) : (
              <>
                <p className="ruin-feedback">
                  {choice === 'steelpan' && '🎶 You tap out rhythm on oil drums—others join in. The parade is waking.'}
                  {choice === 'float' && '🖌️ Your float is beautiful, but the silence is deafening. Music is missing.'}
                  {choice === 'speaker' && '📢 It’s loud, but hollow. Without music, no one dances.'}
                </p>

                <audio controls>
                  <source src={`${import.meta.env.BASE_URL}steelpan_sample.wav`} type="audio/wav" />
                  Your browser does not support the audio element.
                </audio>


                <button className="next-button" onClick={onNext}>Next →</button>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}
