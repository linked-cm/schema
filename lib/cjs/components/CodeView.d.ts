import { Code } from '../shapes/Code.js';
interface CodeViewProps {
    code?: string;
    language?: string;
    lineNumbers?: boolean;
}
export declare const CodeView: import("@_linked/react/utils/LinkedComponent").LinkedComponent<CodeViewProps, Code, {
    text: import("@_linked/core/queries/SelectQuery").QueryPrimitive<string, import("@_linked/core/queries/SelectQuery").QShape<Code, null, "">, "text">;
}>;
export {};
