// import React from "react"
// import { cn } from "~/lib/utils"
// import {
//   Accordion,
//   AccordionContent,
//   AccordionHeader,
//   AccordionItem,
// } from "./Accordion"

// const ScoreBadge = ({ score }: { score: number }) => {
//   const isGood = score > 69
//   const isWarn = score > 39 && score <= 69

//   const bgClass = isGood
//     ? "bg-emerald-100"
//     : isWarn
//     ? "bg-amber-100"
//     : "bg-red-100"

//   const textClass = isGood
//     ? "text-emerald-700"
//     : isWarn
//     ? "text-amber-700"
//     : "text-red-700"

//   const icon = isGood ? (
//     <span aria-hidden="true">✓</span>
//   ) : isWarn ? (
//     <span aria-hidden="true">!</span>
//   ) : (
//     <span aria-hidden="true">✕</span>
//   )

//   return (
//     <span
//       className={cn(
//         "inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-semibold",
//         bgClass,
//         textClass
//       )}
//     >
//       <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/80 text-base font-bold">
//         {icon}
//       </span>
//       <span>{score}/100</span>
//     </span>
//   )
// }

// const CategoryHeader = ({
//   title,
//   categoryScore,
// }: {
//   title: string
//   categoryScore: number
// }) => (
//   <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
//     <h3 className="text-base font-semibold text-slate-900">{title}</h3>
//     <ScoreBadge score={categoryScore} />
//   </div>
// )

// const CategoryContent = ({
//   tips,
// }: {
//   tips: {
//     type: "good" | "improve"
//     tip: string
//     explanation: string
//   }[]
// }) => {
//   if (!tips || tips.length === 0) {
//     return (
//       <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-4 text-sm text-slate-500">
//         No feedback available yet.
//       </div>
//     )
//   }

//   return (
//     <div className="space-y-6">
//       <div className="grid gap-4 md:grid-cols-2">
//         {tips.map((tip) => (
//           <div
//             key={tip.tip}
//             className="rounded-3xl border border-slate-200 bg-slate-50 p-4"
//           >
//             <div className="flex items-start gap-3">
//               <span
//                 className={cn(
//                   "mt-1 inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-2xl text-sm font-bold",
//                   tip.type === "good"
//                     ? "bg-emerald-100 text-emerald-700"
//                     : "bg-amber-100 text-amber-700"
//                 )}
//               >
//                 {tip.type === "good" ? "✓" : "!"}
//               </span>
//               <div>
//                 <p className="text-sm font-semibold text-slate-900">{tip.tip}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="grid gap-4">
//         {tips.map((tip) => (
//           <div
//             key={`${tip.tip}-${tip.explanation}`}
//             className={cn(
//               "rounded-3xl border p-4",
//               tip.type === "good"
//                 ? "border-emerald-200 bg-emerald-50 text-emerald-800"
//                 : "border-amber-200 bg-amber-50 text-amber-900"
//             )}
//           >
//             <p className="text-sm font-semibold capitalize">{tip.type === "good" ? "Positive" : "Improvement"}</p>
//             <p className="mt-2 text-sm leading-6">{tip.explanation}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// const Details = ({ feedback }: { feedback: Feedback }) => {
//   const sections = [
//     {
//       id: "tone-style",
//       title: "Tone & Style",
//       score: feedback.toneAndStyle.score,
//       tips: feedback.toneAndStyle.tips,
//     },
//     {
//       id: "content",
//       title: "Content",
//       score: feedback.content.score,
//       tips: feedback.content.tips,
//     },
//     {
//       id: "structure",
//       title: "Structure",
//       score: feedback.structure.score,
//       tips: feedback.structure.tips,
//     },
//     {
//       id: "skills",
//       title: "Skills",
//       score: feedback.skills.score,
//       tips: feedback.skills.tips,
//     },
//   ]

//   return (
//     <div className="rounded-[2rem] border border-slate-200 bg-white p-1 shadow-sm">
//       <Accordion allowMultiple defaultOpen="tone-style" className="divide-y divide-slate-200 rounded-[2rem] bg-white">
//         {sections.map((section) => (
//           <AccordionItem key={section.id} id={section.id} className="first:rounded-t-[2rem] last:rounded-b-[2rem]">
//             <AccordionHeader itemId={section.id} className="px-5 py-4 sm:px-6">
//               <CategoryHeader title={section.title} categoryScore={section.score} />
//             </AccordionHeader>
//             <AccordionContent itemId={section.id} className="px-5 pb-5 sm:px-6">
//               <CategoryContent tips={section.tips} />
//             </AccordionContent>
//           </AccordionItem>
//         ))}
//       </Accordion>
//     </div>
//   )
// }

// export default Details
import { cn } from "~/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionItem,
} from "./Accordion";

const ScoreBadge = ({ score }: { score: number }) => {
  return (
    <div
      className={cn(
        "flex flex-row gap-1 items-center px-2 py-0.5 rounded-[96px]",
        score > 69
          ? "bg-badge-green"
          : score > 39
          ? "bg-badge-yellow"
          : "bg-badge-red"
      )}
    >
      <img
        src={score > 69 ? "/icons/check.svg" : "/icons/warning.svg"}
        alt="score"
        className="size-4"
      />
      <p
        className={cn(
          "text-sm font-medium",
          score > 69
            ? "text-badge-green-text"
            : score > 39
            ? "text-badge-yellow-text"
            : "text-badge-red-text"
        )}
      >
        {score}/100
      </p>
    </div>
  );
};

const CategoryHeader = ({
  title,
  categoryScore,
}: {
  title: string;
  categoryScore: number;
}) => {
  return (
    <div className="flex flex-row gap-4 items-center py-2">
      <p className="text-2xl font-semibold">{title}</p>
      <ScoreBadge score={categoryScore} />
    </div>
  );
};

const CategoryContent = ({
  tips,
}: {
  tips: { type: "good" | "improve"; tip: string; explanation: string }[];
}) => {
  return (
    <div className="flex flex-col gap-4 items-center w-full">
      <div className="bg-gray-50 w-full rounded-lg px-5 py-4 grid grid-cols-2 gap-4">
        {tips.map((tip, index) => (
          <div className="flex flex-row gap-2 items-center" key={index}>
            <img
              src={
                tip.type === "good" ? "/icons/check.svg" : "/icons/warning.svg"
              }
              alt="score"
              className="size-5"
            />
            <p className="text-xl text-gray-500 ">{tip.tip}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-4 w-full">
        {tips.map((tip, index) => (
          <div
            key={index + tip.tip}
            className={cn(
              "flex flex-col gap-2 rounded-2xl p-4",
              tip.type === "good"
                ? "bg-green-50 border border-green-200 text-green-700"
                : "bg-yellow-50 border border-yellow-200 text-yellow-700"
            )}
          >
            <div className="flex flex-row gap-2 items-center">
              <img
                src={
                  tip.type === "good"
                    ? "/icons/check.svg"
                    : "/icons/warning.svg"
                }
                alt="score"
                className="size-5"
              />
              <p className="text-xl font-semibold">{tip.tip}</p>
            </div>
            <p>{tip.explanation}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const Details = ({ feedback }: { feedback: Feedback }) => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <Accordion>
        <AccordionItem id="tone-style">
          <AccordionHeader itemId="tone-style">
            <CategoryHeader
              title="Tone & Style"
              categoryScore={feedback.toneAndStyle.score}
            />
          </AccordionHeader>
          <AccordionContent itemId="tone-style">
            <CategoryContent tips={feedback.toneAndStyle.tips} />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem id="content">
          <AccordionHeader itemId="content">
            <CategoryHeader
              title="Content"
              categoryScore={feedback.content.score}
            />
          </AccordionHeader>
          <AccordionContent itemId="content">
            <CategoryContent tips={feedback.content.tips} />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem id="structure">
          <AccordionHeader itemId="structure">
            <CategoryHeader
              title="Structure"
              categoryScore={feedback.structure.score}
            />
          </AccordionHeader>
          <AccordionContent itemId="structure">
            <CategoryContent tips={feedback.structure.tips} />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem id="skills">
          <AccordionHeader itemId="skills">
            <CategoryHeader
              title="Skills"
              categoryScore={feedback.skills.score}
            />
          </AccordionHeader>
          <AccordionContent itemId="skills">
            <CategoryContent tips={feedback.skills.tips} />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Details;