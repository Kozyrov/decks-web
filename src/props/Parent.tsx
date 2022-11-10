import { Child } from './Child';

const Parent = () => {
    return (
        <Child color="purple" onClick={() => console.log("clicked!")}>
            Starting work on wutchyacan!
        </Child>
    )
};

export default Parent;