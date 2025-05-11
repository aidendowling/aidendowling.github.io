export default class DataService {
  _data = {
    projectRepo: 'https://github.com/aidendowling/portfolio',
    react95Repo: 'https://github.com/React95/React95',
    items: [
      {
        id: 'about',
        name: 'About.txt',
        icon: 'info_bubble',
        content: {
          paragraphs: [
            "Hi! I am currently a student at the Georgia Institute of Technology, pursuing a bachelors in Computer Engineering.",
            "I am a transfer student from the University of Georgia, where I maintained a 4.0 GPA as a proud member of the Morehead Honors College and a recipient of the Woodruff Scholarship. I wouldn't be where I am today without UGA, so it definitely makes rivalry games complicated.",
            'My focus lies in growing as a back-end developer, with my main technologies currently being Java, Node., SQL, and Python. I am always seeking opportunities to grow my skills and find new domains Im passionate about.',
            'With each day, I am inspired by the possibilities within the computing industry and look forward to leveraging my education at Georgia Tech to make meaningful contributions in this dynamic field.',
          ],
        },
      },
      {
        id: 'resume',
        name: 'Resume.txt',
        icon: 'notepad_2',
        content: {
          resumeLink:
            'https://docs.google.com/document/d/1jA1kGREhj6hkK6JYFZ8P0sNoRQBjVIS_Zudb5uMhvU0/export?format=pdf',
          workExperience: [
            {
              jobTitle: 'Technical Product Manager and Software Engineer Intern ',
              company: 'Hewlett Packard Enterprise',
              location: 'Atlanta, GA',
              period: 'MAY 2025 – AUG 2025',
              accomplishments: [
                'In progress!!',
              ],
            },
            {
              jobTitle: 'Software Engineering Undergraduate Researcher',
              company: 'Georgia Tech Research Institute',
              location: 'Atlanta, GA',
              period: 'JAN 2025 – MAY 2025',
              accomplishments: [
                'Engineered an AI-powered device with 95% fox detection accuracy, dispensing vaccine biscuits around Midtown Atlanta',
                'Designed and tested a durable device housing in AutoCAD, integrating ML software built on Google Cloud and TensorFlow',
                'Achieved 98% system uptime by integrating machine learning for autonomous operation, operating 24/7 around campus',
              ],
            },
            {
              jobTitle: 'Cybersecurity Intern',
              company: 'Cyberarch',
              location: 'Atlanta, GA',
              period: 'AUG 2024 – DEC 2024',
              accomplishments: [
                'Design & implemented cybersecurity response plans for 2 non-profit organizations, reducing incident response time by 30%',
                'Led a secure login project for deployment at CyberArch, implemented onto our services for 50+ employees  ',
                'Published 2 research papers on cybersecurity and data-driven strategies, contributing to advancements in security protocols ',
              ],
            },
            {
              jobTitle: 'Engineering Project Management Intern',
              company: 'NEED Project',
              location: 'Washington, D.C.',
              period: 'MAY 2024 – AUG 2024',
              accomplishments: [
                'Headed the design, logistics, and execution of multiple engineering conferences with 500+ participants',
                'Assisted in designing comprehensive computer science and electrical engineering projects for 5 client companies',
                'Developed programs in collaboration with companies such as CITGO, LUMA, Phillips 66, NEED, and Exelon',
                'Previous Computer Engineering Intern for Summer 2023',
              ],
            },
          ],
          education: [
            {
              credit: 'Bachelor in Computer Engineering',
              place: 'Georgia Institute of Technology, Atlanta, Georgia',
              gpa: '4.0/4.0 GPA',
              period: 'AUG 2023 – DEC 2026',
            },
          ],
        },
      },
      {
        id: 'projects',
        name: 'Projects.txt',
        icon: 'flying_through_space_100',
        content: {
          projects: [
            {
              title: 'Ramblin Reps',
              description:
                'A full-stack advanced social media platform for powerlifters to share and track their progress on squat, bench, and deadlift. Featured profile customization, leaderboards, achievements, graphs, AI-generated workout plans, and gym finder.',
              myRole:
                'Co-creator, led all back-end efforts.',
              techStack:
                'Python, Django, MongoDB, Node.js',
              url: 'https://www.ramblinreps.pythonanywhere.com/',
            },
            {
              title: 'Whos got next music?',
              description:
                'Curated for rapper Offset to develop an online social media application that allowed for in-app music creation, live streaming, and video streaming. Enables users to follow, vote, and chat with singers, publishing to Google Play & Apple to over 10,000 concurrent users.',
              myRole: 'Back-end Engineer',
              techStack: 'Java, Springboot, Node.js, AWS Cloud Services',
            },
            {
              title: 'Student Loan Tracker & Budgeting App',
              description:
                "Created a full-stack advanced budgeting application for college students utilizing React, Recharts, and MongoDB. Customizable budgets, expense tracking, student loan visualization and analysis, and avatar customization.",
              myRole:
                "Co-creator, focused on back-end development.",
              techStack: 'React, MongoDB',
              repo: 'https://github.com/aidendowling/walleythewallet',
            },
            {
              title: 'My Portfolio Site',
              description:
                'My personal website in old-school Windows95 design.',
              techStack: 'React, GitHub pages',
              repo: 'https://github.com/aidendowling/portfolio',
            },
          ],
        },
      },
      {
        id: 'skills',
        name: 'Skills.txt',
        icon: 'progman_11',
        content: {
          hard: [
            {
              name: 'Java',
              progress: 90,
            },
            {
              name: 'Python',
              progress: 90,
            },
            {
              name: 'MySQL',
              progress: 80,
            },
            {
              name: 'MongoDB',
              progress: 80,
            },
            {
              name: 'Node.js',
              progress: 70,
            },
            {
              name: 'C++',
              progress: 70,
            },

          ],
          soft: 'Agile methodology, Analytical thinking, Teamwork, Product management, Cybersecurity, Leadership, Entrepreneurship',
        },
      },
      {
        id: 'clubs',
        name: 'Clubs.txt',
        icon: 'notepad_1',
        content: {
          clubExperience: [
            {
              clubTitle: 'Georgia Tech HexLabs',
              role: 'Tech Team Lead',
              period: 'JAN 2025 - PRESENT',
              accomplishments: 'Organizer for non-profit organization responsible for GT’s flagship hackathon, spearheading website/app development.',
            },
            {
              clubTitle: 'UGAHacks',
              role: 'Logistics Advisor',
              period: 'JAN 2024 - PRESENT',
              accomplishments: 'Lead advisor of UGA Hack’s annual hackathons while attending Georgia Tech, previous logistics team lead.',
            },
            {
              clubTitle: 'Georgia Tech Barbell Club',
              role: 'University Athlete (Previous @ UGA)',
              period: 'JAN 2024 - PRESENT',
              accomplishments: 'Trained rigorously for powerlifting technique and strength, compete in the USAPL GA State Collegiate Championship.',
            },      
            {
              clubTitle: 'Georgia StemZone',
              role: 'President of Logistics and Outreach',
              period: 'MAY 2023 - PRESENT',
              accomplishments: 'Organized multiple UGA & GT STEM fairs, focusing on computer science education and outreach. Previous logistics team member',
            },    
           ],
        },
      },
      {
        id: 'contact',
        name: 'Contact.txt',
        icon: 'inetcfg_2301',
        content: {
          emailText:
            'If you want to hire me or invite to a project, just email me at ',
          email: 'aidendowling007@gmail.com',
          socialText: 'Or you can reach me out through social media:',
          social: [
            {
              name: 'FaLinkedin',
              link: 'https://www.linkedin.com/in/aiden-dowling/',
            },
            {
              name: 'FaGithub',
              link: 'https://github.com/aidendowling',
            },
            {
              name: 'FaInstagram',
              link: 'https://www.instagram.com/aiden.dowling/',
            },
          ],
        },
      },
    ],
  };

  getItems() {
    return this._data.items.map(({ id, name, icon }) => ({ id, name, icon }));
  }

  getItem(id) {
    return this._data.items.find((x) => x.id === id);
  }

  getProjectInfo() {
    return {
      projectRepo: this._data.projectRepo,
      react95Repo: this._data.react95Repo,
    };
  }
}
