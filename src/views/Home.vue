<template>
  <main class="text-center w-screen">
    <p class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-10 text-gray-400 w-screen">
      We are launching <span class="font-bold text-black">soon!</span>
    </p>
    <p class="my-4 text-base sm:text-lg w-screen ">
      Suscribe and get notified
    </p>
    <form action="" class="flex justify-center flex-col md:flex-row px-10 w-screen" @submit="submitForm">
      <!-- email input and error span-->
      <div class="flex flex-col text-justify w-full sm:w-2/3 md:w-1/3 xl:w-1/3 mx-auto md:mx-0">
        <input type="text" placeholder="Your email adress" :class="['border','rounded-3xl','border-gray-500','p-2','pl-4', colorErrorBorder]" v-model="field.email">
        <span class="text-xs text-center md:text-justify ml-0 md:ml-6 mb-2 text-red-600 italic" >{{fieldError.email}}</span>
      </div>
      <button type="submit"  class="border rounded-3xl bg-blue-500 text-white p-2 w-full sm:w-2/3 md:w-1/6 xl:w-1/12 mx-auto md:mx-2 h-1/2 mt-4 md:mt-0">Notify Me</button>
    </form>
    <figure class="w-screen my-4 p-3 grid sm:grid-cols-5">
      <img src="../assets/illustration-dashboard.png" alt="" class="sm:col-start-2 sm:col-end-5">
    </figure>
    
  </main>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data () {
    return {
      // referencia a la clase (border-red-600) que será añadida cuando exista un error en la validación
      colorErrorBorder : '',
      field : {
        // se conecta este campo con el v-model del input
        email: ''
      },
      fieldError: {
        email: undefined
      }
    }
  },
  methods: {
    // método que validara la información antes de ser enviada y se conecta al evento submit del form
    submitForm(e) {
      e.preventDefault();
      // si ocurre un error, el mensaje de error pasara de undefined a su valor asignado
      this.fieldError = this.validateForm(this.field);
      if (Object.keys(this.fieldError).length) return;
      // reinicia el valor campo email y cambia el color del borde al elegido por defecto 
      this.field.email = '';
      this.colorErrorBorder = '';
    },
    //Este método asegura que el mail no esté vació, retorna un objeto el cual almacena un mensaje si field.email está vacío.
    validateForm(field) {
      const error = {};
      if(!field.email) {
          error.email = "Please provide a email address";
          this.colorErrorBorder = "border-red-600"
      }
      // Este condicional evalua si el email introducido es válido (string@string.string), esto mendiante el método isEmail()
      if (field.email && !this.isEmail(field.email)) {
        error.email = "Please provide a valid email address"
        this.colorErrorBorder = "border-red-600"
      }
      return error;
    },
    // crea una constante con expresion regular simple y lo compara con el valor introducido como argumento
    isEmail(email) {
      const re = /\S+@\S+\.\S+/;
      return re.test(email)
    }
  }
}
</script>
