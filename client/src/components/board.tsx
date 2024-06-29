import React, { useEffect, useState } from 'react';
import getMessages from '../services/getMessages';

interface MessagesI {
  _id: string;
  name: string;
  date: string;
  message: string;
}

function Board() {
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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (

    <div className="w-full h-[35rem] p-4 overflow-auto flex flex-col gap-8">
      {messages.map((message) => (
        <div key={message._id} className='w-3/4 flex flex-col gap-y-3 rounded-xl border-2 border-slate-100 p-4'>
          <div className='flex justify-between'>
            <h3 className='truncate w-28'>{message.emoji}{message.name}</h3>
            <small className="">{message.date}</small>
          </div>
          <p className='text-gray-600 text-sm'>{message.message}</p>
        </div>
      ))}
    </div>
  );
}

export default Board;

