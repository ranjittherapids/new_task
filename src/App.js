

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup'
import { add_user } from './redux/action';
import Profile from './profile';
import './index.css';

function App() {
  const [UserList, SetUserList] = useState([])
  const dispatch = useDispatch()
  const selector = useSelector(data => data)
  useEffect(() => {
    SetUserList(selector.userData)
  }, [selector])

  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
      email: Yup.string().email('Invalid email').required('Required'),
      password: Yup.string()
      .required('Required'),
      conformPassword: Yup.string()
      .required('Required')
         .oneOf([Yup.ref('password'), null], 'Passwords must match'),
         image: Yup.string()
         .required('Required'),
         
  });

  return (
    <div className="app_container">
      <Formik
        initialValues={{
          firstName: '',
          image:'',
          email: '',
          password:"",
          conformPassword:""
        }}
        validationSchema={SignupSchema}
        onSubmit={(values,{resetForm}) => {
          const obj = {
            name: values.firstName,
            email: values.email,
            password: values.password,
            image:values.image
          }
          dispatch(add_user(obj))
          
          resetForm()
        }}
      >
        {({ errors, touched,setFieldValue }) => (
          <Form>
            <Field name="firstName" placeholder="Enter Name" />
            {errors.firstName && touched.firstName ? (
              <div>{errors.firstName}</div>
            ) : null}
                <Field name="email" type="email" placeholder="Enter Email" />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            <Field name="password" type="password" placeholder="Enter Password" />
            {errors.password && touched.password ? <div>{errors.password}</div> : null}
            <Field name="conformPassword" type="conformPassword" placeholder="Enter ConformPassword" />
            {errors.conformPassword && touched.conformPassword ? <div>{errors.conformPassword}</div> : null}
            <input name="image" type="file" accept="image/*"                 onChange={(e) => {
                  const [file] = e.target.files;
                  setFieldValue("image",(URL.createObjectURL(file)));
                }}
 />
            {errors.image && touched.image ? (
              <div>{errors.image}</div>
            ) : null}
        
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
      <div className="profilePage_container">
        <Profile UserList={UserList} />
      </div>

    </div>
  );
}
export default App;
