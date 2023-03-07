/* eslint-disable @typescript-eslint/no-floating-promises */
import React, { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import { useAuth } from '../../hooks/useAuth';
import { type ICard, useCards } from '../../hooks/useCards';
const Home: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const context = useAuth();
  const [cards, setCards] = useState<ICard[]>([]);
  const [token, setToken] = useState('');
  const { fetchCards } = useCards();

  useEffect(() => {
    const cards = async (): Promise<void> => {
      const token = localStorage.getItem('token');
      if (token != null) {
        setToken(token);

        const cards = await fetchCards();
        setCards(cards as ICard[]);
      }
      console.log(cards, token);
      console.log(context);
    };
    cards();
  }, []);
  return (
    <>
      <Header />
      {token.length > 0 ? (
        <div className="grid grid-cols-4">
          <div>
            <h1 className="text-3xl">Novo</h1>
          </div>
          <div>
            <h1 className="text-3xl">To Do</h1>
            <ul>
              {cards.map((card) => {
                return (
                  <li key={card.id}>
                    <h3>{card.titulo}</h3>
                    <p>{card.conteudo}</p>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <h1 className="text-3xl">Doing</h1>
          </div>
          <div>
            <h1 className="text-3xl">Done</h1>
          </div>
        </div>
      ) : (
        <h1>Faça login para poder acessar o quadro</h1>
      )}
    </>
  );
};

export { Home };
