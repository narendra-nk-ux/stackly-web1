import React from 'react';
// install icons
import { FaLaptopCode, FaBullhorn, FaMobileAlt, FaPaintBrush, FaRobot, FaDatabase, FaChartLine, FaKeyboard, FaHeadset, FaBook } from 'react-icons/fa';

export const servicesData = [
  {
    id: 1,
    slug: 'web-development',
    title: 'Web Application Development',
    description: 'Scalable, high-performance web apps built with React and Node.js.',
    icon: <FaLaptopCode />,
    details: 'We build robust web applications that are secure, scalable, and responsive. From Single Page Applications (SPA) to complex ERP systems, our team ensures seamless performance.',
    steps: [
      'Requirement Gathering: We analyze your business needs.',
      'UI/UX Design: Creating wireframes and prototypes.',
      'Development: Frontend and Backend coding.',
      'Testing: QA and bug fixing.',
      'Deployment: Live launch on cloud servers.'
    ]
  },
  {
    id: 2,
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Data-driven SEO, social media, and PPC campaigns.',
    icon: <FaBullhorn />,
    details: 'Our digital marketing strategies cover SEO, Social Media Marketing, and PPC to maximize your ROI.',
    steps: [
      'Audit: Analyzing current market presence.',
      'Strategy: Defining target audience and channels.',
      'Content Creation: Designing ads and posts.',
      'Execution: Running campaigns.',
      'Optimization: Analyzing data to improve results.'
    ]
  },
  {
    id: 3,
    slug: 'mobile-app-development',
    title: 'Mobile Application Development',
    description: 'Native and cross-platform mobile apps for iOS and Android.',
    icon: <FaMobileAlt />,
    details: 'We create intuitive mobile experiences using Flutter and React Native for seamless performance on all devices.',
    steps: [
      'Concept: Defining app features.',
      'Design: Mobile-first UI/UX.',
      'Development: Coding for iOS/Android.',
      'Integration: API and Database connection.',
      'Launch: App Store and Play Store submission.'
    ]
  },
  {
    id: 4,
    slug: 'product-branding',
    title: 'Product & Branding Design',
    description: 'Creative UI/UX design and brand identity strategies.',
    icon: <FaPaintBrush />,
    details: 'We craft visual identities that resonate with your audience, including logo design and full brand guidelines.',
    steps: [
      'Discovery: Understanding brand values.',
      'Identity: Logo and color palette creation.',
      'Design: Product packaging or interface design.',
      'Review: Client feedback loops.',
      'Delivery: Final asset handoff.'
    ]
  },
  {
    id: 5,
    slug: 'ai-automation',
    title: 'AI and Automation',
    description: 'Machine learning models and chatbots to streamline operations.',
    icon: <FaRobot />,
    details: 'Leverage AI to automate repetitive tasks. We build custom ML models and chatbots.',
    steps: [
      'Analysis: Identifying automation opportunities.',
      'Modeling: Training AI models.',
      'Development: Scripting bots.',
      'Integration: Embedding into workflows.',
      'Monitoring: Continuous improvement.'
    ]
  },
  {
    id: 6,
    slug: 'data-content-management',
    title: 'Data & Content Management',
    description: 'Enterprise CMS solutions and structured data organization.',
    icon: <FaDatabase />,
    details: 'We implement CMS solutions and optimize databases to ensure your data is organized and accessible.',
    steps: [
      'Audit: Reviewing existing data.',
      'Setup: Installing CMS (WordPress/Strapi).',
      'Migration: Moving data securely.',
      'Security: Setting permissions.',
      'Training: User manuals and guidance.'
    ]
  },
  {
    id: 7,
    slug: 'data-insights',
    title: 'Data & Insights',
    description: 'Analytics and visualization to turn raw data into strategies.',
    icon: <FaChartLine />,
    details: 'Transform raw data into meaningful insights using tools like PowerBI and Tableau.',
    steps: [
      'Collection: Aggregating data sources.',
      'Cleaning: Removing errors.',
      'Visualization: Creating dashboards.',
      'Analysis: Finding trends.',
      'Reporting: Delivering actionable insights.'
    ]
  },
  {
    id: 8,
    slug: 'online-form-filling',
    title: 'Online Form Filling',
    description: 'Automated and accurate data entry services.',
    icon: <FaKeyboard />,
    details: 'We provide high-accuracy data entry and form processing services for large-scale operations.',
    steps: [
      'Receipt: Receiving documents.',
      'Entry: Manual or automated input.',
      'Validation: Double-checking accuracy.',
      'Formatting: Standardizing data.',
      'Submission: Uploading to portals.'
    ]
  },
  {
    id: 9,
    slug: 'voice-process',
    title: 'Voice Process',
    description: 'Customer support and IVR systems.',
    icon: <FaHeadset />,
    details: 'Enhance customer engagement with our inbound/outbound voice process and IVR setups.',
    steps: [
      'Setup: Configuring phone systems.',
      'Scripting: Writing call flows.',
      'Training: Preparing agents.',
      'Operations: Handling calls.',
      'QA: Quality assurance checks.'
    ]
  },
  {
    id: 10,
    slug: 'epub-xml',
    title: 'E-Pub & XML Services',
    description: 'Digital publishing conversion and XML structuring.',
    icon: <FaBook />,
    details: 'Convert physical books and documents into high-quality ePub and XML formats.',
    steps: [
      'Scan: Digitizing physical copies.',
      'Conversion: OCR and text extraction.',
      'Formatting: HTML/XML coding.',
      'Validation: Checking against standards.',
      'Delivery: Final eBook files.'
    ]
  }
];