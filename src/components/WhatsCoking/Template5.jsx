import Image from 'next/image';
import React from 'react';
import './Template.css';
const Template5 = () => {
	return (
		<div className="px-3  bg-black rounded-xl font-popin">
			<div className=" flex flex-col">
				<div className="font py-14 pb-8 mb-5  flex flex-col">
					<div className="flex justify-between ">
						<div className="w-fit ">
							<p className="text-[30px] font-bold mb-1 bg-gradient-to-r from-[#5FC8F5] to-[#6DFFED] text-transparent bg-clip-text">
                            WHATS COOKING?
							</p>

							<div className="bg-gradient-to-r from-[#5FC8F5]  to-[#5FC8F5]  py-[1px] rounded-2xl"></div>
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
                    <p className="text-[17.5px] text-[#5FC8F5]">Mon 25th Sep</p>
					<div className="rounded-[18px] bg-[#1C1C1C]  p-2 pr-1 pb-0 my-1 mt-4 max-w-[90%]">
                        <p className="text-[#5FC8F5] text-[17.5px]">Breakfast </p>
                        <p className="text-[#FFFFFF] text-[17.5px]">Food Item name </p>
                        <div className="sm:pt-5 pt-2 float-right">
                        <Image
						width={50}
						height={50}
						src="/images/t5.png"
						alt="Residents Img"
					/>
                        </div>
                    </div>
					<div className="rounded-[18px] bg-[#1C1C1C]  p-2 pr-1 pb-0  my-1 max-w-[90%]">
                        <p className="text-[#5FC8F5] text-[17.5px]">Lunch </p>
                        <p className="text-[#FFFFFF] text-[17.5px]">Food Item name </p>
                        <div className="sm:pt-5 pt-2 float-right">
                        <Image
						width={50}
						height={50}
						src="/images/f5.png"
						alt="Residents Img"
					/>
                        </div>
                    </div>
					<div className="rounded-[18px] bg-[#1C1C1C]  p-2 pr-1 pb-0  my-1 max-w-[90%]">
                        <p className="text-[#5FC8F5] text-[17.5px]">Dinner </p>
                        <p className="text-[#FFFFFF] text-[17.5px]">Food Item name </p>
                        <div className="sm:pt-5 pt-2 float-right">
                        <Image
						width={50}
						height={50}
						src="/images/j5.png"
						alt="Residents Img"
					/>
                        </div>
                    </div>
		
				</div>
				<div className="mb-8">
					<Image
						width={99}
						height={99}
						src="/images/te5.png"
						alt="Residents Img"
                        className='float-right p-4'
					/>
				</div>
			</div>
		</div>
	);
};

export default Template5;
