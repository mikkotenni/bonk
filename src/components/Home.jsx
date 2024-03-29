import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
  margin-top: 1rem;
`;
const rocketAnimation = keyframes`
  0%, 100% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(-5deg);
  }
  75% {
    transform: rotate(5deg);
  }
`;
const Rocket = styled.input`
  font-size: 6rem;
  cursor: grab;
  position: absolute;
  top: 1.75rem;
  left: 11.5rem;
  background-color: transparent;
  border: none;
  animation: ${rocketAnimation} 3s ease-in-out infinite;
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

/**
 * @description Render a draggable rocket and its drop zone.
 * @param {string} describedById is `id` of instructional text.
 * @returns {JSX.Element}
 */
const RocketAndDropZone = (describedById) => {
  const navigate = useNavigate();
  const [isOver, setIsOver] = useState(false);

  // Handlers.
  const handleDragStart = (e) => {
    e.dataTransfer.setData("text/plain", "🚀");
  };
  const handleDrop = (e) => {
    navigate("/gadgets");
  };
  const handleDragOver = (e) => {
    // Prevent default action to allow drop.
    e.preventDefault();
    setIsOver(true);
  };
  const handleDragLeave = (e) => {
    setIsOver(false);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      navigate("/gadgets");
    }
  };

  /**
   * Touch drag and drop handlers. To keep it easy, highlight the drop area right
   * from the start and do the navigation no matter where the touch ends.
   */
  const handleTouchMove = (e) => {
    setIsOver(true);
  };
  const handleTouchEnd = (e) => {
    navigate("/gadgets");
  };

  return (
    <div>
      <Rocket
        type="button"
        draggable
        onDragStart={handleDragStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onKeyDown={handleKeyDown}
        aria-label="Rocket"
        aria-describedby={describedById}
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

/**
 * @returns {JSX.Element}
 */
export default function Home() {
  return (
    <Container>
      <RocketAndDropZone describedById="instructions" />
      <p id="instructions">
        Hi y'all! Drag rocket apparatus to its drop zone or focus on it and
        press enter. This will take you to the gadgets page. All you boomers out
        there (me included) don't you worry, there's also more conventional main
        navigation option available.
      </p>
    </Container>
  );
}
