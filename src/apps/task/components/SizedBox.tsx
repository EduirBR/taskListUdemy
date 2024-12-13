import { CSSProperties } from "react";

type Props = {
    height?: number;
    width?: number;
};

function SizedBox({ height, width }: Props) {
    const style: CSSProperties = {
        height: height ?? 0,
        width: width ?? 0,
    };

    return <div style={style}></div>;
}

export default SizedBox;
