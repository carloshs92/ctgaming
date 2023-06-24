import style from "./index.module.css";

const Layout = ({ children }) => {
  return (
    <div className={style.wrapper}>
      <header className={style.header} />
      <main className={style.main}>{children}</main>
      <footer className={style.footer}>&copy;2023 Palms Bet</footer>
    </div>
  );
};

export default Layout;
