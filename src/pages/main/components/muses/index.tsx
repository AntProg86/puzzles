import React, { useEffect, useContext, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LocalizedStrings from '#src/app/localization';
import './styles.scss';
import CarouselSlider from '#src/components/carousel-slider';

type Props = {

}

//Не хочется засовывать муз в «container».
type MuseArea = {
  name: string;
  imgSrc: string | any;
  artist?: string;
  children:React.JSX.Element;
}

const Muse = ({name, imgSrc, artist, children}:MuseArea) => {
  return(
    <div className='muse_area'>
      <h2>
        {name}
      </h2>
      <div className='muse_area__content'>
        <figure>
          <img src={imgSrc} alt="" />
          <figcaption>
            <p>{LocalizedStrings.artist}&nbsp;</p>
            <p>
              {artist? artist : LocalizedStrings.unknown}
            </p>
          </figcaption>
        </figure>
        <div className='muse_area__text'>
          {children}
        </div>
      </div>
    </div>
  )
}

const Muses: React.FunctionComponent<Props> = () => {
  
  const Calliope_1 = require('../../pictures/Calliope_1.jpg');
  const Euterpe_1 = require('../../pictures/Euterpe_1.jpg');
  const Melpomene_1 = require('../../pictures/Melpomene_1.jpg');
  const Waist_1 = require('../../pictures/Waist_1.jpg');
  const Erato_1 = require('../../pictures/Erato_1.jpg');
  const Polyhymnia_1 = require('../../pictures/Polyhymnia_1.jpg');
  const Terpsichore_1 = require('../../pictures/Terpsichore_1.jpg');
  const Clio_1 = require('../../pictures/Clio_1.jpg');
  const Urania_1 = require('../../pictures/Urania_1.jpg');

  const muses = [
    //Calliope
    ()=>{
      return(
        <Muse 
          name={LocalizedStrings.calliope} 
          artist={LocalizedStrings.charles_meynier} 
          imgSrc={Calliope_1}>
          <div>
            <p>{LocalizedStrings.calliope_paragraph_1}</p>
            <hr />
            <p>{LocalizedStrings.calliope_paragraph_2}</p>
          </div>
        </Muse>
      )
    },
    //Euterpe
    ()=>{
      return(
        <Muse 
          name={LocalizedStrings.euterpe} 
          artist={LocalizedStrings.artist_simon_vouet} 
          imgSrc={Euterpe_1}>
          <div>
            <p>{LocalizedStrings.euterpe__paragraph_1}</p>
            <hr />
            <p>{LocalizedStrings.euterpe__paragraph_2}</p>
            <p>{LocalizedStrings.euterpe__paragraph_3}</p>
            <p>{LocalizedStrings.euterpe__paragraph_4}</p>
          </div>
        </Muse>
      )
    },
    //Melpomene
    ()=>{
      return(
        <Muse 
          name={LocalizedStrings.melpomene} 
          artist={LocalizedStrings.artist_nicolas_rene_jollin}
          imgSrc={Melpomene_1}>
          <div>
            <p>{LocalizedStrings.melpomene_paragraph_1}</p>
            <hr />
            <p>{LocalizedStrings.melpomene_paragraph_2}</p>
            <p>{LocalizedStrings.melpomene_paragraph_3}</p>
          </div>
        </Muse>
      )
    },
    //Waist
    ()=>{
      return(
        <Muse 
          name={LocalizedStrings.waist} 
          artist={LocalizedStrings.artist_jean_baptiste_nattier}
          imgSrc={Waist_1}>
          <div>
            <p>{LocalizedStrings.waist_paragraph_1}</p>
            <hr />
            <p>{LocalizedStrings.waist_paragraph_2}</p>
          </div>
        </Muse>
      )
    },
    //Erato
    ()=>{
      return(
        <Muse 
          name={LocalizedStrings.erato} 
          artist={LocalizedStrings.artist_francois_boucher}
          imgSrc={Erato_1}>
          <div>
            <p>{LocalizedStrings.erato_paragraph_1}</p>
            <hr />
            <p>{LocalizedStrings.erato_paragraph_2}</p>
            <p>{LocalizedStrings.erato_paragraph_3}</p>
          </div>
        </Muse>
      )
    },
    //Terpsichore
    ()=>{
      return(
        <Muse 
          name={LocalizedStrings.terpsichore} 
          artist={LocalizedStrings.artist_jean_marc_nattier}
          imgSrc={Terpsichore_1}>
          <div>
            <p>{LocalizedStrings.terpsichore_paragraph_1}</p>
            <hr />
            <p>{LocalizedStrings.terpsichore_paragraph_2}</p>
            <hr />
            <p>{LocalizedStrings.terpsichore_paragraph_3}</p>
          </div>
        </Muse>
      )
    },
    //Polyhymnia
    ()=>{
      return(
        <Muse 
          name={LocalizedStrings.polyhymnia} 
          artist={LocalizedStrings.artist_meynier_charles}
          imgSrc={Polyhymnia_1}>
          <div>
            <p>{LocalizedStrings.polyhymnia_paragraph_1}</p>
            <hr />
            <p>{LocalizedStrings.polyhymnia_paragraph_2}</p>
          </div>
        </Muse>
      )
    },
    //Clio
    ()=>{
      return(
        <Muse 
          name={LocalizedStrings.clio} 
          artist={LocalizedStrings.artis_charles_meinier}
          imgSrc={Clio_1}>
          <div>
            <p>{LocalizedStrings.clio_paragraph_1}</p>
            <hr />
            <p>{LocalizedStrings.clio_paragraph_2}</p>
          </div>
        </Muse>
      )
    },
    //Urania
    ()=>{
      return(
        <Muse 
          name={LocalizedStrings.urania} 
          artist={LocalizedStrings.artist_francois_andre_vincent}
          imgSrc={Urania_1}>
          <div>
            <p>{LocalizedStrings.urania_paragraph_1}</p>
            <hr />
            <p>{LocalizedStrings.urania_paragraph_2}</p>
            <hr />
            <p>{LocalizedStrings.urania_paragraph_3}</p>
          </div>
        </Muse>
      )
    },
  ]
  return (
    <section >
      <div className='container'>
        <CarouselSlider contentList={muses}/>
      </div>
    </section>
  );
};
    
export default React.memo(Muses);