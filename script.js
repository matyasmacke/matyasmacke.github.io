let announceType = "";
let trainType = "";
let trainNumber = "";
let trainLine = "";
let trainOperator = "";
let trainDestination = "";
let trainDeparture = "";
let trainTrack = "";
let trainPlatform = "";
let trainDelay = "";
let delayReason = "";
let cancelReason = "";
let platformType = "";
let getGong = new Audio("audio/gong.mp3");
let getEndGong = new Audio("audio/endgong.mp3");

fetch('audioFiles.json')
    .then(response => response.json())
    .then(data => {
        for (var i = 0; i < data.audioFiles.length; i++) {
            preloadAudio(data.audioFiles[i]);
        }
    });


function preloadAudio(url) {
    var audio = new Audio();
    audio.src = url;
    audio.preload = "auto";
}


function setAnnounceType (anntype) {
    announceType = anntype;
    document.getElementById("announcement-type-buttons").style.display = "none";
    document.getElementById("train-type-buttons").style.display = "block";
}

function setTrainType (type) {
    trainType = type;
    document.getElementById("train-type-buttons").style.display = "none";
    document.getElementById("train-number-buttons").style.display = "block";
}

function setTrainNumber (number) {
    trainNumber = number;
    document.getElementById("train-number-buttons").style.display = "none";
    document.getElementById("train-line-buttons").style.display = "block";
    
}

function setTrainLine (line) {
    trainLine = line;
    document.getElementById("train-line-buttons").style.display = "none";
    document.getElementById("train-operator-buttons").style.display = "block";
}

function setTrainOperator (operator) {
    trainOperator = operator;
    document.getElementById("train-operator-buttons").style.display = "none";
    document.getElementById("train-destination-buttons").style.display = "block";
}

function setTrainDestination (destination) {
    trainDestination = destination;
    document.getElementById("train-destination-buttons").style.display = "none";
    document.getElementById("train-departure-buttons").style.display = "block";
}

function setTrainDeparture (departure) {
    trainDeparture = departure;
    document.getElementById("train-departure-buttons").style.display = "none";
    if (announceType == "zpozdeni") {
        document.getElementById("train-delay-buttons").style.display = "block";
    } 
    
    if (announceType == "odjede") {
        document.getElementById("train-track-buttons").style.display = "block";
    } 

    if (announceType == "pristaven") {
        document.getElementById("train-track-buttons").style.display = "block";
    } 

    if (announceType == "prijede") {
        document.getElementById("train-track-buttons").style.display = "block";
    } 
    
    if (announceType == "nejede") {
        document.getElementById("train-cancel_reason-buttons").style.display = "block";
    }
}

function setTrainDelay (delay) {
    trainDelay = delay;
    document.getElementById("train-delay-buttons").style.display = "none";
    document.getElementById("train-delay_reason-buttons").style.display = "block";
}

function setTrainDelayReason (reason) {
    delayReason = reason;
    document.getElementById("train-delay_reason-buttons").style.display = "none";
    document.getElementById("announce-button").style.display = "block";
}

function setTrainTrack (track) {
    trainTrack = track;
    document.getElementById("train-track-buttons").style.display = "none";
    document.getElementById("train-platform-buttons").style.display = "block";
}

function setTrainPlatform (platform) {
    platformType = platform;
    document.getElementById("train-platform-buttons").style.display = "none";
    document.getElementById("announce-button").style.display = "block";
}

function setCancelReason (cancel) {
    cancelReason = cancel;
    document.getElementById("train-cancel_reason-buttons").style.display = "none";
    document.getElementById("announce-button").style.display = "block";
}

function playAnnouncement() {
    getGong.play();

    if (announceType == "odjede") {
        getGong.addEventListener('ended', function () {
            let getTrainType = new Audio(`audio/${trainType}.mp3`)
            getTrainType.play(); 

            getTrainType.addEventListener('ended', function() {
                let getNumber = new Audio(`audio/cislo.mp3`)
                getNumber.play();

                getNumber.addEventListener('ended', function() {
                    let getTrainNumber = new Audio(`audio/${trainNumber}.mp3`) 
                    getTrainNumber.play();

                    getTrainNumber.addEventListener('ended', function() {
                        let getLine = new Audio(`audio/linky.mp3`)
                        getLine.play();

                        getLine.addEventListener('ended', function() {
                            let getTrainLine = new Audio(`audio/${trainLine}.mp3`)
                            getTrainLine.play();

                            getTrainLine.addEventListener('ended', function() {
                                let getTrainOperator = new Audio(`audio/${trainOperator}.mp3`)
                                getTrainOperator.play();

                                getTrainOperator.addEventListener('ended', function() {
                                    let getDestination = new Audio(`audio/smer.mp3`)
                                    getDestination.play();

                                    getDestination.addEventListener('ended', function() {
                                        let getTrainDestination = new Audio(`audio/${trainDestination}.mp3`)
                                        getTrainDestination.play();

                                        getTrainDestination.addEventListener('ended', function() {
                                            let getDeparture = new Audio(`audio/sodjezdem.mp3`)
                                            getDeparture.play();

                                            getDeparture.addEventListener('ended', function() {
                                                let getTrainDeparture = new Audio(`audio/${trainDeparture}.mp3`)
                                                getTrainDeparture.play();
                                                
                                                getTrainDeparture.addEventListener('ended', function() {
                                                    let getPlatform = new Audio(`audio/odjede_nastupiste.mp3`)
                                                    getPlatform.play();

                                                    getPlatform.addEventListener('ended', function() {
                                                        let getTrainTrack = new Audio(`audio/nastupiste/${trainTrack}_nastupiste.mp3`)
                                                        getTrainTrack.play()
                                                        
                                                        getTrainTrack.addEventListener('ended', function() {
                                                            let getPlatformType = new Audio(`audio/nastupiste/${platformType}.mp3`)
                                                            getPlatformType.play()
        
                                                            getPlatformType.addEventListener('ended', function() {
                                                                getEndGong.play();

                                                                getEndGong.addEventListener('ended', function() {
                                                                    location.reload();
                                                                })
                                                                
                                                            })
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    } else if (announceType == "zpozdeni") {
        getGong.addEventListener('ended', function () {
            let getAnnouncementType = new Audio(`audio/${announceType}.mp3`)
            getAnnouncementType.play();

            getAnnouncementType.addEventListener('ended', function () {
                let getTrainType = new Audio(`audio/${trainType}.mp3`)
                getTrainType.play(); 

                getTrainType.addEventListener('ended', function () {
                    let getNumber = new Audio(`audio/cislo.mp3`)
                    getNumber.play();

                    getNumber.addEventListener('ended', function() {
                        let getTrainNumber = new Audio(`audio/${trainNumber}.mp3`)
                        getTrainNumber.play();

                        getTrainNumber.addEventListener('ended', function() {
                            let getLine = new Audio(`audio/linky.mp3`)
                            getLine.play()

                            getLine.addEventListener('ended', function() {
                                let getTrainLine = new Audio(`audio/${trainLine}.mp3`)
                                getTrainLine.play();

                                getTrainLine.addEventListener('ended', function() {
                                    let getTrainOperator = new Audio(`audio/${trainOperator}.mp3`)
                                    getTrainOperator.play();

                                    getTrainOperator.addEventListener('ended', function () {
                                        let getDestination = new Audio(`audio/smer.mp3`)
                                        getDestination.play();

                                        getDestination.addEventListener('ended', function() {
                                            let getTrainDestination = new Audio(`audio/${trainDestination}.mp3`)
                                            getTrainDestination.play();

                                            getTrainDestination.addEventListener('ended', function () {
                                                let getDeparture = new Audio(`audio/sodjezdem.mp3`)
                                                getDeparture.play();

                                                getDeparture.addEventListener('ended', function() {
                                                    let getTrainDeparture = new Audio(`audio/${trainDeparture}.mp3`)
                                                    getTrainDeparture.play();

                                                    getTrainDeparture.addEventListener('ended', function () {
                                                        let getTrainDelay = new Audio(`audio/zpozdeni/${trainDelay}_zpozdeni.mp3`)
                                                        getTrainDelay.play();

                                                        getTrainDelay.addEventListener('ended', function() {
                                                            let getDelay = new Audio(`audio/zpozdeni/dobazpozdeni.mp3`)
                                                            getDelay.play();

                                                            getDelay.addEventListener('ended', function() {
                                                                let getDelayAnnouncement = new Audio(`audio/zpozdeni/opozden.mp3`)
                                                                getDelayAnnouncement.play();

                                                                getDelayAnnouncement.addEventListener('ended', function() {
                                                                    let getDelayReason = new Audio(`audio/zpozdeni/${delayReason}.mp3`)
                                                                    getDelayReason.play();

                                                                    getDelayReason.addEventListener('ended', function() {
                                                                        if (delayReason == "mimoradnaudalost") {
                                                                            let getInfoOperator = new Audio(`audio/informacedopravce.mp3`)
                                                                            getInfoOperator.play()

                                                                            getInfoOperator.addEventListener('ended', function() {
                                                                                getEndGong.play();
                                                                        
                                                                                getEndGong.addEventListener('ended', function() {
                                                                                    location.reload();
                                                                                })
                                                                            })
                                                                        } else if (delayReason == "lopatkanauhli" || "provozniduvod" || "technickazavada" || "vyluka") {
                                        
                                                                            getEndGong.play();
                                                                    
                                                                            getEndGong.addEventListener('ended', function() {
                                                                                location.reload();
                                                                            })
                                                                        }
                                                                    })
                                                                    
                                                                })
                                                            })
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    } else if (announceType == "pristaven") {
        getGong.addEventListener('ended', function () {
            let getTrainType = new Audio(`audio/${trainType}.mp3`)
            getTrainType.play(); 

            getTrainType.addEventListener('ended', function() {
                let getNumber = new Audio(`audio/cislo.mp3`)
                getNumber.play();

                getNumber.addEventListener('ended', function() {
                    let getTrainNumber = new Audio(`audio/${trainNumber}.mp3`) 
                    getTrainNumber.play();

                    getTrainNumber.addEventListener('ended', function() {
                        let getLine = new Audio(`audio/linky.mp3`)
                        getLine.play();

                        getLine.addEventListener('ended', function() {
                            let getTrainLine = new Audio(`audio/${trainLine}.mp3`)
                            getTrainLine.play();

                            getTrainLine.addEventListener('ended', function() {
                                let getTrainOperator = new Audio(`audio/${trainOperator}.mp3`)
                                getTrainOperator.play();

                                getTrainOperator.addEventListener('ended', function() {
                                    let getDestination = new Audio(`audio/smer.mp3`)
                                    getDestination.play();

                                    getDestination.addEventListener('ended', function() {
                                        let getTrainDestination = new Audio(`audio/${trainDestination}.mp3`)
                                        getTrainDestination.play();

                                        getTrainDestination.addEventListener('ended', function() {
                                            let getDeparture = new Audio(`audio/sodjezdem.mp3`)
                                            getDeparture.play();

                                            getDeparture.addEventListener('ended', function() {
                                                let getTrainDeparture = new Audio(`audio/${trainDeparture}.mp3`)
                                                getTrainDeparture.play();
                                                
                                                getTrainDeparture.addEventListener('ended', function() {
                                                    let getPlatform = new Audio(`audio/pristaven_nastupiste.mp3`)
                                                    getPlatform.play();

                                                    getPlatform.addEventListener('ended', function() {
                                                        let getTrainTrack = new Audio(`audio/nastupiste/${trainTrack}_nastupiste.mp3`)
                                                        getTrainTrack.play()
                                                        
                                                        getTrainTrack.addEventListener('ended', function() {
                                                            let getPlatformType = new Audio(`audio/nastupiste/${platformType}.mp3`)
                                                            getPlatformType.play()
        
                                                            getPlatformType.addEventListener('ended', function() {
                                                                getEndGong.play();

                                                                getEndGong.addEventListener('ended', function() {
                                                                    location.reload();
                                                                })
                                                                
                                                            })
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    } else if (announceType == "prijede") {
        getGong.addEventListener('ended', function () {
            let getTrainType = new Audio(`audio/${trainType}.mp3`)
            getTrainType.play(); 

            getTrainType.addEventListener('ended', function() {
                let getNumber = new Audio(`audio/cislo.mp3`)
                getNumber.play();

                getNumber.addEventListener('ended', function() {
                    let getTrainNumber = new Audio(`audio/${trainNumber}.mp3`) 
                    getTrainNumber.play();

                    getTrainNumber.addEventListener('ended', function() {
                        let getLine = new Audio(`audio/linky.mp3`)
                        getLine.play();

                        getLine.addEventListener('ended', function() {
                            let getTrainLine = new Audio(`audio/${trainLine}.mp3`)
                            getTrainLine.play();

                            getTrainLine.addEventListener('ended', function() {
                                let getTrainOperator = new Audio(`audio/${trainOperator}.mp3`)
                                getTrainOperator.play();

                                getTrainOperator.addEventListener('ended', function() {
                                    let getDestination = new Audio(`audio/smer.mp3`)
                                    getDestination.play();

                                    getDestination.addEventListener('ended', function() {
                                        let getTrainDestination = new Audio(`audio/${trainDestination}.mp3`)
                                        getTrainDestination.play();

                                        getTrainDestination.addEventListener('ended', function() {
                                            let getDeparture = new Audio(`audio/sodjezdem.mp3`)
                                            getDeparture.play();

                                            getDeparture.addEventListener('ended', function() {
                                                let getTrainDeparture = new Audio(`audio/${trainDeparture}.mp3`)
                                                getTrainDeparture.play();
                                                
                                                getTrainDeparture.addEventListener('ended', function() {
                                                    let getPlatform = new Audio(`audio/prijede_nastupiste.mp3`)
                                                    getPlatform.play();

                                                    getPlatform.addEventListener('ended', function() {
                                                        let getTrainTrack = new Audio(`audio/nastupiste/${trainTrack}_nastupiste.mp3`)
                                                        getTrainTrack.play()
                                                        
                                                        getTrainTrack.addEventListener('ended', function() {
                                                            let getPlatformType = new Audio(`audio/nastupiste/${platformType}.mp3`)
                                                            getPlatformType.play()
        
                                                            getPlatformType.addEventListener('ended', function() {
                                                                getEndGong.play();

                                                                getEndGong.addEventListener('ended', function() {
                                                                    location.reload();
                                                                })
                                                                
                                                            })
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    } else if (announceType == "nejede") {
        getGong.addEventListener('ended', function () {
            let getInfo = new Audio(`audio/pozor.mp3`)
            getInfo.play();

            getInfo.addEventListener('ended', function() {
                let getTrainType = new Audio(`audio/${trainType}.mp3`)
                getTrainType.play(); 

                getTrainType.addEventListener('ended', function() {
                    let getNumber = new Audio(`audio/cislo.mp3`)
                    getNumber.play();

                    getNumber.addEventListener('ended', function() {
                        let getTrainNumber = new Audio(`audio/${trainNumber}.mp3`) 
                        getTrainNumber.play();

                        getTrainNumber.addEventListener('ended', function() {
                            let getLine = new Audio(`audio/linky.mp3`)
                            getLine.play();

                            getLine.addEventListener('ended', function() {
                                let getTrainLine = new Audio(`audio/${trainLine}.mp3`)
                                getTrainLine.play();

                                getTrainLine.addEventListener('ended', function() {
                                    let getTrainOperator = new Audio(`audio/${trainOperator}.mp3`)
                                    getTrainOperator.play();

                                    getTrainOperator.addEventListener('ended', function() {
                                        let getDestination = new Audio(`audio/smer.mp3`)
                                        getDestination.play();

                                        getDestination.addEventListener('ended', function() {
                                            let getTrainDestination = new Audio(`audio/${trainDestination}.mp3`)
                                            getTrainDestination.play();

                                            getTrainDestination.addEventListener('ended', function() {
                                                let getDeparture = new Audio(`audio/sodjezdem.mp3`)
                                                getDeparture.play();

                                                getDeparture.addEventListener('ended', function() {
                                                    let getTrainDeparture = new Audio(`audio/${trainDeparture}.mp3`)
                                                    getTrainDeparture.play();
                                                    
                                                    getTrainDeparture.addEventListener('ended', function() {
                                                        let getCanceled = new Audio(`audio/${cancelReason}_nejede.mp3`)
                                                        getCanceled.play();

                                                        getCanceled.addEventListener('ended', function() {
                                                            let getInfoOperator = new Audio(`audio/informacedopravce.mp3`)
                                                            getInfoOperator.play();

                                                            getInfoOperator.addEventListener('ended', function() {
                                                                getEndGong.play();
                                                            
                                                                getEndGong.addEventListener('ended', function() {
                                                                    location.reload(); 
                                                                })
                                                            })
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
            
        })
    }     
}