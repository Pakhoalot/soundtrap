import { IMAGE_SIZES_XLARGE, IMAGE_SIZES_LARGE } from "../constants/ImageConstants";

type Size = typeof IMAGE_SIZES_LARGE | typeof IMAGE_SIZES_XLARGE;
export const getImageUrl = (s: string, size:Size ) => {
  if (!s) {
    return '';
  }

  const url = s.replace('http:', '');

  switch (size) {
    case IMAGE_SIZES_LARGE:
      return url.replace('large', IMAGE_SIZES_LARGE);
    case IMAGE_SIZES_XLARGE:
      return url.replace('large', IMAGE_SIZES_XLARGE);
    default:
      return url;
  }
};

