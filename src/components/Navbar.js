import React from "react";
import { Stack } from "@mui/material";
import Logo from "../assets/images/header.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{
        gap: { sm: "122px", sx: "40px" },
        mt: { sm: "32px", sx: "20px" },
        justifyContent: "none",
      }}
    >
      <Link to="/" style={{marginTop:"10px",textDecoration:"none",color:"#ff2526"}}>
       <h1>GymDai</h1>
      </Link>
      <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#3A1212",
            borderBottom: "3px solid #FF2625",
          }}
        >
          Home
        </Link>
        <a
          href="#exercises"
          style={{ textDecoration: "none", color: "#3A1212" }}
        >
          Exercises
        </a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
