
	function validateForm(){
   var nombre = document.getElementById("name").value;
        if(nombre == ""|| nombre == null){
            var hermano = document.getElementById("name");
            var texto = document.createTextNode("Digite el usuario");
            mensaje(hermano,texto);
            return false ;
        }

        if (!(/^[A-Z][a-zA-Z]*$/g.test (document.getElementById('name').value))){
			var hermano = document.getElementById("name");
            var texto = document.createTextNode("Caracteres invalidos o la primera letra  no es mayúscula");
            mensaje(hermano,texto);
		}
	// apellido
	var apellido = document.getElementById("lastname").value;
	if (apellido == ""|| apellido == null){
		var hermano = document.getElementById("lastame");
        var texto = document.createTextNode("Digite su apellido");
        mensaje(hermano,texto);
        return false ;
	}

	if (!(/^[A-Z][a-zA-Z]*$/g.test(document.getElementById('lastname').value))){
		var hermano = document.getElementById("lastname");
        var texto = document.createTextNode("Caracteres invalidos o la primera letra  no es mayúscula");
        mensaje(hermano,texto);
	}	
	//email
	   var email = document.getElementById("input-email").value;
        var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if ( !expr.test(email) ){
        var hermano = document.getElementById("input-email");
        var texto = document.createTextNode("Error: La dirección de correo " + email + " es incorrecta.");
        mensaje(hermano,texto);
    }
    //contraseña
    var contra = document.getElementById("input-password").value;
        if(contra.length < 6 ){
            var hermano = document.getElementById("input-password");
            var texto = document.createTextNode("Contraseña al menos de 6 caracteres");
            mensaje(hermano,texto);
            return false ;

        }else if(contra == "123456" || contra =="password" || contra == "098754"){
            var hermano = document.getElementById("input-password");
            var texto = document.createTextNode("Por favor escriba otra contraseña");
            mensaje(hermano,texto);
            return false ;
        }
    //lista bicis
    if (document.getElementsByTagName("select")[0].value == 0){
        var hermano = document.getElementsByTagName("select")[0];
        var texto = document.createTextNode("Selecciona tu tipo de bici");
        mensaje(hermano,texto);
    }

}
function mensaje (hermano, texto){
    var mensaje = document.createElement("span");
    var padreMensaje = hermano.parentNode;
    padreMensaje.insertBefore(mensaje,hermano);
    mensaje.appendChild(texto);
    return mensaje;
}
