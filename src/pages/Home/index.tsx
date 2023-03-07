/* eslint-disable @typescript-eslint/no-floating-promises */
import React, { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import { useAuth } from '../../hooks/useAuth';
import { type ICard, useCards } from '../../hooks/useCards';
const Home: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const context = useAuth();
  const [cards, setCards] = useState<ICard[]>([]);
  const { fetchCards } = useCards();

  useEffect(() => {
    const cards = async (): Promise<void> => {
      const cards = await fetchCards();
      setCards(cards as ICard[]);
    };
    cards();
  }, []);
  return (
    <>
      <Header />
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
    </>
  );
};

export { Home };
