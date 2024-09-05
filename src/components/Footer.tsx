import { FooterProp } from "@lib/types";
import { Text } from "@mantine/core";

export default function Footer({year,name,studentid}:FooterProp) {
  return (
    <>
      <Text ta="center" my="sm" color="dimmed" mt="sm" >Copyright ©{year} {name} {studentid}</Text>
    </>
  );
}
