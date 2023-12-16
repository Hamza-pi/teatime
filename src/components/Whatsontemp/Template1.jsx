import Image from 'next/image';
import React from 'react';
import './Template.css';
const Template1 = () => {
	return (
		<div className="px-3 pr-8 bg-black rounded-xl font-popin h-full">
			<div className=" flex flex-col">
				<div className="font py-10 flex flex-col">
					<div className="flex justify-between ">
						<div className="w-fit ">
							<p className="text-2xl text-[#62F55F] font-bold mb-1">
								WHATS ON?
							</p>
							<div className="bg-gradient-to-r from-[#EBFF00E0]  to-[#62F55FD9]  py-[1px] rounded-2xl"></div>
							<p className="text-sm opacity-70 font-semibold">
								Vasey RSL Brighton East
							</p>
						</div>
						<Image
							width={80}
							height={70}
							src="/images/whatson.png"
							alt="Residents Img"
						/>
					</div>
					<div className="w-fit mt-1">
						<p className="text-sm text-[#62F55F]">Mon 25th Sep</p>
						<div className="bg-gradient-to-r from-[#EBFF00E0]  to-[#62F55FD9]  p-[1px] rounded-2xl"></div>
						<p className="text-sm text-[#62F55F] font-bold">BINGO</p>
					</div>
					<div className="flex justify-between">
						<p className="text-xs text-[#D9D9D9]">@ The Ballroom</p>
						<div className="">
							<p className="text-sm text-[#62F55F]">Tue 26th Sep</p>
							<div className="bg-gradient-to-r from-[#EBFF00E0]  to-[#62F55FD9]  p-[1px] rounded-2xl"></div>
							<p className="text-sm text-[#62F55F] font-bold">Afternoon Tea</p>
						</div>
					</div>
					<div className="flex justify-between">
						{' '}
						<div className="">
							<p className="text-sm text-[#62F55F]">Wed 27th Sep</p>
							<div className="bg-gradient-to-r from-[#EBFF00E0]  to-[#62F55FD9]  p-[1px] rounded-2xl"></div>
							<p className="text-sm text-[#62F55F] font-bold">Bus Trip</p>
						</div>
						<p className="text-xs text-[#D9D9D9]">The Dining Room</p>
					</div>
					<div className="flex justify-between">
						{' '}
						<p className="text-xs text-[#D9D9D9]">To Mornington</p>
						<div className="">
							<p className="text-sm text-[#62F55F]">Thu 28th Sep</p>
							<div className="bg-gradient-to-r from-[#EBFF00E0]  to-[#62F55FD9]  p-[1px] rounded-2xl"></div>
							<p className="text-sm text-[#62F55F] font-bold">Dance Classes</p>
						</div>
					</div>
					<div className="flex justify-between">
						{' '}
						<div className="">
							<p className="text-sm text-[#62F55F]">Fri 29th Sep</p>
							<div className="bg-gradient-to-r from-[#EBFF00E0]  to-[#62F55FD9]  p-[1px] rounded-2xl"></div>
							<p className="text-sm text-[#62F55F] font-bold">Happy hour</p>
						</div>
						<p className="text-xs text-[#D9D9D9]">@ The Ballroom</p>
					</div>
					<div className="flex justify-between">
						{' '}
						<p className="text-xs text-[#D9D9D9]">The Bar</p>
						<div className="">
							<p className="text-sm text-[#62F55F]">Sat 30th Sep</p>
							<div className="bg-gradient-to-r from-[#EBFF00E0]  to-[#62F55FD9]  p-[1px] rounded-2xl"></div>
							<p className="text-sm text-[#62F55F] font-bold">Pet Therapy</p>
						</div>
					</div>
					<div className="flex justify-between">
						{' '}
						<div className="">
							<p className="text-sm text-[#62F55F]">Sun 31st Sep</p>
							<div className="bg-gradient-to-r from-[#EBFF00E0]  to-[#62F55FD9]  p-[1px] rounded-2xl"></div>
							<p className="text-sm text-[#62F55F] font-bold">Family Funday</p>
							<p className="text-xs text-[#D9D9D9]">The Terrace</p>
						</div>
						<p className="text-xs text-[#D9D9D9]">@ The Ballroom</p>
					</div>
				</div>
				<div className="w-full h-full">
				<Image
							width={346.86}
							height={407.72}
							src="/images/t1s.png"
							alt="Residents Img"
						/>
				</div>
			</div>
		</div>
	);
};

export default Template1;
