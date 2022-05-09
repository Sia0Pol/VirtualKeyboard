export const keyLetters = [
	[ // первая строка
		{
			key: { ru: 'ё', en: '`' }, shift: { ru: 'Ё', en: '~' }, code: 'Backquote', class: ['key', 'key_extra', 'key_tilda'],
		},
		{
			key: { ru: '1', en: '1' }, shift: { ru: '!', en: '!' }, code: 'Digit1', class: ['key', 'key_main', 'key_digit1'],
		},
		{
			key: { ru: '2', en: '2' }, shift: { ru: '"', en: '@' }, code: 'Digit2', class:  ['key', 'key_main', 'key_digit2'],
		},
		{
			key: { ru: '3', en: '3' }, shift: { ru: '№', en: '#' }, code: 'Digit3', class:  ['key', 'key_main', 'key_digit3'],
		},
		{
			key: { ru: '4', en: '4' }, shift: { ru: ';', en: '$' }, code: 'Digit4', class:  ['key', 'key_main', 'key_digit4'],
		},
		{
			key: { ru: '5', en: '5' }, shift: { ru: '%', en: '%' }, code: 'Digit5', class:  ['key', 'key_main', 'key_digit5'],
		},
		{
			key: { ru: '6', en: '6' }, shift: { ru: ':', en: '^' }, code: 'Digit6', class:  ['key', 'key_main', 'key_digit6'],
		},
		{
			key: { ru: '7', en: '7' }, shift: { ru: '?', en: '&' }, code: 'Digit7', class:  ['key', 'key_main', 'key_digit7'],
		},
		{
			key: { ru: '8', en: '8' }, shift: { ru: '*', en: '*' }, code: 'Digit8', class:  ['key', 'key_main', 'key_digit8'],
		},
		{
			key: { ru: '9', en: '9' }, shift: { ru: '(', en: '(' }, code: 'Digit9', class:  ['key', 'key_main', 'key_digit9'],
		},
		{
			key: { ru: '0', en: '0' }, shift: { ru: ')', en: ')' }, code: 'Digit0', class:  ['key', 'key_main', 'key_digit10'],
		},
		{
			key: { ru: '-', en: '-' }, shift: { ru: '_', en: '_' }, code: 'Minus', class:  ['key', 'key_main', 'key_digit11'],
		},
		{
			key: { ru: '=', en: '=' }, shift: { ru: '+', en: '+' }, code: 'Equal', class:  ['key', 'key_main', 'key_digit12'],
		},
		{
			key: { ru: 'Backspace', en: 'Backspace' }, code: 'Backspace', noType: true, class: ['key', 'key_extra', 'key_backspace']
		},
	],
	[ // вторая строка
		{
			key: { ru: 'Tab', en: 'Tab' }, code: 'Tab', class: ['key', 'key_extra', 'key_tab'], 
		},
		{
			key: { ru: 'й', en: 'q' }, shift: { ru: 'Й', en: 'Q' }, code: 'KeyQ', class: ['key', 'key_main', 'key_q'],
		},
		{
			key: { ru: 'ц', en: 'w' }, shift: { ru: 'Ц', en: 'W' }, code: 'KeyW', class: ['key', 'key_main', 'key_w'],
		},
		{
			key: { ru: 'у', en: 'e' }, shift: { ru: 'У', en: 'E' }, code: 'KeyE', class: ['key', 'key_main', 'key_e'],
		},
		{
			key: { ru: 'к', en: 'r' }, shift: { ru: 'К', en: 'R' }, code: 'KeyR', class: ['key', 'key_main', 'key_r'],
		},
		{
			key: { ru: 'е', en: 't' }, shift: { ru: 'Е', en: 'T' }, code: 'KeyT', class: ['key', 'key_main', 'key_t'],
		},
		{
			key: { ru: 'н', en: 'y' }, shift: { ru: 'Н', en: 'Y' }, code: 'KeyY', class: ['key', 'key_main', 'key_y'],
		},
		{
			key: { ru: 'г', en: 'u' }, shift: { ru: 'Г', en: 'U' }, code: 'KeyU', class: ['key', 'key_main', 'key_u'],
		},
		{
			key: { ru: 'ш', en: 'i' }, shift: { ru: 'Ш', en: 'I' }, code: 'KeyI', class: ['key', 'key_main', 'key_i'],
		},
		{
			key: { ru: 'щ', en: 'o' }, shift: { ru: 'Щ', en: 'O' }, code: 'KeyO', class: ['key', 'key_main', 'key_o'],
		},
		{
			key: { ru: 'з', en: 'p' }, shift: { ru: 'З', en: 'P' }, code: 'KeyP', class: ['key', 'key_main', 'key_p'],
		},
		{
			key: { ru: 'х', en: '[' }, shift: { ru: 'Х', en: '{' }, code: 'LeftBrace', class: ['key', 'key_main', 'key_left-brace'],
		},
		{
			key: { ru: 'ъ', en: ']' }, shift: { ru: 'Ъ', en: '}' }, code: 'RightBrace', class: ['key', 'key_main', 'key_right-brace'],
		},
		{
			key: { ru: '\\', en: '\\' }, shift: { ru: '|', en: '|' }, code: 'Backslash', class: ['key', 'key_main', 'key_backlash'],
		},
		{
			key: { ru: 'Del', en: 'Del' }, code: 'Delete', class: ['key', 'key_extra', 'key_delete'],
		},
	],
	[ // третья строка
		{
			key: { ru: 'Caps Lock', en: 'Caps Lock' }, code: 'CapsLock', class: ['key', 'key_extra', 'key_capslock'], 
		},
		{
			key: { ru: 'ф', en: 'a' }, shift: { ru: 'Ф', en: 'A' }, code: 'KeyA', class: ['key', 'key_main', 'key_a'],
		},
		{
			key: { ru: 'ы', en: 's' }, shift: { ru: 'Ы', en: 'S' }, code: 'KeyS', class: ['key', 'key_main', 'key_s'],
		},
		{
			key: { ru: 'в', en: 'd' }, shift: { ru: 'В', en: 'D' }, code: 'KeyD', class: ['key', 'key_main', 'key_d'],
		},
		{
			key: { ru: 'а', en: 'f' }, shift: { ru: 'А', en: 'F' }, code: 'KeyF', class: ['key', 'key_main', 'key_f'],
		},
		{
			key: { ru: 'п', en: 'g' }, shift: { ru: 'П', en: 'G' }, code: 'KeyG', class: ['key', 'key_main', 'key_g'],
		},
		{
			key: { ru: 'р', en: 'h' }, shift: { ru: 'Р', en: 'H' }, code: 'KeyH', class: ['key', 'key_main', 'key_h'],
		},
		{
			key: { ru: 'о', en: 'j' }, shift: { ru: 'О', en: 'J' }, code: 'KeyJ', class: ['key', 'key_main', 'key_j'],
		},
		{
			key: { ru: 'л', en: 'k' }, shift: { ru: 'Л', en: 'K' }, code: 'KeyK', class: ['key', 'key_main', 'key_k'],
		},
		{
			key: { ru: 'д', en: 'l' }, shift: { ru: 'Д', en: 'L' }, code: 'KeyL', class: ['key', 'key_main', 'key_l'],
		},
		{
			key: { ru: 'ж', en: ';' }, shift: { ru: 'Ж', en: ':' }, code: 'Semicolon', class: ['key', 'key_main', 'key_semicolon'],
		},
		{
			key: { ru: 'э', en: '\'' }, shift: { ru: 'Э', en: '"' }, code: 'Quote', class: ['key', 'key_main', 'key_quote'],
		},
		{
			key: { ru: 'Enter', en: 'Enter' }, code: 'Enter', class: ['key', 'key_extra', 'key_enter'], 
		},
	],
	[ // четвертая строка
		{
			key: { ru: 'Shift', en: 'Shift' }, code: 'LeftShift', class: ['key', 'key_extra', 'key_left-shift'], 
		},
		{
			key: { ru: 'я', en: 'z' }, shift: { ru: 'Я', en: 'Z' }, code: 'KeyZ', class: ['key', 'key_main', 'key_z'],
		},
		{
			key: { ru: 'ч', en: 'x' }, shift: { ru: 'Ч', en: 'X' }, code: 'KeyX', class: ['key', 'key_main', 'key_x'],
		},
		{
			key: { ru: 'с', en: 'c' }, shift: { ru: 'С', en: 'C' }, code: 'KeyC', class: ['key', 'key_main', 'key_c'],
		},
		{
			key: { ru: 'м', en: 'v' }, shift: { ru: 'М', en: 'V' }, code: 'KeyV', class: ['key', 'key_main', 'key_v'],
		},
		{
			key: { ru: 'и', en: 'b' }, shift: { ru: 'И', en: 'B' }, code: 'KeyB', class: ['key', 'key_main', 'key_b'],
		},
		{
			key: { ru: 'т', en: 'n' }, shift: { ru: 'Т', en: 'N' }, code: 'KeyN', class: ['key', 'key_main', 'key_n'],
		},
		{
			key: { ru: 'ь', en: 'm' }, shift: { ru: 'Ь', en: 'M' }, code: 'KeyM', class: ['key', 'key_main', 'key_m'],
		},
		{
			key: { ru: 'б', en: ',' }, shift: { ru: 'Б', en: '<' }, code: 'Comma', class: ['key', 'key_main', 'key_comma'],
		},
		{
			key: { ru: 'ю', en: '.' }, shift: { ru: 'Ю', en: '>' }, code: 'Period', class: ['key', 'key_main', 'key_period'],
		},
		{
			key: { ru: '.', en: '/' }, shift: { ru: ',', en: '?' }, code: 'Slash', class: ['key', 'key_main', 'key_slash'],
		},
		{
			key: { ru: '▲', en: '▲' }, code: 'upArrow', noType: true, class: ['key', 'key_main', 'key_up-arrow'],
		},
		{
			key: { ru: 'Shift', en: 'Shift' }, code: 'RightShift', class: ['key', 'key_extra', 'key_right-shift'], 
		},
	],

	[ // пятая строка
		{
			key: { ru: 'Cntrl', en: 'Cntrl' }, code: 'LeftControl', class: ['key', 'key_extra', 'key_left-control'], 
		},
		{
			key: { ru: 'Alt', en: 'Alt' }, code: 'LeftAlt', class: ['key', 'key_extra', 'key_left-alt'], 
		},
		{ 
			key: { ru: ' ', en: ' ' }, code: 'Space', class: ['key', 'key_main', 'key__space'],
		},
		{
			key: { ru: 'Alt', en: 'Alt' }, code: 'RightAlt', class: ['key', 'key_extra', 'key_right-alt'], 
		},
		{
			key: { ru: 'Cntrl', en: 'Cntrl' }, code: 'RightControl', class: ['key', 'key_extra', 'key_right-control'], 
		},
		{
			key: { ru: '◄', en: '◄' }, code: 'LeftArrow', class: ['key', 'key_extra', 'key_left-arrow'],
		},
		{
			key: { ru: '▼', en: '▼' }, code: 'DownArrow', class: ['key', 'key_extra', 'key_down-arrow'],
		},
		{
			key: { ru: '►', en: '►' }, code: 'RightArrow', class: ['key', 'key_extra', 'key_right-arrow'],
		},
		{
			key: { ru: '🇷🇺', en: 'en' }, code: 'Lang', class: ['key', 'key_extra', 'key_lang'], 
		},
	],
];

