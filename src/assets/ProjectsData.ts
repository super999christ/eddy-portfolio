import { Project } from './Projects';

// Import project thumbnail images
import mendelgenImg from './projects/mendelgen.png';
import shippingProtectionImg from './projects/shipping-protection.png';
import tabRabbitImg from './projects/tabrabbit.png';
import userhubImg from './projects/userhub.png';
import huntrImg from './projects/huntr.png';
import propertyManagementImg from './projects/property-management.png';
import awellImg from './projects/awell.png';
import pickleballImg from './projects/pickleball.png';
import eMotorImg from './projects/e-motor.png';
import liveblockImg from './projects/liveblock.png';
import genaiWaveImg from './projects/genai-wave.png';
import ottoImg from './projects/otto.png';

// Import all project gallery images
// Mendelgen images
import mendelgen0 from './projects/mendelgen-0.png';
import mendelgen1 from './projects/mendelgen-1.png';
import mendelgen2 from './projects/mendelgen-2.png';
import mendelgen3 from './projects/mendelgen-3.png';
import mendelgen4 from './projects/mendelgen-4.png';

// Shipping Protection images
import shipping0 from './projects/shipping-protection-0.png';
import shipping1 from './projects/shipping-protection-1.png';
import shipping2 from './projects/shipping-protection-2.png';
import shipping3 from './projects/shipping-protection-3.png';
import shipping4 from './projects/shipping-protection-4.png';

// TabRabbit images
import tabrabbit0 from './projects/tabrabbit-0.png';
import tabrabbit1 from './projects/tabrabbit-1.png';
import tabrabbit2 from './projects/tabrabbit-2.png';
import tabrabbit3 from './projects/tabrabbit-3.png';
import tabrabbit4 from './projects/tabrabbit-4.png';

// Userhub images
import userhub0 from './projects/userhub-0.png';
import userhub1 from './projects/userhub-1.png';
import userhub2 from './projects/userhub-2.png';
import userhub3 from './projects/userhub-3.png';
import userhub4 from './projects/userhub-4.png';

// Huntr images
import huntr0 from './projects/huntr-0.png';
import huntr1 from './projects/huntr-1.png';
import huntr2 from './projects/huntr-2.png';
import huntr3 from './projects/huntr-3.png';
import huntr4 from './projects/huntr-4.png';

// Property Management images
import property0 from './projects/property-management-0.png';
import property1 from './projects/property-management-1.png';
import property2 from './projects/property-management-2.png';
import property3 from './projects/property-management-3.png';
import property4 from './projects/property-management-4.png';

// Awell images
import awell0 from './projects/awell-0.png';
import awell1 from './projects/awell-1.png';
import awell2 from './projects/awell-2.png';
import awell3 from './projects/awell-3.png';
import awell4 from './projects/awell-4.png';

// Pickleball images
import pickleball0 from './projects/pickleball-0.png';
import pickleball1 from './projects/pickleball-1.png';
import pickleball2 from './projects/pickleball-2.png';
import pickleball3 from './projects/pickleball-3.png';
import pickleball4 from './projects/pickleball-4.png';

// E-Motor images
import emotor0 from './projects/e-motor-0.png';
import emotor1 from './projects/e-motor-1.png';
import emotor2 from './projects/e-motor-2.png';
import emotor3 from './projects/e-motor-3.png';
import emotor4 from './projects/e-motor-4.png';

// LiveBlock images
import liveblock0 from './projects/liveblock-0.png';
import liveblock1 from './projects/liveblock-1.png';
import liveblock2 from './projects/liveblock-2.png';
import liveblock3 from './projects/liveblock-3.png';
import liveblock4 from './projects/liveblock-4.png';

// GenAI Wave images
import genai0 from './projects/genai-wave-0.png';
import genai1 from './projects/genai-wave-1.png';
import genai2 from './projects/genai-wave-2.png';
import genai3 from './projects/genai-wave-3.png';
import genai4 from './projects/genai-wave-4.png';

// Otto images
import otto0 from './projects/otto-0.png';
import otto1 from './projects/otto-1.png';
import otto2 from './projects/otto-2.png';
import otto3 from './projects/otto-3.png';
import otto4 from './projects/otto-4.png';

export const projectsData: Project[] = [
  {
    title: "Mendelgen - Plasmid Design Platform",
    description: "Mendelgen is an online platform that simplifies plasmid design for molecular biology researchers. It offers a range of tools including a Vector Wizard, sequence alignment, codon optimization, and in-silico cloning capabilities. The platform features vector visualization, automatic design and annotation, and various cloning simulations.",
    thumbnail: mendelgenImg,
    images: [mendelgen0, mendelgen1, mendelgen2, mendelgen3, mendelgen4],
    source: "https://github.com/edwarddiaz/mendelgen",
    demo: "https://mendelgen.com/",
    language: "JavaScript",
    platform: "github" as const,
    createdAt: "2023-03-15",
    updatedAt: "2024-12-01",
    interactions: {
      stars: 189,
      forks: 45,
    }
  },
  {
    title: "Shipping Protection - Order Protection Service",
    description: "Shipping Protection is a service offering shipping protection for online orders. It provides coverage against potential issues such as lost, stolen, or damaged packages during transit. The website offers various plans and features to safeguard purchases, giving consumers and businesses peace of mind when shipping valuable items.",
    thumbnail: shippingProtectionImg,
    images: [shipping0, shipping1, shipping2, shipping3, shipping4],
    source: "https://github.com/edwarddiaz/shipping-protection",
    demo: "https://orderprotection.com/",
    language: "TypeScript",
    platform: "github" as const,
    createdAt: "2023-06-10",
    updatedAt: "2024-11-20",
    interactions: {
      stars: 156,
      forks: 23,
    }
  },
  {
    title: "TabRabbit - Restaurant Technology Suite",
    description: "TabRabbit is an all-in-one restaurant technology suite that combines software and hardware solutions to improve both vendor and customer experiences. It offers a cloud-based system with a native Android POS app, modern tablet hardware, and the latest in payment technology, including EMV payments.",
    thumbnail: tabRabbitImg,
    images: [tabrabbit0, tabrabbit1, tabrabbit2, tabrabbit3, tabrabbit4],
    source: "https://github.com/edwarddiaz/tabrabbit",
    demo: "https://tabrabbit.com/",
    language: "React",
    platform: "github" as const,
    createdAt: "2022-08-14",
    updatedAt: "2024-10-15",
    interactions: {
      stars: 312,
      forks: 78,
    }
  },
  {
    title: "Userhub - Ship Today",
    description: "UserHub is a user-based billing platform that helps B2B SaaS companies monetize like Figma, GitHub, HubSpot, and other subscription SaaS leaders. Using your existing identity provider and Stripe Billing account, UserHub makes it easy to build plans and manage subscriptions that include seat-based billing.",
    thumbnail: userhubImg,
    images: [userhub0, userhub1, userhub2, userhub3, userhub4],
    source: "https://github.com/edwarddiaz/userhub",
    demo: "https://userhub.com/",
    language: "TypeScript",
    platform: "github" as const,
    createdAt: "2022-11-05",
    updatedAt: "2024-09-30",
    interactions: {
      stars: 267,
      forks: 56,
    }
  },
  {
    title: "Huntr - AI/ML Bug Bounty Platform",
    description: "Huntr is the first bug bounty platform specifically focused on AI/ML applications and their underlying Open Source Software. It provides a centralized hub for security researchers to submit vulnerabilities, covering over 250 AI/ML repositories. The platform follows a structured process of disclosure, validation, reward, and publication.",
    thumbnail: huntrImg,
    images: [huntr0, huntr1, huntr2, huntr3, huntr4],
    source: "https://github.com/edwarddiaz/huntr",
    demo: "https://huntr.com/",
    language: "Python",
    platform: "github" as const,
    createdAt: "2021-09-12",
    updatedAt: "2024-08-22",
    interactions: {
      stars: 445,
      forks: 89,
    }
  },
  {
    title: "Property Management System - AI Real Estate Analytics",
    description: "Property Management System is an AI-powered real estate analytics platform that leverages computer vision technology to automatically assess property conditions and detect damage from photos. The system generates comprehensive property valuations, renovation cost estimates, and after-renovation value projections.",
    thumbnail: propertyManagementImg,
    images: [property0, property1, property2, property3, property4],
    source: "https://github.com/edwarddiaz/property-management",
    demo: "https://portal.foxyai.com/",
    language: "Python",
    platform: "github" as const,
    createdAt: "2023-01-15",
    updatedAt: "2024-12-01",
    interactions: {
      stars: 523,
      forks: 123,
    }
  },
  {
    title: "Awell Workflow Automation - Healthcare Platform",
    description: "Awell is an innovative healthcare platform designed to empower non-technical teams in the creation, automation, and optimization of clinical workflows. With its intuitive drag-and-drop interface and a comprehensive library of validated questionnaires, Awell enables healthcare providers to streamline care pathways.",
    thumbnail: awellImg,
    images: [awell0, awell1, awell2, awell3, awell4],
    source: "https://github.com/edwarddiaz/awell",
    demo: "https://www.awellhealth.com/",
    language: "TypeScript",
    platform: "github" as const,
    createdAt: "2020-12-03",
    updatedAt: "2024-07-18",
    interactions: {
      stars: 234,
      forks: 67,
    }
  },
  {
    title: "Pickleball - Ultimate Pickleball Destination",
    description: "Pickleball is the ultimate destination for pickleball enthusiasts, offering a wealth of resources including news, tournament information, player rankings, and a vibrant community hub. The site features live updates on major events such as the MLP Playoffs and the Lapiplasty Pickleball World Championships.",
    thumbnail: pickleballImg,
    images: [pickleball0, pickleball1, pickleball2, pickleball3, pickleball4],
    source: "https://github.com/edwarddiaz/pickleball",
    demo: "https://pickleball.com/",
    language: "Vue.js",
    platform: "github" as const,
    createdAt: "2019-04-18",
    updatedAt: "2024-06-14",
    interactions: {
      stars: 189,
      forks: 34,
    }
  },
  {
    title: "E-Motor Charging System - EV Infrastructure",
    description: "E-Motor Charging System offers innovative electric vehicle charging solutions through its flagship product, designed to meet the high-demand needs of businesses and fleets. Capable of delivering up to 4.5MW of bi-directional DC power and 50kW of bi-directional AC power, providing reliable and versatile charging infrastructure.",
    thumbnail: eMotorImg,
    images: [emotor0, emotor1, emotor2, emotor3, emotor4],
    source: "https://github.com/edwarddiaz/e-motor-charging",
    demo: "https://nxuenergy.com/",
    language: "C++",
    platform: "github" as const,
    createdAt: "2021-01-28",
    updatedAt: "2024-05-10",
    interactions: {
      stars: 345,
      forks: 78,
    }
  },
  {
    title: "LiveBlock - Collaborative Development Platform",
    description: "Liveblocks is a comprehensive platform designed for developers to build and scale collaborative applications effortlessly. It offers a suite of real-time features, including comments, notifications, and a collaborative text editor, all aimed at enhancing user engagement and productivity.",
    thumbnail: liveblockImg,
    images: [liveblock0, liveblock1, liveblock2, liveblock3, liveblock4],
    source: "https://github.com/edwarddiaz/liveblock",
    demo: "https://liveblocks.io/",
    language: "JavaScript",
    platform: "github" as const,
    createdAt: "2020-07-09",
    updatedAt: "2024-06-14",
    interactions: {
      stars: 678,
      forks: 134,
    }
  },
  {
    title: "GenAI Wave - Python Web Framework",
    description: "GenAI Wave is a Python framework that lets you build interactive web apps and dashboards without knowing HTML, CSS, or JavaScript. It's designed specifically for data scientists and Python developers who want to create real-time, collaborative web applications while working entirely in Python.",
    thumbnail: genaiWaveImg,
    images: [genai0, genai1, genai2, genai3, genai4],
    source: "https://github.com/edwarddiaz/genai-wave",
    demo: "https://wave.h2o.ai/",
    language: "Python",
    platform: "github" as const,
    createdAt: "2021-03-22",
    updatedAt: "2023-02-28",
    interactions: {
      stars: 789,
      forks: 156,
    }
  },
  {
    title: "Otto Insurance - Simplified Insurance Platform",
    description: "Otto Insurance is an innovative platform designed to simplify the process of finding and comparing insurance options for auto, home, pet, and life coverage. By taking a quick quiz, users can provide essential information about their needs, allowing Otto to generate tailored quotes from various providers in seconds.",
    thumbnail: ottoImg,
    images: [otto0, otto1, otto2, otto3, otto4],
    source: "https://github.com/edwarddiaz/otto-insurance",
    demo: "https://ottoinsurance.com/",
    language: "React",
    platform: "github" as const,
    createdAt: "2022-05-20",
    updatedAt: "2024-11-30",
    interactions: {
      stars: 412,
      forks: 89,
    }
  }
];

export default projectsData;