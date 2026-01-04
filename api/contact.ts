import type { VercelRequest, VercelResponse } from '@vercel/node';
import { z } from 'zod';

// Contact message validation schema (simplified from drizzle schema)
const contactMessageSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone is required"),
  service: z.string().optional(),
  message: z.string().optional(),
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Validate request body
    const validatedData = contactMessageSchema.parse(req.body);

    // In production, you could:
    // - Send an email notification
    // - Store in a database (Vercel Postgres, Supabase, etc.)
    // - Send to a CRM
    // For now, just log and return success
    console.log('Contact form submission:', validatedData);

    return res.status(200).json({
      message: "Your message has been received. We'll contact you shortly!"
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      const messages = error.errors.map(e => e.message).join(', ');
      return res.status(400).json({ message: messages });
    }

    console.error('Server error:', error);
    return res.status(500).json({
      message: 'An error occurred while processing your request.'
    });
  }
}
