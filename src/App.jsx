import Navbar from "./components/Navbar";
import Input from "./components/Input";
import FilterInputs from "./components/FilterInputs";
import JobCard from "./components/JobCard";

function App() {
  return (
    <>
      <div className="w-full h-full px-4 sm:px-8 md:px-16 lg:px-20">
        <Navbar />
        <div className="mx-auto h-[138px] w-full p-2 rounded-md bg-[url('/backgroundImg.png')] bg-bottom flex items-center justify-center">
          <Input />
        </div>
        <div className=" lg:flex my-4 ">
          <div className="mr-4">
            <FilterInputs />
          </div>

          <div className="my-4 lg:w-[700px] ml-auto  ">
            <JobCard />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
