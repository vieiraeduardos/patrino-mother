import React, {Component} from "react";

import {
  View,
  ScrollView,
  FlatList
} from 'react-native';

import {

  Avatar,
  Badge,
  Card,
  Icon,
  Text,
  ThemeProvider

} from "react-native-elements";

import BackHeader from '../components/BackHeader';

export default class QuestionView extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    const navigation = this.props.navigation.state.params.navigation;

   return (
     <ThemeProvider>
       <BackHeader navigation={navigation} target="FAQView"/>

       <ScrollView>
        <Card title={this.props.navigation.state.params.item.title}>
          <Text style={{marginBottom: 10}}>
            {this.props.navigation.state.params.item.content}
          </Text>
        </Card>
       </ScrollView>

     </ThemeProvider>

    );
 }
}
