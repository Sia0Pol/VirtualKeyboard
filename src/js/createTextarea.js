import { Everything } from './Everything';

class Textarea extends Everything {
	everythingTextarea = null;

	constructor(parent) {
		super(parent, 'form', 'form');
		this.everythingTextarea = new Everything(this.node, 'textarea', 'textarea', [{name: 'readonly', value: 'readonly'}]);
	}
}

export const createTextarea = (selector) => new Textarea(document.querySelector(selector));
