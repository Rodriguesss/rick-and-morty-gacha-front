import Modal from "react-modal";
import useAuth from "../../hooks/useAuth";
import Card from "../Card/Index";
import { BoardCharacter, Box, Button, Text } from "./style";

const modalStyle = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "15%",
    overflow: "hidden",
  },
  overlay: { zIndex: 1000 },
};

const header = {
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "30px",
};

Modal.setAppElement("#root");

export default function ModalCharacter({ name, pathImage }) {
  const { modalIsOpen, setModalIsOpen } = useAuth();

  function closeModal() {
    refreshPage();
    setModalIsOpen(false);
  }

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={modalStyle}
      contentLabel="Modal"
    >
      <Box style={header}>
        <Text></Text>
        <Text>Parabens!</Text>
        <Button onClick={closeModal}>X</Button>
      </Box>

      <Text>Você invocou um personagem</Text>

      <BoardCharacter>
        <Card name={name} pathImage={pathImage} />
      </BoardCharacter>
    </Modal>
  );
}
