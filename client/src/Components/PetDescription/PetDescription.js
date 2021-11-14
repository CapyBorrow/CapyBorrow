import react from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PetInfo from "./PetInfo/PetInfo.js";
import Dog from '../../images/Dog.jpg';
import PetMap from './PetMap/PetMap.js';
import PetImage from './PetImage/PetImage.js';

const PetDescription = () => {
  return (
    <div>
      <ArrowBackIcon />
      <span>Pet Search</span>
      <div class="boxed">
        <PetImage />
        <PetInfo />
        <PetMap />
      </div>
    </div>
  );
};

export default PetDescription;
