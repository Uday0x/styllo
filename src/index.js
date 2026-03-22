// 🔥 Handlers (outside for performance)
const handlers = {
  // spacing
  p: (el, val) => (el.style.padding = val + "px"),
  m: (el, val) => (el.style.margin = val + "px"),

  pt: (el, val) => (el.style.paddingTop = val + "px"),
  pb: (el, val) => (el.style.paddingBottom = val + "px"),
  pl: (el, val) => (el.style.paddingLeft = val + "px"),
  pr: (el, val) => (el.style.paddingRight = val + "px"),

  mt: (el, val) => (el.style.marginTop = val + "px"),
  mb: (el, val) => (el.style.marginBottom = val + "px"),

  // size
  w: (el, val) => (el.style.width = isNaN(val) ? val : val + "px"),
  h: (el, val) => (el.style.height = isNaN(val) ? val : val + "px"),

  // colors
  bg: (el, val) => (el.style.backgroundColor = val),
  text: (el, val) => (el.style.color = val),

  // typography
  fs: (el, val) => (el.style.fontSize = val + "px"),

  // alignment
  center: (el) => (el.style.textAlign = "center"),

  // border
  br: (el, val) => (el.style.borderRadius = val + "px"),
  border: (el, val) => (el.style.border = val),

  // layout
  flex: (el) => (el.style.display = "flex"),
  grid: (el) => (el.style.display = "grid"),

  // justify / align
  jc: (el, val) => (el.style.justifyContent = val),
  ai: (el, val) => (el.style.alignItems = val),

  // effects
  shadow: (el) =>
    (el.style.boxShadow = "0px 4px 6px rgba(0,0,0,0.1)"),

  // position
  relative: (el) => (el.style.position = "relative"),
  absolute: (el) => (el.style.position = "absolute"),
};

// 🚀 Main engine
function initialize() {
  const elements = document.querySelectorAll("*");

  elements.forEach((el) => {
    [...el.classList].forEach((cls) => {
      if (!cls.startsWith("chai-")) return;

      const parts = cls.split("-");
      const type = parts[1];
      const value = parts[2];

      if (handlers[type]) {
        if (value !== undefined) {
          handlers[type](el, value);
        } else {
          handlers[type](el);
        }
      }

      el.classList.remove(cls);
    });
  });
}


document.addEventListener("DOMContentLoaded", initialize);

export default initialize;