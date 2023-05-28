function JobCard({ job }) {
  return (
    <div className="my-2">
      <div className="bg-white h-[180px] shadow drop-shadow-sm p-4 rounded-md">
        <div className="flex items-center ">
          <img
            src={job.company_logo}
            className="w-[90px] h-[90px] object-cover rounded-md"
          />
          <div className="ml-4 h-full">
            <div className="h-3/4">
              <p className="font-body font-bold text-[#334680] text-xs my-2">
                {job.company_name}
              </p>
              <p className="font-normal text-md text-[#334680] my-2 ">
                {job.title}
              </p>
              {job.job_type && (
                <p className="my-2 flex items-center justify-center border-2 border-[#334680] text-xs text-[#334680] font-bold  w-16 h-6 rounded-sm">
                  {job.job_type === "full_time"
                    ? "Full time"
                    : job.job_type === "part_time"
                    ? "Part time"
                    : job.job_type}
                </p>
              )}
            </div>
            <div className="flex items-center justify-center  text-xs mt-4 absolute bottom-4 lg:right-4">
              <div className="flex items-center mr-4">
                <span className="material-symbols-outlined block text-xs mr-2 text-[#B9BDCF] ">
                  public
                </span>
                <p className="text-[#B9BDCF]">New York</p>
              </div>
              <div className="flex items-center">
                <span className="material-symbols-outlined block text-xs mr-2 text-[#B9BDCF] ">
                  schedule
                </span>
                <p className="text-[#B9BDCF]">5 days ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
