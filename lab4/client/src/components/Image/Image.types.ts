import React from 'react';

export type ImageProps = Omit<
    React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>,
    'ref'
>;
