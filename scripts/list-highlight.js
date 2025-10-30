$(function () {
  const $input = $("#list-highlight-search");
  const $clear = $("#list-clear-highlights");

  const $targets = $(".listCard .card-title, .listCard .card-text");

  const originals = new Map();
  $targets.each(function () {
    originals.set(this, $(this).html());
  });

  function escapeRegExp(str) {
    return String(str).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  function resetHighlights() {
    $targets.each(function () {
      const orig = originals.get(this);
      if (orig !== undefined) $(this).html(orig);
    });
  }

  function applyHighlights(query) {
    resetHighlights();
    const q = (query || "").toString().trim();
    if (!q) return;
    const re = new RegExp(`(${escapeRegExp(q)})`, "gi");
    $targets.each(function () {
      const orig = originals.get(this) ?? $(this).html();
      $(this).html(
        (orig || "").replace(re, '<mark class="highlight">$1</mark>')
      );
    });
  }

  if ($input.length) {
    $input.on("input", function () {
      applyHighlights($(this).val());
    });
  }

  if ($clear.length) {
    $clear.on("click", function () {
      if ($input.length) $input.val("");
      resetHighlights();
    });
  }

  $(document).on("list-live-search:changed", function (e, data) {
    if ($input.length && $input.val().toString().trim()) return;
    const q = (data && data.query) || "";
    applyHighlights(q);
  });
});
