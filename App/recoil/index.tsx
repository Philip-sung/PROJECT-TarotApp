import { atom, selector } from "recoil";

const tarotSelected = atom<number>({
    key:'tarotSelected',
    default: 0
})

const tarotFliped = atom<number[]>({
    key:'tarotFliped',
    default: [0,0,0,0,0]
})

const selectednum = selector<number>({
    key: 'selectednum',
    get: ({get}) => {
        const size = get(tarotSelected)

        return size;
    }
})

export { tarotSelected, tarotFliped, selectednum }