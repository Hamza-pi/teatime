import Image from 'next/image';
import React from 'react';
import './Template.css';
const Template2 = () => {
	return (
		<div className="px-3 pr-8 bg-black rounded-xl font-popin">
			<div className=" flex flex-col">
				<div className="font py-10 flex flex-col">
					<div className="flex justify-between ">
						<div className="w-fit ">
							<p className="text-2xl font-bold mb-1 bg-gradient-to-r from-[#FF3D00E0] to-[#E42982D9] text-transparent bg-clip-text">
								WHAT'S ON?
							</p>

							<div className="bg-gradient-to-r from-[#FF3D00E0]  to-[#E42982D9]  py-[1px] rounded-2xl"></div>
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
						<p className="text-sm text-[#F34F9D]">Mon 25th Sep</p>
						<div className="bg-gradient-to-r from-[#FF3D00E0]  to-[#E42982D9]  p-[1px] rounded-2xl"></div>
						<p className="text-sm text-[#F34F9D] font-bold">BINGO</p>
					</div>
					<div className="flex justify-between">
						<p className="text-xs text-[#D9D9D9]">@ The Ballroom</p>
						<div className="">
							<p className="text-sm text-[#F34F9D]">Tue 26th Sep</p>
							<div className="bg-gradient-to-r from-[#FF3D00E0]  to-[#E42982D9]  p-[1px] rounded-2xl"></div>
							<p className="text-sm text-[#F34F9D] font-bold">Afternoon Tea</p>
						</div>
					</div>
					<div className="flex justify-between">
						{' '}
						<div className="">
							<p className="text-sm text-[#F34F9D]">Wed 27th Sep</p>
							<div className="bg-gradient-to-r from-[#FF3D00E0]  to-[#E42982D9]  p-[1px] rounded-2xl"></div>
							<p className="text-sm text-[#F34F9D] font-bold">Bus Trip</p>
						</div>
						<p className="text-xs text-[#D9D9D9]">The Dining Room</p>
					</div>
					<div className="flex justify-between">
						{' '}
						<p className="text-xs text-[#D9D9D9]">To Mornington</p>
						<div className="">
							<p className="text-sm text-[#F34F9D]">Thu 28th Sep</p>
							<div className="bg-gradient-to-r from-[#FF3D00E0]  to-[#E42982D9]  p-[1px] rounded-2xl"></div>
							<p className="text-sm text-[#F34F9D] font-bold">Dance Classes</p>
						</div>
					</div>
					<div className="flex justify-between">
						{' '}
						<div className="">
							<p className="text-sm text-[#F34F9D]">Fri 29th Sep</p>
							<div className="bg-gradient-to-r from-[#FF3D00E0]  to-[#E42982D9]  p-[1px] rounded-2xl"></div>
							<p className="text-sm text-[#F34F9D] font-bold">Happy hour</p>
						</div>
						<p className="text-xs text-[#D9D9D9]">@ The Ballroom</p>
					</div>
					<div className="flex justify-between">
						{' '}
						<p className="text-xs text-[#D9D9D9]">The Bar</p>
						<div className="">
							<p className="text-sm text-[#F34F9D]">Sat 30th Sep</p>
							<div className="bg-gradient-to-r from-[#FF3D00E0]  to-[#E42982D9]  p-[1px] rounded-2xl"></div>
							<p className="text-sm text-[#F34F9D] font-bold">Pet Therapy</p>
						</div>
					</div>
					<div className="flex justify-between">
						{' '}
						<div className="">
							<p className="text-sm text-[#F34F9D]">Sun 31st Sep</p>
							<div className="bg-gradient-to-r from-[#FF3D00E0]  to-[#E42982D9]  p-[1px] rounded-2xl"></div>
							<p className="text-sm text-[#F34F9D] font-bold">Family Funday</p>
							<p className="text-xs text-[#D9D9D9]">The Terrace</p>
						</div>
						<p className="text-xs text-[#D9D9D9]">@ The Ballroom</p>
					</div>
				</div>
				<div className="w-full">
					<Image
						width={250.86}
						height={300.72}
						src="/images/t2s.png"
						alt="Residents Img"
					/>
				</div>
			</div>
		</div>
	);
};

export default Template2;
