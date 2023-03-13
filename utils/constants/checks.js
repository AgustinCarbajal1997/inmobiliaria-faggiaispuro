import React from "react";
import Garage from "../../components/Icons/Garage";
import Balcony from "../../components/Icons/Balcony";
import Pool from "../../components/Icons/Pool";
import Quincho from "../../components/Icons/Quincho";
import Private from "../../components/Icons/Private";
import Backyard from "../../components/Icons/Backyard";
import Barbecue from "../../components/Icons/Barbecue";
import Barter from "../../components/Icons/Barter";
import Alarm from "../../components/Icons/Alarm";
import Sum from "../../components/Icons/Sum";
import Elevator from "../../components/Icons/Elevator";
import Laundry from "../../components/Icons/Laundry";
import Credit from "../../components/Icons/Credit";
import Services from "../../components/Icons/Services";
const checks = [
  {
    field: "garage",
    name: "Garage",
    icon: <Garage size={30} />,
  },
  {
    field: "balcony",
    name: "Balcón",
    icon: <Balcony size={30} />,
  },
  {
    field: "pool",
    name: "Pileta",
    icon: <Pool size={30} />,
  },
  {
    field: "privateNeighborhood",
    name: "Barrio privado",
    icon: <Private size={30} />,
  },
  {
    field: "backyard",
    name: "Patio",
    icon: <Backyard size={30} />,
  },
  {
    field: "grill",
    name: "Parrilla",
    icon: <Barbecue size={30} />,
  },
  {
    field: "barter",
    name: "Permuta",
    icon: <Barter size={30} />,
  },
  {
    field: "alarm",
    name: "Alarma",
    icon: <Alarm size={30} />,
  },
  {
    field: "sum",
    name: "SUM",
    icon: <Sum size={30} />,
  },
  {
    field: "elevator",
    name: "Ascensor",
    icon: <Elevator size={30} />,
  },
  {
    field: "laundry",
    name: "Lavadero",
    icon: <Laundry size={30} />,
  },
  {
    field: "credit",
    name: "Crédito",
    icon: <Credit size={30} />,
  },
  {
    field: "barbecue",
    name: "Quincho",
    icon: <Quincho size={30} />,
  },
  {
    field: "services",
    name: "Servicios",
    icon: <Services size={30} />,
  },
];
export default checks;
