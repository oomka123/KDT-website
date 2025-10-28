$(function () {
	const $input = $('#live-search');
	const $list = $('#search-suggestions');

	if (!$input.length || !$list.length) return;

	// Collect all suggestion texts
	const suggestions = [
		...new Set([
			...$('#card-section .card-title').map((_, el) => $(el).text().trim()).get(),
			...$('#faq .accordion-header').map((_, el) => $(el).text().trim()).get()
		])
	];

	// Show dropdown list
	function showList(items) {
		if (!items.length) return $list.hide().empty();
		$list.html(items.slice(0, 10).map(s => `<li class="list-group-item">${s}</li>`)).show();
	}

	// Filter by input
	$input.on('input', function () {
		const q = $(this).val().toLowerCase().trim();
		showList(q ? suggestions.filter(s => s.toLowerCase().includes(q)) : []);
	});

	// Apply suggestion when clicked
	$list.on('click', 'li', function () {
		const text = $(this).text();
		$input.val(text);
		$list.hide();

		// Notify other scripts
		$(document).trigger('live-search:changed', { query: text });

		// Scroll to matching section
		const $target = $('#card-section .card-title, #faq .accordion-header')
			.filter((_, el) => $(el).text().trim().toLowerCase() === text.toLowerCase())
			.first();
		if ($target.length) $target[0].scrollIntoView({ behavior: 'smooth', block: 'center' });
	});

	// Hide suggestions when clicking elsewhere
	$(document).on('click', e => {
		if (!$input.is(e.target) && !$list.is(e.target) && !$list.has(e.target).length) {
			$list.hide();
		}
	});
});