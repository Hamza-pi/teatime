import Image from 'next/image';
import React from 'react';
import './Template.css';
const Template1 = () => {
	return (
		<div className="px-3 pr-6 bg-black rounded-xl font-popin ">
			<div className=" flex flex-col">
				<div className="font py-8 flex flex-col">
					<div className="flex justify-between ">
						<div className="w-fit ">
							<p className="text-2xl text-[#62F55F] font-bold mb-1">
								WHATS ON?
							</p>
							<div className="bg-gradient-to-r from-[#EBFF00E0]  to-[#62F55FD9]  py-[1px] rounded-2xl"></div>
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
						<p className="text-[16px] text-[#62F55F] font-[300]">Mon 25th Sep &nbsp;</p>
						<div className="bg-gradient-to-r from-[#EBFF00E0]  to-[#62F55FD9]  p-[1px] rounded-2xl w-[55%]"></div>
						<p className="text-[16px] text-[#62F55F] font-bold">BINGO</p>
					</div>
					<div className="flex justify-between">
						<p className="text-xs text-[#D9D9D9] font-[300]">@ The Ballroom</p>
						<div className="flex flex-col items-end">
							<p className="font-[300] text-[16px] text-[#62F55F]">Tue 26th Sep</p>
							<div className="bg-gradient-to-r from-[#EBFF00E0]  to-[#62F55FD9]  p-[1px] rounded-2xl w-[120%]"></div>
							<p className="text-[16px] text-[#62F55F] font-bold">Afternoon Tea</p>
						</div>
					</div>
					<div className="flex justify-between">
						{' '}
						<div className="flex flex-col items-start">
							<p className="font-[300] text-[16px] text-[#62F55F]">Wed 27th Sep</p>
							<div className="bg-gradient-to-r from-[#EBFF00E0]  to-[#62F55FD9]  p-[1px] rounded-2xl w-[120%]"></div>
							<p className="text-[16px] text-[#62F55F] font-bold">Bus Trip</p>
						</div>
						<p className="text-xs text-[#D9D9D9] font-[300]">The Dining Room</p>
					</div>
					<div className="flex justify-between">
						{' '}
						<p className="text-xs text-[#D9D9D9] font-[300]">To Mornington</p>
						<div className="flex flex-col items-end">
							<p className="font-[300] text-[16px] text-[#62F55F]">Thu 28th Sep</p>
							<div className="bg-gradient-to-r from-[#EBFF00E0]  to-[#62F55FD9]  p-[1px] rounded-2xl w-[120%]"></div>
							<p className="text-[16px] text-[#62F55F] font-bold">Dance Classes</p>
						</div>
					</div>
					<div className="flex justify-between">
						{' '}
						<div className="flex flex-col items-start">
							<p className="font-[300] text-[16px] text-[#62F55F]">Fri 29th Sep</p>
							<div className="bg-gradient-to-r from-[#EBFF00E0]  to-[#62F55FD9]  p-[1px] rounded-2xl w-[120%]"></div>
							<p className="text-[16px] text-[#62F55F] font-bold">Happy hour</p>
						</div>
						<p className="text-xs text-[#D9D9D9] font-[300]">@ The Ballroom</p>
					</div>
					<div className="flex justify-between">
						{' '}
						<p className="text-xs text-[#D9D9D9] font-[300]">The Bar</p>
						<div className="flex flex-col items-end">
							<p className="font-[300] text-[16px] text-[#62F55F]">Sat 30th Sep</p>
							<div className="bg-gradient-to-r from-[#EBFF00E0]  to-[#62F55FD9]  p-[1px] rounded-2xl w-[120%]"></div>
							<p className="text-[16px] text-[#62F55F] font-bold">Pet Therapy</p>
						</div>
					</div>
					<div className="flex justify-between">
						{' '}
						<div className="flex flex-col items-start">
							<p className="font-[300] text-[16px] text-[#62F55F]">Sun 31st Sep</p>
							<div className="bg-gradient-to-r from-[#EBFF00E0]  to-[#62F55FD9]  p-[1px] rounded-2xl w-[120%]"></div>
							<p className="text-[16px] text-[#62F55F] font-bold">Family Funday</p>
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
							src="/images/t1s.png"
							alt="Residents Img"
						/>
				</div>
			</div>
		</div>
	);
};

export default Template1;
