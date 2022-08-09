import { ThemeProvider } from "styled-components";
import { Container } from "../components/Styles/Container.styles";
import GlobalStyles from "../components/Styles/Global";
import content from "../components/Cards/content.services";
import Card from "../components/Cards/Cards.services";
import Footer from '../components/footer.js';

const theme = {
  colors: {
    header: "#ebfbff",
    body: "#bbbb",

  },
  mobile: "768px",
};

function Services() {
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

export default Services;