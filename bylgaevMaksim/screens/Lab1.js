import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Button from "../components/Button";

const Lab1 = () => {
    const [count, setCount] = useState(0);
    return (
        <View
            style={{
                justifyContent: "center",
                alignItems: "center",
                flex: 1,
                gap: 10,
            }}
        >
            <Text>{count}</Text>
            <Button
                onPress={() => {
                    setCount(Math.pow(count, count));
                }}
                title={"Кнопка"}
            />
        </View>
    );
};

export default Lab1;