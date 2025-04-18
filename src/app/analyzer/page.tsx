import Button from "@/components/Button";
import Inputs from "@/components/Inputs";
import Textarea from "@/components/Textarea";

export default function Page() {
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
          placeholder="Paste the Job link here.."
        />
        <Inputs
          label="Resume"
          id="resume"
          type="file"
          placeholder="Please Mention your Subject"
        />

        <Button label="Send Feedback" />
      </form>
    </div>
  );
}
