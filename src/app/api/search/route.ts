import { BING_SEARCH_API_KEY, GROQ_API_KEY } from "@/app/constants/api.constants";
import { NextRequest, NextResponse } from "next/server";

// GROQ
const Groq = require("groq-sdk");
const groq = new Groq({
    apiKey: GROQ_API_KEY
});

//BING
const bing_api_key = BING_SEARCH_API_KEY
const BING_SEARCH_V7_ENDPOINT =  os.environ['BING_SEARCH_V7_ENDPOINT'] +"v7.0/search"



// POST request
export async function POST (req: NextRequest, res : NextResponse) {

    //Get the search query
    const {searchParams} = new URL(req.url);
    let searchQuery : string | null | undefined
    searchQuery = searchParams.get("query");

    //LLM handler
    let llmResponse = await LLMHandler(searchQuery)

    let data = { message: llmResponse }

    //Response
    return NextResponse.json(data, {
        status: 200,
    });
  }


//SEO Handler 

// LLM Handler
async function LLMHandler(searchQuery : string | null) {
    const completion = await groq.chat.completions.create({
        messages: [
            {
                role: "user",
                content: searchQuery
            }
        ],
        model: "mixtral-8x7b-32768"
    });

    let response = completion.choices[0]?.message?.content || ""
    return response
}
