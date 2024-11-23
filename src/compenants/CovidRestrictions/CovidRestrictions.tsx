import { Link } from "react-router-dom"

const CovidRestrictions = () => {
  return (
    <div className="flex gap-4 rounded-md items-center bg-paleYellow mx-16 md:mx-24 px-6 py-7 mb-16 mt-10">
      <svg width="30" height="28" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 10V16.6667" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M15.0001 26.5465H6.92007C2.29341 26.5465 0.360073 23.2399 2.60007 19.1999L6.76007 11.7065L10.6801 4.66654C13.0534 0.386543 16.9467 0.386543 19.3201 4.66654L23.2401 11.7199L27.4001 19.2132C29.6401 23.2532 27.6934 26.5599 23.0801 26.5599H15.0001V26.5465Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M14.9932 20.6665H15.0052" stroke="#292D32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      <span>Check the latest COVID-19 restrictions before you travel. <Link to={""} className="text-blue"> Learn more </Link></span>
    </div>
  )
}

export default CovidRestrictions
