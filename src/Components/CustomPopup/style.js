import { StyleSheet } from 'react-native';
import { colorCode } from '../../Utilities/AppConstants';
 
export default StyleSheet.create({
    container: { justifyContent: 'center', alignItems: 'center', flex: 1 },
    outPopup: { position: "absolute", width: "100%", height: "100%", backgroundColor: "transparent" },
    view:{ backgroundColor: colorCode.WHITE, width: "80%", },
    closeView: { alignSelf:'flex-end',marginRight:-12,marginTop:-12 },
    closeIcon: { width: 25, height: 25,tintColor:colorCode.GREEN  }
});
