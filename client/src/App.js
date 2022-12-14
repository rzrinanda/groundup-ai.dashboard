import React, { useState } from "react";
import "./App.css";
import BrandLogo from "./assets/png/GroundUp.png";
import Settings from "./assets/png/gear.png";
import User from "./assets/png/user.png";
import Notif from "./assets/png/notification.png";
import ReactAudioPlayer from "react-audio-player";
import Sound1 from "./assets/audio/1.wav";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import Waveform from "waveform-react";

function App() {
  const machine = [
    { name: "CNC Machine", code: "CNC" },
    { name: "Milling Machine", code: "MILL" },
  ];

  const { selectedMachine, setMachine } = useState(null);

  const Header = () => {
    return (
      <div className="grid grid-cols-2  bg-white h-[53px] border-b-2">
        <div className="flex items-center justify-start gap-4 pl-4">
          <img src={BrandLogo} alt="" className="pr-8" />
          <div className="font-normal">DASHBOARD</div>
          <div className="flex items-center px-4 hover:bg-[#F0F5FF] hover:cursor-pointer hover:border-b hover:border-b-[#3478FC] h-full">
            ALERT
          </div>
        </div>
        <div className="flex items-center justify-end">
          <div className="grid grid-cols-2">
            <div className="grid grid-cols-3">
              <div>
                <img src={Settings} alt="" className="pr-4" />
              </div>
              <div>
                <img src={User} alt="" className="pr-4" />
              </div>
              <div>
                <div className="relative ">
                  <img src={Notif} alt="" className="pr-4 " />
                  <div className="flex justify-end pr-6">
                    <div className="bg-[#3478FC] rounded-full text-white absolute  -top-2 text-[11px] w-4 h-4 flex justify-center">
                      3
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-3 border-l border-l-slate-700">
              Welcome Admin!
            </div>
          </div>
        </div>
      </div>
    );
  };

  const Content = () => {
    return (
      <div className="bg-[#F8F8FF] p-4 h-screen">
        {/* Header Content */}
        <div className="bg-white border border-gray-200 rounded-md p-4">
          <Dropdown
            value={selectedMachine}
            options={machine}
            onChange={(e) => setMachine(e.value)}
            optionLabel="name"
            optionValue="code"
            placeholder="Select a City"
          />
        </div>
        <div className="grid grid-cols-4">
          {/* Sidebar Content */}
          <div className="bg-white border border-gray-200 h-screen rounded-md">
            <div className="flex border-b-2 border-gray-200">
              <Button
                className="p-button-secondary p-button-text pt-10"
                style={{ color: "#2A2E5D" }}
              >
                <FontAwesomeIcon
                  icon={faCaretLeft}
                  className="p-10"
                  style={{ paddingRight: "0.5rem", paddingLeft: "2vw" }}
                />
                Back
              </Button>
            </div>
            <div
              className="border-b-2 border-gray-200 rounded-md grid grid-cols-4 "
              style={{ height: "max-content", paddingBottom: "2vh" }}
            >
              <div className="text-xs px-4" style={{ paddingTop: "2vh" }}>
                6 Alerts
              </div>
              <div className="w-max" style={{ paddingTop: "2vh" }}>
                <p
                  className="bg-[#3478FC] flex text-xs rounded-full text-white"
                  style={{
                    width: "fit-content",
                    paddingLeft: "1vw",
                    paddingRight: "1vw",
                  }}
                >
                  2 New
                </p>
              </div>
            </div>
            {/* Anomaly List*/}
            <div
              className="border"
              style={{
                marginTop: "2vh",
                marginInline: "1vw",
                borderColor: "#3478FC",
                borderWidth: "2px",
              }}
            >
              <div
                className="grid w-1/2 grid-cols-2 rounded-t-xl bg-white p-4 m-10"
                style={{ fontSize: "14px" }}
              >
                <div className="flex items-center gap-2">
                  <div
                    className="h-3 w-3 rounded-full"
                    style={{
                      height: "0.75rem",
                      width: "0.75rem",
                      backgroundColor: "#3478FC",
                    }}
                  ></div>
                  <div className="pl-4 col-span-2">ID #00023123</div>
                </div>
                <div className="flex justify-end">
                  <div
                    className="flex w-1/2 items-center justify-center rounded-full text-white"
                    style={{
                      backgroundColor: "#FCA034",
                      paddingLeft: "0.5rem",
                      paddingRight: "0.5rem",
                    }}
                  >
                    Moderate
                  </div>
                </div>
              </div>
              <div
                className="w-1/2 flex-row rounded-b-xl bg-white pb-2"
                style={{ fontSize: "14px", paddingLeft: "2.5rem" }}
              >
                <div className="py-2">
                  <div className="w-full font-bold">Unknown Anomaly</div>
                  <div className="font-light">
                    Detected at 2021-06-18 20:10:04
                  </div>
                </div>
                <div
                  style={{
                    paddingTop: "2vh",
                    paddingBottom: "2vh",
                    color: "#3478FC",
                  }}
                >
                  CNC Machine
                </div>
              </div>
            </div>

            <div
              className="border"
              style={{
                marginTop: "2vh",
                marginInline: "1vw",
                borderColor: "#2A2E5D",
              }}
            >
              <div
                className="grid w-1/2 grid-cols-2 rounded-t-xl bg-white p-4 m-10"
                style={{ fontSize: "14px" }}
              >
                <div className="flex items-center gap-2">
                  <div
                    className="h-3 w-3 rounded-full"
                    style={{
                      height: "0.75rem",
                      width: "0.75rem",
                      backgroundColor: "#3478FC",
                    }}
                  ></div>
                  <div className="pl-4 col-span-2">ID #00023123</div>
                </div>
                <div className="flex justify-end">
                  <div
                    className="flex w-1/2 items-center justify-center rounded-full text-white"
                    style={{
                      backgroundColor: "#FCA034",
                      paddingLeft: "0.5rem",
                      paddingRight: "0.5rem",
                    }}
                  >
                    Moderate
                  </div>
                </div>
              </div>
              <div
                className="w-1/2 flex-row rounded-b-xl bg-white pb-2"
                style={{ fontSize: "14px", paddingLeft: "2.5rem" }}
              >
                <div className="py-2">
                  <div className="w-full font-bold">Unknown Anomaly</div>
                  <div className="font-light">
                    Detected at 2021-06-18 20:10:04
                  </div>
                </div>
                <div
                  style={{
                    paddingTop: "2vh",
                    paddingBottom: "2vh",
                    color: "#3478FC",
                  }}
                >
                  CNC Machine
                </div>
              </div>
            </div>

            <div
              className="border"
              style={{
                marginTop: "2vh",
                marginInline: "1vw",
                borderColor: "#2A2E5D",
              }}
            >
              <div
                className="grid w-1/2 grid-cols-2 rounded-t-xl bg-white p-4 m-10"
                style={{ fontSize: "14px" }}
              >
                <div className="flex items-center gap-2">
                  {/* <div
                    className="h-3 w-3 rounded-full"
                    style={{
                      height: "0.75rem",
                      width: "0.75rem",
                      backgroundColor: "#3478FC",
                    }}
                  ></div> */}
                  <div className="col-span-2" style={{ paddingLeft: "1.5rem" }}>
                    ID #00023123
                  </div>
                </div>
                <div className="flex justify-end">
                  <div
                    className="flex w-1/2 items-center justify-center rounded-full text-white"
                    style={{
                      backgroundColor: "#FCA034",
                      paddingLeft: "0.5rem",
                      paddingRight: "0.5rem",
                    }}
                  >
                    Moderate
                  </div>
                </div>
              </div>
              <div
                className="w-1/2 flex-row rounded-b-xl bg-white pb-2"
                style={{ fontSize: "14px", paddingLeft: "2.5rem" }}
              >
                <div className="py-2">
                  <div className="w-full font-bold">Unknown Anomaly</div>
                  <div className="font-light">
                    Detected at 2021-06-18 20:10:04
                  </div>
                </div>
                <div
                  style={{
                    paddingTop: "2vh",
                    paddingBottom: "2vh",
                    color: "#3478FC",
                  }}
                >
                  CNC Machine
                </div>
              </div>
            </div>
          </div>
          {/* Body Content */}
          <div className="col-span-3 bg-white p-4 border border-gray-200 h-screen rounded-md">
            <div className="gap-4">
              <div className="border-b-2">
                <div style={{ fontSize: "25px" }}>Alert ID #00023123</div>
                <div style={{ fontSize: "15px", paddingBottom: "8vh" }}>
                  Detected at 2021-04-22 20:10:04
                </div>
              </div>
              <div className="grid grid-cols-2" style={{ paddingTop: "4vh" }}>
                {/* <audio controls src="./assets/audio/1.wav">
                <a href="./assets/audio/1.wav">Download audio</a>
              </audio> */}
                <div>
                  {/* Header Machine Output */}
                  <div style={{ paddingLeft: "2vw" }}>
                    <div style={{ paddingBottom: "2vh" }}>
                      Anomaly Machine Output
                    </div>
                    <ReactAudioPlayer
                      src={Sound1}
                      controls
                      style={{ backgroundColor: "#FFFF" }}
                    />
                  </div>
                  <Waveform buffer={Sound1} height={150} />
                </div>
                <div>
                  {/* Header Machine Output */}
                  <div style={{ paddingLeft: "2vw" }}>
                    <div style={{ paddingBottom: "2vh" }}>
                      Normal Machine Output
                    </div>
                    <ReactAudioPlayer
                      src={Sound1}
                      controls
                      style={{ backgroundColor: "#FFFF" }}
                    />
                  </div>
                  <Waveform buffer={Sound1} height={150} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    //Header
    <div className="source-sans-pro text-[#5F6368]">
      <Header />
      <Content />
    </div>
  );
}

export default App;
