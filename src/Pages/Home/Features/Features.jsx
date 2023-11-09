
const Features = () => {
    return (
        <div className="my-10 py-10 bg-pink-200">
            <h1 className='py-4 text-3xl text-center text-pink-800 font-bold '>Go Ahead With JobHunt</h1>
            <p className=" text-xl text-center text-pink-800 font-medium mx-10">We are serving up trusted insights and anonymous conversation, so you will have the goods you need to succeed.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-8  my-20 text-base-content rounded">
                <div className="flex flex-col gap-2 px-6">
                    <img className="w-20 h-20 mx-auto" src="https://i.ibb.co/cK53Z0c/injustice-4443480.png" alt="" />
                    <div className="grid items-center">
                        <h1 className="text-2xl text-center font-semibold text-pink-900">Compare Salary</h1>
                    </div>
                </div>
                <div className="flex flex-col gap-2 px-6">
                    <img className="w-20 h-20 mx-auto " src="https://i.ibb.co/L6qn3QD/discussion-8321295.png" alt="" />
                    <div className="grid items-center">
                        <h1 className="text-2xl text-center font-semibold text-pink-900">Join your work community</h1>
                    </div>
                </div>
                <div className="flex flex-col gap-2 px-6">
                    <img className="w-20 h-20 mx-auto " src="https://i.ibb.co/ryYmkvQ/job-search-9095594.png" alt="" />
                    <div className="grid items-center">
                        <h1 className="text-2xl text-center font-semibold text-pink-900">Find and apply to jobs</h1>
                    </div>
                </div>
                <div className="flex flex-col gap-2 px-6">
                    <img className="w-20 h-20 mx-auto " src="https://i.ibb.co/ZY4RbHg/search-4084176.png" alt="" />
                    <div className="grid items-center">
                        <h1 className="text-2xl text-center font-semibold text-pink-900">Search company reviews</h1>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Features;