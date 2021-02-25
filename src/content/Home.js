import React,{ Component } from 'react';
import  Social from '../components/Social';
import ReactTypingEffect from 'react-typing-effect'

class Home extends Component {
    render() {
        return (
            <div className="condiv home">
                <img src="https://scontent.fnak2-1.fna.fbcdn.net/v/t1.0-9/48398815_1544440622366340_2329415662339883008_o.jpg?_nc_cat=102&ccb=3&_nc_sid=174925&_nc_eui2=AeFZz0JWTSjQFPQsrkhgV8A53kfZiJVWaoTeR9mIlVZqhKUFrZwCNwQIAgB_ewnAbH5whRZ22aEWIEaMuhg09l85&_nc_ohc=e5W2jBPcvBsAX_Gw9kK&_nc_ht=scontent.fnak2-1.fna&oh=e09b6605ec3cbbbc2772190468edb710&oe=605A39E0" alt="profile" className="profilepic"/>
                <ReactTypingEffect text={['Anusorn Kruethong']}  speed={80} eraseDelay={200} className="typingeffect" />
                <Social />
            </div>
        )
    }
}


export default Home