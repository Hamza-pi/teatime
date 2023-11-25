'use client';
import FamilyModel from '@/components/FamilyModel';
import Model from '@/components/Model';
import React, { useState } from 'react';
import Button from '../../../components/Button';
import Familytable from '../../../components/Familytable';
import CareworkerTable from '@/components/CareworkerTable';
import Search from '../../../components/Search';

const page = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};
	//imaginary data passes to the table

	const tableData = [
        { id: 1, col1: 'Edward', col2: 'Scissorhand', col3: 'mbriso432@teatime.com' },
        { id: 2, col1: 'Jeremy', col2: 'Scissorhand', col3: 'jerradu24@teatime.com' },
        { id: 3, col1: 'Mayak', col2: 'Scissorhand', col3: 'edcross@teatime.com' },
        { id: 4, col1: 'Radu', col2: 'Scissorhand', col3: 'choo_jim@teatime.com' },
        { id: 5, col1: 'Edward', col2: 'Scissorhand', col3: 'mbriso432@teatime.com' },
        { id: 6, col1: 'Jeremy', col2: 'Scissorhand', col3: 'jerradu24@teatime.com' },
        { id: 7, col1: 'Mayak', col2: 'Scissorhand', col3: 'edcross@teatime.com' },
        { id: 8, col1: 'Radu', col2: 'Scissorhand', col3: 'choo_jim@teatime.com' },
        { id: 9, col1: 'Edward', col2: 'Scissorhand', col3: 'mbriso432@teatime.com' },
        { id: 10, col1: 'Jeremy', col2: 'Scissorhand', col3: 'jerradu24@teatime.com' },
        { id: 11, col1: 'Mayak', col2: 'Scissorhand', col3: 'edcross@teatime.com' },
        { id: 12, col1: 'Radu', col2: 'Scissorhand', col3: 'choo_jim@teatime.com' },
        { id: 13, col1: 'Edward', col2: 'Scissorhand', col3: 'mbriso432@teatime.com' },
        { id: 14, col1: 'Jeremy', col2: 'Scissorhand', col3: 'jerradu24@teatime.com' },
        { id: 15, col1: 'Mayak', col2: 'Scissorhand', col3: 'edcross@teatime.com' },
        { id: 16, col1: 'Radu', col2: 'Scissorhand', col3: 'choo_jim@teatime.com' },
        { id: 17, col1: 'Edward', col2: 'Scissorhand', col3: 'mbriso432@teatime.com' },
        { id: 18, col1: 'Jeremy', col2: 'Scissorhand', col3: 'jerradu24@teatime.com' },
        { id: 19, col1: 'Mayak', col2: 'Scissorhand', col3: 'edcross@teatime.com' },
        { id: 20, col1: 'Radu', col2: 'Scissorhand', col3: 'choo_jim@teatime.com' },
        { id: 21, col1: 'Edward', col2: 'Scissorhand', col3: 'mbriso432@teatime.com' },
        { id: 22, col1: 'Jeremy', col2: 'Scissorhand', col3: 'jerradu24@teatime.com' },
        { id: 23, col1: 'Mayak', col2: 'Scissorhand', col3: 'edcross@teatime.com' },
        { id: 24, col1: 'Radu', col2: 'Scissorhand', col3: 'choo_jim@teatime.com' },
        { id: 25, col1: 'Edward', col2: 'Scissorhand', col3: 'mbriso432@teatime.com' },
        { id: 26, col1: 'Jeremy', col2: 'Scissorhand', col3: 'jerradu24@teatime.com' },
        { id: 27, col1: 'Mayak', col2: 'Scissorhand', col3: 'edcross@teatime.com' },
        { id: 28, col1: 'Radu', col2: 'Scissorhand', col3: 'choo_jim@teatime.com' },
        { id: 29, col1: 'Edward', col2: 'Scissorhand', col3: 'mbriso432@teatime.com' },
        { id: 30, col1: 'Jeremy', col2: 'Scissorhand', col3: 'jerradu24@teatime.com' },
        { id: 31, col1: 'Mayak', col2: 'Scissorhand', col3: 'edcross@teatime.com' },
        { id: 32, col1: 'Radu', col2: 'Scissorhand', col3: 'choo_jim@teatime.com' },
        { id: 33, col1: 'Edward', col2: 'Scissorhand', col3: 'mbriso432@teatime.com' },
        { id: 34, col1: 'Jeremy', col2: 'Scissorhand', col3: 'jerradu24@teatime.com' },
        { id: 35, col1: 'Mayak', col2: 'Scissorhand', col3: 'edcross@teatime.com' },
        { id: 36, col1: 'Radu', col2: 'Scissorhand', col3: 'choo_jim@teatime.com' },
        { id: 37, col1: 'Edward', col2: 'Scissorhand', col3: 'mbriso432@teatime.com' },
        { id: 38, col1: 'Jeremy', col2: 'Scissorhand', col3: 'jerradu24@teatime.com' },
        { id: 39, col1: 'Mayak', col2: 'Scissorhand', col3: 'edcross@teatime.com' },
        { id: 40, col1: 'Radu', col2: 'Scissorhand', col3: 'choo_jim@teatime.com' },
        { id: 41, col1: 'Edward', col2: 'Scissorhand', col3: 'mbriso432@teatime.com' },
    
	];
	return (
		<section className="  sm:p-3  md:pt-16 relative">
			<div className="flex sm:justify-between sm:px-5 sm:flex-row flex-col-reverse sm:items-center space-y-3">
				<p className="text-greyText2 font-bold leading-[26.53px]">
					Care workers
				</p>
				<div className="w-full sm:w-fit flex  items-center md:space-x-14 sm:space-x-12 space-x-5 sm:flex-row flex-ro justify-end relative">
					<Search />
					<Button onopen={openModal} />
				</div>
			</div>{' '}
			<Model isOpen={isModalOpen} onClose={closeModal}>
				<div className="w-full h-full ">
					<FamilyModel onClose={closeModal}></FamilyModel>
				</div>
			</Model>
			<CareworkerTable data={tableData} />
		</section>
	);
};

export default page;
