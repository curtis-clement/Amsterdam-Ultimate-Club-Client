import React, { useState, useEffect } from "react";
import { signUp } from "../../store/user/actions";
import { selectToken } from "../../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useHistory} from "react-router-dom";
import style from '../../CSS Modules/signup.module.css';

export default function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");
  const [selfRating, setSelfRating] = useState("");
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const history = useHistory();

  useEffect(() => {
    if (token !== null) {
      history.push("/");
    }
  }, [token, history]);

  function submitForm(event) {
    event.preventDefault();
    console.log(firstName, lastName, email, phoneNumber, gender, selfRating)

    dispatch(signUp(
      firstName, 
      lastName, 
      email, 
      password, 
      phoneNumber, 
      gender, 
      selfRating
      ));

    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setPhoneNumber('');
    setGender('');
    setSelfRating(0);
  }

return (
  <div className={style.wrap}>
    <div className={style.formwrap}>
      <h1 className={style.header}>Sign Up</h1>
      <hr className={style.hr} />
      <form className={style.form}>
        <label>First Name</label>
          <input 
          firstname='firstName'
          value={firstName}
          placeholder='First Name'
          onChange={event => setFirstName(event.target.value)}
          required
          />
        <label>Last Name</label>
          <input 
          lastname='lastName'
          value={lastName}
          placeholder='Last Name'
          onChange={event => setLastName(event.target.value)}
          required
          />
        <label>Email</label>
          <input 
          email='email'
          value={email}
          placeholder='Email'
          onChange={event => setEmail(event.target.value)}
          required
          />
        <label>Password</label>
          <input 
          password='password'
          type='password'
          value={password}
          placeholder='Password'
          onChange={event => setPassword(event.target.value)}
          required
          />
        <label>Phone Number</label>
          <input 
          phonenumber='phoneNumber'
          value={phoneNumber}
          placeholder='Phone Number'
          onChange={event => setPhoneNumber(event.target.value)}
          />
        <label>Gender</label>
          <select
          gender='gender'
          value={gender}
          type='select'
          onChange={event => setGender(event.target.value)}
          required
          >
          <option>Select Your Gender</option>
          <option value='male'>Male</option>
          <option value='female'>Female</option>
          <option value='nonbinary'>Non-Binary</option>
          <option value='noanswer'>Prefer Not To Answer</option>
          </select>
        <label>Self Rating</label>
          <select
          selfrating='selfRating'
          value={selfRating}
          onChange={event => setSelfRating(event.target.value)}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        <div className={style.submit}>
          <button onClick={submitForm}>Submit</button>
        </div>
      </form>
    </div>
  </div>
)
}


//   return (
//     <Container>
//       <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
//         <h1 className="mt-5 mb-5">Signup</h1>
//         <Form.Group controlId="formBasicName">
//           <Form.Label>Name</Form.Label>
//           <Form.Control
//             value={name}
//             onChange={event => setName(event.target.value)}
//             type="text"
//             placeholder="Enter name"
//             required
//           />
//         </Form.Group>
//         <Form.Group controlId="formBasicEmail">
//           <Form.Label>Email address</Form.Label>
//           <Form.Control
//             value={email}
//             onChange={event => setEmail(event.target.value)}
//             type="email"
//             placeholder="Enter email"
//             required
//           />
//           <Form.Text className="text-muted">
//             We'll never share your email with anyone else.
//           </Form.Text>
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
//           <Button variant="primary" type="submit" onClick={submitForm}>
//             Sign up
//           </Button>
//         </Form.Group>
//         <Link to="/login">Click here to log in</Link>
//       </Form>
//     </Container>
//   );
// }
