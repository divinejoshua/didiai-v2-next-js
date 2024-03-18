import { BING_SEARCH_API_KEY, BING_SEARCH_URL, GROQ_API_KEY } from "@/app/constants/api.constants";
import { NextRequest, NextResponse } from "next/server";
import axios from 'axios';

// GROQ
const Groq = require("groq-sdk");
const groq = new Groq({
    apiKey: GROQ_API_KEY
});

// POST request
export async function POST (req: NextRequest, res : NextResponse) {

    //Get the search query
    const {searchParams} = new URL(req.url);
    let searchQuery : string | null | undefined
    searchQuery = searchParams.get("query");

    //LLM handler
    let llmResponse = await LLMHandler(searchQuery)

    //SEO handler
    let seoResponse = await SEOHandler(searchQuery)

    let data = { message: seoResponse }

    //Response
    return NextResponse.json(data, {
        status: 200,
    });
  }

//SEO Handler
async function SEOHandler(searchQuery : string | null) {
    let mkt = 'en-US'
    let params = {'q': searchQuery, 'mkt': mkt}
    let headers = {'Ocp-Apim-Subscription-Key': BING_SEARCH_API_KEY}

    let response = null

    // Call the SEO API
   await axios.get(BING_SEARCH_URL, {
        params: params,
        headers: headers
    })
    .then((res) => {
        response = res.data
    })
    .catch((err) => console.error(err));

    return response
}

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


