import { useState } from 'react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  containerClassName?: string;
}

export default function Image({ src, alt, className, containerClassName, ...props }: ImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={cn("relative overflow-hidden bg-white/5 w-full h-full", containerClassName)}>
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ 
          opacity: isLoaded ? 1 : 0,
          scale: isLoaded ? 1 : 1.05
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        onLoad={() => setIsLoaded(true)}
        className={cn("w-full h-full object-cover", className)}
        {...props}
      />
    </div>
  );
}
