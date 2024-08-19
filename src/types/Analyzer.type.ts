export interface Header {
    AUTHOR: string;
    TITLE: string;
    REPOLINK: string;
    BUGLINK: string;
    COPYLINK: string;
    LOADLINK: string;
    [key: string]: string;
}

export interface Content {
    type: "H1" | "H2" | "H3" | "H4" | "H5" | "H6" | "Text" | "Quote" | "XAML";
    content: string;
}
