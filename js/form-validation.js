$(document).ready(function(){

    $("form[name='contact-form']").validate({
        rules:{
            name:"required",
            email:{required:true,email:true},
            phone:{required:true, minlength:10, digits:true},
            
        },
        messages:{
            name:"Este campo es requerido.",
            email:"Debes ingresar un correo válido.",
            phone: "Ingresa un teléfono válido."
        },
        submitHandler:function(form){
            console.log(form)
            $.ajax({
                type:"POST",
                url:"https://hooks.zapier.com/hooks/catch/2364137/o5locdf/",
                data: $(form).serialize(),
                beforeSend:function(){
                    Swal.fire({
                        title: '<h1>Espera...</h1>',
                        html: '<p>Estamos recibiendo sus datos.</p>',
                        showConfirmButton:false
                      })
                },
                success:function(){
                    console.log('success');
                    window.dataLayer = window.dataLayer || [];
                    window.dataLayer.push({
                        'event': 'contactoEnviado'
                    });
                    Swal.fire({
                        title: '<h1>¡Gracias, recibimos su solicitud con éxito!</h1>',
                        html: '<p>En breve un asesor se pondrá en contacto con usted</p>'+'<p></p>',
                        icon: "success",
                        confirmButtonText: 'Aceptar'
                      })
                      $(form)[0].reset();
                },
                error:function(){
                    Swal.fire({
                        title: '<h1>¡Algo salió mal!</h1>',
                        html: '<p>Error del servidor</p>',
                        icon: "error",
                        confirmButtonText: 'Reintentar'
                      })
                }
            });
            return false;
        }
    })
})