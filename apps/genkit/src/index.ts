// @ts-expect-error for some reason, typescript is not recognizing the import, but it works fine
import { dataConnectTools } from '@genkit-ai/firebase/beta/data-connect';
import { googleAI } from '@genkit-ai/googleai';
import { defineSecret } from 'firebase-functions/params';
import { onCallGenkit } from 'firebase-functions/v2/https';
import { initializeApp } from 'firebase/app';
import { genkit, z } from 'genkit';

const geminiKey = defineSecret('GEMINI_API_KEY');

const inputSchema = z.object({
  useReadHistory: z.boolean().optional().default(true).describe(''),
  ingredient: z.string().describe('Main ingredient for the recipe'),
  areasOfInterest: z.array(z.string()).optional(),
  mood: z.string().optional(),
  genres: z.array(z.string().optional()),
});

const firebaseApp = initializeApp({
  apiKey: 'AIzaSyB5XYrSMA-3XQYXDrOUqOencsBXd0_-OQQ',
  authDomain: 'ai-agent-for-libarry.firebaseapp.com',
  projectId: 'ai-agent-for-libarry',
  messagingSenderId: '689128396805',
  appId: '1:689128396805:web:8b3ece84467982db31646c',
});

// Initialize Genkit with the Google AI plugin
const ai = genkit({
  plugins: [
    googleAI(),
    dataConnectTools({
      name: 'db',
      configFile: './tools.json',
      firebaseApp: firebaseApp,
    }),
  ],
  model: googleAI.model('gemini-2.5-flash'),
});

export const bookRecommendationFlow = ai.defineFlow(
  {
    name: 'Book Recommendation Flow',
    inputSchema: inputSchema,
    outputSchema: z.string().describe('Recommended book title'),
  },
  async (input) => {
    // Create a prompt based on the input
    const prompt = `You are an AI assistant that recommends books based on user preferences, reading history, mood and genre.

    User Preferences:
    - Ingredient: ${input.ingredient}
    - Areas of Interest: ${input.areasOfInterest?.join(', ') || 'None'}
    - Mood: ${input.mood || 'Neutral'}
    - Genres: ${input.genres?.join(', ') || 'Any'}
    - Use Reading History: ${input.useReadHistory ? 'Yes' : 'No'}

    User the available tools to recommend a book that matches the user's preferences. 
    
    If the user has a reading history, consider it to provide a more personalized recommendation, unless the user specifies not to use it.
    
    
    When all the information is gathered, return a single book title that best matches the user's preferences. If you cannot find a suitable book, return "No suitable book found."`;

    // Generate structured recipe data using the same schema
    const { output } = await ai.generate({
      prompt,
      output: { schema: z.string() },
      tools: ['db/searchForBooksWithQuery', 'db/userReadHistory'],
    });

    if (!output) {
      throw new Error('Failed to generate recipe');
    }

    return output;
  }
);

export const bookRecomendation = onCallGenkit(
  {
    secrets: [geminiKey],
  },
  bookRecommendationFlow
);
