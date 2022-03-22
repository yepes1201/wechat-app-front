import { useState } from "react";

export const useForm = (initialValue) => {
  const [form, setForm] = useState(initialValue);

  const handleForm = ({ target }) => {
    setForm({
      ...form,
      [target.name]: target.value,
    });
  };

  const resetForm = () => setForm(initialValue);

  return { form, handleForm, resetForm };
};
