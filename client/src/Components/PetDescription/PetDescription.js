import react from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PetInfo from "./PetInfo/PetInfo.js";
import Dog from '../../images/Dog.jpg';

const PetDescription = () => {
  return (
    <div>
      <ArrowBackIcon />
      
      <span className = 'top'>
          {/* <img src = "."/> */}
      </span>
      <span>Market Place</span>

      <div class="boxed">
        <PetInfo />
      </div>
    </div>
  );
};

export default PetDescription;
