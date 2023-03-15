import { } from "https://unpkg.com/@workadventure/scripting-api-extra";


var currentPopup = undefined;
var isCoWebSiteOpened =  false;

function closePopUp(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}

var zoneNeedHelp = "needHelp";
var zoneFeedback = "feedback";
var zoneDBPlanet = "DBPlanet";
var urlTutorial = "https://db-planet.deutschebahn.com/pages/telefonie/apps/content/workadventure-erste-schritte";
var urlFeedback = "https://forms.office.com/Pages/ResponsePage.aspx?id=nC2noeZJbU-a9lqvoRg7_SoZREurD2tJrJwSfyf3bX5UNEczWlNIRkJDNjNUUjZKODUyVE9aNjQ0Uy4u";
var urlDBPlanet = "https://db-planet.deutschebahn.com/pages/telefonie/apps/content/workadventure";

WA.room.onEnterLayer("start_program").subscribe(() => {
    currentPopup =   WA.ui.openPopup("popUpStart","Willkommen beim Quali-Camp!\n\nDen Schulungsraum findest du links.\nDen Agilitätsraum findest du oben rechts.\nBei Fragen melde dich an der Information rechts.",[
    
        {
            label: "OK",
            callback: (popup => {
                closePopUp();
            })
        }]);

    
        
        
});
        
        

WA.room.onLeaveLayer("start_program").subscribe(() => {
    closePopUp();
})





WA.room.onEnterZone(zoneNeedHelp, () => {
currentPopup =  WA.ui.openPopup("needHelpPopup","Tutorial\nansehen?",[
        {
            label: "OK",
            className:"primary",
            callback: (popup => {
                WA.nav.openTab(urlTutorial);
                isCoWebSiteOpened = true;
                closePopUp();
            })
        }]);
})

WA.room.onLeaveZone(zoneNeedHelp, () =>{
    closePopUp();
    if (isCoWebSiteOpened) {
        WA.nav.closeCoWebSite();
		isCoWebSiteOpened = false;
	}
})

WA.room.onEnterZone(zoneFeedback, () => {
	currentPopup =  WA.ui.openPopup("feedbackPopup","Möchtest du ein Feedback geben?",[
	{
		label: 'Nein',
		className: 'secondary',
		callback: () => closePopUp(),
		},
		{
			label: "Gerne",
			className:"primary",
			callback: (popup => {
				WA.nav.openCoWebSite(urlFeedback);
				isCoWebSiteOpened = true;
				closePopUp();
            })
		}]);
})

WA.room.onLeaveZone(zoneFeedback, () =>{
	closePopUp();
	if (isCoWebSiteOpened) {
        WA.nav.closeCoWebSite();
		isCoWebSiteOpened = false;
    }
})

WA.room.onEnterZone(zoneDBPlanet, () => {
	currentPopup =  WA.ui.openPopup("DBPlanetPopup","DB Planet WorkAdventure",[
    {
		label: "OK",
		className:"primary",
		callback: (popup => {
			WA.nav.openTab(urlDBPlanet);
			isCoWebSiteOpened = true;
			closePopUp();
			})
		}]);
})

WA.room.onLeaveZone(zoneDBPlanet, () =>{
	closePopUp();
	if (isCoWebSiteOpened) {
		WA.nav.closeCoWebSite();
		isCoWebSiteOpened = false;
    }
})


		


 WA.room.onEnterZone("portal_program", () => {
	currentPopup =  WA.ui.openPopup("popUpPortal","Auch im Arbeitsalltag sind unsere Umgebung als virtuelles Büro nutzbar!\n\nSo bringen wir Teamgefühl, Austausch und spontane Gespräche zur Abstimmung geht aber verloren.\n Wir ändern das und bringen das Bürofeeling ins Homeoffice",[
        {
            label: "OK",
            callback: (popup => {
                closePopUp();
            })
        },
		{
			label: "Mehr",
			className:"primary",
			callback: (popup => {
				WA.nav.openTab(urlDBPlanet);
				isCoWebSiteOpened = true;
				closePopUp();
				})
		}
	]);
})

WA.room.onLeaveZone("portal_program", () =>{
	closePopUp();
	if (isCoWebSiteOpened) {
		WA.nav.closeCoWebSite();
		isCoWebSiteOpened = false;
    }
})

WA.room.onEnterZone("schalter2_zone", () => {
	currentPopup =  WA.ui.openPopup("popUpLernwelt","DB Lernwelt Tab öffnen?",[
    {
		label: "OK",
		className:"primary",
		callback: (popup => {
			WA.nav.openTab("https://dblernwelt.service.deutschebahn.com/mod/scorm/view.php?id=11401");
			isCoWebSiteOpened = true;
			closePopUp();
			})
		}]);
})

WA.room.onLeaveZone("schalter2_zone", () =>{
	closePopUp();
	if (isCoWebSiteOpened) {
		WA.nav.closeCoWebSite();
		isCoWebSiteOpened = false;
    }
})


WA.room.onEnterZone("reise1_zone", () => {
	
	
		currentPopup = WA.ui.openPopup("popUpReise1", WA.state.schalter1_popupText, [
			{
				label: WA.state.button_schalter1_1,
				callback: (popup => {
					if(WA.state.schalter1_1_iframe){
						WA.nav.openCoWebSite(WA.state.program_schalter1_1);
					}else{
					WA.nav.openTab(WA.state.program_schalter1_1);
					}
				})
			},
			{
				label: WA.state.button_schalter1_2,
				callback: (popup => {
					if(WA.state.schalter1_2_iframe){
						WA.nav.openCoWebSite(WA.state.program_schalter1_2);
					}else{
					WA.nav.openTab(WA.state.program_schalter1_2);
					}
				})
			},
			{
				label: WA.state.button_schalter1_3,
				callback: (popup => {
					if(WA.state.schalter1_3_iframe){
						WA.nav.openCoWebSite(WA.state.program_schalter1_3);
					}else{
					WA.nav.openTab(WA.state.program_schalter1_3);
					}
				})
			},
			{
				label: "Schließen",
				className: "error",
				callback: (popup => {
					closePopUp();
				})
			}
		]);

	
	
});


WA.room.onLeaveZone("reise1_zone", () =>{
    closePopUp();

})

WA.room.onEnterZone("reise2_zone", () => {
	currentPopup = WA.ui.openPopup("popUpReise2", WA.state.schalter2_popupText, [
		{
			label: WA.state.button_schalter2_1,
			callback: (popup => {
				if(WA.state.schalter2_1_iframe){
					WA.nav.openCoWebSite(WA.state.program_schalter2_1);
				}else{
				WA.nav.openTab(WA.state.program_schalter2_1);
				}
			})
		},
		{
			label: WA.state.button_schalter2_2,
			callback: (popup => {
				if(WA.state.schalter2_2_iframe){
					WA.nav.openCoWebSite(WA.state.program_schalter2_2);
				}else{
				WA.nav.openTab(WA.state.program_schalter2_2);
				}
			})
		},
		{
			label: WA.state.button_schalter2_3,
			callback: (popup => {
				if(WA.state.schalter2_3_iframe){
					WA.nav.openCoWebSite(WA.state.program_schalter2_3);
				}else{
				WA.nav.openTab(WA.state.program_schalter2_3);
				}
			})
		},
		{
			label: "Schließen",
			className: "error",
			callback: (popup => {
				closePopUp();
			})
		}
	]);
});


WA.room.onLeaveZone("reise2_zone", () =>{
    closePopUp();

})

WA.room.onEnterZone("reise3_zone", () => {
	currentPopup = WA.ui.openPopup("popUpReise3", WA.state.schalter3_popupText, [
		{
			label: WA.state.button_schalter3_1,
			callback: (popup => {
				if(WA.state.schalter3_1_iframe){
					WA.nav.openCoWebSite(WA.state.program_schalter3_1);
				}else{
				WA.nav.openTab(WA.state.program_schalter3_1);
				}
			})
		},
		{
			label: WA.state.button_schalter3_2,
			callback: (popup => {
				if(WA.state.schalter3_2_iframe){
					WA.nav.openCoWebSite(WA.state.program_schalter3_2);
				}else{
				WA.nav.openTab(WA.state.program_schalter3_2);
				}
			})
		},
		{
			label: WA.state.button_schalter3_3,
			callback: (popup => {
				if(WA.state.schalter3_3_iframe){
					WA.nav.openCoWebSite(WA.state.program_schalter3_3);
				}else{
				WA.nav.openTab(WA.state.program_schalter3_3);
				}
			})
		},
		{
			label: "Schließen",
			className: "error",
			callback: (popup => {
				closePopUp();
			})
		}
	]);
});


WA.room.onLeaveZone("reise3_zone", () =>{
    closePopUp();

})
WA.room.onEnterZone("info_zone", () => {
	currentPopup = WA.ui.openPopup("popUpInfo", WA.state.info_popupText, [
        {
            label: WA.state.button_info,
            callback: (popup => {
                if(WA.state.info_iframe){
					WA.nav.openCoWebSite(WA.state.program_info);
				}else{
				WA.nav.openTab(WA.state.program_info);
				}
            })
        },
		{
            label: "Schließen",
			className: "error",
            callback: (popup => {
                closePopUp();
            })
        }
    ]);
});


WA.room.onLeaveZone("info_zone", () =>{
    closePopUp();

})
WA.room.onEnterZone("reiseSaule_zone", () => {
	currentPopup = WA.ui.openPopup("popUpReiseSaule", WA.state.popUp_saeule, [
        {
            label: WA.state.button_saeule,
            callback: (popup => {
                if(WA.state.saeule_iframe){
					WA.nav.openCoWebSite(WA.state.program_saeule);
				}else{
				WA.nav.openTab(WA.state.program_saeule);
				}
            })
        },
		{
            label: "Schließen",
			className: "error",
            callback: (popup => {
                closePopUp();
            })
        }
    ]);
});


WA.room.onLeaveZone("reiseSaule_zone", () =>{
    closePopUp();

})

WA.onInit().then(async () => {
	
    console.log("Scripting API ready")
 
        currentPopup =   WA.ui.openPopup("popUpStart","Willkommen beim Quali-Camp!\n\nDen Schulungsraum findest du links.\nDen Agilitätsraum findest du oben rechts.\nBei Fragen melde dich an der Information rechts.",[
    
        {
            label: "OK",
            callback: (popup => {
                closePopUp();
            })
        }]);

    
   
     
  
      // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
      bootstrapExtra()
        .then(() => {
          console.log("Scripting API Extra ready")
		 
        })
        .catch(e => console.error(e))
    })
    .catch(e => console.error(e))