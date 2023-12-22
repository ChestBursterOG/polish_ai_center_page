import axios from 'axios';

const PORT_NUMBER = 8080;

export default async (req, res) => {
  if (req.method === 'POST') {
    try {
      const { data } = await axios.post(
        process.env.AIRTABLE_ENDPOINT_NEWSLETTER,
        req.body,
        {
          headers: {
            Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
            'Content-Type': 'application/json',
          },
        }
      );

      // Handle successful response from Airtable
      res.status(200).json(data);
    } catch (error) {
      // Handle errors
      console.error(error);
      res.status(500).json({ error: 'An error occurred while submitting data.' });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
};
