import React from 'react'

const Course = (props) => {
    const{course,handleSelectCourse}=props;
    const{id,img,title,description,price,credit}=course;

    
  return (
    <div className='outerCardContainer flex justify-center items-start bg-white rounded-lg p-4 '>

        <div className='innerCardContainer flex flex-col justify-start items-start gap-2'>

            <img src={img} alt="" />
            <h3 className='text-md font-semibold'>{title}</h3>
            <p className='text-sm text-gray-500 h-[90px]'>{description}</p>
            <div className='flex justify-between items-center text-sm gap-16'>
                <div className='flex justify-start items-center'>
                    <img className='w-8' src="icons/icons8-dollar-50.png" alt="" />
                    <p>Price:{price}$</p>
                </div>
                <div className='flex justify-right items-center'>
                    <img className='w-8' src="icons/icons8-course-40.png" alt="" />
                    <p>Credit:{credit}hr</p>
                </div>
            </div>
            <button onClick={()=>{handleSelectCourse(course)}} className='text-white bg-blue-500 py-2 w-full rounded-md'>Select</button>

        </div>

    </div>
  )
}

export default Course