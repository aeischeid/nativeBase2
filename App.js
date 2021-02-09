import React from "react";
// 1. import `NativeBaseProvider` component
import { Container, Header, Content, Left, Body, Right, Text, Title, Footer, FooterTab, Button, Icon } from 'native-base';
import { StyleSheet } from "react-native";

export default function App() {
  // 2. Use at the root of your app
  return (
    <Container>
      <Header>
        <Left/>
        <Body>
          <Title>VetLink</Title>
        </Body>
        <Right />
      </Header>
      <Content>
        <Text>
          This is Content Section
        </Text>
      </Content>
      <Footer>
        <FooterTab>
          <Button vertical>
            <Icon name="apps" />
            <Text>Apps</Text>
          </Button>
          <Button vertical>
            <Icon name="camera" />
            <Text>Camera</Text>
          </Button>
          <Button vertical active>
            <Icon active name="navigate" />
            <Text>Navigate</Text>
          </Button>
          <Button vertical>
            <Icon name="person" />
            <Text>Contact</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});