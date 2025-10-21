import React from 'react';
import ImgCarousel from '../../ImgCarousel/img-carousel';
import { createImageArray, createCaptionArray } from '../../../utils/utils'; 


//================================= Allgemein ================================
import url1 from '../../../../static/img/ppr/carousel/1.png'
import url2 from '../../../../static/img/ppr/carousel/2.png'
import url4 from '../../../../static/img/ppr/carousel/4.png'
import url5 from '../../../../static/img/ppr/carousel/5.png'

const imagesPprPrint = createImageArray (
    url1, url2, url4, url5 
);

const captionsPprPrint = createCaptionArray(
    "Hier wie zuvor den Auftrag suchen",   
    "Lieferort auswählen und anhaken",   
    "Jetzt warten bis der blaue lange Button geladen wurde, dann anklicken",
    "Nun können die Papiere wie jedes andere Dokument normal gedruckt werden",
);

export function PprPrintCarousel() {
    return (
        <>
            <ImgCarousel images={imagesPprPrint} captions={captionsPprPrint}/>            
        </>
    )
}
//============================================================================
