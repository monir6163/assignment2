import { useFormStatus } from "react-dom";
const Button = () => {
  const { pending } = useFormStatus();
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 w-full text-white font-bold py-2 px-4 rounded"
      disabled={pending}
    >
      {pending ? "Loading..." : "Submit"}
    </button>
  );
};

export default Button;
