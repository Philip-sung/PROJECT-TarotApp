import { View, ImageSourcePropType } from "react-native";
import { TxtNextToImg } from "../TxtNextToImg";
import { TxtOnImg } from "../TxtOnImg";

function DisplayerContainer(props : { type: "TxtNextToImg" | "TxtOnImg", data: {title:string, content:string, image: ImageSourcePropType, author?: string}[]}): JSX.Element[] {
    if (props.type === "TxtNextToImg") {
        return(
            props.data.map(({title, content, image}, index) => (
                <TxtNextToImg key={index} title={title} content={content} image={image} />
            ))
        )
    }
    else if (props.type === "TxtOnImg") {
        return(
            props.data.map(({title, content, image, author}, index) => (
                <TxtOnImg key={index} title={title} content={content} image={image} author={author} />
            ))
        )
    }

    else {
        return(
            []
        )
    }
}

export { DisplayerContainer };