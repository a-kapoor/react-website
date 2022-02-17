export default function Footer() {
	return (
		<footer class="bg-white dark:bg-gray-800 w-full py-8">
			<div class="max-w-screen-xl mx-auto px-4">
				<ul class="max-w-screen-md mx-auto text-lg font-light flex flex-wrap justify-between">
					<li class="my-2">
						<a class="text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200" href="https://github.com/codewithkaps">
						Github
                </a>
					</li>
					<li class="my-2">
						<a class="text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200" href="https://www.linkedin.com/in/anshulxkapoor/">
						LinkedIn
                </a>
					</li>
					<li class="my-2">
						<a class="text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200" href="#">
							Contact Me
                </a>
					</li>
				</ul>	
				<div class="text-center text-gray-500 dark:text-gray-200 pt-10 sm:pt-12 font-light flex items-center justify-center">
					<div>
						<a href="https://www.digitalocean.com/?refcode=1588313e99f1&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge"><img src="https://web-platforms.sfo2.digitaloceanspaces.com/WWW/Badge%202.svg" alt="DigitalOcean Referral Badge" /></a>
					</div>
					<div>
						<p>Powered by&nbsp;
							<a href="https://tailwindcss.com/" class="font-medium text-gray-900 hover:text-gray-500 transition-colors duration-150">tailwindcss</a>
							,&nbsp;
							<a href="https://reactjs.org/" class="font-medium text-gray-900 hover:text-gray-500 transition-colors duration-150">reactjs</a>
							,&nbsp;
							<a href="https://nodejs.org/" class="font-medium text-gray-900 hover:text-gray-500 transition-colors duration-150">nodejs</a>
							,&nbsp;
							<a href="https://www.mongodb.com/" class="font-medium text-gray-900 hover:text-gray-500 transition-colors duration-150">mongodb</a>
							&nbsp;and&nbsp;
							<a href="https://www.docker.com/" class="font-medium text-gray-900 hover:text-gray-500 transition-colors duration-150">docker</a>
						</p>
					</div>
				</div>
			</div>
		</footer>
	)
}
