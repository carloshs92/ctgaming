import { useState } from "react";
import Modal from "../components/Modal";
import CardGame from "../components/CardGame";
import Layout from "../components/Layout";

export const getStaticProps = async () => {
  const res = await fetch("https://www.ct-interactive.dev/samples/");
  const jsonResult = await res.json();
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return { props: { games_list: jsonResult.games_list } };
};

const IndexPage = ({ games_list }) => {
  const [selectedGame, setSelectedGame] = useState();
  const onClickGame = (game) => () => setSelectedGame(game);
  const closeIframe = () => setSelectedGame(null);
  return (
    <Layout>
      {games_list?.map((game) => (
        <CardGame
          key={game?.name?.toLowerCase()?.replace(/\s/g, "-")}
          game={game}
          onClickGame={onClickGame(game)}
          modal={
            selectedGame?.name === game.name && (
              <Modal game={game} closeIframe={closeIframe} />
            )
          }
        />
      ))}
    </Layout>
  );
};

export default IndexPage;
