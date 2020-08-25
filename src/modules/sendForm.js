import popup from './popup';
const sendForm = (idForm) => {
	const form = document.getElementById(idForm);
	const message = document.createElement('h4');
	message.textContent = 'Идет отправка...';
	const clearMessage = () => {
		message.remove();
		[...form.elements].forEach(item => {
			if (item.tagName === 'input') {
				item.value = '';
			}
		});
	}
	const errorData = error => {
		console.error(error);
		clearMessage();
		const errorPopup = document.getElementById('popup-error') || document.getElementById('thanks').cloneNode(true);
		errorPopup.id = 'popup-error';
		errorPopup.querySelector('h4').textContent = 'ОШИБКА';
		errorPopup.querySelector('p').textContent = 'Отправка не удалась, повторите еще раз!'
		document.body.append(errorPopup);
		popup(null, 'popup-error');
	};
	const outputData = response => {
		if (response.status !== 200) {
			throw errorData(response.status);
		}
		clearMessage();
		popup(null, 'thanks');
	};
	const postData = body => {
		return fetch('./server.php', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json'
			},
			body: JSON.stringify(body)
		});
	};
	form.addEventListener('submit', (event) => {
		form.insertAdjacentElement('afterend', message);
		event.preventDefault();
		postData(new FormData(form))
			.then(outputData)
			.catch(errorData);
	});
};

export default sendForm;