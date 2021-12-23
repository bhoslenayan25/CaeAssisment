import React, { Component } from "react";
import { View, Image, Text, FlatList, Pressable, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from "moment";
import { getRosterData } from './redux/dispatcher'
import { formatDate, log, navigateToScreen } from "../../Utilities/Utility";
import { colorCode } from "../../Utilities/AppConstants";
import style from "./style";
import { modalScreens } from "../../Navigation/Constants";

class Roster extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 'today',
            rosterList: this.getSeperateRoster()
        }
    }

    componentDidMount() {
        this.props.getRosterData()
    }

    renderItem = (item, index) => {
        let showTitleDate = false;
        let prevDate = index > 0 ? this.state.rosterList[index - 1].Date : ''
        if (item.Date !== prevDate) {
            prevDate = item.Date
            showTitleDate = true;
        }

        return (
            <View key={index}>
                {
                    showTitleDate ?
                        <View style={style.headerDate}>
                            <Text style={style.date}>{formatDate(item.Date, 'DD-MM-YYYY', 'DD MMM YYYY')}</Text>
                        </View> : null
                }
                <Pressable
                    style={{ backgroundColor: '#fff' }}
                    onPress={() => {
                        if (item.DutyCode !== 'OFF') {
                            navigateToScreen(modalScreens.DETAILS, item)
                        }
                    }}
                >
                    {
                        item.DutyCode.toLowerCase() === 'flight'
                            ? <View style={style.row}>
                                <Image source={require('../../Assets/airplane.png')} style={{ width: 25, height: 25 }} resizeMode="contain" />
                                <Text style={style.flightText}>{item.Departure} - {item.Destination}</Text>
                                <Text style={style.departure}>{item.Time_Arrive} - {item.Time_Depart}</Text>
                            </View>
                            : item.DutyCode.toLowerCase() === 'layover'
                                ? <View style={style.row}>
                                    <Image source={require('../../Assets/work.png')} style={{ width: 25, height: 25 }} resizeMode="contain" />
                                    <View style={{ flex: 1 }}>
                                        <Text style={style.text}>Layover</Text>
                                        <Text style={{ marginLeft: 15 }}>{item.Destination}</Text>
                                    </View>
                                    <Text style={style.departure}>{item.Time_Depart}</Text>
                                </View>
                                : item.DutyCode.toLowerCase() === 'standby'
                                    ? <View style={style.row}>
                                        <Image source={require('../../Assets/standby.png')} style={{ width: 25, height: 25 }} resizeMode="contain" />
                                        <View style={{ flex: 1 }}>
                                            <Text style={style.text}>Standby</Text>
                                            <Text style={{ marginLeft: 15 }}>{item.DutyID}</Text>
                                        </View>
                                        <View>
                                            <Text style={{ marginLeft: 15 }}>Match Crew</Text>
                                            <Text style={style.departure}>{item.Time_Depart}</Text>
                                        </View>
                                    </View>
                                    : item.DutyCode.toLowerCase() === 'off'
                                        ? <View style={style.row}>
                                            <Image source={require('../../Assets/work_off.png')} style={{ width: 25, height: 25 }} resizeMode="contain" />
                                            <Text style={style.flightText}>Week Off</Text>
                                        </View>
                                        : <View style={style.row}>
                                            <Image source={require('../../Assets/work.png')} style={{ width: 25, height: 25 }} resizeMode="contain" />
                                            <View style={{ flex: 1 }}>
                                                <Text style={style.text}>{item.DutyCode}</Text>
                                                <Text style={{ flex: 1, marginLeft: 15 }}>{item.Departure} - {item.Destination}</Text>
                                            </View>
                                            <Text style={style.departure}>{item.Time_Arrive} - {item.Time_Depart}</Text>
                                        </View>
                    }
                </Pressable>
            </View>
        )
    }

    onRefresh() {
        this.props.getRosterData()
    }

    onTabPress(tab) {
        this.setState({
            selected: tab,
            rosterList: tab == 'today' ? this.getSeperateRoster() : this.props.roster.rosterList
        })
    }

    getSeperateRoster = () => {
        let rL = this.props.roster.rosterList
        let today = rL.filter(item => {
            return item.Date == moment(Date()).format('DD/MM/YYYY')
        })
        return today
    }

    render() {

        if (this.props.roster.rosterList.length < 1) {
            return (
                <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                    <Text>{this.props.roster.errorMessage}</Text>
                </View>
            )
        } else {
            return (
                <View style={{ marginTop: 28, flexDirection: 'column' }}>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity onPress={() => this.onTabPress('today')} style={{ ...style.tabStyle, backgroundColor: this.state.selected == 'today' ? colorCode.GREEN : colorCode.WHITE }}>
                            <Text style={{ color: this.state.selected == 'today' ? colorCode.WHITE : colorCode.GREEN }}>
                                Today's Duties
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.onTabPress('all')} style={{ ...style.tabStyle, backgroundColor: this.state.selected == 'all' ? colorCode.GREEN : colorCode.WHITE }}>
                            <Text style={{ color: this.state.selected == 'all' ? colorCode.WHITE : colorCode.GREEN }}>
                                All Events
                            </Text>
                        </TouchableOpacity>
                    </View>
                    {
                        this.state.rosterList.length > 0 ?
                            <FlatList
                                style={{ marginBottom: 40 }}
                                data={this.state.rosterList}
                                renderItem={({ item, index }) => this.renderItem(item, index)}
                                extraData={this.state.rosterList}
                                onRefresh={() => this.onRefresh()}
                                refreshing={this.props.roster.loading}
                            /> :
                            <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                                <Text>No events for today</Text>
                            </View>
                    }
                </View>
            )

        }
    }


}



const mapStateToProps = (state, ownProps) => {
    return {
        roster: state.roster
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({ getRosterData }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Roster);