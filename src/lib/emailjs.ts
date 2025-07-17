import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key
const initEmailJS = () => {
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  if (publicKey) {
    emailjs.init({
      publicKey: publicKey,
      // Optional: Add rate limiting
      limitRate: {
        id: 'app',
        throttle: 10000, // 10 seconds
      },
    });
  } else {
    console.error('EmailJS public key not found in environment variables');
  }
};

// Call initialization
initEmailJS();

export { emailjs };

// EmailJS configuration
export const emailConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  templates: {
    hero: import.meta.env.VITE_EMAILJS_HERO_TEMPLATE_ID || 'website_hero_form',
    contact: import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID || 'website_contact_form',
  },
};

// Template types for type safety
export type EmailTemplate = 'hero' | 'contact';

// Enhanced helper function to send emails with template selection
export const sendEmail = async (form: HTMLFormElement, template: EmailTemplate = 'hero') => {
  if (!emailConfig.publicKey) {
    throw new Error('EmailJS public key not configured');
  }

  if (!emailConfig.serviceId) {
    throw new Error('EmailJS service ID not configured');
  }

  const templateId = emailConfig.templates[template];
  if (!templateId) {
    throw new Error(`EmailJS template ID not configured for template: ${template}`);
  }

  // Add timestamp data to form
  const formData = new FormData(form);
  const now = new Date();
  formData.append('submission_date', now.toLocaleDateString());
  formData.append('submission_time', now.toLocaleTimeString());

  return emailjs.sendForm(
    emailConfig.serviceId,
    templateId,
    form,
    {
      publicKey: emailConfig.publicKey,
    }
  );
};

// Convenience functions for specific forms
export const sendHeroEmail = async (form: HTMLFormElement) => {
  return sendEmail(form, 'hero');
};

export const sendContactEmail = async (form: HTMLFormElement) => {
  return sendEmail(form, 'contact');
};