import React from 'react';

/**
 * NextImage Component
 * Implements next/image API signature with remote image handling and fallback
 */
export default function NextImage({
  src,
  alt = '',
  fill = false,
  width,
  height,
  className = '',
  style = {},
  priority = false,
  quality = 75,
  ...props
}) {
  const combinedStyle = {
    ...style,
    ...(fill
      ? {
          position: 'absolute',
          height: '100%',
          width: '100%',
          inset: 0,
          objectFit: style.objectFit || 'cover',
        }
      : {}),
  };

  return (
    <img
      src={src}
      alt={alt}
      width={!fill ? width : undefined}
      height={!fill ? height : undefined}
      loading={priority ? 'eager' : 'lazy'}
      className={`${fill ? 'object-cover' : ''} ${className}`.trim()}
      style={combinedStyle}
      {...props}
    />
  );
}
