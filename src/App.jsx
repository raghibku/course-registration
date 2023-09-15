import { useEffect, useState } from "react"
import Cart from "./components/Cart"
import Home from "./components/Home"
import Title from "./components/Title"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const[credit,setCredit] =useState(0);
  const [selectedCourses, setSelectedCourses] = useState([]);
  const pull_data = (data) => {
    setCredit(data); // LOGS DATA FROM CHILD (My name is Dean Winchester... &)
  }
  const handleSelectCourse = (course) => {
    const isExisting = selectedCourses.find(item=>item.id == course.id);
    if(isExisting){
      toast.error("Course Already Selected");
    }else{
      if(course.credit + credit <=20){
        const updatedCourses = [...selectedCourses,course];
        setSelectedCourses(updatedCourses);
      }else{
        toast.error("Not enough course hours remaining");
      }
      
    }
  }
  return (
    <>
      <Title/>
      <div className="flex justify-start items-start mx-4">
        <Home handleSelectCourse={handleSelectCourse}/>
        <Cart func={pull_data} selectedCourses={selectedCourses}/>
      </div>
      <ToastContainer 
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light" />  
    </>
  )
}

export default App
