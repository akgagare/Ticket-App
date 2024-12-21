
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import Image from "next/image";
import TicketCard from '@/app/(components)/TicketCard';
import TicketForm from '@/app/(components)/TicketForm';
const page = ({params}) => {
  return (
    <div >
      <TicketForm/>
    </div>
  )
}

export default page
