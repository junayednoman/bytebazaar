import { useContext } from "react";
import { MyContext } from "../my context/MyContext";


const useContextInfo = () => {
    const contextInfo = useContext(MyContext);
    return contextInfo;
};

export default useContextInfo;