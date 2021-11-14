import react from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PetInfo from "./PetInfo/PetInfo.js";

const PetDescription = () => {
  return (

    <div>
    
      <ArrowBackIcon />
      {/* add in the image container here  */}
      <span className="top">{/* <img src = "."/> */}</span>
      <span>Market Place</span>


      <div class="boxed">
        <PetImage />
        <PetInfo />
        <PetMap />
        <PetLocation/>
        <Share/>
        <Bookmark/>
      </div>
    </div>

  );
};

export default PetDescription;
