import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

function Sugesstion({Data}) {

   const DisplayProgress = ({item}) => {
       return(
           <>
           <View>
               
           </View>
           </>
       )
   }

  return (
   <FlatList
          data={Data}
          renderItem={DisplayProgress}
          keyExtractor={(item) => item.content_id.toString()}
        />
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default Sugesstion;