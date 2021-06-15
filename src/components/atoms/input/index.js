import styled from '@emotion/styled';
import React, { useEffect } from 'react';
import useInput from '../../../hooks/useInput';

const Input = styled.div`
  //toDo change font family to Poppins
  display: flex;
  flex-direction: column;
  font-family: sans-serif;
  font-weight: 700;
  label {
    margin-bottom: 20px;
    font-size: 1.125rem;
    color: #a8a8a8;
  }
  input {
    min-height: 4rem;
    outline: none;
    border: none;
    background-color: #1f1f24;
    color: #c4c4c4;
    border-radius: 0.625rem;
    padding: 1rem;
  }
`;

const InputAtom = ({
  name,
  sendValue,
  lastFormValue,
  formType,
  initialValue,
}) => {
  const [value, handleInputChange] = useInput({
    [name]: initialValue[name] || '',
  });

  let inputValue = value[name];

  useEffect(() => {
    sendValue({
      ...lastFormValue,
      [name]: inputValue,
    });
  }, [inputValue]);

  return (
    <Input>
      <label>{name}</label>
      <input
        onChange={handleInputChange}
        name={name}
        value={inputValue}
        type={formType}
      />
    </Input>
  );
};

export default InputAtom;
