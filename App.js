import React, { useState, useEffect } from 'react';
import { StyleSheet, View, SectionList, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import BaseView from './src/components/BaseView';
import { authInit, authSuccess, authError } from './src/reducers/authReducer';
import { Api } from './src/utils/Api';
import { useDispatch, useSelector } from 'react-redux';
Icon.loadFont();

export default function App() {

  const dispatch = useDispatch()
  const DATA = useSelector((state) => state.auth.data)

  const [data, setData] = useState([])

  const [showHideValue, setShowHideValue] = useState([])

  useEffect(() => {
    dispatch(Api('bank-holidays.json', 'GET', null, false, authInit, authSuccess, authError))
  }, [])

  useEffect(() => {
    let temp = []
    for (let i = 0; i < Object.keys(DATA).length; i++) {
      temp.push({ "id": i, "title": DATA[Object.keys(DATA)[i]].division, "data": DATA[Object.keys(DATA)[i]].events })
    }
    setData(temp)

  }, [DATA])

  const FlatListItemSeparator = () => {
    return (
      <View style={styles.listItemSeparatorStyle} />
    );
  };

  function pushArray(item) {
    if (!showHideValue.includes(item)) {
      setShowHideValue(arr => arr.concat(item));
    } else {
      setShowHideValue(arr => arr.filter(i => i != item));
    }
  }

  return (
    <BaseView>
      <View style={styles.container}>

        {data.length > 0 &&
          <SectionList
            sections={data}
            keyExtractor={(item, index) => item + index}
            ItemSeparatorComponent={FlatListItemSeparator}
            renderSectionHeader={({ section }) => (
              <View style={{ flexDirection: "row", justifyContent: "space-between", backgroundColor: '#CDDC89', }} >
                <Text style={styles.sectionHeaderStyle}>
                  {section.title}
                </Text>
                <TouchableOpacity onPress={() => {
                  pushArray(section.id)
                }}>
                  <Icon
                    name="angle-down"
                    size={40}
                    color="black"
                    style={{ marginRight: 20 }} />
                </TouchableOpacity>
              </View>
            )}
            renderItem={(item, index) => (
              <View>
                {showHideValue.includes(item.section.id) ?
                  <Text
                    style={styles.sectionListItemStyle} >
                    {item.item.title}
                  </Text>
                  : null}
              </View>

            )}
          />
        }
      </View>
    </BaseView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  sectionHeaderStyle: {
    fontSize: 20,
    padding: 5,
    color: 'white',
  },
  sectionListItemStyle: {
    fontSize: 15,
    padding: 10,
    color: 'black',
    backgroundColor: '#F5F5F5',
  },
  listItemSeparatorStyle: {
    height: 0.1,
    width: '100%',
    backgroundColor: 'F5F5F5',
  },
});