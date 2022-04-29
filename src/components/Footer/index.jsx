import React from "react";
import { FooterStyled } from "./styles";

export default function Footer() {
	return (
		<FooterStyled>
			<ul>
				<li>
         <h3>Sobre Nós: </h3> 
         <p>Somos a Pet Store, a maior loja de produtos direcionados aos animais de Vacaria e região!</p>
          </li>
				<li>
         <h3> Contatos:</h3>
         <p>(54) 9 9999-9999</p>
         <p>(54) 3232-3232</p>
          </li>
				<li>
          <h3>Endereço:</h3>
          <p>Rua: Marechel Teodoro, Nº 143, Centro</p>
          <p>Vacaria - RS</p>
          </li>
			</ul>
		</FooterStyled>
	);
}
