import Image from 'next/image';
import React from 'react';
import './Template.css';
const Template2 = () => {
	return (
		<div className="px-2  bg-black rounded-xl font-popin ">
			<div className=" flex flex-col">
				<div className="font  pt-8  mb-3 flex flex-col">
					<div className="flex justify-between ">
						<div className="w-fit ">
							<p className="sm:text-2xl text-[22px] font-bold mb-1 bg-gradient-to-r from-[#62F55F] to-[#62F55F] text-transparent bg-clip-text">
                            WHATS COOKING?
							</p>

							<div className="bg-gradient-to-r from-[#EBFF00E0]  to-[#62F55FD9]  py-[1px] rounded-2xl"></div>
							<p className="text-sm opacity-70 font-semibold">
								Vasey RSL Brighton East
							</p>
						</div>
						
						<Image
							width={80}
							height={70}
							className='w-[80px] h-[90px]'
							src="/images/whatscook.png"
							alt="Residents Img"
						/>
					</div>
                    <p className="text-[17.5px] text-[#62F55F] font-[300]">Mon 25th Sep</p>
					<div className="rounded-[18px] bg-[#1C1C1C] p-2 pr-1 pb-0  my-1 mt-4 max-w-[90%]">
                        <p className="text-[#62F55F] text-[17.5px]  font-[300]">Breakfast </p>
                        <p className="text-[#FFFFFF] text-sm font-[300]">Food Item name </p>
						<div className="  float-right">
                        <Image
						width={50}
						height={50}
						src="/images/t2.png"
						alt="Residents Img"
					/>
                        </div>
                    </div>
					<div className="rounded-[18px] bg-[#1C1C1C] p-2 pr-1 pb-0  my-1 max-w-[90%]">
                        <p className="text-[#62F55F] text-[17.5px]  font-[300]">Lunch </p>
                        <p className="text-[#FFFFFF] text-sm font-[300]">Food Item name </p>
                        <div className="  float-right">
                        <Image
						width={50}
						height={50}
						src="/images/f2.png"
						alt="Residents Img"
					/>
                        </div>
                    </div>
					<div className="rounded-[18px] bg-[#1C1C1C] p-2 pr-1 pb-0  my-1 max-w-[90%]">
                        <p className="text-[#62F55F] text-[17.5px]  font-[300]">Dinner </p>
                        <p className="text-[#FFFFFF] text-sm font-[300]">Food Item name </p>
                        <div className="  float-right">
                        <Image
						width={50}
						height={50}
						src="/images/j2.png"
						alt="Residents Img"
					/>
                        </div>
                    </div>
		
				</div>
				<div className="mb-3">
					<Image
						width={99}
						height={99}
						className='md:w-[68px] md:h-[68px] w-[99px] h-[99px] p-4 float-right'
						src="/images/te2.png"
						alt="Residents Img"
                       
					/>
				</div>
			</div>
		</div>
	);
};

export default Template2;
