import React from "react";

export default function Header() {
  return (
    <>
      <h1>React App</h1>
      <h2 class=" p-8 uppercase font-black ">tektias</h2>
      <div class="relative h-[50rem] flex  justify-center items-center">
        <img class="absolute -z-10" src="images/s.png (copy)" alt="swirly" />
        <h3 class="text-8xl uppercase text-center leading-tight">
          Quality products <br />
          for quality life
        </h3>
      </div>
      <h2 class="text-right uppercase p-8 tracking-widest">Learn More</h2>
    </>
  );
}
