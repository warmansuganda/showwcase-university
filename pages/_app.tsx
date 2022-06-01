import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";

import Header from "src/components/Header";

import GlobalStyle from "../styles/global";
import theme from "../themes/default";
import "../locales/i18n";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Showcase University</title>
        <meta name="description" content="Generated by create next app" />
        <link
          type="image/x-icon"
          rel="icon"
          href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAABRxJREFUWEe9l3tsU1Ucx7/n3Lq1m26lZffSrt108jKGwR5MBJREUROjkPCQh4pBCAmID5gwQmBKlDEcQeIDeQZDgkazh0t88DARFOS1TiARIYBhY13fzdjItnbrPebcPRhrb9sx8PdPk57f43N/55zf+f0I4hMKQKNPS3ucQlhNKJ0OQNfXlAABwtjPTEaJ1+u4AKATgBzLPYmhoEmVJKvA6FuEkMJYzvquM4Yymcrbm5zOhm6YiOZqAPTBYcOMCYxOI8CegQQO02XyMgFypdvt9kTKSCQAjVGy5IHJ20AwYVDBe43ZWQb6jt9lr+mfjf4AGqOUPgVgv96bwP29kKk+l/1YX4i+ANQoWcYD8qn7E7zLKwN50u+yn+nZjl4ASZLETiZU37u0q30GqxFY6CW32+3iGj0AmqGiaREjZMf9/PrbR0Je5nM7d/OtUAD0JlOmIJPrkYITQqDT6aDVauH3+xUVs8kEq9UKn88Hvm40GlBXXw+Hw6msp6Q8hPb2AILBoOr3ULljpMfjucIBqFE0l4CgqL92SkoK8nJz8HBmJpKSdPjl4CHw/+bNnYPp016GrcYGQRCQk5uDqqpqVFRVwevzYfLEiQgEg/B4PKit/Qs3m5vDQQj7yud0LOcACUbJHIiEmj1mDPbt3QVJFFFXV48amw2jR41CTs44UMqL422RZRlXrl6FzVaL7OxsjBwxHA6nE4uXLMW58+fBGAsL4XM1JpLUoaY8jUD4/QyTsWOzUVa6CecvXIBhyBBMefop6PX6qMfk5s1m/Hb0KPjviOGPYmPpZtTYahEKhSLYhSYQg2gqJ4TMjOT1iYICbNtahk+2bIXZbMKG4vVxndH1H2xA/Y0bWLtmNdauK8Yfx0+AZyhcWDUxSuY2AFo1gB+rK2G323G9rg6TJ02KC+D4iT9htVpgtVgwfcYsnDx1Ws2unQOEb063esH48di/bw8a7I3KniYlJcUFEAgEcOnyZWRkZOC1BQtx+gyvO5ElKkBW1iPKiW9rbcXaNWGXJCrMho8+Vg7s9h278PfFi3cHkJiYCIPBgIL8fOzdPbAatWDhIjQ0dG1dc6Rr2I0UNQM92C88/xwO7P86rvT3KM1//Q0cPhL7TeMArf27m76RkpOTMW/ObJSWbBwQwLriD3Hgm2/RcuuWqh0DgsQgmb8jwCtqWhZLOlatXIlX588dEEB5RSU2bS5TSrTqAWTsIC9EuRqB2NSU+HUqer8Qc+eoMkY0raj6ASWlm5UKqiaMdU6KWoq5oU6nxayZM/DplrIBZaBwVRG+L69AWxsvMxGF+VyNWuUxMoimLYSQFWqavATv3bUjZhnusW9pacHCxUtw9Njv0aA/97ka31Oe41RRzNIQzTU1bb0+FY+NHo2EhASluk2d+gxyx+VAkkTFhD/LvN4fOnwEDXY7Ojo6cPGfS2hqalIFEFjncLfbfa23IRkimt6khOyMlWfeG4hiGvSpeiRqExX1YCCoBHO53dFS3uuaga3wuxxfAui4syUD/Qkg+bEgBrPOGDtH5Y4XvV6vg/u5oyk1SOkFBOzkYALEsGUMZKLfZT8LQHmf/8+2nAFKW85PJh/bFIk4mBik9HzC5C9ASN69yAZPOwhdGs9g0hOPpqWliTKlswHhs0FBEHk5DYUqPLxB7E57X3+xhtMHUkUxQyDC2wTk3YGAMMZ2Uplu9Xrt/97NcNo/ljKeG0QxjxJhHUCeZUDXHbwtAUA+zMBK/C5Xbbzj+X9B/dqgoEFymwAAAABJRU5ErkJggg=="
        />
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
