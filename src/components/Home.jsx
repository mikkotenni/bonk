import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 1rem;
`;
const Rocket = styled.input`
  font-size: 6rem;
  cursor: grab;
  position: absolute;
  top: 1.75rem;
  left: 11.5rem;
  background-color: transparent;
  border: none;
`;
const DropZone = styled.div`
  border-width: 0.5rem;
  border-style: dashed;
  border-color: ${({ $isOver }) => ($isOver ? "#4e91fd" : "#e7e5e4")};
  transition: border-color 0.25s;
  height: 10rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  font-weight: bold;
  color: #e7e5e4;
`;

const RocketAndDropZone = () => {
  const navigate = useNavigate();
  const [isOver, setIsOver] = useState(false);

  // Handlers.
  const handleDragStart = (e) => {
    e.dataTransfer.setData("text/plain", "🚀");
  };
  const handleDrop = (e) => {
    e.preventDefault();
    setIsOver(false);
    navigate("/gadgets");
  };
  const handleDragOver = (e) => {
    e.preventDefault();
    setIsOver(true);
  };
  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsOver(false);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      navigate("/gadgets");
    }
  };

  return (
    <div>
      <Rocket
        type="button"
        draggable
        onDragStart={handleDragStart}
        onKeyDown={handleKeyDown}
        aria-label="Rocket. Focus on rocket and press enter to go to gadgets page."
        value="🚀"
      />
      <DropZone
        $isOver={isOver}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        Rocket drop zone
      </DropZone>
    </div>
  );
};

export default function Home() {
  return (
    <Container>
      <RocketAndDropZone />
      <p>
        Hi y'all! Drag rocket apparatus to its drop zone or just focus on it and
        press enter. This will take you to the gadgets page. All you boomers out
        there don't you worry, there's also more conventional main navigation
        option available.
      </p>
    </Container>
  );
}
