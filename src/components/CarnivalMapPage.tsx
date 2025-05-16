import { useState, useEffect, useRef } from 'react';
import PetroDevilNode from './nodes/PetroDevilNode';
import BlueQueenNode from './nodes/BlueQueenNode';
import CaroniCrossingNode from './nodes/CaroniCrossingNode';
import CanboulayRiotNode from './nodes/CanboulayRiotNode';
import SteelAndFireNode from './nodes/SteelAndFireNode';
import BurnDemNode from './nodes/BurnDemNode';
import EarthMasNode from './nodes/EarthMasNode';
import ArchiveMasNode from './nodes/ArchiveMasNode';
import DiasporaFlowNode from './nodes/DiasporaFlowNode';
import FinalReflection from './nodes/FinalReflection';

import './CarnivalMapPage.css';

const CarnivalMapPage = () => {
  const [step, setStep] = useState(0);
  const [userChant, setUserChant] = useState('');
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Play music once when component mounts
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      audioRef.current.play().catch(() => {
        // Autoplay might fail without user interaction
        console.log('Audio autoplay blocked by browser.');
      });
    }
  }, []);

  const advance = () => setStep((prev) => prev + 1);

  if (step === 1) return <PetroDevilNode onNext={advance} />;
  if (step === 2) return <BlueQueenNode onNext={advance} />;
  if (step === 3) return <CaroniCrossingNode onNext={advance} />;
  if (step === 4) return <CanboulayRiotNode onNext={advance} />;
  if (step === 5) return <SteelAndFireNode onNext={advance} />;
  if (step === 6) return <BurnDemNode onNext={advance} />;
  if (step === 7) return <ArchiveMasNode onNext={advance} />;
  if (step === 8) return <DiasporaFlowNode onNext={advance} />;
  if (step === 9)
    return <EarthMasNode onNext={(chant: string) => { setUserChant(chant); setStep(10); }} />;
  if (step === 10) return <FinalReflection chant={userChant} />;

  return (
    <div className="map-wrapper">
      <img
        src={`${import.meta.env.BASE_URL}mapfinal.png`}
        alt="Carnival Map"
        className="map-image"
      />
      <button className="start-button" onClick={advance}>
        🎉 Begin Carnival
      </button>

      {/* 🎶 Background music (plays once on mount) */}
      <audio ref={audioRef} loop>
        <source src={`${import.meta.env.BASE_URL}carnival_upbeat_dance.mp3`} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default CarnivalMapPage;
