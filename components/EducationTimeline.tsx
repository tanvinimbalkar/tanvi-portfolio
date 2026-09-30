'use client';

interface EducationTimelineProps {
  isDark: boolean;
}

export default function EducationTimeline({ isDark }: EducationTimelineProps) {
  const bgClass = isDark ? 'bg-[#0a0e27]' : 'bg-white';
  const textClass = isDark ? 'text-white' : 'text-gray-900';
  const textMutedClass = isDark ? 'text-gray-400' : 'text-gray-600';
  const cardBgClass = isDark ? 'bg-gray-900' : 'bg-gray-100';

  const universityRoles = [
    {
      date: 'AUG 2025 - MAY 2026',
      role: 'Teaching Assistant — BUSM 3020-001: Business and Financial Analytics I & II',
      company: 'University of Colorado Boulder, Leeds School of Business',
      details:
        'Assisted in teaching business and financial analytics concepts, including data analysis, visualization, and predictive modeling using Python, SQL, and Excel.',
    },
    {
      date: 'AUG 2025 - SEP 2025',
      role: 'Graduate Teaching Assistant — MSBX 5405-800: Struct Data Modeling/Analysis',
      company: 'University of Colorado Boulder, Leeds School of Business',
      details: '',
    },
    {
      date: 'JUN 2025 - DEC 2025',
      role: 'DMC Tech Assistant',
      company: 'University of Colorado Boulder',
      details:
        'Processed and categorized inventory items for faster reporting, built Tableau dashboards for checkout trends and overdue items, and turned item-level data into insights for inventory tracking and resource planning.',
    },
  ];

  const internships = [
    {
      date: 'JAN 2026 - SEPT 2026',
      role: 'Data Science Intern',
      company: 'Ramsi',
    },
    {
      date: 'MAY 2025 - AUG 2025',
      role: 'Software Development Intern',
      company: 'SIROS Tech',
    },
    {
      date: 'JULY 2023 - MAY 2024',
      role: 'Associate Engineer - Data Operations',
      company: 'Bajaj Markets',
    },
    {
      date: 'JAN 2023 - JUN 2023',
      role: 'Associate Software Engineer',
      company: 'Mindbody Software',
    },
    {
      date: 'NOV 2021 - FEB 2022',
      role: 'Logistics Intern',
      company: 'Mercedes Benz',
    },
    {
      date: 'DEC 2021 - JUN 2021',
      role: 'Web Development Intern',
      company: 'Digilytics Systems LLP',
    },
  ];

  return (
    <div className={`${bgClass} ${textClass} space-y-10 animate-fade-in pt-12`}>
      <section className="space-y-6">
        <h3 className="text-2xl font-bold sm:text-3xl">University</h3>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {universityRoles.map((role) => (
            <div key={`${role.role}-${role.date}`} className={`${cardBgClass} space-y-2 rounded-lg p-5`}>
              <p className={`text-xs uppercase tracking-wider ${textMutedClass}`}>{role.date}</p>
              <h4 className="text-base font-semibold">{role.role}</h4>
              <p className={`text-sm ${textMutedClass}`}>{role.company}</p>
              {role.details ? <p className={`text-sm leading-relaxed ${textMutedClass}`}>{role.details}</p> : null}
            </div>
          ))}
        </div>
      </section>
      <section className="space-y-6">
        <h3 className="text-2xl font-bold sm:text-3xl">Work</h3>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {internships.map((intern) => (
            <div key={`${intern.company}-${intern.date}`} className={`${cardBgClass} space-y-2 rounded-lg p-5`}>
              <p className={`text-xs uppercase tracking-wider ${textMutedClass}`}>{intern.date}</p>
              <h4 className="text-base font-semibold">{intern.role}</h4>
              <p className={`text-sm ${textMutedClass}`}>{intern.company}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

