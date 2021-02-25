import React,{ Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return(
            <div className="condiv">
                <h1 className="subtopic"> Education</h1>
                <Widecard title="Datascience and Software Inovation" where="Ubonratchatani University"  from="2018" to="Pesent" />
                <Widecard title="Sci-Math" where="Nonthep HighSchool"  from="2013" to="2018" />

            </div>
        )
    }
}

export default Education;