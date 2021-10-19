import React, { useMemo } from 'react';

import { BACKEND_MEDIA_URI } from 'config';

import { ImageProps } from './Image.types';

export const Image = React.forwardRef<HTMLImageElement, ImageProps>(({ src = '', ...props }, ref): JSX.Element => {
    const correctSrc = useMemo(() => `${BACKEND_MEDIA_URI}/${src}`, [src]);

    return <img src={correctSrc} {...props} ref={ref} />;
});
Image.displayName = 'Image';
