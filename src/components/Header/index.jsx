import { useState } from "react";
import logo from "../../assets/images/header/partner-brand-logo-1-1-1708655453-18385.png";
export const Header = () => {
  
  return (
    <div>
      {" "}
      <header className=" w-full  text-gray-700 bg-white border border-gray-100 shadow-sm body-font">
        <div className=" container flex flex-col items-start justify-between p-6 mx-auto md:flex-row">
          <a className="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0 w-52">
            <img src={logo} alt="logo" />
          </a>
        
          <div className="flex items-center h-full gap-2">
            {/* <button className="rounded-full uppercase  px-5 py-3 text-xs font-bold text-dark transition-all duration-150 bg-secondary  shadow outline-none active:bg-gray-200 hover:shadow-md focus:outline-none ease">
              Login
            </button> */}
           <select  className="rounded-full uppercase  px-5 py-3 text-xs font-bold text-dark transition-all duration-150 bg-secondary  shadow outline-none active:bg-gray-200 hover:shadow-md focus:outline-none ease" >
  <option value="someOption"> English</option>
</select>
            <button
              className=" rounded-full uppercase  px-5 py-3 text-xs font-bold text-dark transition-all duration-150 bg-secondary  shadow outline-none active:bg-gray-200 hover:shadow-md focus:outline-none ease"
            >
             login
            </button>
          </div>
        </div>
      </header>

{/* <nav className="fixed top-0 left-0 z-20 w-full shadow bg-base-200 search notScrolled">
            <div className="container justify-between navbar">
                <div className="justify-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16"></path>
                            </svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52"></ul>
                    </div>
                    <a href="/">
                        <img src="https://enterpise.s3.ap-southeast-1.amazonaws.com/partner-brand-logo/partner-brand-logo-1-1-1708655453-18385.png" alt="logo" className="max-h-[48px]" />
                    </a>
                </div>
                <div className="justify-center flex-1 hidden lg:flex">
                    <ul className="px-1 text-sm menu menu-horizontal flex-nowrap"></ul>
                </div>
                <div className="relative items-center justify-end gap-2 flex-nowrap">
                    <div className="items-center hidden overflow-hidden border rounded-full sm:flex join border-neutral/10">
                        <div className="join-item">
                            <button type="button" className="h-10 min-h-0 gap-1 rounded-l-none rounded-r-full btn flex-nowrap no-animation border-neutral/10">
                                <span className="rounded-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 513 342" className="inline h-4">
                                        <path fill="#FFF" d="M0 0h513v342H0z"></path>
                                        <path d="M0 0h513v26.3H0zm0 52.6h513v26.3H0zm0 52.6h513v26.3H0zm0 52.6h513v26.3H0zm0 52.7h513v26.3H0zm0 52.6h513v26.3H0zm0 52.6h513V342H0z" fill="#D80027"></path>
                                        <path fill="#2E52B2" d="M0 0h256.5v184.1H0z"></path>
                                        <path d="m47.8 138.9-4-12.8-4.4 12.8H26.2l10.7 7.7-4 12.8 10.9-7.9 10.6 7.9-4.1-12.8 10.9-7.7zm56.3 0-4.1-12.8-4.2 12.8H82.6l10.7 7.7-4 12.8 10.7-7.9 10.8 7.9-4-12.8 10.7-7.7zm56.5 0-4.3-12.8-4 12.8h-13.5l11 7.7-4.2 12.8 10.7-7.9 11 7.9-4.2-12.8 10.7-7.7zm56.2 0-4-12.8-4.2 12.8h-13.3l10.8 7.7-4 12.8 10.7-7.9 10.8 7.9-4.3-12.8 11-7.7zM100 75.3l-4.2 12.8H82.6L93.3 96l-4 12.6 10.7-7.8 10.8 7.8-4-12.6 10.7-7.9h-13.4zm-56.2 0-4.4 12.8H26.2L36.9 96l-4 12.6 10.9-7.8 10.6 7.8L50.3 96l10.9-7.9H47.8zm112.5 0-4 12.8h-13.5l11 7.9-4.2 12.6 10.7-7.8 11 7.8-4.2-12.6 10.7-7.9h-13.2zm56.5 0-4.2 12.8h-13.3l10.8 7.9-4 12.6 10.7-7.8 10.8 7.8-4.3-12.6 11-7.9h-13.5zm-169-50.6-4.4 12.6H26.2l10.7 7.9-4 12.7L43.8 50l10.6 7.9-4.1-12.7 10.9-7.9H47.8zm56.2 0-4.2 12.6H82.6l10.7 7.9-4 12.7L100 50l10.8 7.9-4-12.7 10.7-7.9h-13.4zm56.3 0-4 12.6h-13.5l11 7.9-4.2 12.7 10.7-7.9 11 7.9-4.2-12.7 10.7-7.9h-13.2zm56.5 0-4.2 12.6h-13.3l10.8 7.9-4 12.7 10.7-7.9 10.8 7.9-4.3-12.7 11-7.9h-13.5z" fill="#FFF"></path>
                                    </svg>
                                </span>
                                <i className="ml-1 inline-block text-neutral pointer-events-none align-top">
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="m11.998 17 7-8h-14z"></path>
                                    </svg>
                                </i>
                            </button>
                            <div className="absolute flex flex-col p-4 gap-y-8 rounded-lg shadow-lg right-[150px] top-14 bg-base-200 dataContainer min-w-max ">
                                <div>
                                    <h6 className="mb-4">Language</h6>
                                    <div className="grid grid-cols-3 gap-2">
                                        <div className="px-3 gap-2 border border-primary/10 hover:bg-primary/10 flex items-center py-2 rounded cursor-pointer  whitespace-nowrap text-primary bg-primary/10">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 513 342" className="inline h-4">
                                                <path fill="#FFF" d="M0 0h513v342H0z"></path>
                                                <path d="M0 0h513v26.3H0zm0 52.6h513v26.3H0zm0 52.6h513v26.3H0zm0 52.6h513v26.3H0zm0 52.7h513v26.3H0zm0 52.6h513v26.3H0zm0 52.6h513V342H0z" fill="#D80027"></path>
                                                <path fill="#2E52B2" d="M0 0h256.5v184.1H0z"></path>
                                                <path d="m47.8 138.9-4-12.8-4.4 12.8H26.2l10.7 7.7-4 12.8 10.9-7.9 10.6 7.9-4.1-12.8 10.9-7.7zm56.3 0-4.1-12.8-4.2 12.8H82.6l10.7 7.7-4 12.8 10.7-7.9 10.8 7.9-4-12.8 10.7-7.7zm56.5 0-4.3-12.8-4 12.8h-13.5l11 7.7-4.2 12.8 10.7-7.9 11 7.9-4.2-12.8 10.7-7.7zm56.2 0-4-12.8-4.2 12.8h-13.3l10.8 7.7-4 12.8 10.7-7.9 10.8 7.9-4.3-12.8 11-7.7zM100 75.3l-4.2 12.8H82.6L93.3 96l-4 12.6 10.7-7.8 10.8 7.8-4-12.6 10.7-7.9h-13.4zm-56.2 0-4.4 12.8H26.2L36.9 96l-4 12.6 10.9-7.8 10.6 7.8L50.3 96l10.9-7.9H47.8zm112.5 0-4 12.8h-13.5l11 7.9-4.2 12.6 10.7-7.8 11 7.8-4.2-12.6 10.7-7.9h-13.2zm56.5 0-4.2 12.8h-13.3l10.8 7.9-4 12.6 10.7-7.8 10.8 7.8-4.3-12.6 11-7.9h-13.5zm-169-50.6-4.4 12.6H26.2l10.7 7.9-4 12.7L43.8 50l10.6 7.9-4.1-12.7 10.9-7.9H47.8zm56.2 0-4.2 12.6H82.6l10.7 7.9-4 12.7L100 50l10.8 7.9-4-12.7 10.7-7.9h-13.4zm56.3 0-4 12.6h-13.5l11 7.9-4.2 12.7 10.7-7.9 11 7.9-4.2-12.7 10.7-7.9h-13.2zm56.5 0-4.2 12.6h-13.3l10.8 7.9-4 12.7 10.7-7.9 10.8 7.9-4.3-12.7 11-7.9h-13.5z" fill="#FFF"></path>
                                            </svg> 
                                            <span>English</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="h-10 min-h-0 px-4 border rounded-full btn no-animation border-neutral/20">Login</button>
            </div>
        </nav> */}
    </div>
  );
};
