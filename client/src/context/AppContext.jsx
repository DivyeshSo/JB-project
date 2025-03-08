import { createContext,useState,useEffect } from "react";
import { jobsData } from "../assets/assets";
import runChat from "../config/gemini";

export const AppContext = createContext()

export const AppContextProvider = (props) => {

    const [searchFilter,setSearchFilter] = useState({
        title: '',
        location: ''
    })

    const [isSearched,setIsSearched] = useState(false)

    const [jobs,setJobs] = useState([])

    const [showRecruiterLogin,setShowRecruiterLogin] = useState(false)

    const fetchJobs = async () => {
        setJobs(jobsData)
    }

    //AI Context

    const [input,setInput] = useState("")
    const [recentPrompt,setRecentPrompt] = useState("")
    const [prevPrompt,setPrevPrompt] = useState([])
    const [showResult,setShowResult] = useState(false)
    const [loading,setLoading] = useState(false)
    const [resultData,setResultData] = useState("")

    const delayPara = (index,nextWord) => {
        setTimeout(function (){
            setResultData(prev=>prev+nextWord);
        },100*index)
    }

    const onSent = async (prompt) => {

        setResultData("")
        setLoading(true)
        setShowResult(true)
        setRecentPrompt(input)
        setPrevPrompt(prev=>[...prev,input])
        const response = await runChat(input)
        let responseArray = response.split("**");
        let newResponse ;
        for(let i = 0; i < responseArray.length; i++)
        {
            if(i === 0 || i%2 !== 1){
                newResponse += responseArray[i];
            }else{
                newResponse += "<b>" + responseArray+"</b>";
            }
        }
        let newResponse2 = newResponse.split("*").join("</br>");
        let newResponseArray = newResponse2.split(" ");
        for(let i = 0; i < newResponseArray.length; i ++){
            const nextWord = newResponseArray[i];
            delayPara(i,nextWord+" ")
        }
        setLoading(false)
        setInput("")
    }




    useEffect(() => {
        fetchJobs()
    }, [])

    const value = {
        searchFilter,setSearchFilter,
        isSearched,setIsSearched,
        jobs,setJobs,
        showRecruiterLogin,setShowRecruiterLogin,
        //Aicaht
        prevPrompt,
        setPrevPrompt,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput,
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}