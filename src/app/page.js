import Banner from "@/components/pagecomponent/Home/Banner";
import Boxes from "@/components/pagecomponent/Home/Boxes";
import Blackbox from "@/components/pagecomponent/Home/Blackbox";
import Amazing from "@/components/pagecomponent/Home/Amazing";
import Destination from "@/components/pagecomponent/Home/Destination";
import Recent from "@/components/pagecomponent/Home/Recent";
import Sales from "@/components/pagecomponent/Home/Sales";
import Recomanded from "@/components/pagecomponent/Home/Recomanded";
import Guest from "@/components/pagecomponent/Home/Guest";
import Mostpopular from "@/components/pagecomponent/Home/Mostpopular";
import Testimonial from "@/components/pagecomponent/Home/Testimonial";
// import Footer from "@/components/Footer.jsx/footer";



export default function Home() {
  return (
    <div className="mb-10">
      <div className="relative ">
        <Banner />
        <Boxes />


      </div>
      <div className="flex flex-col ">
        <Blackbox />
        <Amazing />
      </div>
      <div>
        <Destination />

      </div>
      <Recent/>
      <Sales/>
      <Recomanded/>
      <Guest/>
      {/* <Mostpopular/> */}
      {/* <Testimonial/> */}
      {/* <Footer/> */}

    </div>
  );
}
