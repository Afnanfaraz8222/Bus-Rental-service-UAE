import { Container, Typography, Grid, Box, Paper, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import SecurityIcon from '@mui/icons-material/Security';
import StarIcon from '@mui/icons-material/Star';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const About = () => {
  const features = [
    {
      icon: <DirectionsBusIcon sx={{ fontSize: 40 }} />,
      title: 'Modern Bus Gallery',
      description: 'Our vehicles are regularly maintained and updated to ensure your comfort and safety.',
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 40 }} />,
      title: 'Safety First',
      description: 'We prioritize the safety of our passengers with well-trained drivers and modern safety features.',
    },
    {
      icon: <StarIcon sx={{ fontSize: 40 }} />,
      title: 'Quality Service',
      description: 'We are committed to providing excellent service and ensuring customer satisfaction.',
    },
    {
      icon: <SupportAgentIcon sx={{ fontSize: 40 }} />,
      title: '24/7 Support',
      description: 'Our customer support team is available around the clock to assist you with your needs.',
    },
  ];

  return (
    <Container sx={{ py: 8 }}>
      <Typography
        variant="h3"
        component="h1"
        align="center"
        sx={{ mb: 6, fontWeight: 'bold' }}
      >
        About Us
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Paper elevation={3} sx={{ p: 4 }}>
              <Typography variant="h5" gutterBottom>
                Our Story
              </Typography>
              <Typography paragraph>
                Welcome to BusRental, your premier transportation service provider in the UAE.
                With years of experience in the industry, we have built a reputation for
                reliability, comfort, and exceptional service.
              </Typography>
              <Typography paragraph>
                Our journey began with a simple mission: to provide safe, comfortable, and
                reliable transportation solutions for individuals and businesses. Today, we
                proudly serve a diverse clientele, from corporate clients to tourists,
                ensuring their transportation needs are met with the highest standards of
                quality and professionalism.
              </Typography>
            </Paper>
          </motion.div>
        </Grid>

        <Grid item xs={12}>
          <Typography
            variant="h4"
            align="center"
            sx={{ mb: 6, fontWeight: 'bold' }}
          >
            Why Choose Us
          </Typography>
          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Paper
                    elevation={3}
                    sx={{
                      p: 4,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                    }}
                  >
                    <Avatar
                      sx={{
                        width: 80,
                        height: 80,
                        mb: 2,
                        backgroundColor: 'primary.main',
                      }}
                    >
                      {feature.icon}
                    </Avatar>
                    <Typography variant="h6" gutterBottom>
                      {feature.title}
                    </Typography>
                    <Typography color="text.secondary">
                      {feature.description}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Paper elevation={3} sx={{ p: 4 }}>
              <Typography variant="h5" gutterBottom>
                Our Mission
              </Typography>
              <Typography paragraph>
                Our mission is to provide exceptional transportation services that exceed
                our customers' expectations. We achieve this through:
              </Typography>
              <Box component="ul" sx={{ pl: 4 }}>
                <Typography component="li" paragraph>
                  Maintaining a modern and well-maintained fleet of vehicles
                </Typography>
                <Typography component="li" paragraph>
                  Employing professional and experienced drivers
                </Typography>
                <Typography component="li" paragraph>
                  Offering competitive pricing and flexible service options
                </Typography>
                <Typography component="li" paragraph>
                  Ensuring customer satisfaction through excellent service
                </Typography>
              </Box>
            </Paper>
          </motion.div>
        </Grid>

        <Grid item xs={12}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Paper elevation={3} sx={{ p: 4 }}>
              <Typography variant="h5" gutterBottom>
                Our Values
              </Typography>
              <Typography paragraph>
                At BusRental, we are guided by a set of core values that define who we are
                and how we operate:
              </Typography>
              <Box component="ul" sx={{ pl: 4 }}>
                <Typography component="li" paragraph>
                  <strong>Integrity:</strong> We conduct our business with honesty and
                  transparency.
                </Typography>
                <Typography component="li" paragraph>
                  <strong>Excellence:</strong> We strive for excellence in everything we do.
                </Typography>
                <Typography component="li" paragraph>
                  <strong>Customer Focus:</strong> We put our customers at the center of
                  everything we do.
                </Typography>
                <Typography component="li" paragraph>
                  <strong>Innovation:</strong> We continuously improve our services and
                  embrace new technologies.
                </Typography>
              </Box>
            </Paper>
          </motion.div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About; 