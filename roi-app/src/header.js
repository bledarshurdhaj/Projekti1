import React from "react";
import {
Box,
Container,
Row,
Column,
Heading,
} from "./headerstyles";

const Header = () => {
return (
	<Box>
	<h1 style={{ color: "green",
				textAlign: "center",
				marginTop: "-50px" }}>
		
	</h1>
	<Container>
		<Row>
		<Column>
			<Heading>About Us</Heading>

		</Column>
		<Column>
			<Heading>Services</Heading>

		</Column>
		<Column>

		</Column>
		<Column>
			<Heading>Social Media</Heading>
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Header;

