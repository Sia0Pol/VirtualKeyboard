import { Everything } from './Everything';

class HeaderContainer extends Everything {
	everythingTitle = null;
	everythingChangeLang = null;

	constructor(parent) {
		super(parent, 'div', 'container');
		this.everythingTitle = new Everything(this.node, 'h1', 'title');
		this.everythingTitle.node.innerHTML = 'Keyboard';
		this.everythingChangeLang = new Everything(this.node, 'p', 'description');
		this.everythingChangeLang.node.innerHTML = 'To change the language press the "ALT + SHIFT" combination';
	}
}

export const createHeaderContainer = (selector) => new HeaderContainer(document.querySelector(selector));
