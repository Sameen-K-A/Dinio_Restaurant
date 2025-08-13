import { FaLinkedin, FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { MdOutlineErrorOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {
  const youtubeUrl = import.meta.env.VITE_YOUTUBE;
  const instagramUrl = import.meta.env.VITE_INSTAGRAM;
  const linkedinUrl = import.meta.env.VITE_LINKEDIN;
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-[100dvh] bg-background px-4 text-center">
      <div className="flex flex-col items-center justify-center overflow-y-auto py-15">
        <MdOutlineErrorOutline className="w-30 h-30" />

        <h1 className="mt-6 text-3xl font-bold">
          404 - Page Not Found
        </h1>

        <p className="mt-2 max-w-md text-muted-foreground">
          Please scan the QR code from your table or click the button below to
          return to the home page and continue exploring Dinio.
        </p>

        <button
          onClick={() => navigate(-1)}
          className="mt-6 px-6 py-3 bg-primary text-accent font-semibold rounded-lg shadow hover:scale-105 transition-transform"
        >
          Back to Home
        </button>
      </div>

      <div className="flex space-x-4 fixed bottom-0 pb-5 pt-2 left-1/2 transform -translate-x-1/2 bg-background w-full justify-center">
        <a
          href={youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-muted-foreground transition-colors duration-300"
          aria-label="YouTube"
        >
          <FaYoutube className="w-5 h-5 md:w-6 md:h-6" />
        </a>
        <a
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-muted-foreground transition-colors duration-300"
          aria-label="Instagram"
        >
          <RiInstagramFill className="w-5 h-5 md:w-6 md:h-6" />
        </a>
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-muted-foreground transition-colors duration-300"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="w-5 h-5 md:w-6 md:h-6" />
        </a>
      </div>
    </div>
  );
}