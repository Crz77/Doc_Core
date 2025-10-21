import React from 'react';
import ImgCarousel from '../../ImgCarousel/img-carousel';
import { createImageArray, createCaptionArray } from '../../../utils/utils'; 


import url1 from '../../../../static/img/feinplanung/1.png'
import url2 from '../../../../static/img/feinplanung/2.png'
import url3 from '../../../../static/img/feinplanung/schichtplanung/3.png'
import url4 from '../../../../static/img/feinplanung/schichtplanung/4.png'


const imagesShiftplanningGoTo = createImageArray (
    url1, url2, url3, url4
);

const captionsShiftplanningGoTo = createCaptionArray (
    "Klicke auf Feinplanung",
    "Halle und Bereich auswählen",
    "Auf den Reiter Schichtplanung klicken",
    "Standardansicht der Schichtplanung"
);

export function ShiftPlanningGoToCarousel() {
    return (
        <>
            <ImgCarousel images={imagesShiftplanningGoTo} captions={captionsShiftplanningGoTo}/>            
        </>
    )
}
//============================================================================

import url5 from '../../../../static/img/feinplanung/schichtplanung/5.png'
import url6 from '../../../../static/img/feinplanung/schichtplanung/6.png'
import url7 from '../../../../static/img/feinplanung/schichtplanung/7.png'
import url8 from '../../../../static/img/feinplanung/schichtplanung/8.png'
import url9 from '../../../../static/img/feinplanung/schichtplanung/9.png'

const imagesShiftplanningNavigationBar = createImageArray (
    url5, url6, url7, url8, url9,
);

const captionsShiftplanningNavigationBar = createCaptionArray (
    "Die Navigationsleiste",
    "Mit den Pfeiltasten kannst du einen Tag vor oder zurück schalten",
    "Per Klick auf das Datumsfeld kannst du im Kalender navigieren",
    "Über die beiden Schaltflächen kannst du eine Woche anlegen oder bearbeiten",
    "Hier kannst du die Konfiguration der Personen Speichern bzw. Abbrechen (wie im Reiter Sequenz mit den Aufträgen)"
);

export function ShiftPlanningNavigationBarCarousel() {
    return (
        <>
            <ImgCarousel images={imagesShiftplanningNavigationBar} captions={captionsShiftplanningNavigationBar}/>            
        </>
    )
}
//============================================================================

const imagesShiftplanningCreateNewWeek = createImageArray (
    url1, url2, url3, url4
);

const captionsShiftplanningCreateNewWeek = createCaptionArray (
    "Klicke auf Feinplanung",
    "Halle und Bereich auswählen",
    "Auf den Reiter Schichtplanung klicken",
    "Standardansicht der Schichtplanung"
);

export function ShiftPlanningCreateNewWeekCarousel() {
    return (
        <>
            <ImgCarousel images={imagesShiftplanningCreateNewWeek} captions={captionsShiftplanningCreateNewWeek}/>            
        </>
    )
}
//============================================================================