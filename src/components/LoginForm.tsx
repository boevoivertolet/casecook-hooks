import 'react-app-polyfill/ie11';
import * as React from 'react';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import { login } from '../app/authReducer'
import { useAppDispatch } from '../app/store'

interface Values {
      email: string;
      password: string;
      rememberMe: boolean;
}

export const LoginForm = () => {
      const dispatch = useAppDispatch()
      return (
            <div>
                  <h1>Login</h1>
                  <Formik
                        initialValues={{
                              email: '',
                              password: '',
                              rememberMe: false,
                        }}
                        onSubmit={(
                              values: Values,
                              { setSubmitting }: FormikHelpers<Values>
                        ) => {
                              console.log(values)

                              setTimeout(() => {
                                   dispatch( login(values))
                                    setSubmitting(false);


                              }, 500);
                        }}
                  >
                        <Form>
                              <label htmlFor="email">Email</label>
                              <Field type={'email'} id="email" name="email" placeholder="email" />

                              <label htmlFor="password">Password</label>
                              <Field type={'password'} id="password" name="password" placeholder="password" />

                              <label htmlFor="rememberMe">Remember me</label>
                              <Field
                                    id="rememberMe"
                                    name="rememberMe"
                                    type="checkbox"
                              />

                              <button type="submit">Submit</button>
                        </Form>
                  </Formik>
            </div>
      );
};


export type LoginFormDataType = {
      email: string
      password: string
      rememberMe: boolean
}