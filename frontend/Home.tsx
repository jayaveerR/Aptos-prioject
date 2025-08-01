declare global {

    interface Window {
        aptos: any;
    }
}
import { useNavigate } from "react-router-dom";

export default function Home(){ 
    const navigate = useNavigate();
    const connectbtn = async (): Promise<void> => {
        console.log("Connect button clicked");
        const isConnected = await window.aptos.isConnected();
        console.log("isconnected", isConnected);
        if (!isConnected) {
            await window.aptos.connect();
            navigate("/firstpage");
        } else {
            console.log("Wallet is already connected");
            const add = await window.aptos.account();
            console.log("Account address:", add?.address);
        }
    }
    return(
        <div>
            <h1>im jaya</h1> 
            <button onClick={connectbtn}>connect</button>
        </div>  
    );
}
