import Everything from './Everything';

class InputTxT extends Everything {
	constructor(parent) {
		super(parent, 'form', 'form');
		this.InputTxT = new Everything(this.element, 'textarea', 'input');
		this.InputTxT.element.readonly = true;
	}
}

const createInputTxT = () => new InputTxT(document.querySelector('.container'));

export default createInputTxT;