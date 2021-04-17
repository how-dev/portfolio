export const scrollBarLight: string = "::-webkit-scrollbar-track {\n" +
    "        background-color: #9c8e85;\n" +
    "      }\n" +
    "      ::-webkit-scrollbar {\n" +
    "        width: 8px;\n" +
    "      }\n" +
    "      ::-webkit-scrollbar-thumb {\n" +
    "        background: #695b52;\n" +
    "      }"

export const scrollBarDark: string = "::-webkit-scrollbar-track {\n" +
    "        background-color: #2c403b;\n" +
    "      }\n" +
    "      ::-webkit-scrollbar {\n" +
    "        width: 8px;\n" +
    "      }\n" +
    "      ::-webkit-scrollbar-thumb {\n" +
    "        background: #0c1916;\n" +
    "      }"

export const changeTheme: (scroll: string, window: string) => any = (scroll, window) => {
    const styleScroll: any = document.getElementById("scroll")
    styleScroll.innerHTML = scroll;
    const topWindow: any = document.getElementById("topColor")
    topWindow.content = window
}
