"use client";
import Button from "@/components/Button";
import Inputs from "@/components/Inputs";
import Textarea from "@/components/Textarea";
import { useState } from "react";

export default function Page() {
  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    feedback: "",
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
        <h1 className="style-titles">Any Suggestion for Us ?</h1>
        <p className="w-1/2 mx-auto text-base text-gray-300">
          If you have any Suggestion or note for us then please feel free to
          reach out us. We would love to hear from you.
        </p>
      </div>

      <form className="flex-cen flex-col space-y-8">
        <Inputs
          label="Name"
          name="name"
          id="name"
          type="text"
          placeholder="Mohsin Raja"
          value={data.name}
          onChange={handleInputChange}
        />
        <Inputs
          label="Email"
          id="email"
          type="email"
          name="email"
          placeholder="mohsin@gmail.com"
          value={data.email}
          onChange={handleInputChange}
        />
        <Inputs
          label="Subject"
          id="subject"
          type="text"
          name="subject"
          placeholder="Please Mention your Subject"
          value={data.subject}
          onChange={handleInputChange}
        />
        <Textarea
          label="Feedback"
          id="feedback"
          name="feedback"
          placeholder="Your Feedback goes here.."
          value={data.feedback}
          onChange={handleInputChange}
        />

        <Button onClick={handleOnSubmit} label="Send Feedback" />
      </form>
    </div>
  );
}
