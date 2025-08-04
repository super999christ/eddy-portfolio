import { useState } from 'react';
import { Box, IconButton, Stack } from '@mui/joy';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { useMobileMode } from '@/components/Responsive';

interface ProjectImageCarouselProps {
  images: string[];
  title: string;
}

export default function ProjectImageCarousel({ images, title }: ProjectImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const mobile = useMobileMode();

  if (!images || images.length === 0) {
    return null;
  }

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <Stack 
      direction="column" 
      gap={1} 
      sx={{ 
        minWidth: mobile ? "100%" : "400px",
        maxWidth: mobile ? "100%" : "500px",
      }}
    >
      <Box
        sx={{
          position: 'relative',
          borderRadius: '12px',
          overflow: 'hidden',
          backgroundColor: 'background.level1',
          border: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Box
          component="img"
          src={images[currentIndex]}
          alt={`${title} - Image ${currentIndex + 1}`}
          sx={{
            width: '100%',
            height: mobile ? '200px' : '280px',
            objectFit: 'cover',
            display: 'block',
            transition: 'opacity 0.3s ease',
          }}
        />
        
        {images.length > 1 && (
          <>
            <IconButton
              onClick={prevImage}
              sx={{
                position: 'absolute',
                left: 8,
                top: '50%',
                transform: 'translateY(-50%)',
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                color: 'white',
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.8)',
                },
                borderRadius: '50%',
                minHeight: '36px',
                minWidth: '36px',
              }}
              size="sm"
            >
              <IoIosArrowBack size="16px" />
            </IconButton>
            
            <IconButton
              onClick={nextImage}
              sx={{
                position: 'absolute',
                right: 8,
                top: '50%',
                transform: 'translateY(-50%)',
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                color: 'white',
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.8)',
                },
                borderRadius: '50%',
                minHeight: '36px',
                minWidth: '36px',
              }}
              size="sm"
            >
              <IoIosArrowForward size="16px" />
            </IconButton>
          </>
        )}
      </Box>
      
      {images.length > 1 && (
        <Stack 
          direction="row" 
          gap={0.5} 
          justifyContent="center" 
          alignItems="center"
        >
          {images.map((_, index) => (
            <Box
              key={index}
              onClick={() => setCurrentIndex(index)}
              sx={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                backgroundColor: index === currentIndex ? 'primary.500' : 'neutral.300',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                '&:hover': {
                  backgroundColor: index === currentIndex ? 'primary.600' : 'neutral.400',
                  transform: 'scale(1.2)',
                },
              }}
            />
          ))}
        </Stack>
      )}
    </Stack>
  );
}