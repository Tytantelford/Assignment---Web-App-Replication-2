import { useState, useEffect } from "react";
import Card from "./card";
import "./assets/styles/styles.scss";

function Button({ onClick }) {
  console.log("Button is working");
  return <button onClick={onClick}>Next profile</button>;
}

const Profiles = [
  {
    id: 1,
    image: "./fortnite.png",
    description:
      "User 1 is a friendly and welcoming individual who enjoys making others feel comfortable. Their personality is warm and inviting, making them easy to talk to.",
    info: "User 1 is a warm and approachable person who naturally makes others feel at ease. They have a friendly demeanor and enjoy creating a welcoming environment, whether in conversations or social settings. People are drawn to their kindness and genuine interest in others, making them a great listener and a comforting presence. They value meaningful connections and always strive to uplift those around them. Their positivity and openness make them someone others trust and enjoy being around.",
  },
  {
    id: 2,
    image: "./lufthansa2.jpg",
    description:
      "User 2 is energetic and outgoing, always ready to spark a conversation. They bring a lively presence to any situation and enjoy keeping things fun and engaging.",
    info: "User 2 is full of energy and enthusiasm, always bringing excitement to any situation. They thrive in social settings, easily sparking conversations and keeping the mood light and fun. Their outgoing personality makes them the life of the party, and they enjoy making people laugh and feel included. With a natural ability to engage others, they create a lively and dynamic atmosphere wherever they go.",
  },
  {
    id: 3,
    image: "stievtiek.jpg",
    description:
      "User 3 is calm and observant, preferring to listen before speaking. They have a thoughtful nature and offer insightful perspectives when they do contribute.",
    info: "User 3 is a quiet observer who values depth over small talk, taking time to understand people and situations before speaking. They have a calm and steady presence, making them a source of reassurance for those around them. While they may not be the loudest in the room, their words carry weight, offering thoughtful insights and meaningful contributions. They prefer deep conversations over surface-level chatter and appreciate authenticity in others. With their reflective nature and keen awareness, they bring a sense of wisdom and perspective that people admire and respect.",
  },
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProfile = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Profiles.length);
  };

  const selectedProfile = Profiles[currentIndex];

  return (
    <div>
      <Card selectedProfile={selectedProfile} />
      <Button onClick={nextProfile} />
    </div>
  );
}

export default App;
