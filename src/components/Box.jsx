import { Button } from "./Button";
import { Heading } from "./Heading";
import { Input } from "./Inputbox";

export function Box({ handleButtonClick, inp1, setInp1, inp2, setInp2 }) {
  return (
    <div className=" bg-blue-100 p-5 rounded-xl h-128 flex flex-col items-center">
      <Heading
        label={"I already know your mood \n just let me know these"}
      ></Heading>
      <div className="flex flex-col items-start">
        <Input
          inp={inp1}
          setInp={setInp1}
          label={"What is us for you ?"}
        ></Input>
        <Input
          inp={inp2}
          setInp={setInp2}
          label={"What is us for me ?"}
        ></Input>
      </div>
      <Button
        handleButtonClick={handleButtonClick}
        label={"Enter in here"}
      ></Button>
    </div>
  );
}
