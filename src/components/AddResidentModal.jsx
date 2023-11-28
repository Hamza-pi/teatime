import { handleToast } from "@/utils/showToast";
import React, { useState, useEffect } from "react";
import { Outfit } from "next/font/google";
import { FiUpload, FiCheckCircle } from "react-icons/fi";

const AddResidentModal = ({ onClose }) => {
  
  const [tab, setTab] = useState(0);

  const [valid, setValid] = useState(true);

  const [progress, setProgress] = useState(0);

  const tabs = [
    {
      title: "Bulk Upload",
    },
    {
      title: "Add Individual",
    },
  ];

  let interval;

  const handleFileSelect = (event) => {
    const file = event.target.files[0];

    if (file) {
      if (file.type === "text/csv" || file.name.endsWith(".csv")) {
        setValid(true);

        let progress = 0;

        interval = setInterval(() => {
          progress += 10;
          setProgress(progress);
          if (progress === 100) {
            clearInterval(interval);
            setTimeout(() => {
              setProgress(0);
              onClose();
            }, 2000);
          }
        }, 500);
      } else {
        setValid(false);
      }
    }
  };

  const handleCancel = () => {
    onClose();
  };

  useEffect(() => {
    clearInterval(interval);
    setProgress(0);
  }, [onClose]);

  return (
    <section
      className={`bg-transparent h-screen flex flex-col items-center justify-center  pt-26 px-2 `}
    >
      <div className="max-w-[574px]  bg-model rounded-xl py-2">
        {/* Tabs */}
        <div className="w-full flex items-center justify-center gap-x-6 border-b border-[#FFFFFF0D]">
          {tabs.map((item, i) => (
            <div onClick={() => setTab(i)} className="cursor-pointer">
              <h3 className="py-3">{item.title}</h3>
              <div
                className={`${
                  tab === i ? "opacity-100" : "opacity-0"
                } h-[2px] w-full bg-white rounded-t-lg`}
              ></div>
            </div>
          ))}
        </div>
        {/* Forms */}
        <div className="py-4 sm:px-6">
          {/* Bulk Upload */}
          <div
            className={`${
              tab === 0 ? "flex" : "hidden"
            } w-full flex-col gap-y-4 sm:px-10 px-8`}
          >
            <p className="font-bold sm:text-xl text-sm text-left">
              {progress === 100
                ? "Upload complete"
                : "Add Residents via your CSV file"}
            </p>
            {/* Uploader */}
            <div className="flex items-center justify-center">
              <label
                for="dropzone-file"
                className={`${
                  progress === 0 ? "flex" : "hidden"
                } flex-col items-center justify-end sm:px-20 py-4 border-2 ${
                  valid ? "border-[#FFFFFF33]" : "border-[#FF0000]"
                }  border-dashed rounded-xl cursor-pointer bg-[#FFFFFF0D]`}
              >
                <div className="flex flex-col items-center justify-center sm:gap-y-14 sm:p-10 sm:py-12 p-4 ">
                  <div className="p-10 bg-[#FFFFFF33] text-white rounded-xl text-[2rem]">
                    <FiUpload className="font-[700] sm:text-5xl"/>
                  </div>
                  <p className="font-bold text-grey sm:text-sm text-[10px] mt-2">
                    Drag and Drop or{" "}
                    <span className="text-transparent bg-gradient-to-r from-btnFrom to-btnTo bg-clip-text">
                      Browse
                    </span>{" "}
                    to upload
                  </p>
                </div>
                <input
                  id="dropzone-file"
                  type="file"
                  class="hidden"
                  onChange={(e) => handleFileSelect(e)}
                />
              </label>
            </div>
            {/* Progress */}
            <div
              className={`${
                progress > 0 && progress < 100 ? "flex" : "hidden"
              } flex-col gap-y-6 py-1 px-4`}
            >
              <div className="progress min-w-full h-10 border-2 border-[#FFFFFF33] border-dashed  bg-[#FFFFFF0D] rounded-full">
                <div
                  className="bg-sharpGreen h-full"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <div className="flex items-center justify-center gap-x-2">
                <p className="bg-[#FFFFFF0D] p-2 rounded-xl text-[1rem]">
                  <FiCheckCircle />
                </p>
                <p className="text-grey font-bold">
                  Finalising upload adding 150 residents
                </p>
              </div>
              <div>
                <button
                  className="px-20 py-3 bg-[#FFFFFF0D] rounded-2xl"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
              </div>
            </div>
            {/* Completed */}
            <div
              className={`${
                progress === 100 ? "flex" : "hidden"
              } items-center flex-col gap-y-3 justify-center px-10 py-4`}
            >
              <p className="bg-[#FFFFFF0D] p-4 rounded-xl text-[3.5rem]">
                <FiCheckCircle />
              </p>
              <p className="text-grey font-bold">
                Upload successful 150 residents added
              </p>
            </div>
            <p
              className={`${
                valid ? "hidden" : "block"
              } text-[#ff0000] font-bold text-sm`}
            >
              ERROR! Please upload a valid csv file
            </p>
          </div>
          {/* Add Individual */}
          <div
            className={`${
              tab === 1 ? "flex" : "hidden"
            } w-full flex-col gap-y-4`}
          >
            <form></form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddResidentModal;
