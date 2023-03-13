import React from "react";
import Elevator from "../../components/Icons/Elevator";
import Balcony from "../../components/Icons/Balcony";
import Alarm from "../../components/Icons/Alarm";
import Credit from "../../components/Icons/Credit";
import Barbecue from "../../components/Icons/Barbecue";
import Pool from "../../components/Icons/Pool";
import Backyard from "../../components/Icons/Backyard";
import Quincho from "../../components/Icons/Quincho";
import Laundry from "../../components/Icons/Laundry";
import Garage from "../../components/Icons/Garage";
import Private from "../../components/Icons/Private";
import Barter from "../../components/Icons/Barter";
import Sum from "../../components/Icons/Sum";
import Services from "../../components/Icons/Services";

export const iconsFilter = {
  garage: { icon: <Garage size={30} />, name: "Garage" },
  balcony: { icon: <Balcony size={30} />, name: "Balcón" },
  pool: { icon: <Pool size={30} />, name: "Pileta" },
  barbecue: { icon: <Quincho size={30} />, name: "Quincho" },
  privateNeighborhood: {
    icon: <Private size={30} />,
    name: "Barrio privado",
  },
  backyard: { icon: <Backyard size={30} />, name: "Patio" },
  grill: { icon: <Barbecue size={30} />, name: "Parrilla" },
  barter: { icon: <Barter size={30} />, name: "Permuta" },
  alarm: { icon: <Alarm size={30} />, name: "Alarma" },
  sum: { icon: <Sum size={30} />, name: "SUM" },
  elevator: { icon: <Elevator size={30} />, name: "Ascensor" },
  laundry: {
    icon: <Laundry size={30} />,
    name: "Lavadero",
  },
  credit: { icon: <Credit size={30} />, name: "Crédito" },
  services: { icon: <Services size={30} />, name: "Servicios" },
};

export const iconsFilterSmall = {
  garage: { icon: <Garage size={20} />, name: "Garage" },
  balcony: { icon: <Balcony size={20} />, name: "Balcón" },
  pool: { icon: <Pool size={20} />, name: "Pileta" },
  barbecue: { icon: <Quincho size={20} />, name: "Quincho" },
  privateNeighborhood: {
    icon: <Private size={20} />,
    name: "Barrio privado",
  },
  backyard: { icon: <Backyard size={20} />, name: "Patio" },
  grill: { icon: <Barbecue size={20} />, name: "Parrilla" },
  barter: { icon: <Barter size={20} />, name: "Permuta" },
  alarm: { icon: <Alarm size={20} />, name: "Alarma" },
  sum: { icon: <Sum size={20} />, name: "SUM" },
  elevator: { icon: <Elevator size={20} />, name: "Ascensor" },
  laundry: {
    icon: <Laundry size={20} />,
    name: "Lavadero",
  },
  credit: { icon: <Credit size={20} />, name: "Crédito" },
  services: { icon: <Services size={20} />, name: "Servicios" },
};
