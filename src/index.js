import { keyLetters } from './js/keyLetters';
import { createKey } from './js/createKey';
import { createTextarea } from './js/createTextarea';
import { createHeaderContainer } from './js/createHeaderContainer';

import './style.css';
createHeaderContainer('body');
createTextarea('.container');
createKey('.container');

const inputNode = document.querySelector('.input');
const rowsNode = document.querySelectorAll('.row');
const capsNode = document.querySelector('.CapsLock');


