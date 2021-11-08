import React, { Component } from "react";

export default function SideMenu({sendDataToParent}) {

	return (
		<div class="absolute inset-y-0 right-0 z-50">
			<div class="flex flex-col sm:flex-row sm:justify-around">
				<div class="w-72 h-screen bg-green-300">
					<nav class="mt-10 px-6 h-screen">
						<button onClick={() => { sendDataToParent(true); }}>
							<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
							</svg>
						</button>
						<a onClick={() => { sendDataToParent(true); }} class="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg " href="#">
							<span class="mx-4 text-lg font-normal">
								About
							</span>
							<span class="flex-grow text-right">
							</span>
						</a>
						<a onClick={() => { sendDataToParent(true); }} class="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-800 dark:text-gray-100 rounded-lg " href="#">
							<span class="mx-4 text-lg font-normal">
								Blog
							</span>
							<span class="flex-grow text-right">
							</span>
						</a>
					</nav>
				</div>
			</div>
		</div >
	)
}


