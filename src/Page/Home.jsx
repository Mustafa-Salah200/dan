import Blogs from "../components/Blogs/Blogs"
import Landing from "../components/Landing/Landing"
import Services from "../components/Services/Services"
import Teachers from "../components/Teachers/Teachers"
import Testimonials from "../components/Testimonials/Testimonials"
const Home = () => {
  return (
    <div>
      <Landing />
      <Services />
      <Testimonials />  
      <Teachers />
      <Blogs />
    </div>
  )
}

export default Home
