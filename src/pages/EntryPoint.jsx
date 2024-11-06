import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import { Heading } from "../components/Heading";
import img1 from "../pictures/panda.jpg";
import { useEffect, useState } from "react";

export function Entry() {
  const [timeLeft, setTimeLeft] = useState(10);

  useEffect(() => {
    if (timeLeft <= 0) return; // Stop the timer when it reaches 0

    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timerId); // Cleanup on component unmount
  }, [timeLeft]);

  const navigate = useNavigate();
  setTimeout(() => {
    navigate("/Questions");
  }, 10000);

  return (
    <div>
      <div>
        <Header label={"Access Granted !!!"}></Header>
        <div className="grid grid-cols-2 ">
          <div className="w-full m-8 h-96 colspan-1 bg-blue-100 rounded-xl flex flex-col items-center">
            <div className="m-4 ">
              <Heading label={"Wohoooooo !!!"}></Heading>
            </div>
            <div className="text-4xl w-25 text-center m-4 mt-20 font-bold text-white">
              Now I know its you Babe :3
            </div>
          </div>
          <div className=" flex justify-center items-center ">
            <img className="h-30 w-30" src={img1} alt="panda"></img>
          </div>
        </div>
        <div className="m-4 mb-6 font-thin text-lg ">
          Wait for {timeLeft} seconds
        </div>
      </div>
    </div>
  );
}
