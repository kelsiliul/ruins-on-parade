import { useState } from 'react';
import './RuinNode.css';

export default function BlueQueenNode({ onNext }: { onNext: () => void }) {
  const [mask, setMask] = useState<string | null>(null);

  return (
    <div
      className="ruin-bg"
      style={{ backgroundImage: `url(${import.meta.env.BASE_URL}colo2.png)` }}
    >
      <div className="ruin-node-content">
        <h2>👑 Mas Queen – Choose Your Mask</h2>

        {!mask ? (
          <>
            <p className="ruin-story">
              The year is 1884. British colonizers have outlawed drums, banned masquerades, and sent patrols to police every corner of the island.
              But in the twilight before Carnival, whispers ripple through the streets.
              Hidden beneath fabrics, behind shutters, and inside calypso lyrics coded with resistance, the spirit of Carnival refuses to die.
              <br /><br />
              Tonight, the Blue Queen returns—an ancestral figure cloaked in oceanic feathers and rebellion. She does not speak. She simply <i>points</i> to a trunk of forbidden masks. Your role must be chosen.
            </p>

            <p className="ruin-challenge">Which mask do you wear into the forbidden parade?</p>
            <div className="choice-box">
              <button onClick={() => setMask('queen')}>👑 Ocean Queen</button>
              <button onClick={() => setMask('bird')}>🐦 Jab Molassie Bird</button>
              <button onClick={() => setMask('serpent')}>🐍 Silken Serpent</button>
            </div>
          </>
        ) : (
          <>
            <p className="ruin-feedback">
              {mask === 'queen' && '👑 You walk with regal elegance through colonial checkpoints. Your presence confuses the guards—are you nobility, or subversion in silk? They bow. You glide past.'}
              {mask === 'bird' && '🐦 Your wings shimmer with firelight as you dart through shadows. You scatter rhythm like seeds—too fast to be stopped. You are the chaos they fear.'}
              {mask === 'serpent' && '🐍 You slither through curfews, whispering chants in masquerade. Wherever your mask passes, people remember how to resist with rhythm and song.'}
            </p>

            <blockquote className="ruin-theory">
              “The mask was not just disguise—it was defiance.” <br />
            </blockquote>

            <button className="next-button" onClick={onNext}>Next →</button>
          </>
        )}
      </div>
    </div>
  );
}
