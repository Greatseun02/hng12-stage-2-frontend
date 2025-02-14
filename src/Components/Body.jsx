import React, { useEffect, useState } from 'react'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'

export default function Body() {
  const getTicket = "hng-12-stage-2-frontend-ticket-type"
  const getTicketNo = "hng-12-stage-2-frontend-ticket-no"
  const getName = "hng-12-stage-2-frontend-name"
  const getEmail = "hng-12-stage-2-frontend-email"
  const getRequest = "hng-12-stage-2-frontend-request"
  const getStep = "hng-12-stage-2-frontend-request-step"
  const getUrl = "hng-12-stage-2-frontend-request-url"
  
  const persistTicketType = localStorage.getItem(getTicket)
  const persistTicketNo = localStorage.getItem(getTicketNo)
  const persistName = localStorage.getItem(getName)
  const persistEmail = localStorage.getItem(getEmail)
  const persistRequest = localStorage.getItem(getRequest)
  const persistStep = localStorage.getItem(getStep)
  const persistUrl = localStorage.getItem(getUrl)
  

  const [step, setStep] = useState(()=>{return (persistStep || 1) * 1})
  const [name, setName] = useState(()=> {return persistName || ""})
  const [ticket, setTicket] = useState(()=>{return persistTicketType || "free"})
  const [ticketNo, setTicketNo] = useState(()=>{return persistTicketNo || ""})
  const [email, setEmail] = useState(()=>{return persistEmail || "" })
  const [request, setRequest] = useState(()=>{return persistRequest || ""})
  const [url, setUrl] = useState(()=>{return persistUrl || ""})
  const [reset, setReset] = useState(false)

  useEffect(
    ()=>{
      if(step===2){
        localStorage.setItem(getTicket, ticket);
        localStorage.setItem(getTicketNo, ticketNo);
        localStorage.setItem(getStep, step)
      }else if(step===3){
        localStorage.setItem(getUrl, url);
        localStorage.setItem(getName, name);
        localStorage.setItem(getEmail, email);
        localStorage.setItem(getRequest, request);
        localStorage.setItem(getStep, step)
      }

      if(reset === true){
        localStorage.clear()
        window.location.reload()
      }
    }, [step, reset]
  )



  return (
    <div className= 'container mx-auto xl:max-w-[1200px] mt-5 p-6 bg-[#08252B] border-[#0E464F] border-[1px] rounded-3xl text-[#FAFAFA] roboto'>
        <div className='mb-5'>
            <p className='jeju text-white text-2xl'>Ticket Selection</p>
            <p className=''>Step {step}/3</p>
            <div className='mt-2 bg-[#0E464F] h-1 rounded-sm grid grid-cols-3'>
                <span className={"h-1 rounded-s-sm " + (step >= 1 ? "bg-[#24A0B5]" : "") }></span>
                <span className={"h-1  " + ((step > 1) ? "bg-[#24A0B5]" : "") }></span>
                <span className={"h-1 rounded-e-sm " + (step > 2 ? "bg-[#24A0B5]" : "") }></span>
            </div>
        </div>
        <div>
            {step === 1 && <Step1 ticket={ticket} setTicket={setTicket} ticketNo={ticketNo} setTicketNo={setTicketNo} setStep={setStep} />}
            {step === 2 && 
              <Step2 
                url={url} 
                setUrl={setUrl}
                email={email}
                setEmail={setEmail}
                request={setRequest}
                step={step}
                setStep={setStep}
              />
            }  
            {step === 3 && <Step3
              name={name}
              url={url}
              email={email}
              ticket={ticket}
              ticketNo={ticketNo}
              request={request}
              setReset={setReset}
            />}
        </div>
    </div>
  )
}
