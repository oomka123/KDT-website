// scripts/search.js
// Task 1: Real-time filter for cards and FAQ

(function () {
	const $input = $('#live-search');
	if ($input.length === 0) return;

	const $cards = $('#card-section .card');
	const $faqItems = $('#faq .accordion-item');

	const normalize = (s) => (s || '').toLowerCase().trim();

	function filterCards(query) {
		const q = normalize(query);
		$cards.each(function () {
			const $card = $(this);
			const hay = ($card.find('.card-title').text() + ' ' + $card.find('.card-text').text()).toLowerCase();
			if (q && !hay.includes(q)) {
				$card.hide();
			} else {
				$card.show();
			}
		});
	}

	function filterFaq(query) {
		const q = normalize(query);
		$faqItems.each(function () {
			const $item = $(this);
			const hay = ($item.find('.accordion-header').text() + ' ' + $item.find('.accordion-content').text()).toLowerCase();
			if (q && !hay.includes(q)) {
				$item.hide();
			} else {
				$item.show();
			}
		});
	}

	function debounce(fn, delay = 120) {
		let t;
		return function (...args) {
			clearTimeout(t);
			t = setTimeout(() => fn.apply(this, args), delay);
		};
	}

	const onType = debounce(function (e) {
		const q = e.target.value;
		filterCards(q);
		filterFaq(q);

		// Let other modules (autocomplete, highlight) react too
		$(document).trigger('live-search:changed', { query: q });
	}, 60);

	$input.on('input', onType);

	// Ensure visible on load
	filterCards('');
	filterFaq('');
})();