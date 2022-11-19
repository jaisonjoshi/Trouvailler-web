import React from 'react'
import Navbar from '../components/navbar/navbar'
import Footer from '../components/Footer/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'

const Bidform = () => {
    return (
        <div className="">
            <div className=""><Navbar /></div>
            <div className="w-full">
                <h1 className="text-4xl text-center text-blacky-medium font-bold">Bid Today</h1>
                <p className="text-lg mx-10 my-5 text-justify text-blacky-dark">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>
            </div>
            <form action="" className="" method="post">
                <div className="m-10">
                    <div className="flex mid:mx-10 border text-graydust-medium rounded-lg w-72 md:w-1/2 h-16">
                    <FontAwesomeIcon icon={solid('location-dot')} className="h-7 w-7 my-auto mx-4"/>
                    <select name="location" id="location" className="outline-none border border-none text-gray text-graydust-medium">
                            <option value="" className="outline-none border border-none text-center">Where are you going?</option>
                            <option value="" className="outline-none border border-none text-center">Palakkad</option>
                            <option value="" className="outline-none border border-none text-center">Wayanad</option>
                            <option value="" className="outline-none border border-none text-center">Idukki</option>
                            <option value="" className="outline-none border border-none text-center">Munnar</option>
                        </select>
                    </div>
                    <div className="md:flex my-7">
                        <div className="flex border text-graydust-medium rounded-lg w-72 h-16">
                        <FontAwesomeIcon icon={solid('list')} className="h-6 w-6 my-auto mx-4" />
                            <select name="categories" id="categories" className="border border-none outline-none text-graydust-medium">
                                <option value="" className="border border-none outline-none text-center">Vacation</option>
                                <option value="" className="border border-none outline-none text-center">Honeymoon</option>
                                <option value="" className="border border-none outline-none text-center">Tour</option>
                                <option value="" className="border border-none outline-none text-center">Adventure</option>
                            </select>
                        </div>
                        <div className="md:my-auto mt-7">
                            <input type="radio" id="ac" name="room_type" value="AC" className="md:ml-20 outline-none" />
                            <label for="ac" className="ml-5 text-graydust-normal">AC</label>
                            <input type="radio" id="non_ac" name="room_type" value="Non AC" className="ml-20 outline-none" />
                            <label for="non_ac" className="ml-5 text-graydust-normal">Non AC</label>
                        </div>
                    </div>

                    <div className="md:flex">
                        <div className="px-3 rounded-lg my-7 md:my-5 border text-graydust-medium h-16 p-1 w-72">
                            <h6 className="">Check in</h6>
                            <input type="date" className="border border-none outline-none" />
                        </div>
                        <div className="px-3 rounded-lg my-7 md:my-5 border text-graydust-medium h-16 md:ml-10 p-1 w-72">
                            <h6 className="">Check out</h6>
                            <input type="date" className="border border-none outline-none" />
                        </div>
                    </div> 

                    <div className="md:flex mt-5">
                        <div className="flex border text-graydust-medium rounded-lg w-72 h-16">
                        <FontAwesomeIcon icon={solid('user')} className="h-8 w-8 my-auto mx-4" />
                            <input type="number" className="border border-none outline-none" placeholder="3 Guests" />
                        </div>
                        <div className="flex md:mx-10 md:my-0 my-7 border text-graydust-medium rounded-lg w-72 h-16">
                        <FontAwesomeIcon icon={solid('bed')} className="h-10 w-10 my-auto mx-4" />
                            <input type="number" className="border border-none outline-none" placeholder="3 Room" />
                        </div>
                    </div>

                    <p className="my-5 text-graydust-normal">Enter the amount you can pay</p>

                    <div className="md:flex">
                        <div className="my-5">
                            <label for="min_budget" className="text-graydust-medium">Min</label>
                            <input type="number" id="min_budget" name="min_budget" placeholder="₹1000" className="ml-5 p-3 !outline-none border border-graydust-medium text-graydust-medium w-44 h-16 rounded-xl" />
                        </div>
                        <div className="sm:my-5">
                            <label for="max_budget" className="md:ml-10 text-graydust-medium">Max</label>
                            <input type="number" id="max_budget" name="max_budget" placeholder="₹3000" className="ml-5 p-3 !outline-none border border-graydust-medium text-graydust-medium w-44 h-16 rounded-xl" />
                        </div>
                    </div>

                    <div className="flex justify-between my-5">
                        <input type="reset" value="Reset" className="mr-10 outline-none border border-graydust-normal hover:text-whiteglow text-graydust-normal hover:bg-blacky-dark h-16 w-44 text-center rounded-xl " />
                        <input type="submit" value="Submit" className="outline-none border  h-16 w-44 text-center bg-blacky-dark text-whiteglow rounded-xl" />
                    </div>

                </div>

            </form>
            <Footer />
        </div>
    )
}
export default Bidform
