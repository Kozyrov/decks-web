import { useState, useRef } from 'react';
import { Entity } from '../../shared/types/entity.types';
import { v4 as uuidv4 } from 'uuid';
import styles from './inlineTemplate.module.scss';

type InlineTemplateType = {
    entityName: string;
    groupId: string;
    addNewEntityToGroup: (templateData: Entity) => void;
}

const InlineTemplate = ({addNewEntityToGroup, groupId, entityName}: InlineTemplateType) => {
    const [visible, setVisible] = useState<boolean>(false);
    const [validTitle, setValidTitle] = useState<boolean>(false);

    const titleRef = useRef<HTMLInputElement | null>(null);
    const descRef = useRef<HTMLDivElement | null>(null);

    const addEntity = () => {
        if (titleRef.current?.textContent) {
            addNewEntityToGroup(new Entity(uuidv4(), [groupId], titleRef.current?.textContent, descRef.current?.textContent));
            titleRef.current.textContent = "";
            if(descRef.current?.textContent) descRef.current.textContent = "";  
        };
        setValidTitle(false);
        titleRef.current?.focus();
    }

    return (
        <div className={styles.template_container}>
            {
                visible ? 
                <>
                    <div contentEditable className={styles.inline_input} ref={titleRef} placeholder={`${entityName} title`} onInput={(e) => setValidTitle(!!e.currentTarget.textContent)}></div>
                    <div contentEditable className={`${styles.inline_input} ${styles.desc_input}`} ref={descRef} placeholder={`${entityName} description`}></div>
                    <button disabled={!validTitle} onClick={addEntity}>{`Add ${entityName}`}</button>
                    <button onClick={() => setVisible(false)}>Cancel</button>
                </> :
                <button onClick={() => setVisible(true)}>{`+ ${entityName}`}</button>
            }
        </div>
    );
};

export default InlineTemplate;