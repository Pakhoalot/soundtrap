import IMAGE_SIZES from '../constants/ImageConstants';

type Size = typeof IMAGE_SIZES.LARGE | typeof IMAGE_SIZES.XLARGE;
export const getImageUrl = (s: string, size:Size ) => {
  if (!s) {
    return '';
  }

  const url = s.replace('http:', '');

  switch (size) {
    case IMAGE_SIZES.LARGE:
      return url.replace('large', IMAGE_SIZES.LARGE);
    case IMAGE_SIZES.XLARGE:
      return url.replace('large', IMAGE_SIZES.XLARGE);
    default:
      return url;
  }
};

