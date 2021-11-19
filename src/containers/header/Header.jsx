import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png'

const Header = () => {
    return (
        <div className="gpt3__header section__padding">
            <div className="gpt3__header-content">
                <h1 className="gradient__text">Let's Build Something amazing with GPT-3 OpenAI</h1>
                <p className="gradient__text">
                    GPT-3 is a generative text model that uses a recurrent neural network (RNN) to generate text.
                    The model is trained on a large corpus of text, and can generate text from a seed sentence.
                    The model is trained on a large corpus of text, and can generate text from a seed sentence.</p>
                  <div className="gpt3__header-content__input">
                    <input type="email" placeholder="Your Email Address" />
                    <button type="button" className="btn btn-primary">Get Started</button>
                 </div>
                 <div className="gpt3__header-content__people">
                 <img src={people} alt="people" />
                 <p> 1,600 people requested a visit in last 24 hours</p>
                 </div>

            </div>
      <div className="gpt3__header-image">
                     <img src={ai} alt="ai" />
                     </div>
        </div>
    )
}

export default Header;
