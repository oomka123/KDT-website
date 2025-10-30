$(function () {
  const $input = $("#list-live-search");
  if (!$input.length) return;

  const $cards = $(".listCard .card");

  const normalize = (s) => (s || "").toLowerCase().trim();

  function filter($elements, query) {
    const q = normalize(query);
    $elements.each(function () {
      const text = $(this).find(".card-title, .card-text").text().toLowerCase();
      $(this)
        .closest(".listCard")
        .toggle(!q || text.includes(q));
    });
  }

  let timer;
  $input.on("input", function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      const q = $(this).val();
      filter($cards, q);
      $(document).trigger("list-live-search:changed", { query: q });
    }, 80);
  });

  // Initial show
  filter($cards, "");
});
