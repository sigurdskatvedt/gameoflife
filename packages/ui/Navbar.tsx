import Image from "next/image";
import icon from "./images/icon.png";

export const UiNavbar: React.FunctionComponent = () => {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn-ghost btn justify-center text-xl normal-case">
            <Image
              src={icon}
              className="mr-3 h-12 w-12 sm:h-12 sm:w-12"
              alt="Game of Life Logo"
            />
          </a>
        </div>
        <div className="flex-none">
          <button className="btn-ghost btn-square btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-5 w-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};
