import { useNavigate } from "react-router-dom";
import { useEffect ,useState} from "react";  

export default function FirstPage() {
    const [name , setname] = useState("");
    const [email , setemail] = useState("");    
    const [password , setpassword] = useState("");
    const [isConnected, setIsConnected] = useState(false);
    const [accountAddress, setAccountAddress] = useState("");
    const [wallet, setWallet] = useState<any>(null);
    // Initialize the navigate function from react-router-dom
    // This will allow us to navigate to different routes in the app
    const navigate = useNavigate();

    useEffect(() => {
    
        checkConnection();
        // You can add any additional logic here if needed
    }, []);

    async function checkConnection() {
        const isConnected = await window.aptos.isConnected();       
        if (!isConnected) {
            alert("Please connect your wallet first.");
            console.log("Wallet is not connected");
        } else {
            const add = await window.aptos.account();
            console.log("Account address:", add?.address);
        }
    }

    async function Disconnectfun() {
        console.log("Disconnect button clicked"); 
        const isConnected = await window.aptos.isConnected();
        if (isConnected) {  

            await window.aptos.disconnect();
            console.log("Wallet disconnected");
            navigate("/"); // Navigate back to home after disconnecting

        }
        function submitForm(event: React.FormEvent<HTMLFormElement>) {
            event.preventDefault();
            console.log("Form submitted with values:", { name, email, password });
            // Here you can handle the form submission logic, like sending data to a server
        }           

        // Add disconnect logic here if needed
    }

    return (
        <div>
             <form
                onSubmit={(event) => {
                    event.preventDefault();
                    console.log("Form submitted with values:", { name, email, password });
                    // Add your form handling logic here
                }}
             >
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" required onChange={(e) => setname(e.target.value)} />
                <br />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required onChange={(e) => setemail(e.target.value)} />  
                <br />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required onChange={(e) => setpassword(e.target.value)} />
                <br />
                <button type="submit" onClick={() => console.log("Submit button clicked")}>Submit</button>
            </form>
            <br />
            <button onClick={Disconnectfun}>Disconnect</button>
        </div>
    );
}
