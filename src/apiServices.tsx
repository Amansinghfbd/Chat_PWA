import axios from 'axios';

const apiUrl = 'https://qa.corider.in/assignment/chat';

export const fetchChats = (page: number) => {
  return axios.get(`${apiUrl}?page=${page}`);
};
