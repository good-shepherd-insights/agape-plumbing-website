import emailjs from '@emailjs/browser';

const emailConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID?.trim(),
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY?.trim(),
  templates: {
    hero: import.meta.env.VITE_EMAILJS_HERO_TEMPLATE_ID?.trim(),
    contact: import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID?.trim(),
  },
};

export type EmailTemplate = 'hero' | 'contact';

export const sendEmail = async (form: HTMLFormElement, template: EmailTemplate = 'hero') => {
  if (!emailConfig.publicKey || !emailConfig.serviceId || !emailConfig.templates[template]) {
    throw new Error('Website email configuration is incomplete. Please call (227) 223-9057.');
  }

  const fields = Object.fromEntries(new FormData(form).entries());
  const now = new Date();
  return emailjs.send(
    emailConfig.serviceId,
    emailConfig.templates[template],
    {
      ...fields,
      submission_date: now.toLocaleDateString(),
      submission_time: now.toLocaleTimeString(),
    },
    { publicKey: emailConfig.publicKey }
  );
};

export const sendHeroEmail = (form: HTMLFormElement) => sendEmail(form, 'hero');
export const sendContactEmail = (form: HTMLFormElement) => sendEmail(form, 'contact');
