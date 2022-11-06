import React from 'react'
import Navbar from '../components/navbar/navbar'
import Footer from '../components/Footer/Footer'
const Bidform = () => {
    return (
        <div className="">
            <Navbar />
            <div className="w-full">
                <h1 className="text-4xl text-center text-blacky-dark font-bold">Bid Today</h1>
                <p className="text-lg text-justify justify-center mx-10 my-5 md:text-center text-blacky-dark">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>
            </div>
            <form action="" className="">
                <div className="m-10">
                    <div className="flex mid:mx-10 border border-blacky-light rounded-md w-72 md:w-1/2 h-10">
                        <img src={require('../Assets/Location.png')} alt="" className="h-5 w-5 my-auto mx-4" />
                        <select name="location" id="location" className="outline-none ">
                            <option value="" className="outline-none text-center text-blacky-light">Where are you going?</option>
                            <option value="" className="outline-none text-center text-blacky-light">Palakkad</option>
                            <option value="" className="outline-none text-center text-blacky-light">Wayanad</option>
                            <option value="" className="outline-none text-center text-blacky-light">Idukki</option>
                            <option value="" className="outline-none text-center text-blacky-light">Munnar</option>
                        </select>
                    </div>
                    <div className="md:flex my-10">
                        <div className="flex border border-blacky-light rounded-md w-72 h-10">
                            <img src={require('../Assets/Categories.png')} alt="" className="h-5 w-5 my-auto mx-4" />
                            <select name="categories" id="categories" className="outline-none">
                                <option value="" className="outline-none text-center text-blacky-light">Select</option>
                                <option value="" className="outline-none text-center text-blacky-light">Vacation</option>
                                <option value="" className="outline-none text-center text-blacky-light">Honeymoon</option>
                                <option value="" className="outline-none text-center text-blacky-light">Tour</option>
                                <option value="" className="outline-none text-center text-blacky-light">Adventure</option>
                            </select>
                        </div>
                        <div className="md:my-auto my-7">
                            <input type="radio" id="ac" name="room_type" value="AC" className="md:ml-20" />
                            <label for="ac" className="md:ml-5">AC</label>
                            <input type="radio" id="non_ac" name="room_type" value="Non AC" className="ml-20" />
                            <label for="non_ac" className="ml-5">Non AC</label>
                        </div>
                    </div>

                    <div className="md:flex">
                        <div className="flex border border-blacky-light rounded-md w-72 h-10">
                            <img src={require('../Assets/Person.png')} alt="" className="h-5 w-5 my-auto mx-4" />
                            <input type="text" className="outline-none" placeholder="3 Guests" />
                        </div>
                        <div className="flex md:mx-10 md:my-0 my-7 border border-blacky-light rounded-md w-72 h-10">
                            <img src={require('../Assets/Room.png')} alt="" className="h-5 w-5 my-auto mx-4" />
                            <input type="text" className="outline-none" placeholder="3 Room" />
                        </div>
                    </div>

                    <p className="my-5">Enter the amount you can pay</p>

                    <div className="md:flex">
                        <div className="my-5">
                            <label for="ac" className="">Min</label>
                            <input type="text" id="min_budget" name="budget" value="" placeholder="₹1000" className="ml-5 text-center outline-none border border-blacky-medium w-44 h-10 rounded-xl" />
                        </div>
                        <div className="sm:my-5">
                            <label for="ac" className="md:ml-10 ">Max</label>
                            <input type="text" id="min_budget" name="budget" value="" placeholder="₹3000" className="ml-5 text-center outline-none border border-blacky-medium w-44 h-10 rounded-xl" />
                        </div>
                    </div>

                    <div className="flex justify-between my-5">
                        <input type="reset" value="Reset" className="mr-10 outline-none border border-blacky-light hover:text-whiteglow hover:bg-blacky-dark h-10 w-44 text-center rounded-xl " />
                        <input type="submit" value="Submit" className="outline-none border  h-10 w-44 text-center bg-blacky-dark text-whiteglow rounded-xl" />
                    </div>

                </div>

            </form>
            <Footer/>
        </div>
    )
}
export default Bidform
