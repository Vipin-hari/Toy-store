import { useState } from "react"
import { Link , useNavigate} from "react-router-dom";
import '../Css/Signing.css'
import { getAuth,createUserWithEmailAndPassword } from "firebase/auth";
import {getDatabase, set, ref} from "firebase/database";

const SignUp = ({uidchange}) => {
    const [email,setEmail] = useState("")
    const [phone,setPhone] = useState("")
    const [pass,setPass] = useState("")
    const [username,setUsername] = useState("")
    const navigate = useNavigate()
    const db = getDatabase();

    const handleClick = async() =>{
        try {
            await createUserWithEmailAndPassword(getAuth(),email,pass)
                .then((credentials)=>{
                    const uid = credentials.user.uid;
                    set(ref(db,'users/'+uid),{
                      USERNAME:username,
                      EMAIL:email,
                      Phno:phone
                    });
                    alert("Registered");
                    setEmail("")
                    setPass("")
                    setUsername("")
                    setPhone("")
                    navigate('/')
                })           
        } catch (error) {
            alert("Nope an error occured"+error.message)
        }
        
    }

  return (
    <div className="fcontainer">
      
      <div className="fields">
        <div className="field">
        <div className='heading'>SIGN-UP</div><br /><hr />
        </div>
        <div className="field">
          <label htmlFor="username">Username</label><br />
          <input type="text" className="ii"
                 value={username}
                 onChange={(e)=>setUsername(e.target.value)}
                 placeholder="eg:John_Doe"
                 required
          />
        </div>
        <div className="field">
            <label htmlFor="email">Email</label><br />
            <input type="email" className="ii"
                   value={email} 
                   onChange={(e)=>setEmail(e.target.value)}
                   placeholder="eg:vipin@gmail.com"
                   required
            />
        </div>
        <div className="field">
            <label htmlFor="phno">Ph-No</label><br />
            <input type="number" className="ii"
                   value={phone} 
                   onChange={(e)=>setPhone(e.target.value)}
                   placeholder="eg:123-456-7890"
                   required
            />
        </div>
        <div className="field">
            <label htmlFor="password">Password</label><br />
            <input type="password" className="ii"
                   value={pass} 
                   onChange={(e)=>setPass(e.target.value)}
                   placeholder="Create a strong password"
                   required 
            />
        </div>
        <div className="btnn">
            <input type="submit" onClick={handleClick} />
            <Link to='/' className="a">already an user.?</Link>
        </div>
      </div>
    </div>
  )
}

export default SignUp
