/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
// import GoalDaily from './GoalDaily';
import SelectComponent from "../../components/SelectComponent";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import { useNavigation } from "@react-navigation/native";
import Finish from "./Finish";
import Vocab from "./Vocab";
import Vocab_bana from "./Vocab_bana";
import Sound from "react-native-sound";
import data from "../../data";

export default function Vocab_2({ page, setPage }) {
  const navigation = useNavigation();
  const [data2, setData2] = useState();
  const handleButtonPress = () => {
    // Thực hiện chuyển sang trang mới tương ứng với page
    setPage((prev) => prev + 1);
    navigation.navigate("Vocab");
  };
  const [sound, setSound] = useState(null);
  const [linkAudio, setLinkAudio] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${data[page]}`
        );

        const json = await response.json();
        console.log({ res: json[0] });
        setData2(json[0]);
        setLinkAudio(json[0]?.phonetics[0]?.audio)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [page]);

  // console.log(id);
  //   const {itemId, otherParam} = route.params;
  //   console.log(JSON.stringify(itemId));
  const handlePlaySound = () => {
    console.log("co vo day")
    // Kiểm tra nếu âm thanh đang được phát thì dừng nó
    if (sound) {
      sound.stop();
      sound.release();
      setSound(null);
      return;
    }

    // Tạo mới đối tượng âm thanh từ URL
    const soundObj = new Sound(linkAudio, Sound.MAIN_BUNDLE, (error) => {
      
      if (error) {
        console.log('Không thể tải âm thanh', error);
        return;
      }
      // Phát âm thanh
      soundObj.play((success) => {
        if (success) {
          console.log('Âm thanh đã được phát thành công');
        } else {
          console.log('Lỗi khi phát âm thanh');
        }
      });
    });

    // Lưu trữ đối tượng âm thanh vào state
    setSound(soundObj);
  };
  return (
    <View
      style={{
        display: "flex",
        // justifyContent: 'center',
        // paddingTop: 30,
        backgroundColor: "#181A20",
        height: "100%",
        // paddingBottom: 80,
      }}
    >
      <Header style={styles.header} />
      {/* <ScrollView> */}

      <View style={styles.select}>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // paddingBottom: 80,
          }}
        >
          <View
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "white",
              height: "120%",
              width: "60%",
              borderRadius: 10,
              // paddingBottom: 80,
            }}
          >
            <View
              style={{
                paddingHorizontal: 10,
                paddingVertical: 20,
                flex: 1,
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 20,
                }}
              >
                {data2?.word}
                {data2?.phonetic}
              </Text>
              <View style={{ position: "absolute", top: 20, right: 10 }}>
                <TouchableOpacity onPress={handlePlaySound}>
                  <Image
                    style={{ height: 30, width: 30 }}
                    source={require("../../assets/Icons/sound.png")}
                  />
                </TouchableOpacity>
              </View>

              <Text
                style={{
                  paddingTop: 5,
                  fontSize: 15,
                  fontWeight: "500",
                }}
              >
                {data2?.meanings[0]?.partOfSpeech}
              </Text>
              <View style={{ flex: 1 }}>
                <ScrollView>
                  <Text
                    style={{
                      color: "#9933CC",
                      paddingTop: 5,
                    }}
                  >
                    {data2?.meanings[0]?.definitions[0]?.definition}
                  </Text>

                  <Text style={styles.sentense}>
                    {data2?.meanings[0]?.definitions[1]?.definition}
                  </Text>
                  <Text style={styles.mean}>mối bất hoà</Text>
                  <Text style={styles.sentense}>apple of the eye</Text>
                  <Text style={styles.mean}>đồng tử, con ngươi</Text>
                  <Text style={styles.mean}>vật quí báu phải giữ gìn nhất</Text>
                  <Text style={styles.sentense}>
                    the apple of Sodom ; Dead Sea apple
                  </Text>
                  <Text style={styles.mean}>
                    quả táo trông mã ngoài thì đẹp nhưng trong đã thối
                  </Text>
                  <Text style={styles.mean}>
                    (nghĩa bóng) thành tích bề ngoài, thành tích giả tạo
                  </Text>
                  <Text style={styles.sentense}>
                    the rotten apple injures its neighbours
                  </Text>
                  <Text style={styles.mean}>
                    (tục ngữ) con sâu làm rầu nồi canh
                  </Text>
                </ScrollView>
              </View>
            </View>
          </View>
        </View>
      </View>
      {/* </ScrollView> */}

      <View
        style={{
          height: "22%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          // marginTop: 50,
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={styles.button1}
          onPress={() => handleButtonPress(Finish)}
        >
          <Text style={{ color: "white" }}> FINISH</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button1}
          onPress={() => handleButtonPress()}
        >
          <Text style={{ color: "white" }}> NEXT</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          // paddingTop: 30,
          flex: 1,
          justifyContent: "flex-end",
        }}
      >
        {/* <Menu navigation={navigation} /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  select: {
    paddingTop: 50,
    height: "50%",
  },
  button1: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "#6949FF",
    margin: 10,
    width: "40%",
    color: "white",
    borderRadius: 30,
    display: "flex",
    justifyContent: "flex-end",
    marginTop: 100,
    alignItems: "center",
  },
  mean: {
    paddingTop: 5,
  },
  sentense: {
    color: "#0099FF",
    paddingTop: 5,
  },
});
