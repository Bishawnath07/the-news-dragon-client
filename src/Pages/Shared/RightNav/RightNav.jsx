import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub , FaFacebook , FaTwitter , FaInstagram} from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png'



const RightNav = () => {
    return (
        <div>
            <h4>Login With</h4>
            <div className=''>
                <Button className='mb-2' variant="outline-primary"><FaGoogle /> Login With Google</Button>
                <Button variant="outline-secondary"><FaGithub /> Login With Github</Button>
            </div>
            <div className='mt-5'>
                <h4>Find Us</h4>
                <ListGroup >
                    <ListGroup.Item ><FaFacebook/>Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter/> Twiter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram/>Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <QZone></QZone>
            <div>
                <img src={bg} alt="" />
            </div>
        </div>
    );
};

export default RightNav;