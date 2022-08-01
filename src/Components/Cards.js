import { useState, useRef } from "react";
import Card from "./Card";

const Cards = () => {
    
    const [cards, setCards] = useState([
        { id: 0, name:'Apple', status: '', img: '/images/01.png' },
        { id: 0, name:'Apple', status: '', img: '/images/01.png' },
        { id: 1, name:'Banana', status: '', img: '/images/02.png' },
        { id: 1, name:'Banana', status: '', img: '/images/02.png' },
        { id: 2, name:'Pineapple', status: '', img: '/images/03.png' },
        { id: 2, name:'Pineapple', status: '', img: '/images/03.png' },
        { id: 3, name:'Watermelon', status: '', img: '/images/04.png' },
        { id: 3, name:'Watermelon', status: '', img: '/images/04.png' },
        { id: 4, name:'Grapes', status: '', img: '/images/05.png' },
        { id: 4, name:'Grapes', status: '', img: '/images/05.png' },
        { id: 5, name:'Strawberry', status: '', img: '/images/06.png' },
        { id: 5, name:'Strawberry', status: '', img: '/images/06.png' },
        { id: 6, name:'Coconut', status: '', img: '/images/07.png' },
        { id: 6, name:'Coconut', status: '', img: '/images/07.png' },
        { id: 7, name:'Kiwi', status: '', img: '/images/08.png' },
        { id: 7, name:'Kiwi', status: '', img: '/images/08.png' }

    ].sort(() => Math.random() - .5));

    const [previousCardState, setPreviousCardState] = useState(-1);

    console.log(previousCardState);

    const previousIndex = useRef(-1);

    const matchCheck = (currentCard) => {
        if(cards[currentCard].id === cards[previousCardState].id) {
            cards[previousCardState].status = 'active matched';
            cards[currentCard].status = 'active matched';
            setPreviousCardState(-1);
        }else {
            cards[currentCard].status = 'active';
            setCards([...cards]);
            setTimeout(() => {
                setPreviousCardState(-1);
                cards[currentCard].status = 'unmatch';
                cards[previousCardState].status = 'unmatch';
                setCards([...cards]);
            }, 1000)
        }
    }

    const clickHandler = (index) => {
        if(index !== previousIndex.current){
            if(cards[index].status === 'active matched') {
                alert('Already matched');
            }else {
                if(previousCardState === -1) {
                    previousIndex.current = index;
                    cards[index].status = 'active';
                    setCards([...cards]);
                    setPreviousCardState(index);
                }else {
                    matchCheck(index);
                    previousIndex.current = -1;
                }

            }
        }else {
            alert('Card currently selected');
        }
    }

    return (
        <>
            <div className="container">
                { cards.map((card, index) => {
                    return <Card
                                card={card}
                                key={index}
                                index={index}
                                clickHandler={clickHandler}
                            />
                }) }
            </div>
            <button className='button' onClick={() => window.location.reload()}>Restart</button>
        </>
    );

}

export default Cards