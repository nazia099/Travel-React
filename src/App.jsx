import Navbar from "./section/navbar/Navbar";
import Destination from "./section/destinaion/Destination"
import Memories from "./section/memories/Memories"
import Location from "./section/location/Location"
import Subscribers from "./section/subscribers/Subscribers"
import Newslatter from "./section/newslatter/Newslatter"
import Help from "./section/help/Help"


function App() {
  return (
    <>
      <Navbar />
      <Destination />
      <Memories/>
      <Location/>
      <Subscribers/>
      <Newslatter/>
      <Help/>
    </>
  )
}

export default App


