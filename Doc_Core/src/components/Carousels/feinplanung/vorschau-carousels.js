import React from 'react';
import ImgCarousel from '../../ImgCarousel/img-carousel';
import { createImageArray, createCaptionArray } from '../../../utils/utils'; 


//================================= Allgemein ================================
import url1 from '../../../../static/img/feinplanung/vorschau/1.png'
import url2 from '../../../../static/img/feinplanung/vorschau/2.png'
import url3 from '../../../../static/img/feinplanung/vorschau/3.png'
import url4 from '../../../../static/img/feinplanung/vorschau/4.png'

const imagesPreviewGeneral = createImageArray (
    url1, url2, url3, url4 
);

const captionsPreviewGeneral = createCaptionArray(
    "Um zur Übersicht zu gelangen, klicke auf Feinplanung & Steuerung",   
    "Wähle deine Halle und deinen Bereich",   
    "Reiter Vorschau wählen",
    "Hier die Workcenter einstellen, welche angezeigt werden sollen"
);

export function PreviewGeneralCarousel() {
    return (
        <>
            <ImgCarousel images={imagesPreviewGeneral} captions={captionsPreviewGeneral}/>            
        </>
    )
}
//============================================================================


//================================= Stunden ================================
import url1_5 from '../../../../static/img/feinplanung/vorschau/stunden/5.png'
import url1_6 from '../../../../static/img/feinplanung/vorschau/stunden/6.png'
import url1_7 from '../../../../static/img/feinplanung/vorschau/stunden/7.png'
import url1_8 from '../../../../static/img/feinplanung/vorschau/stunden/8.png'
import url1_9 from '../../../../static/img/feinplanung/vorschau/stunden/9.png'
import url1_10 from '../../../../static/img/feinplanung/vorschau/stunden/10.png'
import url1_11 from '../../../../static/img/feinplanung/vorschau/stunden/11.png'
import url1_12 from '../../../../static/img/feinplanung/vorschau/stunden/12.png'

const imagesPreviewHours = createImageArray (
    url1_5, url1_6, url1_7, url1_8,
    url1_9, url1_10, url1_11, url1_12
);

const captionsPreviewHours = createCaptionArray(
    "Links wird der Name des Workcenters angezeigt, inklusive der Maschinen die es umfasst",
    "Rechts neben dem Workcenter wird der jeweilige Backlog von diesem angezeigt",
    "Diese Kachel zeigt, dass das Workcenter PIRO ABSTICH in der KW40 mit 37 Stunden verplant ist",
    "Die Kachel unten zeigt, wie viele Stunden die ausgewählten Workcenter gesamt in dieser Woche verplant sind",
    "Per Klick auf eine Kachel können die verplanten Aufträge eingesehen werden",
    "Diese Aufträge sind in KW41 auf den beiden Minganti Maschinen geplant, wenn ein Auftrag noch ausgegraut ist, wurde er vom Planer noch nicht released",
    "Per Klick auf ein Workcenter kann die Auslastung noch einmal als Grafik dargestellt werden",
    "Grau sind die Aufträge die vom Planer noch nicht freigegeben wurden, grün sind die Stunde, welche vom Planer freigegeben, aber vom Vorarbeiter noch nicht feinverplant wurden und orange sind die bereits feingeplanten Stunden"
);

export function PreviewHoursCarousel() {
    return (
        <>
            <ImgCarousel images={imagesPreviewHours} captions={captionsPreviewHours}/>            
        </>
    )
}
//============================================================================


//================================= Personal =================================
import url2_5 from '../../../../static/img/feinplanung/vorschau/personal/5.png'
import url2_6 from '../../../../static/img/feinplanung/vorschau/personal/6.png'
import url2_7 from '../../../../static/img/feinplanung/vorschau/personal/7.png'
import url2_8 from '../../../../static/img/feinplanung/vorschau/personal/8.png'
import url2_9 from '../../../../static/img/feinplanung/vorschau/personal/9.png'

const imagesPreviewStaff = createImageArray (
    url2_5, url2_6, url2_7
);

const captionsPreviewStaff = createCaptionArray(
    "Im Reiter Vorschau, links unten auf Personal umschalten",
    "Der Backlog hat mit dem Personal nichts zu tun und zeigt immer noch den Backlog der Auftragsstunden an",
    "Hier sehen wir, dass wir in KW40 beispielsweise etwa zwei Personen auf der Minganti Twin benötigen um den Arbeitsaufwand zu bewältigen"
);

export function PreviewStaffCarousel() {
    return (
        <>
            <ImgCarousel images={imagesPreviewStaff} captions={captionsPreviewStaff}/>            
        </>
    )
}
//============================================================================