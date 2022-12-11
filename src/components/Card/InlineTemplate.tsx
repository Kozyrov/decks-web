import { useState, useRef } from 'react';
import { CardType } from '../../shared/types/card.types';

type CardTemplateType = {
    addCardToDeck: (templateData: CardType) => void; 
}

const InlineCardTemplate = ({addCardToDeck}: CardTemplateType) => {
    const [visible, setVisible] = useState(false);

    const titleRef = useRef<HTMLInputElement | null>(null);
    const descriptionRef = useRef<HTMLTextAreaElement | null>(null);

    const addCard = () => {
        addCardToDeck({
            title: titleRef.current?.value || "Title missing",
            description: descriptionRef.current?.value
        });
        titleRef.current?.focus();
    }

    return (
        <div>
            {
                visible ? 
                <>
                    <input autoFocus placeholder="Card title" ref={titleRef} />
                    <div>
                        <textarea ref={descriptionRef}/>
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