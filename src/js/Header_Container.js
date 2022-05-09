import Everything from './Everything';

class HeaderContainer extends Everything {
	constructor(parent) {
		super(parent, 'div', 'container');
		this.titlle = new Everything(this.element, 'h1', 'title');
		this.titlle.element.innerHTML = 'Keyboard';
		this.changeLang = new Everything(this.element, 'p', 'description');
		this.changeLang.element.innerHTML = 'To change the language press the "ALT + CTRL" combination';
	}
}

const createHeaderContainer = () => new HeaderContainer(document.body);

export default createHeaderContainer;