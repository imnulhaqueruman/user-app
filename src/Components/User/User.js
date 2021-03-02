import React from 'react';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import'./User.css';

const User = (props) => {
    const handleAdd = props.handleAdd;
    //console.log(props);
    const{name,img,email,company,address} = props.id;
    return (
        <div className='user-info'>
                <Card style={{ width: '30rem'}}>
                  <Card.Img variant="top" src={img} />
                   <Card.Body>
                    <Card.Title>{name}</Card.Title>
                     <Card.Text>
                        <h3>Email:{email}</h3>
                        <h3>City:{address.city}</h3>
                        <h2>Salary:${company.salary}</h2> 
                     </Card.Text>
               
                   </Card.Body>
                </Card>
            <button style={{width:'10%'}} onClick={()=>handleAdd(props.id)}><FontAwesomeIcon icon={faPlus} /></button>
        </div>
    );
};

export default User;