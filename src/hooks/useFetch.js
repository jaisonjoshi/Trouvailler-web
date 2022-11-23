import { useEffect, useState } from "react"
import axios from "axios"


const useFecth = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);



    useEffect(() => {
        const fetchData = async ()=>{
            setLoading(true);
            try{
                const res = await axios.get(url);
                setData(res.data);
            }catch(err){
                setError(err);
            }
            setLoading(false);
        }

        fetchData();
    },[url]);


    const reFetch = async ()=> {
        setLoading(true);
        try {
            const res = await axios.get(url);
            setData(res.data);
          } catch (err) {
            setError(err);
          }
          setLoading(false);

    }

    return {data, loading, error, reFetch};
}

import {useEffect,useState} from "react"
import axios from "axios";

const useFetch =(url)=>{
    const [data,setData]=useState([])
    const [loading,setLoading]=useState(false)
    const [error,setError]=useState(false)

    useEffect(()=>{
        const fetchData=async()=>{
            setLoading(true)
            try{
                const res=await axios.get(url)
                setData(res.data)
            
            }
            catch(err){
                setError(err)
            }
            setLoading(false)
        };
        fetchData();
    },[url]);//whenever url changes,first paar funct is going to be fired!
   
   
    const reFetch=async()=>{
        setLoading(true)
        try{
            const res=await axios.get(url)
            setData(res.data)
        

export default useFecth
        }
        catch(err){
            setError(err)
        }
        setLoading(false)
    };
    return {data,loading,error,reFetch}
}

export default useFetch;