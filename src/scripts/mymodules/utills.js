const createElement = (tag, className, elText = '') => {
  const element = document.createElement(tag);
  if (className) element.classList.add(className);
  if (elText) element.textContent = elText;
  return element;
};

// exports.createElement = createElement;
export default createElement;
