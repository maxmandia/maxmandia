import "./App.css";

function App() {
  return (
    <div className="w-10/12 m-auto py-10">
      <header className="text-[#1A0DAB]">
        <h1 className="font-regular text-[35px]">Max Mandia</h1>
        <div className="underline flex items-center gap-2">
          <a target="_blank" href="https://github.com/maxmandia">
            github
          </a>
          <a target="_blank" href="https://twitter.com/maxmandia">
            twitter
          </a>
        </div>
      </header>
      <main className="my-7 flex flex-col gap-5">
        <p>Interested in building things people want, with software.</p>{" "}
        <div>
          {/* <h1 className="text-[20px]">Projects</h1> */}
          <div className="mt-2">
            <a
              href="https://www.supplystream.xyz"
              target="_blank"
              className="text-[#1A0DAB] underline"
            >
              SupplyStream
            </a>
            <ul className="list-disc list-inside mt-1">
              <li>
                Modernizing ocean freight visibility for importers and freight
                forwarders.
              </li>
            </ul>
          </div>
          <div className="mt-2">
            <a
              href="https://www.brainworm.app"
              target="_blank"
              className="text-[#1A0DAB] underline"
            >
              Brainworm
            </a>
            <ul className="list-disc list-inside mt-1">
              <li>
                Making OpenAI models accessible inside the macOS menu bar.
              </li>
            </ul>
          </div>
          <div className="mt-2">
            <a
              href="https://www.musicplace.app"
              target="_blank"
              className="text-[#1A0DAB] underline"
            >
              Musicplace
            </a>
            <ul className="list-disc list-inside mt-1">
              <li>Changing the way in which people discover music.</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
