import React from "react"
import { View, Text, SafeAreaView, ScrollView } from "react-native"

import Movies from "../components/Movies";
import SearchBar from "../components/SearchBar"
import HeaderTabs from "../components/HeaderTabs"

export default function Home() {
  return (
    <SafeAreaView style={{ backgroundColor: "skyblue", flex: 1 }}>
      <View style={{ backgroundColor: "skyblue", padding: 8 }}>
        
        <SearchBar/>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 250,
        }}
      >
        <Text
          style={{
            flex: 1,
            color: "white",
            fontSize: 22,
            lineHeight: 30,
            marginLeft: 24,
            fontWeight: "900"
          }}
        >
          Movie
        </Text>
        <Movies/>
        <HeaderTabs/>
      </ScrollView>
    </SafeAreaView>
  )
}
