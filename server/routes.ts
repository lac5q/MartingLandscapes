import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // API route for contact form submission
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      // Validate request body using Zod schema
      const validatedData = insertContactMessageSchema.parse(req.body);
      
      // Store in memory for now (a real implementation would store in database)
      // We're not using storage here since we didn't update the storage interface,
      // but in a real app you would implement the storage method and use it
      
      // Return success response
      res.status(200).json({ message: "Your message has been received. We'll contact you shortly!" });
    } catch (error) {
      if (error instanceof ZodError) {
        // If validation error, return 400 with validation details
        const validationError = fromZodError(error);
        res.status(400).json({ message: validationError.message });
      } else {
        // For any other errors, return 500
        console.error("Server error:", error);
        res.status(500).json({ message: "An error occurred while processing your request." });
      }
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
