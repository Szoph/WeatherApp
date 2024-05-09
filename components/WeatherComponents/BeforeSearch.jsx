import React from 'react';

const BeforeSearch = () => {
    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <h1 className='text-3xl font-bold mb-4'>Weather App</h1>

            <p className='text-lg mb-8'>Enter a city to get started</p>
            <form className="" onSubmit={handleSubmit}>
        <div className=" w-3/4 bg-[#00699E] rounded-md flex items-center justify-center">
        <input className="w-full focus:outline-white bg-[#00699E] rounded-md text-white placeholder-gray-300 p-2 text-lg" 
        type="text" 
        placeholder="Search for cities"
        value={searchText}
        onChange={handleSearchText} />
        <button type="submit" className="px-4 hover:cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg></button>
        </div>
        </form>
        </div>  
    )
}

export default BeforeSearch