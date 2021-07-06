import { useState, useEffect } from "react";

const useInitialState = (API) => {

    const [state, setState] = useState([]);

    useEffect(() => {
        fetch(API)
            .then(res => res.json())
            .then(data => setState(data))
            .catch(err => console.log(err));
    }, []);
    return state;
};

export default useInitialState;