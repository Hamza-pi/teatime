"use client";

import React, { useEffect, useState } from "react";
import {
  HiOutlineChevronDoubleLeft,
  HiOutlineChevronDoubleRight,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiOutlineDotsHorizontal,
} from "react-icons/hi";
import ReactPaginate from "react-paginate";
const Familytable = (props) => {
  const { data } = props;
  const [selectedRows, setSelectedRows] = useState([]); //can use in futre for checkbox implementaion

  //can use in futre for checkbox implementaion
  const handleCheckboxChange = (rowIndex) => {
    const updatedSelectedRows = selectedRows.includes(rowIndex)
      ? selectedRows.filter((index) => index !== rowIndex)
      : [...selectedRows, rowIndex];

    setSelectedRows(updatedSelectedRows);
  };

  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  const [selectedPage, setSelectedPage] = useState(0);
  const itemsPerPage = 9;

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = data.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(data.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
    setSelectedPage(event.selected);
  };
  //double chevron logic

	const handleDoubleLeftClick = () => {
		if (selectedPage > 0) {
			const newOffset = 0;
			setItemOffset(newOffset);
			setSelectedPage(0);
		  }
	};

	const handleDoubleRightClick = () => {
		if (selectedPage < pageCount - 1) {
			const newOffset = (pageCount - 1) * itemsPerPage;
			setItemOffset(newOffset);
			setSelectedPage(pageCount - 1);
		  }
	};
	return (
		<div className="flex flex-col  space-y-5 mb-8">
			{/*  Table */}
			<div className="relative sm:px-7 w-full overflow-x-auto shadow-md rounded-xl p-3 bg-table mt-3 min-h-[650px]">
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
							<tr key={rowIndex} className="">
								<td className=" ">
									<div className=" text-checkbox sm:py-5 flex items-center ">
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
			<div className="flex text-black w-full md:justify-end items-center justify-center mt-2 space-x-2 ">
				<div className={`flex items-center bg-black px-2 py-1 cursor-pointer ${selectedPage === 0 ? 'disabled bg-greyText2' : ''}`}>
					<HiOutlineChevronDoubleLeft
						className={`text-white  text-center sm:text-2xl `}
						onClick={handleDoubleLeftClick}
					/>
				</div>

        <ReactPaginate
          breakLabel={`of ${pageCount}`}
          forcePage={selectedPage}
          breakLinkClassName="px-3 text-2xl leading-[26.53px] flex items-center text-center font-[700] text-greyText2"
          breakClassName="flex items-center"
          nextLabel={
            <HiOutlineChevronRight className="text-2xl text-center " />
          }
          onPageChange={(event) => {
            // Update the offset when the page changes
            const newOffset = (event.selected * itemsPerPage) % data.length;
            setItemOffset(newOffset);
            handlePageClick(event);

						// Update ReactPaginate's state
						setSelectedPage(event.selected);
					}}
					pageRangeDisplayed={1}
					pageCount={pageCount}
					previousLabel={<HiOutlineChevronLeft />}
					renderOnZeroPageCount={null}
					marginPagesDisplayed={0}
					containerClassName="flex select-none sm:text-2xl text-center font-[700] sm:space-x-2 space-x-1"
					pageClassName="px-2"
					// prevPageRel="bg-black"
					previousClassName="bg-black text-white px-2 text-center flex items-center sm:text-2xl "
					nextClassName="bg-black text-white px-2 text-center flex items-center sm:text-xl"
					activeClassName="bg-black text-white  px-3 text-center flex items-center sm:text-2xl"
					disabledClassName="bg-greyText2"
					pageLinkClassName="custom-page-link" // Add a custom class to the page link
				/>
				<div className={`flex items-center bg-black px-2 py-1 cursor-pointer ${selectedPage === pageCount - 1 ? 'disabled bg-greyText2' : ''}`}>
					<HiOutlineChevronDoubleRight
						className="text-white  text-center sm:text-2xl cursor-pointer"
						onClick={handleDoubleRightClick}
					/>
				</div>
			</div>
		</div>
	);
};

export default Familytable;
