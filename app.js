function elementId(params) {
    const element = document.getElementById(params)
    return element
}

function getTimes() {
    const date = new Date()
let hour = date.getHours()
let munites = date.getMinutes()
    let seconds = date.getSeconds()
    if (hour<10) {
        hour = "0" + hour
        if (munites < 10) {
            munites = "0" + munites
        }
        if (seconds < 10) {
            seconds = "0" + seconds
        }
    }


    if (hour > 12) {
        hour = hour - 12
       
    }
  


    if (hour >= 12) {
        elementId("time").innerText = "pm"   
    } else {
        elementId("time").innerText = "am"
    }
    
  
    
elementId("hour").innerText = hour + " :"
elementId("munites").innerText= munites + " :"
elementId("second").innerText = seconds
}

setInterval(getTimes,1000)



