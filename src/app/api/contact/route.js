import connect from "@/utils/db";
import Contact from "@/model/Contact";
import { NextResponse } from "next/server";

export const GET = async (request) => {
    try {
      await connect();
  
      const allContact = await Contact.find();
  
      return new NextResponse(JSON.stringify(allContact), { status: 200 });
    } catch (error) {
      return new NextResponse("Database Error" + error, { status: 500 });
    }
  };

  export const POST = async (request) => {
    const body = await request.json();
  
    const newContact = new Contact(body);
  
    try {
      await connect();
  
      await newContact.save();
  
      return new NextResponse(newContact, { status: 200 });
    } catch (error) {
      return new NextResponse("Database Error" + error, { status: 500 });
    }
  }