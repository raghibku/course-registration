import React, { useEffect, useState } from 'react'

const Cart = (props) => {
  let sum = 0;
  const { selectedCourses,func} = props;
  
  const [totalCredit, setTotalCredit] = useState(0);
  const [remainingCredit, setRemainingCredit] = useState(20)
  
  useEffect(() => {
    selectedCourses.forEach(element => {
      sum = sum + element.credit;
    });
    const newTotalCredit = sum;
    setTotalCredit(newTotalCredit)
    
  }, [selectedCourses])

  useEffect(() => {
    setRemainingCredit(20 - totalCredit);
    func(totalCredit);
  }, [totalCredit])


  return (
    <div className='w-3/12 px-2'>
      <div className='outerCartContainer flex justify-center items-center bg-white rounded-lg pb-8'>
        <div className='innerCartContainer flex flex-col justify-start items-start px-2'>

          <h1 className='text-lg font-semibold text-blue-500 py-8'>Course Hours Remaining {remainingCredit} hr</h1>
          <hr className='bg-gray-400 w-full h-0.5 mb-8'/>
          <h1 className='text-lg font-semibold'>Course Name:</h1>

          <ol className="list-decimal ml-4">
            {
              selectedCourses.map((course) =>
                <li key={course.id}>{course.title}</li>
              )
            }
          </ol>

          <hr className='bg-gray-400 w-full h-0.5 mt-8'/>
          <p className='font-semibold mt-8'>Total Credit Hours: {totalCredit}</p>

        </div>
      </div>
    </div>
  )
}

export default Cart