
export default function Step1({ticket, setTicket, ticketNo, setTicketNo, setStep}){
    return (
        <>
            <div className='text-center p-[16px_24px] border-x-2 border-t-0 border-b-2 border-[#07373F] rounded-3xl backdrop-blur-sm bg-[#0A0C11]/10 bg-radial-[#24A0B5/0,#24A0B5/20]'>
                <p className='text-4xl roadRage mb-2 '>Techember Fest "25</p>
                <p className='text-sm mb-7 xl:mb-3 xl:w-[50%] mx-auto '>Join us for an unforgettable experience at [Event Name]! Secure your spot now.</p>
                <div className="xl:flex items-center justify-center gap-3">
                    <p>📍 [Event Location]</p>
                    <p className="hidden xl:inline-block">||</p>
                    <p>March 15, 2025 | 7:00 PM</p>
                </div>
            </div>
            <hr className='border-t-2 border-[#07373F] mt-5 mb-5 '></hr>
            <div>
                <p className='mb-1'>Select Ticket Type:</p>
                <div className='grid gap-3 bg-[#052228] border-[1px] border-[#07373F] rounded-3xl p-4 xl:grid-cols-3 '>
                    <div onClick={()=>{
                        setTicket("free")
                    }} className={"cursor-pointer border-[2px] rounded-xl border-[#197686] p-3 " + (ticket==="free" ? " bg-[#12464E] !border-[1px]" : "")}  >
                        <p className='text-white text-2xl '>Free</p>
                        <p>Regular Access</p>
                        <p className='text-[#D9D9D9] text-sm'>20/52</p>
                    </div>
                    <div onClick={()=>{
                        setTicket("vip")
                    }} className={"cursor-pointer border-[2px] rounded-xl border-[#197686] p-3 " + (ticket==="vip" ? " bg-[#12464E] !border-[1px]" : "")}  >
                        <p className='text-white text-2xl '>$150</p>
                        <p >VIP ACCESS</p>
                        <p className='text-[#D9D9D9] text-sm'>20/52</p>
                    </div>
                    <div onClick={()=>{
                        setTicket("vvip")
                    }} className={"cursor-pointer border-[2px] rounded-xl border-[#197686] p-3 " + (ticket==="vvip" ? " bg-[#12464E] !border-[1px]" : "")}  >
                        <p className='text-white text-2xl '>$150</p>
                        <p>VVIP ACCESS</p>
                        <p className='text-[#D9D9D9] text-sm'>20/52</p>
                    </div>
                </div>
                <div className='mt-5 grid'>
                    <label className='mb-1'>Number of Tickets</label>
                    <select value={ticketNo} onChange={(event)=>{setTicketNo(event.target.value)}} className='border-[1px]  border-[#07373F] rounded-xl p-3  '>
                        {
                            Array(10).fill("").map((value, number)=>{
                                return <option value={number+1} className="text-black">{number+1}</option>
                            })
                        }
                    </select>
                </div>
                <div className='grid gap-3 xl:grid-cols-2 mt-7'>
                    <button onClick={()=>{
                        setStep(2)
                    }} className='cursor-pointer bg-[#24A0B5] text-white rounded-lg h-[48px] w-full flex justify-center items-center jeju'>Next</button>
                    <button className='cursor-pointer text-[#24A0B5] border-[#24A0B5] border-[1px] rounded-lg h-[48px] w-full flex justify-center items-center jeju'>Cancel</button>
                </div>
    
            </div>
        </>
    )
}