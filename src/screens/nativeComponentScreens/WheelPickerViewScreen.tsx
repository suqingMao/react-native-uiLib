import * as React from "react";

import { Text, View, WheelPicker } from "react-native-ui-lib/src";

interface InterfaceProps {}

interface InterfaceState {
  value: string;
  items: {
    value: string;
    label: string;
  }[];
}

export default class WheelPickerViewScreen extends React.PureComponent<
  InterfaceProps,
  InterfaceState
> {
  static navigationOptions = ({ navigation }) => {
    const { state } = navigation;
    return {
      title: `${state.params.title}`,
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      value: "common lisp",
      items: [
        { value: "python", label: "python" },
        { value: "javascript", label: "javascript" },
        { value: "common lisp", label: "lisp" },
        { value: "objective c", label: "objective c" },
        { value: "java", label: "java" },
      ],
    };
  }

  private onValueChange = (itemValue) => {
    this.setState({ value: itemValue });
  };

  public render() {
    return (
      <View flex center>
        <Text>{"Wheel Picker"}</Text>
        <Text>{`Selected Value is: ${this.state.value}`}</Text>
        <WheelPicker
          selectedValue={this.state.value}
          onValueChange={this.onValueChange}
          style={{ width: 200 }}
        >
          {this.state.items.map((item) => {
            return <WheelPicker.Item key={item.value} value={item.value} label={item.label} />;
          })}
        </WheelPicker>
      </View>
    );
  }
}
