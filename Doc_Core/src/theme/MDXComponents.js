import React from 'react';
import MDXComponents from '@theme-original/MDXComponents';
import LossTree from '@site/src/components/LossTree/loss-tree';
import ImgCarousel from '@site/src/components/ImgCarousel/img-carousel';
import HiddenLink from '@site/src/components/HiddenLink/hidden-link';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Image from '@theme/IdealImage';

import {
    //fertigung carousels
    AgreedLossesCarousel,
    
    FeedbackNoLossCarousel,
    FeedbackLossNoEquipCarousel,
    FeedbackLossEquipInTimeCarousel,
    FeedbackLossEquipNotInTimeCarousel,
    DeleteFeedbackCarousel,
  
    ColloFeedbackNoLossCarousel,
    ColloFeedbackLossNoEquipCarousel,
    ColloFeedbackLossEquipInTimeCarousel,
    ColloFeedbackLossEquipNotInTimeCarousel,
    ColloSubsetCarousel,
    ColloCreateCarousel,
    ColloChangeQuantityCarousel,
    ColloReprintCarousel,
    ColloDeleteCarousel,
    ColloDeleteFeedbackCarousel,
  
    VolumeNoLossCarousel,
    VolumeLossNoEquipCarousel,
    VolumeLossEquipInTimeCarousel,
    VolumeLossEquipNotInTimeCarousel,
    VolumeDeleteFeedbackCarousel,
    VolumeCloseAssignmentCarousel,
  
    ViewFeedbackCarousel,
    EditFeedbackCarousel,
    PauseAssignmentCarousel,
    CloseAssignmentCarousel,
    RetrieveAssignmentCarousel,

    ActivateAssignmentCarousel,
    ActivateAssignmentDetails,
    SearchCarousel,
    SlsCarousel,
    Sr2Carousel,
    HardeningTestManuallyCarousel,
} from '@site/src/components/Carousels/fertigung-carousels';
 
//feinplanung carousels
//=== overview
import {
    OverviewCarousel,
    WorkcenterCarousel,
    SelectWorkcenterCarousel,
    BarChartCarousel,
    ZoomCarousel
} from '@site/src/components/Carousels/feinplanung/übersicht-carousel';

//=== sequence
import {
    FineTuneAssignmentCarousel,
    ChangeSequenceCarousel,
    MoveToPlanningpoolCarousel,
    ShowCancellationCarousel,
    CancellationWithQuantityCarousel,
    CancellationWkzMmCarousel,
    RetrieveCancellationCarousel,
    NewShareCarousel,
    ManufactureFromShareCarousel,
    DeleteFromShareCarousel,
    SplitAssignmentCarousel,
    CloseAssignmentFinePlanningCarousel,
    ReactivateAssignmentFinePlanningCarousel
} from '@site/src/components/Carousels/feinplanung/sequenz-carousels';

//=== logbook
import {
    LogbookCarousel
} from '@site/src/components/Carousels/feinplanung/logbuch-carousels';

//=== preview
import {
    PreviewGeneralCarousel,
    PreviewHoursCarousel,
    PreviewStaffCarousel
} from '@site/src/components/Carousels/feinplanung/vorschau-carousels';

//=== shift planning
import {
    ShiftPlanningGoToCarousel,
    ShiftPlanningCreateNewWeekCarousel,
    ShiftPlanningNavigationBarCarousel
} from '@site/src/components/Carousels/feinplanung/schichtplanung-carousel';


//=== Rawmaterial
import {
    RawMaterialCarousel
} from '@site/src/components/carousels/ppr/rawmaterial-carousel';


//=== PPR Print
import {
    PprPrintCarousel
} from '@site/src/components/carousels/ppr/pprprint-carousels';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faFolder, faFolderOpen, faEnvelope, faClipboard, faSquareE, faPlus } from '@fortawesome/pro-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core'; 

/* import { fab } from '@fortawesome/free-brands-svg-icons';  
import { fas } from '@fortawesome/pro-solid-svg-icons'; 
import { fal } from '@fortawesome/pro-light-svg-icons'; 
import { fad } from '@fortawesome/pro-duotone-svg-icons'; 
import { far } from '@fortawesome/pro-regular-svg-icons'; 
import { fat } from '@fortawesome/pro-thin-svg-icons'; 
import { fasl } from '@fortawesome/sharp-light-svg-icons'; 
import { fasr } from '@fortawesome/sharp-regular-svg-icons'; 
import { fass } from '@fortawesome/sharp-solid-svg-icons';  */

library.add(
    //fab, fas, fal, fad, far, fat, fasl, fasr, fass
    faFolder, faFolderOpen, faEnvelope, faClipboard, faSquareE, faPlus
); 




export default {
  ...MDXComponents,
  LossTree,
  FontAwesomeIcon,
  ImgCarousel,
  HiddenLink,
  Tabs,
  TabItem,
  Image,
  
  //fertigung carousels
  AgreedLossesCarousel,

  FeedbackNoLossCarousel,
  FeedbackLossNoEquipCarousel,
  FeedbackLossEquipInTimeCarousel,
  FeedbackLossEquipNotInTimeCarousel,
  DeleteFeedbackCarousel,

  ColloFeedbackNoLossCarousel,
  ColloFeedbackLossNoEquipCarousel,
  ColloFeedbackLossEquipInTimeCarousel,
  ColloFeedbackLossEquipNotInTimeCarousel,
  ColloSubsetCarousel,
  ColloCreateCarousel,
  ColloChangeQuantityCarousel,
  ColloReprintCarousel,
  ColloDeleteCarousel,
  ColloDeleteFeedbackCarousel,

  VolumeNoLossCarousel,
  VolumeLossNoEquipCarousel,
  VolumeLossEquipInTimeCarousel,
  VolumeLossEquipNotInTimeCarousel,
  VolumeDeleteFeedbackCarousel,
  VolumeCloseAssignmentCarousel,

  ViewFeedbackCarousel,
  EditFeedbackCarousel,
  PauseAssignmentCarousel,
  CloseAssignmentCarousel,
  RetrieveAssignmentCarousel,

  ActivateAssignmentCarousel,
  ActivateAssignmentDetails,
  SearchCarousel,
  SlsCarousel,
  Sr2Carousel,
  HardeningTestManuallyCarousel,


  //feinplanung carousels
  //=== overview
  OverviewCarousel,
  WorkcenterCarousel,
  SelectWorkcenterCarousel,
  BarChartCarousel,
  ZoomCarousel,

  //=== sequence
  FineTuneAssignmentCarousel,
  ChangeSequenceCarousel,
  MoveToPlanningpoolCarousel,
  CancellationWithQuantityCarousel,
  ShowCancellationCarousel,
  CancellationWkzMmCarousel,
  RetrieveCancellationCarousel,
  NewShareCarousel,
  ManufactureFromShareCarousel,
  DeleteFromShareCarousel,
  SplitAssignmentCarousel,
  CloseAssignmentFinePlanningCarousel,
  ReactivateAssignmentFinePlanningCarousel,

  //=== logbook
  LogbookCarousel,

  //=== preview
  PreviewGeneralCarousel,
  PreviewHoursCarousel,
  PreviewStaffCarousel,

  //=== shift planning
  ShiftPlanningGoToCarousel,
  ShiftPlanningCreateNewWeekCarousel,
  ShiftPlanningNavigationBarCarousel,

  //=== RawMaterial
  RawMaterialCarousel,


  //=== PPR
  PprPrintCarousel
};   