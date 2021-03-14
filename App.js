import React, { Component, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class App extends Component {

  constructor() {
    super();
    this.pageCount = [1, 2, 3]  
  }

  render() {
    var pages = this.pageCount[this.pageCount.length - 1];
      return(
        <View style={styles.container}>
          <TouchableOpacity onPress={() => {this.pageCount.push(pages + 1); pages=this.pageCount[this.pageCount.length - 1]; console.log(this.pageCount)}}><Text>Add Text</Text></TouchableOpacity>
          <View>
            {this.pageCount.map((item, key) => {
              return <Text key={key}>{item}</Text>
            })}
          </View>
        </View>
      )
  }
}   

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


