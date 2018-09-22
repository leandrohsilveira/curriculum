const sizes = {
  xs: 480,
  sm: 640,
  md: 780,
  lg: 1024,
  xl: 1280
};

const queryMax = width => `@media screen and (max-width: ${width}px)`;

const query = {
  print: "@media print",
  max: queryMax,
  maxXs: queryMax(sizes.xs),
  maxSm: queryMax(sizes.sm),
  maxMd: queryMax(sizes.md),
  maxLg: queryMax(sizes.lg),
  maxXl: queryMax(sizes.xl)
};

const media = {
  sizes,
  query
};

export default media;
