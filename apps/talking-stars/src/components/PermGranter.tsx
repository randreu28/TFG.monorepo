import { useState } from "react";

interface Props {
  setStream: React.Dispatch<React.SetStateAction<MediaStream | null>>;
}

export default function PermGranter({ setStream }: Props) {
  const [error, setError] = useState<string | null>(null);

  function handleClick() {
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        setStream(stream);
      })
      .catch(() => {
        setError(
          "Your browser is blocking the use of your microphone. Please make sure you allow your browser to use it"
        );
      });
  }

  return (
    <div className="h-screen flex text-white bg-gray-900 text-center">
      <div className="m-auto space-y-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 mx-auto"
        >
          <path d="M8.25 4.5a3.75 3.75 0 117.5 0v8.25a3.75 3.75 0 11-7.5 0V4.5z" />
          <path d="M6 10.5a.75.75 0 01.75.75v1.5a5.25 5.25 0 1010.5 0v-1.5a.75.75 0 011.5 0v1.5a6.751 6.751 0 01-6 6.709v2.291h3a.75.75 0 010 1.5h-7.5a.75.75 0 010-1.5h3v-2.291a6.751 6.751 0 01-6-6.709v-1.5A.75.75 0 016 10.5z" />
        </svg>

        <h1 className="text-xl">This experience requires a microphone</h1>
        {error ? <p className="text-red-600">{error}</p> : null}

        <button
          className="text-emerald-400 hover:underline"
          onClick={handleClick}
        >
          Start
        </button>
      </div>
    </div>
  );
}
