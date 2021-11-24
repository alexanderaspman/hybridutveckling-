import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  Pressable,
  SafeAreaView,
  Image,
  Modal
} from "react-native";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const BlaBlaBla = props => {
    return (
      <TextInput
        {...props}
        placeholder="Initial Text"
        placeholderColor="grey"
        editable
        maxLenght={200}
        style={styles.input}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.headers}>
        <Text style={styles.h1}>Hello World! </Text>
        <Text style={styles.title}>First react native app</Text>
        <Text>
          this is a paragraph explaining what this is app os all about. As you
          can see there are already many components inclding text, images andn
          buttons.
        </Text>
      </View>
      <Pressable
        style={[styles.button, styles.buttonClose]}
        onPress={() => setModalVisible(!modalVisible)}
      >
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <Image style={styles.boo} source={require("./assets/boo.jpg")} />
        </Modal>
      </Pressable>

      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <SafeAreaView>
            <Text style={styles.modalText}>
              This is what i would like to get out of this course
            </Text>
            <TextInput
              multiline
              numberOfLines={4}
              placeholder="Initial Text"
              style={styles.input}
            />
            <Text style={styles.modalText}>
              An emoji describing how you are feeling about the course:
            </Text>
            <Image style={styles.logo} source={require("./assets/icon.png")} />
          </SafeAreaView>

          <View style={styles.alignSubmit}>
            <Pressable onPress={() => setModalVisible(true)}>
              <Text style={styles.submit}>Submit</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "flex-start"
  },
  image: {
    width: 390,
    height: 650,
    flex: 1,
    justifyContent: "center"
  },
  modalText: {
    width: 250,
    fontSize: 18,
    fontWeight: "bold"
  },
  input: {
    width: 300,
    padding: 10,
    placeholderColor: "grey",
    marginBottom: 20,
    backgroundColor: "rgb(199, 199, 199)"
  },
  headers: {
    backgroundColor: "rgb(125 ,184, 235)",
    paddingTop: 15,
    paddingBottom: 15,
    marginBottom: 40
  },
  h1: {
    fontSize: 30,
    fontWeight: "bold"
  },
  title: {
    fontSize: 23
  },
  logo: {
    width: 100,
    height: 100
  },
  alignSubmit: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  submit: {
    color: "rgb(83 ,149, 207)",
    fontSize: 20
  },
  boo: {
    width: 400,
    height: 300
  }
});
