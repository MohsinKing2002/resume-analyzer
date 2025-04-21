"use client";
import Button from "@/components/Button";
import Inputs from "@/components/Inputs";
import { useState } from "react";

export default function Page() {
  const [data, setData] = useState({
    job_link: "",
    resume: "",
  });

  const handleInputChange = (e: any) => {
    e.preventDefault();
    const name = e.target.name,
      value = e.target.value;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleOnSubmit = (e: any) => {
    e.preventDefault();
    console.log("data->", data);
  };

  return (
    <div className="style-parent space-y-8 my-6">
      <div className="w-full block text-center space-y-4">
        <h1 className="style-titles">Resume Analyzer</h1>
        <p className="w-1/2 mx-auto text-base text-gray-300">
          Upload your Resume and input the Job link. We'll do the rest for you.
        </p>
      </div>

      <form className="flex-cen flex-col space-y-8">
        <Inputs
          label="Job Link"
          id="job"
          type="text"
          name="job_link"
          placeholder="Paste the Job link here.."
          value={data?.job_link}
          onChange={handleInputChange}
        />
        <Inputs
          label="Resume"
          id="resume"
          type="file"
          name="resume"
          placeholder="Please Mention your Subject"
          value={data?.resume}
          onChange={handleInputChange}
        />

        <Button onClick={handleOnSubmit} label="Send Feedback" />
      </form>
    </div>
  );
}
