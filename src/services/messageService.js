// Message service for handling contact form submissions
import emailjs from '@emailjs/browser';

// Initialize EmailJS with public key
const PUBLIC_KEY = "GzrwIMUbEom6uN6wT";
const EMAIL_SERVICE_ID = "service_2arpcbt";  // Service ID
const EMAIL_TEMPLATE_ID = "template_uwwafxb"; // Template ID

// Initialize EmailJS
emailjs.init(PUBLIC_KEY);

export const messageService = {
  sendMessage: async (messageData) => {
    try {
      // Basic validation
      if (!messageData.name || !messageData.email || !messageData.phone || !messageData.message) {
        throw new Error('All fields are required');
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(messageData.email)) {
        throw new Error('Please enter a valid email address');
      }

      // Phone validation - more lenient
      const phoneRegex = /^[0-9+\-\s()]*$/;
      if (!phoneRegex.test(messageData.phone)) {
        throw new Error('Please enter a valid phone number');
      }

      // For now, just return success
      return {
        success: true,
        message: 'Your message has been received. We will contact you soon.'
      };
    } catch (error) {
      throw new Error(error.message || 'Failed to process your message. Please try again.');
    }
  }
}; 