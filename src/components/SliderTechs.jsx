import { Button } from "reactstrap"

const Techs = () => {
  return (
    <div className="techbutton-container">
    <Button className="techs">Html</Button>
    <Button className="techs">Css</Button>
    <Button className="techs">Reactjs</Button>
    <Button className="techs">Nodejs</Button>
    <Button className="techs">Express</Button>    
    <Button className="techs">PostgresSQL</Button>    
    <Button className="techs">Git&Github</Button>    
    <Button className="techs">Vite</Button>    
    <Button className="techs">Vercel</Button>    

    </div>
  )
}

export default Techs






































{/* !!!: 







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
    src: 'assets/html5.png',
    altText: 'Slide 1',
    caption: 'Slide 1',
    key: 1,
    className:"techimg"
  },
  {
    src: 'assets/css.png',
    altText: 'Slide 2',
    caption: 'Slide 2',
    key: 2,
  },
  {
    src: 'assets/reactjs.png',
    altText: 'Slide 3',
    caption: 'Slide 3',
    key: 3,
  },
  {
    src: 'assets/git.png',
    altText: 'Slide 4',
    caption: 'Slide 4',
    key: 4,
  },
  {
    src: 'assets/nodejs.png',
    altText: 'Slide 5',
    caption: 'Slide 5',
    key: 5,
  },

  {
    src: 'assets/postgress.png',
    altText: 'Slide 6',
    caption: 'Slide 6',
    key: 6,
  },
  {
    src: 'assets/bootstrap.png',
    altText: 'Slide 7',
    caption: 'Slide 7',
    key: 7,
  },
];

function Techs(args) {
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

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

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

export default Techs;
*/}