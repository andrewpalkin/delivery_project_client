import React, { useState, useEffect } from "react";
import { Message, Grid,  Transition } from 'semantic-ui-react'

const MessageBox = props => {
    const {error} = props;
    const [ hide ] = useState(1500);
    const [ show] = useState(1600);
    const [ visible, setVisible ] = useState(false);
    let messsage = '';
    if (error && error.errorMessage) {
        setVisible(true);
        messsage = error.errorMessage
    }
    // if (visible) {
    //     setTimeout(setVisible(false), 15000);
    // }    
        useEffect(() => {
                setInterval(() => {
                    setVisible(!visible); // ✅ This doesn't depend on `count` variable outside
                }, 15000);    
        }, []);
    return (
        <Grid columns={2}>
            <Grid.Column>
                <Transition duration={{ hide, show }} visible={visible}>
                    <Message negative>
                        <Message.Header>We're sorry we can't apply that discount</Message.Header>
                        <p>{messsage}</p>
                    </Message>
                </Transition>
            </Grid.Column>
         </Grid>
         )
};

export default MessageBox;