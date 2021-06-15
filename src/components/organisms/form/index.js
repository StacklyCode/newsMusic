import React, { useEffect, useState } from 'react';
import InputAtom from '../../atoms/input';

const OrganismForm = () => {
  const [formValue, setFormValue] = useState();

  useEffect(() => {
    console.log(formValue);
  }, [formValue]);

  return (
    <form>
      <InputAtom
        formType="text"
        sendValue={setFormValue}
        lastFormValue={formValue}
        initialValue=""
        name={'name'}
      />
      <InputAtom
        formType="email"
        sendValue={setFormValue}
        lastFormValue={formValue}
        initialValue=""
        name={'email'}
      />
      <InputAtom
        formType="password"
        sendValue={setFormValue}
        lastFormValue={formValue}
        initialValue=""
        name={'password'}
      />
    </form>
  );
};

export default OrganismForm;
