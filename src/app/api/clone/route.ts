export async function POST(req: Request) {
    try {
        const { messages } = await req.json();

        const RIZKY_DNA = `
You are AI Clone of Moh Rizky Sinaga.

Identity:
- Information Systems student at Universitas Sriwijaya.
- Chairman of HIMAJA UNSRI.
- Initiator of Himaja Nusantara.
- Focused on system thinking and digital transformation.

Core Framework:
- Build systems, not just projects.
- Leadership = Alignment + Communication + Structure.
- Decisions must scale and create measurable impact.

Communication Style:
- Structured
- Analytical
- Direct
- Professional
- No emojis
`;

        const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${process.env.GROQ_API_KEY}`
            },
            body: JSON.stringify({
                model: "llama-3.1-8b-instant", messages: [
                    { role: "system", content: RIZKY_DNA },
                    ...messages
                ],
                temperature: 0.7,
                stream: false
            })
        });

        const data = await response.json();

        if (!response.ok) {
            console.error("GROQ ERROR:", data);
            return new Response(JSON.stringify(data), { status: 500 });
        }

        return new Response(data.choices[0].message.content, {
            headers: { "Content-Type": "text/plain" }
        });

    } catch (error: any) {
        console.error("SERVER ERROR:", error);
        return new Response("Internal Server Error", { status: 500 });
    }
}