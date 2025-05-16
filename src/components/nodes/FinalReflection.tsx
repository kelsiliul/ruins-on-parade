import './RuinNode.css';

export default function FinalReflection({ chant }: { chant: string }) {
  return (
    <div
      className="ruin-bg"
      style={{ backgroundImage: `url(${import.meta.env.BASE_URL}carnival.png)` }}
    >
      <div className="ruin-node-content">
        <h2>🎇 The Grand Finale</h2>

        <p className="ruin-story">
          The Carnival ends, but your words remain. Across the ruins, your chant echoes—
          a reminder that even in a broken world, we can sing, dance, and dream.
        </p>

        <blockquote className="ruin-chant user-submission">
          <i>{chant || "No chant submitted."}</i>
        </blockquote>

        <p className="ruin-reasoning">
          Carnival is more than a celebration. It's memory, protest, and rebirth.
          Thank you for marching with the Earth Mas.
        </p>

        {/* 🎶 Background music */}
        <audio autoPlay loop>
          <source src={`${import.meta.env.BASE_URL}carnival_final.mp3`} type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
  );
}
