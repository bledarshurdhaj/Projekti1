import styled from 'styled-components';

export const Box = styled.div`
padding: 80px 30px;
background: BLACK;
position: end;
bottom: 0;



@media (max-width: 1000px) {
	padding: 70px 30px;
}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;

	max-width:60%;
	margin: 0 auto;   
margin-right:2cm;


`

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;


`;

export const Row = styled.div`

display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(185px, 1fr));
grid-gap: 20px;

}
`;

export const FooterLink = styled.a`
color: #fff;
margin-bottom: 30px;
font-size: 15px;
text-decoration: none;

&:hover {
	color: green;
	transition: 200ms ease-in;
}
`;

export const Heading = styled.p`
font-size: 24px;
color: #fff;
margin-bottom: 30px;
font-weight: bold;

`;

export const Foto = styled.div`
margin-left:1cm;




`;
