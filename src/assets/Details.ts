import aauMin from "@/assets/icons/aau.min.webp";
import aau from "@/assets/icons/aau.webp";
import enseeihtMin from "@/assets/icons/enseeiht.min.webp";
import enseeiht from "@/assets/icons/enseeiht.webp";
import escapeMin from "@/assets/icons/escape.min.webp";
import escape from "@/assets/icons/escape.webp";
import talentyouMin from "@/assets/icons/talentyou.min.webp";
import talentyou from "@/assets/icons/talentyou.webp";
import kanopMin from "@/assets/icons/kanop.min.webp";
import kanop from "@/assets/icons/kanop.webp";
import lfdcMin from "@/assets/icons/lfdc.min.webp";
import lfdc from "@/assets/icons/lfdc.webp";

const details = {
  name: {
    first: "Chassity",
    last: "Nakamura",
    nickname: "CN",
  },
  title: "Staff Software Engineer",
  biography: "**Staff Software Engineer** with 11+ years of experience delivering high-performance solutions across design, e-commerce, AI/ML, and healthcare sectors. Proven track record of building scalable web systems, secure APIs, and robust infrastructure at companies like Figma, Shopify, and H2O.ai. Expert in **cross-functional collaboration**, **cloud-native development**, and system optimization. Passionate about developing tools that enhance user experiences and drive meaningful business outcomes.",
  education: [
    {
      school: "Osaka University",
      url: "https://www.osaka-u.ac.jp/en",
      icon: aau,
      iconMin: aauMin,
      location: "Osaka, Japan",
      degree: "Master of Science in Computer Science",
      major: "Computer Science",
      start: "Apr 2012",
      end: "Jan 2014",
      gpa: "3.8/4.0",
    },
    {
      school: "Osaka University",
      url: "https://www.osaka-u.ac.jp/en",
      icon: aau,
      iconMin: aauMin,
      location: "Osaka, Japan",
      degree: "Bachelor of Science in Computer Science",
      major: "Computer Science",
      start: "Apr 2008",
      end: "Mar 2012",
    },
  ],
  experience: [
    {
      company: "SaturdayHealth",
      url: "https://www.saturdayhealth.com/",
      icon: kanop,
      iconMin: kanopMin,
      location: "Birmingham, United States",
      contract: "Full-time",
      position: "Principal Software Engineer",
      start: "Mar 2023",
      end: "May 2025",
      description: [
        "Led architecture and development of secure communication systems for healthcare providers",
        "Migrated legacy systems to scalable microservices using containerized, event-driven infrastructure",
        "Implemented HIPAA-compliant protocols and integrated ML models to modernize patient care workflows", 
        "Collaborated with product and compliance teams to align engineering with regulatory needs",
        "Developed a next-gen referral engine, cutting overhead and processing time",
        "Spearheaded the MLOps roadmap project with big database client"
      ],
      skills: [
        "System Architecture", 
        "Microservices", 
        "HIPAA Compliance", 
        "ML Integration",
        "Healthcare Technology",
        "MLOps"
      ],
    },
    {
      company: "H2O.ai",
      url: "https://h2o.ai/",
      icon: talentyou,
      iconMin: talentyouMin,
      location: "Birmingham, United States", 
      contract: "Full-time",
      position: "Senior Software Engineer",
      start: "Jan 2020",
      end: "Mar 2023",
      description: [
        "Built and maintained cloud-native services for the H2O AI Cloud platform",
        "Designed REST APIs and real-time integrations for enterprise-scale AI deployment",
        "Automated infrastructure with Kubernetes and Helm across multi-cloud setups",
        "Integrated MLflow for monitoring and metadata for performance optimization",
        "Led backend for self-service AI deployment module, cutting onboarding time by 40%",
        "Co-authored internal ML lifecycle best practices"
      ],
      skills: [
        "Cloud Architecture",
        "Kubernetes", 
        "REST APIs",
        "MLflow",
        "AI/ML Platforms",
        "DevOps"
      ],
    },
    {
      company: "Shopify",
      url: "https://www.shopify.com/",
      icon: escape,
      iconMin: escapeMin,
      location: "San Francisco, United States",
      contract: "Full-time", 
      position: "Software Engineer",
      start: "Jun 2017",
      end: "Dec 2020",
      description: [
        "Designed and built customer-facing features for Shopify's merchant platform",
        "Collaborated with design teams to develop responsive, accessible React components",
        "Optimized frontend performance and API integrations for 25% faster page loads", 
        "Mentored junior engineers and contributed to knowledge sharing",
        "Led checkout customization refactor, reducing support tickets by 25%",
        "Built production-ready applications with production traffic patterns"
      ],
      skills: [
        "React/Next/Vue",
        "Frontend Performance",
        "E-commerce Platforms",
        "Mentorship",
        "API Integration",
        "Production Systems"
      ],
    },
    {
      company: "Figma",
      url: "https://www.figma.com/",
      icon: kanop,
      iconMin: kanopMin,
      location: "San Francisco, United States",
      contract: "Full-time",
      position: "Frontend Developer", 
      start: "Apr 2014",
      end: "Jul 2017",
      description: [
        "Implemented UI components for Figma's real-time collaborative design interface",
        "Contributed to performance enhancements in the canvas rendering layer",
        "Developed responsive layouts and reusable frontend modules",
        "Conducted cross-browser QA and participated in design/engineering syncs"
      ],
      skills: [
        "JavaScript/HTML/CSS",
        "UI/UX Implementation", 
        "Real-time Collaboration",
        "Canvas Rendering",
        "Cross-browser Compatibility"
      ],
    },
  ],
  languages: [
    {
      name: "English",
      level: "C2",
      native: true,
    },
    {
      name: "Japanese",
      level: "B2",
    },
  ],
  contact: {
    location: "Tacoma, WA US",
    email: "chassitynakamura22@gmail.com",
    phone: "+1 (253) 555-0123",
    website: "https://www.chassitynakamura.com",
    linkedin: "https://www.linkedin.com/in/chassitynakamura/",
    github: "https://www.github.com/chassitynakamura",
    researchgate: "https://www.researchgate.net/profile/Chassity-Nakamura",
    gitlab: "https://www.gitlab.com/chassitynakamura",
    deviantart: "https://www.deviantart.com/chassitynakamura",
  },
};

export default details;
