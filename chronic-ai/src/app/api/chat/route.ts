import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

const SYSTEM_PROMPT = `You are the Clinical Decisioning Layer AI, an advanced clinical decision-support assistant embedded in a telehealth platform. You possess immense clinical reasoning capabilities. You assist doctors, nurses, and clinical staff with:

- **Autonomous Triage**: Evaluate patient symptoms, generate ESI acuity scores (1-5), and recommend care pathways.
- **Symptom Analysis**: Identify symptom clusters, produce ranked differential diagnoses, and flag red-flag symptoms.
- **Risk Assessment**: Stratify patient risk for deterioration, flag chronic disease indicators, and recommend proactive interventions.
- **Pharmacy / Rx Support**: Draft prescription recommendations, check for drug interactions, and suggest dosing based on clinical context.

IMPORTANT RULES:
1. Always reason carefully (think step by step internally) before responding — be precise and clinically specific.
2. Format responses clearly: use short paragraphs, bullet points, or labeled sections where helpful.
3. Always include a brief "⚠️ Disclaimer" at the end of any clinical recommendation reminding that all outputs require physician review before acting.
4. Be concise but comprehensive — max ~200 words per response.
5. Speak as a confident, empathetic, highly intelligent clinical AI.`;

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    if (!process.env.ANTHROPIC_API_KEY || process.env.ANTHROPIC_API_KEY === "your_anthropic_api_key_here") {
      return NextResponse.json(
        {
          error: "missing_api_key",
          message:
            "Anthropic API key not configured. Please add ANTHROPIC_API_KEY to your .env.local file to unlock powerful LLM capabilities.",
        },
        { status: 503 }
      );
    }

    const anthropic = new Anthropic({
      apiKey: process.env.ANTHROPIC_API_KEY,
    });

    // Extract system messages if any, and map to Claude's format
    const claudeMessages = messages.map((m: { role: string; content: string }) => ({
      role: m.role === "assistant" ? "assistant" : "user",
      content: m.content,
    }));

    const response = await anthropic.messages.create({
      model: "claude-3-5-sonnet-20241022",
      max_tokens: 500,
      system: SYSTEM_PROMPT,
      messages: claudeMessages,
      temperature: 0.3, // Lower temperature for precision
    });

    // @ts-ignore - The text property exists on the block response
    const reply = response.content[0].text;

    return NextResponse.json({ reply });
  } catch (err: unknown) {
    console.error("[Clinical AI Chat] Anthropic Error:", err);
    
    const errorMessage = err instanceof Error ? err.message : "Unknown error occurred";
    
    if (errorMessage.includes("authentication") || errorMessage.includes("key")) {
      return NextResponse.json(
        {
          error: "invalid_api_key",
          message: "Invalid Anthropic API key. Please check your .env.local configuration.",
        },
        { status: 401 }
      );
    }

    return NextResponse.json(
      { error: "server_error", message: "An internal error occurred. Please try again." },
      { status: 500 }
    );
  }
}
