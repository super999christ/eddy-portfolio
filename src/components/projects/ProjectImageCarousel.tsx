import { useState } from 'react';
import { Box, IconButton, Modal, ModalClose, ModalOverflow, Stack } from '@mui/joy';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { useMobileMode } from '@/components/Responsive';

interface ProjectImageCarouselProps {
  images: string[];
  title: string;
}

export default function ProjectImageCarousel({ images, title }: ProjectImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const mobile = useMobileMode();

  if (!images || images.length === 0) {
    return null;
  }

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const openLightbox = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLightboxOpen(true);
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
          onClick={openLightbox}
          sx={{
            width: '100%',
            height: mobile ? '200px' : '280px',
            objectFit: 'cover',
            display: 'block',
            transition: 'opacity 0.3s ease',
            cursor: 'zoom-in',
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
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(index);
              }}
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

      <Modal
        open={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        sx={{ zIndex: 1300 }}
      >
        <ModalOverflow>
          <Box
            onClick={(e) => e.stopPropagation()}
            sx={{
              position: 'fixed',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0.9)',
              padding: mobile ? '2rem' : '4rem',
            }}
          >
            <ModalClose
              variant="solid"
              size="lg"
              sx={{
                top: mobile ? '1rem' : '1.5rem',
                right: mobile ? '1rem' : '1.5rem',
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                color: 'white',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.3)',
                },
              }}
            />

            <Box
              component="img"
              src={images[currentIndex]}
              alt={`${title} - Image ${currentIndex + 1} (enlarged)`}
              sx={{
                maxWidth: '100%',
                maxHeight: '100%',
                objectFit: 'contain',
                borderRadius: '8px',
                boxShadow: 'lg',
              }}
            />

            {images.length > 1 && (
              <>
                <IconButton
                  onClick={prevImage}
                  sx={{
                    position: 'absolute',
                    left: mobile ? 8 : 24,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    backgroundColor: 'rgba(255, 255, 255, 0.15)',
                    color: 'white',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.3)',
                    },
                    borderRadius: '50%',
                  }}
                  size="lg"
                >
                  <IoIosArrowBack size="24px" />
                </IconButton>

                <IconButton
                  onClick={nextImage}
                  sx={{
                    position: 'absolute',
                    right: mobile ? 8 : 24,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    backgroundColor: 'rgba(255, 255, 255, 0.15)',
                    color: 'white',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.3)',
                    },
                    borderRadius: '50%',
                  }}
                  size="lg"
                >
                  <IoIosArrowForward size="24px" />
                </IconButton>
              </>
            )}
          </Box>
        </ModalOverflow>
      </Modal>
    </Stack>
  );
}