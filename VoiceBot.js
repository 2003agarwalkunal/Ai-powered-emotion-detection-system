import React, { useState, useRef } from "react";

const VoiceBot = () => {
  const [userText, setUserText] = useState("");
  const [botResponse, setBotResponse] = useState("");
  const [listening, setListening] = useState(false);
  const synth = window.speechSynthesis;
  const recognitionRef = useRef(null); // for start/stop access

  const startListening = () => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => setListening(true);

    recognition.onresult = async (event) => {
      const spokenText = event.results[0][0].transcript;
      setUserText(spokenText);

      const reply = await getBotReply(spokenText);
      setBotResponse(reply);
      speak(reply);
      setListening(false);
    };

    recognition.onerror = (e) => {
      console.error("Speech Recognition Error:", e);
      setListening(false);
    };

    recognition.onend = () => setListening(false);

    recognition.start();
    recognitionRef.current = recognition;
  };

  const stopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setListening(false);
    }
  };

  const getBotReply = async (userMessage) => {
    try {
      const res = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer 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",
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: userMessage }],
        }),
      });

      const data = await res.json();

      if (!data.choices || !data.choices.length) {
        console.error("Unexpected API response:", data);
        return "Sorry, I didn't get a valid response. Please try again.";
      }

      return data.choices[0].message.content.trim();
    } catch (error) {
      console.error("API Error:", error);
      return "Something went wrong while contacting the AI.";
    }
  };

  const speak = (text) => {
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = "en-US";
    utter.rate = 1;
    synth.speak(utter);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-extrabold text-blue-900 mb-6">🎤 Voice Chatbot</h1>

      <div className="flex gap-4 mb-8">
        <button
          onClick={startListening}
          className="bg-blue-700 text-white px-6 py-3 rounded-full hover:bg-blue-800 transition"
          disabled={listening}
        >
          Start Talking 🎙️
        </button>
        <button
          onClick={stopListening}
          className="bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition"
          disabled={!listening}
        >
          Stop ❌
        </button>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-2xl text-center">
        <p className="text-gray-800 mb-2">
          <strong>You said:</strong> {userText || "Nothing yet..."}
        </p>
        <p className="text-green-700">
          <strong>Bot replied:</strong> {botResponse || "Waiting for input..."}
        </p>
      </div>
    </div>
  );
};

export default VoiceBot;
