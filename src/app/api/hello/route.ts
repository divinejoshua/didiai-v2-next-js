import { NextRequest, NextResponse } from "next/server";

// Get request
export async function GET(req: NextRequest, res : NextResponse) {
    
    // Run your functions in here
    let data = { message: 'Hello from Next.js!' }

    //Response
    return NextResponse.json(data, {
        status: 200,
    });
  }
