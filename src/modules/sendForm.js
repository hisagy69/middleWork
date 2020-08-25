import popup from './popup';
const sendForm = (idForm) => {
	const form = document.getElementById(idForm);
	const errorData = error => {
		console.error(error);
	};
	const outputData = response => {
		if (response.status !== 200) {
			throw errorData(response.status);
		}
		[...form.elements].forEach(item => {
			if (item.tagName === 'input') {
				item.value = '';
			}
		});
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
		event.preventDefault();
		postData(new FormData(form))
			.then(outputData)
			.catch(errorData);
	});
};

export default sendForm;