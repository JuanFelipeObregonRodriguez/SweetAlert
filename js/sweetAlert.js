(async() => {
    const { value: pais } = await swal.fire({

        title: "bienvenido",
        text: "espero te guste mi pagina web!",
        icon: 'question',
        confirmButtonText: 'seleccionar',
        footer: '<span class="rojo">esta informacion es importante</span>',
        width: "80%",
        padding: "2rem",
        //background: "#DFF3F4",
        //grow:
        backdrop: true,
        //timer: 5000,
        //timerProgressBar: true
        //toast: true,
        position: 'center',
        //position: 'top-end',
        //position: 'bottom-end',
        allowOutsideClick: true,
        allowEscapeKey: false,
        allowEnterKey: false,
        sstopKeydownPropagation: false,
        input: 'select',
        inputPlaceholder: 'pais',
        inputValue: '',
        inputOptions: {
            mexico: 'mexico',
            colombia: 'colombia',
            argentina: 'argentina',
            canada: 'canada',

        },
        customClass: {

            //container: '',
            popup: 'popup-class',
            //header:
            //title:
            //closeButton:
            //icon:
            //image:
            //content:
            //input:
            //actions:
            //confirmButton:
            //cancelButton:
            //footer:

        },
        showConfirmButton: true,
        //confirmButtonColor:
        confirmButtonArialLabel: 'Confirmar',
        showCancelButton: true,
        cancelButtonText: 'cancelar',
        //cancelButtonColor:
        cancelButtonArialLabel: 'Cancelar',
        buttonStyling: true,
        showCloseButton: true,
        showCloseButton: true,
        closeButtonArialLabel: 'cerrar alerta',


        imageUrl: 'img/jsimg.jpg',
        imageWidth: '200px',
        //imageHeight:
        imageAlt: 'nada que decir',
    })

    if (pais) {
        Swal.fire({
            title: `seleccionaste ${pais}`,
        });

    }
})()