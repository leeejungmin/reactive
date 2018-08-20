import React, {Component} from 'react';
import { StyleSheet, Text, View, Button
,TouchableOpacity} from 'react-native';


export default class App extends Component {
  constructor(){

  super()
  this.state={}/// why???
  }


  render() {
    let rows=[]
    let nums = [[1,2,3],[4,5,6],[7,8,9],[0,0,'=']]
    for(let i=0; i<4; i++){
      let row =[]
      for(let j =0; j <3; j++){
        row.push(<TouchableOpacity style={styles.btn}><Text style={styles.btntext}>{nums[i][j]}</Text></TouchableOpacity>)
      }
      rows.push(<View style={styles.row}>{row}</View>)
    }
//// 잘 볼것 ... {}은 변수와 집합 안에 ()은 명령
    let operations=['+','-','/','*']
    let ops = []

    for(let i=0; i<4; i++){
      ops.push(<TouchableOpacity style={styles.btn}><Text style={styles.white}>{operations[i]}</Text></TouchableOpacity>)
    }

    return (
      <View style={styles.container}>
        <View style={styles.result}>
          <Text style={styles.calculationText}>11*11</Text>
        </View>

        <View style={styles.calculations}>
          <Text style={styles.resultText}>121</Text>
        </View>
        <View style={styles.buttons}>
          <View style={styles.numbers}>
                {rows}
            </View>
          <View style={styles.operations}>
                  {ops}

          </View>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  resultText:{
      fontSize:30,
      color:'white'
  },

  calculationText:{
      fontSize:25,
      color:'white'
  },

  white:{
    color:'white'
  }
,
  btntext:{
     fontSize:30
  },

  btn:{
    flex:1,
    alignItems:'center',
    alignSelf:'stretch',
    justifyContent:'center'
  },


   result: {
     flex:2,
     backgroundColor: 'red',
     justifyContent:'center',
     alignItems:'flex-end'

  },

  row:{
    flexDirection: 'row',
    flex:1,
    justifyContent:'space-around',
    alignItems: 'center'
  },
  calculations: {
    flex:1,
    backgroundColor: 'green',

  },
  buttons: {
    flex:7,
    flexDirection:'row'
  },

  numbers: {
    flex:3,
    backgroundColor:'yellow'

  },
  operations: {
    flex:1,
    backgroundColor: 'black',
    justifyContent:'space-around',
    alignItems:'stretch'

  },
});

// AppRegistry.registerComponent('AwesomeProject', () => App);
