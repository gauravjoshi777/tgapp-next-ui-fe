"use client";
import Link from "next/link";
import axios, { AxiosError } from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar} from "@fortawesome/free-solid-svg-icons";

// This is the calling to next JS API and fetch/print the data in nextjs framework...
const getStaffData = async () => {
    console.log("connecting express API to fetch staffs data....");
    const res = await axios.get<any>('http://localhost:9094/staffs');
    console.log("connecting express API22...." + res.data);
    return {
        staffsList: res.data
    };
};

const getUserData = async () => {
    console.log("connecting spring boot API to fetch users data....");
    const res = await axios.get<any>('http://localhost:9091/users');
    console.log("connecting users API...." + res.data);
    return {
        usersList: res.data
    };
};

const getHotelsData = async () => {
    console.log("connecting spring boot API to fetch hotels data....");
    const res = await axios.get<any>('http://localhost:9092/hotels');
    console.log("connecting hotels API...." + res.data);
    return {
        hotelsList: res.data
    };
};

const getRatingsData = async () => {
    console.log("connecting spring boot API to fetch ratings data....");
    const res = await axios.get<any>('http://localhost:9093/ratings');
    console.log("connecting ratings API...." + res.data);
    return {
        ratingsList: res.data
    };
};

export default function DashboardPage() {
    const [staffResStateData, setStaffData] = useState<any | null>();
    const [userResStateData, setUserData] = useState<any | null>();
    const [hotelResStateData, setHotelData] = useState<any | null>();
    const [ratingResStateData, setRatingData] = useState<any | null>();
    const [loading, setLoading] = useState<any | null>();
    const [userDetails, setUserDetails] = useState<any | null>();
    const onUserClick = async (userId: String) => {
        try {
            setLoading(true);
            console.log("connecting spring boot API to fetch data based on userId...."+userId);
            const res = await axios.get<any>('http://localhost:9091/users/'+userId);
            
            console.log("connecting getUserDetails...." + res.data);
            setUserDetails(res.data);
            console.log("Details fetched successful: ", res.data);
        } catch (error:any) {
            console.log("Issues in fetching details of users !!!", error.message);
            toast.error(error.message);
        } finally{
        setLoading(false);
        }
    }
    

    useEffect(() => {
        getStaffData()
            .then((p) => setStaffData(p))
            .catch((e: Error | AxiosError) => console.log(e));
    }, []);

    useEffect(() => {
        getUserData()
            .then((p) => setUserData(p))
            .catch((e: Error | AxiosError) => console.log(e));
    }, []);

    useEffect(() => {
        getHotelsData()
            .then((p) => setHotelData(p))
            .catch((e: Error | AxiosError) => console.log(e));
    }, []);

    useEffect(() => {
        getRatingsData()
            .then((p) => setRatingData(p))
            .catch((e: Error | AxiosError) => console.log(e));
    }, []);
    

    if (!staffResStateData || !userResStateData || !hotelResStateData || !ratingResStateData) return null;
    return (
    <main className="p-4">
        {/*container */}
        <div className="">
            {/*section row 1 */}
          <div className="text-center p-4">
            <h1 className="text-2xl"><Image
                                    className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                                    src="/tekgrp-logo.png"
                                    alt="logo"
                                    width={200}
                                    height={50}
                                    priority
                                    /></h1>
          </div>
          {/*section row 2 */}
          <div className="p-4">
            <p>
            Welcome to the micro sevices world! where you can find multiple services running on different ports and different technologies.            </p>
          </div>
          {/*section row 3 */}
          <div className="flex justify-between p-4">          
            {/* first box            */}
            <div className="border border-slate-600 w-1/4 m-4 p-4 shadow-lg shadow-green-500 rounded-xl">
              <div className="border w-full bg-green-700 p-4">
                <div className="text-center"> Staffs header</div>
              </div>
              <div className="border w-full bg-green-200 p-4 text-green-700 h-80 overflow-y-auto">

              {staffResStateData.staffsList.map((i: any) => (                        
                            <div className="border border-green-200 hover:bg-slate-400 hover:text-white p-2 m-2 shadow-md shadow-green-400">
                                <span className="text-lg" key={i.id}>{i.name}</span>           
                            </div>
                        ))}  
              </div>
              <div className="border w-full bg-green-500 p-4">
                <div className="text-center">box footer</div>
              </div>
            </div>
            
            {/* second box            */}
            <div className="border border-slate-600 w-1/4 m-4 p-4 shadow-lg shadow-violet-500 rounded-xl">
              <div className="border w-full bg-violet-700 p-4">
                <div className="text-center"> Users header</div>
              </div>
              <div className="border w-full bg-violet-200 p-4 text-violet-700 h-80 overflow-y-auto">                
                {userResStateData.usersList.map((i: any) => (                        
                            <div onClick={() => onUserClick(i.userId)} className="cursor-pointer border border-violet-200 hover:bg-slate-400 hover:text-white p-2 m-2 shadow-md shadow-violet-400">
                                <span className="text-lg" key={i.userId} >{i.name}</span>
                            </div>
                        ))}  
              </div>
              <div className="border w-full bg-violet-600 p-4">
                <div className="text-center">box footer</div>
              </div>
            </div>
            
            {/* third box  */}
            <div className="border border-slate-600 w-1/4 m-4 p-4 shadow-lg shadow-red-500 rounded-xl">
              <div className="border w-full bg-red-700 p-4">
                <div className="text-center"> Hotels header</div>
              </div>
              <div className="border w-full bg-red-200 p-4 text-red-700 h-80 overflow-y-auto">                
                {hotelResStateData.hotelsList.map((i: any) => (                        
                            <div className="border border-red-200 hover:bg-slate-400 hover:text-white p-2 m-2 shadow-md shadow-red-400">
                                <span className="text-lg" key={i.id}>{i.name}</span>           
                            </div>
                        ))}                  
              </div>
              <div className="border w-full bg-red-500 p-4">
                <div className="text-center">box footer</div>
              </div>
            </div>

            {/* fourth box            */}
            <div className="border border-slate-600 w-1/4 m-4 p-4 shadow-lg shadow-yellow-500 rounded-xl">
              <div className="border w-full bg-yellow-700 p-4">
                <div className="text-center"> Ratings header</div>
              </div>                              
              <div className="border w-full bg-yellow-200 p-4 text-yellow-700 h-80 overflow-y-auto">                
              {ratingResStateData.ratingsList.map((i: any) => (                        
                            <div className="border border-red-200 hover:bg-slate-400 hover:text-white p-2 m-2 shadow-md shadow-red-400">                       
                              <div className="relative flex overflow-x-hidden">
                                <div className="py-3 animate-marquee whitespace-nowrap">
                                  <span className="text-lg" key={i.id}>{i.feedback}</span>           
                                </div>
                              </div>
                            </div>
                        ))}    
              </div>
              <div className="border w-full bg-yellow-500 p-4">
                <div className="text-center">box footer</div>
              </div>
            </div>
            
          </div>
          <div className="p-4">
            <div className="border border-slate-600 m-4 p-4 shadow-lg shadow-blue-500 rounded-xl">
              <div className="border w-full bg-blue-500 p-4">
              {userDetails ?
                <div className="text-center">                 
                    <h1 className="text-2xl">{userDetails.name}</h1>
                    <h1 className="text-sm">{userDetails.email}</h1>
                    <h2 className="text-sm">{userDetails.about}</h2>
                </div>
                : "No data selected"}                
              </div>
              <div className="border w-full bg-blue-200 p-4 text-blue-700">
                <div className="border border-blue-200">
                
                    <div>                      
                        {userDetails ? userDetails.ratings.map((i: any) => (                        
                            <div className=""> 
                            {/** loop rating */}
                            <div className="flex justify-between border border-slate-600 m-4 p-4 shadow-lg shadow-blue-500 rounded-xl">
                            <div><Image
                                    className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                                    src="/PunjabGrill.PNG"
                                    alt="hotel images"
                                    width={180}
                                    height={37}
                                    priority
                                    />
                            </div>
                            <div>                                
                                <div className="text-center">                 
                                    <h1 className="text-2xl">{i.hotel.name}</h1><span className="text-sm">{i.hotel.location}</span>
                                    <h2>{i.hotel.about}</h2>
                                    <h2 className="font-bold p-3">Feedback : {i.feedback}</h2>
                                    

                                </div>                                
                            </div>
                            <div>
                                
                                <div className="text-center">            
                                    <div>
                                    <span className="text-[20px]">{i.rating}/5 </span>              
                                      <FontAwesomeIcon className="text-green-500 text-2xl hover:text-gray-500" icon={faStar} />
                                      <FontAwesomeIcon className="text-green-500 text-2xl hover:text-gray-500" icon={faStar} />
                                      <FontAwesomeIcon className="text-green-500 text-2xl hover:text-gray-500" icon={faStar} />
                                      <FontAwesomeIcon className="text-green-500 text-2xl hover:text-gray-500" icon={faStar} />
                                      <FontAwesomeIcon className="text-red-500 text-2xl hover:text-gray-500" icon={faStar} />
                                  </div>
                                </div>
                                
                            </div>
                        </div></div>
                        )) : ""}         
                    </div>
                </div>             
              </div>            
            </div>            
        </div>                  
        </div>
        </main>
    );
}