import Image from 'next/image'

export default function Dashboard() {
  return (
    <div className="p-6 bg-white transition-all duration-300 ease-in-out transform ">
      <div className="flex justify-between mb-6">
        <h2 className="text-xl font-semibold text-purple-700">
          Articles <span className="ml-2 text-gray-500">162</span>
        </h2>
        <h2 className="text-xl font-semibold text-purple-700">
          Theme Chats <span className="ml-2 text-gray-500">24</span>
        </h2>
      </div>
      
      <div className="grid grid-cols-3 gap-4  ">
        <div className="col-span-2 grid grid-cols-2 gap-4">
          <ArticleCard 
            title="Inclusive Design Principles"
            duration="5 min"
            author="Rosemary Steward"
            date="Feb 11"
            image="/static/images/avatar.png"
          />
          <ArticleCard 
            title="Design Trends in 2020"
            duration="1 min"
            author="Bessie Bell"
            date="Feb 4"
            image="/static/images/avatar.png"
          />
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <ThemeCard title="Education" image="/static/images/avatar.png" />
          <ThemeCard title="Work" image="/static/images/avatar.png" />
          <ThemeCard title="University" image="/static/images/avatar.png" />
          <ThemeCard title="Technology" image="/static/images/avatar.png" />
        </div>
      </div>
    </div>
  )
}

function ArticleCard({ title, duration, author, date, image }) {
  return (
    <div className="bg-blue-300 rounded-lg p-4  hover:bg-blue-100 transition-all duration-300 ease-in-out transform hover:scale-105">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <div className="flex items-center text-sm text-gray-600 mb-4">
        <span className="bg-purple-700 text-white px-2 py-1 rounded-full mr-2">{duration}</span>
      </div>
      <div className="flex items-center">
        <Image src={image} width={40} height={40} className="rounded-full mr-3" alt={author} />
        <div>
          <p className="font-medium">{author}</p>
          <p className="text-sm text-gray-500">{date}</p>
        </div>
      </div>
    </div>
  )
}

function ThemeCard({ title, image }) {
  return (
    <div className="bg-blue-50 rounded-lg p-4 flex flex-col items-center justify-center hover:bg-blue-100 transition-all duration-300 ease-in-out transform hover:scale-105">
      <Image src={image} width={48} height={48} alt={title} />
      <p className="mt-2 text-sm font-medium">{title}</p>
    </div>
  )
}