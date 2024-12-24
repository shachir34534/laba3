document.addEventListener('DOMContentLoaded', () => {
	setTimeout(() => {
	  const preloader = document.getElementById('page-preloader');
	  if (!preloader.classList.contains('done')) {
		preloader.classList.add('done');
	  }
	  document.body.classList.remove('overflow-hidden');
	}, 800);
  });