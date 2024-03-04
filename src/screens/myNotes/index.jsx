//import liraries
import React, {Component} from 'react';
import {View, FlatList, SafeAreaView} from 'react-native';
import Header from '../../components/router/header';
import {screenStyle} from '../../styles/screenStyle';
import FloatActionButton from '../../components/uı/floatActionButton';
import {mockData} from '../../utils/mockData';
import NoteCard from '../../components/myNotes/noteCard';
import {ADDNOTE} from '../../utils/routes';

// create a component
const MyNotes = ({navigation}) => {
  return (
    <SafeAreaView style={screenStyle.container}>
      <View style={screenStyle.container}>
        <Header />
        <FlatList
          data={mockData}
          renderItem={({item}) => (
            <NoteCard item={item} navigation={navigation} />
          )}
          keyExtractor={item => item.id}
        />
        <FloatActionButton onPress={() => navigation.navigate(ADDNOTE)} />
      </View>
    </SafeAreaView>
  );
};

export default MyNotes;
