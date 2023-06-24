import style from "./index.module.css";

const CardGame = ({ game, onClickGame, modal }) => {
  return (
    <div className={style.item}>
      {modal}
      <button className={style.option} onClick={onClickGame}>
        <img className={style.option_image} src={game.icon} alt={game.name} />
      </button>
    </div>
  );
};

export default CardGame;
