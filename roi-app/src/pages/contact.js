import { Container } from "../components/Styles/Container.styles";
import GlobalStyles from "../components/Styles/Global";
import content from "../components/Cards/content.contact";
import Card from "../components/Cards/Cards.contact";
import Footer from '../components/footer.js';
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    header: "#ebfbff",
    body: "#bbbb"
  },
  mobile: "768px",
};


function Contact() {
  return (

    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />

        <Container>
          {content.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </Container>


        <Footer />
      </>
    </ThemeProvider>
  );
}

export default Contact;
