const greetTheUser = async (req, res) => {
   // Extracting 'name' from query parameters
   const { name } = req.query;

   // Checking if 'name' is missing
   if (!name) {
       return res.status(400).json({ error: "Enter Your Name" });
   }

   // Sending a greeting message as a response
   res.json({ message: `Hello, ${name}! Welcome to Younglabs.` });
};

export { greetTheUser };
