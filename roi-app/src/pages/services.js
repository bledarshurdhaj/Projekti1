import { ThemeProvider } from "styled-components";
import { Container } from "../components/Styles/Container.styles";
import GlobalStyles from "../components/Styles/Global";
import content from "../components/content.js";
import Card from "../components/cards";
import Footer from '../components/footer.js';

const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333",
  },
  mobile: "768px",
};

function Services() {
  return (
    <ThemeProvider theme={theme}>
      <>
    <GlobalStyles/>
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