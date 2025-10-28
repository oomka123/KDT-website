$(function () {
	const $input = $('#live-search');
	if (!$input.length) return;

	const $cards = $('#card-section .card');
	const $faq = $('#faq .accordion-item');

	const normalize = s => (s || '').toLowerCase().trim();

	function filter($elements, selector, query) {
		const q = normalize(query);
		$elements.each(function () {
			const text = $(this).find(selector).text().toLowerCase();
			$(this).toggle(!q || text.includes(q));
		});
	}

	// Small delay for smoother typing
	let timer;
	$input.on('input', function () {
		clearTimeout(timer);
		timer = setTimeout(() => {
			const q = $(this).val();
			filter($cards, '.card-title, .card-text', q);
			filter($faq, '.accordion-header, .accordion-content', q);
			$(document).trigger('live-search:changed', { query: q });
		}, 80);
	});

	// Initial show
	filter($cards, '.card-title, .card-text', '');
	filter($faq, '.accordion-header, .accordion-content', '');
});