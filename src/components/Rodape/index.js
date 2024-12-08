import "./Rodape.css";

const Rodape = () => {
  return (
    <footer className="rodape-site">
      <div className="redes-sociais">
        <img src="/imagens/fb.png" alt="Facebook" />
        <img src="/imagens/tw.png" alt="Twitter" />
        <img src="/imagens/ig.png" alt="Instagram" />
      </div>
      <img src="/imagens/logo.png" alt="Logo" />
      <span>Desenvolvido por Alura.</span>
    </footer>
  );
};

export default Rodape;
