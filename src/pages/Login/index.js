import React, { useState, useEffect } from "react";
import { login } from "../../store/user/actions";
import { selectToken } from "../../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import style from '../../CSS Modules/login.module.css'

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const history = useHistory();

  useEffect(() => {
    if (token !== null) {
      history.push("/");
    }
  }, [token, history]);

  function submitForm(event) {
    console.log("hi");
    event.preventDefault();

    dispatch(login(email, password));

    setEmail('');
    setPassword('');
  }

  return (
    <div className={style.wrap}>
      <div className={style.formwrap}>
        <h1 lassName={style.header}>Login In</h1>
        <hr className={style.hr} />
        <form className={style.form}>
          <label>Email</label>
            <input 
            value={email}
            onChange={event => setEmail(event.target.value)}
            type='email'
            placeholder='Enter Email'
            required
            />
          <label>Password</label>
            <input 
            value={password}
            onChange={event => setPassword(event.target.value)}
            type='password'
            placeholder='Enter Password'
            required
            />

          <div className={style.submit}>
            <button type='submit' onClick={submitForm}>Login In</button>
          </div>
          <div className={style.link}>
            <Link to="/signup" className={style.linkcolor}>
              Click here to sign up
            </Link>
         </div>
        </form>
      </div>
    </div>
  )
}



//   return (
//     <Container>
//       <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
//         <h1 className="mt-5 mb-5">Login</h1>
//         <Form.Group controlId="formBasicEmail">
//           <Form.Label>Email address</Form.Label>
//           <Form.Control
//             value={email}
//             onChange={event => setEmail(event.target.value)}
//             type="email"
//             placeholder="Enter email"
//             required
//           />
//         </Form.Group>

//         <Form.Group controlId="formBasicPassword">
//           <Form.Label>Password</Form.Label>
//           <Form.Control
//             value={password}
//             onChange={event => setPassword(event.target.value)}
//             type="password"
//             placeholder="Password"
//             required
//           />
//         </Form.Group>
//         <Form.Group className="mt-5">
//           <Button variant="primary" type="submit" className={style.button} onClick={submitForm}>
//             Log in
//           </Button>
//         </Form.Group>
//         <Link to="/signup" style={{ textAlign: "center" }}>
//           Click here to sign up
//         </Link>
//       </Form>
//     </Container>
//   );
// }
