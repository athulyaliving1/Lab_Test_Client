import React from "react";

function NavbarXl() {
  return (
    <div>
      <div className="">
        <div className="bg-zinc-100 w-screen fixed z-50 shadow-xl ">
          <div className="xl:px-40 px-9 flex items-center ">
            <img
              className="xl:w-1/12 md:w-3/12 lg:w-2/12  w-5/12  mt-2 "
              src="https://athulyahomecare.com/lp/images/care.png"
              alt="logo"
            />
            <div class="   font-semibold    md:ml-auto md:block hidden">
              <div className="grid grid-flow-col">
                <div class="max-w-2xl mx-auto">
                  <form class="flex items-center">
                    <label for="simple-search" class="sr-only">
                      Search
                    </label>
                    <div class="relative w-full">
                      <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg
                          aria-hidden="true"
                          class="w-5 h-5 text-gray-500 "
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      <input
                        type="text"
                        id="simple-search"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full pl-10 p-2.5  "
                        placeholder="Search"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      class="p-2.5 ml-2 text-sm font-medium text-white bg-sky-900 rounded-lg border border-sky-900 hover:bg-sky-700 focus:ring-4 focus:outline-none focus:ring-skt-300 "
                    >
                      <svg
                        class="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        ></path>
                      </svg>
                      <span class="sr-only">Search</span>
                    </button>
                  </form>
                </div>

                <div className="text-sky-900 text-2xl md:px-5  md:py-2  cursor-pointer">
                  <ion-icon name="heart"></ion-icon>
                </div>
                <div className="text-sky-900 text-2xl px-2  py-2  cursor-pointer">
                  <ion-icon name="cart-outline"></ion-icon>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavbarXl;
