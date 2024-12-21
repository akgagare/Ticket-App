
import Image from "next/image";
import TicketCard from '@/app/(components)/TicketCard';

const getTickets=async()=>{
  try{
    const res= await fetch("http://localhost:3000/api/Tickets",{
      cache:"no-store"
    });
    return res.json();
  }
  catch(error){
    console.log("Failed to get Tickets",error);
  } 
}
export default async function Home() {
  const {tickets} = await getTickets()

  const unqiueCategory = [
    ...new Set(tickets?.map(({category})=>category)),
  ];


  return (
    <div className="p-5">
      <div>
        {tickets && unqiueCategory?.map((unqiueCategory,categoryIndex)=><div key={categoryIndex} className="mb-4">
          <h2 className="text-xl">{unqiueCategory}</h2>
          <div className="lg:grid grid-cols-2 xl:grid-cols-4">
            {tickets.filter((ticket)=>ticket.category===unqiueCategory).map((filteredTicket,_index)=>(
              <TicketCard id={_index} key={_index} ticket={filteredTicket} onDelete={filteredTicket.id} />
            ))}
          </div>
          </div>)}
      </div>
    </div>
    
  );
}
