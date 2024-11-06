import { useState } from "react";

export function Que({
  qID,
  name,
  question,
  opt1,
  opt2,
  opt3,
  opt4,
  valueopt1,
  valueopt2,
  valueopt3,
  valueopt4,
  img,
  imgAlt,
  onAnswerChange,
}) {
  const [slectedValue, setSelectedValue] = useState(0);

  function handleOptionChange(event) {
    const value = Number(event.target.value);
    setSelectedValue(value);
    console.log(value);

    onAnswerChange(value);
  }

  return (
    <div>
      <div className="text-md  text-purple font-light m-4 p-4 pb-0 mb-0">
        {question}
      </div>
      <div className="grid  grid-cols-2  m-4 p-4  bg-blue-100 rounded-xl">
        <div className="colspan-1 flex flex-col ">
          <label>
            <input
              className="mr-4"
              type="radio"
              name={name}
              checked={slectedValue === valueopt1}
              value={valueopt1}
              onChange={handleOptionChange}
            ></input>
            {opt1}
          </label>
          <label>
            <input
              className="mr-4"
              type="radio"
              name={name}
              checked={slectedValue === valueopt2}
              value={valueopt2}
              onChange={handleOptionChange}
            ></input>
            {opt2}
          </label>
          <label>
            <input
              className="mr-4"
              type="radio"
              name={name}
              checked={slectedValue === valueopt3}
              value={valueopt3}
              onChange={handleOptionChange}
            ></input>
            {opt3}
          </label>
          <label>
            <input
              className="mr-4"
              type="radio"
              name={name}
              checked={slectedValue === valueopt4}
              value={valueopt4}
              onChange={handleOptionChange}
            ></input>
            {opt4}
          </label>
        </div>
        <div className=" flex justify-center items-center ml-24 pl-30">
          <img
            src={img}
            className="h-20 w-30 rounded-xl ml-80"
            alt={imgAlt}
          ></img>
        </div>
      </div>
      <div className="mr-10 ml-10">
        <hr></hr>
      </div>
    </div>
  );
}
