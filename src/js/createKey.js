import { Everything } from './Everything';
import { keyLetters } from './keyLetters';
import { getKeyLetterByCode } from './getKeyLetterByCode';


class Key extends Everything {
	everythingBtnArr = [];
	language = 'ru';
	registerCaps = false;

	constructor(parent) {
		super(parent, 'div', 'keyboard');
		
		this.everythingBtnArr = [];
		keyLetters.forEach((data) => {
			const everythingRow = new Everything(this.node, 'div', 'keyboard__row');

			for (let i = 0; i < data.length; i++) {
				const everythingBtn = this.createEverythingBtn(everythingRow.node, data[i]);
				this.everythingBtnArr.push(everythingBtn);
			}
		});

		this.initEventKeyboardListeners();
	}

	createEverythingBtn(parent, rowKeyLetters) {
		const everythingBtn = new Everything(parent, 'button', rowKeyLetters.class);

		if (this.language === 'ru') {
			everythingBtn.node.textContent = rowKeyLetters.key.ru;
		} else if (this.language === 'en') {
			everythingBtn.node.textContent = rowKeyLetters.key.en;
		}

		everythingBtn.node.setAttribute('data-code', rowKeyLetters.code);
		this.initEverythingBtnClickEventListener(everythingBtn);

		return everythingBtn;
	}
	
	initEverythingBtnClickEventListener(everythingBtn) {
		everythingBtn.node.addEventListener('click', (event) => {
			// console.log(event);
		});
	}

	initEventKeyboardListeners() {
		window.addEventListener('keydown', (event) => {
			// console.log(event);

			if (event.shiftKey === true && event.altKey === true) {
				this.changeLanguage();
			}
			
		});
	}

	changeLanguage() {
		this.language = this.language === 'ru' ? 'en' : 'ru';
		
		for (const everythingBtn of this.everythingBtnArr) {
			const dataCode = everythingBtn.node.getAttribute('data-code');
			const keyLetterObj = getKeyLetterByCode(dataCode);

			if (this.language === 'ru' && this.registerCaps === false) {
				everythingBtn.node.textContent = keyLetterObj.key.ru;
			} else if (this.language === 'en' && this.registerCaps === false) {
				everythingBtn.node.textContent = keyLetterObj.key.en;
			} else if (this.language === 'ru' && this.registerCaps === true) {
				everythingBtn.node.textContent = keyLetterObj.shift.ru;
			} else if (this.language === 'en' && this.registerCaps === true) {
				everythingBtn.node.textContent = keyLetterObj.shift.en;
			}
		}

	}




}

export const createKey = (selector) => new Key(document.querySelector(selector));

