/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react';
import {
  useWordDispatch,
  useWordState,
} from '../../context/word.context/Word.provider';
import useKeyEvent from '../../hooks/useKeyEvent';
import { randomValue, wordsXs } from '../../utils/helpers';
import HangMan from '../hangman';
import Modal from '../modal';
import { Button } from '../styles/Buttons';
import { GameStyles } from '../styles/Wrappers';
import UsedLetters from '../words/UsedLetters';
import Word from '../words/Word';
import WrongWords from '../words/WrongWords';

interface Props {}

const GameTwo: React.FC<Props> = () => {
  const { gameWord, wrongLetters, correctLetters } = useWordState();
  const key = useKeyEvent();

  const dispatch = useWordDispatch();

  const startGame = (): void => {
    let wordForTheGame = randomValue(wordsXs);
    dispatch({ type: 'SET_GAME_WORD', payload: wordForTheGame });
  };

  React.useEffect(() => {
    if (gameWord.includes(key) && !correctLetters.includes(key)) {
      dispatch({ type: 'SET_CORRECT_WORD', payload: key });
      console.log('is a match with word ' + gameWord + ' letter ' + key);
    } else if (!gameWord.includes(key) && !wrongLetters.includes(key)) {
      dispatch({ type: 'SET_WRONG_WORD', payload: key });
      console.log('no match');
    }
  }, [key]);

  return (
    <GameStyles>
      <HangMan />
      <UsedLetters />
      <WrongWords />
      <Word />
      <Button onClick={startGame}>Start Game</Button>
      <Modal />
    </GameStyles>
  );
};
export default GameTwo;