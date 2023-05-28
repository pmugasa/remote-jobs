function FilterInputs() {
  return (
    <div>
      <div className="flex items-center ml-2 my-4 ">
        <input
          type="checkbox"
          id="check-box"
          className="w-[18px] h-[18px] text-[#1E86FF] bg-gray-100  border-[#B9BDCF] rounded focus:ring-[#1E86FF]"
        />
        <label
          htmlFor="check-box"
          className="text-[#334680] font-medium text-sm ml-2"
        >
          Full time
        </label>
      </div>
      <h3 className="text-[#B9BDCF] text-md font-semibold my-2">LOCATION</h3>
      <div className="mb-4 flex items-center w-full sm:w-[350px] shadow drop-shadow-sm rounded-md h-[48px] px-2 bg-white">
        <span className="material-symbols-outlined block text-sm text-[#B9BDCF] ">
          public
        </span>
        <input
          type="text"
          placeholder="City, state, zip or country"
          className="ml-2 text-xs text-[#B9BDCF]"
        />
      </div>
      <div>
        <div className="flex items-center">
          <input
            type="radio"
            id="london"
            name="cities"
            className=" w-4 h-4 text-[#1E86FF] bg-gray-100 border-gray-300 focus:ring-[#1E86FF]"
          />
          <label
            htmlFor="london"
            className="ml-2 text-[#334680] font-medium text-sm "
          >
            London
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="radio"
            id="amsterdam"
            name="cities"
            className=" w-4 h-4 text-[#1E86FF] bg-gray-100 border-gray-300 focus:ring-[#1E86FF]"
          />
          <label
            htmlFor="amsterdam"
            className="text-[#334680] font-medium text-sm ml-2"
          >
            Amsterdam
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="radio"
            id="new-york"
            name="cities"
            className=" w-4 h-4 text-[#1E86FF] bg-gray-100 border-gray-300 focus:ring-[#1E86FF]"
          />
          <label
            htmlFor="new-york"
            className="text-[#334680] font-medium text-sm ml-2"
          >
            New York
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="radio"
            id="berlin"
            name="cities"
            className=" w-4 h-4 text-[#1E86FF] bg-gray-100 border-gray-300 focus:ring-[#1E86FF]"
          />
          <label
            htmlFor="berlin"
            className="text-[#334680] font-medium text-sm ml-2"
          >
            Berlin
          </label>
        </div>
      </div>
    </div>
  );
}

export default FilterInputs;
