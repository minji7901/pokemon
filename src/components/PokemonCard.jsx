import styled from "styled-components";
import { Link } from "react-router-dom";
import { StyledButton } from "../styles/StyledButton";
import { useDispatch } from "react-redux";
import { pokemonActions } from "../redux/pokemonSlice";

const StyledLink = styled(Link)`
  position: relative;
  padding: 20px;
  text-align: center;
  border-radius: 15px;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: 0.3s;
  strong {
    display: block;
    font-size: 1.625rem;
  }
  p {
    margin-top: 7px;
    padding-bottom: 40px;
    color: #555;
    font-size: 1.125rem;
    word-break: keep-all;
  }
  img {
    transition: 0.3s;
  }
  &:hover {
    transform: translateY(-20px);
    box-shadow: 0 5px 15px 5px rgb(0 0 0 / 30%);
    img {
      transform: scale(1.3);
    }
  }
`;
export default function PokemonCard({ data, added }) {
  const { img_url, korean_name, description, id } = data;
  const dispatch = useDispatch();
  const handleAddClick = (e) => {
    e.preventDefault();
    dispatch(pokemonActions.addItem());
  };
  const handleRemoveClick = (e) => {
    e.preventDefault();
    dispatch(pokemonActions.removeItem());
  };

  return (
    <StyledLink to={`/pokemon/${id}`}>
      <img src={img_url} alt={korean_name} />
      <strong>{korean_name}</strong>
      <p>{description}</p>
      <StyledButton
        type="button"
        color={added ? "#F06292" : "#8BC34A"}
        onClick={(e) =>
          added ? handleAddClick(e, data) : handleRemoveClick(e, data)
        }
      >
        {added ? "Add" : "Del"}
      </StyledButton>
    </StyledLink>
  );
}
