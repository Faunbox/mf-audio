import Image from "next/image";

const Founders = () => {

    const founders = [
        {
          name: "Jane Doe",
          role: "CEO & Co-founder",
          bio: "Visionary leader with 15 years of industry experience.",
          avatar: "/placeholder.svg?height=100&width=100",
        },
        {
          name: "John Smith",
          role: "CTO & Co-founder",
          bio: "Tech innovator with a passion for cutting-edge solutions.",
          avatar: "/placeholder.svg?height=100&width=100",
        },
      ];

    return ( <div className=" mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-black pt-8">
          Our Founders
        </h2>
        <div className="grid md:grid-cols-2 gap-8 pb-8">
          {founders.map((founder, index) => (
            <div
              key={founder.name + index}
              className="flex flex-col md:flex-row items-center md:items-start bg-transparent border-none shadow-none"
            >
              <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6 flex justify-center items-center">
                <Image
                  src={founder.avatar}
                  alt={`${founder.name}'s avatar`}
                  width={120}
                  height={120}
                  className="rounded-full"
                />
              </div>
              <div className="flex-grow text-center md:text-left">
                <div>
                  <h3 className="text-black">{founder.name}</h3>
                  <p className="text-gray-600">{founder.role}</p>
                </div>
                <div>
                  <p className="text-black">{founder.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> );
}
 
export default Founders;