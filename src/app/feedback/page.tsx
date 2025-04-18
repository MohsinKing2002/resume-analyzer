import Button from "@/components/Button";
import Inputs from "@/components/Inputs";
import Textarea from "@/components/Textarea";

export default function Page() {
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
        <Inputs label="Name" id="name" type="text" placeholder="Mohsin Raja" />
        <Inputs
          label="Email"
          id="email"
          type="email"
          placeholder="mohsin@gmail.com"
        />
        <Inputs
          label="Subject"
          id="subject"
          type="text"
          placeholder="Please Mention your Subject"
        />
        <Textarea
          label="Feedback"
          id="feedback"
          placeholder="Your Feedback goes here.."
        />

        <Button label="Send Feedback" />
      </form>
    </div>
  );
}
