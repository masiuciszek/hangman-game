import styled from 'styled-components';
import { handleFlex } from '../styles/utils/helpers';
import bg from '../../bg.png';
export const WordContainer = styled.div`
  padding: 2rem 1rem;
  width: 100%;
  margin: 12rem auto;
  text-align: center;
`;

export const WordsStyles = styled.ul`
  padding: 2rem;
  ${handleFlex('row', 'space-evenly', 'center')};
  width: 80%;
  margin: 1rem auto;
  li {
    padding: 1.5rem;
    border: 2px solid ${(props) => props.theme.colors.text};
    background-image: url(${bg});
  }
`;

export const WrongWordContainer = styled(WordContainer)`
  position: absolute;
  top: 0;
  right: 0;
  width: 20vmax;
  margin: 0 auto;
  border: 0;
  h4 {
    font-size: 3rem;
  }
`;

export const WordLetter = styled.span`
  display: inline-block;
  position: relative;
  font-size: 1.6rem;
  color: ${(props) => props.theme.colors.text};
  padding: 0.5rem;
  margin: 0.5rem 1.5rem;
  line-height: 3em;
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 0.2rem;
    height: 0.2rem;
    background: ${(props) => props.theme.colors.primary};
  }
`;

export const UsedLettersContainer = styled(WordContainer)`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30vmax;
  margin: 0 auto;
  border: 0;
  h4 {
    font-size: 3rem;
  }
`;
