import { users, addUser } from "@/lib/db";
import { NextRequest } from "next/server";

export async function GET() {
    return Response.json(users);
}

export async function POST(req:NextRequest) {
    const body = await req.json();

    if (!body.name || typeof body.name !== 'string') {
        return new Response('Name is required', {status:400});
    }
    const newUser = addUser(body.name);
    return Response.json(newUser, {status:201});


}