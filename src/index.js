import keyLetters from './js/keyLetters';
import createKey from './js/Key';
import createInputTxT from './js/Input';
import createHeaderContainer from './js/Header_Container';

createHeaderContainer();
createInputTxT();
createKey();

const input = document.querySelector('.input');
const rows = document.querySelectorAll('.row');
const caps = document.querySelector('.CapsLock');

function getDataRepo() {
	if (dataRepo.getItem('lang')) {

		const dataLang = dataRepo.getItem('lang');

		if (dataLang === 'en') {
			for (i = 0; i < 5; i += 1) {
				for (j = 0; j < rows[i].children.length; j += 1) {
					if (!caps.classList.contains('key_caps') && rows[i].children[j].textContent.length === 1) {
						rows[i].children[j].innerHTML = keyLetters[i][j].key.en;
					}
					else if (rows[i].children[j].textContent.length === 1) {
						rows[i].children[j].innerHTML = keyData[i][j].key.en.toUpperCase();
					}
				}
			}
			document.querySelector('.key_lang').textContent = 'en';
		}

		else {
			for (let i = 0; i < 5; i += 1) {
				for (let j = 0; j < rows[i].children.length; j += 1) {
					if (!caps.classList.contains('key_caps') && rows[i].children[j].textContent.length === 1) {
						rows[i].children[j].innerHTML = keyData[i][j].key.ru;
					} else if (rows[i].children[j].textContent.length === 1) {
						rows[i].children[j].innerHTML = keyData[i][j].key.ru.toUpperCase();
					}
				}
			}
			document.querySelector('.key_lang').textContent = '🇷🇺';
		}
	}
	if (localStorage.getItem('checkCaps')) {
		const cap = localStorage.getItem('checkCaps');
		if (cap === 'true') {
			caps.classList.add('key_caps');
			for (let i = 0; i < 5; i += 1) {
				for (let j = 0; j < rows[i].children.length; j += 1) {
					if (rows[i].children[j].textContent.length === 1) {
						rows[i].children[j].innerHTML = rows[i].children[j].innerHTML.toUpperCase();
					}
				}
			}
		}
	}
}
window.addEventListener('load', getLocalStorage);