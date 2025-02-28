export default async function handler(req, res) {
    try {
      const apiKey = process.env.API_KEY; 
      const city = req.query.city || 'New York';
      const apiUrl = `${process.env.WEATHER_API}?q=${city}&appid=${apiKey}&units=metric`;
      const response = await fetch(apiUrl);
      const data = await response.json();
  
      res.status(200).json(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  