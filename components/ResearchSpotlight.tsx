'use client';

interface ResearchSpotlightProps {
  isDark: boolean;
}

export default function ResearchSpotlight({ isDark }: ResearchSpotlightProps) {
  const bgClass = isDark ? 'bg-[#0a0e27]' : 'bg-white';
  const textClass = isDark ? 'text-white' : 'text-gray-900';
  const textMutedClass = isDark ? 'text-gray-400' : 'text-gray-600';

  return (
    <div className={`${bgClass} ${textClass} space-y-6 animate-fade-in pt-12`}>
      <div className="space-y-2">
        <p className={`text-xs sm:text-sm uppercase tracking-wider ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          
        </p>
        <h3 className="text-2xl sm:text-3xl font-bold">MY RESEARCH</h3>
        <p className={`text-sm sm:text-base leading-relaxed ${textMutedClass}`}>
          
        </p>
      </div>

      {/* Research Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {/* Project 1 */}
        <div className={`${isDark ? 'bg-gray-900' : 'bg-gray-100'} rounded-lg p-6 space-y-4`}>
          <h4 className="text-base sm:text-lg font-semibold">
            Literature Review on Waste Management Using Blockchain Technology
          </h4>
          <p className={`text-xs sm:text-sm leading-relaxed ${textMutedClass}`}>
          This literature review examines how blockchain technology can improve transparency, traceability and coordination
          in waste management systems, particularly in smart city environments. The study analyzes existing research and 
          case studies across solid, electronic, medical and industrial waste to evaluate the feasibility of using tamper-proof 
          blockchain platforms for responsible waste handling. It also identifies key technical and operational challenges, highlighting 
          opportunities for future research in sustainable and technology-driven waste management.
          </p>
          <a href="https://link.springer.com/chapter/10.1007/978-981-19-6631-6_35" className="text-blue-400 hover:text-blue-300 text-sm font-medium inline-block">
            View chapter →
          </a>
        </div>

        {/* Project 2 */}
        <div className={`${isDark ? 'bg-gray-900' : 'bg-gray-100'} rounded-lg p-6 space-y-4`}>
          <h4 className="text-base sm:text-lg font-semibold">
          SemEval 2026 Task 5 — Ambiguous Story Plausibility Rating
         </h4>
          <p className={`text-xs sm:text-sm leading-relaxed ${textMutedClass}`}>
          Worked on SemEval 2026 Task 5, where we built a narrative understanding model to predict how plausible 
          different word senses are within short, ambiguous stories. I fine-tuned a RoBERTa-based regression model on
          the official AmbiStory dataset and evaluated it using SemEval’s standard metrics, including Spearman correlation and within-standard-deviation accuracy. 
          This project strengthened our experience in NLP modeling, semantic ambiguity and benchmark-driven evaluation.
          </p>
          <a href="https://github.com/tanvinimbalkar/SemEval-2026-Task-5-Ambiguous-Story-Plausibility-Rating" className="text-blue-400 hover:text-blue-300 text-sm font-medium inline-block">
            View project →
          </a>
        </div>

        {/* Project 3 */}
        
      </div>
    </div>
  );
}

