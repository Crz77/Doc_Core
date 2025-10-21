import React from 'react';
import ImgCarousel from '../ImgCarousel/img-carousel';
import { createImageArray, createCaptionArray } from '../../utils/utils'; 
import url1 from '../../../static/img/fertigung/1.png'
import url2 from '../../../static/img/fertigung/2.png'

//================================ Ohne Collo ================================
//====================== Neue Rückmeldung ohne Verluste ======================
import url1_3 from '../../../static/img/fertigung/rückmeldung/rückmeldung-ohne-collo/ohne-verluste/3.png'
import url1_4 from '../../../static/img/fertigung/rückmeldung/rückmeldung-ohne-collo/ohne-verluste/4.png'
import url1_5 from '../../../static/img/fertigung/rückmeldung/rückmeldung-ohne-collo/ohne-verluste/5.png'
import url1_6 from '../../../static/img/fertigung/rückmeldung/rückmeldung-ohne-collo/ohne-verluste/6.png'
import url1_7 from '../../../static/img/fertigung/rückmeldung/rückmeldung-ohne-collo/ohne-verluste/7.png'
import url1_8 from '../../../static/img/fertigung/rückmeldung/rückmeldung-ohne-collo/ohne-verluste/8.png'

const imagesWithoutLoss = createImageArray (url1, url2, url1_3, url1_4, url1_5, url1_6, url1_7, url1_8);

const captionsWithoutLoss = createCaptionArray(
    "Klicke auf Fertigung",
    "Halle und Bereich / Arbeitsplatz / Maschine wählen",
    "Richtigen Auftrag suchen und auf das Plus-Symbol klicken",
    "Personalnummer eingeben und Namen auswählen",
    "Schicht / Zeit / Datum eingeben (Maske kann je nach Einstellung etwas anders aussehen)",
    "Bei neuem Auftrag auf das Play-Symbol klicken, sonst weiter zum nächsten Bild",
    "Gutmenge und Ausschuss eintragen und auf Speichern klicken (kann ebenfalls etwas anderes aussehen)",
    "Auftragsdaten wurden mit der Rückmeldung aktualisiert"    
);

export function FeedbackNoLossCarousel() {
    return (
        <>
            <ImgCarousel images={imagesWithoutLoss} captions={captionsWithoutLoss}/>            
        </>
    )
}
//============================================================================

//====================== Neue Rückmeldung mit Verlusten ======================
import url2_3 from '../../../static//img/fertigung/rückmeldung/rückmeldung-ohne-collo/mit-verlusten/3.png'
import url2_4 from '../../../static//img/fertigung/rückmeldung/rückmeldung-ohne-collo/mit-verlusten/4.png'
import url2_5 from '../../../static//img/fertigung/rückmeldung/rückmeldung-ohne-collo/mit-verlusten/5.png'
import url2_6 from '../../../static//img/fertigung/rückmeldung/rückmeldung-ohne-collo/mit-verlusten/6.png'
import url2_7 from '../../../static//img/fertigung/rückmeldung/rückmeldung-ohne-collo/mit-verlusten/7.png'
import url2_8 from '../../../static//img/fertigung/rückmeldung/rückmeldung-ohne-collo/mit-verlusten/8.png'

//=========== ohne Rüsten
import url2_1_9 from '../../../static//img/fertigung/rückmeldung/rückmeldung-ohne-collo/mit-verlusten/ohne-rüsten/9.png'
import url2_1_10 from '../../../static//img/fertigung/rückmeldung/rückmeldung-ohne-collo/mit-verlusten/ohne-rüsten/10.png'
import url2_1_11 from '../../../static//img/fertigung/rückmeldung/rückmeldung-ohne-collo/mit-verlusten/ohne-rüsten/11.png'
import url2_1_12 from '../../../static//img/fertigung/rückmeldung/rückmeldung-ohne-collo/mit-verlusten/ohne-rüsten/12.png'

const imagesWithLossNoEquip = createImageArray(
    url1, url2, url2_3, url2_4, url2_5, url2_6, 
    url2_7, url2_8, url2_1_9, url2_1_10, url2_1_11, url2_1_12
);
                                              
const captionsWithLossNoEquip = createCaptionArray (
    "Klicke auf Fertigung",
    "Halle und Bereich / Arbeitsplatz / Maschine wählen",
    "Richtigen Auftrag suchen und auf das Plus-Symbol klicken",
    "Personalnummer eingeben und Namen auswählen",
    "Schicht / Zeit / Datum eingeben (Maske kann je nach Einstellung etwas anders aussehen)",
    "Bei neuem Auftrag auf das Play-Symbol klicken, sonst weiter zum nächsten Bild",
    "Gutmenge und Ausschuss eintragen (kann ebenfalls etwas anderes aussehen)",
    "Fehlende Zeit muss noch definiert werden, dazu auf hinzufügen klicken",
    "Richtigen Verlust auswählen (in diesem Bsp. ein mechanischer Ausfall)",
    "Dauer, Begründung und Maschine auswählen, falls der Arbeitsplatz mehrere umfasst, anschließend Notiz für bessere Rekonstruierung eintragen",
    "Verlust ist nun eingetragen und der gelbe Balken ist verschwunden, Eintrag kann gespeichert werden",
    "Auftragsdaten wurden mit der Rückmeldung aktualisiert"    
);

export function FeedbackLossNoEquipCarousel() {
    return (
        <>
            <ImgCarousel images={imagesWithLossNoEquip} captions={captionsWithLossNoEquip}/>            
        </>
    )
}


//=========== innerhalb Rüstzeit
import url2_2_9 from '../../../static//img/fertigung/rückmeldung/rückmeldung-ohne-collo/mit-verlusten/innerhalb-rüstzeit/9.png'
import url2_2_10 from '../../../static//img/fertigung/rückmeldung/rückmeldung-ohne-collo/mit-verlusten/innerhalb-rüstzeit/10.png'
import url2_2_11 from '../../../static//img/fertigung/rückmeldung/rückmeldung-ohne-collo/mit-verlusten/innerhalb-rüstzeit/11.png'
import url2_2_12 from '../../../static//img/fertigung/rückmeldung/rückmeldung-ohne-collo/mit-verlusten/innerhalb-rüstzeit/12.png'
import url2_2_13 from '../../../static//img/fertigung/rückmeldung/rückmeldung-ohne-collo/mit-verlusten/innerhalb-rüstzeit/13.png'
import url2_2_14 from '../../../static//img/fertigung/rückmeldung/rückmeldung-ohne-collo/mit-verlusten/innerhalb-rüstzeit/14.png'
import url2_2_15 from '../../../static//img/fertigung/rückmeldung/rückmeldung-ohne-collo/mit-verlusten/innerhalb-rüstzeit/15.png'

const imagesWithLossStdEquip = createImageArray(
    url1, url2, url2_3, url2_4, url2_5, url2_6, url2_7, url2_8,
    url2_2_9, url2_2_10, url2_2_11, url2_2_12, url2_2_13, url2_2_14,
    url2_2_15
);

const captionsWithLossStdEquip = createCaptionArray (
    "Klicke auf Fertigung",
    "Halle und Bereich / Arbeitsplatz / Maschine wählen",
    "Richtigen Auftrag suchen und auf das Plus-Symbol klicken",
    "Personalnummer eingeben und Namen auswählen",
    "Schicht / Zeit / Datum eingeben (Maske kann je nach Einstellung etwas anders aussehen)",
    "Bei neuem Auftrag auf das Play-Symbol klicken, sonst weiter zum nächsten Bild",
    "Gutmenge und Ausschuss eintragen (kann ebenfalls etwas anderes aussehen)",
    "Rüsten eintragen, dazu auf hinzufügen klicken",
    "Unter Rüsten den Unterpunkt Hauptrüstung auswählen",
    "Rüstzeit eintragen und auf Hinzufügen klicken",
    "Rüstung ist nun verbucht",
    "Fehlende Zeit muss noch definiert werden, dazu auf hinzufügen klicken und richtigen Verlust auswählen (in diesem Bsp. ein mechanischer Ausfall)",
    "Dauer, Begründung und Maschine auswählen, falls der Arbeitsplatz mehrere umfasst, anschließend Notiz für bessere Rekonstruierung eintragen",
    "Verlust ist nun eingetragen und der gelbe Balken ist verschwunden, Eintrag kann gespeichert werden",
    "Auftragsdaten wurden mit der Rückmeldung aktualisiert"         
);

export function FeedbackLossEquipInTimeCarousel() {
    return (
        <>
            <ImgCarousel images={imagesWithLossStdEquip} captions={captionsWithLossStdEquip}/>            
        </>
    )
}


//=========== außerhalb Rüstzeit
import url2_3_9 from '../../../static//img/fertigung/rückmeldung/rückmeldung-ohne-collo/mit-verlusten/außerhalb-rüstzeit/9.png'
import url2_3_10 from '../../../static//img/fertigung/rückmeldung/rückmeldung-ohne-collo/mit-verlusten/außerhalb-rüstzeit/10.png'
import url2_3_11 from '../../../static//img/fertigung/rückmeldung/rückmeldung-ohne-collo/mit-verlusten/außerhalb-rüstzeit/11.png'
import url2_3_12 from '../../../static//img/fertigung/rückmeldung/rückmeldung-ohne-collo/mit-verlusten/außerhalb-rüstzeit/12.png'
import url2_3_13 from '../../../static//img/fertigung/rückmeldung/rückmeldung-ohne-collo/mit-verlusten/außerhalb-rüstzeit/13.png'
import url2_3_14 from '../../../static//img/fertigung/rückmeldung/rückmeldung-ohne-collo/mit-verlusten/außerhalb-rüstzeit/14.png'

const imagesWithLossNoStdEquip = createImageArray(
    url1, url2, url2_3, url2_4, url2_5, url2_6, url2_7, url2_8,
    url2_2_9, url2_3_9, url2_3_10, url2_3_11, url2_3_12, url2_3_13,
    url2_3_14
);

const captionsWithLossNoStdEquip = createCaptionArray (
    "Klicke auf Fertigung",
    "Halle und Bereich / Arbeitsplatz / Maschine wählen",
    "Richtigen Auftrag suchen und auf das Plus-Symbol klicken",
    "Personalnummer eingeben und Namen auswählen",
    "Schicht / Zeit / Datum eingeben (Maske kann je nach Einstellung etwas anders aussehen)",
    "Bei neuem Auftrag auf das Play-Symbol klicken, sonst weiter zum nächsten Bild",
    "Gutmenge und Ausschuss eintragen (kann ebenfalls etwas anderes aussehen)",
    "Rüsten eintragen, dazu auf hinzufügen klicken",
    "Unter Rüsten den Unterpunkt Hauptrüstung auswählen",
    "Rüstzeit eintragen, treffenden Verlust auswählen und Notiz eintragen falls nötig, anschließend auf Hinzufügen klicken",
    "Rüstung und Verlust sind nun verbucht",
    "Fehlende Zeit muss noch definiert werden, dazu auf hinzufügen klicken und richtigen Verlust auswählen (in diesem Bsp. ein mechanischer Ausfall)",
    "Dauer, Begründung und Maschine auswählen, falls der Arbeitsplatz mehrere umfasst, anschließend Notiz für bessere Rekonstruierung eintragen",
    "Verlust ist nun eingetragen und der gelbe Balken ist verschwunden, Eintrag kann gespeichert werden",
    "Auftragsdaten wurden mit der Rückmeldung aktualisiert"         
);

export function FeedbackLossEquipNotInTimeCarousel() {
    return (
        <>
            <ImgCarousel images={imagesWithLossNoStdEquip} captions={captionsWithLossNoStdEquip}/>            
        </>
    )
}
//============================================================================

//========================== Rückmeldung löschen =============================
import url3_3 from '../../../static/img/fertigung/rückmeldung/rückmeldung-ohne-collo/rückmeldung-löschen/3.png'
import url3_4 from '../../../static/img/fertigung/rückmeldung/rückmeldung-ohne-collo/rückmeldung-löschen/4.png'
import url3_5 from '../../../static/img/fertigung/rückmeldung/rückmeldung-ohne-collo/rückmeldung-löschen/5.png'
import url3_6 from '../../../static/img/fertigung/rückmeldung/rückmeldung-ohne-collo/rückmeldung-löschen/6.png'
import url3_7 from '../../../static/img/fertigung/rückmeldung/rückmeldung-ohne-collo/rückmeldung-löschen/7.png'
import url3_8 from '../../../static/img/fertigung/rückmeldung/rückmeldung-ohne-collo/rückmeldung-löschen/8.png'

const imagesDeleteFeedback = createImageArray(
    url1, url2, url3_3, url3_4, url3_5, url3_6, url3_7, url3_8
);

const captionsDeleteFeedback = createCaptionArray (
    "Klicke auf Fertigung",
    "Halle und Bereich / Arbeitsplatz / Maschine wählen",
    "Oben bei AT die Arbeitstage einstellen, wie weit zurückgeblickt werden soll, den richtigen Auftrag suchen und links, auf das blaue Plus-Symbol klicken",
    "Auf das blaue Stift-Symbol klicken",
    "Personalnummer eingeben und Namen auswählen",
    "Links unten auf Eintrag löschen klicken",
    "Löschen bestätigen",
    "Rückmeldung wurde vom Auftrag gelöscht"
);

export function DeleteFeedbackCarousel() {
    return (
        <>
            <ImgCarousel images={imagesDeleteFeedback} captions={captionsDeleteFeedback}/>            
        </>
    )
}
//============================================================================


//================================= Mit Collo ================================
import url4_3 from '../../../static/img/fertigung/rückmeldung/rückmeldung-mit-collo/3.png'
import url4_4 from '../../../static/img/fertigung/rückmeldung/rückmeldung-mit-collo/4.png'
import url4_5 from '../../../static/img/fertigung/rückmeldung/rückmeldung-mit-collo/5.png'
import url4_last from '../../../static/img/fertigung/rückmeldung/rückmeldung-mit-collo/last.png'

//====================== Neue Rückmeldung ohne Verluste ======================
import url4_1_6 from '../../../static/img/fertigung/rückmeldung/rückmeldung-mit-collo/ohne-verluste/6.png'
import url4_1_7 from '../../../static/img/fertigung/rückmeldung/rückmeldung-mit-collo/ohne-verluste/7.png'
import url4_1_8 from '../../../static/img/fertigung/rückmeldung/rückmeldung-mit-collo/ohne-verluste/8.png'
import url4_1_9 from '../../../static/img/fertigung/rückmeldung/rückmeldung-mit-collo/ohne-verluste/9.png'
import url4_1_10 from '../../../static/img/fertigung/rückmeldung/rückmeldung-mit-collo/ohne-verluste/10.png'

const imagesWithoutLossCollo = createImageArray(
    url1, url2, url4_3, url4_4, url4_5, url4_1_6,
    url4_1_7, url4_1_8, url4_1_9, url4_1_10
);


const captionsWithoutLossCollo = createCaptionArray (
    "Klicke auf Fertigung",
    "Halle und Bereich / Arbeitsplatz / Maschine wählen",
    "Richtigen Auftrag suchen und auf das Plus-Symbol klicken",
    "Personalnummer eingeben und Namen auswählen",
    "Schicht / Zeit / Datum eingeben (Maske kann je nach Einstellung etwas anders aussehen)",
    "Bei neuem Auftrag auf das Play-Symbol klicken, sonst weiter zum nächsten Bild",
    "Menge eintragen, bei Gutmenge auf das Plus-Symbol klicken", 
    "Drucker für Collo auswählen, Gebinde auswählen und Menge eintragen, anschließend auf Collo abschließen klicken",
    "Collo wird gedruckt und Gutmenge wird im System dem Gebinde zugewiesen, Rückmeldung kann nun abgeschlossen werden",
    "Auftragsdaten wurden mit der Rückmeldung aktualisiert"         
);

export function ColloFeedbackNoLossCarousel() {
    return (
        <>
            <ImgCarousel images={imagesWithoutLossCollo} captions={captionsWithoutLossCollo}/>            
        </>
    )
}
//============================================================================


//====================== Neue Rückmeldung mit Verlusten ======================
import url4_2_6 from '../../../static/img/fertigung/rückmeldung/rückmeldung-mit-collo/mit-verlusten/6.png'
import url4_2_7 from '../../../static/img/fertigung/rückmeldung/rückmeldung-mit-collo/mit-verlusten/7.png'
import url4_2_8 from '../../../static/img/fertigung/rückmeldung/rückmeldung-mit-collo/mit-verlusten/8.png'
import url4_2_9 from '../../../static/img/fertigung/rückmeldung/rückmeldung-mit-collo/mit-verlusten/9.png'

//=========== ohne Rüsten
import url4_2_1_10 from '../../../static/img/fertigung/rückmeldung/rückmeldung-mit-collo/mit-verlusten/ohne-rüsten/10.png'
import url4_2_1_11 from '../../../static/img/fertigung/rückmeldung/rückmeldung-mit-collo/mit-verlusten/ohne-rüsten/11.png'
import url4_2_1_12 from '../../../static/img/fertigung/rückmeldung/rückmeldung-mit-collo/mit-verlusten/ohne-rüsten/12.png'


const imagesWithLossNoEquipCollo = createImageArray(
    url1, url2, url4_3, url4_4, url4_5, url4_2_6, url4_2_7, url4_2_8,
    url4_2_9, url4_2_1_10, url4_2_1_11, url4_2_1_12, url4_last
);

const captionsWithLossNoEquipCollo = createCaptionArray (
    "Klicke auf Fertigung",
    "Halle und Bereich / Arbeitsplatz / Maschine wählen",
    "Richtigen Auftrag suchen und auf das Plus-Symbol klicken",
    "Personalnummer eingeben und Namen auswählen",
    "Schicht / Zeit / Datum eingeben (Maske kann je nach Einstellung etwas anders aussehen)",
    "Bei neuem Auftrag auf das Play-Symbol klicken, sonst weiter zum nächsten Bild",
    "Menge eintragen, bei Gutmenge auf das Plus-Symbol klicken", 
    "Drucker für Collo auswählen, Gebinde auswählen und Menge eintragen, anschließend auf Collo abschließen klicken",
    "Collo wird gedruckt und Gutmenge wird im System dem Gebinde zugewiesen, Rückmeldung kann nun abgeschlossen werden",
    "Auftragsdaten wurden mit der Rückmeldung aktualisiert"         
);

export function ColloFeedbackLossNoEquipCarousel() {
    return (
        <>
            <ImgCarousel images={imagesWithLossNoEquipCollo} captions={captionsWithLossNoEquipCollo}/>            
        </>
    )
}

//=========== mit Rüsten innerhalb Standardzeit
import url4_2_2_10 from '../../../static/img/fertigung/rückmeldung/rückmeldung-mit-collo/mit-verlusten/innerhalb-rüstzeit/10.png'
import url4_2_2_11 from '../../../static/img/fertigung/rückmeldung/rückmeldung-mit-collo/mit-verlusten/innerhalb-rüstzeit/11.png'
import url4_2_2_12 from '../../../static/img/fertigung/rückmeldung/rückmeldung-mit-collo/mit-verlusten/innerhalb-rüstzeit/12.png'
import url4_2_2_13 from '../../../static/img/fertigung/rückmeldung/rückmeldung-mit-collo/mit-verlusten/innerhalb-rüstzeit/13.png'
import url4_2_2_14 from '../../../static/img/fertigung/rückmeldung/rückmeldung-mit-collo/mit-verlusten/innerhalb-rüstzeit/14.png'
import url4_2_2_15 from '../../../static/img/fertigung/rückmeldung/rückmeldung-mit-collo/mit-verlusten/innerhalb-rüstzeit/15.png'


const imagesWithLossStdEquipCollo = createImageArray(
    url1, url2, url4_3, url4_4, url4_5, url4_2_6, url4_2_7, url4_2_8,
    url4_2_9, url4_2_2_10, url4_2_2_11, url4_2_2_12, url4_2_2_13,
    url4_2_2_14, url4_2_2_15, url4_last
);

const captionsWithLossStdEquipCollo = createCaptionArray (
    "Klicke auf Fertigung",
    "Halle und Bereich / Arbeitsplatz / Maschine wählen",
    "Richtigen Auftrag suchen und auf das Plus-Symbol klicken",
    "Personalnummer eingeben und Namen auswählen", 
    "Schicht / Zeit / Datum eingeben (Maske kann je nach Einstellung etwas anders aussehen)",
    "Bei neuem Auftrag auf das Play-Symbol klicken, sonst weiter zum nächsten Bild",
    "Menge eintragen, bei Gutmenge auf das Plus-Symbol klicken", 
    "Drucker für Collo auswählen, Gebinde auswählen und Menge eintragen, anschließend auf Collo abschließen klicken",
    "Collo wird gedruckt und Gutmenge wurde im System dem Gebinde zugewiesen, nun muss die restliche Zeit definiert werden",
    "Unter Rüsten den Unterpunkt Hauptrüstung auswählen",
    "Rüstzeit eintragen und auf Hinzufügen klicken",
    "Rüstung ist nun verbucht",
    "Fehlende Zeit muss noch definiert werden, dazu auf hinzufügen klicken und richtigen Verlust auswählen (in diesem Bsp. ein mechanischer Ausfall)",
    "Dauer, Begründung und Maschine auswählen, falls der Arbeitsplatz mehrere umfasst, anschließend Notiz für bessere Rekonstruierung eintragen",
    "Verlust ist nun eingetragen und der gelbe Balken ist verschwunden, Eintrag kann gespeichert werden",
    "Auftragsdaten wurden mit der Rückmeldung aktualisiert"     

);

export function ColloFeedbackLossEquipInTimeCarousel() {
    return (
        <>
            <ImgCarousel images={imagesWithLossStdEquipCollo} captions={captionsWithLossStdEquipCollo}/>            
        </>
    )
}

//=========== mit Rüsten außerhalb Standardzeit
import url4_2_3_11 from '../../../static/img/fertigung/rückmeldung/rückmeldung-mit-collo/mit-verlusten/außerhalb-rüstzeit/11.png'
import url4_2_3_12 from '../../../static/img/fertigung/rückmeldung/rückmeldung-mit-collo/mit-verlusten/außerhalb-rüstzeit/12.png'
import url4_2_3_13 from '../../../static/img/fertigung/rückmeldung/rückmeldung-mit-collo/mit-verlusten/außerhalb-rüstzeit/13.png'
import url4_2_3_14 from '../../../static/img/fertigung/rückmeldung/rückmeldung-mit-collo/mit-verlusten/außerhalb-rüstzeit/14.png'
import url4_2_3_15 from '../../../static/img/fertigung/rückmeldung/rückmeldung-mit-collo/mit-verlusten/außerhalb-rüstzeit/15.png'


const imagesWithLossNoStdEquipCollo = createImageArray(
    url1, url2, url4_3, url4_4, url4_5, url4_2_6, url4_2_7, url4_2_8,
    url4_2_9, url4_2_2_10, url4_2_3_11, url4_2_3_12, url4_2_3_13, 
    url4_2_3_14, url4_2_3_15, url4_last
);

const captionsWithLossNoStdEquipCollo = createCaptionArray (
    "Klicke auf Fertigung",
    "Halle und Bereich / Arbeitsplatz / Maschine wählen",
    "Richtigen Auftrag suchen und auf das Plus-Symbol klicken",
    "Personalnummer eingeben und Namen auswählen", 
    "Schicht / Zeit / Datum eingeben (Maske kann je nach Einstellung etwas anders aussehen)",
    "Bei neuem Auftrag auf das Play-Symbol klicken, sonst weiter zum nächsten Bild",
    "Menge eintragen, bei Gutmenge auf das Plus-Symbol klicken", 
    "Drucker für Collo auswählen, Gebinde auswählen und Menge eintragen, anschließend auf Collo abschließen klicken",
    "Collo wird gedruckt und Gutmenge wurde im System dem Gebinde zugewiesen, nun muss die restliche Zeit definiert werden",
    "Unter Rüsten den Unterpunkt Hauptrüstung auswählen",
    "Rüstzeit eintragen, treffenden Verlust auswählen und Notiz eintragen falls nötig, anschließend auf Hinzufügen klicken",
    "Rüstung und Verlust sind nun verbucht",
    "Fehlende Zeit muss noch definiert werden, dazu auf hinzufügen klicken und richtigen Verlust auswählen (in diesem Bsp. ein mechanischer Ausfall)",
    "Dauer, Begründung und Maschine auswählen, falls der Arbeitsplatz mehrere umfasst, anschließend Notiz für bessere Rekonstruierung eintragen",
    "Verlust ist nun eingetragen und der gelbe Balken ist verschwunden, Eintrag kann gespeichert werden",
    "Auftragsdaten wurden mit der Rückmeldung aktualisiert"       
);

export function ColloFeedbackLossEquipNotInTimeCarousel() {
    return (
        <>
            <ImgCarousel images={imagesWithLossNoStdEquipCollo} captions={captionsWithLossNoStdEquipCollo}/>            
        </>
    )
}
//============================================================================

//========================== Teilmenge abstellen =============================
import url4_3_8 from '../../../static/img/fertigung/rückmeldung/rückmeldung-mit-collo/teilmenge/8.png'
import url4_3_9 from '../../../static/img/fertigung/rückmeldung/rückmeldung-mit-collo/teilmenge/9.png'


const imagesSubsetCollo = createImageArray (                                       
    url1, url2, url4_3, url4_4, url4_5, url4_2_6, url4_2_7, url4_3_8, url4_3_9
);

const captionsSubsetCollo = createCaptionArray (
    "Klicke auf Fertigung",
    "Halle und Bereich / Arbeitsplatz / Maschine wählen",
    "Richtigen Auftrag suchen und auf das Plus-Symbol klicken",
    "Personalnummer eingeben und Namen auswählen", 
    "Schicht / Zeit / Datum eingeben (Maske kann je nach Einstellung etwas anders aussehen)",
    "Bei neuem Auftrag auf das Play-Symbol klicken, sonst weiter zum nächsten Bild",
    "Auf das Plus-Symbol bei Gutmenge klicken", 
    "Drucker für Collo auswählen, Gebinde auswählen und Menge eintragen, anschließend auf Teilmenge klicken",
    "Teilmenge wurde eingetragen - sichtbar an dem grauen Balken, Collo wurde aber nicht gedruckt, weil es eine Teilmenge ist"
);

export function ColloSubsetCarousel() {
    return (
        <>
            <ImgCarousel images={imagesSubsetCollo} captions={captionsSubsetCollo}/>            
        </> 
    )
}
//============================================================================


//===================== Collo erstellen ohne Drucken =========================
import url4_4_8 from '../../../static/img/fertigung/rückmeldung/rückmeldung-mit-collo/collo-erstellen/8.png'
import url4_4_9 from '../../../static/img/fertigung/rückmeldung/rückmeldung-mit-collo/collo-erstellen/9.png'
import url4_4_10 from '../../../static/img/fertigung/rückmeldung/rückmeldung-mit-collo/collo-erstellen/10.png'

const imagesNoPrintCollo = createImageArray(
    url1, url2, url4_3, url4_4, url4_5, url4_2_6, url4_2_7,
    url4_4_8, url4_4_9, url4_4_10
);

const captionsNoPrintCollo = createCaptionArray(
    "Klicke auf Fertigung",
    "Halle und Bereich / Arbeitsplatz / Maschine wählen",
    "Richtigen Auftrag suchen und auf das Plus-Symbol klicken",
    "Personalnummer eingeben und Namen auswählen", 
    "Schicht / Zeit / Datum eingeben (Maske kann je nach Einstellung etwas anders aussehen)",
    "Bei neuem Auftrag auf das Play-Symbol klicken, sonst weiter zum nächsten Bild",
    "Auf das Plus-Symbol bei Gutmenge klicken", 
    "Auf Collo erstellen klicken",
    "Collo wurde erstellt, nun Detailansicht aufklappen",
    "Collo-Historie kann hier eingesehen werden"
);

export function ColloCreateCarousel() {
    return (
        <>
            <ImgCarousel images={imagesNoPrintCollo} captions={captionsNoPrintCollo}/>            
        </>
    )
}
//============================================================================

//========================== Collo Menge ändern ==============================
import url4_5_3 from '../../../static/img/fertigung/rückmeldung/rückmeldung-mit-collo/menge-ändern/3.png'
import url4_5_4 from '../../../static/img/fertigung/rückmeldung/rückmeldung-mit-collo/menge-ändern/4.png'
import url4_5_5 from '../../../static/img/fertigung/rückmeldung/rückmeldung-mit-collo/menge-ändern/5.png'
import url4_5_6 from '../../../static/img/fertigung/rückmeldung/rückmeldung-mit-collo/menge-ändern/6.png'
import url4_5_7 from '../../../static/img/fertigung/rückmeldung/rückmeldung-mit-collo/menge-ändern/7.png'
import url4_5_8 from '../../../static/img/fertigung/rückmeldung/rückmeldung-mit-collo/menge-ändern/8.png'
import url4_5_9 from '../../../static/img/fertigung/rückmeldung/rückmeldung-mit-collo/menge-ändern/9.png'
import url4_5_10 from '../../../static/img/fertigung/rückmeldung/rückmeldung-mit-collo/menge-ändern/10.png'
import url4_5_11 from '../../../static/img/fertigung/rückmeldung/rückmeldung-mit-collo/menge-ändern/11.png'

const imagesChangeQuantityCollo = createImageArray(
    url1, url2, url4_5_3, url4_5_4, url4_5_5, url4_5_6,
    url4_5_7, url4_5_8, url4_5_9, url4_5_10, url4_5_11
);

const captionsChangeQuantityCollo = createCaptionArray(
    "Klicke auf Fertigung",
    "Halle und Bereich / Arbeitsplatz / Maschine wählen",
    "Richtigen Auftrag suchen und auf das Plus-Symbol klicken",
    "Auf das blaue Stift-Symbol klicken",    
    "Personalnummer eingeben und Namen auswählen", 
    "Collo wählen und Details ausklappen",
    "Auf das blaue Stift-Symbol klicken",
    "Neue Menge eintragen, ist das nicht möglich, müssen vorher alle Collos, die neuer sind als dieses, gelöscht werden",
    "Altes Collo entsorgen und neues drucken",
    "Menge wurde aktualisiert",
    "Auftragsdaten wurden aktualisiert"
);


export function ColloChangeQuantityCarousel() {
    return (
        <>
            <ImgCarousel images={imagesChangeQuantityCollo} captions={captionsChangeQuantityCollo}/>            
        </>
    )
}
//============================================================================

//========================== Collo erneut drucken ============================
import url4_7_3 from '../../../static/img/fertigung/rückmeldung/rückmeldung-mit-collo/erneut-drucken/3.png'
import url4_7_4 from '../../../static/img/fertigung/rückmeldung/rückmeldung-mit-collo/erneut-drucken/4.png'
import url4_7_5 from '../../../static/img/fertigung/rückmeldung/rückmeldung-mit-collo/erneut-drucken/5.png'
import url4_7_6 from '../../../static/img/fertigung/rückmeldung/rückmeldung-mit-collo/erneut-drucken/6.png'

const imagesReprintCollo = createImageArray(
    url1, url2, url4_7_3, url4_7_4, 
    url4_7_5, url4_7_6
);

const captionsReprintCollo = createCaptionArray(
    "Klicke auf Fertigung",
    "Halle und Bereich / Arbeitsplatz / Maschine wählen",
    "Richtigen Auftrag suchen und auf das Plus-Symbol klicken",
    "Auf das blaue Stift-Symbol klicken",    
    "Personalnummer eingeben und Namen auswählen", 
    "Auf das Drucker-Icon klicken um Collo erneut zu drucken"
);

export function ColloReprintCarousel() {
    return (
        <>
            <ImgCarousel images={imagesReprintCollo} captions={captionsReprintCollo}/>            
        </>
    )
}
//============================================================================

//============================= Collo löschen ================================
import url4_6_3 from '../../../static/img/fertigung/rückmeldung/rückmeldung-mit-collo/collo-löschen/3.png'
import url4_6_4 from '../../../static/img/fertigung/rückmeldung/rückmeldung-mit-collo/collo-löschen/4.png'
import url4_6_5 from '../../../static/img/fertigung/rückmeldung/rückmeldung-mit-collo/collo-löschen/5.png'
import url4_6_6 from '../../../static/img/fertigung/rückmeldung/rückmeldung-mit-collo/collo-löschen/6.png'
import url4_6_7 from '../../../static/img/fertigung/rückmeldung/rückmeldung-mit-collo/collo-löschen/7.png'
import url4_6_8 from '../../../static/img/fertigung/rückmeldung/rückmeldung-mit-collo/collo-löschen/8.png'
import url4_6_9 from '../../../static/img/fertigung/rückmeldung/rückmeldung-mit-collo/collo-löschen/9.png'
import url4_6_10 from '../../../static/img/fertigung/rückmeldung/rückmeldung-mit-collo/collo-löschen/10.png'

const imagesDeleteCollo = createImageArray(
    url1, url2, url4_6_3, url4_6_4, url4_6_5, url4_6_6,
    url4_6_7, url4_6_8, url4_6_9, url4_6_10
);

const captionsDeleteCollo = createCaptionArray(
    "Klicke auf Fertigung",
    "Halle und Bereich / Arbeitsplatz / Maschine wählen",
    "Richtigen Auftrag suchen und auf das Plus-Symbol klicken",
    "Auf das blaue Stift-Symbol klicken",    
    "Personalnummer eingeben und Namen auswählen", 
    "Collo wählen und Details ausklappen",
    "Zuerst muss die Menge gelöscht werden, dazu auf Trash-Icon klicken",
    "Collo entsorgen und Meldung bestätigen",
    "Menge wurde gelöscht, nun muss noch das Collo gelöscht werden, dazu auf das Trash-Icon klicken",
    "Collo wurde vollständig gelöscht"
);

export function ColloDeleteCarousel() {
    return (
        <>
            <ImgCarousel images={imagesDeleteCollo} captions={captionsDeleteCollo}/>            
        </>
    )
}
//============================================================================

//========================== Rückmeldung löschen =============================
import url4_7_9 from '../../../static/img/fertigung/rückmeldung/rückmeldung-mit-collo/rückmeldung-löschen/9.png'
import url4_7_10 from '../../../static/img/fertigung/rückmeldung/rückmeldung-mit-collo/rückmeldung-löschen/10.png'
import url4_7_11 from '../../../static/img/fertigung/rückmeldung/rückmeldung-mit-collo/rückmeldung-löschen/11.png'

const imagesDeleteFeedbackCollo = createImageArray(
    url1, url2, url4_6_3, url4_6_4, url4_6_5, url4_6_6,
    url4_6_7, url4_6_8, url4_7_9, url4_7_10, url4_7_11
); 

const captionsDeleteFeedbackCollo = createCaptionArray(
    "Klicke auf Fertigung",
    "Halle und Bereich / Arbeitsplatz / Maschine wählen",
    "Richtigen Auftrag suchen und auf das Plus-Symbol klicken",
    "Auf das blaue Stift-Symbol klicken",    
    "Personalnummer eingeben und Namen auswählen", 
    "Details ausklappen",
    "Auf Trash-Icon klicken",
    "Collo entsorgen und Meldung bestätigen", 
    "Rückmeldung kann nun gelöscht werden, links unten auf Eintrag löschen klicken",
    "Meldung bestätigen",
    "Rückmeldung wurde gelöscht"
);

export function ColloDeleteFeedbackCarousel() {
    return (
        <>
            <ImgCarousel images={imagesDeleteFeedbackCollo} captions={captionsDeleteFeedbackCollo}/>            
        </>
    )
}
//============================================================================


//============================================================================
//========================== Rückmeldung Volume ============================== url5
//============================================================================
import url5_3 from '../../../static/img/fertigung/rückmeldung/rückmeldung-volume/3.png'
import url5_4 from '../../../static/img/fertigung/rückmeldung/rückmeldung-volume/4.png'
import url5_5 from '../../../static/img/fertigung/rückmeldung/rückmeldung-volume/5.png'
import url5_6 from '../../../static/img/fertigung/rückmeldung/rückmeldung-volume/6.png'
import url5_7 from '../../../static/img/fertigung/rückmeldung/rückmeldung-volume/7.png'

//======================= Rückmeldung ohne Verluste ========================== url5_1
import url5_1_8 from '../../../static/img/fertigung/rückmeldung/rückmeldung-volume/ohne-verluste/8.png'
import url5_1_9 from '../../../static/img/fertigung/rückmeldung/rückmeldung-volume/ohne-verluste/9.png'

const imagesVolumeNoLoss = createImageArray(
    url1, url2, url5_3, url5_4, url5_5, 
    url5_6, url5_7, url5_1_8, url5_1_9,
);

const captionsVolumeNoLoss = createCaptionArray(
    "Klicke auf Fertigung",
    "Halle und Bereich / Arbeitsplatz / Maschine wählen",
    "Richtigen Auftrag suchen und auf das Plus-Symbol klicken",
    "Personalnummer eingeben und Namen auswählen", 
    "Schicht / Zeit / Datum eingeben (Maske kann je nach Einstellung etwas anders aussehen)",
    "Personal eintragen und falls die MF noch nicht gestartet ist, auf das Play-Symbol klicken",
    "Gutmenge / Ausschuss / Nacharbeit eintragen",
    "Eintrag kann nun abgeschlossen werden",
    "Auftrag wurde mit Rückmeldung aktualisiert"
);

export function VolumeNoLossCarousel() {
    return (
        <>
            <ImgCarousel images={imagesVolumeNoLoss} captions={captionsVolumeNoLoss}/>            
        </>
    )
}
//============================================================================

//======================= Rückmeldung mit Verlusten ========================== url5_2
import url5_2_8 from '../../../static/img/fertigung/rückmeldung/rückmeldung-volume/mit-verlusten/mit-rüsten-innerhalb-zeit/8.png'
 
//======= ohne Rüsten url5_2_1
import url5_2_1_9 from '../../../static/img/fertigung/rückmeldung/rückmeldung-volume/mit-verlusten/ohne-rüsten/9.png'
import url5_2_1_10 from '../../../static/img/fertigung/rückmeldung/rückmeldung-volume/mit-verlusten/ohne-rüsten/10.png'
import url5_2_1_11 from '../../../static/img/fertigung/rückmeldung/rückmeldung-volume/mit-verlusten/ohne-rüsten/11.png'
import url5_2_1_12 from '../../../static/img/fertigung/rückmeldung/rückmeldung-volume/mit-verlusten/ohne-rüsten/12.png'

const imagesVolumeLossNoEquip = createImageArray(
    url1, url2, url5_3, url5_4, url5_5, 
    url5_6, url5_7, url5_2_8, url5_2_1_9,
    url5_2_1_10, url5_2_1_11, url5_2_1_12
);

const captionsVolumeLossNoEquip = createCaptionArray(
    "Klicke auf Fertigung",
    "Halle und Bereich / Arbeitsplatz / Maschine wählen",
    "Richtigen Auftrag suchen und auf das Plus-Symbol klicken",
    "Personalnummer eingeben und Namen auswählen", 
    "Schicht / Zeit / Datum eingeben (Maske kann je nach Einstellung etwas anders aussehen)",
    "Personal eintragen und falls die MF noch nicht gestartet ist, auf das Play-Symbol klicken",
    "Gutmenge / Ausschuss / Nacharbeit eintragen",
    "Nun muss die restliche Zeit im gelben Balken noch definiert werden, nehmen wir an wir hatten ein Problem mit dem Schlitten, klicken wir auf hinzufügen",
    "Nehmen wir an wir haben für die Störung einen Schlosser benötigt, wähle unter Reparatur den Unterpunkt Maschinenausfall aus",
    "Dauer der Störung, Begründung, Maschine und Notiz eingeben, anschließend auf Hinzufügen klicken",
    "Der Verlust wurde hinzugefügt und der gelbe Balken ist verschwunden, Eintrag kann nun abgeschlossen werden",
    "Auftrag wurde mit Rückmeldung aktualisiert"
);

export function VolumeLossNoEquipCarousel() {
    return (
        <>
            <ImgCarousel images={imagesVolumeLossNoEquip} captions={captionsVolumeLossNoEquip}/>            
        </>
    )
}

//======= mit Rüsten innerhalb Zeit url5_2_2
import url5_2_2_9 from '../../../static/img/fertigung/rückmeldung/rückmeldung-volume/mit-verlusten/mit-rüsten-innerhalb-zeit/9.png'
import url5_2_2_10 from '../../../static/img/fertigung/rückmeldung/rückmeldung-volume/mit-verlusten/mit-rüsten-innerhalb-zeit/10.png'
import url5_2_2_11 from '../../../static/img/fertigung/rückmeldung/rückmeldung-volume/mit-verlusten/mit-rüsten-innerhalb-zeit/11.png'
import url5_2_2_12 from '../../../static/img/fertigung/rückmeldung/rückmeldung-volume/mit-verlusten/mit-rüsten-innerhalb-zeit/12.png'
import url5_2_2_13 from '../../../static/img/fertigung/rückmeldung/rückmeldung-volume/mit-verlusten/mit-rüsten-innerhalb-zeit/13.png'
import url5_2_2_14 from '../../../static/img/fertigung/rückmeldung/rückmeldung-volume/mit-verlusten/mit-rüsten-innerhalb-zeit/14.png'
import url5_2_2_15 from '../../../static/img/fertigung/rückmeldung/rückmeldung-volume/mit-verlusten/mit-rüsten-innerhalb-zeit/15.png'
import url5_2_2_16 from '../../../static/img/fertigung/rückmeldung/rückmeldung-volume/mit-verlusten/mit-rüsten-innerhalb-zeit/16.png'


const imagesVolumeLossEquipInTime = createImageArray(
    url1, url2, url5_3, url5_4, url5_5, 
    url5_6, url5_7, url5_2_8, url5_2_2_9, 
    url5_2_2_10, url5_2_2_11, url5_2_2_12,
    url5_2_2_13, url5_2_2_14, url5_2_2_15, 
    url5_2_2_16
);

const captionsVolumeLossEquipInTime = createCaptionArray(
    "Klicke auf Fertigung",
    "Halle und Bereich / Arbeitsplatz / Maschine wählen",
    "Richtigen Auftrag suchen und auf das Plus-Symbol klicken",
    "Personalnummer eingeben und Namen auswählen", 
    "Schicht / Zeit / Datum eingeben (Maske kann je nach Einstellung etwas anders aussehen)",
    "Personal eintragen und falls die MF noch nicht gestartet ist, auf das Play-Symbol klicken",
    "Gutmenge / Ausschuss / Nacharbeit eintragen",
    "Jetzt wird das Rüsten eingetragen, dazu auf hinzufügen klicken",
    "Unter Rüsten den Unterpunkt Hauptrüstung auswählen",
    "Rüstzeit eingeben und auf Hinzufügen klicken",
    "Rüsten wurde eingetragen",
    "Nun muss die restliche Zeit im gelben Balken noch definiert werden, nehmen wir an wir hatten ein Problem mit dem Schlitten, klicken wir wieder auf hinzufügen",
    "Nehmen wir an wir haben für die Störung einen Schlosser benötigt, wähle unter Reparatur den Unterpunkt Maschinenausfall aus",
    "Dauer der Störung, Begründung, Maschine und Notiz eingeben, anschließend auf Hinzufügen klicken",
    "Der Verlust wurde hinzugefügt und der gelbe Balken ist verschwunden, Eintrag kann nun abgeschlossen werden",
    "Auftrag wurde mit Rückmeldung aktualisiert"
);

export function VolumeLossEquipInTimeCarousel() {
    return (
        <>
            <ImgCarousel images={imagesVolumeLossEquipInTime} captions={captionsVolumeLossEquipInTime}/>            
        </>
    )
}

//======= mit Rüsten außerhalb Zeit url5_2_3
import url5_2_3_10 from '../../../static/img/fertigung/rückmeldung/rückmeldung-volume/mit-verlusten/mit-rüsten-außerhalb-zeit/10.png'
import url5_2_3_11 from '../../../static/img/fertigung/rückmeldung/rückmeldung-volume/mit-verlusten/mit-rüsten-außerhalb-zeit/11.png'
import url5_2_3_12 from '../../../static/img/fertigung/rückmeldung/rückmeldung-volume/mit-verlusten/mit-rüsten-außerhalb-zeit/12.png'
import url5_2_3_13 from '../../../static/img/fertigung/rückmeldung/rückmeldung-volume/mit-verlusten/mit-rüsten-außerhalb-zeit/13.png'
import url5_2_3_14 from '../../../static/img/fertigung/rückmeldung/rückmeldung-volume/mit-verlusten/mit-rüsten-außerhalb-zeit/14.png'
import url5_2_3_15 from '../../../static/img/fertigung/rückmeldung/rückmeldung-volume/mit-verlusten/mit-rüsten-außerhalb-zeit/15.png'
import url5_2_3_16 from '../../../static/img/fertigung/rückmeldung/rückmeldung-volume/mit-verlusten/mit-rüsten-außerhalb-zeit/16.png'

const imagesVolumeLossEquipNotInTime = createImageArray(
    url1, url2, url5_3, url5_4, url5_5, 
    url5_6, url5_7, url5_2_8, url5_2_2_9,
    url5_2_3_10, url5_2_3_11, url5_2_3_12, url5_2_3_13,
    url5_2_3_14, url5_2_3_15, url5_2_3_16    
);

const captionsVolumeLossEquipNotInTime = createCaptionArray(
    "Klicke auf Fertigung",
    "Halle und Bereich / Arbeitsplatz / Maschine wählen",
    "Richtigen Auftrag suchen und auf das Plus-Symbol klicken",
    "Personalnummer eingeben und Namen auswählen", 
    "Schicht / Zeit / Datum eingeben (Maske kann je nach Einstellung etwas anders aussehen)",
    "Personal eintragen und falls die MF noch nicht gestartet ist, auf das Play-Symbol klicken",
    "Gutmenge / Ausschuss / Nacharbeit eintragen",
    "Jetzt wird das Rüsten eingetragen, dazu auf hinzufügen klicken",
    "Unter Rüsten den Unterpunkt Hauptrüstung auswählen",
    "Rüstzeit eingeben, den Verlust definieren, warum wir länger benötigt haben und auf Hinzufügen klicken",
    "Rüsten und Verlust wurden eingetragen",
    "Nun muss die restliche Zeit im gelben Balken noch definiert werden, nehmen wir an wir hatten ein Problem mit dem Schlitten, klicken wir wieder auf hinzufügen",
    "Nehmen wir an wir haben für die Störung einen Schlosser benötigt, wähle unter Reparatur den Unterpunkt Maschinenausfall aus",
    "Dauer der Störung, Begründung, Maschine und Notiz eingeben, anschließend auf Hinzufügen klicken",
    "Der Verlust wurde hinzugefügt und der gelbe Balken ist verschwunden, Eintrag kann nun abgeschlossen werden",
    "Auftrag wurde mit Rückmeldung aktualisiert"
);

export function VolumeLossEquipNotInTimeCarousel() {
    return (
        <>
            <ImgCarousel images={imagesVolumeLossEquipNotInTime} captions={captionsVolumeLossEquipNotInTime}/>            
        </>
    )
}
//============================================================================

//========================== Rückmeldung löschen ============================= url5_3
import url5_3_3 from '../../../static/img/fertigung/rückmeldung/rückmeldung-volume/rückmeldung-löschen/3.png'
import url5_3_4 from '../../../static/img/fertigung/rückmeldung/rückmeldung-volume/rückmeldung-löschen/4.png'
import url5_3_5 from '../../../static/img/fertigung/rückmeldung/rückmeldung-volume/rückmeldung-löschen/5.png'
import url5_3_6 from '../../../static/img/fertigung/rückmeldung/rückmeldung-volume/rückmeldung-löschen/6.png'
import url5_3_7 from '../../../static/img/fertigung/rückmeldung/rückmeldung-volume/rückmeldung-löschen/7.png'
import url5_3_8 from '../../../static/img/fertigung/rückmeldung/rückmeldung-volume/rückmeldung-löschen/8.png'

const imagesVolumeDelete = createImageArray(
    url1, url2, url5_3_3, url5_3_4,
    url5_3_5, url5_3_6, url5_3_7, url5_3_8
);

const captionsVolumeDelete = createCaptionArray(
    "Klicke auf Fertigung",
    "Halle und Bereich / Arbeitsplatz / Maschine wählen",
    "Richtigen Auftrag suchen und auf das Plus-Symbol klicken",
    "Den Reiter Logbuch wählen und auf das Stift-Symbol klicken",
    "Personalnummer eingeben und Namen auswählen", 
    "Auf Eintrag löschen klicken",
    "Meldung bestätigen",
    "Auftragsdaten wurden aktualisiert"
);

export function VolumeDeleteFeedbackCarousel() {
    return (
        <>
            <ImgCarousel images={imagesVolumeDelete} captions={captionsVolumeDelete}/>            
        </>
    )
}
//============================================================================

//========================== Auftrag abschließen ============================= url5_4
import url5_4_3 from '../../../static/img/fertigung/rückmeldung/rückmeldung-volume/auftrag-abschließen/3.png'
import url5_4_4 from '../../../static/img/fertigung/rückmeldung/rückmeldung-volume/auftrag-abschließen/4.png'
import url5_4_5 from '../../../static/img/fertigung/rückmeldung/rückmeldung-volume/auftrag-abschließen/5.png'
import url5_4_6 from '../../../static/img/fertigung/rückmeldung/rückmeldung-volume/auftrag-abschließen/6.png'
import url5_4_7 from '../../../static/img/fertigung/rückmeldung/rückmeldung-volume/auftrag-abschließen/7.png'
import url5_4_8 from '../../../static/img/fertigung/rückmeldung/rückmeldung-volume/auftrag-abschließen/8.png'
import url5_4_9 from '../../../static/img/fertigung/rückmeldung/rückmeldung-volume/auftrag-abschließen/9.png'
import url5_4_10 from '../../../static/img/fertigung/rückmeldung/rückmeldung-volume/auftrag-abschließen/10.png'

const imagesVolumeCloseAssignement = createImageArray(
    url1, url2, url5_4_3, url5_4_4, url5_4_5, url5_4_6,
    url5_4_7, url5_4_8, url5_4_9, url5_4_10
);

const captionsVolumeCloseAssignement = createCaptionArray(
    "Klicke auf Fertigung",
    "Halle und Bereich / Arbeitsplatz / Maschine wählen",
    "Richtigen Auftrag suchen und auf das Plus-Symbol klicken",
    "Personalnummer eingeben und Namen auswählen", 
    "Schicht / Zeit / Datum eingeben (Maske kann je nach Einstellung etwas anders aussehen)",
    "Wir machen jetzt den letzten Eintrag für die beiden offenen MF",
    "Stückzahl eintragen",
    "Nun auf grünen Haken klicken um die beiden MF abzuschließen",
    "Es sind alle MF abgeschlossen, wenn wir jetzt auf Speichern klicken, erhält der Auftrag automatisch den Status abgeschlossen",
    "Auftrag ist nun grau hinterlegt, Status ist abgeschlossen"
);

export function VolumeCloseAssignmentCarousel() {
    return (
        <>
            <ImgCarousel images={imagesVolumeCloseAssignement} captions={captionsVolumeCloseAssignement}/>            
        </>
    )
}
//============================================================================

//============================================================================
//======================== Rückmeldung Volume Ende ===========================
//============================================================================


//========================== Rückmeldung ansehen ============================= url6
import url6_3 from '../../../static/img/fertigung/rückmeldung/rückmeldung-ansehen/3.png'
import url6_4 from '../../../static/img/fertigung/rückmeldung/rückmeldung-ansehen/4.png'
import url6_5 from '../../../static/img/fertigung/rückmeldung/rückmeldung-ansehen/5.png'

const imagesViewFeedback = createImageArray(
    url1, url2, url6_3, url6_4, url6_5
);

const captionsViewFeedback = createCaptionArray(
    "Klicke auf Fertigung",
    "Halle und Bereich / Arbeitsplatz / Maschine wählen",
    "Oben die Arbeitstage einstellen, Auftrag suchen und links auf das Plus-Symbol klicken",
    "Reiter Logbuch wählen und auf das blaue Augen-Symbol bei jener Rückmeldung klicken, die man ansehen möchte",
    "Rückmeldung kann nun eingesehen werden"
);

export function ViewFeedbackCarousel() {
    return (
        <>
            <ImgCarousel images={imagesViewFeedback} captions={captionsViewFeedback}/>            
        </>
    )
}

//============================================================================


//========================= Rückmeldung editieren ============================ url7
import url7_4 from '../../../static/img/fertigung/rückmeldung/rückmeldung-editieren/4.png'
import url7_5 from '../../../static/img/fertigung/rückmeldung/rückmeldung-editieren/5.png'
import url7_6 from '../../../static/img/fertigung/rückmeldung/rückmeldung-editieren/6.png'

const imagesEditFeedback = createImageArray(
    url1, url2, url6_3, url7_4,
    url7_5, url7_6
);

const captionsEditFeedback = createCaptionArray(
    "Klicke auf Fertigung",
    "Halle und Bereich / Arbeitsplatz / Maschine wählen",
    "Oben die Arbeitstage einstellen, Auftrag suchen und links auf das Plus-Symbol klicken",
    "Reiter Logbuch wählen und auf das blaue Stift-Symbol bei jener Rückmeldung klicken, die man bearbeiten möchte",
    "Personalnummer eingeben und Namen auswählen", 
    "Rückmeldung kann nun bearbeitet werden"
);

export function EditFeedbackCarousel() {
    return (
        <>
            <ImgCarousel images={imagesEditFeedback} captions={captionsEditFeedback}/>            
        </>
    )
}
//============================================================================

//========================= Auftrag pausieren ============================ url8
import url8_3 from '../../../static/img/fertigung/rückmeldung/auftrag-pausieren/3.png'
import url8_4 from '../../../static/img/fertigung/rückmeldung/auftrag-pausieren/4.png'
import url8_5 from '../../../static/img/fertigung/rückmeldung/auftrag-pausieren/5.png'
import url8_6 from '../../../static/img/fertigung/rückmeldung/auftrag-pausieren/6.png'
import url8_7 from '../../../static/img/fertigung/rückmeldung/auftrag-pausieren/7.png'
import url8_8 from '../../../static/img/fertigung/rückmeldung/auftrag-pausieren/8.png'

const imagesPauseAssignement = createImageArray(
    url1, url2, url8_3, url8_4, 
    url8_5, url8_6, url8_7, url8_8
);

const captionsPauseAssignement = createCaptionArray(
    "Klicke auf Fertigung",
    "Halle und Bereich / Arbeitsplatz / Maschine wählen",
    "Auftrag suchen und auf das Plus-Symbol klicken",
    "Personalnummer eingeben und Namen auswählen", 
    "Schicht / Zeit / Datum eingeben (Maske kann je nach Einstellung etwas anders aussehen)",
    "Rechts auf das Pause-Symbol klicken", 
    "Auftrag wurde pausiert",
    "Auftrag ist nun als pausiert gekennzeichnet"
);

export function PauseAssignmentCarousel() {
    return (
        <>
            <ImgCarousel images={imagesPauseAssignement} captions={captionsPauseAssignement}/>            
        </>
    )
}
//============================================================================


//========================== Auftrag abschließen ============================= url9
import url9_6 from '../../../static/img/fertigung/rückmeldung/auftrag-abschließen/6.png'
import url9_7 from '../../../static/img/fertigung/rückmeldung/auftrag-abschließen/7.png'
import url9_8 from '../../../static/img/fertigung/rückmeldung/auftrag-abschließen/8.png'
import url9_9 from '../../../static/img/fertigung/rückmeldung/auftrag-abschließen/9.png'
import url9_10 from '../../../static/img/fertigung/rückmeldung/auftrag-abschließen/10.png'

const imagesCloseOrder = createImageArray(
    url1, url2, url8_3, url8_4, 
    url8_5, url9_6, url9_7, url9_8,
    url9_9, url9_10
);

const captionsCloseOrder = createCaptionArray(
    "Klicke auf Fertigung",
    "Halle und Bereich / Arbeitsplatz / Maschine wählen",
    "Auftrag suchen und auf das Plus-Symbol klicken",
    "Personalnummer eingeben und Namen auswählen", 
    "Schicht / Zeit / Datum eingeben (Maske kann je nach Einstellung etwas anders aussehen)",
    "90 Minuten müssen noch definiert werden", 
    "Stückzahl eingeben und Verlust definieren wenn nötig",
    "Wenn die gelbe Box verschwunden ist, auf das grüne Häkchen klicken", 
    "Auftrag ist abgeschlossen", 
    "Auftrag ist nun als abgeschlossen gekennzeichnet, somit kann der Vorarbeiter ihn auch in seinem Bereich abschließen"
);

export function CloseAssignmentCarousel() {
    return (
        <>
            <ImgCarousel images={imagesCloseOrder} captions={captionsCloseOrder}/>            
        </>
    )
}
//============================================================================


//========================== Auftrag zurückholen ============================= url10
import url10_3 from '../../../static/img/fertigung/rückmeldung/auftrag-zurückholen/3.png'
import url10_4 from '../../../static/img/fertigung/rückmeldung/auftrag-zurückholen/4.png'
import url10_5 from '../../../static/img/fertigung/rückmeldung/auftrag-zurückholen/5.png'
import url10_6 from '../../../static/img/fertigung/rückmeldung/auftrag-zurückholen/6.png'
import url10_7 from '../../../static/img/fertigung/rückmeldung/auftrag-zurückholen/7.png'
import url10_8 from '../../../static/img/fertigung/rückmeldung/auftrag-zurückholen/8.png'

const imagesRetrieveOrder = createImageArray(
    url1, url2, url10_3, url10_4, 
    url10_5, url10_6, url10_7, url10_8
);

const captionsRetrieveOrder = createCaptionArray(
    "Klicke auf Fertigung",
    "Halle und Bereich / Arbeitsplatz / Maschine wählen",
    "Oben die Arbeitstage einstellen, Auftrag suchen und links auf das Plus-Symbol klicken",
    "Reiter Logbuch wählen und auf das blaue Stift-Symbol vom letzten Eintrag klicken",
    "Personalnummer eingeben und Namen auswählen", 
    "Auf das ausgegraute Stift-Symbol klicken", 
    "Auftrag wurde reaktiviert, Speichern klicken", 
    "Auftrag ist wieder als laufend gekennzeichnet"
);

export function RetrieveAssignmentCarousel() {
    return (
        <>
            <ImgCarousel images={imagesRetrieveOrder} captions={captionsRetrieveOrder}/>            
        </>
    )
}
//============================================================================

//========================== vereinbarte Verluste ============================
import url11_1 from '../../../static/img/fertigung/rückmeldung/vereinbarte-verluste/1.png'
import url11_2 from '../../../static/img/fertigung/rückmeldung/vereinbarte-verluste/2.png'
import url11_3 from '../../../static/img/fertigung/rückmeldung/vereinbarte-verluste/3.png'

const imagesAgreedLosses = createImageArray(
    url11_1, url11_2, url11_3
);

const captionsAgreedLosses = createCaptionArray(
    "Klicke auf vereinbarte Verluste",
    "Trage die Dauer ein, wähle eine Begründung und schreibe eine kurze Notiz in die Infobox",
    "Der vereinbarte Verlust wird nun in der Rückmeldung angezeigt",
);

export function AgreedLossesCarousel() {
    return (
        <>
            <ImgCarousel images={imagesAgreedLosses} captions={captionsAgreedLosses}/>            
        </>
    )
}
//============================================================================


//========================== Auftragsaktivierung =============================
import url12_3 from '../../../static/img/fertigung/rückmeldung/auftrag-aktivieren/aktivierung-möglich/3.png'
import url12_4 from '../../../static/img/fertigung/rückmeldung/auftrag-aktivieren/aktivierung-möglich/4.png'

const imagesActivateAssignment = createImageArray(
    url1, url2, url12_3, url12_4
);

const captionsActivateAssignment = createCaptionArray(
    "Klicke auf Fertigung",
    "Halle und Bereich / Arbeitsplatz / Maschine wählen",
    "Gewünschten Auftrag suchen und auf Aktivieren klicken",
    "Auftrag kann nun wie gewohnt per Klick auf das Plus-Symbol bearbeitet werden"
);

export function ActivateAssignmentCarousel() {
    return (
        <>
            <ImgCarousel images={imagesActivateAssignment} captions={captionsActivateAssignment}/>            
        </>
    )
}

//============================================================================


//============================= Auftragsdetails ==============================
import url13_3 from '../../../static/img/fertigung/rückmeldung/auftragsdetails/3.png'

const imagesAssignmentDetails = createImageArray(
    url1, url2, url13_3
);

const captionsAssignmentDetails = createCaptionArray(
    "Klicke auf Fertigung",
    "Halle und Bereich / Arbeitsplatz / Maschine wählen",
    "Gewünschten Auftrag suchen und auf Auftragsnummer klicken"
);

export function ActivateAssignmentDetails() {
    return (
        <>
            <ImgCarousel images={imagesAssignmentDetails} captions={captionsAssignmentDetails}/>            
        </>
    )
}
//============================================================================


//================================== Suche ===================================
import url14_1 from '../../../static/img/fertigung/suche/1.png'
import url14_2 from '../../../static/img/fertigung/suche/2.png'
import url14_3 from '../../../static/img/fertigung/suche/3.png'

const imagesSearch = createImageArray(
    url14_1, url14_2, url14_3
);

const captionsSearch = createCaptionArray(
    "Klicke rechts oben auf die Lupe",
    "Gib deinen Suchbegriff ein und klicke auf den Button mit der Lupe",
    "Ergebnisse werden angezeigt"
);

export function SearchCarousel() {
    return (
        <>
            <ImgCarousel images={imagesSearch} captions={captionsSearch}/>            
        </>
    )
}
//============================================================================

//============================ Staplerleitsystem =============================
import url15_1 from '../../../static/img/fertigung/transportauftrag/neuer-fahrbefehl/1.png'
import url15_2 from '../../../static/img/fertigung/transportauftrag/neuer-fahrbefehl/2.png'
import url15_3 from '../../../static/img/fertigung/transportauftrag/neuer-fahrbefehl/3.png'
import url15_4 from '../../../static/img/fertigung/transportauftrag/neuer-fahrbefehl/4.png'
import url15_5 from '../../../static/img/fertigung/transportauftrag/neuer-fahrbefehl/5.png'
import url15_6 from '../../../static/img/fertigung/transportauftrag/neuer-fahrbefehl/6.png'
import url15_7 from '../../../static/img/fertigung/transportauftrag/neuer-fahrbefehl/7.png'
import url15_8 from '../../../static/img/fertigung/transportauftrag/neuer-fahrbefehl/8.png'
import url15_9 from '../../../static/img/fertigung/transportauftrag/neuer-fahrbefehl/9.png'

const imagesSls = createImageArray(
    url15_1, url15_2, url15_3, url15_4, url15_5,
    url15_6, url15_7, url15_8, url15_9
);

const captionsSls = createCaptionArray(
    "Klicke auf Fertigung",
    "Halle und Bereich / Arbeitsplatz / Maschine wählen",
    "Oben in er Menüleiste auf Anfordern klicken",
    "Staplerleitsystem auswählen",
    "Hier werden die offenen und abgeschlossenen Fahrbefehle angezeigt",
    "Rechts oben auf Transportauftrag hinzufügen klicken und gewünschte Option auswählen",
    "Anfordern/Abholen auswählen, dann die Option auswählen, was genau geliefert werden soll und die zugehörige Auftragsnummer eingeben, falls gefragt",
    "Fahrbefehl wird anhand der eingegebenen Daten automatisch erstellt",
    "Fahrbefehl ist nun unter offene Fahrbefehle gelistet"
);

export function SlsCarousel() {
    return (
        <>
            <ImgCarousel images={imagesSls} captions={captionsSls}/>            
        </>
    )
}
//============================================================================


//============================ Schichtreport 2.0 =============================
import url16_3 from '../../../static/img/fertigung/reporting/3.png'
import url16_4 from '../../../static/img/fertigung/reporting/4.png'
import url16_5 from '../../../static/img/fertigung/reporting/5.png'
import url16_6 from '../../../static/img/fertigung/reporting/6.png'
import url16_7 from '../../../static/img/fertigung/reporting/7.png'
import url16_8 from '../../../static/img/fertigung/reporting/8.png'
import url16_9 from '../../../static/img/fertigung/reporting/9.png'

const imagesSr2 = createImageArray(
    url15_1, url15_2, url16_3, url16_4,
    url16_5, url16_6, url16_7, url16_8,
    url16_9
);

const captionsSr2 = createCaptionArray(
    "Klicke auf Fertigung",
    "Halle und Bereich / Arbeitsplatz / Maschine wählen",
    "Oben in er Menüleiste auf Reporting klicken und Schichtreport 2.0 auswählen",
    "Oben links kann die Maschine ausgewählt, die Anzahl der Schichten eingestellt oder auf Wochenansicht umgestellt werden",
    "Dies sind die oben beschriebenen Barometer mit den verschiedenen Kennzahlen",
    "Hier werden Gutmenge, verschiedene Verluste, das Rüsten, der PEE und der OEE Wert angezeigt, über dem Diagramm befindet sich die Legende für die verschiedenen Farben",
    "Fährt man mit der Maus über ein Feld, werden Details angezeigt, wie sich die Stunden in dem Feld zusammensetzen",
    "Per Klick unten links, auf weitere Verluste, kann eingesehen werden, wie sich diese zusammensetzen",
    "Hier sind nun die Details der weiteren Verluste sichtbar"
);

export function Sr2Carousel() {
    return (
        <>
            <ImgCarousel images={imagesSr2} captions={captionsSr2}/>            
        </>
    )
}
//============================================================================


//============================ Härteprüfung =============================
import url17_1 from '../../../static/img/fertigung/härteprüfung/1.png'
import url17_2 from '../../../static/img/fertigung/härteprüfung/2.png'
import url17_3 from '../../../static/img/fertigung/härteprüfung/3.png'
import url17_4 from '../../../static/img/fertigung/härteprüfung/4.png'
import url17_5 from '../../../static/img/fertigung/härteprüfung/5.png'

import url17_1_6 from '../../../static/img/fertigung/härteprüfung/manuell/6.png'
import url17_1_7 from '../../../static/img/fertigung/härteprüfung/manuell/7.png'
import url17_1_8 from '../../../static/img/fertigung/härteprüfung/manuell/8.png'
import url17_1_9 from '../../../static/img/fertigung/härteprüfung/manuell/9.png'
import url17_1_10 from '../../../static/img/fertigung/härteprüfung/manuell/10.png'
import url17_1_11 from '../../../static/img/fertigung/härteprüfung/manuell/11.png'
import url17_1_12 from '../../../static/img/fertigung/härteprüfung/manuell/12.png'
import url17_1_13 from '../../../static/img/fertigung/härteprüfung/manuell/13.png'


const imagesHardeningTestManually = createImageArray(
    url17_1, url17_2, url17_3, url17_4, url17_5,
    url17_1_6, url17_1_7, url17_1_8, url17_1_9, 
    url17_1_10, url17_1_11, url17_1_12, url17_1_13
);

const captionsHardeningTestManually = createCaptionArray(
    "Klicke auf Fertigung",
    "Halle auswählen und auf Härteprüfung klicken",
    "Auftrag suchen und auf aktivieren klicken, falls dieser schon aktiviert wurde, weiter zum nächsten Bild",
    "Bei dem Auftrag auf das Plus-Symbol klicken",
    "Personalnummer eingeben und Namen auswählen", 
    "Bei neuem Auftrag auf das Play-Symbol klicken, sonst weiter zum nächsten Bild",
    "Unter Qualität auf den Plus-Button klicken",
    "Freigabe auswählen",
    "Unter Prüfmenge, Anzahl der geprüften Teile eintragen",
    "Unter Gutmenge, die freizugebende Menge eintragen",
    "Unter Notiz, kann bspw. die Gebindenummerierung eingetragen werden",
    "Das freigegebene Gebinde wird nun angezeigt",
    "Auftragsdaten wurden mit Eintrag aktualisiert"
);

export function HardeningTestManuallyCarousel() {
    return (
        <>
            <ImgCarousel images={imagesHardeningTestManually} captions={captionsHardeningTestManually}/>            
        </>
    )
}
//============================================================================