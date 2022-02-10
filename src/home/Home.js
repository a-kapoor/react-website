import {
  Link
} from "react-router-dom";

export default function Home() {

	return (
		<div class="flex relative z-20 items-center min-h-full">
      <div class="container mx-auto px-6 flex flex-col justify-between items-center relative py-4">
        <div class="flex flex-col">
          <p class="text-4xl my-6 text-center dark:text-white">
              Hey, it's <span class="text-indigo-600 font-bold">Anshul 👋</span>
          </p>
            <h2 class="max-w-2xl text-5xl font-bold mx-auto dark:text-white text-gray-800 text-center py-2">
              I'm a full stack software engineer
          </h2>
          <div class="flex items-center justify-center mt-12">
            <Link to="/work">
              <span class="uppercase py-2 my-2 px-4 md:mt-16 bg-transparent dark:text-gray-800 dark:bg-white hover:dark:bg-gray-100 border-2 border-gray-800 text-gray-800 dark:text-white hover:bg-gray-800 hover:text-white text-md">
                  Checkout My Work
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
	)
}


