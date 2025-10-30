$(function () {
  const $input = $("#list-live-search");
  const $list = $("#list-search-suggestions");

  if (!$input.length || !$list.length) return;

  const suggestions = [
    ...new Set(
      $(".listCard .card-title")
        .map((_, el) => $(el).text().trim())
        .get()
    ),
  ];

  function showList(items) {
    if (!items.length) return $list.hide().empty();
    $list
      .html(
        items.slice(0, 10).map((s) => `<li class="list-group-item">${s}</li>`)
      )
      .show();
  }

  $input.on("input", function () {
    const q = $(this).val().toLowerCase().trim();
    showList(q ? suggestions.filter((s) => s.toLowerCase().includes(q)) : []);
  });

  $list.on("click", "li", function () {
    const text = $(this).text();
    $input.val(text);
    $list.hide();

    $(document).trigger("list-live-search:changed", { query: text });

    const $target = $(".listCard .card-title")
      .filter(
        (_, el) => $(el).text().trim().toLowerCase() === text.toLowerCase()
      )
      .first();
    if ($target.length)
      $target[0].scrollIntoView({ behavior: "smooth", block: "center" });
  });

  $(document).on("click", (e) => {
    if (
      !$input.is(e.target) &&
      !$list.is(e.target) &&
      !$list.has(e.target).length
    ) {
      $list.hide();
    }
  });
});
