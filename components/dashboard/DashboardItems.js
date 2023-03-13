import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsPinMap } from "react-icons/bs";
import { FiUserPlus } from "react-icons/fi";
import { IoHomeOutline } from "react-icons/io5";
const DASHBOARD_ITEMS = [
  {
    icon: <IoHomeOutline color="#ffffff" size={40} />,
    link: "/dashboard/propiedades",
    title: "Propiedades",
  },
  {
    icon: <BsPinMap color="#ffffff" size={40} />,
    link: "/dashboard/localidades-zonas",
    title: "Localidades y zonas",
  },
  {
    icon: <AiOutlineMail color="#ffffff" size={40} />,
    link: "/dashboard/mensajes",
    title: "Mensajes",
  },
  {
    icon: <FiUserPlus color="#ffffff" size={40} />,
    link: "/dashboard/crear-administrador",
    title: "Crear admin",
  },
];

export default DASHBOARD_ITEMS;
