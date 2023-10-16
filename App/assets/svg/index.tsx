//External Imports
import { Group, useSVG, ImageSVG, fitbox, rect } from '@shopify/react-native-skia';

const OIP_LOGO = (width: number, height: number) => { 
    const svg = useSVG(require('./OIPLOGO.svg')); 
    const src = rect(0, 0, svg?.width() || 0, svg?.height() || 0);
    const dst = rect(0, 0, width, height);
    return ( <Group transform={fitbox("contain", src, dst)}><ImageSVG svg={svg} /></Group> )
}

const TheFool = (width: number, height: number) => { 
    const svg = useSVG(require('./TheFool.svg')); 
    const src = rect(0, 0, svg?.width() || 0, svg?.height() || 0);
    const dst = rect(0, 0, width, height);
    return ( <Group transform={fitbox("contain", src, dst)}><ImageSVG svg={svg} /></Group> )
}

const STATIC_SVG = {
    OIP_LOGO: OIP_LOGO,
    TheFool: TheFool
}

export { STATIC_SVG }