

// Single card content flip logic
document.addEventListener('DOMContentLoaded', function() {
	const front = document.querySelector('.card-content-front');
	const back = document.querySelector('.card-content-back');
	const servicesBtn = document.getElementById('servicesBtn');
	const backBtn = document.getElementById('backBtn');

	function showBack() {
		if (front && back) {
			front.style.display = 'none';
			back.style.display = 'block';
			back.style.animation = 'fadeIn 0.5s';
		}
	}
	function showFront() {
		if (front && back) {
			back.style.display = 'none';
			front.style.display = 'block';
			front.style.animation = 'fadeIn 0.5s';
		}
	}

	if (servicesBtn) {
		servicesBtn.addEventListener('click', showBack);
	}
	if (backBtn) {
		backBtn.addEventListener('click', showFront);
	}

	document.addEventListener('keydown', function(e) {
		if (e.key === 'Escape' && back && back.style.display === 'block') {
			showFront();
		}
	});
});

// Add fadeIn animation
const style = document.createElement('style');
style.innerHTML = `@keyframes fadeIn { from { opacity: 0; transform: translateY(20px);} to { opacity: 1; transform: none;} }`;
document.head.appendChild(style);
