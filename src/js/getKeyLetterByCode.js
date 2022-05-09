import { keyLetters } from './keyLetters';

export function getKeyLetterByCode(code) {
	for (let i = 0; i < keyLetters.length; i++) {
		for (let j = 0; j < keyLetters[i].length; j++) {
			if (keyLetters[i][j].code === code) {
				return keyLetters[i][j];
			}
		}
	}

	return undefined;
};