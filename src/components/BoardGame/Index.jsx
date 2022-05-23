import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import services from "../../services/services";
import Card from "../Card/Index";
import { BoardGameWrapper, BoardImage, Title, Message } from "./style";

export default function BoardGame() {
  const [characters, setCharacters] = useState([]);
  const { token } = useAuth();

  useEffect(() => {
    resetCharacterCache();
    getCharacters(token);
  }, []);

  function resetCharacterCache() {
    setCharacters([]);
  }

  async function getCharacters(token) {
    const { data } = await services.findAllCharacters(token);
    await acessApi(data);
  }

  async function acessApi(data) {
    data.forEach(({ characters }) => getCharacter(characters.apiId));
  }

  async function getCharacter(apiId) {
    const { data } = await axios.get(
      `https://rickandmortyapi.com/api/character/${apiId}`
    );

    const character = { name: data.name, path: data.image };

    setCharacters((oldArray) => [...oldArray, character]);
  }

  return (
    <BoardGameWrapper>
      <Title>Personagens</Title>
      <BoardImage>
        {characters.length <= 0 ? (
          <Message>Você não possui nenhum personagem...</Message>
        ) : (
          characters.map((characters) => (
            <>
              <Card pathImage={characters.path} name={characters.name}></Card>
            </>
          ))
        )}
      </BoardImage>
    </BoardGameWrapper>
  );
}
