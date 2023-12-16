import Image from 'next/image';
import React from 'react';
import './Template.css';
const Template1 = () => {
	return (
		<div className="px-3  bg-black rounded-xl font-popin">
			<div className=" flex flex-col">
				<div className="font sm:py-14 py-3 flex flex-col">
					<div className="flex justify-between ">
						<div className="w-fit ">
							<p className="text-2xl font-bold mb-1 bg-gradient-to-r from-[#FF3D00E0] to-[#E42982D9] text-transparent bg-clip-text">
                            WHATS COOKING?
							</p>

							<div className="bg-gradient-to-r from-[#FF3D00E0]  to-[#E42982D9]  py-[1px] rounded-2xl"></div>
							<p className="text-sm opacity-70 font-semibold">
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
                    <p className="text-sm text-[#F34F9D]">Mon 25th Sep</p>
					<div className="rounded-[18px] bg-[#1C1C1C] max-w-[320px] p-2 pb-8 my-1 mt-4">
                        <p className="text-[#F34F9D] text-sm">Breakfast </p>
                        <p className="text-[#FFFFFF] text-xs">Food Item name </p>
                    </div>
					<div className="rounded-[18px] bg-[#1C1C1C] max-w-[320px] p-2 pb-0  my-1 ">
                        <p className="text-[#F34F9D] text-sm">Lunch </p>
                        <p className="text-[#FFFFFF] text-xs">Food Item name </p>
                        <div className="sm:pt-5 pt-2 float-right">
                        <Image
						width={50}
						height={50}
						src="/images/f1.png"
						alt="Residents Img"
					/>
                        </div>
                    </div>
					<div className="rounded-[18px] bg-[#1C1C1C] max-w-[320px] p-2 pb-0  my-1 ">
                        <p className="text-[#F34F9D] text-sm">Dinner </p>
                        <p className="text-[#FFFFFF] text-xs">Food Item name </p>
                        <div className="sm:pt-5 pt-2 float-right">
                        <Image
						width={50}
						height={50}
						src="/images/j1.png"
						alt="Residents Img"
					/>
                        </div>
                    </div>
		
				</div>
				<div className="">
					<Image
						width={99}
						height={99}
						src="/images/te1.png"
						alt="Residents Img"
                        className='float-right'
					/>
				</div>
			</div>
		</div>
	);
};

export default Template1;
