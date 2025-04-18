import { Container, Typography, Grid, Card, CardContent, CardMedia, Box, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const BusGallery = () => {
  const vehicles = [
    {
      id: 1,
      name: 'Toyota Hiace Standard',
      description: 'Perfect for small groups, offering comfort and reliability for up to 13 passengers.',
      features: ['13 Seats', 'Air Conditioning', 'Comfortable Seating', 'Luggage Space'],
      image: '/src/assets/images/hiace.jfif',
    },
    {
      id: 2,
      name: 'Toyota Coaster',
      description: 'Ideal for medium-sized groups, providing spacious and comfortable transportation.',
      features: ['22 Seats', 'Air Conditioning', 'Comfortable Seating', 'Large Luggage Space'],
      image: '/src/assets/images/coaster.webp',
    },
    {
      id: 3,
      name: 'Mitsubishi Outlander',
      description: 'Luxury SUV perfect for small groups and VIP transport.',
      features: ['7 Seats', 'Luxury Interior', 'Entertainment System', 'Privacy Glass'],
      image: '/src/assets/images/outlander.webp',
    },
    {
      id: 4,
      name: '35 Seater Luxury Bus',
      description: 'Spacious and comfortable bus ideal for large groups and long journeys.',
      features: ['35 Seats', 'Spacious Interior', 'Onboard Restroom', 'Entertainment System'],
      image: '/src/assets/images/bus 35 seator.webp',
    },
    {
      id: 5,
      name: '50 Seater Luxury Bus',
      description: 'Our largest capacity bus perfect for big events and tours.',
      features: ['50 Seats', 'Premium Seating', 'Climate Control', 'Large Luggage Compartments'],
      image: '/src/assets/images/bus 50 seat.webp',
    },
    {
      id: 6,
      name: 'Toyota Hiace VIP',
      description: 'Premium version of our Hiace with luxury features for executive transport.',
      features: ['8 Luxury Seats', 'Premium Interior', 'Advanced Sound System', 'Privacy Glass'],
      image: '/src/assets/images/hiace 2.jfif',
    }
  ];

  return (
    <Container sx={{ py: 8 }}>
      <Typography
        variant="h2"
        align="center"
        gutterBottom
        sx={{
          fontWeight: 'bold',
          mb: 6,
          fontSize: { xs: '2.5rem', md: '3.5rem' },
        }}
      >
        Our Bus Gallery
      </Typography>
      <Typography
        variant="h6"
        align="center"
        sx={{ mb: 8, color: 'text.secondary' }}
      >
        Choose from our wide range of luxury vehicles
      </Typography>

      <Grid container spacing={4}>
        {vehicles.map((vehicle, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'scale(1.02)',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    height: 200,
                    objectFit: 'cover',
                    width: '100%'
                  }}
                  image={vehicle.image}
                  alt={vehicle.name}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {vehicle.name}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                    {vehicle.description}
                  </Typography>
                  <Box sx={{ mt: 2 }}>
                    {vehicle.features.map((feature, idx) => (
                      <Typography key={idx} variant="body2" sx={{ mb: 1 }}>
                        • {feature}
                      </Typography>
                    ))}
                  </Box>
                </CardContent>
                <Box sx={{ p: 2 }}>
                  <Button
                    component={Link}
                    to="/contact"
                    variant="contained"
                    fullWidth
                    sx={{
                      backgroundColor: 'primary.main',
                      '&:hover': {
                        backgroundColor: 'primary.dark',
                      },
                    }}
                  >
                    Book Now
                  </Button>
                </Box>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      <Box
        sx={{
          mt: 8,
          textAlign: 'center',
          backgroundColor: 'grey.100',
          p: 4,
          borderRadius: 2,
        }}
      >
        <Typography variant="h5" component="h2" gutterBottom>
          Can't Find What You're Looking For?
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          Contact us for custom solutions and special requirements
        </Typography>
        <Button
          component={Link}
          to="/contact"
          variant="contained"
          size="large"
          sx={{
            backgroundColor: 'primary.main',
            '&:hover': {
              backgroundColor: 'primary.dark',
            },
          }}
        >
          Contact Us
        </Button>
      </Box>
    </Container>
  );
};

export default BusGallery; 