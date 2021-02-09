import React, {useState} from "react";
// 1. import `NativeBaseProvider` component
import { Container, Header, Content, Left, Body, Right, Text, Title, Footer, FooterTab, Button, Icon, Item, Input, Grid, Col, Card, CardItem, Form, Label } from 'native-base';
import { StyleSheet } from "react-native";

export default function App() {
  let [activeTab, setActiveTab] = useState('tab1');
  let [cardType, setCardType] = useState('debit');

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
          This is Sparta!!!
        </Text>
        <Item>
          <Icon name="ios-search" />
          <Input placeholder="Search" />
          <Icon name="ios-people" />
        </Item>
        <Grid>
          <Col style={{ backgroundColor: '#635DB7', height: 200 }}>
            <Button vertical style={styles.addUserButton}>
              <Icon type="AntDesign" name="adduser" />
              <Text>Create Contact</Text>
            </Button>
          </Col>
          <Col style={{ backgroundColor: '#00CE9F', height: 200 }}>
            <Button vertical>
              <Icon type="AntDesign" name="heart" />
              <Text>Create Animal</Text>
            </Button>
          </Col>
        </Grid>

        <Card style={styles.recentAnimalsCard}>
          <CardItem header>
            <Text>Recent Animals</Text>
          </CardItem>
          <CardItem>
            <Text>Animal 1</Text>
          </CardItem>
          <CardItem>
            <Text>Animal 2</Text>
          </CardItem>
          <CardItem>
            <Text>Animal 3 {activeTab}</Text>
          </CardItem>
        </Card>
        <Form>
          <Item stackedLabel>
            <Label>Username</Label>
            <Input />
          </Item>
          {/* <Item picker>
            <Picker
              note
              mode="dropdown"
              style={{ width: 200 }}
              placeholder="Select your SIM"
              placeholderStyle={{ color: "#bfc6ea" }}
              selectedValue={cardType}
              onValueChange={setCardType.bind(this)}
            >
              <Picker.Item label="Wallet" value="key0" />
              <Picker.Item label="ATM Card" value="key1" />
              <Picker.Item label="Debit Card" value="debit" />
              <Picker.Item label="Credit Card" value="key3" />
              <Picker.Item label="Net Banking" value="key4" />
            </Picker>
          </Item> */}
          <Item stackedLabel last>
            <Label>Password</Label>
            <Input />
          </Item>
        </Form>

      </Content>
      <Footer>
        <FooterTab>
          <Button vertical active={activeTab == 'tab1'} onPress={e => setActiveTab('tab1')}>
            <Icon type="AntDesign" name="menu-unfold" />
            <Text>Apps</Text>
          </Button>
          <Button vertical active={activeTab == 'tab2'} onPress={e => setActiveTab('tab2')}>
            <Icon name="camera" />
            <Text>Camera</Text>
          </Button>
          <Button vertical active={activeTab == 'tab3'} onPress={e => setActiveTab('tab3')}>
            <Icon active name="navigate" />
            <Text>Navigate</Text>
          </Button>
          <Button vertical active={activeTab == 'tab4'} onPress={e => setActiveTab('tab4')}>
            <Icon name="person" />
            <Text>Contact</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
}

const styles = StyleSheet.create({
  addUserButton: {
    marginVertical: 42,
    paddingVertical: 42,
  },
  recentAnimalsCard: {
    marginHorizontal: 42,
    padding: 15,
    backgroundColor: 'orange'
  }
});