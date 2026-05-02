import { View, Text } from "react-native";

export default function DetailScreen({ route }: any) {
  const user = route.params;

  return (
    <View style={{ flex: 1, padding: 20, justifyContent: "center", alignItems:"center"}}>
      <Text style={{ fontSize: 24, fontWeight: "bold" , color:"navy"}}>
        {user.name}
      </Text>
      <Text style = {{color:"#1E3A8A" ,fontSize:22 }}>{user.email}</Text>
      <Text style ={{ fontWeight :"bold" , color:"lightblue" ,fontSize:20}}>{user.phone}</Text>
    </View>
  );
}