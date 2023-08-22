
export async function textToSpeech(utterance) {
    const apiKey = 'AIzaSyByB-Lfc_cDmyw2fg6nsJ2_KreRwuuwuNg';
    const  voice = {languageCode: 'en-US', name :'en-US-Neural2-G' };
    try {
      const request = {
        input: { text: utterance },
        voice: voice,
        audioConfig: { audioEncoding: 'MP3' },
      };
  
      const response = await fetch('https://texttospeech.googleapis.com/v1/text:synthesize?key=' + apiKey, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(request),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      const audio = new Audio(`data:audio/mp3;base64,${data.audioContent}`);
      audio.play();
    } catch (error) {
      console.error('Error in Google Text-to-Speech:', error);
    }
  }
  