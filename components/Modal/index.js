import style from "./index.module.css";

const Modal = ({ game, closeIframe }) => {
  return (
    <div className={`${style.modal} ${style.modal_animation}`}>
      <div className={style.modal_body}>
        <img
          className={`${style.option_image_modal}`}
          src={game.icon}
          alt={game.name}
        />
        <button onClick={closeIframe} className={style.close_modal}>
          Close modal
        </button>
      </div>
    </div>
  );
};

export default Modal;
