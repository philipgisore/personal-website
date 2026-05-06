import React from 'react';

export default function About() {
  const skills = [
    { category: 'Languages',      items: ['JavaScript', 'Python', 'TypeScript'] },
    { category: 'Frontend',       items: ['React', 'Next.js', 'Tailwind CSS', 'HTML5', 'CSS3'] },
    { category: 'Backend',        items: ['Node.js', 'Django', 'REST APIs', 'Express.js'] },
    { category: 'Databases',      items: ['MySQL', 'PostgreSQL', 'MongoDB'] },
    { category: 'Cloud & DevOps', items: ['Firebase'] },
    { category: 'Tools',          items: ['Git', 'Figma', 'VS Code'] },
  ];

  return (
    <section
      id='about'
      className='min-h-screen bg-[#1c1c1c] flex flex-col items-center'
      style={{ padding: '4rem 2rem' }}
    >
      {/* push content below fixed mobile header */}
    <div className="md:hidden" style={{ height: '80px', flexShrink: 0 }} />
      <div className='w-full' style={{ maxWidth: '900px' }}>

        {/* ── About Me ── */}
        <div className='section-header flex items-center gap-2 mb-8'>
          <svg width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='#ffffff' strokeWidth='1.5' style={{ flexShrink: 0 }}>
            <path d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2' />
            <circle cx='12' cy='7' r='4' />
          </svg>
          <h2 className='text-3xl font-bold text-white m-0'>About Me</h2>
        </div>

        <div className='mb-16'>
          <p className='text-[15px] leading-[1.85] text-slate-300 mb-6'>
            I'm a Business Information Technology student who cares about building things that actually work —
            not just code that runs, but solutions that solve real problems. My interest sits
            where clean code meets the real world, whether that's making a frontend feel
            responsive or thinking through what's happening on the backend.
          </p>
          <p className='text-[15px] leading-[1.85] text-slate-300 mb-6'>
            I work with React, Node.js, and Python across coursework, personal projects, and
            open-source contributions. I got into development by pulling apart websites just to
            see how they worked — that curiosity turned into a genuine drive to build seamless,
            purposeful digital experiences. I've learned that the difference between something
            that works and something people actually want to use is almost always in the details.
          </p>
          <p className='text-[15px] leading-[1.85] text-slate-300 mb-6'>
            I thrive in collaborative environments and I'm actively looking for internship and
            junior developer opportunities where I can contribute meaningfully and grow fast —
            without skipping the details along the way.
          </p>
        </div>

        {/* ── Skills ── */}
        <div className='section-header flex items-center gap-2 mb-12'>
          <svg width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='#ffffff' strokeWidth='1.5' style={{ flexShrink: 0 }}>
            <path d='M12 20h9' />
            <path d='M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z' />
          </svg>
          <h2 className='text-3xl font-bold text-white m-0'>Skills</h2>
        </div>

        <div
          className='mb-16 skills-grid'
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            columnGap: '3rem',
            rowGap: '2.5rem',
          }}
        >
          {skills.map((group) => (
            <div key={group.category}>
              <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: 'white', marginBottom: '16px' }}>
                {group.category}
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      padding: '4px 12px',
                      fontSize: '12.5px',
                      color: '#cbd5e1',
                      borderRadius: '9999px',
                      border: '1px solid #475569',
                      background: 'transparent',
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ── Education ── */}
        <div className='section-header flex items-center gap-2 mb-8'>
          <svg width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='#ffffff' strokeWidth='1.5' style={{ flexShrink: 0 }}>
            <path d='M22 10v6M2 10l10-5 10 5-10 5z' />
            <path d='M6 12v5c3 3 9 3 12 0v-5' />
          </svg>
          <h2 className='text-3xl font-bold text-white m-0'>Education</h2>
        </div>

        <div
          className='w-full transition hover:border-slate-500'
          style={{
            background: '#242424',
            border: '1px solid #2e2e2e',
            borderRadius: '12px',
            padding: '1.25rem 1.5rem',
          }}
        >
          <h3 className='text-white font-bold text-[16px] leading-snug mb-1'>
            Bachelor of Business Information Technology{' '}
            <span className='text-white'>@ Multimedia University of Kenya</span>
          </h3>
          <p className='text-slate-400 text-[13.5px] mb-3'>Nairobi, Kenya</p>
          <p className='text-[13.5px] text-slate-300 mb-2'>
            <span className='font-bold text-white'>Status: </span>
            Currently Studying
          </p>
          <p className='text-[13.5px] text-slate-300 leading-relaxed'>
            <span className='font-bold text-white'>Relevant coursework: </span>
            Software Engineering, Data Structures and Algorithms, Database Systems,
            Web Development, Networking, and Human Computer Interaction.
          </p>
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            column-gap: 2rem !important;
          }
        }
        @media (max-width: 480px) {
          #about {
            padding: 3rem 1.25rem !important;
          }
          #about h2 {
            font-size: 1.4rem !important;
            white-space: nowrap;
          }
          .section-header {
            flex-wrap: nowrap !important;
            overflow: hidden;
          }
        }
        @media (max-width: 380px) {
          .skills-grid {
            grid-template-columns: repeat(1, 1fr) !important;
          }
          #about h2 {
            font-size: 1.25rem !important;
          }
        }
      `}</style>
    </section>
  );
}