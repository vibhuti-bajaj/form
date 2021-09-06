import { useState, useEffect } from 'react';

const useForm2 = (callback, validate) => {
  const [values, setValues] = useState({
    name: '',
   
    password: '',
    email: '',
    gender : '',
    contact:'',
    // degree:'',
    // engineering:'',
    // hobbies:'',
    // address:'',
    // file:'',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
      }
    },
    [errors]
  );

  return { handleChange, handleSubmit, values, errors };
};

export default useForm2;