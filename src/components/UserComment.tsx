import { CommentProp } from "@lib/types";
import { Title, Rating, Text, Divider, Group } from "@mantine/core";


export default function UserComment({id,name, rating, comment}:CommentProp){
    return(
        <>
        <Divider my="sm"/>
        <Group justify="center">
            <Title order={4} >{name}</Title> 
            <Rating value={rating} readOnly />
        </Group>    
        <Text c="dimmed" ta="center">{comment}</Text>
        </>
    );
}