import { FC, useState } from "react";
import { motion } from "framer-motion";
import "./example.css";

type CardContent = {
  id: number;
  header: string;
  paragraph: string;
  background: string;
};
const cardsContent: CardContent[] = [
  { id: 1, header: "Header number 1", paragraph: "Some long text that is displayed in a card", background: "#116D6E" },
  { id: 2, header: "Header number 2", paragraph: "Some long text that is displayed in a card", background: "#321E1E" },
  { id: 3, header: "Header number 3", paragraph: "Some long text that is displayed in a card", background: "#4E3636" },
  { id: 4, header: "Header number 4", paragraph: "Some long text that is displayed in a card", background: "#CD1818" },
];

export const AnimationExample: FC = () => {
  const [rotate, setRotate] = useState(0);
  const [selectedCard, setSelectedCard] = useState(0);
  const rotateBoxes = (id: number) => {
    setSelectedCard(id);
    setRotate(20);
    setTimeout(() => {
      setRotate(0);
      setSelectedCard(0);
    }, 1000);
  };
  return (
    <div className="container">
      {cardsContent.map(({ id, header, paragraph, background }) => (
        <motion.div
          animate={{
            rotate: selectedCard === id ? rotate + 30 : -rotate,
            backgroundColor: selectedCard === id ? background : "blue",
          }}
          whileHover={{ scale: 1.1 }}
          key={id}
          className="element"
          onClick={() => rotateBoxes(id)}
        >
          <h3>{header}</h3>
          <p>{paragraph}</p>
        </motion.div>
      ))}
    </div>
  );
};
