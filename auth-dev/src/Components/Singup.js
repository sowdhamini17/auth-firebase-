import React ,{useRef} from "react";
import {Card,Button,Form} from "react-bootstrap"
import { useAuth } from "./contexts/AuthContext";

function handleSubmit(e){
    e.preventDefault()
    Singup(emailRef.current.value,passwordRef.current.value)
}

function Singup(){
    const emailRef =useRef();
    const passwordRef =useRef()
    const passwordconfirmRef =useRef()
    const {signup} = useAuth()
    return(<>
    <Card>
        <Card.Body>
        <h2 className="text-center mb-2 ">Sing up</h2>
        <Form>
            <Form.Group id="email">
                <Form.Label>EMAIL</Form.Label>
                <Form.Control type="email" useREF={emailRef} required/>
            </Form.Group>

            <Form.Group id="password">
                <Form.Label>PASSWORD</Form.Label>
                <Form.Control type="password" useREF={passwordRef} required/>
            </Form.Group>

            <Form.Group id="password-confirm">
                <Form.Label>password conformation</Form.Label>
                <Form.Control type="password" useREF={passwordconfirmRef} required/>
            </Form.Group>
            <br></br>
            <Button className="w-100 " type="submit">SIGN UP</Button>
        </Form>
        </Card.Body>
        
    </Card>
    <div className="w-100 text-center mt-2">
        Already have account ? login 
    </div>
    </>
        
    )
}
export default Singup