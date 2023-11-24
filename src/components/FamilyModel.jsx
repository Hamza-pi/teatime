import React, { useState } from 'react';

const FamilyModel = ({ onClose }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
  
    const options = ['Option 1', 'Option 2', 'Option 3'];
  
    const handleSelect = (option) => {
      setSelectedOption(option);
      setIsOpen(false);
    };
  
	return (
		<section className="bg-transparent h-screen flex flex-col items-center justify-center  pt-26 px-2">
			<div className="max-w-[574px]  bg-model rounded-xl">
				<div className="flex justify-center flex-col py-4">
					<h2 className="text-lg font-bold text-white ">Add family member</h2>
					<div
						className=" bg-greyText2  w-full 
                h-[0.5px] mt-3  "
					>
						<div className="flex justify-center  relative">
							<div className="w-[150px] border-t-4 border-blue-500 pt-2  rounded-t-md absolute -top-1"></div>
						</div>
					</div>
				</div>
				<form action="#" className="sm:px-20 px-12 sm:py-8 py-2">
					<div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5 max-w-[432px]">
						<div className="w-full">
							<label
								for="First Name"
								className="block mb-2 text-sm font-bold text-white/60 text-start"
							>
								First Name
							</label>
							<input
								type="text"
								name="brand"
								id="brand"
								className="bg-white/10  text-sm rounded-2xl  block w-full p-3 outline-none text-white font-[700] "
								value="Apple"
								placeholder="Product brand"
								required=""
							/>
						</div>
						<div className="w-full">
							<label
								for="price"
								className="block mb-2 text-sm font-bold text-white/60 text-start"
							>
								Price
							</label>
							<input
								type="number"
								name="price"
								id="price"
								className="bg-white/10  text-sm rounded-2xl  block w-full p-3 outline-none text-white font-[700] "
								value="2999"
								placeholder="$299"
								required=""
							/>
						</div>
						<div className="sm:col-span-2">
							<label
								for="name"
								className="block mb-2 text-sm font-bold text-white/60 text-start"
							>
								Product Name
							</label>
							<input
								type="text"
								name="name"
								id="name"
								className="bg-white/10  text-sm rounded-2xl  block w-full p-3 outline-none text-white font-[700] "
								value="Apple iMac 27&ldquo;"
								placeholder="Type product name"
								required=""
							/>
						</div>

						<div className="sm:col-span-2">
							<label
								htmlFor="category"
								className="block mb-2 text-sm font-bold text-white/60 text-start"
							>
								Category
							</label>
							<div className="relative flex items-center">
								<div
									className={`cursor-pointer appearance-none bg-white/10 text-sm rounded-2xl block w-full p-3 outline-none text-white font-[700] text-start ${
										isOpen ? 'border-b-2 border-black' : ''
									}`}
									onClick={() => setIsOpen(!isOpen)}
								>
									{selectedOption || 'Select an option'}
								</div>
								<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2 text-gray-700">
									<svg
										className={`fill-current h-4 w-4 transition-transform transform ${
											isOpen ? 'rotate-180' : ''
										}`}
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
									>
										<path d="M10 12l-6-6 1.41-1.41L10 9.17l4.59-4.58L16 6z" />
									</svg>
								</div>
								{isOpen && (
									<div className="absolute w-full mt-2 bg-model rounded-b-md shadow-white/30  shadow-md top-8">
										{options.map((option) => (
											<div
												key={option}
												className="p-2 cursor-pointer hover:bg-black/10 text-sm font-[700] text-start"
												onClick={() => handleSelect(option)}
											>
												{option}
											</div>
										))}
									</div>
								)}
							</div>
						</div>
					</div>
					<div className="flex items-center space-x-4">
						<button
							type="submit"
							className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
							onClick={onClose}
						>
							Update product
						</button>
						<button
							type="button"
							className="text-red-600 inline-flex items-center hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
							onClick={onClose}
						>
							<svg
								className="w-5 h-5 mr-1 -ml-1"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fill-rule="evenodd"
									d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
									clip-rule="evenodd"
								></path>
							</svg>
							Delete
						</button>
					</div>
				</form>
			</div>
		</section>
	);
};

export default FamilyModel;
