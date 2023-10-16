//External Imports
import { Group, useSVG, ImageSVG, fitbox, rect } from '@shopify/react-native-skia';

const ARIES = (scale: number, rotate: number) => { 
    const svg = useSVG(require('./ARIES.svg')); 
    const src = rect(0, 0, 1, 1);
    const dst = rect(0, 0, scale, scale);
    return ( <Group transform={fitbox("contain", src, dst)}><ImageSVG transform={[{rotate: rotate * Math.PI / 180}]} svg={svg} /></Group> )
}

const TAURUS = (scale: number, rotate: number) => { 
    const svg = useSVG(require('./TAURUS.svg')); 
    const src = rect(0, 0, 1, 1);
    const dst = rect(0, 0, scale, scale);
    return ( <Group transform={fitbox("contain", src, dst)}><ImageSVG transform={[{rotate: rotate * Math.PI / 180}]} svg={svg} /></Group> )
}

const GEMINI = (scale: number, rotate: number) => { 
    const svg = useSVG(require('./GEMINI.svg')); 
    const src = rect(0, 0, 1, 1);
    const dst = rect(0, 0, scale, scale);
    return ( <Group transform={fitbox("contain", src, dst)}><ImageSVG transform={[{rotate: rotate * Math.PI / 180}]} svg={svg} /></Group> )
}

const CANCER = (scale: number, rotate: number) => { 
    const svg = useSVG(require('./CANCER.svg')); 
    const src = rect(0, 0, 1, 1);
    const dst = rect(0, 0, scale, scale);
    return ( <Group transform={fitbox("contain", src, dst)}><ImageSVG transform={[{rotate: rotate * Math.PI / 180}]} svg={svg} /></Group> )
}

const LEO = (scale: number, rotate: number) => { 
    const svg = useSVG(require('./LEO.svg')); 
    const src = rect(0, 0, 1, 1);
    const dst = rect(0, 0, scale, scale);
    return ( <Group transform={fitbox("contain", src, dst)}><ImageSVG transform={[{rotate: rotate * Math.PI / 180}]} svg={svg} /></Group> )
}

const VIRGO = (scale: number, rotate: number) => { 
    const svg = useSVG(require('./VIRGO.svg')); 
    const src = rect(0, 0, 1, 1);
    const dst = rect(0, 0, scale, scale);
    return ( <Group transform={fitbox("contain", src, dst)}><ImageSVG transform={[{rotate: rotate * Math.PI / 180}]} svg={svg} /></Group> )
}

const LIBRA = (scale: number, rotate: number) => { 
    const svg = useSVG(require('./LIBRA.svg')); 
    const src = rect(0, 0, 1, 1);
    const dst = rect(0, 0, scale, scale);
    return ( <Group transform={fitbox("contain", src, dst)}><ImageSVG transform={[{rotate: rotate * Math.PI / 180}]} svg={svg} /></Group> )
}

const SCORPIO = (scale: number, rotate: number) => { 
    const svg = useSVG(require('./SCORPIO.svg')); 
    const src = rect(0, 0, 1, 1);
    const dst = rect(0, 0, scale, scale);
    return ( <Group transform={fitbox("contain", src, dst)}><ImageSVG transform={[{rotate: rotate * Math.PI / 180}]} svg={svg} /></Group> )
}

const SAGITTARIUS = (scale: number, rotate: number) => { 
    const svg = useSVG(require('./SAGITTARIUS.svg')); 
    const src = rect(0, 0, 1, 1);
    const dst = rect(0, 0, scale, scale);
    return ( <Group transform={fitbox("contain", src, dst)}><ImageSVG transform={[{rotate: rotate * Math.PI / 180}]} svg={svg} /></Group> )
}

const CAPRICORN = (scale: number, rotate: number) => { 
    const svg = useSVG(require('./CAPRICORN.svg')); 
    const src = rect(0, 0, 1, 1);
    const dst = rect(0, 0, scale, scale);
    return ( <Group transform={fitbox("contain", src, dst)}><ImageSVG transform={[{rotate: rotate * Math.PI / 180}]} svg={svg} /></Group> )
}

const AQUARIUS = (scale: number, rotate: number) => { 
    const svg = useSVG(require('./AQUARIUS.svg')); 
    const src = rect(0, 0, 1, 1);
    const dst = rect(0, 0, scale, scale);
    return ( <Group transform={fitbox("contain", src, dst)}><ImageSVG transform={[{rotate: rotate * Math.PI / 180}]} svg={svg} /></Group> )
}

const PISCES = (scale: number, rotate: number) => { 
    const svg = useSVG(require('./PISCES.svg')); 
    const src = rect(0, 0, 1, 1);
    const dst = rect(0, 0, scale, scale);
    return ( <Group transform={fitbox("contain", src, dst)}><ImageSVG transform={[{rotate: rotate * Math.PI / 180}]} svg={svg} /></Group> )
}

const SATURN = (scale: number, rotate: number) => { 
    const svg = useSVG(require('./SATURN.svg')); 
    const src = rect(0, 0, 1, 1);
    const dst = rect(0, 0, scale, scale);
    return ( <Group transform={fitbox("contain", src, dst)}><ImageSVG transform={[{rotate: rotate * Math.PI / 180}]} svg={svg} /></Group> )
}

const JUPITER = (scale: number, rotate: number) => { 
    const svg = useSVG(require('./JUPITER.svg')); 
    const src = rect(0, 0, 1, 1);
    const dst = rect(0, 0, scale, scale);
    return ( <Group transform={fitbox("contain", src, dst)}><ImageSVG transform={[{rotate: rotate * Math.PI / 180}]} svg={svg} /></Group> )
}

const MARS = (scale: number, rotate: number) => { 
    const svg = useSVG(require('./MARS.svg')); 
    const src = rect(0, 0, 1, 1);
    const dst = rect(0, 0, scale, scale);
    return ( <Group transform={fitbox("contain", src, dst)}><ImageSVG transform={[{rotate: rotate * Math.PI / 180}]} svg={svg} /></Group> )
}

const SOL = (scale: number, rotate: number) => { 
    const svg = useSVG(require('./SOL.svg')); 
    const src = rect(0, 0, 1, 1);
    const dst = rect(0, 0, scale, scale);
    return ( <Group transform={fitbox("contain", src, dst)}><ImageSVG transform={[{rotate: rotate * Math.PI / 180}]} svg={svg} /></Group> )
}

const VENUS = (scale: number, rotate: number) => { 
    const svg = useSVG(require('./VENUS.svg')); 
    const src = rect(0, 0, 1, 1);
    const dst = rect(0, 0, scale, scale);
    return ( <Group transform={fitbox("contain", src, dst)}><ImageSVG transform={[{rotate: rotate * Math.PI / 180}]} svg={svg} /></Group> )
}

const MERCURY = (scale: number, rotate: number) => { 
    const svg = useSVG(require('./MERCURY.svg')); 
    const src = rect(0, 0, 1, 1);
    const dst = rect(0, 0, scale, scale);
    return ( <Group transform={fitbox("contain", src, dst)}><ImageSVG transform={[{rotate: rotate * Math.PI / 180}]} svg={svg} /></Group> )
}

const LUNA = (scale: number, rotate: number) => { 
    const svg = useSVG(require('./LUNA.svg')); 
    const src = rect(0, 0, 1, 1);
    const dst = rect(0, 0, scale, scale);
    return ( <Group transform={fitbox("contain", src, dst)}><ImageSVG transform={[{rotate: rotate * Math.PI / 180}]} svg={svg} /></Group> )
}

const SOUTHNODE = (scale: number, rotate: number) => { 
    const svg = useSVG(require('./SOUTHNODE.svg')); 
    const src = rect(0, 0, 1, 1);
    const dst = rect(0, 0, scale, scale);
    return ( <Group transform={fitbox("contain", src, dst)}><ImageSVG transform={[{rotate: rotate * Math.PI / 180}]} svg={svg} /></Group> )
}

const NORTHNODE = (scale: number, rotate: number) => { 
    const svg = useSVG(require('./NORTHNODE.svg')); 
    const src = rect(0, 0, 1, 1);
    const dst = rect(0, 0, scale, scale);
    return ( <Group transform={fitbox("contain", src, dst)}><ImageSVG transform={[{rotate: rotate * Math.PI / 180}]} svg={svg} /></Group> )
}

const FORTUNA = (scale: number, rotate: number) => { 
    const svg = useSVG(require('./FORTUNA.svg')); 
    const src = rect(0, 0, 1, 1);
    const dst = rect(0, 0, scale, scale);
    return ( <Group transform={fitbox("contain", src, dst)}><ImageSVG transform={[{rotate: rotate * Math.PI / 180}]} svg={svg} /></Group> )
}

export { ARIES, TAURUS, GEMINI, CANCER, LEO, VIRGO, LIBRA, SCORPIO, SAGITTARIUS, CAPRICORN, AQUARIUS, PISCES, SATURN, JUPITER, MARS, SOL, VENUS, MERCURY, LUNA, SOUTHNODE, NORTHNODE, FORTUNA };