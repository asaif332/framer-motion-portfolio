'use client'
import { useScroll, motion, useTransform, useInView } from "motion/react";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Home() {

  const ref = useRef(null);
  const ref2 = useRef(null)
  const refSection1 = useRef(null)
  const refSection2 = useRef(null)
  const refSection3 = useRef(null)
  const refVegan = useRef(null)
  const boostedRef = useRef(null)
  
  const {scrollYProgress: bodyYProgess} = useScroll()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "center start"]
  })

  const {scrollYProgress: y2} = useScroll({
    target: ref2,
    offset: ["start center", "center center"]
  })

  const {scrollYProgress: progress1} = useScroll({
    target: refSection1,
    offset: ["start end", "start start"]
  })

  const {scrollYProgress: progress2} = useScroll({
    target: refSection2,
    offset: ["start end", "start start"]
  })

  const section1InView = useInView(refSection1, { amount: 0.01 });
  const section2InView = useInView(refSection2, { amount: 0.01 });
  const section3InView = useInView(refSection3, { amount: 0.01 });
  const veganInView = useInView(refVegan, {amount: 0.1})
  const boostedInView = useInView(boostedRef, {amount: 0.3})


  const gradient2 = useTransform(progress2, [0,0.1], [
    '',
    'var(--gradient-blue)'
  ])
  const bg2 = useTransform(progress2, [0,0.3], ['transparent', 'rgb(111, 0, 255)'])

  const scale1 = useTransform(progress1, [0,0.4], [1, 4])
  const scale2 = useTransform(progress1, [0.25, 0.6], [1, 4]);
  const scale3 = useTransform(progress1, [0.5, 0.8], [1, 4]);
  const scale4 = useTransform(progress1, [0.75, 1], [1, 4]);

  const oapcity1 = useTransform(progress1, [0,0.4], [1, 0])
  const oapcity2 = useTransform(progress1, [0.25, 0.6], [1, 0])
  const oapcity3 = useTransform(progress1, [0.5, 0.8], [1, 0])
  const oapcity4 = useTransform(progress1, [0.75, 1], [1, 0])

  const rotate1 = useTransform(progress1, [0,0.4], [0, 40])
  const rotate2 = useTransform(progress1, [0.25, 0.6], [0, 40])
  const rotate3 = useTransform(progress1, [0.5, 0.8], [0, 40])
  const rotate4 = useTransform(progress1, [0.75, 1], [0, 40])

  const ay1 = useTransform(progress1, [0,0.4], [0, -400])
  const ay2 = useTransform(progress1, [0.25, 0.6], [0, -400])
  const ay3 = useTransform(progress1, [0.5, 0.8], [0, 500])
  const ay4 = useTransform(progress1, [0.75, 1], [0, 400])

  const x = useTransform(scrollYProgress, [0, 1], ["0", "50%" ])
  const right = useTransform(scrollYProgress, [0,1], ["3rem", '50%'])

  const productLeft = useTransform(bodyYProgess, [0, 1], ["0px", "-500px"]);

  const y = useTransform(y2, [0, 1], [0, -150]); 

  useEffect(() => {
    productLeft.onChange((latest) => {
      // console.log('latest', latest)
      document.documentElement.style.setProperty("--product-left", latest);
    });
  }, [productLeft]);

  scale1.on('change' , (val) => {
    console.log('change', val)
  })

  // useEffect(() => {
  //   console.log('section2InView', section2InView)
  // }, [section2InView])


  // change background color
  useEffect(() => {
    let bg = `var(--gradient)`
    if (section2InView && !section3InView) {
      bg = `var(--blue) var(--gradient-blue)`
    } else if (section3InView && !veganInView) {
      bg = `var(--white) var(--gradient3)`
    }
    else if (veganInView && !boostedInView) {
      bg = `var(--bg1)`
    }
    document.documentElement.style.setProperty("--bg", bg);
  }, [section2InView, section3InView, veganInView, boostedInView])

  useEffect(() => {
    if (boostedInView) {
      document.documentElement.style.setProperty("--card-border", 'white');
      document.documentElement.style.setProperty("--card-footer", 'transparent');
    }
    else {
      document.documentElement.style.setProperty("--card-border", `var(--yellow)`);
      document.documentElement.style.setProperty("--card-footer", 'white');
    }
  }, [boostedInView])





  return (
    <>
      <div style={{ background: `var(--bg)` }} className="fixed top-0 left-0 right-0 h-screen -z-50 transition-all duration-500"></div>

      <motion.div style={{x, right }} id="product" className={` ${boostedInView ? 'hidden ' : 'fixed top-[200px]'} z-40`}>
        <motion.div className="soda">
        </motion.div>
      </motion.div>

      <div ref={ref} id="header" className="container-fluid ">
        <nav className="flex items-center justify-between h-24">
          <a href="">
            <img src="/logo.svg" className="h-11 block text-white" />
          </a>
          <ul className="flex border-2 border-white rounded-[10px] text-white">
            <li>
              <a className="" href="">Shop</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
          </ul>
          <div>
            <button className="btn-outline">Cart</button>
          </div>
        </nav>
        <div className="flex items-center pt-32 pb-32">
          <div className="relative w-full">
            <h1 className="text-white">
              Because<br/>being sick<br/> sucks <p className="inline-block font-medium">BOOST Immunity<br/>Gummy Vitamin</p>
            </h1>
          </div>
          
        </div>
        
      </div>

      <div ref={ref2} className="relative container-fluid">

        <svg className="w-fit mx-auto" width="17" height="280" viewBox="0 0 17 280" fill="none" data-stick-cursor="true"  ><path d="M8 0v278" stroke="#FFB800" strokeWidth="1.5"></path><path d="M8 0v278" stroke="#FFFBF0" strokeWidth="1.5"></path><path d="M1 270.733L8.267 278l7.266-7.267" stroke="#FFB800" strokeWidth="1.5"></path><path d="M1 270.733L8.267 278l7.266-7.267" stroke="#FFFBF0" strokeWidth="1.5"></path></svg>

        <div className="grid grid-cols-1 md:grid-cols-2 py-40  gap-16">
          <div></div>

          <motion.div style={{ y }} className="md:absolute md:top-32 w-[90vw] mx-auto md:w-[45vw] border border-white aspect-square rounded-full md:-ml-16 ">
            <div className="w-full flex justify-center items-center h-full text-white ">
              <h2>
              Stay<br/>sick 🤙<br/> 🤧 not <br/>sick
              </h2>
            </div>
          </motion.div>

          <div className="text-white mx-auto">
            <div className="grid gap-4 max-w-[24vw]">
              <h6>Boost helps you sick less</h6>
              <h4>
                Be proactive not reactive about your immunity
              </h4>
              <h5 className="normal-case">
                No one gives a f*ck about their immune system unless they have to...and it took us a pandemic to realize that. BOOST is here to fix that.
              </h5>
              <button className="btn-outline w-[80%]">Buy Boost</button>
            </div>
          </div>

        </div>
      </div>

      <div className="overflow-visible">

        <div className="sticky -top-[36.1vw] overflow-hidden">
          <div className="container-fluid text-white h-[36vw]">
            <h1 className="">Ingredients your mom will love</h1>
          </div>

          <motion.div
            className={
              `transition-all duration-300 container-fluid text-white ` 
              // (section2InView && !section3InView ? 'bg-blue bg-(image:--gradient-blue) ' : '') +
              // (section3InView && !veganInView ? 'bg-(image:--gradient3) ' : '') +
              // (section3InView ? 'bg-bg1 ' : '') +
              // (veganInView ? 'bg-bg1 ' : '')
            }>

            <div className="grid grid-cols-1 lg:grid-cols-3 h-screen">
              <div className="flex flex-col gap-24 justify-center items-center relative">
                <motion.div style={{ scale: scale1,opacity: oapcity1, rotate : rotate1, y: ay1 }} className="blur-sm absolute top-0">
                  <img src="/elderberries.png" className="w-[20.903vw] h-auto" />
                </motion.div>
                <div>
                  <h6>ingredients</h6>
                  <div className="grid gap-2">
                    <motion.h3 
                    className={`font-extrabold 
                    ${section2InView || section3InView ? 'text-transparent text-mystroke ' : '!text-white ' } 
                    ${section3InView ? 'text-mystroke-black': ''}
                    `}>
                      elderberry
                    </motion.h3>
                    <motion.h3 
                      className={`font-extrabold 
                      ${section2InView && !section3InView ? '!text-white ' : 'text-transparent text-mystroke '}
                      ${section3InView ? 'text-mystroke-black ' : ''}
                      `} >
                      Vitamin c
                    </motion.h3>
                    <motion.h3 className={`font-extrabold ${section3InView  ? '!text-black' : 'text-transparent text-mystroke'}`} >Zinc</motion.h3>
                  </div>
                </div>
                <motion.div style={{ scale: scale3,opacity: oapcity3, rotate : rotate3, y: ay3 }} className="rotate-[18deg] absolute -bottom-48">
                  <img src="/elderberries.png" className="w-[28.056vw] h-auto" />
                </motion.div>
              </div>
              <div></div>

              <div className="flex flex-col gap-24 justify-center items-center relative">
                <motion.div style={{ scale: scale4,opacity: oapcity4, rotate : rotate4, y: ay4 }} className="blur-sm absolute -bottom-32">
                  <img src="/elderberries.png" className="w-[20.903vw] h-auto" />
                </motion.div>
                <div className="grid gap-4">
                  {!section2InView && !section3InView && <>
                    <h6>benefits</h6>
                    <div className="transition-all duration-500" >
                      <h5 className="normal-case py-2 border-b border-white">01. Provides Major Cold and Flu Relief</h5>
                      <h5 className="normal-case py-2 border-b border-white">02. Alleviates Sinus Infections</h5>
                      <h5 className="normal-case py-2 border-b border-white">03. Encourages Healthy Skin</h5>
                      <h5 className="normal-case py-2 border-b border-white ">04. Reduces Inflammation</h5>
                    </div>
                    <p>BOOST has 150mg of Elderberry Extract per serving</p>
                  </>}

                  {section2InView && !section3InView && <>
                    <h6>benefits</h6>
                    <div >
                      <h5 className="normal-case py-2 border-b border-white">01. Improves Common Cold Symptoms</h5>
                      <h5 className="normal-case py-2 border-b border-white">02. Holds Antioxidant Properties</h5>
                      <h5 className="normal-case py-2 border-b border-white">03. Promotes Glowing Skin</h5>
                      <h5 className="normal-case py-2 border-b border-white ">04. Enhances Brain Function</h5>
                    </div>
                    <p>BOOST has 100mg of Vitamin C per serving</p>
                  </>}

                  {section3InView && <>
                    <h6 className="text-black">benefits</h6>
                    <div className="text-black">
                      <h5 className="normal-case py-2 border-b border-black">01. Acts as a Powerful Antioxidant</h5>
                      <h5 className="normal-case py-2 border-b border-black">02. Helps Balance Hormones</h5>
                      <h5 className="normal-case py-2 border-b border-black">03. Maintains Heart Health</h5>
                      <h5 className="normal-case py-2 border-b border-black ">04. Aids in Digestion</h5>
                    </div>
                    <p className="text-black">BOOST has 10mg of Zinc per serving</p>
                  </>}
                  
                </div>
                <motion.div style={{ scale: scale2, opacity: oapcity2, rotate : rotate2, y: ay2 }} className="rotate-[18deg] absolute -top-24">
                  <img src="/elderberries.png" className="w-[28.056vw] h-auto" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>


        {/* animation frames */}
        <div id="section1" ref={refSection1} className="h-screen  w-32 mx-auto"></div>
        <div id="section2" ref={refSection2} className="h-screen w-32 mx-auto z-40"></div>
        <div id="section2" ref={refSection3} className="h-screen w-32 mx-auto z-40"></div>
      
      
      </div>


      <div ref={refVegan} className="container-fluid pb-20 ">
        <h1>vegan<br/>non gmo<br/> nut free <br/> gluten free <br/> made in usa</h1>

        {/* gap */}
        <div className="h-80"></div>
        <div className={
          `grid grid-cols-1 md:grid-cols-2 md:gap-[16vw] relative ` + 
          (boostedInView ? 'text-white ': 'text-black ')
        }>

          <motion.div style={{ y }} className="md:absolute top-0 w-[90vw] mx-auto md:w-[45vw] border-[1.5px] border-yellow aspect-square rounded-full md:-ml-16 ">
            <div className="w-full flex justify-center items-center h-full  ">
              <h2>
              Stay<br/>sick 🤙<br/> 🤧 not <br/>sick
              </h2>
            </div>
          </motion.div>

          <div className="grid justify-center ">

            <div className="h-[41vw]"></div>

            <div className="mycard  mb-24 -rotate-6 -translate-x-[4vw]">
              <svg width="102" height="21" fill="none"><path d="M29.521 2.674c.241-.741 1.29-.741 1.53 0l1.298 3.996a.804.804 0 00.765.555h4.202c.779 0 1.103.997.472 1.455l-3.399 2.47a.804.804 0 00-.292.899l1.298 3.996c.241.74-.607 1.357-1.237.899l-3.4-2.47a.804.804 0 00-.944 0l-3.4 2.47c-.63.458-1.478-.158-1.237-.899l1.298-3.996a.804.804 0 00-.292-.9l-3.4-2.469c-.63-.458-.306-1.455.473-1.455h4.202a.804.804 0 00.765-.555l1.299-3.996z" fill="#000"></path><path d="M10.657 2.77l1.299 3.996a1.11 1.11 0 001.055.767h4.202c.483 0 .683.618.293.902l-3.4 2.47a1.11 1.11 0 00-.403 1.24l1.299 3.996a.499.499 0 01-.767.558l-3.4-2.47a1.11 1.11 0 00-1.304 0l-3.4 2.47a.498.498 0 01-.766-.558l1.298-3.996a1.11 1.11 0 00-.403-1.24l-3.4-2.47a.498.498 0 01.294-.902h4.201c.481 0 .907-.31 1.056-.767L9.709 2.77a.498.498 0 01.948 0z" fill="#000" stroke="#000" strokeWidth="0.612"></path><path d="M49.813 2.674c.24-.741 1.289-.741 1.53 0L52.64 6.67a.804.804 0 00.765.555h4.202c.779 0 1.103.997.472 1.455l-3.4 2.47a.804.804 0 00-.291.899l1.298 3.996c.241.74-.607 1.357-1.237.899l-3.4-2.47a.804.804 0 00-.945 0l-3.399 2.47c-.63.458-1.478-.158-1.237-.899l1.298-3.996a.804.804 0 00-.292-.9l-3.4-2.469c-.63-.458-.306-1.455.473-1.455h4.202a.804.804 0 00.765-.555l1.298-3.996zm20.292.37c.24-.74 1.289-.74 1.53 0l1.298 3.997a.804.804 0 00.765.555H77.9c.778 0 1.102.997.472 1.455l-3.4 2.47a.804.804 0 00-.291.899l1.298 3.996c.24.74-.607 1.357-1.237.899l-3.4-2.47a.804.804 0 00-.945 0l-3.4 2.47c-.63.458-1.477-.158-1.237-.9l1.299-3.995a.804.804 0 00-.292-.9l-3.4-2.47c-.63-.457-.306-1.454.473-1.454h4.202a.804.804 0 00.765-.555l1.298-3.997zm20.292-.37c.24-.741 1.288-.741 1.53 0l1.298 3.996a.804.804 0 00.764.555h4.202c.78 0 1.103.997.473 1.455l-3.4 2.47a.804.804 0 00-.292.899l1.299 3.996c.24.74-.607 1.357-1.237.899l-3.4-2.47a.804.804 0 00-.945 0l-3.4 2.47c-.63.458-1.478-.158-1.237-.899l1.299-3.996a.804.804 0 00-.293-.9L83.66 8.68c-.63-.458-.306-1.455.473-1.455h4.202a.804.804 0 00.764-.555l1.299-3.996z" fill="#000"></path></svg>
              <span>I haven't sneezed since i took boostmm</span>
              <div className="footer">
                @superman
              </div>
            </div>

            <div className="mycard rotate-6">
              <svg width="102" height="21" fill="none"><path d="M29.521 2.674c.241-.741 1.29-.741 1.53 0l1.298 3.996a.804.804 0 00.765.555h4.202c.779 0 1.103.997.472 1.455l-3.399 2.47a.804.804 0 00-.292.899l1.298 3.996c.241.74-.607 1.357-1.237.899l-3.4-2.47a.804.804 0 00-.944 0l-3.4 2.47c-.63.458-1.478-.158-1.237-.899l1.298-3.996a.804.804 0 00-.292-.9l-3.4-2.469c-.63-.458-.306-1.455.473-1.455h4.202a.804.804 0 00.765-.555l1.299-3.996z" fill="#000"></path><path d="M10.657 2.77l1.299 3.996a1.11 1.11 0 001.055.767h4.202c.483 0 .683.618.293.902l-3.4 2.47a1.11 1.11 0 00-.403 1.24l1.299 3.996a.499.499 0 01-.767.558l-3.4-2.47a1.11 1.11 0 00-1.304 0l-3.4 2.47a.498.498 0 01-.766-.558l1.298-3.996a1.11 1.11 0 00-.403-1.24l-3.4-2.47a.498.498 0 01.294-.902h4.201c.481 0 .907-.31 1.056-.767L9.709 2.77a.498.498 0 01.948 0z" fill="#000" stroke="#000" strokeWidth="0.612"></path><path d="M49.813 2.674c.24-.741 1.289-.741 1.53 0L52.64 6.67a.804.804 0 00.765.555h4.202c.779 0 1.103.997.472 1.455l-3.4 2.47a.804.804 0 00-.291.899l1.298 3.996c.241.74-.607 1.357-1.237.899l-3.4-2.47a.804.804 0 00-.945 0l-3.399 2.47c-.63.458-1.478-.158-1.237-.899l1.298-3.996a.804.804 0 00-.292-.9l-3.4-2.469c-.63-.458-.306-1.455.473-1.455h4.202a.804.804 0 00.765-.555l1.298-3.996zm20.292.37c.24-.74 1.289-.74 1.53 0l1.298 3.997a.804.804 0 00.765.555H77.9c.778 0 1.102.997.472 1.455l-3.4 2.47a.804.804 0 00-.291.899l1.298 3.996c.24.74-.607 1.357-1.237.899l-3.4-2.47a.804.804 0 00-.945 0l-3.4 2.47c-.63.458-1.477-.158-1.237-.9l1.299-3.995a.804.804 0 00-.292-.9l-3.4-2.47c-.63-.457-.306-1.454.473-1.454h4.202a.804.804 0 00.765-.555l1.298-3.997zm20.292-.37c.24-.741 1.288-.741 1.53 0l1.298 3.996a.804.804 0 00.764.555h4.202c.78 0 1.103.997.473 1.455l-3.4 2.47a.804.804 0 00-.292.899l1.299 3.996c.24.74-.607 1.357-1.237.899l-3.4-2.47a.804.804 0 00-.945 0l-3.4 2.47c-.63.458-1.478-.158-1.237-.899l1.299-3.996a.804.804 0 00-.293-.9L83.66 8.68c-.63-.458-.306-1.455.473-1.455h4.202a.804.804 0 00.764-.555l1.299-3.996z" fill="#000"></path></svg>
              <span>I haven't sneezed since i took boost</span>
              <div className="footer">
                @superman
              </div>
            </div>

          </div>
          <div className="grid justify-center">
            <div>
              <h4 className="mb-2">
              WORD ON<br/>THE STREET
              </h4>
              <p>Trust us with your immunity</p>
            </div>

            {/* <div className="h-[240px]"></div> */}

            <div className="mycard relative -rotate-6">
              <svg width="102" height="21" fill="none"><path d="M29.521 2.674c.241-.741 1.29-.741 1.53 0l1.298 3.996a.804.804 0 00.765.555h4.202c.779 0 1.103.997.472 1.455l-3.399 2.47a.804.804 0 00-.292.899l1.298 3.996c.241.74-.607 1.357-1.237.899l-3.4-2.47a.804.804 0 00-.944 0l-3.4 2.47c-.63.458-1.478-.158-1.237-.899l1.298-3.996a.804.804 0 00-.292-.9l-3.4-2.469c-.63-.458-.306-1.455.473-1.455h4.202a.804.804 0 00.765-.555l1.299-3.996z" fill="#000"></path><path d="M10.657 2.77l1.299 3.996a1.11 1.11 0 001.055.767h4.202c.483 0 .683.618.293.902l-3.4 2.47a1.11 1.11 0 00-.403 1.24l1.299 3.996a.499.499 0 01-.767.558l-3.4-2.47a1.11 1.11 0 00-1.304 0l-3.4 2.47a.498.498 0 01-.766-.558l1.298-3.996a1.11 1.11 0 00-.403-1.24l-3.4-2.47a.498.498 0 01.294-.902h4.201c.481 0 .907-.31 1.056-.767L9.709 2.77a.498.498 0 01.948 0z" fill="#000" stroke="#000" strokeWidth="0.612"></path><path d="M49.813 2.674c.24-.741 1.289-.741 1.53 0L52.64 6.67a.804.804 0 00.765.555h4.202c.779 0 1.103.997.472 1.455l-3.4 2.47a.804.804 0 00-.291.899l1.298 3.996c.241.74-.607 1.357-1.237.899l-3.4-2.47a.804.804 0 00-.945 0l-3.399 2.47c-.63.458-1.478-.158-1.237-.899l1.298-3.996a.804.804 0 00-.292-.9l-3.4-2.469c-.63-.458-.306-1.455.473-1.455h4.202a.804.804 0 00.765-.555l1.298-3.996zm20.292.37c.24-.74 1.289-.74 1.53 0l1.298 3.997a.804.804 0 00.765.555H77.9c.778 0 1.102.997.472 1.455l-3.4 2.47a.804.804 0 00-.291.899l1.298 3.996c.24.74-.607 1.357-1.237.899l-3.4-2.47a.804.804 0 00-.945 0l-3.4 2.47c-.63.458-1.477-.158-1.237-.9l1.299-3.995a.804.804 0 00-.292-.9l-3.4-2.47c-.63-.457-.306-1.454.473-1.454h4.202a.804.804 0 00.765-.555l1.298-3.997zm20.292-.37c.24-.741 1.288-.741 1.53 0l1.298 3.996a.804.804 0 00.764.555h4.202c.78 0 1.103.997.473 1.455l-3.4 2.47a.804.804 0 00-.292.899l1.299 3.996c.24.74-.607 1.357-1.237.899l-3.4-2.47a.804.804 0 00-.945 0l-3.4 2.47c-.63.458-1.478-.158-1.237-.899l1.299-3.996a.804.804 0 00-.293-.9L83.66 8.68c-.63-.458-.306-1.455.473-1.455h4.202a.804.804 0 00.764-.555l1.299-3.996z" fill="#000"></path></svg>
              <span>I haven't sneezed since i took boost</span>
              <div className="footer">
                @superman
              </div>
            </div>

            <div className="mycard translate-x-[4vw] ">
              <svg width="102" height="21" fill="none"><path d="M29.521 2.674c.241-.741 1.29-.741 1.53 0l1.298 3.996a.804.804 0 00.765.555h4.202c.779 0 1.103.997.472 1.455l-3.399 2.47a.804.804 0 00-.292.899l1.298 3.996c.241.74-.607 1.357-1.237.899l-3.4-2.47a.804.804 0 00-.944 0l-3.4 2.47c-.63.458-1.478-.158-1.237-.899l1.298-3.996a.804.804 0 00-.292-.9l-3.4-2.469c-.63-.458-.306-1.455.473-1.455h4.202a.804.804 0 00.765-.555l1.299-3.996z" fill="#000"></path><path d="M10.657 2.77l1.299 3.996a1.11 1.11 0 001.055.767h4.202c.483 0 .683.618.293.902l-3.4 2.47a1.11 1.11 0 00-.403 1.24l1.299 3.996a.499.499 0 01-.767.558l-3.4-2.47a1.11 1.11 0 00-1.304 0l-3.4 2.47a.498.498 0 01-.766-.558l1.298-3.996a1.11 1.11 0 00-.403-1.24l-3.4-2.47a.498.498 0 01.294-.902h4.201c.481 0 .907-.31 1.056-.767L9.709 2.77a.498.498 0 01.948 0z" fill="#000" stroke="#000" strokeWidth="0.612"></path><path d="M49.813 2.674c.24-.741 1.289-.741 1.53 0L52.64 6.67a.804.804 0 00.765.555h4.202c.779 0 1.103.997.472 1.455l-3.4 2.47a.804.804 0 00-.291.899l1.298 3.996c.241.74-.607 1.357-1.237.899l-3.4-2.47a.804.804 0 00-.945 0l-3.399 2.47c-.63.458-1.478-.158-1.237-.899l1.298-3.996a.804.804 0 00-.292-.9l-3.4-2.469c-.63-.458-.306-1.455.473-1.455h4.202a.804.804 0 00.765-.555l1.298-3.996zm20.292.37c.24-.74 1.289-.74 1.53 0l1.298 3.997a.804.804 0 00.765.555H77.9c.778 0 1.102.997.472 1.455l-3.4 2.47a.804.804 0 00-.291.899l1.298 3.996c.24.74-.607 1.357-1.237.899l-3.4-2.47a.804.804 0 00-.945 0l-3.4 2.47c-.63.458-1.477-.158-1.237-.9l1.299-3.995a.804.804 0 00-.292-.9l-3.4-2.47c-.63-.457-.306-1.454.473-1.454h4.202a.804.804 0 00.765-.555l1.298-3.997zm20.292-.37c.24-.741 1.288-.741 1.53 0l1.298 3.996a.804.804 0 00.764.555h4.202c.78 0 1.103.997.473 1.455l-3.4 2.47a.804.804 0 00-.292.899l1.299 3.996c.24.74-.607 1.357-1.237.899l-3.4-2.47a.804.804 0 00-.945 0l-3.4 2.47c-.63.458-1.478-.158-1.237-.899l1.299-3.996a.804.804 0 00-.293-.9L83.66 8.68c-.63-.458-.306-1.455.473-1.455h4.202a.804.804 0 00.764-.555l1.299-3.996z" fill="#000"></path></svg>
              <span>I haven't sneezed since i took boost</span>
              <div className="footer">
                @superman
              </div>
            </div>

            <div className="mycard relative -rotate-3">
              <svg width="102" height="21" fill="none"><path d="M29.521 2.674c.241-.741 1.29-.741 1.53 0l1.298 3.996a.804.804 0 00.765.555h4.202c.779 0 1.103.997.472 1.455l-3.399 2.47a.804.804 0 00-.292.899l1.298 3.996c.241.74-.607 1.357-1.237.899l-3.4-2.47a.804.804 0 00-.944 0l-3.4 2.47c-.63.458-1.478-.158-1.237-.899l1.298-3.996a.804.804 0 00-.292-.9l-3.4-2.469c-.63-.458-.306-1.455.473-1.455h4.202a.804.804 0 00.765-.555l1.299-3.996z" fill="#000"></path><path d="M10.657 2.77l1.299 3.996a1.11 1.11 0 001.055.767h4.202c.483 0 .683.618.293.902l-3.4 2.47a1.11 1.11 0 00-.403 1.24l1.299 3.996a.499.499 0 01-.767.558l-3.4-2.47a1.11 1.11 0 00-1.304 0l-3.4 2.47a.498.498 0 01-.766-.558l1.298-3.996a1.11 1.11 0 00-.403-1.24l-3.4-2.47a.498.498 0 01.294-.902h4.201c.481 0 .907-.31 1.056-.767L9.709 2.77a.498.498 0 01.948 0z" fill="#000" stroke="#000" strokeWidth="0.612"></path><path d="M49.813 2.674c.24-.741 1.289-.741 1.53 0L52.64 6.67a.804.804 0 00.765.555h4.202c.779 0 1.103.997.472 1.455l-3.4 2.47a.804.804 0 00-.291.899l1.298 3.996c.241.74-.607 1.357-1.237.899l-3.4-2.47a.804.804 0 00-.945 0l-3.399 2.47c-.63.458-1.478-.158-1.237-.899l1.298-3.996a.804.804 0 00-.292-.9l-3.4-2.469c-.63-.458-.306-1.455.473-1.455h4.202a.804.804 0 00.765-.555l1.298-3.996zm20.292.37c.24-.74 1.289-.74 1.53 0l1.298 3.997a.804.804 0 00.765.555H77.9c.778 0 1.102.997.472 1.455l-3.4 2.47a.804.804 0 00-.291.899l1.298 3.996c.24.74-.607 1.357-1.237.899l-3.4-2.47a.804.804 0 00-.945 0l-3.4 2.47c-.63.458-1.477-.158-1.237-.9l1.299-3.995a.804.804 0 00-.292-.9l-3.4-2.47c-.63-.457-.306-1.454.473-1.454h4.202a.804.804 0 00.765-.555l1.298-3.997zm20.292-.37c.24-.741 1.288-.741 1.53 0l1.298 3.996a.804.804 0 00.764.555h4.202c.78 0 1.103.997.473 1.455l-3.4 2.47a.804.804 0 00-.292.899l1.299 3.996c.24.74-.607 1.357-1.237.899l-3.4-2.47a.804.804 0 00-.945 0l-3.4 2.47c-.63.458-1.478-.158-1.237-.899l1.299-3.996a.804.804 0 00-.293-.9L83.66 8.68c-.63-.458-.306-1.455.473-1.455h4.202a.804.804 0 00.764-.555l1.299-3.996z" fill="#000"></path></svg>
              <span>I haven't sneezed since i took boost</span>
              <div className="footer">
                @superman
              </div>
            </div>

          </div>
        </div>
      </div>


      <div ref={boostedRef} className="container-fluid py-20 text-white">
        <h1>Get<br/>boosted</h1>
      </div>

      {/* footer */}
      <div className="container-fluid pt-20 pb-10 grid grid-cols-1 gap-16 lg:grid-cols-3 text-white font-medium">
        <div className="grid gap-2">
          <a href="">
            <img src="/logo.svg" className="h-11 block text-white" />
          </a>
          <label htmlFor="">@2025</label>
        </div>
        <div className="grid grid-cols-3 justify-between">
          <div className="grid gap-1 uppercase">
            <a href="">Home</a>
            <a href="">Shop</a>
            <a href="">About</a>
          </div>
          <div className="grid gap-1 uppercase">
            <a href="">contact</a>
            <a href="">terms</a>
            <a href="">policy</a>
          </div>
          <div className="grid gap-1 uppercase">
            <a href="">instagram</a>
            <a href="">tiktok</a>
            <a href="">facebook</a>
          </div>
        </div>

        <div className="grid gap-2 justify-end">
          <p className="text-[0.95vw]">Text us - your 24/7 immunity consultants</p>
          <div className="border-[1.5px] border-white rounded-md flex items-center px-4 w-fit">
            <span className="text-[max(16px,2.4vw)]">+1 99xxxxxxxx</span>
          </div>
        </div>
      </div>

    </>
    
  );
}
