import Image from 'next/image';

export default function VideoLessons() {
  return (
    <div className="bg-gray-100 p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Video Lessons</h2>
        <span className="text-blue-600 font-semibold">124</span>
      </div>
      
      <div className="grid grid-cols-3 gap-4">
        {/* Main card */}
        <div className="col-span-2 bg-blue-600 rounded-xl p-6 text-white relative hover:bg-blue-700 hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
          <h3 className="text-2xl font-bold mb-4">We create effective texts for landing</h3>
          <div className="absolute bottom-6 left-6 flex items-center">
            <Image
                src="/static/images/avatar.png"
                alt="Randall Mccoy"
              width={40}
              height={40}
              className="rounded-full mr-3"
            />
            <div>
              <p className="font-semibold">Randall Mccoy</p>
              <p className="text-sm opacity-80">CEO, California Tech.</p>
            </div>
          </div>
          <span className="absolute bottom-6 right-6 bg-black bg-opacity-30 px-2 py-1 rounded text-sm">
            10:08
          </span>
        </div>

        {/* Right column */}
        <div className="space-y-4">
          {/* Card 1 */}
          <div className="bg-blue-600 rounded-xl p-4 text-white hover:bg-blue-700 hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
            <p className="mb-4">We make a website business card. Training.</p>
            <div className="flex items-center">
              <Image
                src="/static/images/avatar.png"
                alt="Jorge Murphy"
                width={32}
                height={32}
                className="rounded-full mr-3"
              />
              <div>
                <p className="font-semibold">Jorge Murphy</p>
                <p className="text-sm opacity-80">Senior Designer</p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-blue-600 rounded-xl p-4 text-white hover:bg-blue-700 hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
            <p className="mb-4">Web animation. The basics.</p>
            <div className="flex items-center">
              <Image
                src="/static/images/avatar.png"
                alt="Randall Richards"
                width={32}
                height={32}
                className="rounded-full mr-3"
              />
              <div>
                <p className="font-semibold">Randall Richards</p>
                <p className="text-sm opacity-80">Art Director</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}