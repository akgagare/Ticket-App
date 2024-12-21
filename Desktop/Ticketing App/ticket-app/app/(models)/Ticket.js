import mongoose,{Schema} from "mongoose";

mongoose.connect("mongodb+srv://arungagare2915:mongo123@cluster0.ez7sv3z.mongodb.net/Ticketing").then(()=>{
    console.log("Connection Successful")
}).catch((e)=>{
    console.log(e)
});


const ticketSchema= new Schema(
    {
        title:String,
        description:String,
        category:String,
        priority:Number,
        progress:Number,
        status:String,
        active:Boolean
    },
    {
        timestamps:true,
    }
)

const Ticket = mongoose.models.Ticket || mongoose.model("Ticket", ticketSchema);

export default Ticket;