import React from 'react';
import "./QuestionAnswer.css";

const QuestionAnswer = () => {
    return (
        <div className='container'>
            <h1 className='container-title'>Question & Answer</h1>
            <h2 className='question'>How React Works ?</h2>
            <p className='answer'>React is a declarative, green, and flexible JavaScript library for constructing consumer interfaces. It helps you to compose complex UIs from small and isolated portions of code called “components”. React has some exceptional types of components. React implements a digital DOM that is essentially a DOM tree illustration in JavaScript. So while it needs to study or write to the DOM, it'll use the virtual representation. Then the virtual DOM will try and discover the maximum efficient way to replace the browser’s DOM. At its very middle, React essentially maintains a tree for you. Unlike browser DOM factors, This tree is capable of do green diff computations on the nodes. React factors are undeniable gadgets and are cheap to create. React DOM takes care of updating the DOM to match the React elements. The cause for that is that JavaScript is very speedy and it’s well worth keeping a DOM tree in it to hurry up its manipulation.</p>

            <h2 className='question'>What is the diffrence between react props and state ?</h2>
            <p className='answer'>The country is an updatable shape that is used to include facts or statistics approximately the factor and can alternate over time. The change in state can appear as a reaction to person motion or device occasion. It is the coronary heart of the react issue which determines the behavior of the issue and how it'll render. A kingdom ought to be kept as simple as feasible. It represents the element's nearby country or records. It can simplest be accessed or changed within the thing or by the component without delay.<br/><br />

             Props are study-handiest components. It is an item which shops the cost of attributes of a tag and paintings much like the HTML attributes. It lets in passing data from one component to different components. It is just like function arguments and may be surpassed to the element the identical manner as arguments handed in a characteristic. Props are immutable so we can not alter the props from inside the issue.</p>
        </div>
    );
};

export default QuestionAnswer;