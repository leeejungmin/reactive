import React, {Component} from 'react';
import { StyleSheet, Text, View, Button
,TouchableOpacity} from 'react-native';


export default class App extends Component {
  constructor(){

  super()
  this.state={
    resultText:"",
    calculationText:""
    }/// why???

    this.operations = ['DEL','+','-','/','*']
  }

calculateResult(){
    const text= this.state.resultText
    console.log(text, eval(text))
    this.setState({
      calculationText : eval(text)
    })
    //now parse this text ex - 3+3+6*5/2+7
    //why it is declare const
  }

validate(){
  const text = this.state.resultText
  switch (text.slice(-1)) {
    case '+':
    case '-':
    case '*':
    case '/':
      return false



  }
  return true
}
buttonPressed(text){
  console.log(text)

  if(text == '='){
    return this.validate()&&this.calculateResult()
  }
  this.setState(
    {resultText: this.state.resultText+text}
    // state를 업데이
  )
}

operate(operation) {
  switch(operation){
      case 'DEL':

       let text = this.state.resultText.split('')
       // why he use split?? sans faire ca, il serait acune problem;;
       //let , cons == l'utiliser
       text.pop()

       this.setState({
         resultText: text.join('')
         // avant il declare comme juste join(''), ca marche pas
         // c'est a dire que il y a espace suivane
         //pop() et join() il faut autiliser tout
       })
       break
       // break 선언해야 on peut recommence
       case '+':
       case '-':
       case '*':
       case '/':

          // const lastChar = this.state.resultText.split('').pop()
          // if(this.operations.indexOf(lastchar)> 0) return
          // pourqoui??? c'est pour empecher une erruer
          if(this.state.text =="" )
            return
            // il n'y a plus , je peux retourner avec return

            this.setState({
              resultText: this.state.resultText + operation

            })
  }
}




  render() {
    let rows=[]
    let nums = [[1,2,3],[4,5,6],[7,8,9],['.',0,'=']]
    for(let i=0; i<4; i++){
      let row =[]
      for(let j =0; j <3; j++){
        row.push(<TouchableOpacity key={nums[i][j]} onPress={()=>this.buttonPressed(nums[i][j])} style={styles.btn}><Text style={styles.btntext}>{nums[i][j]}</Text></TouchableOpacity>)
      }
      rows.push(<View  key={i} style={styles.row}>{row}</View>)
    }
//// 잘 볼것 ... {}은 변수와 집합 안에 ()은 명령
    let ops = []

    for(let i=0; i<5; i++){
      ops.push(<TouchableOpacity key={this.operations[i]} style={styles.btn} onPress={()=> this.operate(this.operations[i])}><Text style={styles.white}>{this.operations[i]}</Text></TouchableOpacity>)
    }
    // ops.push(<View style={styles.ops}>{})
    return (
      <View style={styles.container}>
        <View style={styles.result}>
          <Text style={styles.resultText}>{this.state.resultText}</Text>
        </View>

        <View style={styles.calculations}>
          <Text style={styles.calculationText}>{this.state.calculationText}</Text>
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
      color:'black'
  },

  calculationText:{
      fontSize:25,
      color:'black'
  },

  white:{
    color:'white',
    fontSize:25,
  }
,
  btntext:{
     fontSize:30,
     color:'white'
  },

  btn:{
    flex:1,
    alignItems:'center',
    alignSelf:'stretch',
    justifyContent:'center'
  },


   result: {
     flex:2,
     backgroundColor: 'white',
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
    backgroundColor: 'white',



  },
  buttons: {
    flex:7,
    flexDirection:'row'
  },

  numbers: {
    flex:3,
    backgroundColor:'#434343',


  },
  operations: {
    flex:1,

    backgroundColor: '#636363',
    justifyContent:'space-around',
    alignItems:'stretch'

  },
});

// AppRegistry.registerComponent('AwesomeProject', () => App);
