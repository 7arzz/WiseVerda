import Logo from "../assets/logo.jpg";
import blackFoldex from "../assets/product/blackFoldex.jpg";
import blueFoldex from "../assets/product/blueFoldex.jpg";
import softPinkFoldex from "../assets/product/softPinkFoldex.jpg";
import heroVideo from "../assets/vid.mp4";

export const brandData = {
  name: "WiseVerda",
  logo: Logo,
  slogan: "WiseVerda Company",
};

export const navLinks = [
  { name: "Home", href: "#" },
  { name: "Products", href: "#products" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export const heroData = {
  title: "Smart Innovation for Productivity",
  subtitle: "One solution for writing, storage, and document organization",
  showcaseVideo: heroVideo,
  stats: {
    score: "99%",
    label: "Sustainability Score",
  },
};

export const productsSection = {
  title: "Our Premium Products",
  subtitle:
    "Make your choice from the products we have designed to enhance your personality.",
};

export const productsData = [
  {
    id: 1,
    name: "FoldeX Hitam",
    price: 67500,
    description: "Black FoldeX ",
    image: blackFoldex,
    isNew: false,
  },
  {
    id: 2,
    name: "FoldeX biru",
    price: 67500,
    description: "Blue FoldeX",
    image: blueFoldex,
    isNew: true,
  },
  {
    id: 3,
    name: "FoldeX Soft Pink",
    price: 67500,
    description: "Soft Pink FoldeX",
    image: softPinkFoldex,
    isNew: true,
  },
];

import fotoBersama from "../assets/product/fotoBersama.jpg";

export const aboutData = {
  title: "About Us",
  image: fotoBersama,
  description:
    "It is a Student Company that focuses on developing environmental awareness, green innovation, and youth leadership. This company was formed as a forum for learning, collaboration, and creating creative solutions to sustainability issues.",
  mainStat: {
    value: "3+",
    label: "Month of Innovation",
  },
  features: [
    { title: "Integrity" },
    { title: "Productivity" },
    { title: "Responsibility" },
    { title: "Innovation" },
    { title: "Collaboration" },
    { title: "Awareness" },
  ],
};

export const contactData = {
  badge: "Contact Us",
  title: "Ready to Upgrade Your Personality?",
  subtitle: "Our team is ready to bring your vision to life.",
  email: "wiseverda.studentcompany19@gmail.com",
  whatsapp: "6281882807663",
  location: "Sidoarjo, Indonesia",
  liveChat: "Active 24/7",
};

export const footerData = {
  description:
    "We will be a generation of pioneers who actively contribute to ecological awareness and sustainable innovation.",
  socials: [
    {
      platform: "Instagram",
      href: "https://www.instagram.com/foldex.wiseverda/",
    },
    { platform: "Tiktok", href: "https://www.tiktok.com/@foldex.wiseverda" },
  ],
  columns: [
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#about" },
        { name: "Products", href: "#products" },
        { name: "Contact", href: "#contact" },
        { name: "Hero", href: "#" },
      ],
    },
  ],
  bottomLinks: [{ name: "Terms of Service", href: "#" }],
  copyright: "© 2024 WiseVerda Systems. All rights reserved.",
  status: "System Status: Operational",
};
