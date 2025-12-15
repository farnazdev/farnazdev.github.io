import iotDash from "../assets/img-projects/iot-dashboard.png";
import studentDash from "../assets/img-projects/stDashboard.png";
import imgTelCRM from "../assets/img-projects/tel-crm1.png";
import urbanStyle from "../assets/img-projects/urbanStyle.png";
import legalWeb from "../assets/img-projects/legalweb.webp";
import mediCare from "../assets/img-projects/medicare.jpg";
import astroFit from "../assets/img-projects/Astrofit.jpg";
import Verbenas from "../assets/img-projects/challenge-newyze.png";

export const projects = [
  {
    title: "Telegram Bot CRM",
    description:
      "Full-stack Dashboard for managing CRM data, with charts and data analytics.",
    image: imgTelCRM.src,
    tecnology: ["Next.js", "Express", "MongoDB"],
    demo: "#",
    code: "#",
    category: "fullstack",
  },
  {
    title: "Student Management System",
    description:
      "A modern and responsive web-based student management system university project. It includes complete features such as user registration, login, exams, profiles, study plans, weekly schedules, and detailed report cards—all in one elegant dashboard.",
    image: studentDash.src,
    tecnology: ["HTML","JavaScript", "BootStrap", "PHP"],
    demo: "https://drive.google.com/file/d/1FSfWvOJmQpIsKHxG2Ojot4Sbc-vortMt/view?usp=sharing",
    code: "https://github.com/farnazdev/student-management-dashboard.git",
    category: "fullstack",
  },
  {
    title: "IoT Dashboard",
    description:
      "Full-Stack IoT Dashboard for managing IoT devices and data. Includes features such as device management, data visualization, and alerts.",
    image:
      iotDash.src,
    tecnology: ["JavaScript", "PHP", "MongoDB"],
    demo: "https://drive.google.com/file/d/1wklzyDCOnUFf858gKwRfW63J3VNHkAPv/view?usp=sharing",
    code: "https://github.com/farnazdev/IoT-dashboard.git",
    category: "fullstack",
  },
  {
    title: "HoomPlus Platform",
    description:
      "A platform for managing and controlling smart home systems. It includes features such as paying for services and billing, managing home devices and users.",
    image:
      "https://i.pinimg.com/736x/a4/85/c4/a485c4da3e78f4f518ddbcdb6637bacf.jpg",
    tecnology: ["JavaScript", "contextAPI", "PHP"],
    demo: "https://drive.google.com/drive/folders/10cnMBDgUBLc-TJ1szjKQ1eX7QcJSAFYa?usp=sharing",
    code: "https://github.com/farnazdev/hoom-plus-platform.git",
    category: "backend",
  },
  {
    title: "BLE Remote",
    description:
      "A Flutter-based mobile application for communicating with ESP-based IoT devices via Bluetooth Low Energy (BLE).This app allows users to connect to hardware devices like ESP32, send and receive data, and interact with custom IoT systems—all from their smartphone.",
    image:
      "https://i.pinimg.com/736x/10/6e/cd/106ecd1bfe5ed1c3defb83ea0f87a334.jpg",
    tecnology: ["Flutter", "Dart", "C++", "APIs"],
    demo: "https://drive.google.com/drive/folders/1Tv3RJfPA2fCw0pv1ohKgLcRcJA-iOhpN?usp=sharing",
    code: "https://github.com/farnazdev/ble-remote.git",
    category: "mobile",
  },
  {
    title: "Doorcam Notifier",
    description:
      "An automated photo logging and notification system that captures an image when the parking door opens and sends it to a Bale messenger channel, along with timestamped logs.",
    image: legalWeb.src,
    tecnology: ["PHP", "REST API"],
    demo: "https://drive.google.com/drive/folders/1LHdjm0-mfvHLsNUZ6uZlJuFyMlsCB4eC?usp=sharing",
    code: "https://github.com/farnazdev/doorcam-notifier.git",
    category: "backend",
  },
  {
    title: "Reservation System",
    description:
      "A secure, OTP-based reservation system that allow users to log in with their phone number, enter a reservation code, and receive a time-limited QR code for final access. The QR code expires after 15 seconds, ensuring secure and one-time usage.",
    image: mediCare.src,
    tecnology: ["HTML", "CSS", "PHP"],
    demo: "https://drive.google.com/file/d/1q625JCwJ1z0GZhUTyA1ee-vsUzvG6gCI/view?usp=sharing",
    code: "https://github.com/farnazdev/qr-code-reservation.git",
    category: "frontend",
  },
  {
    title: "Pixter Social App",
    description:
      "Pixter is a fully functional Android-based social media platform, built to connect users through messaging, content sharing, and interactive features like following, liking, and commenting. It combines a native mobile client with a real-time backend to deliver a seamless social experience.",
    image: astroFit.src,
    tecnology: ["Android Studio", "Java", "PHP", "APIs"],
    demo: "https://drive.google.com/drive/folders/1e3LS_dAewKp9Qy_kyqeEbBagRScV94cg?usp=sharing",
    code: "https://github.com/farnazdev/pixter-social-app.git",
    category: "mobile",
  },
  {
    title: "Game Collection App",
    description: "GamePack is a collection of three interactive and educational mini-games with a user-friendly interface and a smooth gameplay experience.",
    image:
      "https://i.pinimg.com/736x/3b/4f/4e/3b4f4e170fcb1795b88f4941f49df0a2.jpg",
    tecnology: ["Android Studio", "Java"],
    demo: "#",
    code: "https://github.com/farnazdev/game-collection.git",
    category: "mobile",
  },
  {
    title: "Telegram Account Manager",
    description:
      "Full backend for managing Telegram accounts and their data.",
    image:
      "https://i.pinimg.com/736x/8f/f0/bb/8ff0bbd0e5844ed254bede44522c8338.jpg",
    tecnology: ["Nodejs", "Express", "JavaScript"],
    demo: "#",
    code: "https://github.com/farnazdev/telegram-account-manager.git",
    category: "backend",
  },
  {
    title: "Authentication System",
    description:
      "Authentication system for a web application. It includes features such as user registration, login, logout, and posting content.",
    image: Verbenas.src,
    tecnology: ["Nodejs", "Atlas", "Express", "Postman"],
    demo: "#",
    code: "https://github.com/farnazdev/authentication-template.git",
    category: "backend",
  },
  {
    title: "REST API",
    description:
      "RESTful API built with Express and MongoDB to manage tasks with CRUD operations, user registration and login with JWT.",
    image: "https://miro.medium.com/1*47S4iWVwTicFkFL4-Z4uAA.png",
    tecnology: ["Express", "Node.js", "Mongoose", "MongoDB"],
    demo: "https://back-express-todo.onrender.com",
    code: "https://github.com/farnazdev",
    category: "backend",
  },
];
