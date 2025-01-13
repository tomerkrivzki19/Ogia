import React from "react";
import logoImage from "../../../public/WhatsAppImage2025-01-05at21.36.22_e3eca4b3.jpg";

function Spinner() {
  return (
    <div class="relative flex justify-center items-center pt-60">
      <div class="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-500"></div>
      <img src={logoImage} class="rounded-full h-28 w-28" />
    </div>
  );
}

export default Spinner;
