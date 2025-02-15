import { Email } from "./Icons";

export default function Step2({url, setUrl, name, setName, email, setEmail, request, setRequest, step, setStep}) {


  // Handle File Upload (Input or Drag & Drop)
  const handleFile = (file) => {
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const base64Image = reader.result;
      setUrl(base64Image);
    };
    reader.readAsDataURL(file);
  };

  // Handle File Input
  const handleInputChange = (e) => {
    const file = e.target.files[0];
    handleFile(file);
  };

  // Handle Drag & Drop
  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    handleFile(file);
  };

  return (
    <form onSubmit={(event)=>{
      event.preventDefault();
      setStep(3)
    }}>
    <div className='text-center p-[16px_24px] border-x-2 border-t-0 border-b-2 border-[#07373F] rounded-3xl backdrop-blur-sm bg-[#0A0C11]/10'>
        <p className='mb-2 text-left'>
            Upload Profile Photo
        </p>
        <div className="flex flex-col items-center p-4">
            {/* Drag & Drop Area */}
            <div
                className="border-4 border-[#24A0B5] bg-[#0E464F] rounded-lg p-10 text-center cursor-pointer"
                onDragOver={(e) => e.preventDefault()}
                onDrop={handleDrop}
            >
                {url ? (
                <img src={url} alt="Uploaded" className="w-40 h-40 object-cover" />
                ) : (
                <p className="text-gray-500">Drag & Drop or Click to Upload</p>
                )}
            </div>

            {/* File Input */}
            <input type="file" accept="image/*" onChange={handleInputChange} className="mt-4" />

            {/* Clear Image */}
            {url && (
                <button
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
                onClick={() => {
                    localStorage.removeItem("uploadedImage");
                    setImage(null);
                }}
                >
                Clear Image
                </button>
            )}
        </div>
    </div>  
    <hr className='border-t-4 border-[#07373F] mt-10 mb-10 '></hr>
    <div className="grid gap-2">
        <label className="">Enter your name</label>
        <input required value={name} onChange={(event)=>{setName(event.target.value)}} className=" text-white border-[1px] border-[#07373F] rounded-xl h-12 p-3">

        </input>
    </div>
    <div className="my-4 grid gap-2">
        <label>Enter your email *</label>
        <div className="text-white flex items-center gap-1 border-[1px] border-[#07373F] rounded-xl h-12 p-3">
            <Email/>
            <input className="w-full h-full" value={email} onChange={(event)=>{setEmail(event.target.value)}} placeholder="hello@avioflagos.io" required type="email">

            </input>
        </div>
    </div>
    <div className="grid gap-2">
        <p>About the project</p>
        <textarea className="w-full h-32 resize-none text-[#AAAAAA] border-[1px] border-[#07373F] rounded-xl p-3">

        </textarea>
    </div>
    <div className='grid gap-3 xl:grid-cols-2 mt-10'>
        <button type="submit" className='cursor-pointer bg-[#24A0B5] text-white rounded-lg h-[48px] w-full flex justify-center items-center jeju'>Get My Free Ticket</button>
        <button onClick={()=>{setStep(1)}}
         className='cursor-pointer text-[#24A0B5] border-[#24A0B5] border-[1px] rounded-lg h-[48px] w-full flex justify-center items-center jeju'>Back</button>
    </div>
    </form>
  )
}
