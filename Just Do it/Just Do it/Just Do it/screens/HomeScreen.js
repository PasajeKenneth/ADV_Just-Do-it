import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, TextInput, FlatList, StyleSheet, ImageBackground } from "react-native";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase.config";
import { signOut } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [user, setUser] = useState({});
  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        // Read initial data from a database if needed
      } else {
        // Handle when the user is not authenticated
      }
    });

    // Cleanup the subscription when the component is unmounted
    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigation.navigate("Login");
      })
      .catch((error) => {
        // Handle sign-out errors
      });
  };

  const addTodo = () => {
    if (todoText.trim() !== "") {
      const newTodo = { id: todos.length + 1, text: todoText };
      setTodos([...todos, newTodo]);
      setTodoText("");
    }
  };

  const removeTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const removeAllTodos = () => {
    setTodos([]);
    // You may also delete todos from the database if needed
  };

  const renderTodoItem = ({ item }) => (
    <View style={{ marginVertical: 8 }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
        <View style={{ borderWidth: 1, borderColor: "black", padding: 12, borderRadius: 8, flex: 1, backgroundColor: "white" }}>
          <Text>{item.text}</Text>
        </View>
        <TouchableOpacity onPress={() => removeTodo(item.id)}>
          <Text style={[styles.button, { backgroundColor: "red" }]}>Remove</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <ImageBackground source={require("../assets/Background.png")} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text>{user?.email}</Text>
        <Text style={styles.title}>TODO-LIST</Text>

        <View style={{ marginTop: 16 }}>
          <TextInput
            placeholder="Add a new todo"
            value={todoText}
            onChangeText={(text) => setTodoText(text)}
            style={{
              borderWidth: 1,
              borderColor: "black",
              backgroundColor: "white",
              padding: 8,
              marginBottom: 8,
            }}
          />
          <TouchableOpacity onPress={addTodo} style={styles.addButton}>
            <Text style={{ color: "white" }}>Add Todo</Text>
          </TouchableOpacity>
        </View>

        <FlatList data={todos} renderItem={renderTodoItem} keyExtractor={(item) => item.id.toString()} style={{ marginTop: 16 }} />

        <View style={styles.buttonsContainer}>
          <TouchableOpacity onPress={removeAllTodos} style={[styles.button, { backgroundColor: "red" }]}>
            <Text style={{ color: "white" }}>Delete All Todos</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleLogout} style={[styles.button, { backgroundColor: "red", marginTop: 16 }]}>
            <Text style={{ color: "white" }}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    justifyContent: "center", // Center content vertically
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 16,
    textAlign: "center", // Center text horizontally
  },
  addButton: {
    backgroundColor: "blue",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonsContainer: {
    marginTop: 16,
  },
  button: {
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});

export default HomeScreen;
