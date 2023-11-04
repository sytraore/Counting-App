
export async function textToSpeech(utterance) {
    try {
    const requestData = {
      text: utterance,
    };

    const response = await fetch('http://localhost:8000/speech/synthesize', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    });

    const data = await response.json();
    const audio = new Audio(`data:audio/mp3;base64,${data.audioContent}`);
    audio.play()
  } catch (error) {
    console.error('Error in Google Text-to-Speech:', error);
  }
  }
