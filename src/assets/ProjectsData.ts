import { Project } from './Projects';

// Import project images
import faceLyticImg from './projects/FaceLytic.png';
import foxyAIImg from './projects/foxyAI.png';
import chartPrimeImg from './projects/chartprime.png';
import gamenautImg from './projects/gamenaut.png';
import metaversePlusImg from './projects/Metaverseplus.png';
import mendelgenImg from './projects/mendelgen.png';
import avodahImg from './projects/avodah.png';
import coMworkImg from './projects/coMwork.png';
import tabRabbitImg from './projects/TabRabbit.png';
import hotelCollectionImg from './projects/HotelCollection.jpg';

export const projectsData: Project[] = [
  {
    title: "FaceLytic - AI-Powered Facial Recognition Platform",
    description: "Advanced facial recognition and analytics platform leveraging machine learning for identity verification and emotion detection. Built with Python backend and React frontend, processing thousands of images daily with 99.7% accuracy.",
    thumbnail: faceLyticImg,
    source: "https://github.com/chassitynakamura/facelytic",
    demo: "https://facelytic-demo.vercel.app",
    language: "Python",
    platform: "github" as const,
    createdAt: "2023-01-15",
    updatedAt: "2024-12-01",
    interactions: {
      stars: 234,
      forks: 67,
    }
  },
  {
    title: "FoxyAI - Healthcare AI Assistant",
    description: "HIPAA-compliant AI assistant for healthcare providers built at SaturdayHealth. Features natural language processing for patient communication, appointment scheduling, and medical record management with enterprise-grade security.",
    thumbnail: foxyAIImg,
    source: "https://github.com/saturdayhealth/foxyai",
    demo: "https://foxyai.saturdayhealth.com",
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
    title: "ChartPrime - Data Visualization Suite",
    description: "Professional-grade data visualization platform built for H2O.ai's enterprise clients. Features interactive dashboards, real-time data streaming, and ML model visualization with support for large datasets and complex analytics workflows.",
    thumbnail: chartPrimeImg,
    source: "https://github.com/h2oai/chartprime",
    demo: "https://chartprime.h2o.ai",
    language: "JavaScript",
    platform: "github" as const,
    createdAt: "2021-03-22",
    updatedAt: "2023-02-28",
    interactions: {
      stars: 445,
      forks: 89,
    }
  },
  {
    title: "GameNaut - Gaming Analytics Platform",
    description: "Real-time gaming analytics and performance tracking platform. Built with microservices architecture on Kubernetes, handling millions of gaming events daily with sub-100ms latency. Features player behavior analysis and game optimization insights.",
    thumbnail: gamenautImg,
    source: "https://github.com/chassitynakamura/gamenaut",
    demo: "https://gamenaut-analytics.com",
    language: "Go",
    platform: "github" as const,
    createdAt: "2022-08-14",
    updatedAt: "2024-10-15",
    interactions: {
      stars: 312,
      forks: 78,
    }
  },
  {
    title: "MetaversePlus - VR/AR Development Platform",
    description: "Cross-platform VR/AR development tools and SDK. Enables developers to create immersive experiences with advanced physics simulation, spatial audio, and cross-device compatibility. Used by 500+ developers worldwide.",
    thumbnail: metaversePlusImg,
    source: "https://github.com/chassitynakamura/metaverseplus",
    demo: "https://metaverseplus.dev",
    language: "C++",
    platform: "github" as const,
    createdAt: "2022-11-05",
    updatedAt: "2024-09-30",
    interactions: {
      stars: 678,
      forks: 134,
    }
  },
  {
    title: "MendelGen - Genetic Algorithm Framework",
    description: "High-performance genetic algorithm framework for optimization problems. Features parallel processing, custom fitness functions, and visualization tools. Successfully applied to logistics optimization, reducing delivery costs by 23%.",
    thumbnail: mendelgenImg,
    source: "https://github.com/chassitynakamura/mendelgen",
    demo: "https://mendelgen-demo.netlify.app",
    language: "Rust",
    platform: "github" as const,
    createdAt: "2021-09-12",
    updatedAt: "2024-08-22",
    interactions: {
      stars: 189,
      forks: 45,
    }
  },
  {
    title: "Avodah - Project Management Suite",
    description: "Enterprise project management platform with advanced workflow automation, team collaboration tools, and AI-powered project insights. Built with scalable microservices architecture serving 10,000+ active users.",
    thumbnail: avodahImg,
    source: "https://github.com/chassitynakamura/avodah",
    demo: "https://avodah-pm.com",
    language: "TypeScript",
    platform: "github" as const,
    createdAt: "2020-12-03",
    updatedAt: "2024-07-18",
    interactions: {
      stars: 267,
      forks: 56,
    }
  },
  {
    title: "CoMwork - Remote Collaboration Platform",
    description: "Real-time collaboration platform for remote teams built during Shopify tenure. Features video conferencing, shared workspaces, and integrated productivity tools. Scaled to support 50,000+ concurrent users.",
    thumbnail: coMworkImg,
    source: "https://github.com/shopify/comwork",
    demo: "https://comwork.shopify.com",
    language: "Ruby",
    platform: "github" as const,
    createdAt: "2019-04-18",
    updatedAt: "2020-11-25",
    interactions: {
      stars: 523,
      forks: 123,
    }
  },
  {
    title: "TabRabbit - Browser Extension Suite",
    description: "Productivity-focused browser extension for tab management and workflow optimization. Features smart tab grouping, session management, and productivity analytics. Over 100,000 active users across Chrome and Firefox.",
    thumbnail: tabRabbitImg,
    source: "https://github.com/chassitynakamura/tabrabbit",
    demo: "https://chrome.google.com/webstore/detail/tabrabbit",
    language: "JavaScript",
    platform: "github" as const,
    createdAt: "2020-07-09",
    updatedAt: "2024-06-14",
    interactions: {
      stars: 89,
      forks: 21,
    }
  },
  {
    title: "Hotel Collection - Booking Platform",
    description: "Full-stack hotel booking and management system with real-time availability, payment processing, and admin dashboard. Built with modern web technologies and integrated with multiple payment gateways and booking APIs.",
    thumbnail: hotelCollectionImg,
    source: "https://github.com/chassitynakamura/hotel-collection",
    demo: "https://hotel-collection-demo.com",
    language: "Vue.js",
    platform: "github" as const,
    createdAt: "2021-01-28",
    updatedAt: "2024-05-10",
    interactions: {
      stars: 145,
      forks: 34,
    }
  }
];

export default projectsData; 