import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Kittikun Buntoyut",
  initials: "DV",
  url: "https://www.kittikun.dev",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description: "No Boundary, Make Tomorrow Better than Today",
  // "Aspiring Software Engineer. Computer Science student at Kasetsart University. No Boundary, Make Tomorrow Better than Today",
  summary:
    "Senior-year Computer Science student at Kasetsart University with hands-on experience in Software Engineering through both internships and freelance projects. Skilled in software development, system design, and collaborative teamwork, with a strong commitment to delivering high-quality, user-focused solutions.",
  // "[Currently pursuing my Bachelor's degree in Computer Science at Kasetsart University](/#education) while building extensive real-world [experience as a full-stack developer](/#work). I've [contributed to diverse projects from hospital mobile applications to comprehensive construction management systems](/#projects), collaborated with professional development teams, and developed solutions spanning healthcare, education, fintech, and enterprise sectors. I combine academic learning with practical problem-solving, always seeking new challenges in the tech industry.",

  // "At the end of 2022, I quit my job as a software engineer to go fulltime into building and scaling my own SaaS businesses. In the past, [I pursued a double degree in computer science and business](/#education), [interned at big tech companies in Silicon Valley](https://www.youtube.com/watch?v=d-LJ2e5qKdE), and [competed in over 21 hackathons for fun](/#hackathons). I also had the pleasure of being a part of the first ever in-person cohort of buildspace called [buildspace sf1](https://buildspace.so/sf1).",
  avatarUrl: "/me.png",
  skills: [
    "Typescript",
    "Javascript",
    "Java",
    "SQL",
    "React",
    "Next.js",
    "Angular",
    "Flutter",
    "Tailwind CSS",
    "Node.js",
    "Nestjs",
    "Go",
    "Prisma",
    "Sequelize",
    "MySQL",
    "Postgres",
    "MongoDB",
    "Redis",
    "Minio S3",
    "Firebase",
    "Database Design",
    "Docker",
    "Kubernetes",
    "Amazon Web Services (AWS)",
    "Git",
    "Github Action",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "pro.kittikun.2546@gmail.com",
    tel: "+6682-830-2070",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/prokittikun",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/prokittikun/",
        icon: Icons.linkedin,

        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://www.instagram.com/_pro.kittikun/",
        icon: Icons.instagram,

        navbar: true,
      },
      // Youtube: {
      //   name: "Youtube",
      //   url: "https://dub.sh/dillion-youtube",
      //   icon: Icons.youtube,
      //   navbar: true,
      // },
      email: {
        name: "Send Email",
        url: "mailto:pro.kittikun.2546@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "SkillLane Technology Public Co., Ltd.",
      badges: ["Internship"],
      href: "https://www.skilllane.com/",
      location: "Bangkok, Thailand",
      title: "Software Engineer",
      logoUrl: "/experience/skilllane.png",
      start: "Jun 2025",
      end: "",
      description: (
        <>
          <ul className="list-disc pl-5">
            <li>
              Collaborated in an Agile team environment with daily scrums,
              sprint planning, and sprint demos to deliver B2B e-learning
              platform features for enterprise clients using Next.js, Ant
              Design, and Redux-Saga with Atomic Design Methodology.
            </li>
            <li>
              Developed full-stack applications with NestJS and TypeScript
              backend following Clean Architecture principles, integrated
              MongoDB for data storage and RabbitMQ for messaging, and
              implemented CI/CD workflows using GitHub Actions with Trivy
              security scanning for Docker images.
            </li>
            <li>
              Designed and tested Kubernetes liveness probes integrated with
              health check APIs to automatically recover services during
              dependency failures, conducting controlled experiments to validate
              system resilience when services lose connectivity to external
              dependencies like RabbitMQ.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Siam IT Networking (Thailand) Co., Ltd.",
      href: "https://siamit.co.th/",
      badges: ["Part-time"],
      location: "Surat Thani, Thailand",
      title: "Software Engineer",
      logoUrl: "/experience/siamit.png",
      start: "Sep 2021",
      end: "Dec 2021",
      description: (
        <>
          <ul className="list-disc pl-5">
            <li>
              Developed hospital mobile app (Angular/Ionic) with e-commerce
              system for in-hospital convenience products.
            </li>
            <li>
              Implemented bilingual support (i18n) for Thai Food mobile app
              using Angular/Ionic, enhancing international user accessibility.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Siam IT Networking (Thailand) Co., Ltd.",
      href: "https://siamit.co.th/",
      badges: ["Internship"],
      location: "Surat Thani, Thailand",
      title: "Software Engineer",
      logoUrl: "/experience/siamit.png",
      start: "May 2021",
      end: "Aug 2021",
      description: (
        <>
          <ul className="list-disc pl-5">
            <li>
              Developed and implemented a dynamic marketing report website for a
              food delivery application using Angular, enhancing data
              visualization and strategic decision-making.
            </li>
            <li>
              Built a subscription-based stock trading alert platform using
              Angular, NestJS, and MongoDB with Socket.IO for real-time buy/sell
              signals, implementing monthly and annual subscription models.
            </li>
          </ul>
        </>
      ),
    },
  ],
  education: [
    {
      school: "Kasetsart University",
      href: "https://www.ku.ac.th",
      degree: "Bachelor's Degree in Computer Science",
      logoUrl: "/kulogo.png",
      start: "2022",
      end: "Present",
    },
  ],
  projects: [
    {
      title: "Notification AMQP",
      href: "/project/notification-amqp",
      dates: "Aug 2025",
      active: true,
      description:
        "A personal project built to explore and learn Clean Architecture principles, NestJS, RabbitMQ, and asynchronous email processing with @nestjs-modules/mailer.",
      technologies: [
        "Javascript",
        "NestJS",
        "Typescript",
        "RabbitMQ",
        "Nodemailer",
      ],
      links: [
        {
          type: "Client Source",
          href: "https://github.com/prokittikun/notification-amqp-client",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Service Source",
          href: "https://github.com/prokittikun/notification-amqp",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "thumbnail/notification.png",
      video: "",
      // "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
    {
      title: "BadmintonBuddy",
      href: "/project/badbuddy",
      dates: "Oct 2024",
      active: true,
      description:
        "This repository a web application that facilitates organizing badminton meetups by allowing users to create events, invite participants, and manage badminton court bookings. (Coursework: 01418471 Software Design and Development)",
      technologies: [
        "Next.js",
        "Typescript",
        "tRPC",
        "Go",
        "Tailwind CSS",
        "Mantine UI",
        "Docker",
      ],
      technologiesIcons: ["typescript", "go", "java"],
      links: [
        {
          type: "Source",
          href: "https://github.com/prokittikun/badbuddy",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "thumbnail/badmintonbuddy.png",
      video: "",
    },
    {
      title: "BuildWise",
      href: "/project/buildwise",
      dates: "Jun 2024 - Oct 2024",
      active: true,
      description:
        "A project for planning and managing construction works, including BOQ preparation and quotation generation. It centralizes data on materials, jobs, suppliers, companies, and clients to reduce human errors and improve workflow efficiency through seamless integration. (Coursework: 01418321 System Analysis and Design)",
      technologies: [
        "Next.js",
        "Typescript",
        "Go",
        "PostgreSQL",
        "Tailwind CSS",
        "Mantine UI",
        "Docker",
        "Puppeteer",
      ],
      links: [
        {
          type: "Frontend Source",
          href: "https://github.com/prokittikun/construction-planner",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Backend Source",
          href: "https://github.com/prokittikun/boonkosang-construction-be",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "thumbnail/buildwise.png",
    },
    {
      title: "RC Panda",
      href: "/project/rcpanda",
      dates: "Apr 2024",
      active: true,
      description:
        "A web platform for the Raycity game on the Panda server, providing player account management, TrueWallet top-up system, admin tools, and an analytics dashboard. The system enhances player experience and supports effective monetization.",
      technologies: [
        "Next.js",
        "Typescript",
        "tRPC",
        "SQL Server",
        "Prisma",
        "Tailwind CSS",
        "Next UI",
        "Cloudflare",
      ],
      links: [],
      image: "thumbnail/rcpanda.png",
      video: "",
      // "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
    {
      title: "Campfin",
      href: "/project/campfin",
      dates: "Dec 2023 - March 2024",
      active: true,
      description:
        "A mobile app that allows users to post trips, join existing trips, and chat with other participants within trips. Supports user authentication and provides a platform to easily connect and coordinate with fellow campers or travelers.(Coursework: 01418342 Mobile Application)",
      technologies: [
        "Dart",
        "Flutter",
        "NestJS",
        "Firebase",
        "PostgreSQL",
        "Prisma",
        "Docker",
      ],
      links: [
        {
          type: "Frontend Source",
          href: "https://github.com/CS342-Mobile-Application/Campfin/tree/develop",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Backend Source",
          href: "https://github.com/prokittikun/MOBILE-CAMPFIN-BACKEND",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "thumbnail/campfin.png",
      video: "",
      // "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
    {
      title: "KU Talks",
      href: "/project/kutalks",
      dates: "Nov 2023 - Dec 2023",
      active: true,
      description:
        "Registration Management System for the KU-HUM Academic Talk Series: In Celebration of the 80th Anniversary of Kasetsart University",
      technologies: [
        "Next.js",
        "Typescript",
        "tRPC",
        "NextAuth",
        "Prisma",
        "PostgreSQL",
        "Tailwind CSS",
        "Ant Design",
        "Nodemailer",
      ],
      links: [
        {
          type: "Website",
          href: "https://kutalks.ku.ac.th",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "thumbnail/kutalks.png",
    },
    {
      title: "KU SD",
      href: "/project/kusd",
      dates: "Apr 2023 - Dec 2023",
      active: true,
      description:
        "A project designed to streamline document handling and project approval processes for student organizations at Kasetsart University, improving efficiency and accessibility through a centralized online system.",
      technologies: [
        "Next.js",
        "Typescript",
        "tRPC",
        "PostgreSQL",
        "Tailwind CSS",
        "Mantine UI",
        "Docker",
      ],
      links: [
        {
          type: "Website",
          href: "https://saku.sa.ku.ac.th/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "thumbnail/kusd.png",
      video: "",
      // "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  competitions: [
    {
      title: "ExxonMobile Bootcathon 2024",
      dates: "June 29th, 2024",
      location: "Bangkok, Thailand",
      description:
        "Joined ExxonMobil Bootcathon 2024 (Analytics/ML), actively engaging in data analysis and hands-on use of ML tools to support insights for improving future sales performance.",
      image: "/thumbnail/exxon.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "RTARF Cyber Warrior Contest 2023",
      dates: "July 12th, 2023",
      location: "Bangkok, Thailand",
      description:
        "Competed in RTARF Cyber Warrior Contest 2023, a university-level Capture the Flag (CTF) competition with 40 teams from 14+ universities, achieving Top 16 with a team of three.",
      image: "/thumbnail/rtarf.png",
      links: [],
    },
    {
      title: "HACKaTHAILAND 2023",
      dates: "July 2023",
      location: "Bangkok, Thailand",
      description:
        "Joined HACKaTHAILAND 2023, building a blockchain system to securely share patient records across hospitals, advancing to the final 500 teams.",
      image: "/thumbnail/hackathailand.png",
      links: [],
    },
    {
      title:
        "Academic Conference of the Association of Future Thai Professionals",
      dates: "February 22nd, 2022",
      location: "Trang, Thailand",
      description:
        "Competed in the 30th Academic Conference of the Association of Future Thai Professionals (national-level Computer Programming competition), where the top 1–3 teams from each region of Thailand advanced to compete against each other, forming a total of 15 teams. Our team received honorable mention (6th place).",
      image: "/thumbnail/aft.png",
      links: [],
    },
    {
      title:
        "Academic Conference of the Association of Future Thai Professionals",
      dates: "February 1st, 2022",
      location: "Trang, Thailand",
      description:
        "Awarded 1st runner-up in Computer Programming at the 32nd Academic Conference of the Association of Future Thai Professionals (Southern Thailand Vocational Skills Competition) in 2022.",
      image: "/thumbnail/aft.png",
      links: [],
    },
    {
      title:
        "Academic Conference of the Association of Future Thai Professionals",
      dates: "March 22nd, 2021",
      location: "Nakhon Si Thammarat, Thailand",
      description:
        "Won 1st place in Computer Programming at the 31st Academic Conference of the Association of Future Thai Professionals (Southern Thailand Vocational Skills Competition) in 2021.",
      image: "/thumbnail/aft.png",
      links: [],
    },
    {
      title: "NECTEC NSTDA R Cheewa Inno Camp 2020 (5th edition)",
      dates: "November 26th - 28th, 2020",
      location: "Surat Thani, Thailand",
      description:
        "Participated in NECTEC NSTDA R Cheewa Inno Camp 2020 (5th edition), learning to use KidBright IoT boards and competing in an IoT solution challenge. Our team developed a flood warning system that monitors water levels and sends alerts via LINE Notify when thresholds are exceeded, earning 1st runner-up among 10+ vocational colleges from southern Thailand.",
      image: "/thumbnail/nectec.png",
      links: [],
    },
  ],
} as const;
