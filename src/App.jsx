import { useState } from "react";
import seed from "../seed";
import Button from "./components/Button";

function App() {
  return (
    <main className="overflow-hidden h-screen flex-col flex items-center justify-center">
      <img
        src="https://avatars.githubusercontent.com/u/23082238?v=4"
        className="rounded-full mb-12"
        alt=""
        title=""
        width={100}
      />
      <h1 className="font-studio-feixen-sans-variable font-bold variation-settings">
        ANDEILSON FERREIRA
      </h1>
      <span className="font-akzidenz-grotesk mb-12">
        FrontEnd Developer @PiniOn
      </span>

      <section className="flex flex-col gap-10">
        {seed.map((data) => {
          return (
            <Button
              key={data.id}
              icon={<data.icon size={32} color="#000" />}
              title={data.name}
              url={data.url}
            />
          );
        })}
      </section>
    </main>
  );
}

export default App;
