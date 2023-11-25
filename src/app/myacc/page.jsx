"use client"
import React,{useState} from 'react'

const page = () => {
    const [menu, setMenu] = useState(false);
  return (
<section className='w-full h-full '>
<nav className="sticky top-0 z-50 w-full bg-dark">
        <div className="px-3 py-4 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center justify-start rtl:justify-end">
              <button
                type="button"
                className="inline-flex items-center p-2 text-xl text-lightWhite rounded-lg lg:hidden outline-none"
              >
                <span className="sr-only">Open sidebar</span>
               
              </button>
              <Link href="/dashboard" className="flex ms-2 md:me-24">
                <img
                  src="/images/logo.png"
                  className="h-8 me-3"
                  alt="FlowBite Logo"
                />
                <span className="self-center text-xl font-semibold sm:text-sm whitespace-nowrap dark:text-white">
                  Tea Time
                </span>
              </Link>
            </div>
            {/* Info */}
            <div className="text-white sm:flex hidden items-center justify-between w-[75%]">
              <h3 className="font-bold text-xl">👋Jimmy Trick</h3>
              <div className="flex items-center justify-between gap-x-8">
                <button className="w-full flex items-center justify-between py-[.5rem] px-[1rem] gap-x-[.5rem] rounded-xl bg-gradient-to-r from-btnFrom from-10% to-btnTo to-80% text-base font-bold">
                  <FaPlus /> Broadcast
                </button>
                <div className="relative cursor-pointer">
                  <p className="w-[1rem] h-[1rem] rounded-full bg-gradient-to-r from-btnFrom to-btnTo flex items-center justify-center text-[8px] absolute -top-1 right-0">
                    1
                  </p>
                  <PiBell className="text-[1.5rem]" />
                </div>
                <div className=" cursor-pointer">
                  <RiSettings4Line className="text-[1.5rem]" />
                </div>
              </div>
            </div>
            {/* User */}
            <div className="flex items-center">
              <div className="flex items-center ms-3 relative">
                <button
                  type="button"
                  className="flex text-sm rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                  onClick={() => setMenu(!menu)}
                >
                  <Image
                    className="rounded-full"
                    width={32}
                    height={32}
                    src="/images/user.png"
                    alt="user photo"
                  />
                </button>
                <div
                  className={`z-50 my-4 text-base sm:hidden ${menu ? "block" : "hidden"
                    } list-none bg-dark divide-y divide-gray-100 rounded shadow  text-white absolute top-10 right-0`}
                >
                  <div className="px-4 py-3">
                    <p className="text-sm">Jimmy Trick</p>
                    <p className="text-sm font-medium" role="none">
                      jimmy.trick@teatime.com
                    </p>
                  </div>
                  <div className="flex items-center justify-between gap-x-4 py-4 px-2">
                    <button className="w-full flex items-center justify-between py-[.5rem] px-[1rem] gap-x-[.5rem] rounded-xl bg-gradient-to-r from-btnFrom from-10% to-btnTo to-80% text-base font-bold">
                      <FaPlus /> Broadcast
                    </button>
                    <div className="relative cursor-pointer">
                      <p className="w-[1rem] h-[1rem] rounded-full bg-gradient-to-r from-btnFrom to-btnTo flex items-center justify-center text-[8px] absolute -top-1 right-0">
                        1
                      </p>
                      <PiBell className="text-[1.5rem]" />
                    </div>
                    <div className=" cursor-pointer">
                      <RiSettings4Line className="text-[1.5rem]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>


</section>
    )
}

export default page