/**
 * Notification that the UI is about to transition to a new screen.
 * Perform custom prescreen-transition logic here.
 * @param {String} currentScreenId 
 * @param {String} targetScreenId 
 * @returns {boolean} true to continue transtion; false to halt transition
 */

url = "http://192.168.1.20:8080/";
videourl = "http://192.168.1.20:8081/";
video = 0;
Play = 0;
var myVar;
var myTurb;
var Lang = 1;


phoneui.prePageTransition = function(currentScreenId, targetScreenId) {
  // add custom pre-transition code here
  // return false to terminate transition
  return true;
}

/**
 * Notification that the UI has transitioned to a new screen.
 * 
 * @param {String} newScreenId 
 */
phoneui.postPageTransition = function(newScreenId) {
  
}

/**
 * Notification that the page's HTML/CSS/JS is about to be loaded.
 * Perform custom logic here, f.e. you can cancel request to the server.
 * @param {String} targetScreenId 
 * @returns {boolean} true to continue loading; false to halt loading
 */
phoneui.prePageLoad = function(targetScreenId) {
  // add custom pre-load code here
  // return false to terminate page loading, this cancels transition to page as well
  return true;
}

/**
 * Notification that device orientation has changed. 
 * 
 * @param {String} newOrientation 
 */
phoneui.postOrientationChange = function(newOrientation) {
  
}

/**
 * Called when document is loaded.
 */
phoneui.documentReadyHandler = function() {
	$.get(url + "?Stop=0", function(data,status){});
	$('#m1-AP1000_small-AP1000').css({'background-image': 'linear-gradient(to top, #ff8000 0%,  #ff8000 49.9%, #F68B20 50%, #F9AF64 100%)'}); //ORANGE
	$('#m1-AP1000_small-NuclearIsland').css({'background-image': 'linear-gradient(to top, #804000 0%,  #804000 49.9%, #924B05 50%, #D76F07 100%)'}); //BROWN
	$('#m1-AP1000_small-Systems').css({'background-image': 'linear-gradient(to top, #804000 0%,  #804000 49.9%, #924B05 50%, #D76F07 100%)'}); //BROWN
	$('#m1-AP1000_small-Equipments').css({'background-image': 'linear-gradient(to top, #804000 0%,  #804000 49.9%, #924B05 50%, #D76F07 100%)'}); //BROWN
	$('#m1-AP1000_small-AccidentMitigation').css({'background-image': 'linear-gradient(to top, #804000 0%,  #804000 49.9%, #924B05 50%, #D76F07 100%)'}); //BROWN
	$('#m1-AP1000_small-Abbreviations').css({'background-image': 'linear-gradient(to top, #804000 0%,  #804000 49.9%, #924B05 50%, #D76F07 100%)'}); //BROWN
	allOff();
	document.addEventListener("pause", onPause, false);
	document.addEventListener("resign", onResign, false);
	
}

function onResign() {
    // Handle the pause event
	$.get(url + "?Stop=0", function(data,status){});

}


function onPause() {
    // Handle the pause event
	$.get(url + "?Stop=0", function(data,status){});

}

function allOff()
{
	$('#m1-AP1000_small-SteelContainmentVessel').css({'background-image': 'linear-gradient(to top, #004000 0%,  #004000 49.9%, #035403 50%, #059905 100%)'}); //DARK GREEN
	$('#m1-AP1000_small-ShieldBuilding').css({'background-image': 'linear-gradient(to top, #004000 0%,  #004000 49.9%, #035403 50%, #059905 100%)'}); //DARK GREEN
	$('#m1-AP1000_small-AuxiliaryBuilding').css({'background-image': 'linear-gradient(to top, #004000 0%,  #004000 49.9%, #035403 50%, #059905 100%)'}); //DARK GREEN
	$('#m1-AP1000_small-SpentFuelPool').css({'background-image': 'linear-gradient(to top, #004000 0%,  #004000 49.9%, #035403 50%, #059905 100%)'}); //DARK GREEN
	$('#m1-AP1000_small-ControlRoom').css({'background-image': 'linear-gradient(to top, #004000 0%,  #004000 49.9%, #035403 50%, #059905 100%)'}); //DARK GREEN
	$('#m1-AP1000_small-TurbineBuilding').css({'background-image': 'linear-gradient(to top, #004000 0%,  #004000 49.9%, #035403 50%, #059905 100%)'}); //DARK GREEN
	$('#m1-AP1000_small-PrimaryLoop').css({'background-image': 'linear-gradient(to top, #004000 0%,  #004000 49.9%, #035403 50%, #059905 100%)'}); //DARK GREEN
	$('#m1-AP1000_small-SecondarySteamLoop').css({'background-image': 'linear-gradient(to top, #004000 0%,  #004000 49.9%, #035403 50%, #059905 100%)'}); //DARK GREEN
	$('#m1-AP1000_small-SecondaryFeedwaterLoop').css({'background-image': 'linear-gradient(to top, #004000 0%,  #004000 49.9%, #035403 50%, #059905 100%)'}); //DARK GREEN
	$('#m1-AP1000_small-PCCWDeliveryPipe').css({'background-image': 'linear-gradient(to top, #004000 0%,  #004000 49.9%, #035403 50%, #059905 100%)'}); //DARK GREEN
	$('#m1-AP1000_small-ReactorPressureVessel').css({'background-image': 'linear-gradient(to top, #004000 0%,  #004000 49.9%, #035403 50%, #059905 100%)'}); //DARK GREEN
	$('#m1-AP1000_small-ReactorCoolantPumps').css({'background-image': 'linear-gradient(to top, #004000 0%,  #004000 49.9%, #035403 50%, #059905 100%)'}); //DARK GREEN
	$('#m1-AP1000_small-SteamGenerator').css({'background-image': 'linear-gradient(to top, #004000 0%,  #004000 49.9%, #035403 50%, #059905 100%)'}); //DARK GREEN
	$('#m1-AP1000_small-Pressurizer').css({'background-image': 'linear-gradient(to top, #004000 0%,  #004000 49.9%, #035403 50%, #059905 100%)'}); //DARK GREEN
	$('#m1-AP1000_small-PassiveResidualHeatExchanger').css({'background-image': 'linear-gradient(to top, #004000 0%,  #004000 49.9%, #035403 50%, #059905 100%)'}); //DARK GREEN
	$('#m1-AP1000_small-IRWST').css({'background-image': 'linear-gradient(to top, #004000 0%,  #004000 49.9%, #035403 50%, #059905 100%)'}); //DARK GREEN
	$('#m1-AP1000_small-CoreMakeupTanks').css({'background-image': 'linear-gradient(to top, #004000 0%,  #004000 49.9%, #035403 50%, #059905 100%)'}); //DARK GREEN
	$('#m1-AP1000_small-Accumulators').css({'background-image': 'linear-gradient(to top, #004000 0%,  #004000 49.9%, #035403 50%, #059905 100%)'}); //DARK GREEN
	$('#m1-AP1000_small-Spargers').css({'background-image': 'linear-gradient(to top, #004000 0%,  #004000 49.9%, #035403 50%, #059905 100%)'}); //DARK GREEN
	$('#m1-AP1000_small-PCCWStorageTank').css({'background-image': 'linear-gradient(to top, #004000 0%,  #004000 49.9%, #035403 50%, #059905 100%)'}); //DARK GREEN
	$('#m1-AP1000_small-AirInletLouvers').css({'background-image': 'linear-gradient(to top, #004000 0%,  #004000 49.9%, #035403 50%, #059905 100%)'}); //DARK GREEN
	$('#m1-AP1000_small-Baffels').css({'background-image': 'linear-gradient(to top, #004000 0%,  #004000 49.9%, #035403 50%, #059905 100%)'}); //DARK GREEN
	$('#m1-AP1000_small-HPTurbine').css({'background-image': 'linear-gradient(to top, #004000 0%,  #004000 49.9%, #035403 50%, #059905 100%)'}); //DARK GREEN
	$('#m1-AP1000_small-MSR').css({'background-image': 'linear-gradient(to top, #004000 0%,  #004000 49.9%, #035403 50%, #059905 100%)'}); //DARK GREEN
	$('#m1-AP1000_small-LPTurbine').css({'background-image': 'linear-gradient(to top, #004000 0%,  #004000 49.9%, #035403 50%, #059905 100%)'}); //DARK GREEN
	$('#m1-AP1000_small-Generator').css({'background-image': 'linear-gradient(to top, #004000 0%,  #004000 49.9%, #035403 50%, #059905 100%)'}); //DARK GREEN
	$('#m1-AP1000_small-Condenser').css({'background-image': 'linear-gradient(to top, #004000 0%,  #004000 49.9%, #035403 50%, #059905 100%)'}); //DARK GREEN
	$('#m1-AP1000_small-Deareator').css({'background-image': 'linear-gradient(to top, #004000 0%,  #004000 49.9%, #035403 50%, #059905 100%)'}); //DARK GREEN

}

function allOn()
{
	$('#m1-AP1000_small-SteelContainmentVessel').css({'background-image': 'linear-gradient(to top, #47f847 0%, #08f008 49.9%, #00ff00 50%, #00ff00 100%)'}); //LIGHT GREEN
	$('#m1-AP1000_small-ShieldBuilding').css({'background-image': 'linear-gradient(to top, #47f847 0%, #08f008 49.9%, #00ff00 50%, #00ff00 100%)'}); //LIGHT GREEN
	$('#m1-AP1000_small-AuxiliaryBuilding').css({'background-image': 'linear-gradient(to top, #47f847 0%, #08f008 49.9%, #00ff00 50%, #00ff00 100%)'}); //LIGHT GREEN
	$('#m1-AP1000_small-SpentFuelPool').css({'background-image': 'linear-gradient(to top, #47f847 0%, #08f008 49.9%, #00ff00 50%, #00ff00 100%)'}); //LIGHT GREEN
	$('#m1-AP1000_small-ControlRoom').css({'background-image': 'linear-gradient(to top, #47f847 0%, #08f008 49.9%, #00ff00 50%, #00ff00 100%)'}); //LIGHT GREEN
	$('#m1-AP1000_small-TurbineBuilding').css({'background-image': 'linear-gradient(to top, #47f847 0%, #08f008 49.9%, #00ff00 50%, #00ff00 100%)'}); //LIGHT GREEN
	$('#m1-AP1000_small-PrimaryLoop').css({'background-image': 'linear-gradient(to top, #47f847 0%, #08f008 49.9%, #00ff00 50%, #00ff00 100%)'}); //LIGHT GREEN
	$('#m1-AP1000_small-SecondarySteamLoop').css({'background-image': 'linear-gradient(to top, #47f847 0%, #08f008 49.9%, #00ff00 50%, #00ff00 100%)'}); //LIGHT GREEN
	$('#m1-AP1000_small-SecondaryFeedwaterLoop').css({'background-image': 'linear-gradient(to top, #47f847 0%, #08f008 49.9%, #00ff00 50%, #00ff00 100%)'}); //LIGHT GREEN
	$('#m1-AP1000_small-PCCWDeliveryPipe').css({'background-image': 'linear-gradient(to top, #47f847 0%, #08f008 49.9%, #00ff00 50%, #00ff00 100%)'}); //LIGHT GREEN
	$('#m1-AP1000_small-ReactorPressureVessel').css({'background-image': 'linear-gradient(to top, #47f847 0%, #08f008 49.9%, #00ff00 50%, #00ff00 100%)'}); //LIGHT GREEN
	$('#m1-AP1000_small-ReactorCoolantPumps').css({'background-image': 'linear-gradient(to top, #47f847 0%, #08f008 49.9%, #00ff00 50%, #00ff00 100%)'}); //LIGHT GREEN
	$('#m1-AP1000_small-SteamGenerator').css({'background-image': 'linear-gradient(to top, #47f847 0%, #08f008 49.9%, #00ff00 50%, #00ff00 100%)'}); //LIGHT GREEN
	$('#m1-AP1000_small-Pressurizer').css({'background-image': 'linear-gradient(to top, #47f847 0%, #08f008 49.9%, #00ff00 50%, #00ff00 100%)'}); //LIGHT GREEN
	$('#m1-AP1000_small-PassiveResidualHeatExchanger').css({'background-image': 'linear-gradient(to top, #47f847 0%, #08f008 49.9%, #00ff00 50%, #00ff00 100%)'}); //LIGHT GREEN
	$('#m1-AP1000_small-IRWST').css({'background-image': 'linear-gradient(to top, #47f847 0%, #08f008 49.9%, #00ff00 50%, #00ff00 100%)'}); //LIGHT GREEN
	$('#m1-AP1000_small-CoreMakeupTanks').css({'background-image': 'linear-gradient(to top, #47f847 0%, #08f008 49.9%, #00ff00 50%, #00ff00 100%)'}); //LIGHT GREEN
	$('#m1-AP1000_small-Accumulators').css({'background-image': 'linear-gradient(to top, #47f847 0%, #08f008 49.9%, #00ff00 50%, #00ff00 100%)'}); //LIGHT GREEN
	$('#m1-AP1000_small-Spargers').css({'background-image': 'linear-gradient(to top, #47f847 0%, #08f008 49.9%, #00ff00 50%, #00ff00 100%)'}); //LIGHT GREEN
	$('#m1-AP1000_small-PCCWStorageTank').css({'background-image': 'linear-gradient(to top, #47f847 0%, #08f008 49.9%, #00ff00 50%, #00ff00 100%)'}); //LIGHT GREEN
	$('#m1-AP1000_small-AirInletLouvers').css({'background-image': 'linear-gradient(to top, #47f847 0%, #08f008 49.9%, #00ff00 50%, #00ff00 100%)'}); //LIGHT GREEN
	$('#m1-AP1000_small-Baffels').css({'background-image': 'linear-gradient(to top, #47f847 0%, #08f008 49.9%, #00ff00 50%, #00ff00 100%)'}); //LIGHT GREEN
	$('#m1-AP1000_small-HPTurbine').css({'background-image': 'linear-gradient(to top, #47f847 0%, #08f008 49.9%, #00ff00 50%, #00ff00 100%)'}); //LIGHT GREEN
	$('#m1-AP1000_small-MSR').css({'background-image': 'linear-gradient(to top, #47f847 0%, #08f008 49.9%, #00ff00 50%, #00ff00 100%)'}); //LIGHT GREEN
	$('#m1-AP1000_small-LPTurbine').css({'background-image': 'linear-gradient(to top, #47f847 0%, #08f008 49.9%, #00ff00 50%, #00ff00 100%)'}); //LIGHT GREEN
	$('#m1-AP1000_small-Generator').css({'background-image': 'linear-gradient(to top, #47f847 0%, #08f008 49.9%, #00ff00 50%, #00ff00 100%)'}); //LIGHT GREEN
	$('#m1-AP1000_small-Condenser').css({'background-image': 'linear-gradient(to top, #47f847 0%, #08f008 49.9%, #00ff00 50%, #00ff00 100%)'}); //LIGHT GREEN
	$('#m1-AP1000_small-Deareator').css({'background-image': 'linear-gradient(to top, #47f847 0%, #08f008 49.9%, #00ff00 50%, #00ff00 100%)'}); //LIGHT GREEN
	
}
