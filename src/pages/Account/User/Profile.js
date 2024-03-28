/* eslint-disable jsx-a11y/no-redundant-roles */
import React from 'react';
import logo1 from '../../../assets/images/logo1.jpg'

const Profile = () => {
  return (  
	<div class="bg-white py-24 sm:py-32 ">
		<div class="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3 text-center">
			<div class="max-w-2xl">
			<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Web Design</h2>
			<p class="mt-6 text-lg leading-8 text-gray-600">Website Markup</p>
			<p class="mt-6 text-lg leading-8 text-gray-600">One Page Mobile Template</p>
			<p class="mt-6 text-lg leading-8 text-gray-600">Backend API</p>
			</div>
			<ul role="list" class="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
				<li>
					<div class="flex gap-x-6 justify-center">
					<img
						src={logo1}
						alt="Profile"
						className="h-16 w-16 rounded-full mb-4"
					/>
					</div>
					<div>
						<h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900">Quân Minh Dev</h3>
						<p class="text-sm font-semibold leading-6 text-indigo-600">Full Stack Developer</p>
						<p class="text-sm font-semibold leading-6 text-indigo-600">Việt Nam TP.HCM City</p>
						<button className="bg-blue-500 text-white mt-4 px-4 py-2 rounded-md">
							Edit Profile
						</button>
					</div>
				</li>
			</ul>
		</div>
	</div>

  );
};

export default Profile;
