import React from 'react'
import Navbar from '../components/navbar/navbar'
import List1 from '../components/cards/list1'
import List2 from '../components/cards/list2'
import Footer from '../components/Footer/Footer'
import Flowbite from "flowbite-react"
import { Dropdown } from 'flowbite-react/lib/cjs/components/Dropdown';

const Home = () => {
    return (
        <div className="">
            <Navbar />
            <div className="md:flex justify-center items-center">
                <div className="flex">
                    <input type="text" className="m-3 w-48 flex md:justify-center sm:justify-start items-center text-blacky-light border border-none focus:ring-0 focus:ring-offset-0 focus:border-graydust-medium outline-none shadow-sm shadow-gray-500 rounded-2xl text-xs" placeholder="Search" />
                </div>

                {/*Drop down of categories */}

                <Dropdown
                    label="Categories"
                    dismissOnClick={false}
                    class="m-3 w-48 flex md:justify-center sm:justify-start items-center text-blacky-light  shadow-sm shadow-gray-500 rounded-2xl text-xs">
                    <Dropdown.Item>
                        <input type="checkbox" className=" accent-evergreen" id="honeymoon" name="" value="" />
                        <label for="honeymoon" className="pl-3 text-base text-blacky-bright"> Honeymoon</label><br />
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <input type="checkbox" className="accent-evergreen" id="family" name="" value="" />
                        <label for="family" className="pl-3 text-base text-blacky-bright"> Family</label><br />
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <input type="checkbox" className="accent-evergreen" id="friends" name="" value="" />
                        <label for="friends" className="pl-3 text-base text-blacky-bright"> Friends</label><br />
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <input type="checkbox" className="accent-evergreen" id="holiday" name="" value="" />
                        <label for="holiday" className="pl-3 text-base text-blacky-bright"> Holiday</label><br />
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <input type="submit" className="ml-3 my-2 rounded-md border border-blacky-bright text-blacky-light w-20 h-8 hover:bg-evergreen hover:text-blacky-dark duration-500 hover:border-none" value="Apply" />
                    </Dropdown.Item>
                </Dropdown>

                <Dropdown
                    label="Budget"
                    dismissOnClick={false}
                    class="m-3 w-48 flex md:justify-center sm:justify-start items-center text-blacky-light  shadow-sm shadow-gray-500 rounded-2xl text-xs">
                    <Dropdown.Item>
                        <input type="checkbox" className="accent-evergreen" id="budget1" name="" value="" />
                        <label for="budget1" className="pl-3 text-base text-blacky-bright"> Less than 10,000</label><br />
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <input type="checkbox" className="accent-evergreen" id="family" name="" value="" />
                        <label for="family" className="pl-3 text-base text-blacky-bright"> 10,000 - 20,000</label><br />
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <input type="checkbox" className=" accent-evergreen" id="friends" name="" value="" />
                        <label for="friends" className="pl-3 text-base text-blacky-bright"> 20,000 - 40,000</label><br />
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <input type="checkbox" className=" accent-evergreen" id="holiday" name="" value="" />
                        <label for="holiday" className="pl-3 text-base text-blacky-bright"> 40,000 - 50,000</label><br />
                    </Dropdown.Item>

                    <div className="flex">
                        <div className="flex items-center">
                            <Dropdown.Item>
                                <label for="min_budget" className="text-blacky-bright">Min</label>
                                <input type="number" id="min_budget" name="min_budget" placeholder="₹1000" className="ml-2 pl-3 outline-none border text-graydust-medium w-24 h-10 rounded-xl" />
                            </Dropdown.Item>
                        </div>
                        <div className="flex items-center">
                            <Dropdown.Item>
                                <label for="max_budget" className="ml-6 text-blacky-bright">Max</label>
                                <input type="number" id="max_budget" name="max_budget" placeholder="₹3000" className="ml-2 pl-3 outline-none border text-graydust-medium w-24 h-10 rounded-xl" />
                            </Dropdown.Item>
                        </div>
                    </div>
                    <Dropdown.Item>
                        <input type="submit" className="align-middle ml-3 my-5 rounded-md border border-blacky-bright text-blacky-light w-20 h-8 hover:bg-evergreen hover:text-blacky-dark duration-500 hover:border-none" value="Apply" />
                    </Dropdown.Item>
                </Dropdown>

                <Dropdown
                    label="Activities"
                    dismissOnClick={false}
                    class="m-3 w-48 flex md:justify-center sm:justify-start items-center text-blacky-light  shadow-sm shadow-gray-500 rounded-2xl text-xs">
                    <Dropdown.Item>
                        <input type="checkbox" className=" accent-evergreen" id="adventure" name="" value="" />
                        <label for="adventure" className="pl-3 text-base text-blacky-bright">Adventure</label><br />
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <input type="checkbox" className=" accent-evergreen" id="nature" name="" value="" />
                        <label for="nature" className="pl-3 text-base text-blacky-bright"> Nature</label><br />
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <input type="checkbox" className=" accent-evergreen" id="hill" name="" value="" />
                        <label for="hill" className="pl-3 text-base text-blacky-bright"> Hill Station</label><br />
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <input type="checkbox" className=" accent-evergreen" id="religious" name="" value="" />
                        <label for="religious" className="pl-3 text-base text-blacky-bright"> Religious</label><br />
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <input type="submit" className=" rounded-md border border-blacky-bright text-blacky-light w-20 h-8 hover:bg-evergreen hover:text-blacky-dark duration-500 hover:border-none" value="Apply" />
                    </Dropdown.Item>
                </Dropdown>


                <Dropdown
                    label="Rooms"
                    dismissOnClick={false}
                    class="m-3 w-48 flex md:justify-center sm:justify-start items-center text-blacky-light  shadow-sm shadow-gray-500 rounded-2xl text-xs">
                    <Dropdown.Item>
                        <input type="checkbox" className=" accent-evergreen" id="single-room" name="" value="" />
                        <label for="single-room" className="pl-3 text-base text-blacky-bright"> Single room</label><br />
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <input type="checkbox" className=" accent-evergreen" id="double-room" name="" value="" />
                        <label for="double-room" className="pl-3 text-base text-blacky-bright"> Double room</label><br />
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <input type="checkbox" className=" accent-evergreen" id="dormitories" name="" value="" />
                        <label for="dormitories" className="pl-3 text-base text-blacky-bright"> Dormitories</label><br />
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <input type="submit" className="rounded-md border border-blacky-bright text-blacky-light w-20 h-8 hover:bg-evergreen hover:text-blacky-dark duration-500 hover:border-none" value="Apply" />
                    </Dropdown.Item>
                </Dropdown>

            </div>
            <hr className="w-full my-5" />
            <div className="lg:mx-28 grid sm:grid-cols-2 md:grid-cols-3 gap-5 m-11">
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