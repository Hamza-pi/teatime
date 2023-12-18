import Image from 'next/image';
import React from 'react';
import './Template.css';
const Template3 = () => {
	return (
		<div className="px-3  bg-black rounded-xl font-popin ">
			<div className=" flex flex-col">
				<div className="font py-14 sm:pb-8  mb-5  flex flex-col">
					<div className="flex justify-between ">
						<div className="w-fit ">
							<p className="text-[30px] font-bold mb-1 bg-gradient-to-r from-[#F5E65F] to-[#FDCF75] text-transparent bg-clip-text">
								WHATS COOKING?
							</p>

							<div className="bg-gradient-to-r from-[#F5E65F]  to-[#FDCF75]  py-[1px] rounded-2xl"></div>
							<p className="text-[17.5px] opacity-70 font-semibold">
								Vasey RSL Brighton East
							</p>
						</div>
						<Image
							width={80}
							height={70}
							src="/images/whatscook.png"
							alt="Residents Img"
						/>
					</div>
					<p className="text-[17.5px] text-[#F5E65F]">Mon 25th Sep</p>
					<div className="rounded-[18px] bg-[#1C1C1C]  p-2 pr-1 pb-0 my-1 mt-4 max-w-[90%]">
						<p className="text-[#F5E65F] text-[17.5px]">Breakfast </p>
						<p className="text-[#FFFFFF] text-[17.5px]">Food Item name </p>
						<div className="sm:pt-5 pt-2 float-right">
							<Image
								width={50}
								height={50}
								src="/images/t3.png"
								alt="Residents Img"
							/>
						</div>
					</div>
					<div className="rounded-[18px] bg-[#1C1C1C]  p-2 pr-1 pb-0  my-1 max-w-[90%]">
						<p className="text-[#F5E65F] text-[17.5px]">Lunch </p>
						<p className="text-[#FFFFFF] text-[17.5px]">Food Item name </p>
						<div className="sm:pt-5 pt-2 float-right">
							<Image
								width={50}
								height={50}
								src="/images/f3.png"
								alt="Residents Img"
							/>
						</div>
					</div>
					<div className="rounded-[18px] bg-[#1C1C1C]  p-2 pr-1 pb-0  my-1 max-w-[90%]">
						<p className="text-[#F5E65F] text-[17.5px]">Dinner </p>
						<p className="text-[#FFFFFF] text-[17.5px]">Food Item name </p>
						<div className="sm:pt-5 pt-2 float-right">
							<Image
								width={50}
								height={50}
								src="/images/j3.png"
								alt="Residents Img"
							/>
						</div>
					</div>
				</div>
				<div className="mb-8">
					<Image
						width={99}
						height={99}
						src="/images/te3.png"
						alt="Residents Img"
						className="float-right"
					/>
				</div>
			</div>
		</div>
	);
};

export default Template3;
