// scripts/highlight.js
// Task 3: Highlight matches across page sections

(function () {
	const $highlightInput = $('#highlight-search');
	const $clearBtn = $('#clear-highlights');

	// Elements to highlight in
	let $targets = $('#card-section .card-title')
		.add('#card-section .card-text')
		.add('#faq .accordion-header')
		.add('#faq .accordion-content');

	// Preserve original HTML to avoid nested marks
	const originals = new Map();
	$targets.each(function () {
		originals.set(this, $(this).html());
	});

	function escapeRegExp(str) {
		return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
	}

	function clearHighlights() {
		$targets.each(function () {
			const initial = originals.get(this);
			if (initial != null) $(this).html(initial);
		});
	}

	function applyHighlights(query) {
		const q = (query || '').trim();
		clearHighlights();
		if (!q) return;

		// Case-insensitive find all occurrences
		// For whole-word matching, use: new RegExp(`\\b(${escapeRegExp(q)})\\b`, 'gi')
		const re = new RegExp(`(${escapeRegExp(q)})`, 'gi');

		$targets.each(function () {
			const clean = originals.get(this) ?? $(this).html();
			$(this).html(clean.replace(re, '<mark class="highlight">$1</mark>'));
		});
	}

	// Manual highlight typing
	if ($highlightInput.length) {
		$highlightInput.on('input', function (e) {
			applyHighlights(e.target.value);
		});
	}

	// Clear button
	if ($clearBtn.length) {
		$clearBtn.on('click', function () {
			if ($highlightInput.length) $highlightInput.val('');
			clearHighlights();
		});
	}

	// Mirror live-search when highlight field is empty
	$(document).on('live-search:changed', function (e) {
		if (!$highlightInput.length) return;
		if (!$highlightInput.val().trim()) {
			applyHighlights(e.detail?.query || '');
		}
	});
})();