import { View,FlatList,Image} from 'react-native'
import React from 'react'
import styles from './styles'
import Header from '../../components/Header'
import Button from '../../components/Button';
import Texts from '../../components/Texts'
import { API } from '../../api';

export default function Voting() {
  const [data,setData]=React.useState([]);
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
  const renderCard = (element,category)=>{
    return(
      <View style={styles.card} key={element.id}>
        <Texts style={styles.nomineeText}>{element.title}</Texts>
        <Image 
        source={{uri:element.photoUrL}}
        style={styles.nomineeImage}
        />
        <Button 
        style={styles.button}
        title="Select"
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
    </View>
  )
}