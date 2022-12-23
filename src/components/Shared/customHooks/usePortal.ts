import { useEffect, useRef } from 'react';

const usePortal = (targetId: string) => {
    const container = useRef(document.createElement("div"));

    useEffect(() => {
        const targetElement = document.querySelector(`#${targetId}`);
        targetElement?.appendChild(container.current);
        const removeContainer = () => {
            container.current.remove();    
        }
        return removeContainer;
    }, [targetId]);

    return container.current;
}

export default usePortal;