import startMatter from "@/assets/icons/startmatter.png";
import huggingFace from "@/assets/icons/huggingface.png";
import amazon from "@/assets/icons/amazon.png";
import microsoft from "@/assets/icons/microsoft.png";
import nsu from "@/assets/icons/nsu.png";

const details = {
  name: {
    first: "Edward",
    last: "Diaz",
    nickname: "ED",
  },
  title: "Staff Software Engineer",
  biography: "Innovative and impact-driven **Staff Software Engineer** with over 9 years of experience designing and scaling systems for industry leaders in AI, cloud computing, and consumer tech. Proven expertise across open-source platforms, developer tools, and cloud-scale SaaS products. Passionate about developer experience, infrastructure automation, and turning technical complexity into elegant product solutions. Played key roles in engineering teams at Hugging Face, Amazon, Microsoft and startup ecosystems - delivering features used by millions globally.",
  education: [
    {
      school: "National University of Singapore",
      url: "https://www.nus.edu.sg/",
      icon: nsu,
      iconMin: nsu,
      location: "Singapore",
      degree: "Master of Computing (Computer Science Specialisation)",
      major: "Computer Science",
      start: "08/2014",
      end: "07/2016",
      gpa: "4.8/5.0",
    },
    {
      school: "National University of Singapore",
      url: "https://www.nus.edu.sg/",
      icon: nsu,
      iconMin: nsu,
      location: "Singapore",
      degree: "Bachelor of Computing (Computer Science)",
      major: "Computer Science",
      start: "08/2010",
      end: "07/2014",
    },
  ],
  experience: [
    {
      company: "Start Matter",
      url: "https://www.startmatter.com/",
      icon: startMatter,
      iconMin: startMatter,
      location: "Kent, United States",
      contract: "Remote",
      position: "Staff Software Engineer",
      start: "08/2024",
      end: "07/2025",
      description: [
        "Spearheaded architecture of end-to-end web and mobile solutions for fintech, legaltech, and martech startups",
        "Developed secure, scalable APIs and infrastructure using Node.js, AWS Lambda, and DynamoDB, improving platform performance by 45%",
        "Built multi-tenant SaaS systems supporting customized workflows for early-stage B2B platforms",
        "Led codebase modernization using TypeScript and automated CI/CD pipelines, reducing deployment friction across dev teams",
        "Partnered with founders and designers to deliver MVPs with rapid iteration cycles under tight funding timelines"
      ],
      skills: [
        "System Architecture", 
        "Node.js", 
        "AWS Lambda", 
        "DynamoDB",
        "TypeScript",
        "CI/CD",
        "SaaS Development"
      ],
    },
    {
      company: "Hugging Face",
      url: "https://huggingface.co/",
      icon: huggingFace,
      iconMin: huggingFace,
      location: "New York, United States", 
      contract: "Hybrid",
      position: "Senior Software Engineer",
      start: "01/2021",
      end: "07/2024",
      description: [
        "Contributed to the development of the Hugging Face Hub, scaling dataset and model hosting infrastructure to serve millions of global ML practitioners",
        "Engineered backend APIs for Transformers and Datasets libraries, enabling faster experimentation with NLP, audio, and vision models",
        "Designed secure deployment tooling for Spaces, enhancing developer UX for hosting demo apps with Streamlit and Gradio",
        "Played a key role in launching Enterprise Hub for secure model sharing, compliance, and governance among enterprise clients",
        "Collaborated on AutoTrain integrations, automating ML training pipelines and simplifying production readiness"
      ],
      skills: [
        "ML Infrastructure",
        "Backend APIs", 
        "NLP/Audio/Vision",
        "Streamlit",
        "Gradio",
        "AutoTrain",
        "Enterprise Solutions"
      ],
    },
    {
      company: "Amazon",
      url: "https://www.amazon.com/",
      icon: amazon,
      iconMin: amazon,
      location: "New York, United States",
      contract: "Onsite", 
      position: "Software Engineer",
      start: "11/2017",
      end: "12/2020",
      description: [
        "Developed backend microservices for Alexa and Echo device integrations, enabling seamless voice control features across apps and services",
        "Worked on scaling and feature delivery for Fire TV platforms, contributing to UI enhancements and content recommendations across regional markets",
        "Participated in engineering sprints for Ring product updates, including camera firmware and AWS IoT integration for smart home capabilities",
        "Supported internal tools for Amazon Pharmacy, focusing on HIPAA-compliant data flows and fulfillment automation",
        "Optimized backend systems for AWS service telemetry, reducing incident response time across distributed environments"
      ],
      skills: [
        "Microservices",
        "Alexa/Echo APIs",
        "Fire TV Platform",
        "AWS IoT",
        "HIPAA Compliance",
        "Distributed Systems"
      ],
    },
    {
      company: "Microsoft",
      url: "https://www.microsoft.com/",
      icon: microsoft,
      iconMin: microsoft,
      location: "New York, United States",
      contract: "Onsite",
      position: "Software Developer", 
      start: "08/2016",
      end: "10/2017",
      description: [
        "Helped build microservices for Azure platform analytics and reporting, contributing to double-digit scale improvements in real-time data processing",
        "Enhanced user identity flows and session management within Office 365 enterprise integrations",
        "Delivered UI and backend enhancements for Windows 10 activation telemetry, improving diagnostic tooling used across support divisions",
        "Contributed to early-phase prototypes for the Surface Family integration layer between hardware controls and UWP apps",
        "Worked closely with acquisition teams to integrate LinkedIn APIs into enterprise partner tools"
      ],
      skills: [
        "Azure Platform",
        "Office 365",
        "Windows 10",
        "Surface Hardware",
        "LinkedIn APIs",
        "Enterprise Integration"
      ],
    },
  ],
  languages: [
    {
      name: "English",
      level: "E",
      native: true,
    },
    // {
    //   name: "Japanese",
    //   level: "B2",
    // },
  ],
  contact: {
    location: "Kent, WA 98042",
    email: "edwarddiaz888@gmail.com",
    phone: "425292979",
    website: "https://www.edwarddiaz.com",
    linkedin: "https://www.linkedin.com/in/edwarddiaz/",
    github: "https://www.github.com/edwarddiaz",
    researchgate: "https://www.researchgate.net/profile/Edward-Diaz",
    gitlab: "https://www.gitlab.com/edwarddiaz",
    deviantart: "https://www.deviantart.com/edwarddiaz",
  },
};

export default details;
