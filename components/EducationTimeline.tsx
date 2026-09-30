'use client';

interface EducationTimelineProps {
  isDark: boolean;
}

const monthIndex: Record<string, number> = {
  JAN: 0,
  FEB: 1,
  MAR: 2,
  APR: 3,
  APRIL: 3,
  MAY: 4,
  JUN: 5,
  JUNE: 5,
  JUL: 6,
  JULY: 6,
  AUG: 7,
  SEP: 8,
  SEPT: 8,
  OCT: 9,
  NOV: 10,
  DEC: 11,
};

function endDateValue(date: string) {
  const end = date.split('-').pop()?.trim() ?? '';
  const [month, year] = end.split(/\s+/);
  return Number(year) * 12 + (monthIndex[month?.toUpperCase()] ?? 0);
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
        <h3 className="text-center text-2xl font-bold sm:text-3xl">Work</h3>
        <div className="mx-auto flex max-w-2xl flex-col gap-6">
          {[...internships]
            .sort((a, b) => endDateValue(b.date) - endDateValue(a.date))
            .map((intern) => (
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

