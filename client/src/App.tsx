import { useEffect, useState } from 'react';
import SendBox from './components/sendbox';
import Board from './components/board';
import Header from "./components/header";
import getMessages from './services/getMessages';
import MessagesI from './types/messageTypes';

function App() {
  const [messages, setMessages] = useState<MessagesI[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const fetchedMessages = await getMessages();
        setMessages(fetchedMessages);
        setLoading(false);
      } catch (err) {
        console.error('Erro ao carregar mensagens:', err);
        setError('Error loading messages');
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);


  const loadNewMessage = (newmessage: MessagesI) => {
    setMessages([...messages, newmessage])
  }


  return (
    <main className="w-full h-screen bg-slate-50 dark:bg-slate-800 sm:rounded-xl p-4 flex flex-col items-center justify-between gap-y-4 sm:w-[35rem] sm:max-h-[40rem]">
      <Header />
      <Board messages={messages} loading={loading} error={error} />
      <SendBox addNewMessage={loadNewMessage} />
    </main>
  );
}

export default App;
