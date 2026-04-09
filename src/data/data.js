import Logo from "../assets/logo.jpg";
import blackFoldex from "../assets/product/blackFoldex.jpg";
import blueFoldex from "../assets/product/blueFoldex.jpg";
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
  title: "One board Many roles",
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
    "Discover our curated selection of digital and sustainable solutions designed to propel your brand forward.",
};

export const productsData = [
  {
    id: 1,
    name: "FoldeX Hitam",
    price: 65000,
    description: "FoldeX Hitam",
    image: blackFoldex,
    isNew: false,
  },
  {
    id: 2,
    name: "FoldeX biru",
    price: 65000,
    description: "FoldeX biru",
    image: blueFoldex,
    isNew: true,
  },
];

export const aboutData = {
  title: "About Us",
  description:
    "It is a Student Company that focuses on developing environmental awareness, green innovation, and youth leadership. This company was formed as a forum for learning, collaboration, and creating creative solutions to sustainability issues.",
  mainStat: {
    value: "2+",
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
  whatsapp: "6281234567890",
  location: "Sidoarjo, Indonesia",
  liveChat: "Active 24/7",
};

export const footerData = {
  description:
    "Architecting the next generation of modular digital ecosystems. We combine high-performance infrastructure with sustainable design principles.",
  socials: [
    {
      platform: "Instagram",
      href: "https://www.instagram.com/foldex.wiseverda/",
    },
    { platform: "Tiktok", href: "https://www.tiktok.com/@foldex.wiseverda" },
  ],
  columns: [
    {
      title: "Ecosystem",
      links: [
        { name: "Infrastructure", href: "#" },
        { name: "Edge Computing", href: "#" },
        { name: "Modular APIs", href: "#" },
        { name: "Security", href: "#" },
        { name: "Compliance", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Strategy", href: "#" },
        { name: "Network Status", href: "#" },
        { name: "Research", href: "#" },
        { name: "Contact Support", href: "#" },
        { name: "Sustainability", href: "#" },
      ],
    },
  ],
  bottomLinks: [
    { name: "Privacy Shield", href: "#" },
    { name: "Terms of Service", href: "#" },
  ],
  copyright: "© 2024 WiseVerda Systems. All rights reserved.",
  status: "System Status: Operational",
};
