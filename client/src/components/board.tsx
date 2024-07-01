import MessagesI from '../types/messageTypes';
import { useEffect, useRef } from 'react';
interface BoardProps {
  messages: MessagesI[],
  loading: boolean,
  error: string | null
}
function Board({ messages, loading, error }: BoardProps) {
  const messageEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messageEndRef.current?.scrollIntoView({ block: "end", behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages])

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="w-full h-4/5 p-4 overflow-auto flex flex-col gap-8">
      {messages.map((message) => (
        <div key={message._id} className='w-full sm:w-3/4 flex flex-col gap-y-3 rounded-xl border-2 border-slate-200 dark:border-slate-700 p-4'>
          <div className='flex justify-between dark:text-white'>
            <h3 className='truncate w-28'>{message.username}</h3>
            <small className="">{message.date}</small>
          </div>
          <p className='text-gray-600 dark:text-slate-400 text-sm'>{message.message}</p>
        </div>
      ))}
      <div ref={messageEndRef}></div>
    </div>
  );
}

export default Board;

