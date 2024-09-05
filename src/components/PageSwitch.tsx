import { Group, Pagination } from "@mantine/core";

export default function PageSwitch(){
    return(
        <Group gap="sm" justify="center" mt="md" >
            <Pagination  total={20} color="orange" />
        </Group>
    );
}