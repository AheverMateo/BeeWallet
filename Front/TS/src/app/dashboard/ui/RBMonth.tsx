import "../styles/RadioButton.css"

const RBMonth = () => {
  return (
    <div className="flex justify-center items-center bg-gray-200">
      <div className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden">
        <input type="radio" id="radio-1" name="tabs" className="hidden" defaultChecked />
        <label className="flex items-center px-5 py-2 cursor-pointer transition-colors duration-300" htmlFor="radio-1">
          <div className="w-5 h-5 border-2 border-yellow-400 rounded-full mr-2 transition-colors duration-300"></div>
          <span className="text-base text-gray-700 transition-colors duration-300">Option 1</span>
        </label>
        <input type="radio" id="radio-2" name="tabs" className="hidden" />
        <label className="flex items-center px-5 py-2 cursor-pointer transition-colors duration-300" htmlFor="radio-2">
          <div className="w-5 h-5 border-2 border-yellow-400 rounded-full mr-2 transition-colors duration-300"></div>
          <span className="text-base text-gray-700 transition-colors duration-300">Option 2</span>
        </label>
        <input type="radio" id="radio-3" name="tabs" className="hidden" />
        <label className="flex items-center px-5 py-2 cursor-pointer transition-colors duration-300" htmlFor="radio-3">
          <div className="w-5 h-5 border-2 border-yellow-400 rounded-full mr-2 transition-colors duration-300"></div>
          <span className="text-base text-gray-700 transition-colors duration-300">Option 3</span>
        </label>
      </div>
    </div>

  )
}

export default RBMonth