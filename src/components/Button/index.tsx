import {  TouchableOpacityProps } from "react-native";
import { Box, Container, Icon, Title } from "./styles";

type Props = TouchableOpacityProps & {
	title: string;
	icon?: string | null;
}

export function Button({title,icon=null,...rest}: Props){

return (

	<Container 
	
	{...rest}
	>
		{icon ? 
		(
		<Box>
			<Icon name={icon}/>
			<Title>{title}</Title>
		</Box>
		) : 
		<Title>{title}</Title>}
	
	</Container>
	
	);
}