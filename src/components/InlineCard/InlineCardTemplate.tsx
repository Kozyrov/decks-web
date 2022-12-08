import { useState } from 'react';

type CardTemplateTypes = {
    addCardToDeck: (title: string) => void; 
}

const InlineCardTemplate = ({addCardToDeck}: CardTemplateTypes) => {
    const [title, setTitle] = useState('');
    const [visible, setVisible] = useState(false);

    const addCard = () => {
        setTitle('');
        addCardToDeck(title);
    }

    return (
        <div>
            {
                visible ? 
                <>
                    <input value={title} onChange={(e) => setTitle(e.target.value)}/>
                    <button onClick={addCard}>Add Card</button>
                </> :
                <button onClick={() => setVisible(true)}>+ card</button>
                
            }
        </div>
    );
};

export default InlineCardTemplate;