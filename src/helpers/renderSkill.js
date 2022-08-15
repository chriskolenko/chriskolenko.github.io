module.exports = function (level) {
  let html = "";

  let filled =
    "bg-neutral-400 border border-neutral-400 rounded-full h-3.5 w-3.5 md:h-5 md:w-5 ";

  let unfilled =
    "border border-neutral-400 rounded-full h-3.5 w-3.5 md:h-5 md:w-5 ";

  for (let i = 0; i < 5; i++) {
    html +=
      i < level
        ? `<div class="${filled}"></div>`
        : `<div class="${unfilled}"></div>`;
  }

  return html;
};
