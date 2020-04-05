import React from 'react';

import { Container, Row, Col, Button, Input } from 'reactstrap';


const buttonStyles = {
    backgroundColor : "#031221", 
    height : "60px", 
    width : "150px", 
    borderRadius : "7px", 
    borderColor : "#031221"
}


const createButtonStyle = {
    backgroundColor : "#031221", 
    height : "60px", 
    width : "100%", 
    borderRadius : "7px", 
    borderColor : "#031221"
}

function MainPage() {



  return (

       <Container fluid>
    
    
        <Row>
            <Col  className="homepage-left" xs="12" sm="12" m="6" lg="6" xl="6" fluid>
                <div className="left-container">
                    <h1 className = "weflop-logo" style={{paddingBottom : "40px"}}>WeFlop</h1>
                    <p className="main-font" style={{fontSize : "20pt"}}> Playing online poker with your friends for free. No Crashing.  </p>
                    <p className="main-font left-container-text" style={{fontSize : "20pt"}}> Line 2 </p>
                    <p className="main-font left-container-text" style={{fontSize : "20pt"}}> Line 3 </p>
                    <p className="main-font left-container-text" style={{fontSize : "20pt"}}> Line 4 </p>
                </div>
                
                </Col>

            <Col className="homepage-right" xs="12" sm="12" m="6" lg="6" xl="6" fluid>
                <div className = "right-container">

                    <Row> 
                        <Col>
                            <Button style={buttonStyles} outline="false"> Sign Up  </Button> 
                        </Col>

                        <Col>
                            <Button style={buttonStyles} outline="false"> Log In </Button> 
                        </Col>
                    </Row>

                    <div style={{paddingBottom : "70px"}}> </div>

                    <Row>   
                        <Col> <h1 className = "courier-font" style={{paddingBottom : "40px"}}> Create a Room  </h1> </Col>
                    </Row>

                    <div id="create-room-section">

                        <Row className = "room-input">  
                            <Col >  </Col>
                            <Col >Blinds </Col>
                            <Col > <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" /></Col>
                            <Col >  </Col>
                        </Row>

                        <Row className = "room-input"> 
                            <Col >  </Col>
                            <Col >Blinds </Col>
                            <Col > <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" /></Col>
                            <Col >  </Col>
                        </Row>

                        <Row className = "room-input"> 
                            <Col >  </Col>
                            <Col >Blinds </Col>
                            <Col > <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" /></Col>
                            <Col >  </Col>
                        </Row>

                        <Row className = "room-input">   
                            <Col >  </Col>
                            <Col >Blinds </Col>
                            <Col > <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" /></Col>
                            <Col >  </Col>
                        </Row>

                        <Row className = "room-input"> 
                            <Col >  </Col>
                            <Col >Blinds </Col>
                            <Col > <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" /></Col>
                            <Col >  </Col>
                        </Row>



                        <Row className = "room-input" style={{paddingTop : "30px"}}> 
                            <Col  xs="3" sm="3" m="3" lg="3" xl="3" >  </Col>
                            <Col  xs="6" sm="6" m="6" lg="6" xl="6" > <Button style={createButtonStyle}  outline="false"> Get Game Link </Button>  </Col>
                            <Col  xs="3" sm="3" m="3" lg="3" xl="3" >  </Col>
                        </Row>

                    </div> 


                

                </div> 
            </Col>
        </Row>

        <Row> 
            <Col  className="about-block" xs="12" sm="12" m="6" lg="6" xl="6" fluid>

                <h1 className = "weflop-logo"> About </h1>

            
            </Col>


                <Col  className="contact-block" xs="12" sm="12" m="6" lg="6" xl="6" fluid>
                <h1 className = "weflop-logo"> Contact Us </h1>
                </Col>

        </Row>
        
  </Container>
  );
}

export default MainPage;