import { useContext } from "react";
import { AuthContextt } from "./AuthProvider";

const useAuth=()=>{
    return useContext(AuthContextt)
}
export default useAuth;