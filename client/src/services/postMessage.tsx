import axios from "axios";
import MessagesI from '../types/messageTypes';

const postMessages = async (message: string): Promise<MessagesI[]> => {
  const crrDate = new Date();

  const postObject = {
    username: localStorage.getItem("UserName"),
    date: crrDate.toDateString(),
    message: message
  };

  const APIresponse = await axios.post(`${import.meta.env.VITE_API_SERVER}/${import.meta.env.VITE_API_SERVER_POST}`, postObject);

  return APIresponse.data.whatUser; // Supondo que a API retorne diretamente a mensagem adicionada
};

export default postMessages;

