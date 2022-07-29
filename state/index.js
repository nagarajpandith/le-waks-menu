import { createGlobalState } from "react-hooks-global-state";

const { setGlobalState, useGlobalState } = createGlobalState({
    show: 0,
    Index: "0"
})

export { useGlobalState, setGlobalState };