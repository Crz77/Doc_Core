import React from 'react';
import ImgCarousel from '../../ImgCarousel/img-carousel';
import { createImageArray, createCaptionArray } from '../../../utils/utils'; 
import url1 from '../../../../static/img/feinplanung/sequenz/1.png'
import url2 from '../../../../static/img/feinplanung/sequenz/2.png'

//================================= Auftrag feinplanen ================================
import url1_3 from '../../../../static/img/feinplanung/sequenz/auftrag-feinplanen/3.png'
import url1_4 from '../../../../static/img/feinplanung/sequenz/auftrag-feinplanen/4.png'
import url1_5 from '../../../../static/img/feinplanung/sequenz/auftrag-feinplanen/5.png'
import url1_6 from '../../../../static/img/feinplanung/sequenz/auftrag-feinplanen/6.png'
import url1_7 from '../../../../static/img/feinplanung/sequenz/auftrag-feinplanen/7.png'
import url1_8 from '../../../../static/img/feinplanung/sequenz/auftrag-feinplanen/8.png'
import url1_9 from '../../../../static/img/feinplanung/sequenz/auftrag-feinplanen/9.png'
import url1_10 from '../../../../static/img/feinplanung/sequenz/auftrag-feinplanen/10.png'
import url1_11 from '../../../../static/img/feinplanung/sequenz/auftrag-feinplanen/11.png'


const imagesFineTuneAssignment = createImageArray (
    url1, url2, url1_3, url1_4, url1_5, url1_6, url1_7, url1_8, 
    url1_9, url1_10, url1_11
);

const captionsFineTuneAssignment = createCaptionArray(
    "Klicke auf Feinplanung",
    "Halle und Bereich auswählen",
    "Den Reiter Sequenz auswählen",
    "Rechts oben den Bearbeitungsmodus (Edit-Modus) einschalten",
    "Maschine auswählen",
    "Hier werden die laufenden/feinverplanten Aufträge auf diesem Arbeitsplatz angezeigt",
    "Gewünschten Auftrag suchen und rechts auf den Plus-Button klicken",
    "Beim oberen Pool wird eine kurze Infomeldung sichtbar und der neu hinzugefügte Auftrag wird gelb eingefärbt. " +
    "Abschließend muss die Änderung noch abgespeichert werden, dazu auf den grünen Speichern-Button klicken",
    "Auftrag wurde der Maschine zugewiesen, Speichern-Button ist wieder weiß",
    "Nun Rechtsklick auf die Maschine und anschließend auf Fertigungsansicht klicken",
    "Auftrag ist nun in der Fertigung sichtbar und kann bearbeitet werden"
);

export function FineTuneAssignmentCarousel() {
    return (
        <>
            <ImgCarousel images={imagesFineTuneAssignment} captions={captionsFineTuneAssignment}/>            
        </>
    )
}
//============================================================================

//============================= Reihenfolge ändern ===========================
import url2_6 from '../../../../static/img/feinplanung/sequenz/reihenfolge-ändern/6.png'
import url2_7 from '../../../../static/img/feinplanung/sequenz/reihenfolge-ändern/7.png'
import url2_8 from '../../../../static/img/feinplanung/sequenz/reihenfolge-ändern/8.png'

const imagesChangeSequence = createImageArray (
    url1, url2, url1_3, url1_4, url1_5, 
    url2_6, url2_7, url2_8
);

const captionsChangeSequence = createCaptionArray(
    "Klicke auf Feinplanung",
    "Halle und Bereich auswählen",
    "Den Reiter Sequenz auswählen",
    "Rechts oben den Bearbeitungsmodus (Edit-Modus) einschalten",
    "Maschine auswählen",
    "Wenn du nun rechts bei einem Auftrag mit der Maus über die drei Striche fährst, ändert sich dein Cursor zu einem Kreuz " +
    "und du kannst den Auftrag nach unten oder oben verschieben. Wir verschieben ihn jetzt um eine Position nach oben",
    "Auf Speichern klicken",
    "Reihenfolge wurde geändert"
);

export function ChangeSequenceCarousel() {
    return (
        <>
            <ImgCarousel images={imagesChangeSequence} captions={captionsChangeSequence}/>            
        </>
    )
}
//============================================================================


//=============================== Stornobereich ==============================
import url_3_4 from '../../../../static/img/feinplanung/sequenz/auftrag-stornieren/4.png'

//========= Auftrag in Planungspool verschieben
import url_3_1_5 from '../../../../static/img/feinplanung/sequenz/auftrag-stornieren/verschieben-in-planpool/5.png'
import url_3_1_6 from '../../../../static/img/feinplanung/sequenz/auftrag-stornieren/verschieben-in-planpool/6.png'
import url_3_1_7 from '../../../../static/img/feinplanung/sequenz/auftrag-stornieren/verschieben-in-planpool/7.png'
import url_3_1_8 from '../../../../static/img/feinplanung/sequenz/auftrag-stornieren/verschieben-in-planpool/8.png'
import url_3_1_9 from '../../../../static/img/feinplanung/sequenz/auftrag-stornieren/verschieben-in-planpool/9.png'
import url_3_1_10 from '../../../../static/img/feinplanung/sequenz/auftrag-stornieren/verschieben-in-planpool/10.png'
import url_3_1_11 from '../../../../static/img/feinplanung/sequenz/auftrag-stornieren/verschieben-in-planpool/11.png'
import url_3_1_12 from '../../../../static/img/feinplanung/sequenz/auftrag-stornieren/verschieben-in-planpool/12.png'
import url_3_1_13 from '../../../../static/img/feinplanung/sequenz/auftrag-stornieren/verschieben-in-planpool/13.png'

const imagesMoveToPlanningpool = createImageArray (
    url1, url2, url1_3, url_3_4, url_3_1_5, 
    url_3_1_6, url_3_1_7, url_3_1_8, url_3_1_9,
    url_3_1_10, url_3_1_11, url_3_1_12, url_3_1_13
);

const captionsMoveToPlanningpool = createCaptionArray(
    "Klicke auf Feinplanung",
    "Halle und Bereich auswählen",
    "Den Reiter Sequenz auswählen",
    "Maschine/Arbeitsplatz auswählen",
    "Rechts oben Edit-Modus aktivieren",
    "Gewünschten Auftrag suchen und den Pfeil-Button in der rechten Spalte anklicken",
    "Auf Entfernen klicken um Auftrag in Planungspool zu verschieben",
    "Auftrag befindet sich nun im Planungspool, Änderung mit Klick auf Speichern bestätigen",
    "Neben dem Auftrag auf den Pfeil-Button klicken",
    "Stornieren auswählen",
    "Auftrag wurde storniert",
    "Auf Storno-Bereich klicken",
    "Auftrag liegt nun im Storno-Bereich"
);

export function MoveToPlanningpoolCarousel() {
    return (
        <>
            <ImgCarousel images={imagesMoveToPlanningpool} captions={captionsMoveToPlanningpool}/>            
        </>
    )
}


//========= Auftrag bei eingetragener Stückzahl stornieren
import url_3_2_5 from '../../../../static/img/feinplanung/sequenz/auftrag-stornieren/storno-stückzahl/5.png'
import url_3_2_6 from '../../../../static/img/feinplanung/sequenz/auftrag-stornieren/storno-stückzahl/6.png'
import url_3_2_7 from '../../../../static/img/feinplanung/sequenz/auftrag-stornieren/storno-stückzahl/7.png'
import url_3_2_8 from '../../../../static/img/feinplanung/sequenz/auftrag-stornieren/storno-stückzahl/8.png'
import url_3_2_9 from '../../../../static/img/feinplanung/sequenz/auftrag-stornieren/storno-stückzahl/9.png'
import url_3_2_10 from '../../../../static/img/feinplanung/sequenz/auftrag-stornieren/storno-stückzahl/10.png'
import url_3_2_11 from '../../../../static/img/feinplanung/sequenz/auftrag-stornieren/storno-stückzahl/11.png'
import url_3_2_12 from '../../../../static/img/feinplanung/sequenz/auftrag-stornieren/storno-stückzahl/12.png'
import url_3_2_13 from '../../../../static/img/feinplanung/sequenz/auftrag-stornieren/storno-stückzahl/13.png'
import url_3_2_14 from '../../../../static/img/feinplanung/sequenz/auftrag-stornieren/storno-stückzahl/14.png'
import url_3_2_15 from '../../../../static/img/feinplanung/sequenz/auftrag-stornieren/storno-stückzahl/15.png'
import url_3_2_16 from '../../../../static/img/feinplanung/sequenz/auftrag-stornieren/storno-stückzahl/16.png'
import url_3_2_17 from '../../../../static/img/feinplanung/sequenz/auftrag-stornieren/storno-stückzahl/17.png'
import url_3_2_18 from '../../../../static/img/feinplanung/sequenz/auftrag-stornieren/storno-stückzahl/18.png'

const imagesCancellationWithQuantity = createImageArray (
    url1, url2, url1_3, url_3_4, url_3_2_5, 
    url_3_2_6, url_3_2_7, url_3_2_8, url_3_2_9,
    url_3_2_10, url_3_2_11, url_3_2_12, url_3_2_13,
    url_3_2_14, url_3_2_15, url_3_2_16, url_3_2_17,
    url_3_2_18
);

const captionsCancellationWithQuantity = createCaptionArray(
    "Klicke auf Feinplanung",
    "Halle und Bereich auswählen",
    "Den Reiter Sequenz auswählen",
    "Maschine/Arbeitsplatz auswählen",
    "Rechts oben Edit-Modus aktivieren",
    "Auftrag suchen und links auf das blaue Plus-Symbol klicken",
    "Nun müssen alle Einträge gelöscht werden. Dazu auf das blaue Stift-Symbol klicken, bei mehreren Einträgen, mit dem jüngsten beginnen",
    "Personalnummer eingeben und Namen auswählen",
    "Auf Eintrag löschen klicken",
    "Meldung bestätigen",
    "Den Löschvorgang für jeden Eintrag wiederholen. Danach neben dem Auftrag auf den Pfeil-Button in der rechten Spalte anklicken",
    "Auf Entfernen klicken um Auftrag in Planungspool zu verschieben",
    "Auftrag befindet sich nun im Planungspool, Änderung mit Klick auf Speichern bestätigen",
    "Neben dem Auftrag auf den Pfeil-Button klicken",
    "Stornieren auswählen",
    "Auftrag wurde storniert",
    "Auf Storno-Bereich klicken",
    "Auftrag liegt nun im Storno-Bereich"
);

export function CancellationWithQuantityCarousel() {
    return (
        <>
            <ImgCarousel images={imagesCancellationWithQuantity} captions={captionsCancellationWithQuantity}/>            
        </>
    )
}


//========= Auftrag bei Werkzeug/MM-Anforderung stornieren
import url_3_3_5 from '../../../../static/img/feinplanung/sequenz/auftrag-stornieren/storno-wkz-mm/5.png'
import url_3_3_6 from '../../../../static/img/feinplanung/sequenz/auftrag-stornieren/storno-wkz-mm/6.png'
import url_3_3_7 from '../../../../static/img/feinplanung/sequenz/auftrag-stornieren/storno-wkz-mm/7.png'
import url_3_3_8 from '../../../../static/img/feinplanung/sequenz/auftrag-stornieren/storno-wkz-mm/8.png'
import url_3_3_9 from '../../../../static/img/feinplanung/sequenz/auftrag-stornieren/storno-wkz-mm/9.png'
import url_3_3_10 from '../../../../static/img/feinplanung/sequenz/auftrag-stornieren/storno-wkz-mm/10.png'
import url_3_3_11 from '../../../../static/img/feinplanung/sequenz/auftrag-stornieren/storno-wkz-mm/11.png'
import url_3_3_12 from '../../../../static/img/feinplanung/sequenz/auftrag-stornieren/storno-wkz-mm/12.png'
import url_3_3_13 from '../../../../static/img/feinplanung/sequenz/auftrag-stornieren/storno-wkz-mm/13.png'
import url_3_3_14 from '../../../../static/img/feinplanung/sequenz/auftrag-stornieren/storno-wkz-mm/14.png'
import url_3_3_15 from '../../../../static/img/feinplanung/sequenz/auftrag-stornieren/storno-wkz-mm/15.png'
import url_3_3_16 from '../../../../static/img/feinplanung/sequenz/auftrag-stornieren/storno-wkz-mm/16.png'
import url_3_3_17 from '../../../../static/img/feinplanung/sequenz/auftrag-stornieren/storno-wkz-mm/17.png'
import url_3_3_18 from '../../../../static/img/feinplanung/sequenz/auftrag-stornieren/storno-wkz-mm/18.png'
import url_3_3_19 from '../../../../static/img/feinplanung/sequenz/auftrag-stornieren/storno-wkz-mm/19.png'
import url_3_3_20 from '../../../../static/img/feinplanung/sequenz/auftrag-stornieren/storno-wkz-mm/20.png'

const imagesCancellationWkzMm = createImageArray (
    url1, url2, url1_3, url_3_4, url_3_3_5,
    url_3_3_6, url_3_3_7, url_3_3_8, url_3_3_9,
    url_3_3_10, url_3_3_11, url_3_3_12,
    url_3_3_13, url_3_3_14, url_3_3_15,
    url_3_3_16, url_3_3_17, url_3_3_18,
    url_3_3_19, url_3_3_20
);

const captionsCancellationWkzMm = createCaptionArray(
    "Klicke auf Feinplanung",
    "Halle und Bereich auswählen",
    "Den Reiter Sequenz auswählen",
    "Maschine/Arbeitsplatz auswählen",
    "Rechts oben Edit-Modus aktivieren",
    "Rechts neben dem Auftrag auf den Pfeil-Button klicken",
    "Auf Werkzeug & Messmittel klicken",
    "Storno-Nachricht eingeben",
    "Auf den roten Storno-Button klicken, um alles zu stornieren",
    "Meldung bestätigen",
    "Status wurde aktualisiert. Jetzt muss gewartet werden, bis das Magazin die Stornierung bestätigt",
    "Wenn das Feld leer ist, hat das Magazin die Stornierung bestätigt",
    "Nun rechts neben dem Auftrag auf den Pfeil-Button klicken",
    "Entfernen auswählen",
    "Änderung bestätigen",
    "Wieder rechts neben dem Auftrag auf den Pfeil-Button klicken",
    "Stornieren auswählen",
    "Meldung bestätigen",
    "Auf Storno-Bereich klicken",
    "Auftrag liegt nun im Storno-Bereich"
);

export function CancellationWkzMmCarousel() {
    return (
        <>
            <ImgCarousel images={imagesCancellationWkzMm} captions={captionsCancellationWkzMm}/>            
        </>
    )
}


//========= Stornierung anzeigen
import url_3_4_5 from '../../../../static/img/feinplanung/sequenz/auftrag-stornieren/storno-anzeigen/5.png'
import url_3_4_6 from '../../../../static/img/feinplanung/sequenz/auftrag-stornieren/storno-anzeigen/6.png'

const imagesShowCancellation = createImageArray (
    url1, url2, url1_3, url_3_4,
    url_3_4_5, url_3_4_6
);

const captionsShowCancellation = createCaptionArray(
    "Klicke auf Feinplanung",
    "Halle und Bereich auswählen",
    "Den Reiter Sequenz auswählen",
    "Arbeitsplatz/Maschine auswählen",
    "Rechts unten in der Ecke auf den Button mit dem Stop-Symbol anklicken",
    "Storno-Bereich wird angezeigt"
);

export function ShowCancellationCarousel() {
    return (
        <>
            <ImgCarousel images={imagesShowCancellation} captions={captionsShowCancellation}/>            
        </>
    )
}


//========= Stornierung zurückholen
import url_3_5_5 from '../../../../static/img/feinplanung/sequenz/auftrag-stornieren/storno-zurückholen/5.png'
import url_3_5_6 from '../../../../static/img/feinplanung/sequenz/auftrag-stornieren/storno-zurückholen/6.png'
import url_3_5_7 from '../../../../static/img/feinplanung/sequenz/auftrag-stornieren/storno-zurückholen/7.png'
import url_3_5_8 from '../../../../static/img/feinplanung/sequenz/auftrag-stornieren/storno-zurückholen/8.png'
import url_3_5_9 from '../../../../static/img/feinplanung/sequenz/auftrag-stornieren/storno-zurückholen/9.png'
import url_3_5_10 from '../../../../static/img/feinplanung/sequenz/auftrag-stornieren/storno-zurückholen/10.png'

const imagesRetrieveCancellation = createImageArray (
    url1, url2, url1_3, url_3_4,
    url_3_5_5, url_3_5_6, url_3_5_7,
    url_3_5_8, url_3_5_9, url_3_5_10
);

const captionsRetrieveCancellation = createCaptionArray(
    "Klicke auf Feinplanung",
    "Halle und Bereich auswählen",
    "Den Reiter Sequenz auswählen",
    "Arbeitsplatz/Maschine auswählen",
    "Rechts oben Edit-Modus aktivieren",
    "Rechts unten in der Ecke auf den Button mit dem Stop-Symbol anklicken",
    "Auf den Pfeil-Button klicken",
    "Auf Entfernen klicken",
    "Fenster schließen",
    "Auftrag liegt wieder im Planungspool"
);

export function RetrieveCancellationCarousel() {
    return (
        <>
            <ImgCarousel images={imagesRetrieveCancellation} captions={captionsRetrieveCancellation}/>            
        </>
    )
}
//============================================================================


//=============================== Share-Bereich ==============================
import url4_1 from '../../../../static/img/feinplanung/sequenz/share-bereich/1.png'
import url4_2 from '../../../../static/img/feinplanung/sequenz/share-bereich/2.png'

//========= Auftrag in Share-Bereich verschieben
import url_4_1_3 from '../../../../static/img/feinplanung/sequenz/share-bereich/new-share/3.png'
import url_4_1_4 from '../../../../static/img/feinplanung/sequenz/share-bereich/new-share/4.png'
import url_4_1_5 from '../../../../static/img/feinplanung/sequenz/share-bereich/new-share/5.png'
import url_4_1_6 from '../../../../static/img/feinplanung/sequenz/share-bereich/new-share/6.png'
import url_4_1_7 from '../../../../static/img/feinplanung/sequenz/share-bereich/new-share/7.png'
import url_4_1_8 from '../../../../static/img/feinplanung/sequenz/share-bereich/new-share/8.png'
import url_4_1_9 from '../../../../static/img/feinplanung/sequenz/share-bereich/new-share/9.png'
import url_4_1_10 from '../../../../static/img/feinplanung/sequenz/share-bereich/new-share/10.png'

const imagesNewShare = createImageArray (
    url4_1, url4_2, url_4_1_3, url_4_1_4,
    url_4_1_5, url_4_1_6, url_4_1_7, url_4_1_8,
    url_4_1_9, url_4_1_10
);

const captionsNewShare = createCaptionArray(
    "Klicke auf Feinplanung",
    "Halle und Bereich auswählen",
    "Den Reiter Sequenz auswählen",
    "Maschine/Arbeitsplatz auswählen",
    "Rechts oben Edit-Modus aktivieren",
    "Gewünschten Auftrag suchen und den Pfeil-Button in der rechten Spalte anklicken",
    "Auf Share klicken",
    "Meldung bestätigen",
    "Auftrag liegt nun im Share-Bereich. Um diesen anzusehen auf den Share-Button klicken",
    "Auftrag liegt im Share-Bereich"
);

export function NewShareCarousel() {
    return (
        <>
            <ImgCarousel images={imagesNewShare} captions={captionsNewShare}/>            
        </>
    )
}

//========= Auftrag aus Share-Bereich fertigen
import url_4_2_3 from '../../../../static/img/feinplanung/sequenz/share-bereich/manufacture-share/3.png'
import url_4_2_4 from '../../../../static/img/feinplanung/sequenz/share-bereich/manufacture-share/4.png'
import url_4_2_5 from '../../../../static/img/feinplanung/sequenz/share-bereich/manufacture-share/5.png'
import url_4_2_6 from '../../../../static/img/feinplanung/sequenz/share-bereich/manufacture-share/6.png'
import url_4_2_7 from '../../../../static/img/feinplanung/sequenz/share-bereich/manufacture-share/7.png'
import url_4_2_8 from '../../../../static/img/feinplanung/sequenz/share-bereich/manufacture-share/8.png'
import url_4_2_9 from '../../../../static/img/feinplanung/sequenz/share-bereich/manufacture-share/9.png'
import url_4_2_10 from '../../../../static/img/feinplanung/sequenz/share-bereich/manufacture-share/10.png'

const imagesManufactureFromShare = createImageArray (
    url4_1, url4_2, url_4_2_3, url_4_2_4,
    url_4_2_5, url_4_2_6, url_4_2_7,
    url_4_2_8, url_4_2_9, url_4_2_10
);

const captionsManufactureFromShare = createCaptionArray(
    "Klicke auf Feinplanung",
    "Halle und Bereich auswählen",
    "Den Reiter Sequenz auswählen",
    "Rechts oben Edit-Modus aktivieren",
    "Auf Share-Bereich klicken",
    "Gewünschten Auftrag suchen und den Pfeil-Button in der rechten Spalte anklicken",
    "Richtige Maschine im Dropdown-Menü auswählen",
    "Auftrag wurde auf der Maschine feinverplant",
    "Auf Speichern klicken, um Änderungen festzuschreiben",
    "Auftrag wurde feinverplant"
);

export function ManufactureFromShareCarousel() {
    return (
        <>
            <ImgCarousel images={imagesManufactureFromShare} captions={captionsManufactureFromShare}/>            
        </>
    )
}

//========= Auftrag aus Share-Bereich entfernen
import url_4_3_6 from '../../../../static/img/feinplanung/sequenz/share-bereich/delete-share/6.png'
import url_4_3_7 from '../../../../static/img/feinplanung/sequenz/share-bereich/delete-share/7.png'
import url_4_3_8 from '../../../../static/img/feinplanung/sequenz/share-bereich/delete-share/8.png'
import url_4_3_9 from '../../../../static/img/feinplanung/sequenz/share-bereich/delete-share/9.png'
import url_4_3_10 from '../../../../static/img/feinplanung/sequenz/share-bereich/delete-share/10.png'

const imagesDeleteFromShare = createImageArray (
    url4_1, url4_2, url_4_1_3, 
    url_4_1_5, url_4_3_6, url_4_3_7, 
    url_4_3_8, url_4_3_9, url_4_3_10
);

const captionsDeleteFromShare = createCaptionArray(
    "Klicke auf Feinplanung",
    "Halle und Bereich auswählen",
    "Den Reiter Sequenz auswählen",
    "Rechts oben Edit-Modus aktivieren",
    "Auf Share-Bereich klicken",
    "Gewünschten Auftrag suchen und den Pfeil-Button in der rechten Spalte anklicken",
    "Auf entfernen klicken",
    "Fenster schließen",
    "Auftrag befindet sich wieder im Planungspool"
);

export function DeleteFromShareCarousel() {
    return (
        <>
            <ImgCarousel images={imagesDeleteFromShare} captions={captionsDeleteFromShare}/>            
        </>
    )
}
//============================================================================


//=============================== Auftag teilen ==============================
import url5_6 from '../../../../static/img/feinplanung/sequenz/auftrag-teilen/6.png'
import url5_7 from '../../../../static/img/feinplanung/sequenz/auftrag-teilen/7.png'
import url5_8 from '../../../../static/img/feinplanung/sequenz/auftrag-teilen/8.png'
import url5_9 from '../../../../static/img/feinplanung/sequenz/auftrag-teilen/9.png'
import url5_10 from '../../../../static/img/feinplanung/sequenz/auftrag-teilen/10.png'

const imagesSplitAssignment = createImageArray (
    url4_1, url4_2, url_4_1_3, url_4_1_4,
    url_4_1_5, url5_6, url5_7, url5_8,
    url5_9, url5_10
);

const captionsSplitAssignment = createCaptionArray(
    "Klicke auf Feinplanung",
    "Halle und Bereich auswählen",
    "Den Reiter Sequenz auswählen",
    "Maschine/Arbeitsplatz auswählen",
    "Rechts oben Edit-Modus aktivieren",
    "Gewünschten Auftrag suchen und den Pfeil-Button in der rechten Spalte anklicken",
    "Auf Menge ändern klicken",
    "Stückzahl für ersten Teil des Auftrages eingeben, anschließend auf das blaue Häkchen klicken",
    "Änderungen speichern",
    "Auftrag wurde aufgeteilt"
);

export function SplitAssignmentCarousel() {
    return (
        <>
            <ImgCarousel images={imagesSplitAssignment} captions={captionsSplitAssignment}/>            
        </>
    )
}
//============================================================================

//============================ Auftag abschließen ============================
import url6_3 from '../../../../static/img/feinplanung/sequenz/auftrag-abschließen/abschließen/3.png'
import url6_4 from '../../../../static/img/feinplanung/sequenz/auftrag-abschließen/abschließen/4.png'
import url6_5 from '../../../../static/img/feinplanung/sequenz/auftrag-abschließen/abschließen/5.png'
import url6_6 from '../../../../static/img/feinplanung/sequenz/auftrag-abschließen/abschließen/6.png'
import url6_7 from '../../../../static/img/feinplanung/sequenz/auftrag-abschließen/abschließen/7.png'
import url6_8 from '../../../../static/img/feinplanung/sequenz/auftrag-abschließen/abschließen/8.png'

const imagesCloseAssignmentFinePlanning = createImageArray (
    url4_1, url4_2, url6_3, url6_4, 
    url6_5, url6_6, url6_7, url6_8
);

const captionsCloseAssignmentFinePlanning = createCaptionArray(
    "Klicke auf Feinplanung",
    "Halle und Bereich auswählen",
    "Den Reiter Sequenz auswählen",
    "Maschine/Arbeitsplatz auswählen und Edit-Modus aktivieren",
    "Richtigen Auftrag suchen und auf den Pfeil in der rechten Spalte klicken",
    "Auf Abschließen klicken",
    "Änderungen speichern",
    "Auftrag wurde abgeschlossen und ist nun unter abgeschlossene Aufträge verfügbar"
);

export function CloseAssignmentFinePlanningCarousel() {
    return (
        <>
            <ImgCarousel images={imagesCloseAssignmentFinePlanning} captions={captionsCloseAssignmentFinePlanning}/>            
        </>
    )
}
//============================================================================

//==================== abgeschlossenen Auftrag zurückholen ===================
import url7_4 from '../../../../static/img/feinplanung/sequenz/auftrag-abschließen/auftrag-zurückholen/4.png'
import url7_5 from '../../../../static/img/feinplanung/sequenz/auftrag-abschließen/auftrag-zurückholen/5.png'
import url7_6 from '../../../../static/img/feinplanung/sequenz/auftrag-abschließen/auftrag-zurückholen/6.png'
import url7_7 from '../../../../static/img/feinplanung/sequenz/auftrag-abschließen/auftrag-zurückholen/7.png'
import url7_8 from '../../../../static/img/feinplanung/sequenz/auftrag-abschließen/auftrag-zurückholen/8.png'
import url7_9 from '../../../../static/img/feinplanung/sequenz/auftrag-abschließen/auftrag-zurückholen/9.png'
import url7_10 from '../../../../static/img/feinplanung/sequenz/auftrag-abschließen/auftrag-zurückholen/10.png'
import url7_11 from '../../../../static/img/feinplanung/sequenz/auftrag-abschließen/auftrag-zurückholen/11.png'

const imagesReactivateAssignmentFinePlanning = createImageArray (
    url4_1, url4_2, url6_3, url7_4, 
    url7_5, url7_6, url7_7, url7_8,
    url7_9, url7_10, url7_11
);

const captionsReactivateAssignmentFinePlanning = createCaptionArray(
    "Klicke auf Feinplanung",
    "Halle und Bereich auswählen",
    "Den Reiter Sequenz auswählen",
    "Maschine/Arbeitsplatz auswählen und Edit-Modus aktivieren",
    "Haken bei abgeschlossene Aufträge setzen",
    "Falls der Auftrag nicht angezeigt wird, müssen die Arbeitstage zurückgedreht werden",
    "Arbeitstage bis zu Abschlussdatum zurückstellen",
    "Wenn der Auftrag angezeigt wird, auf den Pfeil in der rechten Spalte klicken",
    "Auf Reaktivieren klicken",
    "Änderungen speichern",
    "Auftrag wurde reaktiviert und kann nun wieder bearbeitet werden"
);

export function ReactivateAssignmentFinePlanningCarousel() {
    return (
        <>
            <ImgCarousel images={imagesReactivateAssignmentFinePlanning} captions={captionsReactivateAssignmentFinePlanning}/>            
        </>
    )
}
//============================================================================
