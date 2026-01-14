


const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const SYSTEM_INSTRUCTION = `
You are the AI Patient Navigator for St. Meridian Medical Center. 
Your goal is to help users find information about our hospital, doctors, and general health inquiries.
- If users ask about symptoms, give general advice but ALWAYS advise them to see a doctor for diagnosis.
- You can mention our specialties: Cardiology, Neurology, Pediatrics, Orthopedics.
- If users want to book an appointment, guide them to the 'Book Appointment' page.
- Be professional, empathetic, and helpful.
- Keep responses relatively concise.
`;

export const getGeminiResponse = async (history: ChatMessage[], message: string): Promise<string> => {
  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...history.map(m => ({
          role: m.role,
          parts: [{ text: m.text }]
        })),
        { role: 'user', parts: [{ text: message }] }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    return response.text || "I'm sorry, I couldn't process that. Please try again or call our helpdesk.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I am currently experiencing some technical difficulties. Please contact the hospital directly at (555) 123-4567.";
  }
};
