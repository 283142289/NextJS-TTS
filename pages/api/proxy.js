import axios from 'axios';

export default async function handler(req, res) {
  try {
    const response = await axios.get('https://fond-nina-ballpo-dba04486.koyeb.app/files/911.mp3', {
      responseType: 'arraybuffer'
    });
    
    res.setHeader('Content-Type', 'audio/mpeg');
    res.send(response.data);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching the audio file' });
  }
}