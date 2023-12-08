const start = new Date().getTime();
const originPosition = { x: 0, y: 0 };
const last = {
  starTimestamp: start,
  starPosition: originPosition,
  mousePosition: originPosition
};

const config = {
  starAnimationDuration: 1500,
  minimumTimeBetweenStars: 250,
  minimumDistanceBetweenStars: 75,
  glowDuration: 75,
  maximumGlowPointSpacing: 10,
  colors: ["249 146 253", "252 254 255"],
  sizes: ["1.4rem", "1rem", "0.6rem"],
  animations: ["fall-1", "fall-2", "fall-3"]
};

let count = 0;

const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const selectRandom = items => items[rand(0, items.length - 1)];

const withUnit = (value, unit) => `${value}${unit}`;
const px = value => withUnit(value, "px");
const ms = value => withUnit(value, "ms");

const calcDistance = (a, b) => {
  const diffX = b.x - a.x,
    diffY = b.y - a.y;

  return Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));
};

const calcElapsedTime = (start, end) => end - start;

const appendElement = (element, containerClass) => {
  const container = document.querySelector(`.${containerClass}`);
  container.appendChild(element);
};

const removeElement = (element, delay) => {
  setTimeout(() => {
    element.parentNode.removeChild(element);
  }, delay);
};

const createStar = (position, containerClass) => {
  const star = document.createElement("span");
  const color = selectRandom(config.colors);

  star.className = "star fa-solid fa-sparkle";
  star.style.left = px(position.x);
  star.style.top = px(position.y);
  star.style.fontSize = selectRandom(config.sizes);
  star.style.color = `rgb(${color})`;
  star.style.textShadow = `0px 0px 1.5rem rgb(${color} / 0.5)`;
  star.style.animationName = config.animations[count++ % 3];
  star.style.starAnimationDuration = ms(config.starAnimationDuration);

  appendElement(star, containerClass);
  removeElement(star, config.starAnimationDuration);
};

const createGlowPoint = (position, containerClass) => {
  const glow = document.createElement("div");

  glow.className = "glow-point";
  glow.style.left = px(position.x);
  glow.style.top = px(position.y);

  appendElement(glow, containerClass);
  removeElement(glow, config.glowDuration);
};

const determinePointQuantity = distance => Math.max(
  Math.floor(distance / config.maximumGlowPointSpacing),
  1
);

const createGlow = (last, current, containerClass) => {
  const distance = calcDistance(last, current);
  const quantity = determinePointQuantity(distance);

  const dx = (current.x - last.x) / quantity;
  const dy = (current.y - last.y) / quantity;

  Array.from(Array(quantity)).forEach((_, index) => {
    const x = last.x + dx * index;
    const y = last.y + dy * index;

    createGlowPoint({ x, y }, containerClass);
  });
};

const updateLastStar = position => {
  last.starTimestamp = new Date().getTime();
  last.starPosition = position;
};

const updateLastMousePosition = position => last.mousePosition = position;

const adjustLastMousePosition = position => {
  if (last.mousePosition.x === 0 && last.mousePosition.y === 0) {
    last.mousePosition = position;
  }
};

const handleOnMove = (e, containerClass) => {
  const containerRect = document.querySelector(`.${containerClass}`).getBoundingClientRect();
  const mousePosition = { x: e.clientX - containerRect.left, y: e.clientY - containerRect.top };

  adjustLastMousePosition(mousePosition);

  const now = new Date().getTime();
  const hasMovedFarEnough = calcDistance(last.starPosition, mousePosition) >= config.minimumDistanceBetweenStars;
  const hasBeenLongEnough = calcElapsedTime(last.starTimestamp, now) > config.minimumTimeBetweenStars;

  if (hasMovedFarEnough || hasBeenLongEnough) {
    createStar(mousePosition, containerClass);
    updateLastStar(mousePosition);
  }

  createGlow(last.mousePosition, mousePosition, containerClass);
  updateLastMousePosition(mousePosition);
};

document.querySelector('.effect-section-one').addEventListener('mousemove', e => handleOnMove(e, 'effect-section-one'));
document.querySelector('.effect-section-two').addEventListener('mousemove', e => handleOnMove(e, 'effect-section-two'));
document.querySelector('.effect-section-three').addEventListener('mousemove', e => handleOnMove(e, 'effect-section-three'));
document.querySelector('.effect-section-four').addEventListener('mousemove', e => handleOnMove(e, 'effect-section-four'));
document.querySelector('.effect-section-five').addEventListener('mousemove', e => handleOnMove(e, 'effect-section-five'));
document.querySelector('.effect-section-six').addEventListener('mousemove', e => handleOnMove(e, 'effect-section-six'));
document.querySelector('.effect-section-seven').addEventListener('mousemove', e => handleOnMove(e, 'effect-section-seven'));
document.querySelector('.effect-section-eight').addEventListener('mousemove', e => handleOnMove(e, 'effect-section-eight'));
document.querySelector('.effect-section-nine').addEventListener('mousemove', e => handleOnMove(e, 'effect-section-nine'));
document.querySelector('.effect-section-ten').addEventListener('mousemove', e => handleOnMove(e, 'effect-section-ten'));

document.querySelector('.effect-section-one').addEventListener('mouseleave', () => updateLastMousePosition(originPosition));
document.querySelector('.effect-section-two').addEventListener('mouseleave', () => updateLastMousePosition(originPosition));
document.querySelector('.effect-section-three').addEventListener('mouseleave', () => updateLastMousePosition(originPosition));
document.querySelector('.effect-section-four').addEventListener('mouseleave', () => updateLastMousePosition(originPosition));
document.querySelector('.effect-section-five').addEventListener('mouseleave', () => updateLastMousePosition(originPosition));
document.querySelector('.effect-section-six').addEventListener('mouseleave', () => updateLastMousePosition(originPosition));
document.querySelector('.effect-section-seven').addEventListener('mouseleave', () => updateLastMousePosition(originPosition));
document.querySelector('.effect-section-eight').addEventListener('mouseleave', () => updateLastMousePosition(originPosition));
document.querySelector('.effect-section-nine').addEventListener('mouseleave', () => updateLastMousePosition(originPosition));
document.querySelector('.effect-section-ten').addEventListener('mouseleave', () => updateLastMousePosition(originPosition));
