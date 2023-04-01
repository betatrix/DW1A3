const $checkbox = document.querySelector('#checkbox');


function modifyImage(){
    if($checkbox.checked == true){
        document.getElementById("image").src="images/gato-escuro.jpg"
    }
    else{
        document.getElementById("image").src="images/gato-claro.jpg"
    }
}

$checkbox.addEventListener("change", modifyImage);