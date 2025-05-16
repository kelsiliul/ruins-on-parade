// Node 6: Burn Dem – Soundclash of Power
import { useState, useEffect } from 'react';
import './RuinNode.css';

const injustices = [
  { lyric: 'Politicians promise, but the people still starve.', target: 'poverty' },
  { lyric: 'They take the land, then poison the sea.', target: 'ecological ruin' },
  { lyric: 'They smile on stage, then stab from behind.', target: 'betrayal' }
];

const targets = ['poverty', 'ecological ruin', 'betrayal'];

export default function BurnDemNode({ onNext }: { onNext: () => void }) {
  const [matches, setMatches] = useState<{ [lyric: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleMatch = (lyric: string, target: string) => {
    setMatches((prev) => ({ ...prev, [lyric]: target }));
  };


  const allMatched = Object.keys(matches).length === injustices.length;

  return (
    <div className="ruin-bg" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}burndem_bg.png)` }}>
      <div className="ruin-node-content">
        <h2>🔥 Burn Dem – Soundclash of Power</h2>

        <p className="ruin-story">
          Black Stalin sings. The street shakes. You walk through fire, betrayal thick in the air.
          His voice rises—“Burn dem!” Do you echo his chant or remix the rage?
        </p>

        {!submitted ? (
          <>
            <div className="match-grid">
              {injustices.map(({ lyric }) => (
                <div key={lyric} className="match-row">
                  <span className="lyric">"{lyric}"</span>
                  <select onChange={(e) => handleMatch(lyric, e.target.value)}>
                    <option value="">-- Match target --</option>
                    {targets.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
              ))}
            </div>
            <button
              className="next-button"
              onClick={() => setSubmitted(true)}
              disabled={!allMatched}
            >
              Submit Match
            </button>
          </>
        ) : (
          <>
            <p className="ruin-feedback">
              🔥 You’ve named the fire. The sound grows louder.
            </p>
            <blockquote className="ruin-theory">
              “These songs are performative historiography.” <br />
              <span className="theorist">— Carnival Archive</span>
            </blockquote>
            <button className="next-button" onClick={onNext}>Next →</button>
          </>
        )}
      </div>
    </div>
  );
}
