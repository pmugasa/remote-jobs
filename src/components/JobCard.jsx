function JobCard() {
  return (
    <div>
      <div className="bg-white h-[160px] shadow drop-shadow-sm p-4">
        <div className="flex items-center ">
          <img
            src="https://images.unsplash.com/photo-1614680376408-81e91ffe3db7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fGNvbXBhbnklMjBsb2dvfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            className="w-[90px] h-[90px] object-cover rounded-md"
          />
          <div className="ml-4 h-full ">
            <div>
              <p className="font-body font-bold text-[#334680] text-xs my-2">
                Whatsapp
              </p>
              <p className="font-normal text-lg text-[#334680] my-2">
                Full Stack Developer
              </p>
              <p className="my-2 flex items-center justify-center border-2 border-[#334680] text-xs text-[#334680] font-bold  w-16 h-6 rounded-sm">
                Full time
              </p>
            </div>
            <div className="flex items-center justify-center  text-xs mt-4 absolute">
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
