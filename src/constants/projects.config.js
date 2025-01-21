import { Icons } from "@/components/ui/icons";
import { ExternalLink, Link, ArchiveIcon } from "lucide-react";

export const PROJECTS = [
  {
    title: "Picwise.co - Image Optimization Application",
    href: "https://www.picwise.co",
    dates: "2023",
    active: false,
    description:
      "A feature-rich web application offering advanced image processing tools, including free image compression upto 90%, background removal, format conversion (JPG/PNG), and resizing. Designed to ensure high performance and user-friendliness for photographers, designers, and casual users alike. Built with modern web technologies like Next.js for scalability.",
    technologies: ["Typescript", "HTML", "TailwindCSS", "NextJS"],
    links: [
      {
        type: "Website",
        href: "https://www.picwise.co",
        icon: <Icons.globe className="h-3 w-3" />,
      },
      {
        type: "Source",
        href: "https://github.com/Aryainguz/picwise.co",
        icon: <Icons.github className="h-3 w-3" />,
      },
    ],
    image: "/projects/picwiseco.png",
    video: "",
  },
  {
    title: "OpenCourse.in - AI Powered Free Learning",
    href: "https://www.opencourse.in",
    dates: "Oct 2024 - Present",
    active: false,
    description:
      "An AI-powered platform that generates personalized video-based courses, aimed at providing free, accessible education. By leveraging AI, it curates relevant content and creates tailored learning paths, democratizing education for all.",
    technologies: ["Gemini AI", "Typescript", "Nextjs", "PostgreSQL"],
    links: [
      {
        type: "Website",
        href: "https://www.opencourse.in/",
        icon: <Icons.globe className="h-3 w-3" />,
      },
      {
        type: "Source",
        href: "https://github.com/Aryainguz/opencourse.in",
        icon: <Icons.github className="h-3 w-3" />,
      },
    ],
    image: "/projects/opencoursein.png",
    video: "",
  },
];

export const FREELANCE_PROJECTS = [
  // {
  //   title: "Crownworld",
  //   role: "Developer",
  //   dates: "2023",
  //   location: "Remote",
  //   description: "ReactJS website Styled with Material UI",
  //   image: "/images/professional/crownworld.jpeg",
  //   mlh: "#",
  //   archive: false,

  //   links: [
  //     {
  //       title: "Website",
  //       href: "https://crownworld.io",
  //       icon: <Link className="h-3 w-3" />,
  //     },
  //     // {
  //     //   title: "Proof",
  //     //   href: "#",
  //     //   icon: <ExternalLink className="h-3 w-3" />,
  //     // },
  //   ],
  // }
];
