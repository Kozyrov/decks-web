import { useState, useRef } from 'react';
import { CardType } from '../../shared/types/card.types';
import { v4 as uuidv4 } from 'uuid';

type CardTemplateType = {
    addCardToDeck: (templateData: CardType) => void; 
}

const InlineCardTemplate = ({addCardToDeck}: CardTemplateType) => {
    const [visible, setVisible] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const titleRef = useRef<HTMLInputElement | null>(null);

    const addCard = () => {
        addCardToDeck({
            id: uuidv4(),
            title,
            description
        });
        setTitle("");
        setDescription("");
        titleRef.current?.focus();
    }

    return (
        <div>
            {
                visible ? 
                <>
                    <input value={title} placeholder="Card title" ref={titleRef} onChange={(e) => setTitle(e.target.value)} autoFocus />
                    <div>
                        <textarea value={description} placeholder="Card description" onChange={(e) => setDescription(e.target.value)}/>
                    </div>
                    <button onClick={addCard}>Add Card</button>
                    <button onClick={() => setVisible(false)}>Cancel</button>
                </> :
                <button onClick={() => setVisible(true)}>+ card</button>
            }
        </div>
    );
};

export default InlineCardTemplate;