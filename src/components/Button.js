import styled from "styled-components";

const StyledButton = styled.button`
  background: ${(props) =>
    props.styleType === "primary"
      ? "linear-gradient(45deg, #fbbf15, #fab40f)"
      : "#4ba6ef"};
  box-shadow: ${(props) =>
    props.styleType === "primary"
      ? " 0 2px 6px 0 rgb(250 181 15 / 42%)"
      : "0 2px 6px 0 rgb(75 166 239 / 50%)"};

  transition: all 0.4s;
  padding: 0.47rem 0.75rem;
  font-size: 0.875rem;
  border-radius: 0.25rem;
  color: ${(props) => (props.styleType === "primary" ? "#000" : "#fff")};
  font-size: ${(props) => (props.fontSize === "default" ? "16px" : "20px")};
  &:hover {
    color: #fff;
    background: ${(props) =>
      props.styleType === "primary"
        ? "linear-gradient(45deg, #5db6ed, #1b71b9);"
        : "#408dcb"};
    box-shadow: 0 2px 6px 0 rgb(32 119 189 / 42%);
  }
`;

export const Button = ({
  className,
  onClick,
  children,
  type = "primary",
  fontSize = "default",
  buttonType = "button"
}) => {
  return (
    <StyledButton
      className={` ${className}`}
      onClick={onClick}
      styleType={type}
      type={buttonType}
      fontSize={fontSize}
    >
      {children}
    </StyledButton>
  );
};
