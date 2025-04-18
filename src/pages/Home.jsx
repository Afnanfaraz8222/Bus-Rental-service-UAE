import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Container, Typography, Button, Grid, Card, CardContent, CardMedia, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import HotelIcon from '@mui/icons-material/Hotel';
import CelebrationIcon from '@mui/icons-material/Celebration';
import BusinessIcon from '@mui/icons-material/Business';
import FlightIcon from '@mui/icons-material/Flight';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';

const Home = () => {
  const location = useLocation();
  const [highlightedService, setHighlightedService] = useState(null);

  useEffect(() => {
    if (location.state?.scrollToService) {
      const serviceId = location.state.scrollToService;
      setHighlightedService(serviceId);
      
      // Remove the scrollToService from location state to prevent re-triggering
      window.history.replaceState({}, document.title);
      
      // Scroll to services section
      const servicesSection = document.getElementById('services-section');
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth' });
      }

      // Clear highlight after 2 seconds
      setTimeout(() => {
        setHighlightedService(null);
      }, 2000);
    }
  }, [location.state]);

  // Add search functionality
  useEffect(() => {
    const handleSearch = (event) => {
      const searchTerm = event.target.value.toLowerCase();
      if (!searchTerm) {
        setHighlightedService(null);
        return;
      }

      const matchingService = services.find(service => 
        service.title.toLowerCase().includes(searchTerm) ||
        service.description.toLowerCase().includes(searchTerm) ||
        service.features.some(feature => feature.toLowerCase().includes(searchTerm))
      );

      if (matchingService) {
        setHighlightedService(matchingService.id);
        const servicesSection = document.getElementById('services-section');
        if (servicesSection) {
          servicesSection.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        setHighlightedService(null);
      }
    };

    const searchInput = document.querySelector('input[type="search"]');
    if (searchInput) {
      searchInput.addEventListener('input', handleSearch);
      return () => searchInput.removeEventListener('input', handleSearch);
    }
  }, []);

  // Add click handler to clear highlight
  useEffect(() => {
    const clearHighlight = () => {
      setHighlightedService(null);
    };

    window.addEventListener('click', clearHighlight);
    return () => window.removeEventListener('click', clearHighlight);
  }, []);

  const services = [
    {
      id: 1,
      title: 'Airport Transfers',
      description: 'Punctual and comfortable airport transfer services. We ensure you reach your flight on time or get to your destination smoothly after landing.',
      features: [
        'Flight tracking',
        'Door-to-door service',
        'Luggage assistance',
        'Meet & greet option',
        'Competitive rates'
      ],
      icon: <FlightIcon sx={{ fontSize: 40 }} />,
      image: 'https://images.unsplash.com/photo-1557223562-6c77ef16210f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2Nob29sJTIwYnVzfGVufDB8fDB8fHww'
    },
    {
      id: 2,
      title: 'Hotel Transfers',
      description: 'Reliable and comfortable transportation between hotels and various destinations. We ensure timely pickups and drop-offs for a stress-free travel experience.',
      features: [
        'Airport-hotel transfers',
        '24/7 availability',
        'Luggage assistance',
        'Meet and greet service',
        'Direct non-stop service'
      ],
      icon: <HotelIcon sx={{ fontSize: 40 }} />,
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWwlMjBidXN8ZW58MHx8MHx8fDA%3D'
    },
    {
      id: 3,
      title: 'Event Transportation',
      description: 'Comprehensive transportation solutions for events of all sizes. From weddings to corporate events, we handle the logistics of guest transportation.',
      features: [
        'Wedding shuttles',
        'Corporate event transport',
        'Coordinated scheduling',
        'Multiple pickup locations',
        'Event-specific planning'
      ],
      icon: <CelebrationIcon sx={{ fontSize: 40 }} />,
      image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZXZlbnQlMjBidXN8ZW58MHx8MHx8fDA%3D'
    },
    {
      id: 4,
      title: 'Sports Events',
      description: 'Specialized transportation for sports teams, fans, and tournament organizers. We ensure comfortable and timely transport to matches, tournaments, and training sessions.',
      features: [
        'Team transportation',
        'Fan group shuttles',
        'Equipment handling',
        'Tournament logistics',
        'Flexible scheduling'
      ],
      icon: <SportsSoccerIcon sx={{ fontSize: 40 }} />,
      image: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNwb3J0cyUyMGJ1c3xlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      id: 5,
      title: 'Corporate Services',
      description: 'Tailored transportation solutions for businesses. Regular employee shuttles, client transportation, and corporate event services with professional standards.',
      features: [
        'Employee shuttle services',
        'Client transportation',
        'Conference shuttles',
        'Corporate accounts',
        'Customized scheduling'
      ],
      icon: <BusinessIcon sx={{ fontSize: 40 }} />,
      image: 'https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNvcnBvcmF0ZSUyMGJ1c3xlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      id: 6,
      title: 'City Tours',
      description: 'Experience the city\'s highlights with our comfortable and guided tour services. Perfect for tourists, families, and groups wanting to explore the city\'s attractions.',
      features: [
        'Professional tour guides',
        'Flexible itineraries',
        'Air-conditioned vehicles',
        'Multiple stops at attractions',
        'Full-day and half-day options'
      ],
      icon: <DirectionsBusIcon sx={{ fontSize: 40 }} />,
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJ1c3xlbnwwfHwwfHx8MA%3D%3D'
    }
  ];

  const faqs = [
    {
      question: "How far in advance should I book a bus?",
      answer: "We recommend booking at least 2-3 weeks in advance to ensure availability, especially during peak seasons. However, we also accommodate last-minute bookings based on availability."
    },
    {
      question: "What types of buses do you offer?",
      answer: "We offer a variety of buses including luxury coaches, mini buses, and standard buses. Each vehicle is equipped with modern amenities and regularly maintained for your comfort and safety."
    },
    {
      question: "Do you provide drivers with the rentals?",
      answer: "Yes, all our bus rentals come with professional, licensed drivers who have extensive experience and knowledge of the routes."
    },
    {
      question: "What is included in the rental price?",
      answer: "Our rental prices typically include the vehicle, driver, fuel, insurance, and basic amenities. Additional services can be arranged based on your specific needs."
    },
    {
      question: "Are your buses available for long-distance travel?",
      answer: "Yes, we offer services for both short and long-distance travel. Our buses are well-maintained and equipped for comfortable long-distance journeys."
    },
    {
      question: "Do you offer 24/7 customer support?",
      answer: "Yes, we provide 24/7 customer support for all our services. You can reach us anytime for assistance or emergency support."
    }
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          height: '100vh',
          backgroundImage: 'url("https://images.unsplash.com/photo-1570125909517-53cb21c89ff2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YnVzfGVufDB8fDB8fHww")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7))',
          },
        }}
      >
        <Container
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            zIndex: 1,
            textAlign: 'center',
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h1"
              sx={{
                color: 'white',
                fontWeight: 'bold',
                mb: 2,
                fontSize: { xs: '2.5rem', md: '4rem' },
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
              }}
            >
              Premium Bus Rental Services
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: 'white',
                mb: 4,
                fontSize: { xs: '1.1rem', md: '1.3rem' },
                textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                maxWidth: '800px',
                mx: 'auto',
                lineHeight: 1.8,
                letterSpacing: '0.3px',
                opacity: 0.95,
              }}
            >
              Discover excellence in transportation with our premium fleet of buses and vans. From corporate events to tourism, we deliver unmatched comfort, reliability, and professional service. Available 24/7 across Dubai and the UAE, making every journey memorable and stress-free.
            </Typography>
            <Button
              component={Link}
              to="/fleet"
              variant="contained"
              size="large"
              sx={{
                backgroundColor: '#3498DB',
                color: 'white',
                '&:hover': {
                  backgroundColor: '#2980B9'
                },
                px: 4,
                py: 1.5,
                fontSize: '1.2rem',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              }}
            >
              Explore Our Bus Gallery
            </Button>
          </motion.div>
        </Container>
      </Box>

      {/* Services Section */}
      <Box id="services-section" sx={{ backgroundColor: 'grey.50', py: 8 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            component="h2"
            align="center"
            sx={{ 
              mb: 6, 
              fontWeight: 'bold',
              color: 'primary.main',
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: '-10px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '80px',
                height: '4px',
                backgroundColor: '#3498DB',
                borderRadius: '2px',
              }
            }}
          >
            Our Services
          </Typography>
          <Grid container spacing={3} alignItems="stretch">
            {services.map((service, index) => (
              <Grid item xs={12} sm={6} lg={4} key={service.id} sx={{ display: 'flex' }}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  style={{ width: '100%' }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'all 0.3s',
                      '&:hover': {
                        transform: 'translateY(-10px)',
                        boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                      },
                      borderRadius: '12px',
                      overflow: 'hidden',
                      border: highlightedService === service.id ? '2px solid #3498DB' : 'none',
                      boxShadow: highlightedService === service.id ? '0 0 15px rgba(52, 152, 219, 0.3)' : 'none',
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="200"
                      image={service.image}
                      alt={service.title}
                      sx={{
                        transition: 'transform 0.3s',
                        '&:hover': {
                          transform: 'scale(1.05)',
                        },
                      }}
                    />
                    <CardContent 
                      sx={{ 
                        flexGrow: 1, 
                        p: 2.5,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        height: '100%',
                      }}
                    >
                      <Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                          <Box sx={{ 
                            mr: 1.5, 
                            backgroundColor: 'primary.main',
                            borderRadius: '50%',
                            p: 0.8,
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}>
                            {service.icon}
                          </Box>
                          <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                            {service.title}
                          </Typography>
                        </Box>
                        <Typography 
                          variant="body2" 
                          color="text.secondary" 
                          paragraph
                          sx={{ 
                            mb: 1.5, 
                            lineHeight: 1.6,
                            minHeight: '80px'
                          }}
                        >
                          {service.description}
                        </Typography>
                        <Box component="ul" sx={{ pl: 2, mb: 2, minHeight: '150px' }}>
                          {service.features.map((feature, idx) => (
                            <Typography
                              key={idx}
                              component="li"
                              variant="body2"
                              color="text.secondary"
                              sx={{ mb: 0.5 }}
                            >
                              {feature}
                            </Typography>
                          ))}
                        </Box>
                      </Box>
                      <Button
                        component={Link}
                        to="/contact"
                        variant="contained"
                        fullWidth
                        sx={{
                          backgroundColor: 'grey.800',
                          color: 'white',
                          '&:hover': {
                            backgroundColor: 'grey.900'
                          },
                          py: 0.8,
                        }}
                      >
                        Book Now
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* FAQ Section */}
      <Box sx={{ py: 8, backgroundColor: 'grey.50' }}>
        <Container>
          <Typography
            variant="h3"
            component="h2"
            align="center"
            sx={{ 
              mb: 6, 
              fontWeight: 'bold',
              color: 'primary.main',
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: '-10px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '80px',
                height: '4px',
                backgroundColor: '#3498DB',
                borderRadius: '2px',
              }
            }}
          >
            Frequently Asked Questions
          </Typography>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Box sx={{ maxWidth: '800px', mx: 'auto' }}>
              {faqs.map((faq, index) => (
                <Accordion
                  key={index}
                  sx={{
                    mb: 2,
                    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                    '&:before': {
                      display: 'none',
                    },
                    borderRadius: '8px !important',
                    overflow: 'hidden',
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    sx={{
                      backgroundColor: 'background.paper',
                      '&:hover': {
                        backgroundColor: 'grey.50',
                      },
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 500,
                        color: 'primary.main',
                      }}
                    >
                      {faq.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      sx={{
                        color: 'text.secondary',
                        lineHeight: 1.6,
                      }}
                    >
                      {faq.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* Call to Action */}
      <Box
        sx={{
          backgroundColor: '#34495E',
          backgroundImage: 'linear-gradient(135deg, #34495E 0%, #2C3E50 100%)',
          py: 5,
          textAlign: 'center',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(52, 73, 94, 0.1)',
            backgroundImage: 'linear-gradient(45deg, rgba(255,255,255,0.05) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.05) 75%, transparent 75%, transparent)',
            backgroundSize: '50px 50px',
          }
        }}
      >
        <Container sx={{ position: 'relative', zIndex: 1 }}>
          <Typography 
            variant="h4" 
            component="h2" 
            sx={{ 
              mb: 3,
              color: 'white',
              fontWeight: 'bold',
              textShadow: '0 2px 4px rgba(0,0,0,0.1)',
            }}
          >
            Ready to Book Your Journey?
          </Typography>
          <Button
            component={Link}
            to="/contact"
            variant="contained"
            size="large"
            sx={{
              backgroundColor: '#3498DB',
              color: 'white',
              '&:hover': {
                backgroundColor: '#2980B9',
                transform: 'translateY(-2px)',
              },
              px: 4,
              py: 1.2,
              fontSize: '1.2rem',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              transition: 'all 0.3s ease',
            }}
          >
            Get Started Now
          </Button>
        </Container>
      </Box>

      {/* 24/7 Service Section */}
      <Box 
        sx={{ 
          py: 4,
          backgroundColor: 'primary.main',
          color: 'white',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: 'center',
                justifyContent: 'center',
                gap: 3,
                textAlign: 'center',
              }}
            >
              <AccessTimeIcon 
                sx={{ 
                  fontSize: '3.5rem',
                  color: '#3498DB',
                  backgroundColor: 'white',
                  borderRadius: '50%',
                  p: 0.8,
                }}
              />
              <Box>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 'bold',
                    color: 'white',
                    mb: 0.5,
                  }}
                >
                  24/7 Service Available
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.9)',
                    fontWeight: 'normal',
                    fontSize: '1.1rem',
                  }}
                >
                  We're here to serve you around the clock, every day of the week
                </Typography>
              </Box>
            </Box>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
};

export default Home; 