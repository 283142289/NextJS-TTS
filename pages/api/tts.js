import axios from 'axios';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: '只允许 POST 请求' });
  }

  const { text, name, voice, rate, volume } = req.body;

  if (!text) {
    return res.status(400).json({ error: '缺少文本参数' });
  }

  try {
    const apiUrl = 'https://fond-nina-ballpo-dba04486.koyeb.app/api/tts';
    const response = await axios.post(apiUrl, {
      text,
      name,
      voice,
      rate,
      volume
    });

    res.status(200).json(response.data);
  } catch (error) {
    console.error('TTS API 调用出错:', error);
    res.status(500).json({ error: '生成音频时出错' });
  }
}