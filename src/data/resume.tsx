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
    "Github Action"
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
      end: "Now",
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
      end: "2026",
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
  // hackathons: [
  // {
  //   title: "Hack Western 5",
  //   dates: "November 23rd - 25th, 2018",
  //   location: "London, Ontario",
  //   description:
  //     "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
  //   image:
  //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
  //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
  //   links: [],
  // },
  // {
  //   title: "Hack The North",
  //   dates: "September 14th - 16th, 2018",
  //   location: "Waterloo, Ontario",
  //   description:
  //     "Developed a mobile application which delivers university campus wide events in real time to all students.",
  //   image:
  //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
  //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
  //   links: [],
  // },
  // {
  //   title: "FirstNet Public Safety Hackathon",
  //   dates: "March 23rd - 24th, 2018",
  //   location: "San Francisco, California",
  //   description:
  //     "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
  //   icon: "public",
  //   image:
  //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
  //   links: [],
  // },
  // {
  //   title: "DeveloperWeek Hackathon",
  //   dates: "February 3rd - 4th, 2018",
  //   location: "San Francisco, California",
  //   description:
  //     "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
  //   image:
  //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
  //   links: [
  //     {
  //       title: "Github",
  //       icon: <Icons.github className="h-4 w-4" />,
  //       href: "https://github.com/cryptotrends/cryptotrends",
  //     },
  //   ],
  // },
  // {
  //   title: "HackDavis",
  //   dates: "January 20th - 21st, 2018",
  //   location: "Davis, California",
  //   description:
  //     "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
  //   image:
  //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
  //   win: "Best Data Hack",
  //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
  //   links: [
  //     {
  //       title: "Devpost",
  //       icon: <Icons.globe className="h-4 w-4" />,
  //       href: "https://devpost.com/software/my6footprint",
  //     },
  //     {
  //       title: "ML",
  //       icon: <Icons.github className="h-4 w-4" />,
  //       href: "https://github.com/Wallet6/my6footprint-machine-learning",
  //     },
  //     {
  //       title: "iOS",
  //       icon: <Icons.github className="h-4 w-4" />,
  //       href: "https://github.com/Wallet6/CarbonWallet",
  //     },
  //     {
  //       title: "Server",
  //       icon: <Icons.github className="h-4 w-4" />,
  //       href: "https://github.com/Wallet6/wallet6-server",
  //     },
  //   ],
  // },
  // {
  //   title: "ETH Waterloo",
  //   dates: "October 13th - 15th, 2017",
  //   location: "Waterloo, Ontario",
  //   description:
  //     "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
  //   image:
  //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
  //   links: [
  //     {
  //       title: "Organization",
  //       icon: <Icons.github className="h-4 w-4" />,
  //       href: "https://github.com/ethdocnet",
  //     },
  //   ],
  // },
  // {
  //   title: "Hack The North",
  //   dates: "September 15th - 17th, 2017",
  //   location: "Waterloo, Ontario",
  //   description:
  //     "Developed a virtual reality application allowing users to see themselves in third person.",
  //   image:
  //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
  //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //   links: [
  //     {
  //       title: "Streamer Source",
  //       icon: <Icons.github className="h-4 w-4" />,
  //       href: "https://github.com/justinmichaud/htn2017",
  //     },
  //     {
  //       title: "Client Source",
  //       icon: <Icons.github className="h-4 w-4" />,
  //       href: "https://github.com/dillionverma/RTSPClient",
  //     },
  //   ],
  // },
  // {
  //   title: "Hack The 6ix",
  //   dates: "August 26th - 27th, 2017",
  //   location: "Toronto, Ontario",
  //   description:
  //     "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
  //   image:
  //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
  //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //   links: [
  //     {
  //       title: "Source",
  //       icon: <Icons.github className="h-4 w-4" />,
  //       href: "https://github.com/ShareShip/ShareShip",
  //     },
  //     {
  //       title: "Site",
  //       icon: <Icons.globe className="h-4 w-4" />,
  //       href: "https://share-ship.herokuapp.com/",
  //     },
  //   ],
  // },
  // {
  //   title: "Stupid Hack Toronto",
  //   dates: "July 23rd, 2017",
  //   location: "Toronto, Ontario",
  //   description:
  //     "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
  //   image:
  //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
  //   links: [
  //     {
  //       title: "Source",
  //       icon: <Icons.github className="h-4 w-4" />,
  //       href: "https://github.com/nsagirlfriend/nsagirlfriend",
  //     },
  //   ],
  // },
  // {
  //   title: "Global AI Hackathon - Toronto",
  //   dates: "June 23rd - 25th, 2017",
  //   location: "Toronto, Ontario",
  //   description:
  //     "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
  //   image:
  //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
  //   win: "1st Place Winner",
  //   links: [
  //     {
  //       title: "Article",
  //       icon: <Icons.globe className="h-4 w-4" />,
  //       href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
  //     },
  //     {
  //       title: "Source",
  //       icon: <Icons.github className="h-4 w-4" />,
  //       href: "https://github.com/TinySamosas/",
  //     },
  //   ],
  // },
  // {
  //   title: "McGill AI for Social Innovation Hackathon",
  //   dates: "June 17th - 18th, 2017",
  //   location: "Montreal, Quebec",
  //   description:
  //     "Developed realtime facial microexpression analyzer using AI",
  //   image:
  //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
  //   links: [],
  // },
  // {
  //   title: "Open Source Circular Economy Days Hackathon",
  //   dates: "June 10th, 2017",
  //   location: "Toronto, Ontario",
  //   description:
  //     "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
  //   image:
  //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
  //   win: "1st Place Winner",
  //   links: [
  //     {
  //       title: "Source",
  //       icon: <Icons.github className="h-4 w-4" />,
  //       href: "https://github.com/dillionverma/genecis",
  //     },
  //   ],
  // },
  // {
  //   title: "Make School's Student App Competition 2017",
  //   dates: "May 19th - 21st, 2017",
  //   location: "International",
  //   description: "Improved PocketDoc and submitted to online competition",
  //   image:
  //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
  //   win: "Top 10 Finalist | Honourable Mention",
  //   links: [
  //     {
  //       title: "Medium Article",
  //       icon: <Icons.globe className="h-4 w-4" />,
  //       href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
  //     },
  //     {
  //       title: "Devpost",
  //       icon: <Icons.globe className="h-4 w-4" />,
  //       href: "https://devpost.com/software/pocketdoc-react-native",
  //     },
  //     {
  //       title: "YouTube",
  //       icon: <Icons.youtube className="h-4 w-4" />,
  //       href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
  //     },
  //     {
  //       title: "Source",
  //       icon: <Icons.github className="h-4 w-4" />,
  //       href: "https://github.com/dillionverma/pocketdoc-react-native",
  //     },
  //   ],
  // },
  // {
  //   title: "HackMining",
  //   dates: "May 12th - 14th, 2017",
  //   location: "Toronto, Ontario",
  //   description: "Developed neural network to optimize a mining process",
  //   image:
  //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
  //   links: [],
  // },
  // {
  //   title: "Waterloo Equithon",
  //   dates: "May 5th - 7th, 2017",
  //   location: "Waterloo, Ontario",
  //   description:
  //     "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
  //   image:
  //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
  //   links: [
  //     {
  //       title: "Devpost",
  //       icon: <Icons.globe className="h-4 w-4" />,
  //       href: "https://devpost.com/software/pocketdoc-react-native",
  //     },
  //     {
  //       title: "YouTube",
  //       icon: <Icons.youtube className="h-4 w-4" />,
  //       href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
  //     },
  //     {
  //       title: "Source",
  //       icon: <Icons.github className="h-4 w-4" />,
  //       href: "https://github.com/dillionverma/pocketdoc-react-native",
  //     },
  //   ],
  // },
  // {
  //   title: "SpaceApps Waterloo",
  //   dates: "April 28th - 30th, 2017",
  //   location: "Waterloo, Ontario",
  //   description:
  //     "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
  //   image:
  //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
  //   links: [
  //     {
  //       title: "Source",
  //       icon: <Icons.github className="h-4 w-4" />,
  //       href: "https://github.com/dillionverma/earthwatch",
  //     },
  //   ],
  // },
  // {
  //   title: "MHacks 9",
  //   dates: "March 24th - 26th, 2017",
  //   location: "Ann Arbor, Michigan",
  //   description:
  //     "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
  //   image:
  //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
  //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //   links: [
  //     {
  //       title: "Source",
  //       icon: <Icons.github className="h-4 w-4" />,
  //       href: "https://github.com/dillionverma/threejs-planes",
  //     },
  //   ],
  // },
  // {
  //   title: "StartHacks I",
  //   dates: "March 4th - 5th, 2017",
  //   location: "Waterloo, Ontario",
  //   description:
  //     "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
  //   image:
  //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
  //   win: "1st Place Winner",
  //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //   links: [
  //     {
  //       title: "Source (Mobile)",
  //       icon: <Icons.github className="h-4 w-4" />,
  //       href: "https://github.com/mattBlackDesign/recipic-ionic",
  //     },
  //     {
  //       title: "Source (Server)",
  //       icon: <Icons.github className="h-4 w-4" />,
  //       href: "https://github.com/mattBlackDesign/recipic-rails",
  //     },
  //   ],
  // },
  // {
  //   title: "QHacks II",
  //   dates: "February 3rd - 5th, 2017",
  //   location: "Kingston, Ontario",
  //   description:
  //     "Developed a mobile game which enables city-wide manhunt with random lobbies",
  //   image:
  //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
  //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //   links: [
  //     {
  //       title: "Source (Mobile)",
  //       icon: <Icons.github className="h-4 w-4" />,
  //       href: "https://github.com/dillionverma/human-huntr-react-native",
  //     },
  //     {
  //       title: "Source (API)",
  //       icon: <Icons.github className="h-4 w-4" />,
  //       href: "https://github.com/mattBlackDesign/human-huntr-rails",
  //     },
  //   ],
  // },
  // {
  //   title: "Terrible Hacks V",
  //   dates: "November 26th, 2016",
  //   location: "Waterloo, Ontario",
  //   description:
  //     "Developed a mock of Windows 11 with interesting notifications and functionality",
  //   image:
  //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
  //   links: [
  //     {
  //       title: "Source",
  //       icon: <Icons.github className="h-4 w-4" />,
  //       href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
  //     },
  //   ],
  // },
  // {
  //   title: "Portal Hackathon",
  //   dates: "October 29, 2016",
  //   location: "Kingston, Ontario",
  //   description:
  //     "Developed an internal widget for uploading assignments using Waterloo's portal app",
  //   image:
  //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
  //   links: [
  //     {
  //       title: "Source",
  //       icon: <Icons.github className="h-4 w-4" />,
  //       href: "https://github.com/UWPortalSDK/crowmark",
  //     },
  //   ],
  // },
  // ],
} as const;
