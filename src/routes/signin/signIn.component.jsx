import { signInWithGooglePopup,createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'; 
import './signIn.styles.scss'

const SignIn = () =>{
    const googleSignIn = async ()=>{
        const {user} = await signInWithGooglePopup();
        createUserDocumentFromAuth(user)
    }
    return (
        <div>
            <h1>Sign In component</h1>
            <button onClick={googleSignIn}>sign in with google</button>
        </div>
    )
}
export default SignIn;