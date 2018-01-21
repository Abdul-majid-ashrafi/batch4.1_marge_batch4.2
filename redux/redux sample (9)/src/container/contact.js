import React from 'react';
import { ContactComponent } from '../components/contact'

export class ContactContainer extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        console.log("Contart", this.props)
        return (
            <div>
                <ContactComponent />
            </div>
        )
    }
}

