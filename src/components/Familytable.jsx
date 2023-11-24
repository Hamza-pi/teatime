'use client';

import React, { useEffect, useState } from 'react';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import ReactPaginate from 'react-paginate';
const Familytable = (props) => {
	const {data}=props;
	const [selectedRows, setSelectedRows] = useState([]);

	// Example data for the first table in object form
	const tableData = [
		{ id: 1, col1: 'Mr', col2: 'Ed ', col3: 'Trick', col4: 'Jimmy Lacrose' },
		{
			id: 2,
			col1: 'Mr',
			col2: 'Jimmy',
			col3: 'Johnson',
			col4: 'Jimmy Lacrose',
		},
		{
			id: 3,
			col1: 'Mrs',
			col2: 'Rhonda ',
			col3: 'Patrick',
			col4: 'Conor Mcgregor',
		},
		{
			id: 4,
			col1: 'Mrs',
			col2: 'Rhonda ',
			col3: 'Patrick',
			col4: 'Conor Mcgregor',
		},
		{ id: 5, col1: 'Mr', col2: 'Ed ', col3: 'Trick', col4: 'Jimmy Lacrose' },
		{ id: 6, col1: 'Mrs', col2: 'Ed ', col3: 'Trick', col4: 'Jimmy Lacrose' },
		{ id: 7, col1: 'Mr', col2: 'Jimmy ', col3: 'Johnson', col4: 'Mitch Ross' },
		{
			id: 8,
			col1: 'Mrs',
			col2: 'Rhonda ',
			col3: 'Patrick',
			col4: 'Mitch Ross',
		},
		{ id: 9, col1: 'Mr', col2: 'Ed ', col3: 'Trick', col4: 'Raza Shah' },
	];

	const handleCheckboxChange = (rowIndex) => {
		const updatedSelectedRows = selectedRows.includes(rowIndex)
			? selectedRows.filter((index) => index !== rowIndex)
			: [...selectedRows, rowIndex];

		setSelectedRows(updatedSelectedRows);
	};

	// Here we use item offsets; we could also use page offsets
	// following the API or data you're working with.
	const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage =9

	// Simulate fetching items from another resources.
	// (This could be items from props; or items loaded in a local state
	// from an API endpoint with useEffect and useState)
	const endOffset = itemOffset + itemsPerPage;
	console.log(`Loading items from ${itemOffset} to ${endOffset}`);
	const currentItems = data.slice(itemOffset, endOffset);
	const pageCount = Math.ceil(data.length / itemsPerPage);

	// Invoke when user click to request another page.
	const handlePageClick = (event) => {
		const newOffset = (event.selected * itemsPerPage) % data.length;
		console.log(
			`User requested page number ${event.selected}, which is offset ${newOffset}`
		);
		setItemOffset(newOffset);
	};

	return (
		<div>
			{/*  Table */}
			<div className="relative sm:px-7 w-full overflow-x-auto shadow-md rounded-xl p-3 bg-table mt-3">
				<table className="w-full text-sm text-left rtl:text-right text-white  min-w-[540px]">
					<thead className="w-full text-sm text-white font-bold uppercase bg-white/10 rounded-xl ">
						<tr className="rounded-xl px-3">
							<th
								scope="col"
								className="pl-10 py-3 rounded-tl-xl rounded-bl-xl "
							>
								title
							</th>
							<th scope="col" className="px-2 py-3 ">
								First Name
							</th>
							<th scope="col" className="px-2 py-3 ">
								Last Name
							</th>
							<th scope="col" className="px-2 py-3">
								Family of
							</th>
							<th
								scope="col"
								className="px-2 py-3 rounded-tr-xl rounded-br-xl"
							></th>
						</tr>
					</thead>
					<tbody className="mt-12 p-8">
						{/* Adjust data and structure based on your needs */}
						{currentItems.map((row, rowIndex) => (
							<tr key={rowIndex}>
								<td className=" ">
									<div className=" text-checkbox py-4 flex items-center ">
										{/* checkbox color to do  */}
										<input
											id="vue-checkbox-list"
											type="checkbox"
											value=""
											class="w-4 h-4 text-blue-600 bg-gray-900 border-gray-900 rounded f    dark:bg-gray-900 "
                      onClick={handleCheckboxChange}
                      key={row.id}
										/>
										<label
											htmlFor={`checkbox-table-search-${row.id}`}
											className="sr-only"
										>
											checkbox
										</label>
										<p className="pl-6 text-[16.88px] font-[500] text-white">
											{row.col1}
										</p>
									</div>
								</td>
								<td className="pr-6 pl-2 py-4 ">
									<p className="text-[16.88px] font-[500]">{row.col2}</p>
								</td>
								<td className="pr-6 pl-2 py-4">
									<p className="text-[16.88px] font-[500]">{row.col3}</p>
								</td>
								<td className="pr-6 pl-2 py-4">
									<p className="text-[16.88px] font-[500]">{row.col4}</p>
								</td>
								<td>
									{' '}
									<p className="">
										<HiOutlineDotsHorizontal className="" />
									</p>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
<div className="flex text-black w-full">
			<ReactPaginate
      
				breakLabel="..."
				nextLabel="next >"
				onPageChange={handlePageClick}
				pageRangeDisplayed={5}
				pageCount={pageCount}
				previousLabel="< previous"
				renderOnZeroPageCount={null}
        className='text-'
			/></div>
		</div>
	);
};

export default Familytable;
