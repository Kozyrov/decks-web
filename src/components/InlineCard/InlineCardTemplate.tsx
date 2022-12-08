import { useState, useRef } from 'react';

type CardTemplateTypes = {
    addCardToDeck: (title: string) => void; 
}

const InlineCardTemplate = ({addCardToDeck}: CardTemplateTypes) => {
    const [title, setTitle] = useState('');
    const [visible, setVisible] = useState(false);

    const titleRef = useRef<HTMLInputElement | null>(null);

    const addCard = () => {
        setTitle('');
        addCardToDeck(title);
        titleRef.current?.focus();
    }

    return (
        <div>
            {
                visible ? 
                <>
                    <input autoFocus placeholder='Card title' ref={titleRef} value={title} onChange={(e) => setTitle(e.target.value)}/>
                    <button onClick={addCard}>Add Card</button>
                    <button onClick={() => setVisible(false)}>Cancel</button>
                </> :
                <button onClick={() => setVisible(true)}>+ card</button>
            }
        </div>
    );
};

export default InlineCardTemplate;