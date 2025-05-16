import { useEffect, useState } from 'react';
import './RuinNode.css';

const diasporaIcons = [
  { image: 'nottinghill.png', label: 'Notting Hill Carnival', origin: 'UK' },
  { image: 'caribana.jpg', label: 'Caribana Toronto', origin: 'Canada' },
  { image: 'laborday.png', label: 'Labor Day Parade', origin: 'USA' },
  { image: 'socasoundcloud.jpg', label: 'Soca SoundCloud Archive', origin: 'Online' }
];

const origins = ['UK', 'Canada', 'USA', 'Online'];

export default function DiasporaFlowNode({ onNext }: { onNext: () => void }) {
  const [matches, setMatches] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleMatch = (label: string, origin: string) => {
    setMatches((prev) => ({ ...prev, [label]: origin }));
  };

  const allMatched = Object.keys(matches).length === diasporaIcons.length;

  return (
    <div
      className="ruin-bg"
      style={{ backgroundImage: `url(${import.meta.env.BASE_URL}digit.png)` }}
    >
      <div className="ruin-node-content">
        <h2>🌊 Diaspora Flow – Global Carnival</h2>

        <p className="ruin-story">
          You are no longer in Port of Spain. Carnival has traveled.
          In London, Toronto, Brooklyn, and online—the beat echoes through migration.
        </p>

        {!submitted ? (
          <>
            <div className="match-grid">
              {diasporaIcons.map(({ image, label }) => (
                <div key={label} className="match-row">
                  <img src={`${import.meta.env.BASE_URL}${image}`} alt={label} className="match-icon" />
                  <select onChange={(e) => handleMatch(label, e.target.value)}>
                    <option value="">-- Match origin --</option>
                    {origins.map((o) => (
                      <option key={o} value={o}>{o}</option>
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
              🎧 From chantwell to Spotify. From burning drums to SoundCloud.
              You’ve followed the diaspora flow.
            </p>
            <blockquote className="ruin-theory">
              “From chantwell to Spotify. From burning drums to SoundCloud.” <br />
              <span className="theorist"> — Global Mas Archive</span>
            </blockquote>
            <button className="next-button" onClick={onNext}>Next →</button>
          </>
        )}
      </div>
    </div>
  );
}
