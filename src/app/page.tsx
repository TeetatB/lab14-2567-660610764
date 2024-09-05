"use client";
import Footer from "@components/Footer";
import Review from "@components/Review";
import { Container, Text,  Title } from "@mantine/core";
import { Comments } from "@lib/comments";
import UserComment from "@components/UserComment";
import PageSwitch from "@components/PageSwitch";

export default function Home() {
  return (
    <Container size="600px">
      <Title order={2}>Food Review 🍕</Title>
      {Review()}
      {Comments.map((comm) => (
        <UserComment 
          key = {comm.id}
          {...comm}
        />
      ))}
      {PageSwitch()}
      <Footer year="2024" name="Teetat Boontham" studentid="660610764"/>
    </Container>
  );
}
