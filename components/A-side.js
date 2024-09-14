import Th_box from './th-box'

const A_side = () => {
    return (
        <div>
            <div class="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
  <div class="flex items-center justify-between p-4 border-b">
    <h2 class="text-xl font-semibold text-gray-800">Top Teachers</h2>
    <svg class="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
    </svg>
  </div>
  
  <ul class="divide-y divide-gray-200">
    <li class="flex items-center p-4 hover:bg-gray-100 transition duration-300 ease-in-out">
      <img class="w-12 h-12 rounded-full object-cover mr-4" src="/static/images/sparrowhawk-avatar.jpg" alt="Teacher 1" />
      <div class="flex-grow">
        <h3 class="text-lg font-medium text-gray-800">Marvin Hawkins</h3>
        <p class="text-sm text-gray-600">5 years experience</p>
      </div>
      <span class="text-lg font-semibold text-blue-500">5.0</span>
    </li>
    
    <li class="flex items-center p-4 hover:bg-gray-100 transition duration-300 ease-in-out">
      <img class="w-12 h-12 rounded-full object-cover mr-4" src="/static/images/sparrowhawk-avatar.jpg" alt="Teacher 2" />
      <div class="flex-grow">
        <h3 class="text-lg font-medium text-gray-800">Arthur Mckinney</h3>
        <p class="text-sm text-gray-600">6 years experience</p>
      </div>
      <span class="text-lg font-semibold text-blue-500">4.9</span>
    </li>
    
    <li class="flex items-center p-4 hover:bg-gray-100 transition duration-300 ease-in-out">
      <img class="w-12 h-12 rounded-full object-cover mr-4" src="/static/images/sparrowhawk-avatar.jpg" alt="Teacher 3" />
      <div class="flex-grow">
        <h3 class="text-lg font-medium text-gray-800">Bessie Watson</h3>
        <p class="text-sm text-gray-600">2 years experience</p>
      </div>
      <span class="text-lg font-semibold text-blue-500">4.8</span>
    </li>
    
    <li class="flex items-center p-4 hover:bg-gray-100 transition duration-300 ease-in-out">
      <img class="w-12 h-12 rounded-full object-cover mr-4" src="/static/images/sparrowhawk-avatar.jpg" alt="Teacher 4" />
      <div class="flex-grow">
        <h3 class="text-lg font-medium text-gray-800">Albert Bell</h3>
        <p class="text-sm text-gray-600">3 years experience</p>
      </div>
      <span class="text-lg font-semibold text-blue-500">4.8</span>
    </li>
  </ul>
</div>
       
  </div>
    )
}

export default A_side