export function Button({ label, handleButtonClick }) {
  return (
    <div>
      <button
        onClick={handleButtonClick}
        className=" h-13 w-full rounded-xl bg-purple m-4"
      >
        <p className=" font-bold text-2xl text-white p-2">{label}</p>
      </button>
    </div>
  );
}
