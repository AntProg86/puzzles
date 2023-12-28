import React, { useEffect, useContext, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LocalizedStrings from '#src/app/localization';
import './styles.scss';

type Props = {
  contentList: Array<()=>React.JSX.Element>;
}

const CarouselSlider: React.FunctionComponent<Props> = ({contentList}) => {

  const len = contentList.length - 1;
  const [activeIndex, setActiveIndex] = useState(0);

  // useEffect(()=>{
  //   const interval = setInterval(()=>{
  //     setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
  //   }, 5000);
  //   return () => clearInterval(interval)
  // },[activeIndex]);
  
  const Arrows = ({prevSlide, nextSlide}:any) => {
    return(
      <div className='arrows'>
        <span className='prev' onClick={prevSlide}>
          &#10094;
        </span>
        <span className='next' onClick={nextSlide}>
          &#10095;
        </span>

      </div>
    )
  };

  const Dots =({activeIndex, onClick, ElementsSlider}:any) => {
    return(
      <div className='all-dots'>
        
        {ElementsSlider.map((slide:any, index:any)=>(
          <span 
          key={index} 
          className={`${activeIndex === index ? 'dot active' : 'dot'}`}
          onClick={()=>onClick(index)}
          >

          </span>
        ))}
      </div>
    )
  };

  const SliderContent = ({activeIndex}:any) => {
    
    return(
      <section className='slider-content-container'>
        {contentList.map((Elem:any, index:any)=>(
          
          <div key={index}>
            {index === activeIndex ? (
              <>
              <div  className='slides'>
                <Elem/>
              </div>
              </>
            ) : (
              <>
              </>
            )}
          </div>
        ))}
      </section>
    )
  };


  
  return (
    <div className="slider-container">
      
      <SliderContent 
        activeIndex={activeIndex}
      />
      <Arrows 
        prevSlide={()=> setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)}
        nextSlide={()=> setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)}
      />
      {/* <Dots 
        activeIndex={activeIndex}
        ElementsSlider={contentList}
        onClick={(activeIndex:any) => setActiveIndex(activeIndex)}
      /> */}
    </div>
  );
};
    
export default React.memo(CarouselSlider);