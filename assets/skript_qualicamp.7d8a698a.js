import"https://unpkg.com/@workadventure/scripting-api-extra";var a=void 0,e=!1;function o(){a!==void 0&&(a.close(),a=void 0)}var r="needHelp",p="feedback",l="DBPlanet",s="https://db-planet.deutschebahn.com/pages/telefonie/apps/content/workadventure-erste-schritte",c="https://forms.office.com/Pages/ResponsePage.aspx?id=nC2noeZJbU-a9lqvoRg7_SoZREurD2tJrJwSfyf3bX5UNEczWlNIRkJDNjNUUjZKODUyVE9aNjQ0Uy4u",t="https://db-planet.deutschebahn.com/pages/telefonie/apps/content/workadventure";WA.room.onEnterZone(r,()=>{a=WA.ui.openPopup("needHelpPopup",`Tutorial
ansehen?`,[{label:"OK",className:"primary",callback:n=>{WA.nav.openTab(s),e=!0,o()}}])});WA.room.onLeaveZone(r,()=>{o(),e&&(WA.nav.closeCoWebSite(),e=!1)});WA.room.onEnterZone(p,()=>{a=WA.ui.openPopup("feedbackPopup","M\xF6chtest du ein Feedback geben?",[{label:"Nein",className:"secondary",callback:()=>o()},{label:"Gerne",className:"primary",callback:n=>{WA.nav.openCoWebSite(c),e=!0,o()}}])});WA.room.onLeaveZone(p,()=>{o(),e&&(WA.nav.closeCoWebSite(),e=!1)});WA.room.onEnterZone(l,()=>{a=WA.ui.openPopup("DBPlanetPopup","DB Planet WorkAdventure",[{label:"OK",className:"primary",callback:n=>{WA.nav.openTab(t),e=!0,o()}}])});WA.room.onLeaveZone(l,()=>{o(),e&&(WA.nav.closeCoWebSite(),e=!1)});WA.room.onEnterZone("portal_program",()=>{a=WA.ui.openPopup("popUpPortal",`Auch im Arbeitsalltag sind unsere Umgebung als virtuelles B\xFCro nutzbar!

So bringen wir Teamgef\xFChl, Austausch und spontane Gespr\xE4che zur Abstimmung geht aber verloren.
 Wir \xE4ndern das und bringen das B\xFCrofeeling ins Homeoffice`,[{label:"OK",callback:n=>{o()}},{label:"Mehr",className:"primary",callback:n=>{WA.nav.openTab(t),e=!0,o()}}])});WA.room.onLeaveZone("portal_program",()=>{o(),e&&(WA.nav.closeCoWebSite(),e=!1)});WA.room.onEnterZone("schalter2_zone",()=>{a=WA.ui.openPopup("popUpLernwelt","DB Lernwelt Tab \xF6ffnen?",[{label:"OK",className:"primary",callback:n=>{WA.nav.openTab("https://dblernwelt.service.deutschebahn.com/mod/scorm/view.php?id=11401"),e=!0,o()}}])});WA.room.onLeaveZone("schalter2_zone",()=>{o(),e&&(WA.nav.closeCoWebSite(),e=!1)});
