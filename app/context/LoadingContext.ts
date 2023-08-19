import { createContext } from "react";

const LoadingContext = createContext<{ startLoading: Function, stopLoading: Function }>({
    startLoading: () => { },
    stopLoading: () => { }
});
export default LoadingContext;