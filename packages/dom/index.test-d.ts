import {
  computePosition,
  shift,
  limitShift,
  flip,
  autoPlacement,
  hide,
  offset,
  size,
  arrow,
  detectOverflow,
  Middleware,
  platform,
} from '.';

// @ts-expect-error
computePosition();
// @ts-expect-error
computePosition(document.body);

computePosition(document.body, document.body).then();

computePosition(
  {
    getBoundingClientRect: () => ({
      top: 0,
      right: 0,
      left: 0,
      bottom: 0,
      x: 0,
      y: 0,
      width: 0,
      height: 0,
    }),
  },
  document.body
).then();

computePosition(
  {
    getBoundingClientRect: () => ({
      top: 0,
      right: 0,
      left: 0,
      bottom: 0,
      x: 0,
      y: 0,
      width: 0,
      height: 0,
    }),
    contextElement: document.body,
  },
  document.body
).then();

computePosition(
  {
    // @ts-expect-error
    getBoundingClientRect: () => ({
      top: 0,
    }),
    // @ts-expect-error
    contextElement: '',
  },
  document.body
).then();

computePosition(document.body, document.body, {
  placement: 'right',
}).then();

computePosition(document.body, document.body, {
  strategy: 'fixed',
}).then();

computePosition(document.body, document.body, {
  // @ts-expect-error
  strategy: 'random',
}).then();

computePosition(document.body, document.body, {
  placement: 'right',
  middleware: [
    shift(),
    flip(),
    autoPlacement(),
    offset(),
    hide(),
    size(),
    arrow({element: document.body}),
  ],
}).then();

// @ts-expect-error
arrow();

arrow({element: document.body, padding: 5});

// @ts-expect-error
arrow({element: 'test'});
shift({
  // @ts-expect-error
  boundary: '',
});
shift({boundary: document.body});
shift({boundary: [document.body]});
shift({boundary: 'clippingAncestors'});
shift({limiter: limitShift()});
shift({limiter: limitShift({offset: 5})});
shift({limiter: limitShift({offset: {mainAxis: 5}})});
shift({limiter: limitShift({offset: {crossAxis: 5}})});
shift({limiter: limitShift({offset: {mainAxis: 5, crossAxis: 5}})});
shift({limiter: limitShift({offset: () => 5})});
shift({limiter: limitShift({offset: () => ({mainAxis: 5})})});
shift({limiter: limitShift({offset: () => ({crossAxis: 5})})});
shift({limiter: limitShift({offset: () => ({mainAxis: 5, crossAxis: 5})})});
// @ts-expect-error
shift({limiter: 'test'});

flip({
  // @ts-expect-error
  boundary: '',
});
flip({
  boundary: document.body,
  padding: {top: 0},
});
flip({boundary: [document.body]});
flip({boundary: 'clippingAncestors'});
size({
  // @ts-expect-error
  boundary: '',
});
size({boundary: document.body});
size({boundary: [document.body]});
size({boundary: 'clippingAncestors'});
autoPlacement({
  // @ts-expect-error
  boundary: '',
});
size({boundary: document.body});
size({boundary: [document.body]});
size({boundary: 'clippingAncestors'});
size({
  apply({elements, availableHeight, availableWidth}) {
    availableHeight;
    availableWidth;
    // @ts-expect-error
    elements.floating.style = '';
    // @ts-expect-error
    elements.reference.style = '';
  },
});

offset();
offset(5);
offset({mainAxis: 5});
offset({crossAxis: 5});
offset({mainAxis: 5, crossAxis: 5});
offset(() => 5);
offset(() => ({mainAxis: 5}));
offset(() => ({crossAxis: 5}));
offset(() => ({mainAxis: 5, crossAxis: 5}));
// @ts-expect-error
offset(() => 'test');
// @ts-expect-error
offset('test');
// @ts-expect-error
offset({mainAxis: 'test'});
// @ts-expect-error
offset({crossAxis: 'test'});

// @ts-expect-error
detectOverflow();

// @ts-expect-error
const middlewareWithoutName: Middleware = {
  fn() {
    return {};
  },
};

const middleware: Middleware = {
  name: 'test',
  fn(args) {
    const {elements} = args;
    // @ts-expect-error
    elements.floating.$$unknown$$;
    // @ts-expect-error
    elements.reference.focus();
    return {};
  },
};

const middlewareWDetectOverflow: Middleware = {
  name: 'test',
  async fn(args) {
    // @ts-expect-error
    detectOverflow();
    detectOverflow(args);
    detectOverflow(args, {
      elementContext: 'reference',
      boundary: 'clippingAncestors',
      rootBoundary: 'document',
      padding: 5,
      altBoundary: true,
    });
    detectOverflow(args, {
      elementContext: 'reference',
      boundary: 'clippingAncestors',
      rootBoundary: 'document',
      padding: {bottom: 5},
      altBoundary: true,
    });

    return {};
  },
};

computePosition(document.body, document.body, {
  middleware: [middlewareWithoutName, middleware, middlewareWDetectOverflow],
});

computePosition(document.body, document.body, {
  middleware: [null, undefined, false, offset()],
});

computePosition(document.body, document.body, {
  platform: {
    ...platform,
    getOffsetParent: (element) =>
      Promise.resolve((element as HTMLElement).offsetParent || window),
  },
});
