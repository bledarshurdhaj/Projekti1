import React from "react";

import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
Foto,

} from "./footerstyles";

const Footer = () => {
return (
	<Box>
	<Foto>
		<img src={require('/Users/ar/Desktop/LABCourse-1/my-app/Projekti1/roi-app/src/foto/logo5.png')} alt='logo' />
		</Foto>
	<Container>

		<Row>

		<Column>
			<Heading>Kompania</Heading>
			<FooterLink href="/">Ballina</FooterLink>
			<FooterLink href="/rrethnesh">Rreth Nesh</FooterLink>
			<FooterLink href="/services">Shërbimet</FooterLink>
			<FooterLink href="/contact">Kontakt</FooterLink>
			<FooterLink href="/signup">Lajme</FooterLink>
			</Column>


		<Column>
			<Heading>Ndihmë</Heading>
			<FooterLink href="#">Pyetjet E Shpeshta</FooterLink>
			<FooterLink href="#">Politika E Privatësisë</FooterLink>
			<FooterLink href="#">Kushtet e  Përdorimi</FooterLink>
			<FooterLink href="#">Kontaktoni</FooterLink>
		</Column>
		<Column>
			<Heading>Kontakti</Heading>
			<FooterLink href="#">Rilindja Kombëtare,
Prishtin, Kosovo</FooterLink>
			<FooterLink href="#">Email: Info@Isp-Bledi.net</FooterLink>
			<FooterLink href="#">Tel: +383 (0) 45 888 855</FooterLink>


		</Column>


		</Row>
	</Container>
	</Box>
);
};
export default Footer;

