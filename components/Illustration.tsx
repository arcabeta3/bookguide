import React from 'react';

interface IllustrationProps {
  illustrationId: string;
}

const ReedsInWind: React.FC = () => (
  <svg viewBox="0 0 100 50" className="w-full h-auto max-w-xs mx-auto" aria-label="Reeds swaying in the wind">
    <path d="M20,50 C15,30 25,10 20,0" stroke="#a3a3a3" fill="none" strokeWidth="1.5" />
    <path d="M35,50 C30,30 40,10 35,0" stroke="#a3a3a3" fill="none" strokeWidth="1.5" />
    <path d="M50,50 C45,30 55,10 50,0" stroke="#e5e5e5" fill="none" strokeWidth="2" />
    <path d="M65,50 C60,30 70,10 65,0" stroke="#a3a3a3" fill="none" strokeWidth="1.5" />
    <path d="M80,50 C75,30 85,10 80,0" stroke="#a3a3a3" fill="none" strokeWidth="1.5" />
  </svg>
);

const MountainPath: React.FC = () => (
  <svg viewBox="0 0 100 50" className="w-full h-auto max-w-xs mx-auto" aria-label="A path leading up a mountain towards a shining sun">
    <path d="M0,50 Q20,40 40,30 T80,10" stroke="#e5e5e5" fill="none" strokeWidth="2" strokeDasharray="4 2"/>
    <path d="M50,50 L70,20 L80,30 L90,15 L100,25" stroke="#a3a3a3" fill="none" strokeWidth="1.5" />
    <circle cx="90" cy="8" r="5" fill="#fcd34d"/>
  </svg>
);

const Pottery: React.FC = () => (
    <svg viewBox="0 0 100 50" className="w-full h-auto max-w-xs mx-auto" aria-label="Hands shaping a clay pot on a wheel">
        <path d="M30 45 C 25 30, 25 20, 35 15" stroke="#e5e5e5" fill="none" strokeWidth="2"/>
        <path d="M70 45 C 75 30, 75 20, 65 15" stroke="#e5e5e5" fill="none" strokeWidth="2"/>
        <path d="M35,15 C 40,10, 60,10, 65,15" stroke="#e5e5e5" fill="none" strokeWidth="2"/>
        <path d="M20,40 C 25,38, 30,35, 30,30" stroke="#a3a3a3" fill="none" strokeWidth="1.5" />
        <path d="M80,40 C 75,38, 70,35, 70,30" stroke="#a3a3a3" fill="none" strokeWidth="1.5" />
    </svg>
);

const Toiling: React.FC = () => (
    <svg viewBox="0 0 100 50" className="w-full h-auto max-w-xs mx-auto" aria-label="A figure toiling in a field under the sun">
        <circle cx="85" cy="10" r="6" fill="#fcd34d" />
        <path d="M40,50 C40,40 50,35 55,30 Q60,25 58,20" stroke="#e5e5e5" fill="none" strokeWidth="2" />
        <path d="M10,50 H90" stroke="#a3a3a3" fill="none" strokeWidth="1.5"/>
        <path d="M30,50 L32,40" stroke="#a3a3a3" fill="none" strokeWidth="1"/>
        <path d="M50,50 L52,40" stroke="#a3a3a3" fill="none" strokeWidth="1"/>
        <path d="M70,50 L72,40" stroke="#a3a3a3" fill="none" strokeWidth="1"/>
    </svg>
);

const PrayingOnMountain: React.FC = () => (
    <svg viewBox="0 0 100 50" className="w-full h-auto max-w-xs mx-auto" aria-label="A figure praying on a mountaintop">
        <path d="M0,50 L20,30 L40,40 L60,20 L80,35 L100,50 Z" fill="#404040" />
        <circle cx="50" cy="18" r="3" fill="#e5e5e5"/>
        <path d="M47,22 C45,30 55,30 53,22" stroke="#e5e5e5" fill="none" strokeWidth="1.5" />
    </svg>
);

const OrphanInRain: React.FC = () => (
    <svg viewBox="0 0 100 50" className="w-full h-auto max-w-xs mx-auto" aria-label="A small figure huddled in the rain">
        <path d="M50,35 C 40,35 40,45 50,45 C 60,45 60,35 50,35" fill="#e5e5e5" />
        <path d="M45,40 a5,5 0 1,0 10,0" stroke="#e5e5e5" fill="none" strokeWidth="1.5"/>
        <path d="M20,10 L15,20" stroke="#a3a3a3" fill="none" strokeWidth="1"/>
        <path d="M40,5 L35,15" stroke="#a3a3a3" fill="none" strokeWidth="1"/>
        <path d="M60,12 L55,22" stroke="#a3a3a3" fill="none" strokeWidth="1"/>
        <path d="M80,8 L75,18" stroke="#a3a3a3" fill="none" strokeWidth="1"/>
    </svg>
);

const CarryingBurdens: React.FC = () => (
    <svg viewBox="0 0 100 50" className="w-full h-auto max-w-xs mx-auto" aria-label="A figure carrying a heavy load">
        <path d="M45,30 C 40,40 60,40 55,30" stroke="#e5e5e5" fill="none" strokeWidth="2"/>
        <rect x="35" y="15" width="30" height="15" rx="5" fill="#a3a3a3"/>
        <circle cx="50" cy="28" r="3" fill="#e5e5e5"/>
    </svg>
);

const VoiceFromHeaven: React.FC = () => (
    <svg viewBox="0 0 100 50" className="w-full h-auto max-w-xs mx-auto" aria-label="A voice from heaven shining a light down">
        <path d="M30,10 L50,40 L70,10" fill="rgba(252, 211, 77, 0.3)"/>
        <circle cx="50" cy="40" r="3" fill="#e5e5e5"/>
        <path d="M47,42 C45,50 55,50 53,42" stroke="#e5e5e5" fill="none" strokeWidth="1.5" />
    </svg>
);

const SoccerPlayer: React.FC = () => (
    <svg viewBox="0 0 100 50" className="w-full h-auto max-w-xs mx-auto" aria-label="A figure kicking a soccer ball">
        <path d="M40,20 L50,30 L65,25" stroke="#e5e5e5" fill="none" strokeWidth="2" />
        <circle cx="42" cy="18" r="3" fill="#e5e5e5"/>
        <circle cx="75" cy="35" r="4" fill="#e5e5e5" />
    </svg>
);

const Palace: React.FC = () => (
    <svg viewBox="0 0 100 50" className="w-full h-auto max-w-xs mx-auto" aria-label="A traditional Korean palace gate">
        <path d="M20,45 H80" stroke="#e5e5e5" fill="none" strokeWidth="2" />
        <path d="M25,45 V30 H35 V45" stroke="#a3a3a3" fill="none" strokeWidth="1.5" />
        <path d="M65,45 V30 H75 V45" stroke="#a3a3a3" fill="none" strokeWidth="1.5" />
        <path d="M10,30 Q50,15 90,30" stroke="#e5e5e5" fill="none" strokeWidth="2" />
        <path d="M15,30 Q50,20 85,30" stroke="#a3a3a3" fill="none" strokeWidth="1.5" />
    </svg>
);

const HotSun: React.FC = () => (
    <svg viewBox="0 0 100 50" className="w-full h-auto max-w-xs mx-auto" aria-label="A hot sun beating down on fields">
        <circle cx="50" cy="20" r="10" fill="#fcd34d" />
        <path d="M50,32 C 55,35 60,32 65,35" stroke="#a3a3a3" fill="none" strokeWidth="1" strokeDasharray="2 2" />
        <path d="M30,32 C 35,35 40,32 45,35" stroke="#a3a3a3" fill="none" strokeWidth="1" strokeDasharray="2 2" />
        <path d="M10,45 H90" stroke="#e5e5e5" fill="none" strokeWidth="2"/>
    </svg>
);

const FamilySilhouette: React.FC = () => (
    <svg viewBox="0 0 100 50" className="w-full h-auto max-w-xs mx-auto" aria-label="A silhouette of a family">
        <circle cx="35" cy="25" r="4" fill="#e5e5e5" />
        <path d="M32,30 C30,40 40,40 38,30" stroke="#e5e5e5" fill="none" strokeWidth="1.5" />
        <circle cx="50" cy="22" r="5" fill="#e5e5e5" />
        <path d="M47,28 C45,45 55,45 53,28" stroke="#e5e5e5" fill="none" strokeWidth="2" />
        <circle cx="65" cy="25" r="4" fill="#e5e5e5" />
        <path d="M62,30 C60,40 70,40 68,30" stroke="#e5e5e5" fill="none" strokeWidth="1.5" />
    </svg>
);

const Preaching: React.FC = () => (
    <svg viewBox="0 0 100 50" className="w-full h-auto max-w-xs mx-auto" aria-label="A figure preaching to a small crowd">
        <circle cx="50" cy="18" r="4" fill="#e5e5e5"/>
        <path d="M47,23 C45,35 55,35 53,23" stroke="#e5e5e5" fill="none" strokeWidth="2" />
        <circle cx="30" cy="30" r="3" fill="#a3a3a3"/>
        <path d="M28,34 C27,42 33,42 32,34" stroke="#a3a3a3" fill="none" strokeWidth="1.5" />
        <circle cx="70" cy="30" r="3" fill="#a3a3a3"/>
        <path d="M68,34 C67,42 73,42 72,34" stroke="#a3a3a3" fill="none" strokeWidth="1.5" />
    </svg>
);

const RefinedGold: React.FC = () => (
    <svg viewBox="0 0 100 50" className="w-full h-auto max-w-xs mx-auto" aria-label="Gold being refined in a crucible over a fire">
        <path d="M35,30 C35,45 65,45 65,30 L60,20 H40 Z" fill="#404040"/>
        <ellipse cx="50" cy="22" rx="8" ry="3" fill="#fcd34d"/>
        <path d="M40,45 C42,50 48,48 50,45" stroke="#ef4444" fill="none" strokeWidth="1.5"/>
        <path d="M50,45 C52,50 58,48 60,45" stroke="#f97316" fill="none" strokeWidth="1.5"/>
    </svg>
);

const PrisonBars: React.FC = () => (
    <svg viewBox="0 0 100 50" className="w-full h-auto max-w-xs mx-auto" aria-label="View through prison bars">
        <path d="M30 10 V 40" stroke="#a3a3a3" strokeWidth="3" />
        <path d="M50 10 V 40" stroke="#e5e5e5" strokeWidth="4" />
        <path d="M70 10 V 40" stroke="#a3a3a3" strokeWidth="3" />
        <path d="M20 15 H 80" stroke="#a3a3a3" strokeWidth="2" />
        <path d="M20 35 H 80" stroke="#a3a3a3" strokeWidth="2" />
    </svg>
);

const HungryDog: React.FC = () => (
    <svg viewBox="0 0 100 50" className="w-full h-auto max-w-xs mx-auto" aria-label="A dog looking at a loaf of bread">
        <path d="M30,40 C 25,30 40,30 40,35 Q 45,45 35,42 Z" stroke="#e5e5e5" fill="none" strokeWidth="2" />
        <rect x="60" y="35" width="20" height="8" rx="3" fill="#a3a3a3" />
    </svg>
);

const MountainSpring: React.FC = () => (
    <svg viewBox="0 0 100 50" className="w-full h-auto max-w-xs mx-auto" aria-label="Fresh spring water flowing from rocks">
        <path d="M20,10 L40,30 L30,45 L50,40 L60,50 L70,30 L80,40" fill="#404040" />
        <path d="M45,30 C50,35 45,40 50,45 Q55,50 60,48" stroke="#38bdf8" fill="none" strokeWidth="2" />
    </svg>
);

const Illustration: React.FC<IllustrationProps> = ({ illustrationId }) => {
  const renderIllustration = () => {
    switch (illustrationId) {
      case 'reedsInWind': return <ReedsInWind />;
      case 'mountainPath': return <MountainPath />;
      case 'pottery': return <Pottery />;
      case 'toiling': return <Toiling />;
      case 'prayingOnMountain': return <PrayingOnMountain />;
      case 'orphanInRain': return <OrphanInRain />;
      case 'carryingBurdens': return <CarryingBurdens />;
      case 'voiceFromHeaven': return <VoiceFromHeaven />;
      case 'soccerPlayer': return <SoccerPlayer />;
      case 'palace': return <Palace />;
      case 'hotSun': return <HotSun />;
      case 'familySilhouette': return <FamilySilhouette />;
      case 'preaching': return <Preaching />;
      case 'refinedGold': return <RefinedGold />;
      case 'prisonBars': return <PrisonBars />;
      case 'hungryDog': return <HungryDog />;
      case 'mountainSpring': return <MountainSpring />;
      default:
        return null;
    }
  };

  return <div className="my-4 animate-fade-in">{renderIllustration()}</div>;
};

export default Illustration;