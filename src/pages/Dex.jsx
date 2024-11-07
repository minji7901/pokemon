import React from "react";
import DashBoard from "../components/DashBoard";
import styled from "styled-components";

export default function Dex() {
  const BackgroundWave = styled.div`
    width: 100%;
    height: 320px; /* 원하는 높이로 조정 */
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23FFEB3B' fill-opacity='1' d='M0,256L48,218.7C96,181,192,107,288,90.7C384,75,480,117,576,149.3C672,181,768,203,864,176C960,149,1056,75,1152,53.3C1248,32,1344,64,1392,80L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z'%3E%3C/path%3E%3C/svg%3E");
    background-size: cover; /* 필요에 따라 조정 가능 */
    background-repeat: no-repeat;
    background-position: center;
  `;

  return (
    <div>
      <BackgroundWave />
      <DashBoard />
    </div>
  );
}
