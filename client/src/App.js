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
          <div className="grid grid-rows-3 bg-white border border-gray-200 h-screen rounded-md">
            <div
              className="flex border-b-2 border-gray-200"
              style={{ height: "max-content" }}
            >
              <Button className="p-button-secondary p-button-text pt-10">
                <FontAwesomeIcon icon={faCaretLeft} className="p-10" />
                Back
              </Button>
            </div>
            <div
              className="border-b-2 border-gray-200 rounded-md grid grid-cols-3"
              style={{ height: "max-content", paddingBottom: "2vh" }}
            >
              <div className="text-xs px-4">6 Alerts</div>
              <div className="w-max">
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
            {/* <div className="border-b-2 border-blue-600 rounded-md">
              <div className="grid grid-rows-2 row-span-2">
                <Button className="p-button-secondary">Back</Button>
              </div>
    </div>*/}
            <div className="border rounded-md">1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
          </div>
          {/* Body Content */}
          <div className="col-span-3 bg-white p-4 border border-gray-200 h-screen rounded-md">
            Body
            <div>
              {/* <audio controls src="./assets/audio/1.wav">
                <a href="./assets/audio/1.wav">Download audio</a>
              </audio> */}
              <ReactAudioPlayer
                src={Sound1}
                controls
                style={{ backgroundColor: "#FFFF" }}
              />
              <Waveform buffer={Sound1} height={150} />
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
