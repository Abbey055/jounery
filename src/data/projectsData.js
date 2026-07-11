// src/data/projectsData.js

// Import images from src/assets/images/
import devfollowImage from '../assets/images/devfollow.png';
import civicwatchImage from '../assets/images/civicwatch-app.png';
import pythonImage from '../assets/images/control.png';
import zalseefImage from '../assets/images/zalseef.jpg';
import schoolImage from '../assets/images/connectjaya-feature-image-8.jpg';
import evotingImage from '../assets/images/evoting.jpg';

export const projectsData = [
  {
    id: 1,
    title: 'DevFollow 2026',
    image: devfollowImage,
    category: 'Web Development',
    tech: ['JavaScript', 'HTML/CSS', 'Firebase', 'REST APIs', 'UI/UX Design', 'React', 'Chakra UI'],
    description: 'A developer community platform for MUST students to connect, collaborate, and showcase their projects.',
    overview: 'DevFollow is a platform designed specifically for Mbarara University of Science and Technology students to connect with fellow developers, share projects, and collaborate on innovative ideas. The platform serves as a hub for the developer community at MUST.',
    features: [
      'Developer profiles and portfolio showcase',
      'Project sharing and collaboration tools',
      'Real time chat and messaging system',
      'Resource sharing and learning materials',
      'Project galleries and skill matching',
      'Community events and hackathon announcements',
      'Code review and feedback system',
      'Mentorship matching program'
    ],
    technologies: 'Built with modern JavaScript and React (Vite), Firebase for real-time database and authentication, Chakra UI for responsive design, and HTML/CSS. Features RESTful APIs for seamless integration and real-time updates.',
    role: 'Full stack developer responsible for architecture design, frontend development, Firebase integration, and deployment. Created the user interface and implemented core community features.',
    demo: 'https://devfellowmust.web.app',
    github: 'https://github.com/MusumbaAbeljr055/DevFollow',
    download: '#',
    year: '2026',
    status: 'Live',
    link: 'https://devfellowmust.web.app'
  },
  {
    id: 2,
    title: 'CivicWatch 2026',
    image: civicwatchImage,
    category: 'Mobile App Development',
    tech: ['Java', 'Firebase', 'Google Maps API', 'Material Design', 'Glide', 'Retrofit', 'Android SDK'],
    description: 'A community-driven Android app that empowers citizens to report and track local issues.',
    overview: 'CivicWatch is a mobile application that allows community members to report various issues like potholes, litter, graffiti, and more. The app features an interactive map view, upvoting system, and multi-language support to make community engagement accessible to everyone.',
    features: [
      'Report community issues with location and photos',
      'Interactive map view of all reported issues',
      'Upvote important issues to prioritize them',
      'Dark/Light theme support for better accessibility',
      'Multi-language support (English, Spanish, French, Luganda)',
      'Google Sign-In & Guest mode for easy access',
      'Image gallery view for issue photos',
      'Home screen widgets for quick access',
      'Real-time issue status updates',
      'Push notifications for issue resolution'
    ],
    technologies: 'Built with Java using Android SDK. Firebase Realtime Database for data storage, Firebase Authentication for user management, Google Maps API for location features, Glide for image loading, and Retrofit for networking. Follows Material Design guidelines.',
    role: 'Sole developer responsible for entire app development, from UI/UX design to backend integration. Implemented features like Google Sign-In, multi-language support, and real-time database synchronization.',
    github: 'https://github.com/MusumbaAbeljr055/civicwatch',
    download: 'https://github.com/MusumbaAbeljr055/civicwatch/releases/download/v1.0.0-beta/CivicWatch-v1.0.0-beta.apk',
    demo: '#',
    year: '2026',
    status: 'Beta',
    link: 'https://github.com/MusumbaAbeljr055/civicwatch'
  },
  {
    id: 3,
    title: 'Python Bootcamp 2025',
    image: pythonImage,
    category: 'Training & Education',
    tech: ['Python', 'Web Development', 'Data Science', 'Automation', 'Flask', 'Django', 'Pandas', 'NumPy'],
    description: 'Comprehensive Python bootcamp program teaching fundamentals to advanced concepts.',
    overview: 'A structured Python bootcamp designed to take students from absolute beginners to confident developers. The program covers core programming concepts, data structures, web development, and automation with real-world projects.',
    features: [
      'Fundamental Python programming and syntax',
      'Object-oriented programming concepts',
      'Web development with Flask and Django',
      'Data analysis and visualization with Pandas and Matplotlib',
      'Automation scripts for everyday tasks',
      'Real-world project based learning',
      'API development and integration',
      'Database management with SQL',
      'Version control with Git and GitHub'
    ],
    technologies: 'Python, Flask, Django, Pandas, NumPy, Matplotlib, REST APIs, HTML/CSS, JavaScript, SQL, Git, GitHub.',
    role: 'Lead instructor and curriculum designer. Created comprehensive learning materials, hands-on exercises, and real-world projects to ensure practical understanding.',
    demo: '#',
    github: '#',
    download: '#',
    year: '2025',
    status: 'Completed',
    link: '#'
  },
  {
    id: 4,
    title: 'Zalseef Estates 2026',
    image: zalseefImage,
    category: 'Web Development',
    tech: ['HTML/CSS', 'JavaScript', 'Responsive Design', 'UI/UX', 'SEO', 'Web Performance'],
    description: 'A modern real estate website showcasing properties and services.',
    overview: 'Zalseef Estates is a professional real estate platform that showcases properties, services, and company information. The site features a clean, modern design with easy navigation and engaging user experience.',
    features: [
      'Property listings with advanced search functionality',
      'Detailed property pages with gallery and virtual tours',
      'Contact forms and inquiry system',
      'Responsive design for all devices',
      'Company information and services showcase',
      'Client testimonials and reviews',
      'Interactive maps for property locations',
      'Property comparison tool',
      'Favorites and saved properties'
    ],
    technologies: 'Built with HTML5, CSS3, and JavaScript. Features responsive design, smooth animations, interactive elements, and SEO optimization for better visibility.',
    role: 'Full stack developer responsible for design and development. Implemented responsive design patterns and optimized for performance.',
    demo: 'https://zalseefestates.com',
    github: '#',
    download: '#',
    year: '2026',
    status: 'Live',
    link: 'https://zalseefestates.com'
  },
  {
    id: 5,
    title: 'Kabambaija Bright Heart School',
    image: schoolImage,
    category: 'Web Development',
    tech: ['HTML/CSS', 'JavaScript', 'UI/UX Design', 'SEO', 'Performance Optimization', 'School Management'],
    description: 'A comprehensive school website for Kabambaija Bright Heart School, showcasing academics, character development, and practical growth.',
    overview: 'A professional school website designed to connect parents with the school community. The platform showcases academic programs, fee management, school life updates, and provides easy access to school information for parents and the community.',
    features: [
      'School information and academic programs showcase',
      'Fee management and payment tracking',
      'School calendar and events',
      'Parent-teacher communication portal',
      'Student progress tracking',
      'News and announcements section',
      'Photo gallery of school activities',
      'Admissions and enrollment information',
      'Contact and inquiry forms'
    ],
    technologies: 'HTML5, CSS3, JavaScript, responsive design principles, SEO best practices, performance optimization techniques, and modern web standards.',
    role: 'Lead designer and developer. Created the complete school website from design to deployment, ensuring optimal user experience for parents, students, and staff.',
    demo: 'https://www.kabambaijabhs.com/',
    github: '#',
    download: '#',
    year: '2025',
    status: 'Live',
    link: 'https://www.kabambaijabhs.com/'
  },
  {
    id: 6,
    title: 'E-Voting System 2026',
    image: evotingImage,
    category: 'System Development',
    tech: ['PHP', 'MySQL', 'JavaScript', 'Security', 'API Development', 'Bootstrap', 'jQuery'],
    description: 'Secure electronic voting system for Makerere University Education Students Association (MESA) 2026 elections.',
    overview: 'A secure and transparent electronic voting system designed for student elections at Makerere University. The system ensures fair voting, real-time results, and robust security measures to maintain election integrity.',
    features: [
      'Secure voter authentication and verification',
      'Real-time vote tracking and monitoring',
      'Results dashboard with live updates',
      'Audit trail and full transparency logs',
      'Mobile responsive design for all devices',
      'Multi-candidate and multi-position support',
      'Voter eligibility verification',
      'One-time voting with session management',
      'Admin dashboard for election management',
      'Results export and reporting'
    ],
    technologies: 'PHP, MySQL, JavaScript, HTML/CSS, Bootstrap, jQuery, API development, security protocols, encryption, and session management.',
    role: 'Lead developer and system architect. Designed the system architecture, implemented security features, and ensured system scalability and reliability.',
    demo: 'https://mak-school-of-education-elections.vercel.app/',
    github: '#',
    download: '#',
    year: '2026',
    status: 'Live',
    link: 'https://mak-school-of-education-elections.vercel.app/'
  }
];

// Export additional data for filters or categories
export const projectCategories = [
  { id: 'all', label: 'All Projects' },
  { id: 'web-development', label: 'Web Development' },
  { id: 'mobile-development', label: 'Mobile App Development' },
  { id: 'system-development', label: 'System Development' },
  { id: 'training-education', label: 'Training & Education' }
];

// Export skills data
export const skillsData = [
  {
    id: 'web-dev',
    icon: 'fa-solid fa-laptop-code',
    title: 'Web Development',
    description: 'Responsive interfaces, APIs, dashboards, and web systems for real business needs.',
    color: '#4D9DE0',
    bgColor: '#E3F0FA'
  },
  {
    id: 'mobile-dev',
    icon: 'fa-solid fa-mobile-screen-button',
    title: 'Mobile App Development',
    description: 'Android apps built with Java, Firebase, maps, and clean user flows.',
    color: '#FF6B6B',
    bgColor: '#FFE8E8'
  },
  {
    id: 'system-design',
    icon: 'fa-solid fa-diagram-project',
    title: 'System Design',
    description: 'Practical architecture, database thinking, and software planning from idea to delivery.',
    color: '#FFB84D',
    bgColor: '#FFF3E0'
  }
];

// Export services data
export const servicesData = [
  {
    id: 'brief',
    icon: 'fa-regular fa-pen-to-square',
    title: 'Your Brief about The project',
    description: 'We shape the goal, users, features, timeline, and success points before the build begins.',
    color: '#4D9DE0',
    bgColor: '#E3F0FA'
  },
  {
    id: 'research',
    icon: 'fa-solid fa-magnifying-glass-chart',
    title: 'Doing Research On the Project',
    description: 'I map the user flow, technical approach, data needs, and risks so the solution is practical.',
    color: '#FF6B6B',
    bgColor: '#FFE8E8'
  },
  {
    id: 'launch',
    icon: 'fa-solid fa-rocket',
    title: 'Build, Test, and Launch',
    description: 'The final product is developed, refined, tested, and prepared for real users.',
    color: '#FFB84D',
    bgColor: '#FFF3E0'
  }
];

// Statistics data
export const statsData = {
  experience: '1+',
  projects: '10+',
  experienceLabel: 'Years of Experience',
  projectsLabel: 'Projects Completed'
};

// Social media links
export const socialLinks = {
  github: 'https://github.com/musumbasa',
  hashnode: 'https://musumba.hashnode.dev/',
  email: 'mailto:ssenkubugeabbey055@gmail.com',
  linkedin: '#',
  twitter: '#'
};