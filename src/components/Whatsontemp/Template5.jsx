import Image from 'next/image';
import React from 'react';
import './Template.css';
const Template5 = () => {
	return (
		<div className="px-3 pr-6 bg-black rounded-xl font-popin">
			<div className=" flex flex-col">
				<div className="font py-12 flex flex-col">
					<div className="flex justify-between ">
						<div className="w-fit ">
							<p className="text-[30px] font-bold mb-1 bg-gradient-to-r from-[#5FC8F5] to-[#6DFFED] text-transparent bg-clip-text">
								WHAT'S ON?
							</p>

							<div className="bg-gradient-to-r from-[#5FC8F5]  to-[#5FC8F5]  py-[1px] rounded-2xl"></div>
							<p className="text-[17.5px] opacity-70 font-semibold">
								Vasey RSL Brighton East
							</p>
						</div>
						<Image
							width={80}
							height={70}
							className='w-[80px] h-[70px]'
							src="/images/whatson.png"
							alt="Residents Img"
						/>
					</div>
					<div className="w-fit mt-1">
						<p className="text-[17.5px] text-[#5FC8F5]">Mon 25th Sep</p>
						<div className="bg-gradient-to-r from-[#5FC8F5]  to-[#5FC8F5]  p-[1px] rounded-2xl"></div>
						<p className="text-[17.5px] text-[#5FC8F5] font-bold">BINGO</p>
					</div>
					<div className="flex justify-between">
						<p className="text-[17.5px]text-[#D9D9D9]">@ The Ballroom</p>
						<div className="">
							<p className="text-[17.5px] text-[#5FC8F5]">Tue 26th Sep</p>
							<div className="bg-gradient-to-r from-[#5FC8F5]  to-[#5FC8F5]  p-[1px] rounded-2xl"></div>
							<p className="text-[17.5px] text-[#5FC8F5] font-bold">Afternoon Tea</p>
						</div>
					</div>
					<div className="flex justify-between">
						{' '}
						<div className="">
							<p className="text-[17.5px] text-[#5FC8F5]">Wed 27th Sep</p>
							<div className="bg-gradient-to-r from-[#5FC8F5]  to-[#5FC8F5]  p-[1px] rounded-2xl"></div>
							<p className="text-[17.5px] text-[#5FC8F5] font-bold">Bus Trip</p>
						</div>
						<p className="text-[17.5px]text-[#D9D9D9]">The Dining Room</p>
					</div>
					<div className="flex justify-between">
						{' '}
						<p className="text-[17.5px]text-[#D9D9D9]">To Mornington</p>
						<div className="">
							<p className="text-[17.5px] text-[#5FC8F5]">Thu 28th Sep</p>
							<div className="bg-gradient-to-r from-[#5FC8F5]  to-[#5FC8F5]  p-[1px] rounded-2xl"></div>
							<p className="text-[17.5px] text-[#5FC8F5] font-bold">Dance Classes</p>
						</div>
					</div>
					<div className="flex justify-between">
						{' '}
						<div className="">
							<p className="text-[17.5px] text-[#5FC8F5]">Fri 29th Sep</p>
							<div className="bg-gradient-to-r from-[#5FC8F5]  to-[#5FC8F5]  p-[1px] rounded-2xl"></div>
							<p className="text-[17.5px] text-[#5FC8F5] font-bold">Happy hour</p>
						</div>
						<p className="text-[17.5px]text-[#D9D9D9]">@ The Ballroom</p>
					</div>
					<div className="flex justify-between">
						{' '}
						<p className="text-[17.5px]text-[#D9D9D9]">The Bar</p>
						<div className="">
							<p className="text-[17.5px] text-[#5FC8F5]">Sat 30th Sep</p>
							<div className="bg-gradient-to-r from-[#5FC8F5]  to-[#5FC8F5]  p-[1px] rounded-2xl"></div>
							<p className="text-[17.5px] text-[#5FC8F5] font-bold">Pet Therapy</p>
						</div>
					</div>
					<div className="flex justify-between">
						{' '}
						<div className="">
							<p className="text-[17.5px] text-[#5FC8F5]">Sun 31st Sep</p>
							<div className="bg-gradient-to-r from-[#5FC8F5]  to-[#5FC8F5]  p-[1px] rounded-2xl"></div>
							<p className="text-[17.5px] text-[#5FC8F5] font-bold">Family Funday</p>
							<p className="text-[17.5px]text-[#D9D9D9]">The Terrace</p>
						</div>
						<p className="text-[17.5px]text-[#D9D9D9]">@ The Ballroom</p>
					</div>
				</div>
				<div className="w-full mt-6">
					<Image
						width={240.86}
						height={300.72}
						src="/images/t5s.png"
						alt="Residents Img"
					/>
				</div>
			</div>
		</div>
	);
};

export default Template5;
