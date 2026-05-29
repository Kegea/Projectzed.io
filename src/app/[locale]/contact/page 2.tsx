import { Metadata } from 'next';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with ProjectZed. Tell us about your business and we\'ll give you an honest answer about what you need.',
  alternates: {
    canonical: 'https://projectzed.io/contact',
  },
};

export default function ContactPage() {
  return <ContactForm />;
}
