/**
 * @typedef AttrObjType
 * @type {Object}
 * @property {string} name
 * @property {string} value
 */

export class Everything {
	node = null;

	/**
	 * @constructor Создаёт блок и вставляет в parentNode
	 * @param {HTMLElement} parentNode - родительский узел
	 * @param {string} tag - название тега
	 * @param {string | string[]} className - массив классов или класс
	 * @param {AttrObjType[]} attributes - массив атрибутов
	 */
	constructor(parentNode, tag, className, attributes) {
		this.node = document.createElement(tag);

		if (Array.isArray(className)) {
			this.node.classList.add(...className);
		} else {
			this.node.classList.add(className);
		}

		if (Array.isArray(attributes)) {
			for (const attr of attributes) {
				this.node.setAttribute(attr.name, attr.value);
			}
		}

		parentNode.append(this.node);
	}
	
	destroy() {
		this.node.remove();
	}
}