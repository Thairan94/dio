import React from 'react';

import {
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Image,
  Text,
  Pressable,
  Linking
} from 'react-native';

const colorGit = '#010409';
const profileGit =
  'https://avatars.githubusercontent.com/u/76590647?s=400&u=a7986f899d5d574763c3f27e92a72e5392a087d8&v=4';

const urlGitHub = 'https://github.com/Thairan94';

const App = () => {
  const handlePressGoToGitHub = async () => {
    const res = await Linking.canOpenURL(urlGitHub);
    if (res) {
      await Linking.openURL(urlGitHub);
    }
  };
  return (
    <SafeAreaView style={style.container}>
      <StatusBar backgroundColor={colorGit} barStyle="light-content" />
      <View style={style.content}>
        <Image style={style.avatar} source={{uri: profileGit}} />
        <Text style={[style.title, style.name]}>Thairan Santos</Text>
        <Text style={[style.title, style.subtitle]}>
          Developer Front End
        </Text>
        <Pressable onPress={handlePressGoToGitHub}>
          <View style={style.button}>
            <Text style={{fontWeight: 'bold'}}>Open in Github</Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    backgroundColor: colorGit,
    flex: 1,
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
    padding: 20,
  },
  avatar: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 2,
  },
  title: {
    marginTop: 10,
    color: 'white',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
  },
  button: {
    marginTop: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
  },

});
