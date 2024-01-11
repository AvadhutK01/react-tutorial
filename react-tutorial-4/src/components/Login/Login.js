import React, { useState, useEffect, useReducer, useContext, useRef } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../context/auth-context';
import Input from '../UI/Input/Input';

const emailReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.includes('@') }
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.includes('@') }
  }
  return { value: '', isValid: false }
}

const passwordReducer = (state, action) => {
  if (action.type === 'PASS_INPUT') {
    return { value: action.val, isValid: action.val.trim().length > 6 }
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.trim().length > 6 }
  }
  return { value: '', isValid: false }
}

const collegeReducer = (state, action) => {
  if (action.type === 'COLLEGE_INPUT') {
    return { value: action.val, isValid: action.val.trim() !== '' }
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.trim() !== '' }
  }
  return { value: '', isValid: false }
}

const Login = () => {

  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '', isValid: null
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: '', isValid: null
  })

  const [collegeState, dispatchCollege] = useReducer(collegeReducer, {
    value: '', isValid: null
  });

  const ctx = useContext(AuthContext)

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(
        emailState.isValid && passwordState.isValid && collegeState.isValid
      );
    }, 500);

    return () => {
      clearTimeout(identifier);
    };
  }, [emailState, passwordState, collegeState])

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: 'USER_INPUT', val: event.target.value })
  };

  const collegeChangeHandler = (event) => {
    dispatchCollege({ type: 'COLLEGE_INPUT', val: event.target.value });
  }

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: 'PASS_INPUT', val: event.target.value });
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: 'INPUT_BLUR' })
  };

  const validateCollegeHandler = () => {
    dispatchCollege({ type: 'INPUT_BLUR' });
  }
  // enteredPassword
  const validatePasswordHandler = () => {
    dispatchPassword({ type: 'INPUT_BLUR' });
  };

  const emailRef = useRef();
  const passRef = useRef();
  const collegeRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      ctx.onLogin(emailState.value, passwordState.value);
    }
    else if (!emailState.isValid) {
      emailRef.current.focus();
    }
    else if (!collegeState.isValid) {
      collegeRef.current.focus()
    }
    else if (!passwordState.isValid) {
      passRef.current.focus()
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={emailRef}
          type="text"
          id="email"
          label='Email'
          isValid={emailState.isValid}
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input
          ref={collegeRef}
          type="text"
          id="college"
          label='College'
          isValid={collegeState.isValid}
          value={collegeState.value}
          onChange={collegeChangeHandler}
          onBlur={validateCollegeHandler}
        />
        <Input
          ref={passRef}
          type="password"
          id="password"
          label='Password'
          isValid={passwordState.isValid}
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};





export default Login;
