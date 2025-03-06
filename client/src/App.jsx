import { useState } from 'react' 
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'; 


function App() {
    const [name, setName] = useState(""); // State to store user input

    // Function to fetch greeting from the API
    async function greet() { 
        try {
            // Sending GET request to API with the name as a query parameter
            const response = await axios.get(`${import.meta.env.VITE_GREETING_API}api/greet?name=${name}`);
            
            // Display success message using toast notification
            toast.success(response.data.message);
        } catch (err) {
            // Display error message if API call fails
            if(err.response.data)toast.error(err.response.data.error);
            
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

                {/* Toast notifications */}
                <Toaster />
            </div>
        </div>
    );
}

export default App
