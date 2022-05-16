import React from 'react'
import { View } from 'react-native';
import Modal from 'react-native-modal';
import styles from './styles';
export default AppModal=({children,title,toggleValue,updateModal})=> {
    const closeEditModal=()=>{
      updateModal(false)
    }
    return (
          <Modal
            isVisible={toggleValue}
            onBackdropPress={closeEditModal}
            header={title}
            style={{}}
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalWrapper}>
                {children}
              </View>
            </View>
          </Modal>
       
    )
}
