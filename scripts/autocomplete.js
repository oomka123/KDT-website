// scripts/autocomplete.js
// Task 2: Autocomplete suggestions dropdown

(function () {
	const $input = $('#live-search');
	const $list = $('#search-suggestions');
	if ($input.length === 0 || $list.length === 0) return;

	// Build suggestion source from card titles and FAQ questions
	const cardTitles = $('#card-section .card-title').map(function () {
		return $(this).text().trim();
	}).get();
	const faqQuestions = $('#faq .accordion-header').map(function () {
		return $(this).text().trim();
	}).get();
	const suggestions = Array.from(new Set([...cardTitles, ...faqQuestions])); // unique

	function showList(items) {
		if (!items.length) {
			$list.hide().html('');
			return;
		}
		const html = items.slice(0, 10).map(s => `<li class="list-group-item">${s}</li>`).join('');
		$list.html(html).show();
	}

	function filterSuggestions(query) {
		const q = (query || '').toLowerCase().trim();
		if (!q) return showList([]);
		const filtered = suggestions.filter(s => s.toLowerCase().includes(q));
		showList(filtered);
	}

	// Update suggestions as user types
	$input.on('input', function () {
		filterSuggestions($(this).val());
	});

	// Click suggestion to apply
	$list.on('click', '.list-group-item', function () {
		const text = $(this).text();
		$input.val(text);
		$list.hide();

		// Broadcast so search.js filters and highlight.js can react
		$(document).trigger('live-search:changed', { query: text });

		// Try to scroll to the matching card title or FAQ header
		const $targets = $('#card-section .card-title, #faq .accordion-header');
		const $target = $targets.filter(function () {
			return $(this).text().trim().toLowerCase() === text.trim().toLowerCase();
		}).first();
		if ($target.length && $target[0].scrollIntoView) {
			$target[0].scrollIntoView({ behavior: 'smooth', block: 'center' });
		}
	});

	// Hide list when clicking outside
	$(document).on('click', function (e) {
		if (!$list.is(e.target) && $list.has(e.target).length === 0 && !$input.is(e.target)) {
			$list.hide();
		}
	});
})();