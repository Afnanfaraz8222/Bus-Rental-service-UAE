import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  IconButton,
  Alert,
  Snackbar,
  CircularProgress,
  Link,
} from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallIcon from '@mui/icons-material/Call';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    user_phone: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    // Log the form data before sending
    console.log('Form Data:', formData);

    emailjs
      .sendForm('service_2arpcbt', 'template_tk81p84', form.current, {
        publicKey: 'GzrwIMUbEom6uN6wT',
      })
      .then(
        (result) => {
          console.log('EmailJS Response:', result);
          setSnackbar({
            open: true,
            message: 'Your message has been sent successfully!',
            severity: 'success'
          });
          setFormData({
            user_name: '',
            user_email: '',
            user_phone: '',
            message: ''
          });
        },
        (error) => {
          console.error('EmailJS Error:', error);
          setSnackbar({
            open: true,
            message: 'Failed to send message. Please try again.',
            severity: 'error'
          });
        },
      )
      .finally(() => {
        setLoading(false);
      });
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  // Contact buttons with standard MUI Button style
  const ContactButtons = () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 3, alignItems: 'center' }}>
      <Button
        variant="contained"
        startIcon={<WhatsAppIcon />}
        href="https://wa.me/923315522484" 
        target="_blank" 
        rel="noopener noreferrer"
        sx={{
          bgcolor: '#25D366',
          color: 'white',
          '&:hover': {
            bgcolor: '#128C7E',
          },
          width: '80%',
          py: 1.5,
        }}
      >
        Message Us on WhatsApp
      </Button>

      <Button
        variant="contained"
        startIcon={<CallIcon />}
        href="tel:+923315522484"
        sx={{
          bgcolor: 'primary.main',
          '&:hover': {
            bgcolor: 'primary.dark',
          },
          width: '80%',
          py: 1.5,
        }}
      >
        Call Us Now
      </Button>
    </Box>
  );

  return (
    <Box sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container>
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
          Contact Us
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: 3,
              }}
            >
              <Typography variant="h4" gutterBottom>
                Get in Touch
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                We're here to help and answer any questions you might have. We look forward to hearing from you.
              </Typography>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <IconButton sx={{ bgcolor: 'primary.main', color: 'white' }}>
                  <AccessTimeIcon />
                </IconButton>
                <Box>
                  <Typography variant="h6">24/7 Service Available</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Open all days including holidays
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <IconButton sx={{ bgcolor: 'primary.main', color: 'white' }}>
                  <PhoneIcon />
                </IconButton>
                <Box>
                  <Typography variant="h6">Phone</Typography>
                  <Typography variant="body2" color="text.secondary">
                    +92 331 5522484
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <IconButton sx={{ bgcolor: 'primary.main', color: 'white' }}>
                  <EmailIcon />
                </IconButton>
                <Box>
                  <Typography variant="h6">Email</Typography>
                  <Typography variant="body2" color="text.secondary">
                    info@busrental.com
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <IconButton sx={{ bgcolor: 'primary.main', color: 'white' }}>
                  <LocationOnIcon />
                </IconButton>
                <Box>
                  <Typography variant="h6">Address</Typography>
                  <Typography variant="body2" color="text.secondary">
                    123 Business Street, City, Country
                  </Typography>
                </Box>
              </Box>

              <ContactButtons />
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                height: '100%',
              }}
            >
              <Typography variant="h4" gutterBottom>
                Send Message
              </Typography>
              <form ref={form} onSubmit={sendEmail}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Name"
                      name="user_name"
                      value={formData.user_name}
                      onChange={handleChange}
                      required
                      disabled={loading}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Email"
                      name="user_email"
                      type="email"
                      value={formData.user_email}
                      onChange={handleChange}
                      required
                      disabled={loading}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Phone"
                      name="user_phone"
                      value={formData.user_phone}
                      onChange={handleChange}
                      required
                      disabled={loading}
                      helperText="Include country code (e.g., +1 234 567 8900)"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Message"
                      name="message"
                      multiline
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      disabled={loading}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      fullWidth
                      disabled={loading}
                      sx={{
                        mt: 2,
                        py: 1.5,
                        fontSize: '1.1rem',
                      }}
                    >
                      {loading ? (
                        <CircularProgress size={24} color="inherit" />
                      ) : (
                        'Send Message'
                      )}
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>
        </Grid>

        <Snackbar
          open={snackbar.open}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity={snackbar.severity}
            sx={{ width: '100%' }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
};

export default Contact; 