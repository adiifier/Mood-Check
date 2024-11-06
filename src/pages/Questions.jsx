import { Header } from "../components/Header";
import { Que } from "../components/Que";
import { Button } from "../components/Button";
import img from "../pictures/panda.jpg";
import { useState } from "react";

export function Questions() {
  const [answers, setAnswers] = useState({});

  const handleAnswerChange = (questionId, value) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: value,
    }));
    console.log("Current answers state:", { ...answers, [questionId]: value });
  };

  const [moodLevel, setMoodlevel] = useState(0);

  function decideMood() {
    const valueArr = Object.values(answers);
    // let sum = 0;
    // for (let i = 0; i < valueArr.length; i++) {
    //   console.log(valueArr[i]);
    //   setMoodlevel(moodLevel + valueArr[i]);
    // }

    // console.log(moodLevel);
    const numericValues = valueArr.map(Number).filter((value) => !isNaN(value));
    const sum = numericValues.reduce((acc, curr) => acc + curr, 0);
    setMoodlevel(sum);
    console.log(moodLevel);
  }

  return (
    <div>
      <Header label={"Answer these Questions"}></Header>
      <Que
        name={"Quesion2"}
        qID={"q1"}
        question={"1) How would you rate today"}
        opt1={"Bad"}
        opt2={"Good"}
        opt3={"Very Good"}
        opt4={"Excellent"}
        valueopt1={10}
        valueopt2={20}
        valueopt3={30}
        valueopt4={50}
        img={img}
        imgAlt={"panda"}
        onAnswerChange={handleAnswerChange}
      ></Que>

      <Que
        name={"question1"}
        qID={"q2"}
        question={"1) How would you rate today"}
        opt1={"Bad"}
        opt2={"Good"}
        opt3={"Very Good"}
        opt4={"Excellent"}
        valueopt1={10}
        valueopt2={20}
        valueopt3={30}
        valueopt4={50}
        img={img}
        imgAlt={"panda"}
        onAnswerChange={handleAnswerChange}
      ></Que>

      <div className=" pl-20 pr-40">
        <Button
          label={"Know your Mood "}
          handleButtonClick={decideMood}
        ></Button>
      </div>
    </div>
  );
}
