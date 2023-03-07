/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import axios from 'axios';

export interface UseCards {
  fetchCards: () => Promise<ICard[] | null>;
  createICard: (data: ICard) => Promise<boolean | null>;
  updateICard: (data: ICard, itemId: number) => Promise<unknown>;
  deleteICard: (id: number) => Promise<boolean>;
}
export interface ICard {
  id?: string;
  titulo: string;
  conteudo: string;
  lista: string;
}
const useCards = (): UseCards => {
  const authToken = localStorage.getItem('token');
  console.log(authToken);
  const fetchCards = async (): Promise<ICard[] | null> => {
    const instance = axios.create({
      baseURL: 'http://localhost:8080',
      headers: {
        'Content-Type': 'application/json',
        authorization: authToken
      }
    });
    try {
      const cardList = await instance.get(`/cards`);
      return cardList.data as ICard[];
    } catch (error) {
      return null;
    }
  };
  const createICard = async (data: ICard): Promise<boolean | null> => {
    const instance = axios.create({
      baseURL: 'http://localhost:8080',
      headers: {
        'Content-Type': 'application/json',
        authorization: authToken
      }
    });
    try {
      const newItem = await instance.post(`/cards`, data);
      if (newItem) {
        return true;
      }
      return false;
    } catch (error) {
      return null;
    }
  };

  const updateICard = async (data: ICard): Promise<ICard> => {
    const instance = axios.create({
      baseURL: 'http://localhost:8080',
      headers: {
        'Content-Type': 'application/json',
        authorization: authToken
      }
    });
    const newItem = await instance.put(`/cards/${data.id as string}`, data);
    return newItem.data;
  };
  const deleteICard = async (id: number): Promise<boolean> => {
    const instance = axios.create({
      baseURL: 'http://localhost:8080',
      headers: {
        'Content-Type': 'application/json',
        authorization: authToken
      }
    });
    await instance.delete(`/cards/${id}`);
    return true;
  };

  return { fetchCards, createICard, updateICard, deleteICard };
};

export { useCards };
