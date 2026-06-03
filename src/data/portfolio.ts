import { User, Code, BookOpen, Heart } from 'lucide-react';

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  type: string;
  achievements: string[];
  location?: string;
  techStack?: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  location: string;
  details?: string[];
}

export interface PortfolioData {
  personalInfo: {
    name: string;
    displayName: string;
    headline: string;
    summary: string;
    email: string;
    username: string;
    stats: Array<{ value: string; label: string }>;
  };
  about: {
    details: Array<{ title: string; content: string; icon: any }>;
  };
  skills: {
    categories: SkillCategory[];
  };
  experiences: Experience[];
  projects: Project[];
  education: Education[];
  socialLinks: {
    github: string;
    linkedin: string;
    twitter?: string;
  };
}

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "Niranjan BR",
    displayName: "NIRANJAN.BR",
    username: "mrfox2003",
    headline: "Electrical & Electronics Engineer | Custom ROM & Kernel Developer",
    summary: "Electrical and Electronics Engineering graduate with hands-on experience in electrical systems, hardware prototyping, and system integration. Passionate about electric vehicle technologies, motor systems, and efficient energy transfer, with a strong commitment to open-source culture.",
    email: "niranjankannan2003@gmail.com",
    stats: [
      { value: "100+", label: "OTA Builds" },
      { value: "1000+", label: "Downloads" },
      { value: "15+", label: "Technical Events" },
      { value: "40%", label: "Participation Growth" }
    ]
  },
  about: {
    details: [
      {
        title: "Electrical Engineering",
        content: "Specializing in EEE with focus on EV technologies, motor systems, and power electronics.",
        icon: User
      },
      {
        title: "System Development",
        content: "Experienced Custom ROM developer maintaining Voltage OS for Qualcomm devices since 2021.",
        icon: Code
      },
      {
        title: "Community Leadership",
        content: "Chairperson of IEEE RAS SBC and FOSS Cell Student Ambassador at GEC Idukki.",
        icon: Heart
      },
      {
        title: "Automation",
        content: "Building toolkits like ScriptSculptor to automate development workflows using Python and Bash.",
        icon: BookOpen
      }
    ]
  },
  skills: {
    categories: [
      {
        title: "Engineering Tools",
        skills: ["AutoCAD", "MATLAB", "KiCad", "Embedded Systems", "Circuit Design"]
      },
      {
        title: "Programming",
        skills: ["Python", "Bash", "Shell Scripting", "C", "Arduino"]
      },
      {
        title: "Systems & OS",
        skills: ["Linux Server", "Kernel Debugging", "Android ROM Dev", "VMware", "Git"]
      },
      {
        title: "Languages",
        skills: ["English", "Malayalam"]
      }
    ]
  },
  experiences: [
    {
      role: "Production Associate",
      company: "Schneider Electric India Private Limited",
      period: "May 2026 - Present",
      type: "Employment",
      achievements: [
        "Collaborating with production teams to ensure high-quality manufacturing of electrical systems.",
        "Monitoring production lines for efficiency and adherence to safety protocols."
      ],
      location: "Chennai, India"
    },
    {
      role: "Chairperson",
      company: "IEEE RAS SBC, GEC Idukki",
      period: "2025 - 2026",
      type: "Leadership",
      achievements: [
        "Led 15+ technical events, driving a 40% increase in student participation.",
        "Managed chapter operations and technical workshops."
      ],
      location: "Idukki"
    },
    {
      role: "Custom ROM Developer",
      company: "Voltage OS Project",
      period: "2021 - Present",
      type: "Open Source",
      achievements: [
        "Delivered 100+ OTA builds for Qualcomm devices with 1000+ downloads.",
        "Reduced build failure rate by 30% through device tree and kernel optimizations."
      ],
      techStack: ["C", "Linux Kernel", "Android"]
    },
    {
      role: "Solar Technician",
      company: "Lifestyles",
      period: "Aug 2022 - Jul 2023",
      type: "Employment",
      achievements: [
        "Installed and tested 15+ solar systems in homes and businesses.",
        "Achieved 98% first-time fix rate on inverter and battery setups."
      ],
      location: "Kollam"
    },
    {
      role: "Industrial Training",
      company: "KSEB",
      period: "Sep 2024",
      type: "Training",
      achievements: [
        "One week training in substation monitoring, transmission lines, and fault handling.",
        "Observed load management and relay operations at 110kV substation."
      ],
      location: "Koorkkenchery"
    }
  ],
  projects: [
    {
      id: "wireless-ev-charging",
      title: "Dynamic Wireless EV Charging",
      category: "Engineering",
      description: "Prototype using resonant inductive coupling, integrating power converters and real-time monitoring for efficiency study.",
      tags: ["Arduino", "Power Electronics", "EV", "Embedded"],
      image: "/projects/DWEVC.png",
      githubUrl: "https://github.com/mrfox2003"
    },
    {
      id: "arduino-fire-fighting-robot",
      title: "Arduino-Based Fire Fighting Robot",
      category: "Engineering",
      description: "RF-controlled robotic system for fire suppression in hazardous environments with manual and semi-auto operation.",
      tags: ["Arduino", "Robotics", "RF Communication", "Hardware"],
      image: "/projects/Firefighting.png",
      githubUrl: "https://github.com/mrfox2003"
    },
    {
      id: "phycoglow",
      title: "PhycoGlow",
      category: "Innovation",
      description: "Algal-based lamp system combining illumination, air purification, and aroma diffusion. Patent pending (202641008510).",
      tags: ["Sustainability", "Product Design", "Biotech"],
      image: "/projects/phycoglow.png",
      githubUrl: "https://github.com/mrfox2003"
    },
    {
      id: "voltage-os",
      title: "Voltage OS",
      category: "Software",
      description: "Open-source Android custom ROM focused on performance and stability. 40+ OTA updates for Qualcomm devices.",
      tags: ["Android", "AOSP", "Kernel", "C"],
      image: "/projects/voltageos.png",
      githubUrl: "https://github.com/mrfox2003"
    },
    {
      id: "meraki-kernel",
      title: "Meraki Kernel",
      category: "Software",
      description: "Custom Linux kernel for Android with modified CPU scheduling and thermal profiles for improved efficiency.",
      tags: ["Linux", "Kernel", "Android", "C"],
      image: "/projects/merakikernel.png",
      githubUrl: "https://github.com/mrfox2003"
    },
    {
      id: "scriptsculptor",
      title: "ScriptSculptor",
      category: "Software",
      description: "Toolkit for automating development workflows and system setup using Python and Bash scripts.",
      tags: ["Python", "Bash", "Automation", "DevOps"],
      image: "/projects/scriptsculptor.png",
      githubUrl: "https://github.com/mrfox2003"
    },
    {
      id: "ieee-ras-sbc-website",
      title: "IEEE RAS SBC GECI Website",
      category: "Software",
      description: "Official chapter website with responsive UI and event management features.",
      tags: ["React", "UI/UX", "Tailwind"],
      image: "/projects/ieeeras.png",
      liveUrl: "https://ieee-ras-sbc-geci.vercel.app",
      githubUrl: "https://github.com/mrfox2003"
    },
    {
      id: "dronex-event-website",
      title: "Dronex Event Website",
      category: "Software",
      description: "Event website for registrations, updates, and information delivery with a clean user interface.",
      tags: ["Web Dev", "UI/UX", "Event Management"],
      image: "/projects/dronex.png",
      liveUrl: "https://dronexieeesbgeci.live",
      githubUrl: "https://github.com/mrfox2003"
    }
  ],
  education: [
    {
      degree: "B.Tech in Electrical and Electronics Engineering",
      institution: "Government Engineering College, Idukki",
      period: "May 2026",
      location: "Kerala, India"
    },
    {
      degree: "Diploma in Electrical and Electronics Engineering",
      institution: "Sree Narayana Polytechnic College, Kollam",
      period: "Mar 2022",
      location: "Kerala, India"
    },
    {
      degree: "THSLC",
      institution: "Technical High School, Ezhukone",
      period: "Mar 2019",
      location: "Kollam, India"
    }
  ],
  socialLinks: {
    github: "https://github.com/mrfox2003",
    linkedin: "https://linkedin.com/in/niranjanbr2003",
    twitter: "https://x.com/mrfox2003"
  }
};
