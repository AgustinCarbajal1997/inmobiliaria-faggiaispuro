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
const iconsBoxMoreInfo = {
  garage: { icon: <Garage size={20} />, name: "Garage" },
  balcony: { icon: <Balcony size={20} />, name: "Balcón" },
  pool: { icon: <Pool size={20} />, name: "Pileta" },
  barbecue: { icon: <Quincho size={20} />, name: "Quincho" },
  privateNeighborhood: { icon: <Private size={20} />, name: "Barrio privado" },
  backyard: { icon: <Backyard size={20} />, name: "Patio" },
  grill: { icon: <Barbecue size={20} />, name: "Parrilla" },
  barter: { icon: <Barter size={20} />, name: "Permuta" },
  alarm: { icon: <Alarm size={20} />, name: "Alarma" },
  sum: { icon: <Sum size={20} />, name: "SUM" },
  elevator: { icon: <Elevator size={20} />, name: "Ascensor" },
  laundry: { icon: <Laundry size={20} />, name: "Lavadero" },
  credit: { icon: <Credit size={20} />, name: "Crédito" },
  services: { icon: <Services size={20} name="Servicios" /> },
};
export default iconsBoxMoreInfo;
