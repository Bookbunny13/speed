//create input field required km/h
//below 80km/h
//if a above 80km/h say that u r overspeeding

function checkspeed(){
    let speed_limit = 80
    let response = document.getElementsByClassName("response")[0]
    let input_speed = document.getElementsByClassName("speed_limit")[0].value
    input_speed = Number(input_speed)

    if(input_speed<=speed_limit){
        response.textContent = "you can continue driving "
        response.style.color = "green"
    } else{
        response.textContent = "you will have to stop because you are overspeeding"

        response.style.color = "red"
    }
}