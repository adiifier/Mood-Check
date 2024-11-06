export function Input({ label, setInp }) {
  return (
    <div grid frid-cols-1>
      <div className="colspan-1 text-md font-light ">{label}</div>
      <input
        onChange={(e) => {
          setInp(e.target.value);
        }}
        className="bg-white rounded-lg w-full p-2 pl-3 pr-4  m-2"
      ></input>
    </div>
  );
}
