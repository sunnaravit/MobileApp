import React, { useEffect } from 'react';
import {
  Text,
  View,
  Image,
  Animated,
  Dimensions,
  StyleSheet,
  ImageBackground,
  ActivityIndicator,
  TouchableWithoutFeedback,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies, selectAllMovies } from '../redux/Api';


const { width, height } = Dimensions.get("window");

const Movies = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.movies);
  const movies = useSelector(selectAllMovies);

  const newSeasonScrollX = React.useRef(new Animated.Value(0)).current;

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" style={styles.loader} />;
  }

  return (
    <Animated.FlatList
        horizontal
        pagingEnabled
        snapToAlignment="center"
        snapToInterval={width}
        scrollEventThrottle={10}
        decelerationRate={5}
        contentContainerStyle={{
          marginTop: 10,
        }}
        data={movies}
        keyExtractor={(item) => `${item.id}`}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: newSeasonScrollX } } }],
          { useNativeDriver: false }
        )}
        renderItem={({ item }) => {
          return (
            <TouchableWithoutFeedback
            >
              <View
                style={{
                  width: width,
                  alignItems: "center",
                  justifyContent: "start",
                }}
              >
                <ImageBackground
                  resizeMode="cover"
                  source={{uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`}}
                  style={{
                    width: width * 0.8,
                    height: height * 0.5,
                    justifyContent: "flex-end",
                  }}
                  imageStyle={{
                    borderRadius: 40,
                  }}
                >
             
                </ImageBackground>
                <View style={{ marginHorizontal: 24,  marginTop: 16 }}>
                  <Text
                    style={{
                      color: "#fff",
                      fontSize: 20,
                      lineHeight: 28,
                      fontWeight: "600",
                      marginBottom: 6
                    }}
                  >
                    {item.title}
                  </Text>
                  <Text
                    style={{
                      color: "#fff",
                      fontSize: 16,
                      lineHeight: 22,
                    }}
                  >
                    {item.overview}
                  </Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
          );
        }}
      />
  );
};

export default Movies;

const styles = StyleSheet.create({
  loader: {
    marginTop: 'auto',
    marginBottom: 'auto'
  },
  container: {
    flexDirection: 'row',
    marginVertical: 10
  },
  dataContainer: {
    flexDirection: 'row'
  }
});