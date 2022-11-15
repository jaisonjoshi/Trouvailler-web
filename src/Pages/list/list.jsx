import React from 'react'
import Navbar from '../components/navbar/navbar'
import List1 from '../components/cards/list1'
import List2 from '../components/cards/list2'
import Footer from '../components/Footer/Footer'


const Home = () => {
    return (
        <div className="">
            <Navbar />
            <div className="md:flex justify-center">
                <div className="flex justify-center items-center m-3">
                    <input type="text" className="w-48 flex justify-center outline-none items-center text-blacky-light p-3 shadow-lg shadow-gray-500 rounded-2xl text-xs" placeholder="Search" />
                </div>
                <div className="flex justify-center items-center m-3">
                    <button className="w-48 flex md:justify-center sm:justify-start items-center text-blacky-light p-3 shadow-lg shadow-gray-500 rounded-2xl text-xs">
                        <img src={require('../Assets/Variant2.png')} alt="Facebook" className="h-3 w-3 mr-2" />
                        Categories
                    </button>
                </div>

                <div className="hidden h-auto w-96 shadow-lg shadow-graydust-medium rounded-lg px-7 py-3">
                    <input type="checkbox" className="ml-2 mb-5 accent-evergreen" id="honeymoon" name="" value="" />
                    <label for="honeymoon" className="text-base text-blacky-bright"> Honeymoon</label><br />
                    <input type="checkbox"  className="ml-2 mb-5 accent-evergreen" id="family" name="" value="" />
                    <label for="family" className="text-base text-blacky-bright"> Family</label><br />
                    <input type="checkbox" className="ml-2 mb-5 accent-evergreen" id="friends" name="" value="" />
                    <label for="friends" className="text-base text-blacky-bright"> Friends</label><br />
                    <input type="checkbox" className="ml-2 mb-5 accent-evergreen" id="holiday" name="" value="" />
                    <label for="holiday" className="text-base text-blacky-bright"> Holiday</label><br />
                    <input type="submit" className="ml-3 my-2 rounded-md border border-blacky-bright text-blacky-light w-20 h-8 hover:bg-evergreen hover:text-blacky-dark duration-500 hover:border-none" value="Apply"/>
                </div>

                <div className="flex justify-center items-center m-3">
                    <button className="w-48 flex md:justify-center sm:justify-start items-center text-blacky-light p-3 shadow-lg shadow-gray-500 rounded-2xl text-xs">
                        <img src={require('../Assets/Variant2.png')} alt="Facebook" className="h-3 w-3 mr-2" />
                        Budget
                    </button>
                </div>

                <div className="hidden h-auto w-96 shadow-lg shadow-graydust-medium rounded-lg px-7 py-3">
                    <input type="checkbox" className="ml-2 mb-5 accent-evergreen" id="budget1" name="" value="" />
                    <label for="budget1" className="text-base text-blacky-bright"> Less than 10,000</label><br />
                    <input type="checkbox"  className="ml-2 mb-5 accent-evergreen" id="family" name="" value="" />
                    <label for="family" className="text-base text-blacky-bright"> 10,000 - 20,000</label><br />
                    <input type="checkbox" className="ml-2 mb-5 accent-evergreen" id="friends" name="" value="" />
                    <label for="friends" className="text-base text-blacky-bright"> 20,000 - 40,000</label><br />
                    <input type="checkbox" className="ml-2 mb-5 accent-evergreen" id="holiday" name="" value="" />
                    <label for="holiday" className="text-base text-blacky-bright"> 40,000 - 50,000</label><br />
                    <div className="flex">
                        <div className="flex items-center">
                            <label for="min_budget" className="text-blacky-bright">Min</label>
                            <input type="number" id="min_budget" name="min_budget" placeholder="₹1000" className="ml-2 pl-3 outline-none border text-graydust-medium w-20 h-10 rounded-xl" />
                        </div>
                        <div className="flex items-center">
                            <label for="max_budget" className="ml-10 text-blacky-bright">Max</label>
                            <input type="number" id="max_budget" name="max_budget" placeholder="₹3000" className="ml-2 pl-3 outline-none border text-graydust-medium w-20 h-10 rounded-xl" />
                        </div>
                    </div>
                    <input type="submit" className="align-middle ml-3 my-5 rounded-md border border-blacky-bright text-blacky-light w-20 h-8 hover:bg-evergreen hover:text-blacky-dark duration-500 hover:border-none" value="Apply"/>
                </div>

                <div className="flex justify-center items-center m-3">
                    <button className="w-48 flex md:justify-center sm:justify-start items-center text-blacky-light p-3 shadow-lg shadow-gray-500 rounded-2xl text-xs">
                        <img src={require('../Assets/Variant2.png')} alt="Facebook" className="h-3 w-3 mr-2" />
                        Activities
                    </button>
                </div>

                <div className="hidden h-auto w-96 shadow-lg shadow-graydust-medium rounded-lg px-7 py-3">
                    <input type="checkbox" className="ml-2 mb-5 accent-evergreen" id="adventure" name="" value="" />
                    <label for="adventure" className="text-base text-blacky-bright">Adventure</label><br />
                    <input type="checkbox"  className="ml-2 mb-5 accent-evergreen" id="nature" name="" value="" />
                    <label for="nature" className="text-base text-blacky-bright"> Nature</label><br />
                    <input type="checkbox" className="ml-2 mb-5 accent-evergreen" id="hill" name="" value="" />
                    <label for="hill" className="text-base text-blacky-bright"> Hill Station</label><br />
                    <input type="checkbox" className="ml-2 mb-5 accent-evergreen" id="religious" name="" value="" />
                    <label for="religious" className="text-base text-blacky-bright"> Religious</label><br />
                    <input type="submit" className="ml-3 my-2 rounded-md border border-blacky-bright text-blacky-light w-20 h-8 hover:bg-evergreen hover:text-blacky-dark duration-500 hover:border-none" value="Apply"/>
                </div>

                <div className="flex justify-center items-center m-3">
                    <button className="w-48 flex md:justify-center sm:justify-start items-center text-blacky-light p-3 shadow-lg shadow-gray-500 rounded-2xl text-xs">
                        <img src={require('../Assets/Variant2.png')} alt="Facebook" className="h-3 w-3 mr-2" />
                        Rooms
                    </button>
                </div>
            </div>
            <hr className="w-full my-5" />
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 m-11">
                <List1 />
                <List2 />
                <List1 />
                <List2 />
                <List1 />
                <List2 />
                <List2 />
                <List1 />
                <List1 />
            </div>

            <Footer />

        </div>
    )
}

export default Home