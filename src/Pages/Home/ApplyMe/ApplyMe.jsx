
const ApplyMe = () => {
    return (
        <div className="my-10 bg-base-200">
            <div className="flex flex-col-reverse lg:flex-row">
                <div className="py-4 lg:py-20 pl-20">
                    <h1 className="pb-10 text-pink-800 text-3xl lg:text-4xl font-bold">Let us do the work for you Apply with Apply4Me.</h1>
                    <p className="py-2 text-pink-700 text-xl lg:text-2xl font-medium">Provide Ladders with your job application information once.</p>
                    <p className="py-2 text-pink-700 text-xl lg:text-2xl font-medium">Apply4Me saves you an average of 18 minutes per job application.</p>
                    <p className="py-2 text-pink-700 text-xl lg:text-2xl font-medium">You’ll receive an email confirming applications that were sent and received.</p>
                    <button className="my-2 btn btn-secondary bg-pink-700 normal-case text-white text-base">Get Started</button>
                </div>
                <img src="https://i.ibb.co/xmDGx1K/apply4me.webp" className="max-w-sm p-10 m-10 rounded-lg shadow-2xl" />
            </div>
        </div>
    );
};

export default ApplyMe;