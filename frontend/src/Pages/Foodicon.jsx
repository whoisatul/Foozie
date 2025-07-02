import React,{useState} from 'react'

const Foodicon = ({prompt}) => {

  const[category,setCategory] = useState()
  return (
    <div className="ml-[100px]">
      <div className="flex flex-row flex-wrap gap-[100px] mx-[10px] ">
        {prompt.map((item, index) => (
          <div
            key={index}
            onClick={() =>
              setCategory(prev => (prev === item.name ? 'All' : item.name))
            }
            className="flex flex-col items-center cursor-pointer "
          >
            <div className= ' flex flex-col items-center text-[#2a1a1c]/50 hover:text-[#2a1a1c]/90 transition-all duration-200'><div
              className={`menu-img ${category === item.name ? 'active' : ''}`}
            >
              {item.element}
            </div>
            <p className="mt-[10px] mb-[20px] text-xl  ">
              {item.name}
            </p>
          </div>
          </div>
        ))}
      </div>
    </div>
  )
  
}

export default Foodicon