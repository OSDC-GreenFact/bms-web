import React, { useRef, useEffect, useState } from "react";
import MainBackground from "../../images/main_image.png";
// import BatteryCharge from "../../images/battery_charge.jpg"

function MainImage({ temperature, batteryRemain }) {
  const canvasRef = useRef();
  const requestRef = useRef();
  // const [temperature, setTemperature] = useState("36.5");
  // const [batteryRemain, setbatteryRemain] = useState(20);
  // const chargeImage = new Image();
  // chargeImage.src = "battery_charge.png";
  // chargeImage.onload = () => {};
  // useEffect(() => {
  //   const canvas = canvasRef.current;
  //   const context = canvas.getContext("2d");
  //   const canvasWidth = canvas.width; //canvas의 width
  //   const canvasHeight = canvas.height; //canvas의 height
  //   const draw = () => {
  //     context.clearRect(0, 0, canvasWidth, canvasHeight);
  //     context.beginPath();
  //     context.lineWidth = "3";
  //     context.strokeStyle = "#949494"; //선 색상
  //     context.arc(
  //       canvasWidth / 2,
  //       canvasHeight / 2,
  //       canvasHeight / 2 - 10,
  //       -(Math.PI / 2) + Math.PI / 8,
  //       Math.PI / 2 - Math.PI / 4
  //     );
  //     context.stroke();
  //     context.beginPath();
  //     context.arc(
  //       canvasWidth / 2,
  //       canvasHeight / 2,
  //       canvasHeight / 2 - 10,
  //       -(Math.PI / 2) - Math.PI / 8,
  //       Math.PI / 2 + Math.PI / 4,
  //       true
  //     );
  //     context.stroke();
  //     context.beginPath();
  //     context.lineWidth = "1";
  //     context.strokeStyle = "#949494"; //선 색상
  //     context.moveTo(canvasWidth * 0.3, canvasHeight / 2);
  //     context.lineTo(canvasWidth * 0.7, canvasHeight / 2);
  //     context.stroke();
  //     if (requestRef.current % 200 === 0) {
  //       setMockData("15");
  //     }
  //     context.drawImage(
  //       chargeImage,
  //       canvasWidth * 0.5 - 25,
  //       canvasHeight * 0.25,
  //       50,
  //       80
  //     );

  //     context.fillStyle = "#FFFFFF"; //텍스트 색상
  //     context.font = "100px MontserratExtraBold";
  //     const chargeWidth = context.measureText("36%˚").width;
  //     context.fillText(
  //       "80%",
  //       canvasWidth * 0.5 - chargeWidth * 0.425,
  //       canvasHeight * 0.425
  //     );

  //     context.fillStyle = "#949494"; //텍스트 색상
  //     context.font = "16px MontserratLight";
  //     const chargeTextWidth = context.measureText(
  //       "the Battery would be full charged in ten minutes."
  //     ).width;
  //     context.fillText(
  //       "the Battery would be full charged in ten minutes.",
  //       canvasWidth * 0.5 - chargeTextWidth * 0.5,
  //       canvasHeight * 0.4625
  //     );

  //     context.fillStyle = "#0B85A7"; //텍스트 색상
  //     context.font = "100px MontserratExtraBold";
  //     const celciusWidth = context.measureText("36.5˚").width;
  //     context.fillText(
  //       "36.5˚",
  //       canvasWidth * 0.5 - celciusWidth * 0.45,
  //       canvasHeight * 0.625
  //     );

  //     context.fillStyle = "#949494"; //텍스트 색상
  //     context.font = "16px MontserratLight";
  //     const celciusTextWidth = context.measureText(
  //       "Temperature is in normal range."
  //     ).width;
  //     context.fillText(
  //       "Temperature is in normal range.",
  //       canvasWidth * 0.5 - celciusTextWidth * 0.55,
  //       canvasHeight * 0.6625
  //     );
  //     requestRef.current = requestAnimationFrame(draw);
  //   };
  //   requestRef.current = requestAnimationFrame(draw);
  //   return () => cancelAnimationFrame(requestRef.current);
  // }, [mockData]);
  // setInterval(() => {
  //   setbatteryRemain(batteryRemain + 1);
  // }, 20000);
  return (
    <div
      style={{
        width: 800,
        height: 600,
      }}
    >
      {/* <canvas
        ref={canvasRef}
        style={{ width: "100%", height: "100%" }}
        width="1600"
        height="1200"
      ></canvas> */}
      <img
        src={MainBackground}
        style={{ position: "absolute", top: 50, left: 400, width: "45%" }}
        alt="back"
      ></img>
      <div
        style={{
          position: "absolute",
          top: 250,
          left: 680,
          fontFamily: "MontserratExtraBold",
          fontSize: "60px",
        }}
      >
        {batteryRemain < 100 ? batteryRemain : 100}%
      </div>
      <div
        style={{
          position: "absolute",
          top: 325,
          left: 625,
          fontFamily: "MontserratLight",
          fontSize: "8px",
          color: "#949494",
        }}
      >
        the Battery would be full charged in ten minutes.
      </div>
      <div
        style={{
          position: "absolute",
          top: 380,
          left: 675,
          fontFamily: "MontserratExtraBold",
          fontSize: "60px",
          color: "#0B85A7",
        }}
      >
        {temperature.length === 2 ? temperature + ".0" : temperature}˚
      </div>
      <div
        style={{
          position: "absolute",
          top: 455,
          left: 660,
          fontFamily: "MontserratLight",
          fontSize: "8px",
          color: "#949494",
        }}
      >
        Temperature is in normal range.
      </div>
    </div>
  );
}

export default MainImage;
