import { View,FlatList,Image} from 'react-native'
import React from 'react'
import styles from './styles'
import Header from '../../components/Header'
import Button from '../../components/Button';
import Texts from '../../components/Texts'
import { API } from '../../api';
import { selectedNomineeCard } from '../../constants/colors';

export default function Voting() {
  const [data,setData]=React.useState([]);
  const [selectedData,setSelectedData]=React.useState([]);
  React.useEffect(()=>{
    fetchData();
  },[])
  const fetchData = () =>{
    API.getBallotData({
      success:(response)=>{
        setData(response.data.items)
      },
      error:(error)=>{
        console.log('err',error)
      }
    })
  }
  const handleSelect = (id,category) =>{
    let newData = [...selectedData];
    let index= newData.findIndex((item)=>item.category===category);
    if(index>=0){
      newData[index].id =id; 
      // update
    }
    else{
      newData = [...selectedData,{id,category}]
      // insert
    }
    setSelectedData(newData)  
  }
  const renderCard = (element,category)=>{
    let selected = false;
    let checkSelected = selectedData.filter(function(item){
      if(item.id===element.id && item.category===category){
        selected = true
      }
    })
    return(
      <View style={!selected?styles.card:{...styles.card,backgroundColor:selectedNomineeCard}} key={element.id}>
        <Texts style={styles.nomineeText}>{element.title}</Texts>
        <Image 
        source={{uri:element.photoUrL}}
        style={styles.nomineeImage}
        />
        <Button 
        style={styles.button}
        title="Select"
        onPress={()=>handleSelect(element.id,category)}
        />
      </View>
    )
  }
  const contentRender = ({item}) =>{
    return(
      <>
      <View style={styles.categoryContainer}>
        <Texts style={styles.categoryText}>{item.id}</Texts>
      </View>
      {/* Card Wrapper */}
      <View style={styles.cardWrapper}>
        {
          item.items.map((element,index)=>(
            renderCard(element,item.id)
          ))
        }
      </View>
      </>
    )
  }
  return (
    <View style={styles.container}>
      <Header />
      {/* Category */}
      <FlatList 
        data={data}
        renderItem={contentRender}
        keyExtractor={item => item.id}
      />
      <Button 
      title="Submit Vote"
      style={styles.submitButton}
      />
    </View>
  )
}