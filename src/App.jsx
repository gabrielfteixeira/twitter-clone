import { Sidebar } from "./components/Sidebar";
import { Tweet } from "./components/Tweet";
import { TwitterForm } from "./components/TwitterForm";

import { v4 } from "uuid";
import { getAvatar, getRandomImage } from "./utils/generateImage";
import { useEffect, useState } from "react";

function App() {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      addNewRandomTweets();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const addNewRandomTweets = () => {
    const randomTweets = [
      "Acabei de entrar no clone do Twitter! Estou animado para me conectar com todos aqui. 👋 #NovoPorAqui",
      "Mais um dia, mais uma linha de código. Continuem avançando, colegas desenvolvedores! 💻 #VidaDeDev",
      "Quem mais vai ficar acordado até tarde para assistir à chuva de meteoros hoje à noite? 🌠 #CeuEstrelado",
      "Lembrete: seja gentil consigo mesmo e com os outros. Um pouco de compaixão faz toda a diferença. ❤️ #Gentileza",
      "Dica técnica do dia: sempre faça backup dos seus dados! Você vai agradecer a si mesmo mais tarde. 💾 #Backup",
    ];
    const randomTweet =
      randomTweets[Math.floor(Math.random() * randomTweets.length)];

    addNewTweet(randomTweet, Math.random() > 0.7);
  };

  const addNewTweet = (content, includeImage = false) => {
    const newTweet = {
      id: v4(),
      name: "User",
      username: `user${Math.floor(Math.random() * 1000)}`,
      avatar: getAvatar(
        `user${Math.floor(Math.random() * 1000)}teste@email.com`,
      ),
      content,
      time: new Date().toLocaleString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      image: includeImage ? getRandomImage() : null,
      likes: 0,
      retweets: 0,
      comments: 0,
    };

    setTweets((prevTweets) => [newTweet, ...prevTweets]);
  };

  return (
    <div className="flex mx-auto max-w-7xl ">
      <Sidebar />
      <main className="flex-grow border-l border-r border-gray-700 max-w-xl">
        <header className=" sticky top-0 z-10 bg-twitter-background bg-opacity-80 backdrop-blur-sm">
          <h2 className="px-4 py-3 text-xl font-bold">for you</h2>
        </header>
        <TwitterForm
          onTweet={(content) => addNewTweet(content, Math.random() > 0.6)}
        />
        <div>
          {tweets.map((tweet) => (
            <Tweet key={tweet.id} tweet={tweet} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
