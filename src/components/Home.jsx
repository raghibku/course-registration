import React, { useEffect, useState } from 'react'
import Course from './Course';


const Home = (props) => {
    const {handleSelectCourse}=props;
    const [courses, setCourses] = useState([]);

    useEffect(()=>{
        fetch("data.json")
        .then(res=>res.json())
        .then(data=>setCourses(data))
    },[])

  return (
    <div className='w-9/12'>
        <div className='cardsContainer grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 pb-10'>
           {
                courses.map((course)=>
                    <Course key={course.id} course={course} handleSelectCourse={handleSelectCourse}/>
                )
           }
        </div>
    </div>
  )
}

export default Home