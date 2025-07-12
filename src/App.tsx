import About from "./components/About";
import EmblaCarousel from "./components/carousel";
import Hero from "./components/Hero";
import Journey from "./components/Journey";
import Skills from "./components/Skills";
import type { EmblaOptionsType } from "embla-carousel";

import axios from "axios";
import { useEffect, useState } from "react";

export const instance = axios.create({
  baseURL: "https://malaksabry2.pythonanywhere.com/api/",
  timeout: 10000,
});

const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDE_COUNT = 8;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const App = () => {
  const [certs, setCerts] = useState([]);
  useEffect(() => {
    instance.get("P/certificates/").then((res) => {
      setCerts(res.data);
    });
  }, []);
   useEffect(() => {
    document.title = "Malak | Personal Portfolio"; 
  }, []);

  return (
    <>
      <h1
        className="pt-[75px] md:pt-[110px] md:mb-1 mb-7 hello-text uppercase text-center text-6xl md:text-8xl
       relative top-[-20px] text-transparent"
      >
        hello
      </h1>
      <Hero />

      

      <About />
            <Journey />

      <EmblaCarousel slides={certs} options={OPTIONS}  />
<Skills/>
    
    </>
  );
};

export default App;

// const App = () => {
//   const [skills ,setSkills]=useState([])

//   useEffect(() => {
//     instance.get('P/ST').then((res) => {
//       setSkills(res.data);
//     });
//   }, []);
//     // setCounter(counter+1);

// return(
// <>

//   <Nav />
//   <h1 className="uppercase text-center text-6xl tracking-widest text-black drop-shadow-[0_1.0px_1.0px_rgba(255,255,255,0.8)] ">hello</h1>
//   <h2>{"counter"}</h2>
//   <ul>
//     {skills.map((skill,index)=>(
//       <li key={index}>{skill.title}</li>
//     ))}
//   </ul>
// </>)
// }
// export default App;
