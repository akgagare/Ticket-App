import Ticket from "@/app/(models)/Ticket";

import { NextResponse } from "next/server";

export async function POST(req){
    try{
        const body = await req.json();
        const ticketData=body;
        await Ticket.create(ticketData);
        return NextResponse.json({message:"Ticked Created"},{status:201});
    }
    catch(error){
        return NextResponse.json({message:"Error",error},{status:500});
    }
}

export async function GET(){
    try{
        const tickets  = await Ticket.find();
        return NextResponse.json({tickets},{status:201});
    }catch(error){
        return NextResponse.json({message:"Error Came Arun",error},{status:500});
    }
}

export async function DELETE(req){
    try{
        const {id}=req.query;
        const result = await Ticket.deleteOne({ _id: id });
        if (result.deletedCount === 0) {
            return NextResponse.json({ message: 'Ticket not found' }, { status: 404 });
        }
      
        return NextResponse.json({ message: 'Ticket deleted successfully' }, { status: 200 });
      
    }catch(error){
        return NextResponse.json({message:"Error Came Arun,for deleting operation",error},{status:500});
    }
}

export async function PUT(req){
    try{

    }catch(error){
        return NextResponse.json({message:"Error in editing ",error},{status:500});
    }
}