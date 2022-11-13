import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Calendar } from 'react-native-calendars';
import Colors from '../../utils/Colors';

const OneTimeCalendar = ({changeOneDay,oneDay}) => {
  return (
    <View
    style={{
      marginBottom: 20,
      borderRadius: 24,
      overflow: "hidden",
      padding: 20,
      backgroundColor: "#fff",

      shadowColor: "#c7c7c7",
      shadowOffset: {
        width: 0,
        height: 9,
      },
      shadowOpacity: 0.48,
      shadowRadius: 11.95,

      elevation: 18,
    }}
  ><Calendar
                dayComponent={(e) => (
                  <TouchableOpacity
                  disabled={e.state==="disabled"}
                    onPress={() => {
                      changeOneDay(e.date.dateString);
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: 5,
                        height: 32,
                        width: 32,
                        backgroundColor: e.marking?.selected
                          ? Colors.PRIMARY
                          : "white",
                        borderRadius: 99,
                        textAlign: "center",
                      }}
                    >
                      <Text
                        style={{
                          includeFontPadding: false,
                          fontSize: 18,
                          color: e.state==="disabled"?"grey":e.marking?.selected ? "white" : "black",
                        }}
                      >
                        {e.date.day}
                      </Text>
                    </View>
                  </TouchableOpacity>
                )}
                markedDates={oneDay}
              /></View>
  )
}

export default OneTimeCalendar