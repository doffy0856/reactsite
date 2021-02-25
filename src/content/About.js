import React, {Component} from 'react'

class About extends Component {
    render() {
        return(
            <div className="condiv about">
                <h1 className="subtopic"> About Me</h1>
                <img src="https://scontent.fnak2-1.fna.fbcdn.net/v/t1.0-9/48398815_1544440622366340_2329415662339883008_o.jpg?_nc_cat=102&ccb=3&_nc_sid=174925&_nc_eui2=AeFZz0JWTSjQFPQsrkhgV8A53kfZiJVWaoTeR9mIlVZqhKUFrZwCNwQIAgB_ewnAbH5whRZ22aEWIEaMuhg09l85&_nc_ohc=e5W2jBPcvBsAX_Gw9kK&_nc_ht=scontent.fnak2-1.fna&oh=e09b6605ec3cbbbc2772190468edb710&oe=605A39E0" alt="profile" className="profilepic"/>

                <h3> Hi! I am Anusorn</h3>
                <p>he href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md</p>
            </div>
        )
    }
}

export default About;