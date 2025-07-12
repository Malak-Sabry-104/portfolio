import React, { useCallback, useEffect, useState } from "react";
import type { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

import "../embla.css";

type PropType = {
  slides: unknown[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;

  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    AutoScroll({ playOnInit: true }),
  ]);

  const [isPlaying, setIsPlaying] = useState(false);

  const onButtonAutoplayClick = useCallback(
    (callback: () => void) => {
      const autoScroll = emblaApi?.plugins()?.autoScroll;
      if (!autoScroll) return;

      const resetOrStop =
        autoScroll.options.stopOnInteraction === false
          ? autoScroll.reset
          : autoScroll.stop;

      resetOrStop();
      callback();
    },
    [emblaApi]
  );

  const toggleAutoplay = useCallback(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll;
    if (!autoScroll) return;

    const playOrStop = autoScroll.isPlaying()
      ? autoScroll.stop
      : autoScroll.play;
    playOrStop();
  }, [emblaApi]);

  useEffect(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll;
    if (!autoScroll) return;

    setIsPlaying(autoScroll.isPlaying());
    emblaApi
      .on("autoScroll:play", () => setIsPlaying(true))
      .on("autoScroll:stop", () => setIsPlaying(false))
      .on("reInit", () => setIsPlaying(autoScroll.isPlaying()));
    toggleAutoplay();
  }, [emblaApi]);

  return (
    <>
    <div className="embla  mt-[19rem] mx-auto relative">
            <h1 className="text-center text-4xl font-semibold mb-4 ">My Certificates</h1>

      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((cert) => (
            <div className="embla__slide" key={cert.id}>
              <img src={cert.image} className="rounded-2xl" alt="" />
            </div>
          ))}
        </div>
      </div>
      <div className="top-0 h-[100%] w-50 absolute bg-gradient-to-r from-[#0d0b1f]/100 to-transparent z-50"></div>
      <div className="top-0 h-[100%] w-50 absolute bg-gradient-to-l right-0 from-[#0d0b1f]/100 to-transparent z-50"></div>
    </div>
    </>
  
  );
};

export default EmblaCarousel;
