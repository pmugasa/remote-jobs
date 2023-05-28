import axios from "axios";
import { useState, useEffect } from "react";
//components
import Navbar from "./components/Navbar";
import Input from "./components/Input";
import FilterInputs from "./components/FilterInputs";
import JobCard from "./components/JobCard";
import Pagination from "./components/Pagination";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  //user is currently on this page
  const [currentPage, setCurrentPage] = useState(1);
  //number of jobs to be displayed on the page
  const [jobsPerPage, setJobsPerPage] = useState(10);

  //indicies of first and last jobs
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;

  //jobs to be displayed on current page
  const currentJobs = data.slice(indexOfFirstJob, indexOfLastJob);

  //number of pages
  const numOfPages = Math.ceil(data.length / jobsPerPage);

  const url = "https://remotive.com/api/remote-jobs";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);

        console.log(response.data.jobs);
        setData(response.data.jobs);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
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
            {currentJobs.map((job) => {
              return <JobCard key={job.id} job={job} />;
            })}
          </div>
        </div>

        <Pagination
          numOfPages={numOfPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </>
  );
}

export default App;
