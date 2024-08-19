export type XamlComponents = {
    Apage: string;
    BtnCopy: string;
    BtnIssue: string;
    BtnLoad: string;
    BtnRepo: string;
    Footer: string;
    Framework: string;
    Header: string;
};

export type XamlMds = {
    H1: string;
    H2: string;
    H3: string;
    H4: string;
    H5: string;
    H6: string;
    Text: string;
};

export type XamlStyles = {
    Icons: string;
    PresetControls: string;
    Styles: string;
};

export type XamlTemplate = {
    components: XamlComponents;
    markdown: XamlMds;
    styles: XamlStyles;
};

export type XamlAvaliableTypes =
    | "Apage"
    | "BtnCopy"
    | "BtnIssue"
    | "BtnLoad"
    | "BtnRepo"
    | "Footer"
    | "Framework"
    | "Header"
    | "H1"
    | "H2"
    | "H3"
    | "H4"
    | "H5"
    | "H6"
    | "Text"
    | "Icons"
    | "PresetControls"
    | "Styles";
