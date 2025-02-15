import { motion } from 'framer-motion';

const Card = ({ title, description, image, button, className }) => {
  return (
    <motion.div
      className="card"
      initial={{ opacity: 1, x: -300 }} // Começa com opacidade 0 e deslocado para a esquerda (-200px)
      whileInView={{ opacity: 1, x: 1 }} // Vai para opacidade 1 e posição original (x: 0)
      transition={{ duration: 1 }} // A animação dura 1 segundo
      viewport={{ once: false }} // A animação ocorre sempre que o item entra na tela
    >
      <h3>{title}</h3>
      <p>{description}</p>
      {image && <img className={`card-image ${className}`} src={image} alt={title} />}
      <div className="card-button">
        <button>{button}</button>
      </div>
    </motion.div>
  );
};

export default Card;
