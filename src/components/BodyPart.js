import { Stack } from "@mui/material";
import React from "react";
import Icon from "../assets/icons/gym.png";
const BodyPart = ({ item, bodyPart, setBodyPart }) => {
  return (
  
      <Stack
        type="button"
        alignItems="center"
        justifyContent="center"
        className="bodyPart-card"
        sx={{
          borderTop: bodyPart === item ? "4px solid #ff2526" : "",
          backgroundColor: "#fff",
          borderBottomLeftRadius: "20px",
          width: "270px",
          height: "280px",
          cursor: "pointer",
          gap: "47px",
        }}
      >
        <img src={Icon} alt="icon" style={{ width: "150px" }} />
      </Stack>
    
  );
};

export default BodyPart;
