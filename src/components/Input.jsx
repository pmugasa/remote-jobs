import { useState } from "react";

function Input() {
  const [query, setQuery] = useState("");
  return (
    <div className="h-[55px] bg-white sm:w-[790px] rounded-md flex items-center px-2">
      <span className="material-symbols-outlined block text-[#B9BDCF] text-md">
        work
      </span>
      <input
        type="text"
        placeholder="Title, companies, expertise or benefits"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="focus:outline-none sm:px-4  h-full text-ellipsis overflow-hidden placeholder:text-xs placeholder:text-[#B9BDCF] "
      />
      <button className="px-4 py-2 bg-[#1E86FF] sm:ml-auto  text-white font-body font-medium rounded-md">
        Search
      </button>
    </div>
  );
}
export default Input;
