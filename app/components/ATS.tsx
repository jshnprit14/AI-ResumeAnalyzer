// import React from 'react';

// interface Suggestion {
//   type: 'good' | 'improve';
//   tip: string;
// }

// interface ATSProps {
//   score: number;
//   suggestions: Suggestion[];
// }

// const ATS: React.FC<ATSProps> = ({ score, suggestions }) => {
//   const isGood = score > 69;
//   const isWarning = score > 49;

//   const gradientClass = isGood
//     ? 'from-green-100'
//     : isWarning
//     ? 'from-yellow-100'
//     : 'from-red-100';

//   const iconSrc = isGood
//     ? '/icons/ats-good.svg'
//     : isWarning
//     ? '/icons/ats-warning.svg'
//     : '/icons/ats-bad.svg';

//   const subtitle = isGood
//     ? 'Excellent ATS fit'
//     : isWarning
//     ? 'Fair ATS match'
//     : 'Needs ATS improvement';

//   return (
//     <div className={`rounded-3xl border border-white/30 bg-linear-to-b ${gradientClass} p-6 shadow-sm shadow-slate-200`}>
//       <div className="rounded-3xl bg-white/90 p-6 shadow-sm shadow-slate-100">
//         <div className="flex items-center gap-4 mb-6">
//           <img src={iconSrc} alt="ATS icon" className="h-12 w-12" />
//           <div>
//             <h2 className="text-2xl font-semibold text-slate-900">ATS Score - {score}/100</h2>
//             <p className="text-sm text-slate-500">{subtitle}</p>
//           </div>
//         </div>

//         <div className="mb-6">
//           <h3 className="text-lg font-medium text-slate-800 mb-2">Resume scanning results</h3>
//           <p className="text-sm text-slate-500">
//             This score reflects how well your resume is likely to perform against applicant tracking systems. Use the suggestions below to improve your chances of passing ATS filters.
//           </p>
//         </div>

//         <div className="space-y-4 mb-6">
//           {suggestions.map((suggestion, index) => {
//             const suggestionIcon = suggestion.type === 'good' ? '/icons/check.svg' : '/icons/warning.svg';
//             const suggestionAlt = suggestion.type === 'good' ? 'Positive tip' : 'Improvement tip';
//             const suggestionTextClass = suggestion.type === 'good' ? 'text-green-700' : 'text-amber-700';

//             return (
//               <div key={index} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
//                 <img src={suggestionIcon} alt={suggestionAlt} className="mt-1 h-5 w-5 flex-shrink-0" />
//                 <p className={`text-sm font-medium ${suggestionTextClass}`}>{suggestion.tip}</p>
//               </div>
//             );
//           })}
//         </div>

//         <p className="text-sm text-slate-600 italic">
//           Keep refining your resume to improve ATS performance and make your application easier for recruiters to find.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default ATS;

import { cn } from "~/lib/utils";

const ATS = ({
  score,
  suggestions,
}: {
  score: number;
  suggestions: { type: "good" | "improve"; tip: string }[];
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl shadow-md w-full bg-gradient-to-b to-light-white p-8 flex flex-col gap-4",
        score > 69
          ? "from-green-100"
          : score > 49
          ? "from-yellow-100"
          : "from-red-100"
      )}
    >
      <div className="flex flex-row gap-4 items-center">
        <img
          src={
            score > 69
              ? "/icons/ats-good.svg"
              : score > 49
              ? "/icons/ats-warning.svg"
              : "/icons/ats-bad.svg"
          }
          alt="ATS"
          className="w-10 h-10"
        />
        <p className="text-2xl font-semibold">ATS Score - {score}/100</p>
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-medium text-xl">
          How well does your resume pass through Applicant Tracking Systems?
        </p>
        <p className="text-lg text-gray-500">
          Your resume was scanned like an employer would. Here's how it
          performed:
        </p>
        {suggestions.map((suggestion, index) => (
          <div className="flex flex-row gap-2 items-center" key={index}>
            <img
              src={
                suggestion.type === "good"
                  ? "/icons/check.svg"
                  : "/icons/warning.svg"
              }
              alt="ATS"
              className="w-4 h-4"
            />
            <p className="text-lg text-gray-500">{suggestion.tip}</p>
          </div>
        ))}
        <p className="text-lg text-gray-500">
          Want a better score? Improve your resume by applying the suggestions
          listed below.
        </p>
      </div>
    </div>
  );
};

export default ATS;