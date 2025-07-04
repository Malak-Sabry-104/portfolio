import React, { useCallback, useEffect, useState } from "react";
import type { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

import "../embla.css";

// import {
//   NextButton,
//   PrevButton,
//   usePrevNextButtons
// } from './EmblaCarouselArrowButtons'

type PropType = {
  slides: unknown[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;

  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    AutoScroll({ playOnInit: true }), // ← تشغيل تلقائي عند بداية التشغيل
  ]);

  const [isPlaying, setIsPlaying] = useState(false);

  // const {
  //   prevBtnDisabled,
  //   nextBtnDisabled,
  //   onPrevButtonClick,
  //   onNextButtonClick
  // } = usePrevNextButtons(emblaApi)

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
    <div className="embla my-5 mx-auto relative">
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

      {/* <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton
            onClick={() => onButtonAutoplayClick(onPrevButtonClick)}
            disabled={prevBtnDisabled}
          />
          <NextButton
            onClick={() => onButtonAutoplayClick(onNextButtonClick)}
            disabled={nextBtnDisabled}
          />
        </div>

        <button className="embla__play" onClick={toggleAutoplay} type="button">
          {isPlaying ? 'Stop' : 'Start'}
        </button>
      </div> */}
    </div>
  );
};

export default EmblaCarousel;
