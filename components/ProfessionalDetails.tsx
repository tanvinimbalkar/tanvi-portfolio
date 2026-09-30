'use client';

interface ProfessionalDetailsProps {
  isDark: boolean;
}

export default function ProfessionalDetails({ isDark }: ProfessionalDetailsProps) {
  const bgClass = isDark ? 'bg-[#0a0e27]' : 'bg-white';
  const textClass = isDark ? 'text-white' : 'text-gray-900';
  const textMutedClass = isDark ? 'text-gray-400' : 'text-gray-600';

  return (
    <div className={`${bgClass} ${textClass} space-y-8 animate-fade-in`}>
      {/* Affiliation */}
      <div>
        <p className={`text-xs sm:text-sm uppercase tracking-wider mb-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          University of Colorado Boulder
        </p>
        <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Tanvi Nimbalkar
        </h2>
      </div>

      {/* Bio */}
      <div className="space-y-4">
        <p className="text-sm sm:text-base leading-relaxed">
          &ldquo;I enjoy building data-driven solutions that are both impactful and well-designed. 
          My work focuses on clean, maintainable code, collaborative problem-solving, and 
          adapting quickly as ideas evolve. As a Data Science graduate student working across 
          machine learning, statistical analysis, and research-oriented projects, I care as 
          much about clarity and design as I do about results. I'm always happy to connect 
          and talk through interesting problems.&rdquo;
        </p>
      </div>

      {/* Skill Tags */}
      <div className="flex flex-wrap gap-3">
        <span className={`px-4 py-2 ${isDark ? 'bg-gray-800' : 'bg-gray-200'} text-white text-xs sm:text-sm font-medium rounded-full transition-colors duration-200 cursor-default`}>
          MACHINE LEARNING & NLP
        </span>
        <span className={`px-4 py-2 ${isDark ? 'bg-gray-800' : 'bg-gray-200'} text-white text-xs sm:text-sm font-medium rounded-full transition-colors duration-200 cursor-default`}>
          DATA ANALYSIS & VISUALIZATION
        </span>
        <span className={`px-4 py-2 ${isDark ? 'bg-gray-800' : 'bg-gray-200'} text-white text-xs sm:text-sm font-medium rounded-full transition-colors duration-200 cursor-default`}>
          AGENTIC AI
        </span>
      </div>

      {/* Contact Email */}
      <div>
        <a
          href="mailto:tanvi.nimbalkar25@gmail.com"
          className="text-blue-400 hover:text-blue-300 transition-colors duration-200 text-sm sm:text-base"
        >
          tanvi.nimbalkar25@gmail.com
        </a>
      </div>

      {/* Current Focus */}
      <div className={`space-y-4 pt-4 border-t ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
        <h3 className="text-lg sm:text-xl font-semibold">Current focus</h3>
        <p className={`text-sm sm:text-base leading-relaxed ${textMutedClass}`}>
          I'm working on questions around state, consistency, and evaluation in learning driven pipelines, 
          especially in settings where data arrives incrementally rather than as a static dataset.
        </p>
        <div className="space-y-2 pt-2">
          <h4 className={`text-xs sm:text-sm uppercase tracking-wider ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            AREAS OF ATTENTION
          </h4>
          <ul className="space-y-2">
            <li className={`flex items-start ${textMutedClass}`}>
              <span className="mr-2 text-blue-400">•</span>
              <span className="text-sm sm:text-base">Evaluation and benchmarking for NLP systems</span>
            </li>
            <li className={`flex items-start ${textMutedClass}`}>
              <span className="mr-2 text-blue-400">•</span>
              <span className="text-sm sm:text-base">Reproducible ML experimentation pipelines</span>
            </li>
            <li className={`flex items-start ${textMutedClass}`}>
              <span className="mr-2 text-blue-400">•</span>
              <span className="text-sm sm:text-base">Bias, data quality, and model reliability</span>
            </li>
          </ul>
        </div>
      </div>
      
    </div>
  );
}

