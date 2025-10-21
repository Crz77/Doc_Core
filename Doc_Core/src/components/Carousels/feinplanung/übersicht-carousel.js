import React from 'react';
import ImgCarousel from '../../ImgCarousel/img-carousel';
import { createImageArray, createCaptionArray } from '../../../utils/utils'; 
import url1 from '../../../../static/img/feinplanung/1.png'
import url2 from '../../../../static/img/feinplanung/2.png'

//================================= Allgemein ================================
import url1_3 from '../../../../static/img/feinplanung/übersicht/allgemein/3.png'


const imagesOverview = createImageArray (
    url1, url2, url1_3 
);

const captionsOverview = createCaptionArray(
    "Um zur Übersicht zu gelangen, klicke auf Feinplanung & Steuerung",   
    "Wähle deine Halle und deinen Bereich",   
    "Reiter Übersicht in der Feinplanung"
);

export function OverviewCarousel() {
    return (
        <>
            <ImgCarousel images={imagesOverview} captions={captionsOverview}/>            
        </>
    )
}
//============================================================================


//================================ Workcenter ================================
import url2_3 from '../../../../static/img/feinplanung/übersicht/workcenter/3.png'
import url2_4 from '../../../../static/img/feinplanung/übersicht/workcenter/4.png'
import url2_5 from '../../../../static/img/feinplanung/übersicht/workcenter/5.png'
import url2_6 from '../../../../static/img/feinplanung/übersicht/workcenter/6.png'
import url2_7 from '../../../../static/img/feinplanung/übersicht/workcenter/7.png'
import url2_8 from '../../../../static/img/feinplanung/übersicht/workcenter/8.png'


const imagesWorkcenter = createImageArray (
    url2_3, url2_4, url2_5, url2_6, 
    url2_7, url2_8
);

const captionsWorkcenter = createCaptionArray(
    "Links sind die Workcenter zu sehen, sie bestehen aus einem oder mehreren Arbeitsplätzen (Maschinen)",   
    "Hier ein Beispiel, wenn Workcenter mehrere Maschinen umfassen",   
    "Unter dem Namen des Workcenters ist der Servicefaktor für dieses zu sehen",
    "Rechts daneben, der aktuelle Backlog",
    "Darunter die Arbeitsplätze (Maschinen), aus denen das Workcenter besteht",
    "Neben der Maschine steht die Summe der Stunden, die aktuell auf dieser verplant sind"
);

export function WorkcenterCarousel() {
    return (
        <>
            <ImgCarousel images={imagesWorkcenter} captions={captionsWorkcenter}/>            
        </>
    )
}


//=========== Workcenter auswählen
import url2_9 from '../../../../static/img/feinplanung/übersicht/workcenter/9.png'
import url2_10 from '../../../../static/img/feinplanung/übersicht/workcenter/10.png'
import url2_11 from '../../../../static/img/feinplanung/übersicht/workcenter/11.png'
import url2_12 from '../../../../static/img/feinplanung/übersicht/workcenter/12.png'

const imagesSelectWorkcenter = createImageArray (
    url2_9, url2_10, url2_11, url2_12
);

const captionsSelectWorkcenter = createCaptionArray(
    "Im Reiter Übersicht rechts oben auf die ausgewählten Workcenter klicken",
    "Wenn ein Häkchen neben dem Workcenter ist, wird dieses auch in der Übersicht angezeigt",
    "Gewünschte Workcenter auswählen",
    "Ausgewählte Workcenter werden nun in der Übersicht angezeigt"
);

export function SelectWorkcenterCarousel() {
    return (
        <>
            <ImgCarousel images={imagesSelectWorkcenter} captions={captionsSelectWorkcenter}/>            
        </>
    )
}

//============================================================================



//============================== Balkendiagramm ==============================
import url3_3 from '../../../../static/img/feinplanung/übersicht/balkendiagramme/3.png'
import url3_4 from '../../../../static/img/feinplanung/übersicht/balkendiagramme/4.png'
import url3_5 from '../../../../static/img/feinplanung/übersicht/balkendiagramme/5.png'
import url3_6 from '../../../../static/img/feinplanung/übersicht/balkendiagramme/6.png'
import url3_7 from '../../../../static/img/feinplanung/übersicht/balkendiagramme/7.png'
import url3_8 from '../../../../static/img/feinplanung/übersicht/balkendiagramme/8.png'

const imagesBarChart = createImageArray (
    url3_3, url3_4, url3_5, url1_3,
    url3_6, url3_7, url3_8
);

const captionsBarChart = createCaptionArray(
    "Das Balkendiagramm zeigt die verplanten Aufträge auf einer Maschine an",
    "Die liegt entlang der X-Achse, daran kann gesehen werden, wie lange eine Maschine für einen Auftrag verplant ist",
    "Der schmale, senkrechte Balken definiert den Anfang eines Auftrages, die Farbe zeigt, ob das Beginndatum noch in der Gegenwart (Grau) liegt oder schon in der Vergangenheit (Rot), Gelb ist dazwischen",
    "Es gibt drei Balkenfarben: Grün, Grau und Rot",
    "Ist ein ein Auftrag grün, bedeutet es, dass dieser gerade läuft",
    "Ist ein Auftrag grau, ist er zwar schon auf einer Maschine feinverplant, wurde aber noch nicht gestartet",
    "Ist ein Auftrag rot, bedeutet es, dass dieser pausiert wurde. Das heißt, die Bearbeitung wurde aus irgendeinem Grund unterbrochen"
);

export function BarChartCarousel() {
    return (
        <>
            <ImgCarousel images={imagesBarChart} captions={captionsBarChart}/>            
        </>
    )
}
//============================================================================



//============================== Zoom ==============================
import url4_3 from '../../../../static/img/feinplanung/übersicht/zoom/3.png'
import url4_4 from '../../../../static/img/feinplanung/übersicht/zoom/4.png'
import url4_5 from '../../../../static/img/feinplanung/übersicht/zoom/5.png'

const imagesZoom = createImageArray (
    url4_3, url4_4, url4_5
);

const captionsZomm = createCaptionArray(
    "Rechts über der Zeitachse gibt es die Möglichkeit zu zoomen",
    "Es besteht die Möglichkeit auf bis zu 11 Schichten heraus zu zoomen",
    "Oder bis auf unter eine Stunde hinein zu zoomen"
);

export function ZoomCarousel() {
    return (
        <>
            <ImgCarousel images={imagesZoom} captions={captionsZomm}/>            
        </>
    )
}
//============================================================================
