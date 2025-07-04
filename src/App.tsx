// import { AlignHorizontalDistributeCenter } from "lucide-react";
import About from "./components/About";
import EmblaCarousel from "./components/carousel";
// import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Journey from "./components/Journey";
// import Nav from "./components/Nav";
// import Projects from "./components/Projects";
import Skills from "./components/Skills";
import type { EmblaOptionsType } from 'embla-carousel'

// import axios from "axios";

// const instance = axios.create({
//   baseURL: 'https://khaledmuhmmed99.pythonanywhere.com/api/',
//   timeout: 10000,
//   headers: {'FD': 'QSVG548645bvbvdfs'}
// });

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

const OPTIONS: EmblaOptionsType = { loop: true }
const SLIDE_COUNT = 8
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const App = () => {
  // const [skills ,setSkills]=  useState([])
  // const instance =axios.create(
  //   {
  //     baseURL:'https://khaledmuhmmed99.pythonanywhere.com/api/',
  //     timeout:10000,
  //     headers:{'FD': 'QSVG548645bvbvdfs'}
  //   }
  // )
  // useEffect(()=>{
  // instance.get('P/ST').then((res)=>{
  // setSkills(res.data)
  // })
  // },[])
  return (
    //     <>
    // <h1>Koko Skills</h1>
    // <ol>
    //   {skills.map((skill,index)=>(
    //   <li key={index}>
    // {skill.title}
    //   </li>
    //   ))}

    // </ol>
    //     </>
    <>
      <h1 className="pt-[110px] hello-text uppercase text-center text-8xl relative top-[-20px] text-transparent">
        hello
      </h1>
      <Hero />
      <About />
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      <Skills />
      <Journey />
      {/* <ErrorPage /> */}

      {/* <ContactForm/> */}
      {/* <Projects/> */}
    </>
  );
};

export default App;
