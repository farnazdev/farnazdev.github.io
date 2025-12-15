import iotDash from "../assets/img-projects/iotDash.png";
import imgTelCRM from "../assets/img-projects/telegramcrm.png";
import imgPixter from "../assets/img-projects/pixter.png";
import accountManager from "../assets/img-projects/accountMng.png";


export const projects = [
  {
    title: "Telegram Bot CRM",
    description: "Full-stack Dashboard for managing and analyzing CRM data, with charts and data analytics.",
    image: imgTelCRM.src,
    tecnology: ["Next.js", "Express", "MongoDB"],
    demo: "#",
    code: "#",
  },
  {
    title: "Pixter Social App",
    description:
      "Pixter is a fully social media app with a modern and responsive design.",
    image:
    imgPixter.src,
    tecnology: ["Android Studio", "Java", "PHP", "APIs"],
    demo: "https://drive.google.com/drive/folders/1GMQ3wglrvox8y-5vk_1mhwkJqWr6xYAO?usp=sharing",
    code: "https://github.com/farnazdev/pixter-social-app.git",
  },
  {
    title: "Telegram Account Manager",
    description:
      "Full backend for managing Telegram accounts and their data.",
    image: accountManager.src,
    tecnology: ["Nodejs", "Express", "JavaScript"],
    demo: "#",
    code: "https://github.com/farnazdev/telegram-account-manager.git",
  },
  {
    title: "IoT Dashboard",
    description:
      "Full-Stack IoT Dashboard for managing IoT devices and data. Includes features such as device management, data visualization, and alerts.",
    image: iotDash.src,
    tecnology: ["JavaScript", "PHP", "MongoDB"],
    demo: "https://drive.google.com/file/d/1wklzyDCOnUFf858gKwRfW63J3VNHkAPv/view?usp=sharing",
    code: "https://github.com/farnazdev/IoT-dashboard.git",
  },
];
