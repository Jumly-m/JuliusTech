import { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

const items = [
  {
    src: 'assets/wds.png',
    altText: 'webdeveloperinswahili',
    caption: 'Web developer frontend',
    key: 1,
    link: 'https://wds-five.vercel.app/', // Add the link property
  },
  {
    src: 'assets/pretium1.png',
    altText: 'pretiumpresale',
    caption: 'Slide 1',
    key: 2,
    link: 'https://pretiummarginpresale-updated.pages.dev/', // Add the link property
  },
  {
    src: 'assets/legacy.png',
    altText: 'legacyAi',
    caption: 'Chat completion bot',
    key: 3,
    link: 'https://legacy-ai-frontend.vercel.app/chats', // Add the link property
  },
  // ... (other items with links)
];

function Projects(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => (
    <CarouselItem
      onExiting={() => setAnimating(true)}
      onExited={() => setAnimating(false)}
      key={item.src}
    >
      {/* Wrap the img tag inside the <a> tag */}
      <a href={item.link} target="_blank" rel="noopener noreferrer">
        <img className='project-img' src={item.src} alt={item.altText}  style={{ width: '100%' }}/>
      </a>
      <CarouselCaption
        captionText={item.caption}
        captionHeader={item.caption}
      />
    </CarouselItem>
  ));

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}

export default Projects;
