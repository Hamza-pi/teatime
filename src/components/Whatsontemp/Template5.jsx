import Image from 'next/image';
import React from 'react';
import './Template.css';
const Template5 = () => {
	return (
		<div className="px-3 pr-6 bg-black rounded-xl font-popin ">
			<div className=" flex flex-col">
				<div className="font py-8 flex flex-col">
					<div className="flex justify-between ">
						<div className="w-fit ">
							<p className="text-2xl bg-gradient-to-r from-[#5FC8F5] to-[#6DFFED] text-transparent bg-clip-text font-bold mb-1">
								WHATS ON?
							</p>
							<div className="bg-gradient-to-r from-[#5FC8F5]  to-[#5FC8F5]  py-[1px] rounded-2xl"></div>
							<p className="text-xs opacity-70 font-semibold">
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
					<div className="w-full mt-1">
						<p className="font-[300] text-[16px] text-[#5FC8F5]">Mon 25th Sep &nbsp;</p>
						<div className="bg-gradient-to-r from-[#5FC8F5]  to-[#5FC8F5]  p-[1px] rounded-2xl w-[55%]"></div>
						<p className="text-[16px] text-[#5FC8F5] font-bold">BINGO</p>
					</div>
					<div className="flex justify-between">
						<p className="text-xs text-[#D9D9D9] font-[300]">@ The Ballroom</p>
						<div className="flex flex-col items-end">
							<p className="font-[300] text-[16px] text-[#5FC8F5]">Tue 26th Sep</p>
							<div className="bg-gradient-to-r from-[#5FC8F5]  to-[#5FC8F5]  p-[1px] rounded-2xl w-[120%]"></div>
							<p className="text-[16px] text-[#5FC8F5] font-bold">Afternoon Tea</p>
						</div>
					</div>
					<div className="flex justify-between">
						{' '}
						<div className="flex flex-col items-start">
							<p className="font-[300] text-[16px] text-[#5FC8F5]">Wed 27th Sep</p>
							<div className="bg-gradient-to-r from-[#5FC8F5]  to-[#5FC8F5]  p-[1px] rounded-2xl w-[120%]"></div>
							<p className="text-[16px] text-[#5FC8F5] font-bold">Bus Trip</p>
						</div>
						<p className="text-xs text-[#D9D9D9] font-[300]">The Dining Room</p>
					</div>
					<div className="flex justify-between">
						{' '}
						<p className="text-xs text-[#D9D9D9] font-[300]">To Mornington</p>
						<div className="flex flex-col items-end">
							<p className="font-[300] text-[16px] text-[#5FC8F5]">Thu 28th Sep</p>
							<div className="bg-gradient-to-r from-[#5FC8F5]  to-[#5FC8F5]  p-[1px] rounded-2xl w-[120%]"></div>
							<p className="text-[16px] text-[#5FC8F5] font-bold">Dance Classes</p>
						</div>
					</div>
					<div className="flex justify-between">
						{' '}
						<div className="flex flex-col items-start">
							<p className="font-[300] text-[16px] text-[#5FC8F5]">Fri 29th Sep</p>
							<div className="bg-gradient-to-r from-[#5FC8F5]  to-[#5FC8F5]  p-[1px] rounded-2xl w-[120%]"></div>
							<p className="text-[16px] text-[#5FC8F5] font-bold">Happy hour</p>
						</div>
						<p className="text-xs text-[#D9D9D9] font-[300]">@ The Ballroom</p>
					</div>
					<div className="flex justify-between">
						{' '}
						<p className="text-xs text-[#D9D9D9] font-[300]">The Bar</p>
						<div className="flex flex-col items-end">
							<p className="font-[300] text-[16px] text-[#5FC8F5]">Sat 30th Sep</p>
							<div className="bg-gradient-to-r from-[#5FC8F5]  to-[#5FC8F5]  p-[1px] rounded-2xl w-[120%]"></div>
							<p className="text-[16px] text-[#5FC8F5] font-bold">Pet Therapy</p>
						</div>
					</div>
					<div className="flex justify-between">
						{' '}
						<div className="flex flex-col items-start">
							<p className="font-[300] text-[16px] text-[#5FC8F5]">Sun 31st Sep</p>
							<div className="bg-gradient-to-r from-[#5FC8F5]  to-[#5FC8F5]  p-[1px] rounded-2xl w-[120%]"></div>
							<p className="text-[16px] text-[#5FC8F5] font-bold">Family Funday</p>
							<p className="text-xs text-[#D9D9D9] font-[300]">The Terrace</p>
						</div>
						<p className="text-xs text-[#D9D9D9] font-[300]">@ The Ballroom</p>
					</div>
				</div>
				<div className="w-full  justify-center">
				<Image
							width={346.86}
							height={400.72}
							className='w-[257px] h-[89px]'
							src="/images/t5s.png"
							alt="Residents Img"
						/>
				</div>
			</div>
		</div>
	);
};

export default Template5;
