import Everything from './Everything';
import keyLetters from './keyLetters';


class Key extends Everything {
	constructor(parent) {
		super(parent, 'div', 'keyboard');
		keyLetters.forEach((data) => {
			this.row = new Everything(this.element, 'div', 'row');
			for (i = 0; i < data.length; i += 1) {
				this.btn = new Everything(this.row.element, 'button', `${data[i].class}`);
				this.btn.element.textContent = `${data[i].key.en}`;
			}
		});
	}
}

const createKey = () => new Key(document.querySelector('.container'));

export default createKey;