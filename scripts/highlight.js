// scripts/highlight.js
// Robust highlight logic for cards and FAQ (jQuery)

$(function () {
	const $input = $('#highlight-search');
	const $clear = $('#clear-highlights');

	// Combined selector for everything we might highlight
	const $targets = $('#card-section .card-title, #card-section .card-text, #faq .accordion-header, #faq .accordion-content');

	// Store original HTML for each element to prevent nested <mark>
	const originals = new Map();
	$targets.each(function () {
		originals.set(this, $(this).html());
	});

	// Safe escape for regex
	function escapeRegExp(str) {
		return String(str).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
	}

	// Reset to original HTML
	function resetHighlights() {
		$targets.each(function () {
			const orig = originals.get(this);
			if (orig !== undefined) $(this).html(orig);
		});
	}

	// Apply highlight for query
	function applyHighlights(query) {
		resetHighlights();
		const q = (query || '').toString().trim();
		if (!q) return;

		const re = new RegExp(`(${escapeRegExp(q)})`, 'gi');

		$targets.each(function () {
			const orig = originals.get(this) ?? $(this).html();
			// Use the saved original HTML to avoid nested marks
			const replaced = (orig || '').replace(re, '<mark class="highlight">$1</mark>');
			$(this).html(replaced);
		});
	}

	// Typing in highlight box (if present)
	if ($input.length) {
		$input.on('input', function () {
			applyHighlights($(this).val());
		});
	}

	// Clear button behaviour (if present)
	if ($clear.length) {
		$clear.on('click', function () {
			if ($input.length) $input.val('');
			resetHighlights();
		});
	}

	// Listen for the app-wide search change event.
	// jQuery .trigger('event', { query: '...' }) passes that object as a second param.
	$(document).on('live-search:changed', function (e, data) {
		// If user is manually typing into the highlight box, don't override their input
		if ($input.length && $input.val().toString().trim()) return;

		const q = (data && data.query) || '';
		applyHighlights(q);
	});
});