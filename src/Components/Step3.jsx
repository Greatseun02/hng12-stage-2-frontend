import BG from "../assets/bg-ticket.png"
import { BarCode } from "./Icons"

export default function Step3({name, url, email, ticket, ticketNo, request, setReset}){
    
    return (
        <>
           <p className="text-center text-2xl xl:text-3xl font-bold mt-10">Your Ticket is Booked!</p>
           <p className="mb-10 text-center text-[#FAFAFA]">You can download or Check your email for a copy</p>
           <div className="relative mx-auto h-full max-w-[300px]">
            <div className="absolute z-0 h-full">
                <img className="w-full h-full" src={BG}></img>
            </div>
            <div className="relative z-1 grid grid-rows-[auto_auto] gap-10 pb-5 px-[20px] pt-[20px]">
                <div className="p-[14px] rounded-2xl bg-[#031E21]/10 border-[1px] border-[#24A0B5]">
                    <p className="roadRage text-3xl text-center">Techember Fest ”25</p>
                    <p className="text-center text-[10px]">📍 04 Rumens road, Ikoyi, Lagos</p>
                    <p className="text-center text-[10px]">📅 March 15, 2025 | 7:00 PM</p>
                    <div className="w-[140px] h-[140px] mx-auto my-5">
                        <img src={url} className="w-full h-full object-cover rounded-xl border-4 border-[#24A0B5]/50 "></img>
                    </div>
                    <div className="p-1 grid grid-cols-2 rounded-lg bg-[#08343C] border-[#133D44] border-[1px]">
                        <div className="p-1 gap-1 grid border-b-[1px] border-r-[1px] border-[#12464E]">
                            <p className="text-[10px] opacity-[33%] ">Enter your name</p>
                            <p className="text-[12px] text-bold next-line">{name || "Nill"}</p>
                        </div>
                        <div className="p-1 pl-2 gap-1 grid border-b-[1px] border-l-[1px] border-[#12464E]">
                            <p className="text-[10px] opacity-[33%] ">Enter your email *</p>
                            <p className="text-[12px] text-bold next-line ">{email}</p>
                        </div>
                        <div className="p-1 gap-1 grid border-t-[1px] border-r-[1px] border-b-[1px] border-[#12464E]">
                            <p className="text-[10px] opacity-[33%]">Ticket Type</p>
                            <p className="text-[12px] text-bold ">{ticket}</p>
                        </div>
                        <div className="p-1 pl-2 gap-1 grid border-t-[1px] border-l-[1px] border-b-[1px] border-[#12464E]">
                            <p className="text-[10px] opacity-[33%]">Ticker for:</p>
                            <p className="text-[12px] text-bold">{ticketNo}</p>
                        </div>
                        <div className="p-2 gap-1 col-span-2 border-t-[1px] border-[#12464E] ">
                            <p className="text-[10px] opacity-[33%]">Special request?</p>
                            <p className="text-[12px] text-bold next-line">{request || "Nill"}</p>
                        </div>

                    </div>
                </div>
                <div className="w-fit h-fit mx-auto">
                    <BarCode />
                </div>
            </div>
           </div>
           <div>
           <div className='flex flex-wrap gap-3 justify-center mt-20'>
                <button onClick={()=>{setReset(true)}}
                 className='cursor-pointer max-w-[290px] text-[#24A0B5] border-[#24A0B5] border-[1px] rounded-lg h-[48px] w-full flex justify-center items-center jeju'>Book Another Ticket</button>
                <button className='cursor-pointer max-w-[290px] bg-[#24A0B5] text-white rounded-lg h-[48px] w-full flex justify-center items-center jeju'>Download Ticket</button>
            </div>
           </div>
        </>
    )
}