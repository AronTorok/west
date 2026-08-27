import { useState } from "react";
import Logo from "./Logo.jsx";
import NavLink from "./NavLink.jsx";

function App() {
  const [hamButton, setHamButton] = useState(false);

  function handleClick() {
    setHamButton(!hamButton);
  }

  return (
    <>
      <div class="effect">
        <div class="overlay"></div>
      </div>
      <div className="container mx-auto p-4 pb-2 min-h-screen flex flex-col">
        <div className="flex justify-between items-center">
          <Logo />
          <div className="flex sm:gap-10 gap-6 sm:flex-row flex-col items-end">
            <a
              onClick={handleClick}
              className="sm:hidden hover:text-[brown] cursor-pointer"
            >
              {!hamButton ? (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                  >
                    <g fill="none">
                      <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                      <path
                        fill="currentColor"
                        d="M20 17.5a1.5 1.5 0 0 1 .144 2.993L20 20.5H4a1.5 1.5 0 0 1-.144-2.993L4 17.5zm0-7a1.5 1.5 0 0 1 0 3H4a1.5 1.5 0 0 1 0-3zm0-7a1.5 1.5 0 0 1 0 3H4a1.5 1.5 0 1 1 0-3z"
                      />
                    </g>
                  </svg>
                </>
              ) : (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    viewBox="0 0 24 24"
                    className="mt-2"
                  >
                    <g fill="none" fill-rule="evenodd">
                      <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                      <path
                        fill="currentColor"
                        d="m12 14.122l5.303 5.303a1.5 1.5 0 0 0 2.122-2.122L14.12 12l5.304-5.303a1.5 1.5 0 1 0-2.122-2.121L12 9.879L6.697 4.576a1.5 1.5 0 1 0-2.122 2.12L9.88 12l-5.304 5.304a1.5 1.5 0 1 0 2.122 2.12z"
                      />
                    </g>
                  </svg>
                </>
              )}
            </a>
            <NavLink
              name="Home"
              hamButton={hamButton}
              setHamButton={setHamButton}
            />
            <NavLink
              name="About"
              hamButton={hamButton}
              setHamButton={setHamButton}
            />
            <NavLink
              name="Contact"
              hamButton={hamButton}
              setHamButton={setHamButton}
            />
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <div className="bg-[url(/public/old_paper.jpg)] rounded-md shadow-2xl text-zinc-900 p-4 w-md text-center">
            <h1 className="text-5xl pb-3">WANTED</h1>
            <p className="text-2xl pb-4">PREFERABLY ALIVE</p>
            <img src="profile.png" alt="Profile" className="px-5 pb-4" />
            <p className="text-2xl pb-3">REWARD: EMPLOYMENT</p>
            <p className="text-xl">BORED AND JOBLESS</p>
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <div className="bg-[url(/public/old_paper.jpg)] rounded-md shadow-2xl text-zinc-900 p-4">
            This is a website template. If you would like to see some of my
            other works, go to my{" "}
            <a
              href="https://arontorok.github.io/"
              className="text-[brown] hover:underline"
            >
              portfolio website
            </a>{" "}
            (https://arontorok.github.io/).
          </div>
        </div>
        <div className="flex justify-center mt-auto pt-10">
          <Logo />
        </div>
      </div>
    </>
  );
}

export default App;
