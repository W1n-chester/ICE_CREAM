let easing = {
  quadratic: function (x) {
    return Math.sqrt(x);
  },
};

function range(start, stop, step) {
  let array = [];
  for (let i = start; i < stop; i += step) array.push(i);
  return array;
}

function interpolation(fps, easing, finalValue) {
  function scaleIt(value) {
    return finalValue * value;
  }

  let x = range(0, 1, 1 / fps),
    y = x.map(easing).map(scaleIt);

  return y;
}

function animateEl(values, duration, onAnimate) {
  let frameIndex = 0,
    fps = values.length,
    id = setInterval(anime, duration / fps);

  function anime() {
    let current = values[frameIndex],
      isLastFrame = frameIndex === fps - 1;

    onAnimate(current, frameIndex, values);

    if (isLastFrame) {
      clearInterval(id);
    } else {
      frameIndex++;
    }
  }
}

function round(value, decimals) {
  return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
}

function unformat(content) {
  let unlocalized = content.replace('.', '').replace(',', '.'),
    value = parseFloat(unlocalized);
  return value;
}

function format(value) {
  return value.toString().replace('.', ',');
}

//

function start() {
  let fps = 120,
    els = [].slice.call(document.querySelectorAll('.increasing-number'));

  els.forEach(function (el) {
    let content = el.firstChild.textContent.trim(),
      decimalPlaces = content.split(',')[1] || '',
      value = unformat(content),
      values = interpolation(fps, easing.quadratic, value);

    animateEl(values, 1000, function (current, i, values) {
      let isLast = i === values.length - 1,
        value = round(current, decimalPlaces.length);
      el.firstChild.textContent = isLast ? content : format(value);
    });
  });
}

//

function isOnVisibleSpace(element) {
  let bodyHeight = window.innerHeight;
  let elemRect = element.getBoundingClientRect();
  let offset = elemRect.top; // - bodyRect.top;
  if (offset < 0) return false;
  if (offset > bodyHeight) return false;
  return true;
}

let listenedElements = [];
window.addEventListener('scroll', function () {
  listenedElements.forEach(item => {
    let result = isOnVisibleSpace(item.el);
    if (item.el.isOnVisibleSpace && !result) {
      item.el.isOnVisibleSpace = false;
      item.outVisibleSpace(item.el);
      return;
    }
    if (!item.el.isOnVisibleSpace && result) {
      item.el.isOnVisibleSpace = true;
      item.inVisibleSpace(item.el);
      return;
    }
  });
});

function onVisibleSpaceListener(elementId, cbIn, cbOut) {
  let el = document.getElementById(elementId);
  listenedElements.push({
    el: el,
    inVisibleSpace: cbIn,
    outVisibleSpace: cbOut,
  });
}

onVisibleSpaceListener(
  'counter-advantages',
  el => {
    start();
  },
  el => {
    // тут вставляем код остановки анимации
    // el.innerHTML = "000000000000000000000000";
    // window.alert("элемент вне зоны видимости");
  }
);
