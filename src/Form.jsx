import  React, { useState }  from "react";
import axios from "axios"
import { Button } from "@material-ui/core";
import useStyle from './style'
import {useNavigate} from 'react-router-dom';
// import Recaptcha from 'react-recaptcha';
import ReCAPTCHA from "react-google-recaptcha";

const Form = (props) => {
//    const [verifyEmail, setVerifyEmail] = useState(false);
   const classes = useStyle()
   const navigate = useNavigate();
//    const [captaverify, setcaptaverify] = useState(false);

    
    const [fullData , setFullData] = useState({
        name : "",
        studentNumber : "",
        domain : "",
        email : "",
        phoneNumber : "",
        branch : "",
        isHostler : "",
    })


    const verifyCallback = (response) => {
        // console.log(response);
        if (response) {
            setcaptaverify(true);
            console.log(response)
        }
    }

    var callback = function () {
        console.log('Done!!!!');
    };

    const inputEvent = (event) => {
        // console.log(event.target.value);
        // console.log(event.target.name);

        const value = event.target.value;
        const name = event.target.name;

        setFullData((preValue) => {
           return{
               ...preValue,
               [name]:value
           }
        })

    };
    const Validate = () => {
        let Email = fullData.email;
        let eletters = /^[a-z0-9](\.?[a-z0-9]){5,}@akgec\.ac\.in$/;
            if((eletters.test(Email))){
                setVerifyEmail(true);
               }
            else{
                setVerifyEmail(false);
                alert("Email not valid")
            }
            let Name=fullData.name;
            let letters=/^[A-Za-z\s-, ]+$/;
            if(!(Name.match(letters)))
            {
                alert("enter valid name");
            }
            
    }

    const onSubmit = (event) => {
        const user = { ...fullData };
        console.log(user);
        Validate();

        // if(verifyEmail)
        // {
        //     alert("valid email");
        // }
        // else
        // {
        //     alert("Email is not valid");
        // } 
       if(setVerifyEmail){
        if (verifyCallback) {
            axios.post('https://cine21.herokuapp.com/register', user)
             .then(res => {
                 console.log(res);
                 navigate('/submit');
             })
             .catch(err => {
                 alert(err);
                 console.log(err);
             })
         } else {
             alert("Please verify captcha again");
         }}
        //  setcaptaverify(false);
        event.preventDefault();
    }
        
    return(
        <>
            <div id="formmain">
                        <form onSubmit={onSubmit}>
                            <h1 className="side">Hi there ;)</h1>
                            <p id="para">Enter your details to register yourself</p>
                            <div className="input">
                                <input id="input1" type="text" placeholder="Name" onChange={inputEvent} value={fullData.name} name="name"  required/>
                                <label htmlFor="text" className="label">Name</label></div>

                            <div className="input">
                                <input id="input2" type="email" onChange={inputEvent} value={fullData.email} placeholder="College Email" name="email" required />
                                <label htmlFor="text" className="label">College Email</label></div>
                            <div className="input">
                                <input id="input3" type="text" pattern="[0-9]{7}"  minlength={7} maxlength={7} onChange={inputEvent} value={fullData.studentNumber} placeholder="Student Number" name="studentNumber" required />
                                <label htmlFor="text"  className="label">Student Number</label></div>

                            <div className="inline">

                            <select id="select1" className="sel" onChange={inputEvent} value={fullData.branch} name="branch" required >
                                <option value="BRANCH">Branch</option>
                                <option value="CSE">CSE</option>
                                <option value="CS">CS</option>
                                <option value="CSE(DS)">CSE(DS)</option>
                                <option value="CSE(ML)">CSE(ML & AI)</option>
                                <option value="CSIT">CSIT</option>
                                <option value="IT">IT</option>
                                <option value="ECE">ECE</option>   
                            </select>
                            <select id="select2" name="isHostler" value={fullData.isHostler}  onChange={inputEvent} required >
                                <option value="IsHostler">Hostler</option>
                                <option value="True">Yes</option>
                                <option value="False">No</option>
                            </select>
                            </div>
                            
                            <div className="input">
                                <input id="input4" pattern="[0-9]{10}" onChange={inputEvent} value={fullData.phoneNumber} placeholder="Whatsapp Number" type="text" minlength={10} maxlength={10} name="phoneNumber" required />
                                <label  className="label">Whatsapp Number</label>
                            </div>
                            <select id="select3" onChange={inputEvent} value={fullData.domain} name="domain" required >
                                <option value="domain">Domain</option>
                                <option value="technical">Technical</option>
                                <option value="managerial">Managerial</option>
                                <option value="designing">Designing</option>
                            </select>
                            <div  className="recaptcha">
                        <ReCAPTCHA
                            className="captcha"
                            sitekey="6LfrfH8dAAAAABiFbOk5bnmZ6NeViR924GHM4_ml"
                            render="explicit"
                            verifyCallback={verifyCallback}
                            onloadCallback={callback}
                        />
                    </div>
                            <div id="btn">
                                <div className="btnborder">
                                    <Button className={classes.button} type="submit" variant="outlined" size="large" id="submitbtn"><span>Submit</span> <i id="buffer" class="fa fa-spinner"  aria-hidden="true"></i></Button>
                                </div>
                            </div>
                        </form>
                    </div>
        </>
    );
}
export default Form;
