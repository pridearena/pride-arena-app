import * as React from "react"
import { View, ViewStyle, ScrollView, ImageURISource } from "react-native"
import { Text } from "../text"
import { Card, Divider } from "react-native-elements";
import { color } from "../../theme";


export enum EventType {
  basketball = "basketball",
  football = "football"
}

export interface EventData {
  type: EventType
  title: string
  date: string
  hostName: string
  neighborhood: string
}

export interface ScrollEventListProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: ViewStyle
  title: string
  events: EventData[]
}

function getImage(eventType: EventType): ImageURISource {
  switch(eventType) {
    case EventType.basketball:
      return require("../../images/basketball.png")
    case EventType.football:
        return require("../../images/football.png")
    default:
      return {uri: ""}
  }
}

function renderEventCard(eventData: EventData): JSX.Element {
  return (
    <View>
      <Card 
        image={getImage(eventData.type)}
        imageStyle={{width: "100%", height: 60}}
        featuredTitle={eventData.title}
        containerStyle={{margin: "0%", backgroundColor: "white"}}>
        <Text style={{height: 30, fontWeight: "bold", color: color.text}}>
          {eventData.date}
        </Text>
        <Text style={{color: color.text}}>
          <Text style={{height: 30, fontWeight: "bold", color: color.text}}>Hosted By: </Text>
          {eventData.hostName}
        </Text>
        <Text style={{color: color.text}}>
          <Text style={{height: 30, fontWeight: "bold", color: color.text}}>Neighborhood: </Text>
          {eventData.neighborhood}
        </Text>
      </Card>
      <Divider
      />
    </View>
  )
}

/**
 * Stateless functional component for your needs
 *
 * Component description here for TypeScript tips.
 */
export function ScrollEventList(props: ScrollEventListProps) {
  // grab the props
  const { style } = props

  return (
    <View style={style}>
      <Card
        title={props.title}
        titleStyle={{fontSize: 25, alignSelf: "flex-start" }}
        containerStyle={{
          margin: "0%",
          paddingLeft: "0%",
          paddingRight: "0%",
          paddingTop: 20,
          paddingBottom: 27,
          backgroundColor: "white"
        }}
        dividerStyle={{ height: 0, margin: "0%"}}
        wrapperStyle={{margin: "0%", padding: "0%", height: 25}}
      />
      <ScrollView>
        {props.events.map(eventData => renderEventCard(eventData))}
      </ScrollView>
    </View>
  )
}
