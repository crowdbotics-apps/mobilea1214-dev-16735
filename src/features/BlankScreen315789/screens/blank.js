import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = {}

  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_0_89} />
      <ImageBackground style={styles.ImageBackground_0_767} />
      <View style={styles.View_0_769}>
        <Text style={styles.Text_0_769}>Jane</Text>
      </View>
      <View style={styles.View_0_770}>
        <Text style={styles.Text_0_770}>San francisco, ca</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/029c/6d01/9e6c3d6bcf3747f6cec8632b5dbd7df4"
        }}
        style={styles.ImageBackground_0_771}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a0b0/b0a9/db500ecad42e992cbb89d4c1e911e543"
        }}
        style={styles.ImageBackground_0_776}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc16/4445/fa6c162a884527860dbc916d93d786b5"
        }}
        style={styles.ImageBackground_0_772}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ea44/7ac6/99d847dbcf832e2abe636b95ae90f890"
        }}
        style={styles.ImageBackground_0_773}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7163/1dd0/6d268be8ca4f657a720f75467a1a09a7"
        }}
        style={styles.ImageBackground_0_775}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/318a/050d/1f313857fd718370de44719dd6d7dc7b"
        }}
        style={styles.ImageBackground_0_774}
      />
      <View style={styles.View_0_777}>
        <View style={styles.View_I0_777_0_43} />
        <View style={styles.View_I0_777_0_46}>
          <Text style={styles.Text_I0_777_0_46}>see more</Text>
        </View>
      </View>
      <View style={styles.View_0_779}>
        <View style={styles.View_I0_779_0_43} />
        <View style={styles.View_I0_779_0_46}>
          <Text style={styles.Text_I0_779_0_46}>follow jane</Text>
        </View>
      </View>
      <View style={styles.View_0_781}>
        <View style={styles.View_I0_781_0_43} />
        <View style={styles.View_I0_781_0_46}>
          <Text style={styles.Text_I0_781_0_46}>message</Text>
        </View>
      </View>
      <View style={styles.View_0_778}>
        <View style={styles.View_I0_778_0_588}>
          <View style={styles.View_I0_778_0_590} />
          <View style={styles.View_I0_778_0_594}>
            <View style={styles.View_I0_778_0_593}>
              <View style={styles.View_I0_778_0_595} />
              <View style={styles.View_I0_778_0_596} />
              <View style={styles.View_I0_778_0_597} />
              <View style={styles.View_I0_778_0_598}>
                <View style={styles.View_I0_778_0_599} />
                <View style={styles.View_I0_778_0_600} />
              </View>
              <View style={styles.View_I0_778_0_601} />
              <View style={styles.View_I0_778_0_602} />
              <View style={styles.View_I0_778_0_603} />
            </View>
          </View>
          <View style={styles.View_I0_778_0_660}>
            <View style={styles.View_I0_778_0_662} />
          </View>
          <View style={styles.View_I0_778_0_671}>
            <View style={styles.View_I0_778_0_675} />
            <View style={styles.View_I0_778_0_672}>
              <View style={styles.View_I0_778_0_673} />
              <View style={styles.View_I0_778_0_674} />
            </View>
          </View>
          <View style={styles.View_I0_778_0_626}>
            <View style={styles.View_I0_778_0_628}>
              <View style={styles.View_I0_778_0_630} />
            </View>
          </View>
          <View style={styles.View_I0_778_0_666}>
            <View style={styles.View_I0_778_0_747} />
          </View>
        </View>
        <View style={styles.View_I0_778_0_591} />
      </View>
      <View style={styles.View_0_768}>
        <View style={styles.View_I0_768_0_49}>
          <View style={styles.View_I0_768_0_51}>
            <View style={styles.View_I0_768_0_52} />
            <View style={styles.View_I0_768_0_53} />
            <View style={styles.View_I0_768_0_54} />
          </View>
          <View style={styles.View_I0_768_0_55}>
            <View style={styles.View_I0_768_0_56} />
          </View>
          <View style={styles.View_I0_768_0_60}>
            <View style={styles.View_I0_768_0_61} />
          </View>
        </View>
        <View style={styles.View_I0_768_0_66}>
          <View style={styles.View_I0_768_0_67}>
            <Text style={styles.Text_I0_768_0_67}>9:27</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_0_89: {
    width: 375,
    minWidth: 375,
    height: 812,
    minHeight: 812,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_0_767: {
    width: 128,
    minWidth: 128,
    height: 128,
    minHeight: 128,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 124,
    top: 76
  },
  View_0_769: {
    width: 92,
    minWidth: 92,
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 142,
    top: 236
  },
  Text_0_769: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 36,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.54
  },
  View_0_770: {
    width: 133,
    minWidth: 133,
    height: 15,
    minHeight: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 121,
    top: 292
  },
  Text_0_770: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.52
  },
  ImageBackground_0_771: {
    width: 167,
    minWidth: 167,
    height: 220,
    minHeight: 220,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 491,
    resizeMode: "cover"
  },
  ImageBackground_0_776: {
    width: 167,
    minWidth: 167,
    height: 220,
    minHeight: 220,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 192,
    top: 1130,
    resizeMode: "cover"
  },
  ImageBackground_0_772: {
    width: 167,
    minWidth: 167,
    height: 310,
    minHeight: 310,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 192,
    top: 491,
    resizeMode: "cover"
  },
  ImageBackground_0_773: {
    width: 167,
    minWidth: 167,
    height: 310,
    minHeight: 310,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 192,
    top: 811,
    resizeMode: "cover"
  },
  ImageBackground_0_775: {
    width: 167,
    minWidth: 167,
    height: 310,
    minHeight: 310,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 1040,
    resizeMode: "cover"
  },
  ImageBackground_0_774: {
    width: 167,
    minWidth: 167,
    height: 310,
    minHeight: 310,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 721,
    resizeMode: "cover"
  },
  View_0_777: {
    width: 343,
    minWidth: 343,
    height: 52,
    minHeight: 52,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 1382,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_777_0_43: {
    flexGrow: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: "2",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_I0_777_0_46: {
    flexGrow: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 137.287109375,
    top: 19
  },
  Text_I0_777_0_46: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.52
  },
  View_0_779: {
    width: 343,
    minWidth: 343,
    height: 52,
    minHeight: 52,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 339,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_779_0_43: {
    flexGrow: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: "2",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_I0_779_0_46: {
    flexGrow: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 125.287109375,
    top: 19
  },
  Text_I0_779_0_46: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.52
  },
  View_0_781: {
    width: 343,
    minWidth: 343,
    height: 52,
    minHeight: 52,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 407,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_781_0_43: {
    flexGrow: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: "2",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_I0_781_0_46: {
    flexGrow: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 139.287109375,
    top: 19
  },
  Text_I0_781_0_46: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.52
  },
  View_0_778: {
    width: 375,
    minWidth: 375,
    height: 83,
    minHeight: 83,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 1466,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_778_0_588: {
    flexGrow: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_778_0_590: {
    width: 375,
    height: 83,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I0_778_0_594: {
    width: 40,
    height: 40,
    top: 9,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 11,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I0_778_0_593: {
    width: 15.55634880065918,
    minWidth: 15.55634880065918,
    height: 14.05634880065918,
    minHeight: 14.05634880065918,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 12,
    top: 13
  },
  View_I0_778_0_595: {
    width: 1,
    minWidth: 1,
    height: 7,
    minHeight: 7,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1.7783203125,
    top: 6.056396484375,
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.800000011920929
  },
  View_I0_778_0_596: {
    width: 1,
    minWidth: 1,
    height: 7,
    minHeight: 7,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 12.7783203125,
    top: 6.056396484375,
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.800000011920929
  },
  View_I0_778_0_597: {
    width: 12,
    minWidth: 12,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1.7783203125,
    top: 13.056396484375,
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.800000011920929
  },
  View_I0_778_0_598: {
    width: 15.55634880065918,
    minWidth: 15.55634880065918,
    height: 15.55634880065918,
    minHeight: 15.55634880065918,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_I0_778_0_599: {
    width: 8.485280990600586,
    minWidth: 8.485280990600586,
    height: 8.485280990600586,
    minHeight: 8.485280990600586,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 7.0712890625,
    top: 0.0001220703125,
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_I0_778_0_600: {
    width: 8.485280990600586,
    minWidth: 8.485280990600586,
    height: 8.485280990600586,
    minHeight: 8.485280990600586,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_I0_778_0_601: {
    width: 1,
    minWidth: 1,
    height: 4,
    minHeight: 4,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 5.7783203125,
    top: 9.056396484375,
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.800000011920929
  },
  View_I0_778_0_602: {
    width: 1,
    minWidth: 1,
    height: 4,
    minHeight: 4,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8.7783203125,
    top: 9.056396484375,
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.800000011920929
  },
  View_I0_778_0_603: {
    width: 4,
    minWidth: 4,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 5.7783203125,
    top: 8.056396484375,
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.800000011920929
  },
  View_I0_778_0_660: {
    width: 40,
    height: 40,
    top: 9,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 82,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I0_778_0_662: {
    width: 15.853553771972656,
    minWidth: 15.853553771972656,
    height: 15.853553771972656,
    minHeight: 15.853553771972656,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 12,
    top: 12
  },
  View_I0_778_0_671: {
    width: 70,
    height: 40,
    top: 9,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 153,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I0_778_0_675: {
    width: 70,
    height: 40,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_I0_778_0_672: {
    width: 13,
    minWidth: 13,
    height: 13,
    minHeight: 13,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 28.5,
    top: 13.5
  },
  View_I0_778_0_673: {
    width: 1,
    height: 13,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 6,
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I0_778_0_674: {
    width: 13,
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 6,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I0_778_0_626: {
    width: 40,
    height: 40,
    top: 9,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 254,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I0_778_0_628: {
    width: 18,
    minWidth: 18,
    height: 16,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10,
    top: 12
  },
  View_I0_778_0_630: {
    width: 18,
    minWidth: 18,
    height: 16,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_I0_778_0_666: {
    width: 40,
    height: 40,
    top: 9,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 324,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I0_778_0_747: {
    width: 10.434782981872559,
    minWidth: 10.434782981872559,
    height: 15.00001049041748,
    minHeight: 15.00001049041748,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    top: 12
  },
  View_I0_778_0_591: {
    flexGrow: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 120,
    top: 70,
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_0_768: {
    width: 375,
    minWidth: 375,
    height: 44,
    minHeight: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_768_0_49: {
    flexGrow: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 293,
    top: 15,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_768_0_51: {
    width: 25,
    minWidth: 25,
    height: 12,
    minHeight: 12,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 43,
    top: 2,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_768_0_52: {
    width: 22,
    height: 11.333333015441895,
    top: 0.333343505859375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: "1"
  },
  View_I0_768_0_53: {
    width: 1.3333333730697632,
    height: 4,
    top: 4,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 23
  },
  View_I0_768_0_54: {
    width: 18,
    height: 7.333333492279053,
    top: 2.333343505859375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2,
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I0_768_0_55: {
    width: 21,
    height: 15,
    top: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_768_0_56: {
    width: 15.333333015441895,
    height: 11,
    top: 1.333343505859375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.6669921875
  },
  View_I0_768_0_60: {
    width: 18,
    minWidth: 18,
    height: 12,
    minHeight: 12,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 2,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_768_0_61: {
    width: 17,
    height: 10.666666984558105,
    top: 0.666656494140625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.6669921875
  },
  View_I0_768_0_66: {
    flexGrow: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21,
    top: 8,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_768_0_67: {
    flexGrow: 1,
    height: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.3330078125,
    top: 6
  },
  Text_I0_768_0_67: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3333333432674408
  },
  View_2: { height: 1549 }
})
