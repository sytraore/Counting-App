
let currentAudio = null;

export async function textToSpeech(utterance) {
    try {
    const requestData = {
      text: utterance,
    };

    const response = await fetch('/speech/synthesize', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    });

    const data = await response.json();
    if (currentAudio) {
      currentAudio.pause();
      currentAudio = null;
    }
    
    const audio = new Audio(`data:audio/mp3;base64,${data.audioContent}`);
    currentAudio = audio;

    audio.addEventListener('ended', () => {
      currentAudio = null;
    });
    
    audio.play()
  } catch (error) {
    console.error('Error in Google Text-to-Speech:', error);
  }
  }
