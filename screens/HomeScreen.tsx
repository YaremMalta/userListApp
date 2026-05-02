import { useEffect, useState } from "react";
import { View, Text, FlatList, Pressable } from "react-native";

export default function HomeScreen({ navigation }: any) {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    setUsers(data);
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => navigation.navigate("Detail", item)}
            style={{
              padding: 15,
              marginBottom: 10,
              backgroundColor: "#eee",
              borderRadius: 10,
            }}
          >
            <Text>{item.name}</Text>
            <Text style={{ color: "gray" }}>{item.email}</Text>
          </Pressable>
        )}
      />
    </View>
  );
}