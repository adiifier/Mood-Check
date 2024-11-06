import { Box } from "../components/box";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { Header } from "../components/Header";
import { Input } from "../components/Inputbox";
import img1 from "../pictures/download.jpg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export function Signin() {
  const [inp1, setInp1] = useState("");
  const [inp2, setInp2] = useState("");
  const [warn, setWarn] = useState(false);

  const navigate = useNavigate();
  function handleButtonClick() {
    if (
      (inp1 === inp2 && inp1 === "everything") ||
      (inp1 === inp2 && inp1 === "Everything")
    ) {
      navigate("/entry");
    } else {
      setWarn(true);
    }
  }
  return (
    <div>
      <Header label="US.io"></Header>
      <div className="grid grid-cols-2">
        <div className="colspan-1 flex flex-col">
          <div className=" text-purple font-bold text-4xl m-4 mt-29 ml-10 w-72 ">
            Welcome to your routine mood checkup ...
          </div>
          <div className="">
            <img
              style={{ height: "440px", width: "600px" }}
              className=" "
              src={img1}
              alt="bear"
            ></img>
          </div>
        </div>
        <div className="colspan-1 p-6">
          <Box
            inp1={inp1}
            setInp1={setInp1}
            inp2={inp2}
            setInp2={setInp2}
            handleButtonClick={handleButtonClick}
          ></Box>
          {/* Conditional rendering of warning message */}
          {warn && (
            <div className="text-red-300 font-bold mt-4">
              Wrong guess, please try again!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
