import './App.css';
import SideMenu from './side-menu/SideMenu';
import React, { useRef, useEffect, useState } from "react";

function App() {

  const [count, setCount] = useState(false);
  // const showSideMenu = useRef(false);

  function togggleMenu(e) {
    // showSideMenu.current = !showSideMenu.current;
    console.log('click menu', count)
    setCount(!count);
  }
  const sendDataToParent = (value) => { // the callback. Use a better name
    console.log(value);
    setCount(!value);
  };
  function revealSideMenu() {
    if (count) {
      // debugger
      return <SideMenu sendDataToParent={sendDataToParent}/>
    }
  }

  return (
    <main class="dark:bg-gray-800 font-mono bg-white relative overflow-hidden h-screen">
      {revealSideMenu()}
      <header class="h-24 sm:h-32 flex items-center z-30 w-full">
        <div class="container mx-auto px-6 flex items-center justify-between">
          <div class="uppercase text-gray-800 dark:text-white font-black text-3xl flex items-center">
            <svg width="25" height="25" viewBox="0 0 1792 1792" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M1664 1504v-768q-32 36-69 66-268 206-426 338-51 43-83 67t-86.5 48.5-102.5 24.5h-2q-48 0-102.5-24.5t-86.5-48.5-83-67q-158-132-426-338-37-30-69-66v768q0 13 9.5 22.5t22.5 9.5h1472q13 0 22.5-9.5t9.5-22.5zm0-1051v-24.5l-.5-13-3-12.5-5.5-9-9-7.5-14-2.5h-1472q-13 0-22.5 9.5t-9.5 22.5q0 168 147 284 193 152 401 317 6 5 35 29.5t46 37.5 44.5 31.5 50.5 27.5 43 9h2q20 0 43-9t50.5-27.5 44.5-31.5 46-37.5 35-29.5q208-165 401-317 54-43 100.5-115.5t46.5-131.5zm128-37v1088q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-1088q0-66 47-113t113-47h1472q66 0 113 47t47 113z">
              </path>
            </svg>
            <span class="text-xs ml-3 mt-1">
              CHARLIE-PRO@DESIGN.COM
          </span>
          </div>
          <div class="flex items-center">
            <nav class="font-sen text-gray-800 dark:text-white uppercase text-lg lg:flex items-center hidden">
              <a href="#" class="py-2 px-6 flex hover:text-black">
                About
            </a>
              <a href="#" class="py-2 px-6 flex hover:text-black">
                Blog
            </a>
            </nav>
            <button class="lg:hidden flex flex-col ml-4" onClick={togggleMenu}>
              <span class="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
              </span>
              <span class="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
              </span>
              <span class="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
              </span>
            </button>
          </div>
        </div>
      </header>
      <div class="flex relative z-20 items-center">
        <div class="container mx-auto px-6 flex flex-col justify-between items-center relative py-4">
          <div class="flex flex-col">
            <img src="/images/person/11.webp" class="rounded-full w-28 mx-auto" />
            <p class="text-3xl my-6 text-center dark:text-white">
              Hi, I&#x27;m Charlie 🤘
          </p>
            <h2 class="max-w-3xl text-5xl md:text-6xl font-bold mx-auto dark:text-white text-gray-800 text-center py-2">
              Building digital products, brands, and experiences.
          </h2>
            <div class="flex items-center justify-center mt-4">
              <a href="#" class="uppercase py-2 my-2 px-4 md:mt-16 bg-transparent dark:text-gray-800 dark:bg-white hover:dark:bg-gray-100 border-2 border-gray-800 text-gray-800 dark:text-white hover:bg-gray-800 hover:text-white text-md">
                CONNECT WITH ME
            </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
