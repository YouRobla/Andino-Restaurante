import { useForm } from 'react-hook-form'

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  const onSubmit = (data) => {
    alert('Formulario válido. Datos: ' + JSON.stringify(data, null, 2))
    reset()
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto p-6 bg-white rounded shadow"
      noValidate
    >
     

      <div className="mb-4">
        <label htmlFor="nombre" className="block mb-1 font-semibold">
          Nombre
        </label>
        <input
          id="nombre"
          {...register('nombre', {
            required: 'El nombre es obligatorio',
            minLength: { value: 3, message: 'Mínimo 3 caracteres' },
            maxLength: { value: 100, message: 'Máximo 100 caracteres' },
          })}
          className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring ${
            errors.nombre ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.nombre && (
          <p className="mt-1 text-red-500 text-sm">{errors.nombre.message}</p>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="correo" className="block mb-1 font-semibold">
          Correo electrónico
        </label>
        <input
          id="correo"
          type="email"
          {...register('correo', {
            required: 'El correo es obligatorio',
            maxLength: { value: 150, message: 'Máximo 150 caracteres' },
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: 'Correo no válido',
            },
          })}
          className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring ${
            errors.correo ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.correo && (
          <p className="mt-1 text-red-500 text-sm">{errors.correo.message}</p>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="mensaje" className="block mb-1 font-semibold">
          Mensaje
        </label>
        <textarea
          id="mensaje"
          rows="5"
          {...register('mensaje', {
            required: 'El mensaje es obligatorio',
            minLength: { value: 10, message: 'Mínimo 10 caracteres' },
            maxLength: { value: 500, message: 'Máximo 500 caracteres' },
          })}
          className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring ${
            errors.mensaje ? 'border-red-500' : 'border-gray-300'
          }`}
        ></textarea>
        {errors.mensaje && (
          <p className="mt-1 text-red-500 text-sm">{errors.mensaje.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-green-800 hover:bg-green-900 text-white font-bold py-2 px-4 rounded transition"
      >
        Enviar
      </button>
    </form>
  )
}

export default ContactForm
