import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
    try {
        console.log('Received crop analysis request');
        const { image } = await req.json() as { image: string };
        console.log('Image received, length:', image?.length);

        if (!image) {
            return NextResponse.json(
                { error: 'Image is required' },
                { status: 400 }
            );
        }

        const response = await openai.chat.completions.create({
            model: "gpt-4o",
            messages: [
                {
                    role: "system",
                    content: "You are an expert agricultural scientist. Analyze the crop image provided and identify any diseases or issues. Provide the output in strict JSON format with the following fields: 'disease' (name of disease or 'Healthy'), 'confidence' (percentage string), 'severity' (Low, Moderate, High), and 'treatment' (concise advice). If the image is not a crop, return 'disease': 'Not a crop', 'confidence': '0%', 'severity': 'N/A', 'treatment': 'Please upload a valid crop image.'."
                },
                {
                    role: "user",
                    content: [
                        { type: "text", text: "Analyze this crop image." },
                        {
                            type: "image_url",
                            image_url: {
                                "url": image,
                            },
                        },
                    ],
                },
            ],
            response_format: { type: "json_object" },
            max_tokens: 300,
        });

        console.log('OpenAI response received');
        const result = JSON.parse(response.choices[0].message.content || "{}");
        console.log('Parsed result:', result);
        return NextResponse.json(result);

    } catch (error) {
        console.error('Error analyzing crop:', error);
        return NextResponse.json(
            { error: 'Failed to analyze image' },
            { status: 500 }
        );
    }
}
