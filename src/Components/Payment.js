import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';
import { Message } from 'semantic-ui-react'


export default class PAYMENT extends React.Component {
    render() {
        const client = {
            sandbox:    'ATOycXUJEURBMysTyRgpRbUe8jGTvgnSMgGKEKwGgMnuPndRrTLFRGZ1Hto0ObygTuJ_yYefQ0N3y6GD',
           // production: 'YOUR-PRODUCTION-APP-ID',
        }   





        const onSuccess = (payment) => {
			// 1, 2, and ... Poof! You made it, everything's fine and dandy!
            		console.log("Payment successful!", payment);
            		// You can bind the "payment" object's value to your state or props or whatever here, please see below for sample returned data
        
                   
                    alert("I am an alert box!");
                    return(
                    <div class="ui message">
                    <div class="header">
                      Changes in Service
                    </div>
                    <p>We just updated our privacy policy here to better service our customers. We recommend reviewing the changes.</p>
                  </div>)
                  
                        
        
                }
                const onCancel = (payment) => {
                    // 1, 2, and ... Poof! You made it, everything's fine and dandy!
                            console.log("Payment cancelled", payment);
                            // You can bind the "payment" object's value to your state or props or whatever here, please see below for sample returned data
                            alert("The Payment was cancelled ");
            
                            
                            this.props.failure()

                

                              
                
                
                        }      




        return (


            
            <PaypalExpressBtn client={client} currency={'USD'} total={this.props.totaler} onSucess={onSuccess} onCancel={onCancel}/>
        );
    }
}