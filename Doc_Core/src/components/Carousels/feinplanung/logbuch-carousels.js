import React from 'react';
import ImgCarousel from '../../ImgCarousel/img-carousel';
import { createImageArray, createCaptionArray } from '../../../utils/utils'; 


import url1 from '../../../../static/img/feinplanung/logbuch/1.png'
import url2 from '../../../../static/img/feinplanung/logbuch/2.png'
import url3 from '../../../../static/img/feinplanung/logbuch/3.png'
import url4 from '../../../../static/img/feinplanung/logbuch/4.png'
import url5 from '../../../../static/img/feinplanung/logbuch/5.png'
import url6 from '../../../../static/img/feinplanung/logbuch/6.png'
import url7 from '../../../../static/img/feinplanung/logbuch/7.png'
import url8 from '../../../../static/img/feinplanung/logbuch/8.png'
import url9 from '../../../../static/img/feinplanung/logbuch/9.png'
import url10 from '../../../../static/img/feinplanung/logbuch/10.png'



const imagesLogbook = createImageArray (
    url1, url2, url3, url4, url5, 
    url6, url7, url8, url9, url10
);

const captionsLogbook = createCaptionArray(
    "Klicke auf Feinplanung",
    "Halle und Bereich auswählen",
    "Den Reiter Logbuch auswählen",
    "Nun den gewünschten Arbeitsplatz/Maschine wählen und auf das Plus-Symbol klicken",
    "Gewünschten Auftrag suchen und auf Plus-Symbol klicken",
    "Hier kann die Schicht ausgewählt werden",
    "Daten des Arbeitsplatzes/Maschine",
    "Per Klick auf die Auftragsnummer kommt man zur Stückliste und zum Arbeitsplan",
    "Daten des Auftrags",
    "Verluste des Auftrags"
);

export function LogbookCarousel() {
    return (
        <>
            <ImgCarousel images={imagesLogbook} captions={captionsLogbook}/>            
        </>
    )
}
//============================================================================
