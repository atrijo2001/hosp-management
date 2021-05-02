import React from 'react'
import { Card} from "react-bootstrap"

const DoctorCard = ({doctor}) => {
    return (
        <div className="row">
            <div className="col-md-3">
            <Card style={{ width: '18rem' }}>
                    <Card.Body className="border-round">
                        <Card.Title>{doctor.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Qualifications; {doctor.qualifications}</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted">Department: {doctor.department}</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted">Gender: {doctor.sex}</Card.Subtitle>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
          </div>
        
        
    )
}

export default DoctorCard
