'use server';

/**
 * @fileOverview Implements the AI flow to suggest the most suitable doctor or department
 *  based on the user's symptoms and medical history.
 *
 * - suggestDoctor - A function that handles the doctor suggestion process.
 * - SuggestDoctorInput - The input type for the suggestDoctor function.
 * - SuggestDoctorOutput - The return type for the suggestDoctor function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestDoctorInputSchema = z.object({
  symptomsDescription: z
    .string()
    .describe('A description of the symptoms the user is experiencing.'),
  medicalHistory: z
    .string()
    .optional()
    .describe('The user medical history, including pre-existing conditions and medications.'),
});
export type SuggestDoctorInput = z.infer<typeof SuggestDoctorInputSchema>;

const SuggestDoctorOutputSchema = z.object({
  suggestedDoctor: z.string().describe('The name of the suggested doctor.'),
  suggestedDepartment: z.string().describe('The name of the suggested department.'),
  reason: z.string().describe('The reason for the suggestion.'),
});
export type SuggestDoctorOutput = z.infer<typeof SuggestDoctorOutputSchema>;

export async function suggestDoctor(input: SuggestDoctorInput): Promise<SuggestDoctorOutput> {
  return suggestDoctorFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestDoctorPrompt',
  input: {schema: SuggestDoctorInputSchema},
  output: {schema: SuggestDoctorOutputSchema},
  prompt: `You are an AI assistant that suggests the most appropriate doctor and department based on the user's description of their symptoms and their medical history.

  Based on the following information, suggest a doctor and a department. Explain your reasoning.

  Symptoms description: {{{symptomsDescription}}}
  Medical history: {{{medicalHistory}}}

  Make sure to populate the doctor, department, and reason fields.
  `,
});

const suggestDoctorFlow = ai.defineFlow(
  {
    name: 'suggestDoctorFlow',
    inputSchema: SuggestDoctorInputSchema,
    outputSchema: SuggestDoctorOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
