import React from "react";
import styles from "./Form.module.scss";
import { useForm, Controller } from "react-hook-form";
import toast from "react-hot-toast";
import { postMessage } from "../../services";
const Form = () => {
  const { register, handleSubmit, control, reset } = useForm({
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      reason: "",
      message: "",
    },
  });
  const onSubmit = async (data) => {
    try {
      await postMessage(data);
      toast.success("¡Enviado! Recibirá una respuesta a la brevedad");
      reset();
    } catch (error) {
      toast.error("Ocurrió un error. Vuelva a intentar");
    }
  };
  return (
    <div className={styles.formSection}>
      <h3 className={styles.title}>Escribinos tu consulta</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.formRow}>
          <label>
            Nombre y apellido
            <input type="text" {...register("name")} />
          </label>
          <label>
            Télefono / Celular
            <input type="text" {...register("phone")} />
          </label>
        </div>
        <div className={styles.formRow}>
          <label>
            Correo electrónico
            <input type="text" {...register("email")} />
          </label>
          <label>
            Motivo de consulta
            <input type="text" {...register("reason")} />
          </label>
        </div>
        <div className={styles.formRowMessage}>
          <label>Mensaje</label>
          <textarea rows="4" cols="50" {...register("message")}></textarea>
        </div>
        <input
          type="submit"
          value="Enviar consulta"
          className={styles.submit}
        />
      </form>
    </div>
  );
};

export default Form;
