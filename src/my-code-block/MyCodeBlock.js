import { CopyBlock } from "react-code-blocks";

export default function MyCodeComponent(props) {
    return (
        <CopyBlock
            text={props.data.code}
            language={props.data.language}
            showLineNumbers={props.data.showLineNumbers}
            startingLineNumber={props.data.startingLineNumber}
            theme={props.data.theme}
            wrapLines
        />
    );
}
