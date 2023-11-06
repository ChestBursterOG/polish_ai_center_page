import axios from 'axios';

export default async (req, res) => {
  if (req.method === 'GET') {
    try {
      // Make a GET request to retrieve data from the database
      const response = await axios.get(process.env.AIRTABLE_GET_DATA_ENDPOINT, {
        headers: {
          Authorization: `Bearer ${process.env.AIRTABLE_GET_DATA_API_KEY}`, // Use the API key from environment variables
        },
      }); // Add a closing parenthesis here

      const records = response.data; // Assuming response.data is an array of records from the database

      // Send the records to the frontend
      res.status(200).json(records);
    } catch (error) {
      // Handle errors
      console.error('Error fetching data from the database:', error);
      res.status(500).json({ error: 'An error occurred while fetching data.' });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
};
