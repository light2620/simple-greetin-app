import { useState } from 'react' 
import axios from 'axios'



function App() {
    const [name, setName] = useState(""); // State to store user input
    const [message, setMessage] = useState(""); // Stores success/error message
    const [messageType, setMessageType] = useState(""); // "success" or "error"
    // Function to fetch greeting from the API
    async function greet() { 
        try {
            // Sending GET request to API with the name as a query parameter 
            const response = await axios.get(`${import.meta.env.VITE_GREETING_API}api/greet?name=${name}`); // Getting Backend URL From .env File
            setMessage(response.data.message); // Setting Success Message
            setMessageType("success");  // Setting messgeType To Sucess
           
        } catch (err) {
            const errorMsg = err.response?.data?.error || "Something went wrong!";
            setMessageType("error"); // Setting messageType To Error
            setMessage(errorMsg); // Setting Message
            
        }
    }

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <h1 className="text-2xl font-bold mb-4">Greeting App</h1>
                
                {/* Input field for user to enter name */}
                <input 
                    type="text" 
                    placeholder="Enter your name" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border p-3 rounded w-full mb-4 focus:outline-none focus:border-2 focus:border-neutral-900"
                />

                {/* Button to trigger greeting API */}
                <button 
                    onClick={greet}
                    className="bg-neutral-900 text-white px-6 py-2 rounded w-full hover:bg-neutral-700 transition cursor-pointer"
                >
                    Get Greeting
                </button>
                {/* Success or Error Message */}
                {message && (
                    <p className={`mt-4 p-2 rounded text-sm ${messageType === "success" ? "text-green-600 bg-green-100" : "text-red-600 bg-red-100"}`}>
                        {message}
                    </p>
                )}
            </div>
        </div>
    );
}

export default App
