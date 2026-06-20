// type ScoreBadgeProps = {
//   score: number;
// };

// const ScoreBadge = ({ score }: ScoreBadgeProps) => {
//   const isStrong = score > 70;
//   const isGoodStart = score > 49;

//   const badgeStyles = isStrong
//     ? 'bg-badge-green text-green-600'
//     : isGoodStart
//     ? 'bg-badge-yellow text-yellow-600'
//     : 'bg-badge-red text-red-600';

//   const label = isStrong ? 'Strong' : isGoodStart ? 'Good Start' : 'Needs Work';

//   return (
//     <div className={`inline-flex rounded-full px-3 py-1 text-sm font-semibold ${badgeStyles}`}>
//       <p>{label}</p>
//     </div>
//   );
// };

// export default ScoreBadge;

import React from 'react'

interface ScoreBadgeProps {
  score: number;
}

const ScoreBadge: React.FC<ScoreBadgeProps> = ({ score }) => {
  let badgeColor: string ;
  let badgeText: string;
  if (score > 70) {
  badgeColor = 'bg-badge-green text-green-600';
  badgeText = 'Strong';
} else if (score > 49) {
    badgeColor = 'bg-badge-yellow text-yellow-600';
    badgeText= 'Good Start';
} else {
  badgeColor = 'bg-badge-red text-red-600';
  badgeText ='Needs Work';
}
return (
  <div className={`px-3 py-1 rounded-full ${badgeColor}`}>
    <p className="text-sm font-medium">{badgeText}</p> 
  </div>
);
};

export default ScoreBadge;